In technical fields -- especially mathematics, physics, and philosophy -- it helps to speak very precisely, because a simple slip of the tongue can conceal gross misunderstandings of a question or its answer. I think the easiest example I can offer of this is the so-called "birthday paradox."

A paradox is any situation where our intuitive understanding of the world fails, and it fails in a tremendous way. This is particularly true of the birthday paradox. But what's interesting is to see the *way* that our language fails us, and how precision shows that our core method of thinking was not actually so wrong.

# The Paradox Itself #

Let's suppose that you're a secretary for a department, and your boss wants you to buy cake to celebrate all of the hard workers' birthdays. So you ask around and discover everyone's birthdays, and you find that there are two people who work down the hall from each other who have the same birthday. You rush to tell them this interesting fact.

The question is, how big was the department? We of course assume, just for mathematical niceness, that the birthdays are uniformly distributed over the year, so that any given day has a 1/365 chance. We also ignore leap years.

# The ways we start out

A common first intuition is "366 or so" -- something around the size of the number of days in a year. This shows a misunderstanding of the question: 366 is the number of employees we need to *prove* that two of them *must* have the same birthday. In other words, that is the amount needed for the probability of such an occurrence to be 100%. This is called the "pigeonhole principle." I don't know why mathematicians put pigeons in holes, but the idea is that if you have 366 pigeons, and 365 holes, then there is just no way to put just one pigeon in each hole without having one left over. If you find yourself with no pigeons, either you were careless and one flew away, or you were careless and some hole has been stuffed with two or more pigeons.

But no, what we discover is that there is a *probability* associated with it, and we don't really care so much about that probability. A 50% probability is more interesting. How many workers are there for there to be a 50/50 chance that the secretary has to buy two separate cakes for one day?

The immediate intuition now is "well, about half that -- 183 or so". This also misunderstands the question. This is the size that the department has to be for *you* to have a 50/50 shot of sharing *your* birthday with someone else. But our secretary didn't discover necessarily that *they* shared a birthday, just that two workers shared a birthday. That's more complicated.

To see why this would be very wrong, imagine that we have a department of 183 people and they all walk one-by-one into a room, announcing their birthday. And let's assume that the first 173 get in without anybody repeating a birthday. The last 10 people come up. The first of these has a 47.4% chance of repeating a day already mentioned. The next has a 47.7% chance of repeating. And so on.

For all 10 to enter without repeating a birthday, would be about as unlikely as flipping a coin 10 times without hitting heads once -- approximately a one-in-a-thousand chance. So 183 is *far* too many.

# Collisions and handshakes

Still, this idea of looking for a "collision" between two dates as people walk one-by-one into a room -- this isn't a bad one, and in principle you can do the maths explicitly. More importantly, you can get an important approximation from the idea.

Let's twist the story a bit. Two departments working next to each other celebrate birthdays with cake, and one day they find out that they're both celebrating a birthday at once. How big are they?

Well, imagine that department 1 has M unique birthdays among them, and department 2 has N unique birthdays among them. Imagine that the people from department 2 now start one by one announcing their birthdays. Each one has an M/365 chance of announcing a proper birthday. If N is small, then we can imagine that the probability rises to N * M / 365, although this is only an approximation to a more proper result. 

To interpret this, I want you to recognize that M * N is the number of handshakes made at the party, if everyone from department 1 shakes hands with everyone from department 2. What we're doing in this approximation is this: imagine that with every handshake, two people compare birthdays, with a 1/365 chance of having the same birthday. Then the number of collisions is roughly M * N / 365. 

Similarly, we can get a very good approximation when we have one department, by this same procedure. If you have N people who work together, and all of them shake each other's hands, how many handshakes were there?

Again, imagine they all come one-by-one into a room. The first person does not shake hands with anybody. The second shakes hands with the first person. The third shakes hands with the first 2. The fourth shakes hands with the first 3. The answer must therefore be:

    1 + 2 + 3 + ... + (N - 1)

