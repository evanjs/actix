(function() {var implementors = {};
implementors["actix"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"actix/prelude/enum.ActorState.html\" title=\"enum actix::prelude::ActorState\">ActorState</a>","synthetic":true,"types":["actix::actor::ActorState"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"actix/prelude/enum.Running.html\" title=\"enum actix::prelude::Running\">Running</a>","synthetic":true,"types":["actix::actor::Running"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/prelude/struct.SpawnHandle.html\" title=\"struct actix::prelude::SpawnHandle\">SpawnHandle</a>","synthetic":true,"types":["actix::actor::SpawnHandle"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/prelude/struct.Context.html\" title=\"struct actix::prelude::Context\">Context</a>&lt;A&gt;","synthetic":true,"types":["actix::context::Context"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/dev/struct.ContextParts.html\" title=\"struct actix::dev::ContextParts\">ContextParts</a>&lt;A&gt;","synthetic":true,"types":["actix::contextimpl::ContextParts"]},{"text":"impl&lt;A, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/dev/struct.ContextFut.html\" title=\"struct actix::dev::ContextFut\">ContextFut</a>&lt;A, C&gt;","synthetic":true,"types":["actix::contextimpl::ContextFut"]},{"text":"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/prelude/struct.MessageResult.html\" title=\"struct actix::prelude::MessageResult\">MessageResult</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as <a class=\"trait\" href=\"actix/prelude/trait.Message.html\" title=\"trait actix::prelude::Message\">Message</a>&gt;::<a class=\"associatedtype\" href=\"actix/prelude/trait.Message.html#associatedtype.Result\" title=\"type actix::prelude::Message::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix::handler::MessageResult"]},{"text":"impl&lt;A, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/prelude/struct.AtomicResponse.html\" title=\"struct actix::prelude::AtomicResponse\">AtomicResponse</a>&lt;A, T&gt;","synthetic":true,"types":["actix::handler::AtomicResponse"]},{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/prelude/struct.Response.html\" title=\"struct actix::prelude::Response\">Response</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix::handler::Response"]},{"text":"impl&lt;A, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/prelude/struct.ActorResponse.html\" title=\"struct actix::prelude::ActorResponse\">ActorResponse</a>&lt;A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix::handler::ActorResponse"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/dev/channel/struct.AddressSender.html\" title=\"struct actix::dev::channel::AddressSender\">AddressSender</a>&lt;A&gt;","synthetic":true,"types":["actix::address::channel::AddressSender"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/dev/channel/struct.AddressReceiver.html\" title=\"struct actix::dev::channel::AddressReceiver\">AddressReceiver</a>&lt;A&gt;","synthetic":true,"types":["actix::address::channel::AddressReceiver"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/dev/struct.Envelope.html\" title=\"struct actix::dev::Envelope\">Envelope</a>&lt;A&gt;","synthetic":true,"types":["actix::address::envelope::Envelope"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"actix/prelude/enum.SendError.html\" title=\"enum actix::prelude::SendError\">SendError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix::address::SendError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"actix/prelude/enum.MailboxError.html\" title=\"enum actix::prelude::MailboxError\">MailboxError</a>","synthetic":true,"types":["actix::address::MailboxError"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/prelude/struct.Addr.html\" title=\"struct actix::prelude::Addr\">Addr</a>&lt;A&gt;","synthetic":true,"types":["actix::address::Addr"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/struct.WeakAddr.html\" title=\"struct actix::WeakAddr\">WeakAddr</a>&lt;A&gt;","synthetic":true,"types":["actix::address::WeakAddr"]},{"text":"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/prelude/struct.Recipient.html\" title=\"struct actix::prelude::Recipient\">Recipient</a>&lt;M&gt;","synthetic":true,"types":["actix::address::Recipient"]},{"text":"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/struct.WeakRecipient.html\" title=\"struct actix::WeakRecipient\">WeakRecipient</a>&lt;M&gt;","synthetic":true,"types":["actix::address::WeakRecipient"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/dev/struct.Mailbox.html\" title=\"struct actix::dev::Mailbox\">Mailbox</a>&lt;A&gt;","synthetic":true,"types":["actix::mailbox::Mailbox"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/actors/mocker/struct.Mocker.html\" title=\"struct actix::actors::mocker::Mocker\">Mocker</a>&lt;T&gt;","synthetic":true,"types":["actix::actors::mocker::Mocker"]},{"text":"impl&lt;T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/io/struct.Writer.html\" title=\"struct actix::io::Writer\">Writer</a>&lt;T, E&gt;","synthetic":true,"types":["actix::io::Writer"]},{"text":"impl&lt;I, T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/io/struct.FramedWrite.html\" title=\"struct actix::io::FramedWrite\">FramedWrite</a>&lt;I, T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix::io::FramedWrite"]},{"text":"impl&lt;I, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/io/struct.SinkWrite.html\" title=\"struct actix::io::SinkWrite\">SinkWrite</a>&lt;I, S&gt;","synthetic":true,"types":["actix::io::SinkWrite"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/registry/struct.Registry.html\" title=\"struct actix::registry::Registry\">Registry</a>","synthetic":true,"types":["actix::registry::Registry"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/registry/struct.SystemRegistry.html\" title=\"struct actix::registry::SystemRegistry\">SystemRegistry</a>","synthetic":true,"types":["actix::registry::SystemRegistry"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/sync/struct.SyncArbiter.html\" title=\"struct actix::sync::SyncArbiter\">SyncArbiter</a>&lt;A&gt;","synthetic":true,"types":["actix::sync::SyncArbiter"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/sync/struct.SyncContext.html\" title=\"struct actix::sync::SyncContext\">SyncContext</a>&lt;A&gt;","synthetic":true,"types":["actix::sync::SyncContext"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/utils/struct.Condition.html\" title=\"struct actix::utils::Condition\">Condition</a>&lt;T&gt;","synthetic":true,"types":["actix::utils::Condition"]},{"text":"impl&lt;'__pin, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/prelude/struct.Supervisor.html\" title=\"struct actix::prelude::Supervisor\">Supervisor</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, A&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"actix/prelude/trait.Supervised.html\" title=\"trait actix::prelude::Supervised\">Supervised</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"actix/prelude/trait.Actor.html\" title=\"trait actix::prelude::Actor\">Actor</a>&lt;Context = <a class=\"struct\" href=\"actix/prelude/struct.Context.html\" title=\"struct actix::prelude::Context\">Context</a>&lt;A&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["actix::supervisor::Supervisor"]},{"text":"impl&lt;'__pin, Fut, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"actix/fut/future/enum.Map.html\" title=\"enum actix::fut::future::Map\">Map</a>&lt;Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, Fut, F&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::future::map::Map"]},{"text":"impl&lt;'__pin, A, B, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"actix/fut/future/enum.Then.html\" title=\"enum actix::fut::future::Then\">Then</a>&lt;A, B, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, A, B, F&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::future::then::Then"]},{"text":"impl&lt;'__pin, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/fut/future/struct.Timeout.html\" title=\"struct actix::fut::future::Timeout\">Timeout</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, F&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::future::timeout::Timeout"]},{"text":"impl&lt;'__pin, F, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/fut/future/struct.FutureWrap.html\" title=\"struct actix::fut::future::FutureWrap\">FutureWrap</a>&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, F, A&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"actix/prelude/trait.Actor.html\" title=\"trait actix::prelude::Actor\">Actor</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::future::FutureWrap"]},{"text":"impl&lt;'__pin, S, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.Collect.html\" title=\"struct actix::fut::stream::Collect\">Collect</a>&lt;S, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, C&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::stream::collect::Collect"]},{"text":"impl&lt;'__pin, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.Finish.html\" title=\"struct actix::fut::stream::Finish\">Finish</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::stream::finish::Finish"]},{"text":"impl&lt;'__pin, S, F, Fut, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.Fold.html\" title=\"struct actix::fut::stream::Fold\">Fold</a>&lt;S, F, Fut, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, F, Fut, T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::stream::fold::Fold"]},{"text":"impl&lt;'__pin, S, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.Map.html\" title=\"struct actix::fut::stream::Map\">Map</a>&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, F&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::stream::map::Map"]},{"text":"impl&lt;'__pin, S, I, F, Fut&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.SkipWhile.html\" title=\"struct actix::fut::stream::SkipWhile\">SkipWhile</a>&lt;S, I, F, Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, I, F, Fut&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::stream::skip_while::SkipWhile"]},{"text":"impl&lt;'__pin, S, I, F, Fut&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.TakeWhile.html\" title=\"struct actix::fut::stream::TakeWhile\">TakeWhile</a>&lt;S, I, F, Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, I, F, Fut&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::stream::take_while::TakeWhile"]},{"text":"impl&lt;'__pin, S, F, Fut&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.Then.html\" title=\"struct actix::fut::stream::Then\">Then</a>&lt;S, F, Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, F, Fut&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::stream::then::Then"]},{"text":"impl&lt;'__pin, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.Timeout.html\" title=\"struct actix::fut::stream::Timeout\">Timeout</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::stream::timeout::Timeout"]},{"text":"impl&lt;'__pin, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/fut/stream/struct.StreamWrap.html\" title=\"struct actix::fut::stream::StreamWrap\">StreamWrap</a>&lt;S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S, A&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix/prelude/trait.Stream.html\" title=\"trait actix::prelude::Stream\">Stream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"actix/prelude/trait.Actor.html\" title=\"trait actix::prelude::Actor\">Actor</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::stream::StreamWrap"]},{"text":"impl&lt;'__pin, A, B, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"actix/fut/try_future/enum.AndThen.html\" title=\"enum actix::fut::try_future::AndThen\">AndThen</a>&lt;A, B, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, A, B, F&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::try_future::and_then::AndThen"]},{"text":"impl&lt;'__pin, Fut, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"actix/fut/try_future/enum.MapErr.html\" title=\"enum actix::fut::try_future::MapErr\">MapErr</a>&lt;Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, Fut, F&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::try_future::map_err::MapErr"]},{"text":"impl&lt;'__pin, Fut, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"actix/fut/try_future/enum.MapOk.html\" title=\"enum actix::fut::try_future::MapOk\">MapOk</a>&lt;Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, Fut, F&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::try_future::map_ok::MapOk"]},{"text":"impl&lt;'__pin, A:&nbsp;<a class=\"trait\" href=\"actix/prelude/trait.Actor.html\" title=\"trait actix::prelude::Actor\">Actor</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/utils/struct.TimerFunc.html\" title=\"struct actix::utils::TimerFunc\">TimerFunc</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, A&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::utils::TimerFunc"]},{"text":"impl&lt;'__pin, A:&nbsp;<a class=\"trait\" href=\"actix/prelude/trait.Actor.html\" title=\"trait actix::prelude::Actor\">Actor</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix/utils/struct.IntervalFunc.html\" title=\"struct actix::utils::IntervalFunc\">IntervalFunc</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, A&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix::utils::IntervalFunc"]}];
implementors["actix_broker"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_broker/struct.Broker.html\" title=\"struct actix_broker::Broker\">Broker</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_broker::broker::Broker"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_broker/struct.SystemBroker.html\" title=\"struct actix_broker::SystemBroker\">SystemBroker</a>","synthetic":true,"types":["actix_broker::broker::SystemBroker"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_broker/struct.ArbiterBroker.html\" title=\"struct actix_broker::ArbiterBroker\">ArbiterBroker</a>","synthetic":true,"types":["actix_broker::broker::ArbiterBroker"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()