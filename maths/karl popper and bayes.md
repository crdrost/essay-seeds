It didn't occur to me until today that Karl Popper is only asymptotically (or
marginally) right. Popper says that the great thing about science is that if
X would evince Y, then not-X would evince not-Y -- that is, "evidence in 
science doesn't really count unless the absence of that evidence would count 
against." (Not a direct quote.)

What I realized here is based on my research into the Black Death as part of
my novel, One Dark Dream. Apparently there are modern scientists who can look
for bacteria DNA preserved within human teeth. If they find it, they can very
definitively state "this person died from Black Death." But if they don't find
it, they can't falsify that conclusion really at all -- there are so many 
chance factors and it's so unlikely that this DNA survives 7 centuries in a 
cemetery that the absence of this evidence doesn't count much against the
hypothesis.

So I want to prove that Popper is right, and then show how the above fits in.

The proper way to approach this is Bayes' theorem, which says that a 
hypothesis H receives evidence E according to the conditional probability rule:

    P(H | E) P(E) = P(E | H) P(H) = P(both E and H)

This can be looked at in many ways. One way is to "update" the "prior 
probability" of H via a coefficient k:

    P(H | E) = k P(H)

    k(E, H) = P(E | H) / P(E).

In the case of absolute confirmation, P(H | E) = 1 and thus k = 1/P(H). But we
should also say that evidence can be "confirmatory" for our hypothesis if 
k > 1. Thus Popper adequacy for the evidence amounts to the statement that:

    k(E, H) > 1 if and only if k(~E, H) < 1.
    P(E | H) > P(E) if and only if P(~E | H) < P(~E)

...where ~E is the negation of the evidence (the evidence was not observed). 
This is because for E to be confirmatory, ~E must be disconfirmatory. This is
totally true. To prove this, notice that:

    P(both E and H) + P(both ~E and H) = P(H)

...because E and ~E are taken as mutually exclusive and exhaustive. With 
conditionals this becomes:

    P(E | H) + P(~E | H) = 1.

I call this the conditioning lemma -- it says that we can add a condition 
without affecting the probability sum rule.

Thus indeed it follows from the assumption that:

    P(E | H) > P(E) 
    1 − P(E) > 1 − P(E | H)
    P(~E) > P(~E | H)

So ~E is indeed disconfirmatory when E is confirmatory. Popper is right! It's 
a simple application of the conditioning lemma to see that. Now what of our 
original statement? We do this more in detail.

    k(~E, H) = [1 − P(E | H)] / P(~E) 

Multiply the term on the right by P(E)/P(E) = 1 to get:

    k(~E, H) = [1 − k(E, H) P(E)] / P(~E) 

And I finally use the fact that P(~E) = 1 − P(E) to pull out the constant 1:

    k(~E, H) = 1 + [P(E) − k(E, H) P(E)] / P(~E) 

    k(~E, H) = 1 + (1 − k(E, H)) P(E) / P(~E) 

This obfuscates the Popper adequacy condition a little but gives a more honest
appearance for k(~E, H). The condition is still there: P(E) / P(~E) is a 
positive number and this gets added to 1 when k(E, H) > 1, or subtracted 
otherwise. 

What it tells us is that it depends on P(E) / P(~E). If P(E) is sufficiently 
small then the absence-of-evidence is barely disconfirmatory, while the 
presence-of-evidence can be absolutely confirmatory. 

Let me just work out an example where P(H | E) = 1. We'll take the Black Death
as a prototype; we're told that it wiped out 1/3 of people in Europe so we'll 
take that as our prior probability P(H). Finally we'll assume that even if 
someone had the Black Death the evidence only had a 1% chance to survive to 
the present day: P(E | H) = 0.01.

We can then figure out that:

    P(E) = P(E | H) P(H) / P(H | E) = 1/100 * 1/3 = 1/300

Thus P(E) / P(~E) = 1/299. Meanwhile k(E, H) = 1/P(H) = 3. In such an idealized
case we therefore would have:

    k(~E, H) = 1 + (1 − 3) 1 / 299 = 1 − 2/299 = 99.33%.

Thus we see what we expected: if the evidence is observed then we modify the 
probability from 1/3 all the way up to 100%, but if the evidence is not 
observed then we reduce it to 33.11% from 33.33% -- a change so miniscule it 
probably can't even be quantified in the face of our real-world uncertainty 
about how many people actually died in the Black Death (i.e. what P(H) actually
was). 

So while it has to have some effect, that effect is allowed to be arbitrarily 
small as the evidence gets more and more improbable. 