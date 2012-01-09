The centrally interesting point of the Prisoner's Dilemma is that two game 
theorists who play it will routinely score worse than two simpleton criminals.

Alice the Attorney is representing a local government whose police have 
arrested two burglars, Bob and Carl, who have some prior criminal records. 
They were arrested while trespassing on property together, and although she 
cannot prove that they intended to commit a crime, she is a little lucky since
they both were carrying guns on their persons, which is already enough to give
each one 2-6 years in jail, depending on how well they behave in prison. (We 
will say for definiteness that both Bob and Carl expect 3 years in prison.) 
However, Alice would really prefer to prove that they both intended to commit 
crimes on this property, which would make it burglary as opposed to trespassing 
-- 5-15 years instead of 2-6. (Again, for definiteness, let's say 
that they expect around 7.)

Alice promises to throw in an official statement saying that they cooperated 
with the police, which everyone can reasonably expect to reduce the judge's 
sentence by 2 years or so: but in order to cooperate with the police, the 
burglars must each offer evidence that the other had an intent to commit a 
crime while on the property. They are given this offer in separate locations
with separate lawyers, and cannot communicate with each other.

At this point, game theorists describe a "payoff" with a pair of numbers: 
(Bob's payoff, Carl's payoff). In this case, we're measuring this in years of 
jail time, and all payoffs are in that sense negative: neither one wants to
spend years in prison. Furthermore, there is a "decision matrix", because each
can choose to either betray the other's trust by talking or to remain silent,
and the reasonable costs are then changed. This decision matrix looks like 
this:

                            Carl chooses
                          Talk        Silence
      Bob     Talk      (-5, -5)      (-1, -7)
    chooses   Silence   (-7, -1)      (-3, -3)

Game theorists will say that Talk "strongly dominates" Silence. What this means
is, it doesn't matter what Carl has done, Bob is always going to get 2 years 
off his sentence if he talks with Alice. Bob is always personally better-off if 
he talks to her. So two game theorists who play this game will always choose to
Talk, and they will therefore get sentenced as felons to 5 years in prison.

But two "dumb criminals" who act "irrationally" by remaining silent will only
spend 3 years in prison each for misdemeanor charges. They do much better than
the game theorists. What's going on here?

# Non-zero-sum

The Prisoner's dilemma is a prototypical example of a non-zero-sum game. The 
idea of a zero-sum game is simple: if I win, you lose, proportionately. This
is a good way of describing a sports match between two opposing teams: the 
only important thing to each team is really "how many points are we ahead by?"
and any move which increases this number by 3 for one team decreases the 
corresponding number for the other team by 3 -- hence, zero-sum; they must add
up to zero. 

Zero-sum can also describe somewhat a board game like Monopoly, where 
the strategic choices that you make (buying properties and houses) are not 
quite themselves zero sum (you lose money when you do them) and only act to 
change the risks involved towards other players. Monopoly ceases to be zero-sum
if you agree in advance that houses will cost 10 times as much to build as a 
"house rule", so that there is a real risk that property development doesn't 
"pay off" in the end. 

It fails completely to describe a game like Settlers of Catan. In Settlers, 
multiple players are racing to be the first to accumulate ten points. There is
a general reluctance to trade with the person who has the highest score, which
is a perfectly zero-sum imperative. (The Cornell Games Club refers to this 
principle as "Get him! He's winning!" -- or her, as the case may be.) But the
people who are not very close to winning will often trade resources, to the
advantages of both parties involved. This sort of "cooperation" is absent from
zero-sum games because the zero-sum model is "when I win, you lose."

The Prisoner's Dilemma is a particularly extreme case of this. 

# How markets fix the problem

The easy way to think about the Prisoner's dilemma is to see it as an artifact
of these particular police rules against not talking with people. Perhaps this
is a good way to do police work, but in the real world, two people can choose
a "commitment strategy," where they both voluntarily raise their own costs for
one option to the point that it is no longer a viable option. The way that this
happens in the modern world is usually by contracts.

If two game theorists could get together to sign a contract: "If either of us 
talks to the police, he will spend 3 years in prison," then it is in both of
their best interests to sign this contract and then to not break it. In the 
criminal world, prison is not an available punishment, but someone may refuse
to deal with you, if you have a reputation as a "snitch" or so. In other words,
the above "payoff matrix" is missing an important cost: talking to the police
incurs a fate much worse than two years spent in prison, so the robbers refuse
to talk to the police.

# Sympathy in Cooperation

If you asked your typical trespassers why they defend each other, there might
be any number of reasons. Maybe they are worried about the professional impact
of being labeled a "snitch". Perhaps Carl is deeply afraid of what Bob would 
do when he gets out of jail seven years later, jealous that Carl was only 
sentenced to one. But maybe it's more altruistic than that. "This guy is my
friend," Carl might say, "and you can't turn your back on a friend."

All of these features can be incorporated by adjusting the payoff matrix. One
easy way is to imagine that either robber would give up one year, if it meant
that the other could have two years less in prison. We can model this by saying
that each of the robbers feels "1 year of guilt" for any year that they spend 
in prison, and "half a year of guilt" for any year that the other spends in 
prison. To keep the numbers more even, let's assume an extra half-year if the other
person gets a felony charge. Then the matrix looks like this:

                            Carl chooses
                          Talk        Silence
      Bob     Talk      (-8.0, -8.0)      (-5.0, -7.5)
    chooses   Silence   (-7.5, -5.0)      (-4.5, -4.5)

Now you can see that both choose to be silent simply because they don't want to
see their friend charged with a felony. 

This actually is a very important idea in the discussion of evolution, because
it can be a key component in evolving sympathy (and altruism in general). If 
instead of years of prison we are talking about production of children, two
members of a species might well face a similar dilemma choice, except with
"children" instead of "years of prison":
    
                 fight     concede
        fight    (1, 1)    (5, 0)
        concede  (0, 5)    (3, 3)

Notice that if both individuals act nice to each other, they both do better
than if they fight each other. This means two contrary things. First, evolution
will favor conciliatory communities: any herd which cooperates, for any reason,
has more children than one where there is lots of in-fighting. But on the other
hand, any individual who chooses to "fight" does indeed do better, and such 
herds must either collectively shun such fighting, or else they will slowly
fall into it as a normal cycle. It would therefore be interesting to know 
to what extent this pattern holds in nature.