This sum can be more elegantly phrased as N * (N - 1) / 2. I will show you how: interpret the sum 1 + 2 + 3 + 4 (which is the number of handshakes for 5 people) as the number of circles in this triangle:

          o
        o o
      o o o
    o o o o

Now we copy the triangle and rotate it to make a 5x5 square which is missing its diagonal:

    o o o o
    o o o   o
    o o   o o
    o   o o o
      o o o o

The answer must be (5^2 - 5) / 2, because it is half of (square minus diagonal), and the square has 5^2 circles, and the diagonal has 5. But the same trick works for any N: so the answer must be (N^2 - N) / 2, which is mathematically equal to N * (N - 1) / 2.

If the department is larger than a handful of people, we can pretend that the extra "minus 1" doesn't matter -- if the department has 100 people, we're only 1% in error if we call this N^2 / 2. And that gives our approximation:

    (N^2 / 2) * (1 / 365) = 1/2.
    N = sqrt(365)
    N = 19.105

Now if you're paying attention, you're probably thinking "there is no way that this number is correct." Somehow, 19 or 20 seem like tiny tiny numbers for something as simple as "how many people are needed for two to have the same birthday?" But when you have 20 people, you do indeed have 190 handshakes, which is more than N/2. In fact, if you want over 365 handshakes, you only need 28 people: 28*27/2 = 378.

# The exact result and its exponential approximation

We can solve this problem generally for Y days per year, if we imagine that there are N people who walk into a room. The idea is simple: we look for the probability that there is **at least one** collision, rather than **exactly** one collision. The reason this is easier is because it is 1 - p, where p is the probability of **no** collisions. And no collisions happens to be easy to conceptually handle.

Imagine we want to build up a room of N people with unique birthdays. The first person goes in, and has a unique birthday. The second person goes in, and has a (Y - 1)/Y chance of having a unique birthday. And the third person has a (Y - 2)/Y chance of having a unique birthday. To combine the coincidence of all of these events, you simply multiply their probabilities:

    p = Y * (Y - 1) * (Y - 2) * ... * (Y - N + 1) / Y^N

This can be concisely expressed with the factorial function:

    m! = 1 * 2 * 3 * ... * m

...as:

    p = Y! / [(Y - N)! Y^N]

because to get (a + 1) * (a + 2) * ... * b, it is sufficient to take 1 * 2 * ... * b and divide by 1 * 2 * ... * a. The first 'a' terms will all just cancel each other out under the division.

We can now solve the problem for the N's we just derived, the "intuitively impossible" result of only needing 19 people for a roughly 50/50 shot at a shared birthday. The result is:

    p = 62.1%
    1 - p = 38.1%

So you see, it was not actually so far off. In fact for even larger y, this probability tends towards 1/e, as we shall see. And when you have the 28 people so that you have more handshakes than days, the probability that they share a birthday is 65.4%.

The result can be finally corrected with a little something called Stirling's Approximation, which says:

    n! ≈ √(2 π n) nⁿ e⁻ⁿ 

The error in this approximation is that this overestimates by about 1/(12 n). So for factorials above 100, then, this approximation only carries an 0.1% error or less. Applying this to both of the terms for p gives an approximate result:

    p = √(2 π Y) Y^Y e^-Y / [ Y^N  √(2 π (Y - N)) (Y - N)^(Y - N) e^-(Y - N) ]

Almost all of the terms simplify away:

    p = e^(-N) * [Y / (Y - N)]^(Y - N + 0.5) 

We can approximate this even more by using a famous result:

    (1 + 1/m)^m → e for large m.

In this case we would use this by looking at the number given in reciprocal:

    p = e^-N [(Y - N) / Y]^(-(Y - N + 0.5))
    1/p = e^N [1 - N/Y]^(Y - N + 0.5)
    1/p = e^N [1 - N/Y]^((Y/N) * (N - N^2/Y + 0.5 N/Y))
    1/p ≈ e^N e^(N - N^2/Y + 0.5 N/Y)
    
