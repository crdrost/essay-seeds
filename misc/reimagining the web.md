# what the internet could be

How could we completely redesign the Web from the ground up? Let's call it the
Stream just because I need a new name and that line "don't cross the streams!"
from Ghostbusters randomly came to mind.

# real identities
You shouldn't need a password to log on to another computer; every computer
could have an identity-management system. An "identity" is just a glorified name
for a `(name, asymmetric key)` pair, probably: you send the public half to other
computers and the private half stays on yours. You can then have multiple
identities on one computer, transfer identities to other computers, etc.

More importantly, when everybody has a private key, we can do digital signatures
on everything and the Stream can be entirely encrypted. This finally blocks all
deep packet inspection by any agent who is not running an active MITM ("Man In
The Middle") attack. We'd still need to think a bit about MITM attacks, I guess,
but every key-distribution net has to think about those, so I trust there's more
experience. In any case, it works in practice for SSH that you simply keep
contacting a known, remembered identity and alert when that identity seems to
change.

# distributed documents
I like to think that every document is stored somewhere "in the cloud" -- in
other words when you publish a document you're secretly just putting a hash
value, along with some metadata, onto the Stream, and offering to share it.
Anyone who has the file can then re-share it, so you are always doing something
BitTorrent-like, if you imagine BitTorrent's DHT network as an essential part of
it. Perhaps we would just build part of the system atop BitTorrent+DHT? 

The key reason to do this is that there is no fucking reason why any site, this
day in age, should get slashdotted. None. BitTorrent proves that if everyone
wants a certain piece of content and 1% are able and willing to help share-back,
then a system really can stabilize at a load of ~100 downloaders/uploader, which
is quite tractable even in the worst case. DDoS could maybe be a thing, but only
in the BitTorrent sense -- where much of the swarm might be flooded with evil
IPs which falsely identify pieces and waste bandwidth for peers. This is again a
potentially more tractable problem.

We also need to digitally sign the contents of documents shared on the Stream,
so that we can create a sense of provenance automatically. Provenance allows
blog trackbacks to work, and micropayment structures and other such things. It
would have to work a bit like BitCoin works, where the network maintains an
authoritative result. For that matter, there are some interesting blog articles
about the other crazy things that you can do with the BitCoin network directly;
I am essentially proposing that this network, or an analogous one, could be a
part of the Stream. But the point is that there would be an authoritative answer
from the network of "where did this exact document come from?" and authoring
tools would have to play maliciously to try to reclaim it as their own -- as
opposed to the modern system where you copy-and-paste the text directly so that
every server is its own provenance, so everyone is playing maliciously by
default.

There would still be a use for web hosting, but it would be as a "mirroring
service", some place which allows your content to be up even when your own
server goes down and even many years from now. 

# archive types?
This one, I'm divided on: should application containers -- an archive type --
really be a fundamental building block? On the one hand, this is why Flash games
went crazy; the document always includes all of the style and scripting
information you need. On the other hand, it is nice to think that an image can
be separately cached, and that images can be largely searchable. We would need a
slightly more powerful abstraction than folders to really get this right;
something like the statement "your peer P calls the hash H by name N," with the
understanding that within the document we include N as a proxy for H. On the
other hand perhaps our documents will simply begin with a set of dependencies
phrased as hash values, perhaps computed dynamically by the authoring tools.

# authoring tools
The underlying representation is clearly text, but there is no reason why we
can't go with the original vision of the web, where every browser is also an
editor. The browsers which "play nice" over the peer-to-peer network will then
preserve provenance even of the documents which they quote, and so it becomes
very easy and automatic to search the network for trackbacks and to figure out
who originally said what.

# sockets? 
Many web apps require some sort of communication to a central server, and
some sort of communication to the local server. I'd prefer to see this
explicitly reified, perhaps as a sort of typed socket. So when the Dutch
train service NS wants to have a web service for querying the up-to-date
times for the trains, this is done by sending service requests to a socket.
This brings back a lot of the Bad from the Web, so we need to figure out how
to mitigate that badness -- perhaps this is also like the (peer, hash, name)
case above? I'm not sure. I think you could figure out the fundamental
mystery in the context of trying to build a chat room, since that is sort of
the most fundamental communications case, a socket which will send/receive
(username, text) pairs.

Along those same lines, remember that each document is secretly not just
some static content but is a web app. So for example, if a document can open
a socket, then we're not just downloading a "chat room" application, we're
also enabling a simple document which you can download to turn your browser
into an Instant Messenger application, perhaps even into Skype. The benefit
of having plain text as the authoring format becomes that anyone can improve
and re-share that Skype source code. So we'd give into this notion of app
development by making the hosting trivial.

# replace javascript?
I love JS, and I've thought a lot about how you'd replace it, with very few firm
conclusions. I like unary operators -- the idea being that one takes the
function out of the lisp form `(a b c)` into `a(b c)` and then reinterprets this
as a function `a` acting on a list-of-args `(b c)`. This is especially nice when
you're trying to serialize data, where you want something that says e.g.
`type {contents}`. Interestingly, you never need parentheses as long as you view
all applications as function compositions; the algebra of function compositions
is actually associative.

One key idea is that we should really have more explicit metadata. I should be
able to read in any document as text, interpret it into a parse tree (and
hopefully the language would be homoiconic so that we could match patterns with
patterns-in-the-language), and then run a type-checker macro on the internals.
Yes, a macro. That's all type-checking is, and it could be optional but
on-by-default. Docstrings are also helpful metadata which should be in that
parse tree. Why not? And when you have macros you pave the way for DSLs and so
forth.

I like Python's `dir()` and `help()` functions, but there's one huge persistent
nuisance with those functions, which is that there is no `.into()` function. Let
me explain: `x.into(fn)` simply returns `fn(x)`. Why would you want all of this
crap? Because you're in the Python REPL. You type something and then you don't
know what you can do with it, so you want to write `.into(dir)` at the end of
the line, then you find out what you can do, so you delete those 10 characters.
In a REPL it's very useful if common modifications can be removed to the end of
the line so that you don't have to hit the Home key to return to the beginning
of the line and balance parentheses there.

It's the Bash pipe. I'm really demanding that Python should let me write
`3 | print` instead of `print(3)` so that I can remove the `print` when I seek
to the line with the up-arrow and get dumped at the end of it.

Similarly, I think message-passing logic makes so much sense. What I'm really
saying above is that `x` should accept `fn` as a message.

