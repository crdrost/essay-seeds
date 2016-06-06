# Truths of Programming
Software engineering has a lot in common with life. Here's the wisdom that I've picked up, in many cases paraphrased. (One source, for example, is RFC 1925).

# It has to work.
It doesn't have to be pretty. Computer programs have a lot of aesthetic criteria behind them, and those criteria are important, but your clients only see the results, not the aesthetics. I've seen cron jobs of command-line PHP scripts glue together an empire.

You're administration. That means that you're a magician -- your job is to make the rabbit vanish before the eyes. If your product doesn't work, those downstream can't do their jobs, and they only have one person to complain to, and it's you, the one person who has no time to waste handling complaints.

If there's a server or a queue or a database, it must email you when things get at least 80% stuffed-up.

# Real artists ship.
The converse to "It has to work" is that it doesn't have to work perfectly. There is always another feature, another bug, another problem: you will have to ship an imperfect product because you are not a perfect being. Make sure that the core functionality is there and put it out there and accept the complaints: fixes must be ongoing.

# An ounce of structure prevents pounding headaches.
If your data structure allows two representations of the same thing, switch to a representation where there's only one. This becomes more urgent the more representations there are.

Why? Because if there are 10 ways of saying the same thing, then eventually someone will write code which only works in 9 of the cases, and the resulting bug will be hard to find.

Similarlly, the right database structure will save you headaches. Think long and hard about what you want to do before you form a database structure. Draw a box for every table and an arrow from B to A when table A holds a key from table B. Think of that arrow as "each A has many B's." That's relational structure in a nutshell.

If there is any easy discipline which protects you from bugs, do it. Static types? Tests? Great. There is no honor here. Yes, you are bowling with those inflatable gutter-rails; but I'm not judging you.

It pays to be consistent. I know that this database table would be better if it had things like "first name, last name" in there, but if all of these other factors like "shoe size" and "annual income" are all jammed into another table on that database, then you should probably jam in those names to keep it consistent. Later on you won't have to keep re-implementing the logic which deals with first names and last names.

# Clever hacks will not save you.
I once sped up a traditional top-down JavaScript CSV parser. If you don't know CSV, there are newlines separating rows and commas separating columns; to include a comma in a field or a double quote character at the start of a field, you quote the field with double quotes; and finally, to escape a double-quote character in a quoted field you double the quote character. Here is a quick CSV parser in Haskell:

    parseCSV = fmap reverse . field [] [] where
        -- d = "done rows", r = "reversed current row", b = "reversed current cell buffer"
        cell r b = reverse b : r
        row d r b = reverse (cell r b) : d

        field d r ('"':rest) = quoted d r "" rest
        field d r str = unquoted d r "" str

        unquoted d r b string = case string of
            ',' : rest -> field d (cell r b) rest
            '\n': rest -> field (row d r b) [] rest
            c   : rest -> unquoted d r (c:b) rest
            [] -> Just (row d r b)

        quoted d r b string = case string of
            '"' : rest ->  metaquote d r b rest
            x : rest  ->  quoted d r (x:b) rest
            [] -> Nothing

        metaquote d r b string = case string of
            '"' : rest -> quoted d r ('"':b) rest
            '\n': rest -> field (row d r b) [] rest
            ',' : rest -> field d (cell r b) rest
            x  : rest -> Nothing
            [] -> Just (row d r b)


What was my trick in JS? Well, JS loops are inefficient, so I split over the double-quotes first. The double-quoting rules of CSV mean that when you do that, every other element in the resulting string is a "control element", and every other element is a "quoting element."

It was brittle and eventually we ran into bugs which even switching to splitting-with-a-regex couldn't fix easily, so we went back to our slower CSV parser that we knew worked.

# Real artists kill.
It's entropy: all software is trying to suck. It's trying to tackle separable problems with some monolithic, complex, interdependent solution. And your job is to hack away at the encroaching jungle, to keep at least your part of the organization's software clean and well-behaved.

Real artists kill whole projects sometimes. Ira Glass of NPR's *This American Life* mentions that for them, a top radio news show who's at the cutting edge, it's about 50%. That means that half of the time their reporters go out and record some big elaborate story, and they simply throw it all away during editing. Do it mercilessly with functions: "these both do the same thing, I'm going to kill the worse one and migrate everything that calls it over to the better one."

