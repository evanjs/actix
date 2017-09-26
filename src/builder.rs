//! Definition of the `ActorBuilder` trait and implementation
//!
use std;
use futures::{future, Stream};

use actor::{Actor, MessageHandler, StreamHandler};
use address::{Address, SyncAddress};
use arbiter::Arbiter;
use context::Context;

/// Builds an actor
///
/// All `Actor` types implements `ActorBuilder` trait. `ActorBuilder` has to
/// be used for actor creation and running. Builder start actor in current `Arbiter`
/// (i.e `Arbiter::handle()`). All trait's methods can return different types of
/// address (address type needs to be infered)
///
/// # Examples
///
/// ```rust
/// use actix::*;
///
/// // initialize system
/// System::init();
///
/// struct MyActor;
/// impl Actor for MyActor {}
///
/// let addr: Address<MyActor> = MyActor.start();
/// ```
///
/// If address of newly created actor is not required, explicit `()` annotation needs
/// to be use (some discussion on this topic is in #27336)
///
/// # Examples
///
/// ```rust
/// use actix::*;
///
/// struct MyActor;
/// impl Actor for MyActor {}
///
/// fn main() {
///    // initialize system
///    System::init();
///
///    let _: () = MyActor.start();
/// }
/// ```
///
/// It is possible to start actor and connect to stream.
/// `StreamHandler` trait has to be implemented for this actor.
///
/// # Examples
///
/// ```rust,ignore
/// #![allow(unused_variables)]
/// extern crate actix;
/// extern crate futures;
///
/// use futures::Stream;
/// use actix::prelude::*;
///
/// // initialize system
/// System::init();
///
/// struct MyActor;
/// impl Actor for MyActor {}
///
/// struct Message;
///
/// impl StreamHandler<Message> for MyActor {}
/// impl MessageHandler<Message> for MyActor {
///     type Item = ();
///     type Error = ();
///     type InputError = ();
/// }
///
/// fn start<S>(stream: S)
///      where S: futures::Stream<Item=Message, Error=()>
/// {
///     let _: () = MyActor.start_with(stream);
/// }
/// ```
///
/// If for actor initialization execution context is required then
/// `create` and `create_with` method should be used. Both methods are equivalent to
/// `start` and `start_with` methods except both accept closure which has to return
/// instance of actor.
pub trait ActorBuilder<A, Addr=()>
    where A: Actor + Sized + 'static,
          Self: AddressExtractor<A, Addr>,
{
    /// Start new actor, returns address of newly created actor.
    /// This is special method if Actor implement `Default` trait.
    fn run() -> Addr where Self: Default;

    /// Start new actor, returns address of newly created actor.
    fn start(self) -> Addr;

    /// Start actor and register stream
    fn start_with<S, E: 'static>(self, stream: S) -> Addr
        where S: Stream<Error=E> + 'static,
              S::Item: 'static,
              A: MessageHandler<S::Item, InputError=E> + StreamHandler<S::Item, InputError=E>;

    fn create<F>(f: F) -> Addr
        where F: 'static + FnOnce(&mut Context<A>) -> A;

    fn create_with<S, F, E: 'static>(stream: S, f: F) -> Addr
        where F: 'static + FnOnce(&mut Context<A>) -> A,
              S: Stream<Error=E> + 'static,
              S::Item: 'static,
              A: MessageHandler<S::Item, InputError=E> + StreamHandler<S::Item, InputError=E>;
}

impl<A, Addr> ActorBuilder<A, Addr> for A
    where A: Actor,
          Self: AddressExtractor<A, Addr>,
{
    fn run() -> Addr where Self: Default
    {
        let mut ctx = Context::new(Self::default());
        let addr =  <Self as AddressExtractor<A, Addr>>::get(&mut ctx);
        ctx.run(Arbiter::handle());
        addr
    }

    fn start(self) -> Addr
    {
        let mut ctx = Context::new(self);
        let addr =  <Self as AddressExtractor<A, Addr>>::get(&mut ctx);
        ctx.run(Arbiter::handle());
        addr
    }

    fn start_with<S, E: 'static>(self, stream: S) -> Addr
        where S: Stream<Error=E> + 'static,
              S::Item: 'static,
              A: MessageHandler<S::Item, InputError=E> + StreamHandler<S::Item, InputError=E>,
    {
        let mut ctx = Context::new(self);
        ctx.add_stream(stream);
        let addr =  <Self as AddressExtractor<A, Addr>>::get(&mut ctx);
        ctx.run(Arbiter::handle());
        addr
    }

    fn create<F>(f: F) -> Addr
        where F: 'static + FnOnce(&mut Context<A>) -> A,
    {
        let mut ctx = Context::new(unsafe{std::mem::uninitialized()});
        let addr =  <Self as AddressExtractor<A, Addr>>::get(&mut ctx);

        Arbiter::handle().spawn_fn(move || {
            let srv = f(&mut ctx);
            let old = ctx.replace_actor(srv);
            std::mem::forget(old);
            ctx.run(Arbiter::handle());
            future::ok(())
        });
        addr
    }

    fn create_with<S, F, E: 'static>(stream: S, f: F) -> Addr
        where F: 'static + FnOnce(&mut Context<A>) -> A,
              S: Stream<Error=E> + 'static,
              S::Item: 'static,
              A: MessageHandler<S::Item, InputError=E> + StreamHandler<S::Item, InputError=E>,
    {
        let mut ctx = Context::new(unsafe{std::mem::uninitialized()});
        let addr =  <Self as AddressExtractor<A, Addr>>::get(&mut ctx);

        Arbiter::handle().spawn_fn(move || {
            let srv = f(&mut ctx);
            let old = ctx.replace_actor(srv);
            std::mem::forget(old);
            ctx.add_stream(stream);
            ctx.run(Arbiter::handle());
            future::ok(())
        });
        addr
    }
}

#[doc(hidden)]
pub trait AddressExtractor<A, T> where A: Actor {

    fn get(ctx: &mut Context<A>) -> T;
}

impl<A> AddressExtractor<A, Address<A>> for A where A: Actor {

    fn get(ctx: &mut Context<A>) -> Address<A> {
        ctx.address()
    }
}

impl<A> AddressExtractor<A, SyncAddress<A>> for A where A: Actor {

    fn get(ctx: &mut Context<A>) -> SyncAddress<A> {
        ctx.sync_address()
    }
}

impl<A> AddressExtractor<A, ()> for A where A: Actor {

    fn get(_: &mut Context<A>) -> () {
        ()
    }
}