# Indirection solves most problems, but not "too abstract."
There is an odd power we get when we stop manipulating values and start manipulating pointers to values. We first off get the power of lists/arrays: and we can use this to do things like heap-arithmetic. We can even use them to give a sense of a "global variable": one part of the algorithm sets a new value-being-pointed-at; another part of the algorithm instantly sees the new value, without having to explicitly send it all the way across. There can be similar gains to having pointers-to-pointers.

In a SQL database, you *could* keep Phone 1, Phone 2, Phone 3 as columns in your Contacts table -- or you could create a new table which has phone numbers pointing at contacts. But there's not just the obvious benefit to the latter, there's subtle costs. For example, what happens when you delete all of a contact's phone numbers and forget to re-add one? If you used an INNER JOIN, you will find that the contact simply vanishes off the list. Abstraction incurs a constant mental cost. Even if you try to push this cost onto the computer ("oh, I'll just add a phone number column to Contacts and a foreign key constraint to Phones") you'll often find that it still emerges viciously (you must now insert to both tables from witin a single request somehow).

Indirection solves a huge class of problems in a surprising way -- but it grows a problem of its own while you're at it. You will have to follow a Middle Way between the two extremes of badness.

In C programmers who write things too abstractly are called "three-star": it is a mocking reference to how smart they are and a legitimate reference to the fact that one main pointer operator is a star and so you can manipulate pointers-to-pointers-to-pointers, which are star-star-star pointers.

# Nothing worth knowing can be taught.
This is probably too contentious, but you eventually *have* to dive into the things you want to learn. We can coax you into the water with floaties or a life preserver if we feel it is too deep for you and are worried about you, but you won't able to truly *swim* until you can jump into the deep end and keep yourself afloat.

# With a good catapult pigs can fly just fine.
In English an impossible thing is said to happen if/when "pigs can fly." Here's the thing: it's not that hard. People when they think about pigs flying imagine a pig with an angel's wings, but we who are engineers know that you can attain approximate flight with a catapult and true flight with some appropriate wings and a jet engine.

This analogy is important. When someone's asking you to do something impossible, usually it's not all that impossible if you throw strong enough resources at it -- and usually the impossibility results simply from knowing that one particular approach to solving the problem (grafting angel wings on the pig) will be difficult, but not from what needs to be done. Rubber hose cryptanalysis is like this. I can't retrieve RSA-4096 private keys from the public key, but if you give me a billion dollars it might be possible to install a keylogger on the keyboard that types the password, or abduct the person who knows the password, or install a webcam or a virus or whatever. You can "break RSA-4096", just not by attacking the mathematics with a modern computer.

Its' also important to think about the repercussions. The catapulted pig has an unpredictable trajectory threatening everybody underneath it. The rubber-hose methods may be highly illegal. Attacking the *real problem* with *a metric ton of resources* can solve all sorts of things deemed impossible, but usually there are all sorts of reasons not to do it involving finesse and simplicity.

# Try brute force first.
If you take the "catapult" advice too strongly you might pursue excellence and finesse in all things. This will make you a crappy programmer.

# Skill is the plural of luck.
We manufacture luck all the time. It happens routinely in backgammon games. A backgammon novice plays a backgammon master, and what happens is this: the novice seems chronically lucky whereas the master seems to be forced into all sorts of contorted, strange moves, until about halfway through, when the novice is totally and completely stuck, every roll seems unlucky, and the master carries on to win the game. The master was using his (average) luck to make more luck; the novice spent all his luck (making it seem all the more ubiquitous) only to have lost it all.

If you're skillful, then you'll be in the right place at the right time -- "lucky". It's not supernatural; it's obvious. If you skillfully save money, then when bad things come upon you, they won't be "bad" because you'll have your safety net, and nobody will complain about bad luck. Look to people who seem to be chronically lucky and try to figure out their discipline.

# You didn't solve the problem.
It seemed easy. It was a two line fix, elegant, perfect. Seldom does that actually solve the problem.

First off, your fix was probably not substantial. It used 2*n storage before, now it uses n/2. Meanwhile it took 5 months for this to be a problem, so that means that all you've done is to push the problem 4 * (5 months) - 5 months = 15 months into the future. You'll have the exact same problem next year without that problem. Or maybe your fix was substantial: the system uses 2 * n storage rather than (1/2) n<sup>2</sup>. That's fine, but you still haven't defined what happens when it overflows its storage space, and because n is not increasing linearly, that problem is secretly looming several years away.

A lot of "solving problems" consists in moving a problem somewhere else and pretending that it's solved when it's not. That is a useful tool: when you're getting so many requests that your computational nodes are dropping requests, it helps to add queues to them. Those queues eventually fill up and the processes start crashing: go ahead, start persisting those requests to a local database. The disk is full: sure, buy a database server. You're not solving the problem, but that's OK: the system keeps working for the people it needs to work for. But don't pretend that you haven't solved the problem. You've got to keep monitoring that thing. Because a real *solution* will grow with the request rate to keep the amount of server storage/activity/whatever constant. The easiest way to construct that sort of solution is to simply explicitly state what happens when server queues fill up and requests fail. Then you will develop a system where the queues live on the client machines and only hold so much before they bug a human to stop doing what they're doing.

# You need more.
It doesn't really matter what the resource is. You don't notice the resources which are really unlimited, like air, as resources anyway. Everything that you do notice, you need more of. Your computers need more disk space and RAM. Everything is burning -- in the sense of consuming some sort of "fuel" -- and requires more.

Software engineering is about doing the most you can with what you have. It profits nobody to be whining about how little you have. The original Master of Orion was an incredibly cool game which operated in the luxurious bounds of a 16 MHz processor, 2 MB of RAM, and 14 MB of disk space. Whatever you're doing is not as awesome as that. Use the space, time, and network speeds to youur biggest advantage.

Time is a resource too. You need more programmers working on a problem, and every problem needs more time to solve than you think it should ever reasonably take. Whenever you're about to quote a deadline to a client, multiply it by two or three, unless you're extremely sure about what you're telling them.

# Your computers can multitask. You can't.
Lots of people claim to be "multitaskers." You can multitask in limited ways due to the brain having different "centers": you can watch a television show while you clean out a dishwasher, for example. While you're doing both of those things, the back of your head might be making a breakthrough on a serious problem you've been puzzling about. That's all fine. But that's not what multitasking means in a corporate world, because your bosses, as a rule,  don't usually understand people.

You are in a deep-work profession. This is in the same class as playing chess, or doing science research, or trying to solve a hard Sudoku. Doing any of these tasks requires thinking through a set of constraints imposed by a context. If you lose that context, you will lose the ability to have creative insights which solve the problem easily. You need several hours of uninterrupted focus a day if you want to perform at your top level.

There's one of those studies out there that everyone quotes but nobody attributes, saying that great programmers program 30 times better than mediocre ones. You can develop that with practice; just keep learning, keep asking questions, and you'll get there. But multitasking is far more pernicious than this. Because focus is important to getting that "30 times better" result. In the real world, that difference between great and mediocre is very often about the ability to focus. Be greedy about your focus. Even if someone comes by your desk with a request that "will just take 3 minutes": if you're in a flow, "email it to me and I'll get to it at the end of the day". If two people are totally blocked from working on anything until their problem is resolved, or if there's just one person but they're clearly above your pay grade, that's one thing. But this person has just offered to potentially slash your productivity by 90% for the rest of the day and you need to treat that request accordingly.

Even if you can maintain general focus all day, only suffering a small penalty for multitasking, multitasking is still awful. Let's talk about averages. Let's suppose an enterprise workload: programmers have one, two, or three tasks queued up at any one time at a company with three big projects: Aardvark, Bear, and Cobra. When a programmer says, "hey, I've got nothing to do," all of these three projects each dump a problem on their desk for them to solve, usually averaging about 30 one-hour "tasks" per "problem". We'll refer to the project leads by the team names, so "the leader of Project Aardvark" is just named "Aardvark" here. We'll follow in the life of two queueing disciplines embodied by two programmers: Diane and Eric. Sometime at each programmer's tenure at this company, on some Monday, each of them will have an experience where they have nothing to do, so Aardvark drops a 20-task project, Bear drops a 30-task project, and Cobra drops a 40-task project on their desks. The two programmers have about identical skill and focus, let's see how their queuing of the tasks shapes up.

First off we have Diane. Diane's queuing discipline is that she just does the fastest project she can: she focuses solely on Aardvark first, then Bear, then Cobra. Since she's got this backlog, she emails Bear and Cobra to tell them that she's been given these other projects, tells them that she's doing them in this order, and tells them when she can start on *their* project. Aardvark receives her solution on that Friday, Bear on the Monday after next, and Cobra only after three weeks, on Thursday.

Second, we have Eric, who tries to multitask, interleaving these three projects, so that he can give each of the project leads (and his boss) regular status updates on where they all stand. Eric has a smallish extra cost due to task-switching: each task takes about 10-15 minutes longer because when a programmer switches projects they have to remember how files are laid out, the general logic of the project, and other sorts of context. So he gets only about 4 tasks done per day, even though he has all of this focus available. If you work it out, Aardvark's problem is solved on the afternoon of next-week-Friday, Bear on the afternoon of the Friday after that, and Cobra on the morning of the Friday after *that*.

Let's compare. People at that company will, first off, know these two by their general performance. Alice's average time to complete a project is just (4 + 14 + 24)/3 = 14 days, while Eric's is (18.5 + 25.5 + 32) = 25.3 days. Even though they have identical skill and focus, the numbers will report that Alice is almost twice as productive as Eric! But of course that's not all: their colleagues will also judge them based on your communication. So Alice is going to really impress Aardvark; Bear will be surprised that with Alice's reported "delay" she still got the project done roughly on the timeline that Bear expected anyway for a programmer of her caliber; and Cobra will be a little upset at the 5-day delay but will understand that she got delayed by Aardvark and Bear--and given that she only reported starting after 14 days' waiting time, her progress will still seem pretty impressive. But Eric, because his boundaries are not so firm, he's just going to communicate that he's nebulously "busy with other things" to each of them; Cobra will probably not see (or care about) progress on Aardvark. So Aardvark will be happy with Eric's performance but won't be too impressed overall. Bear will get exactly what they expected. But Cobra -- one third of the project leads! -- will be really upset with Eric. Cobra was expecting the project to be *done* after 25 days, but Eric's progress report showed that it was only about 50% done at that stage. So Cobra got really angry at Eric the following Monday and summoned his boss and said, "we can't wait another 25 days for this product!" and hey, Eric had it available on Friday of that week. So now Eric doesn't just appear less competent than Alice, he also appears downright *lazy* or otherwise *unreliable at estimating progress*.

So Eric's queuing discipline is only intrinsically 20% slower than Diane's, but his real world performance is about half hers, and one third of his projects cause others at the company to think that he's lazy or unreliable. And we haven't even factored in the extra stress that Eric feels due to his scatterbrained approach to these problems, which will cause days with only 2-3 tasks done because the other ones are spent socializing or secretly watching videos of cute animals on YouTube, in an attempt to deal with the stress so that he can be a competent programmer.

Don't multitask when you're doing that deep work. Don't receive texts or email notifications when you're doing deep work. Don't check any news or social networking or other brain-masturbation sites. If others in the office are having a conversation, put in headphones that play something -- if music is too distracting, then white-noise like a crackling fireplace or a rainstorm. Then sit down with the problem and a text editor and nothing else, and start putting ideas to that paper. If you can manage it, don't even break your focus to go ask, "what's the proper name for this library function?". Just write the wrong function name there and correct it later when the compiler or interpreter barks at you. Just use that time to perch above the problem surveying all of it, writing high-level code in terms of "what it should do", then start filling in the details. Once all of that deeply context-sensitive solving is out of the way, the shallow work needed to actually get it working can perhaps be multitasked.

# One size never fits all.
Make a small application which fits the job in front of you. It should fit perfectly. When it comes time, copy it, tailor it to new dimensions, and refit it. I'm not saying that you shouldn't sometimes be *abstract*; I'm saying that you shouldn't make your application too *generic*. If you solve a lot of different problems by forcing them all into one sort of problem with a known solution, the solution will seldom perfectly fit all of the problems perfectly well. (When it does, there is a fancy mathematics word -- the problems are truly "isomorphic".)

I'm not necessarily against premature abstraction.

# Relentless reintroduction
All of those old ideas which you think you've rejected will be ceaselessly reintroduced, sometimes by new people, sometimes by their originators, and sometimes even by you. This will happen whether they were explicitly rejected or simply ignored for a different solution. It will also happen whether they were good or bad ideas. Be prepared to notice these deep structural similarities and to say, "no, we're doing things a little bit differently here."

# Profile before you optimize
Nobody really understands computers. We think we do, but a profiler will *prove* to you that you don't.

# The head is weaker than the belly.
A wise chef is in her kitchen, and her cooks are totally failing her. Her appliances break, things are burning, and taking time out to solve the problem causes her diners to grumble about the missing deadlines. But eventually she wrestles that kitchen back into order. Some of the diners have been waiting an hour for their food. But when she starts sending out delicious food, and they eat it with great joy, and never say anything again about how long they had to wait.

Diners will wait for good food. You know what would have been worse? To send out the burnt, unmixed, cold food. You solve systematic issues that make your work crap, then you solve bugs which are making the product crap, then you can add features, in that order. Don't think about the grumpy clients. They will forgive you, if they want your product in the end. That's because the "reptile brain" (amygdala) rules the "seat of higher reasoning" (prefrontal cortex). Complaints about injustice are rationalizations created by the prefrontal cortex for the painful feelings of hunger that the amygdala feels. Make the amygdala happy and you'll make the cortex happy.

Of course, you should still be happy that this higher-reasoning stuff is around. The prefrontal cortex doesn't have "free will", those impulses come from the amygdala -- but the cortex does have the capacity to say "no", a sort of "free won't." The prefrontal cortex is what keeps the diners from murdering the chef and eating her ingredients directly.

# Magic is hidden patience.
A magician, in the modern sense, performs "tricks" which astound and amaze an audience, presenting an illusion of superhuman power. For the most part, the secret ingredient is patience. It is secret because it has been hidden from the audience.

A chef whips up delicious food in a heartbeat for an entire restaurant: surely that is magic, too. Yes, it is: the magic is all of the prep-work that went in to making this final performance seamless and effortless and simple. A card magician shows you a deck, then shuffles it a few times, then offers you a card face-down. Maybe they switched the deck with one which was constructed from 52 other decks, by taking the Jack of Spades from all of them and making a normal-sized deck which only had one distinct card among all of its 52 members. You think it's magic because they couldn't possibly have gone to all of that effort for such a simple little card trick: yes, they did.

# Idioms are pearls.
Programming idioms are those formulas which people who are good at a language can recite for "how to do it this way." That seems great, why not have formulas for these things? They're beautiful, they're pearls. But really, pearls were created by some abrasive grain of sand which needed to be coated and coated over and over again. Some abrasive part of the language has been rubbing people the wrong way so much that eventually the only thing to do was to define the "idiomatic" way to do it.

Interestingly, some languages like Python try to have one idiomatic way of doing everything, so they are trying to make every program into a necklace of well-understood pearls.

# Monads are monoids in the category of endofunctors, what's the big deal?
Alan Kay is fond of reflecting on two things: first, you remember Leonardo da Vinci, the great Renaissance genius who somehow couldn't invent any sort of engine to power his other fantastical inventions; second, you imagine a woman in 10,000 BCE who was blessed with an IQ of 500 by modern standards, reflecting that actually not much is likely to come of her brilliance. If you have the right perspective, he says, that is worth 80 points of IQ: meaning, you, with your 100-point IQ, knowing about how gases expand when heated and perhaps having some notion of pistons and steam engines, can easily outperform Leonardo's 180-point IQ simply because you were born into a world where people had already worked out those perspectives.

Programming will be scary. There are always new things to learn. You probably don't know what a monad is, or a monoid, or a category, or an endofunctor. Then you learn that monoids are just things which "add" naturally, like lists via concatenation or numbers via addition or numbers via multiplication. They should also have an "identity element" (a zero) which doesn't do anything when you "add" it to other things, but you can always add one (making the structure "nullable") if you can't find one that already exists. It's all super-simple.

Then there are these monads, which people explain to you by complicated analogies involving boxes, space ships, "contexts", and tigers, and bears, oh my. But then you learn maps and filters, and you meet a real teacher, who shows you `concatMap`, which unifies all of these things as functions from some type A to a list of elements of some other type B: that teacher tells you what functors are and has you looking at functions `(Functor f) => a -> f b`. And you grow to be fine with it, because you have this perspective. Then they tell you that you can sometimes "add", like a monoid, any `a -> f b` with any `b -> f c`, and that if you also have the "zero" value `return :: a -> f a` then you have the full monoid. And this seems simple, and so, you know: monads, what's the big deal?

If you understand the problem domain then you'll create a smart solution. If you bumble around to try and make tests pass before you understand the problems that you're trying to solve, then you'll create spaghetti code which eventually does the right thing, but passes through a layer of mess first.





