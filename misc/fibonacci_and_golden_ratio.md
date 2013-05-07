# Fibonaccis, Continued Fractions, and the Golden Ratio

## What is the golden ratio?
Given a rectangle, you could take the longer side and adjoin a square to it:

    +−−−−−−+             +−−−−−−+−−−−−−−−−−−+
    |      |             |      |           |
    |      |             |      |           |
    |      |     -->     |      |           |
    |      |             |      |           |
    |      |             |      |           |
    +−−−−−−+             +−−−−−−+−−−−−−−−−−−+

The golden ratio is one of the simplest recursive definitions in geometry: a
rectangle is golden when adding a square this way gives another golden
rectangle. To be a little more precise, you should rotate the new rectangle by
90° and then demand that the two rectangles are geometrically similar --
otherwise maybe *every* rectangle is defined as golden, which is not what we
want!

The ratio of the long side to the short is known variously as the golden mean,
golden section, or golden ratio, and we can see from this definition that it is:

       1                |<−−−−−  φ² −−−−−>|
    +−−−−−+             +−−−−−+−−−−−−−−−−−+
    |     |             |  1  |     φ     |
    |     |             |     |           |
    |     |φ    -->     |     |φ          |
    |     |             |     |           |
    |     |             |     |           |
    +−−−−−+             +−−−−−+−−−−−−−−−−−+

Or in other words:

    φ² = φ + 1

This is a quadratic equation and it has two solutions. Actually one is positive
and one is negative, and in fact we can write:

    1 = 1/φ + (1/φ)²

    (-1/φ)² = (-1/φ) + 1

So if the positive solution is φ, the negative solution is -1/φ. We can just use
the *quadratic equation* to find the two solutions:

         1  ±  √(5)
    φ = −−−−−−−−−−−− = {1.6180339887498948..., -0.6180339887498948...}
            2

The fact that they have the same decimal is due to the fact that the second is
just -1/φ and the equations imply that `1/φ = φ − 1`.

# Connection to pentagons
The sum of angles in a triangle must sum to π (or 180°) and the angles in a
quadrilateral must sum to 2π (or 360°) and the pattern does continue to 5-sided
shapes as 3π. This means that if you draw a regular pentagon, all of the angles
are 3π/5.

Now inside the pentagon we inscribe a pentagram. There are a lot of isosceles
triangles to be had, starting with the top one. ASCII does not really do this
justice, but let me take the top part of the pentagram first:

              .
          ,-`/ \`-,
       ,-`  /   \  `-,
    ,-`α___/β___β\___α`-,

The top angle, we've said, is 3π/5; the sides of this triangle must be the same
angle α because it is isosceles; and all three angles must sum to π because it
is a triangle. So α = π/5. Now looking at the top, we see three angles, but they
must all be π/5 (the outer ones are part of isosceles triangles with the angle α
and the inner one comes from the fact that they must all sum to 3π/5). 

We therefore conclude that β = 2π/5. However, this means that there is also an
isosceles triangle laying alongside the pentagram, which I'll highlight here:

              .
          ,-`/ β`-,
       ,-`  /      `-,
    ,-`____/β________α`-,

Now that we have that bit of geometry, isosceles triangles will get us the rest
of the way. Let the short bit on the left be of length 1 and the side be of
length s, so that:

              .
      s   ,-`/  `-,  s
       ,-`  /      `-,
    ,-`____/__________`-,
        1        s

We see that the bottom is 1 + s due to the isosceles triangles. However, the
triangle on the left is similar to the overall triangle, and thus we find:

    1 + s = s²

It follows that s = φ, and thus the ratio between the long horizontal line and
the side is also φ. And finally the line in the middle, which defines the
pentagon at the center of the pentagram, is just s − 1 = 1/s. 

We see that this top portion of the pentagram can be defined in golden terms,
"a golden triangle is an isosceles triangle such that when you split off an
isosceles triangle, you get another golden triangle." It's done with triangles
instead of squares but it displays the exact same ratio.

# But what makes φ special?

I must explain what I mean a bit more, but φ is basically the most irrational
number. Why? It comes from the fact that, if we rearrange the defining equation,
we get

    φ = 1 + 1/φ .

Expanding this recursively we find that:

                         1
    φ = 1 + −−−−−−−−−−−−−−−−−−−−−−−−−−−
                           1
             1 + −−−−−−−−−−−−−−−−−−−−−−
                              1
                  1  + −−−−−−−−−−−−−−−−
                                 1
                         1 + −−−−−−−−−−
                               1 + ...

This is called a 'continued fraction representation'.

## What are continued fractions?
Any number can be represented by a *continued fraction*, a set of integers which
encodes that number by a sort of recursive process. For example, pi is encoded
as:

                         1
    π = 3 + −−−−−−−−−−−−−−−−−−−−−−−−−−−
                           1
             7 + −−−−−−−−−−−−−−−−−−−−−−
                               1
                  15  + −−−−−−−−−−−−−−−
                                 1
                         1 + −−−−−−−−−−
                              292 + ...

The continued fraction form of pi is therefore `[3, 7, 15, 1, 292, ...]`. Just
to prove that this is universal, here is the program (as a Python generator) for
computing them:

    def continued_fraction(x):
        yield int(x)
        x = x - int(x)
        while x != 0:
            x = 1/x
            yield int(x)
            x = x - int(x)

Some numbers -- rational numbers -- will finish this process on their own.
Irrational numbers won't, and we'll have to truncate them manually:

    def take(n, gen):
        return list(gen.next() for x in range(n))

We can use this for example to find those first terms in the (infinite!)
continued fraction for pi, given some of its decimal expansion:

    >>> from decimal import Decimal
    >>> pi = Decimal('3.1415926535897932384626433832795028841971693993')
    >>> take(20, continued_fraction(pi))
    [3, 7, 15, 1, 292, 1, 1, 1, 2, 1, 3, 1, 14, 2, 1, 1, 2, 2, 2, 2]

Now let me just go into a little of the math here. We have something which looks
like:

    N + 1/(n1 + 1/(n2 + ...)).

Only the N can be negative -- n1, n2 and so on are all positive, if you look at
the program I've written above. (In other words, `0 ≤ x - int(x) < 1` and
therefore `1 < 1/(x - int(x)) < ∞`.) Furthermore, each of these terms which
appears as `1/(n + ...)` can be bounded between 0 and 1. How? It is surely
positive because it's made of additions and inversions of positive numbers. It
can also get arbitrarily close to 0, because `n` can get arbitrarily large. But
to make 1/(n1 + 1/(n2 + ...)) as big as possible, we make the denominator as
small as possible; this comes when we make `n1 = 1` and `1/(n2 + ...)` as small
as possible -- but we can make it arbitrarily close to 0.

So the smallest we can go is 1/∞ → 0 and the largest we can go is 1/(1 + 0) = 1.

Because these sorts of terms are bounded between 0 and 1, we can ignore them
after a point to create *rational approximations*:

    from fractions import Fraction
    def approx(number, n):
        def rationalize(cf):
            items = reversed(tuple(cf))
            base = Fraction(items.next())
            for k in items:
                base = k + 1/base
            return base
        return rationalize(take(n, continued_fraction(number)))

So, for example, the rational approximations to pi are:

    >>> ', '.join(str(approx(pi, n)) for n in range(1, 8))
    '3, 22/7, 333/106, 355/113, 103993/33102, 104348/33215, 208341/66317'

Now I will define what I mean by the "most irrational number." You can see from
how the denominator is growing that we are getting better and better rational
approximations, but you can also see that some approximations are *uncommonly
good*. Why? Because the denominator grows by sudden jumps.

So, 22/7 is within 0.04% of the right value for pi even though the bottom number
is as big as 7. That is uncommonly good; the approximation does not get better
until 333/106. While 333/106 is even better and gets to 0.0026% of the right
value, this is not really surprising given that its denominator is in the
hundreds, and it's quickly corrected by 355/113, which blows it out of the
water, getting within 0.000008% of the right value.

We can see this directly in the continued fraction:

    3 + 1/(7 + 1/(15 + 1/(1 + 1/(292 + ...))))

If a number is big, that means that it's really good to truncate just before
that number, because 1 + 1/(292 + ...) is very very close to 1. We know that the
rest of the series is somewhere between 0 and 1 so this is somewhere between
1 + 1/292 and 1 + 1/293, both of which are basically 1.

So continued fractions give better and better rational approximations because
the error is bounded; and a rational approximation is very good when the next
number in the continued fraction is huge.

What does that mean for phi? Phi, you'll recall, was given by:

    >>> take(20, continued_fraction((1 + Decimal(5).sqrt())/2))
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

It means that all of the rational approximations are *as bad as they can be*.
You cannot get worse. And in this sense, the golden ratio is indeed the *most
irrational number*.

# Sunflower spirals
Nature doesn't like rational approximations. Suppose you are a sunflower, and
you're going to grow these big flowery spaces full of seeds. You're going to do
this by a really simple spiral algorithm: turn a certain amount and push out a
seed, turn again and push out another seed, and on and on. How much should you
turn?

A good rational approximation here would mean "the seed is near another seed."
As those seeds "stack up" they look like lines! So a rational approximation
would look like a slightly-curving line. So for example if you tried to turn π
rotations before emitting a seed, it would actually appear for a while like 7
curving lines until they spiraled out enough to stack up like 113 lines, which
would appear until you had 33215 lines -- because those are the uncommonly good
rational approximations for pi.

But you don't want seeds near other seeds! So naturally, trying to space your
seeds out evenly, you'll find that the place where there's the most space for a
seed will come from turning a distance φ around. Sure, there will be rational
approximations to φ, but they'll be as bad as they can be.

By the way, what are the rational approximations to phi?

    >>> ', '.join(str(approx(phi, n)) for n in range(1, 13))
    '1, 2, 3/2, 5/3, 8/5, 13/8, 21/13, 34/21, 55/34, 89/55, 144/89, 233/144'

Hey... those are Fibonacci numbers! So it is hard to count the "spirals" in a
sunflower and they seem to "merge together", but if you really settle on a
system for counting them, you'll find a Fibonacci number of spirals, because
you'll be trying to rationally approximate the golden ratio.

# Wait, where did Fibonaccis come from?
The Fibonaccis are defined by a recurrence which mathematicians would write as:

    F_n = F_{n - 1} + F_{n - 2}

with appropriate "boundary conditions" like F_0 = 0, F_1 = 1. They are therefore
the sequence:

    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, ...]

In computer programs we'd probably generate them with a "current" and a "next"
variable:

    def fibs():
        current, next = 0, 1
        while True:
            yield current
            current, next = next, current + next

Here's where the connection between the Fibonaccis and the golden ratio comes
from. Suppose we start with a rectangle of size M x N and perform the "golden
rectangle" procedure above on it:

    +−−−−−−+             +−−−−−−+−−−−−−−−−−−+
    |  M   |             |  M   |    N      |
    |      |             |      |           |
    |     N|     -->     |     N|           |
    |      |             |      |           |
    |      |             |      |           |
    +−−−−−−+             +−−−−−−+−−−−−−−−−−−+

After rotating by 90 degrees we find that this procedure takes our rectangle
(M, N) and converts it into a rectangle (N, M + N). And that's the same as
taking (current, next) and converting it to (next, current + next). That's the
big connection; the Fibonaccis come when you try to "goldenize" rectangles which
look like (0, 1) or (1, 1). You sometimes see other such sequences in nature
which are like the Fibonacci sequence; they can start like (2, 2), which gives
the numbers `2 F_n` (i.e. double every Fibonacci in the sequence), but also you
can start with (1, 3) to get totally non-Fibonacci numbers [1, 3, 4, 7, 11, ...]
    def approximations(number, n):
        return ', '.join(str(approx(pi, n)) for n in range(1, n + 1))

After lots of these iterations the Fibonacci rectangles get closer and closer to
being a golden rectangle, so that F_n / F_{n - 1} ≈ φ. We can actually be even
more precise than this.

Suppose we try to solve the Fibonacci recurrence with a sequence which looks
like x^n. In other words, we want:

    x^n = x^{n - 1} + x^{n - 2}

Divide by x^{n - 2} and this becomes:

    x^2 = x + 1

Which is exactly the equation for both φ and -1/φ. Actually, a very cool thing
about the Fibonacci recurrence is that it is *linear* which means that if:

    A_n = A_{n - 1} + A_{n - 2}, and
    B_n = B_{n - 1} + B_{n - 2}, and
    C_n = a A_n + b B_n,

    then C_n = C_{n - 1} + C_{n - 2}.

In other words, we can *scale* solutions to the recurrence and *add* them as we
like.

As a surprising consequence, *any* solution to the Fibonacci recurrence can be
expressed as:

    F_n = A φ^n + B (-1/φ)^n

for some A and B. It's not hard to see why: we just observed that this form will
satisfy the Fibonacci recurrence, so you just have to make them match for F_0
and F_1. But there's some A and B which do that. Just as an example, let's take
the *actual* Fibonaccis, F_0 = 0, F_1 = 1:

    A φ^0 + B (-1/φ)^0 = 0, thus:
        A + B = 0
        A = -B.

    A φ^1 + B (-1/φ)^1 = 1, thus:
        A [1/2 + √(5)/2] − A [1/2 − √(5)/2] = 1,
        A √(5) = 1,
        A = 1/√(5).

So actually, any term of the Fibonacci sequence can be computed as simply:

    F_n = [φ^n − (-1/φ)^n]/√(5)

It gets even better because |-1/φ| < 1 and so this goes exponentially fast to 0.
We can thus just round this number to the nearest integer. We even get lucky for
the very first numbers:

    >>> [int(round(phi ** n/Decimal(5).sqrt())) for n in range(0, 17)]
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

So that's the deep connection between the Fibonaccis and the Golden Ratio. It's
not so complicated; they come from trying to "goldenize" a non-golden rectangle
and φ^n is a sequence which satisfies the Fibonacci recurrence.

## Some caution about computations

It's usually said that this latter way of calculating Fibonaccis is "O(1)" while
the addition formula is "O(n)". This is a dangerous way of speaking for computer
scientists.

First off, the output Fibonacci grows like φ^n ,and thus is O(n) digits long. So
you *must* take n bits to write it. There can be no O(1) algorithm! 

Second, since we are adding approximately n-bit numbers n times, the addition
program is actually O(n^2). A rapid exponentiation can be done in log(n)
multiplications but we will probably need to be multiplying n-bit floating
point numbers to avoid a loss of precision, so the exponentiation program would
still be something like O(n^2).

Let me make this more precise by showing you how to use multiplications to
compute large Fibonaccis faster. Let us use bignums, and consider numbers of the
form

    (a, b) ↔ a + b φ

We find that the multiplication rule for two such numbers is:

    (a, b) * (c, d) = (a + b φ) (c + d φ) = a c + a d φ + b c φ + b d (φ + 1)

because φ² = φ + 1. This means that:

    (a, b) * (c, d) = (a c + b d, b c + (a + b) d)

Furthermore the operation φ * (c, d) = (d, c + d) as we've come to expect.
Starting from φ = (0, 1) we thus have the pattern that φ^n = (F_{n - 1}, F_{n}).
This saves us the tedious step of dividing by the square root of 5. Now, we can
generate an arbitrary Fibonacci by rapid exponentiation by squaring:

    def fib(n):
        def times(M, N):
            a, b = M
            c, d = N
            return (a*c + b*d, b*c + (a + b)*d)
        acc = (1, 0)
        phi_to_the_k = (0, 1)
        while n != 0:
            if n & 1 == 1:
                acc = times(phi_to_the_k, acc)
            phi_to_the_k = times(phi_to_the_k, phi_to_the_k)
            n = n >> 1
        return acc[1]

There is a naive upper bound for the running time here of O(n^2 lg(n)), because
the numbers involved grow in length like len(fib[p]) ≈ α p for some α, and
multiplying two such numbers takes a time ~ α² p², and just assuming that all
of the numbers are as large as p = n gives log(n) multiplications which take
time n² each.

It turns out that we're actually doing a little better than this. The length of
the numbers is actually p = 2^q and we sum for q from 1 to log2(n). But this is
just a geometric series:

    sum((2^q)^2 from 1 to log2(n)) = sum((2^2)^q from 1 to log2(n))
        = [(2^2)^(log2(n) + 1) − 1] / [2^2 − 1]
        = [4 (2^log2(n))^2 − 1] / 3
        = (4/3) n^2 − 1/3

Hence it just contributes a multiplicative factor of 4/3, not an extra log(n)
factor. So even if the above algorithm is *faster*, it is not *asymptotically*
faster; they are both Θ(n²).

I do not know if there is an asymptotically faster algorithm; like I said, there
is a lower bound of Θ(n) due to the output length.

Finally, we should remember that the *size of the input* is not n but log(n),
and so strictly speaking, calculating the nth Fibonacci is *exponential* in the
input size. It takes 5 decimal digits to write the input of `fib(50000)` but it
takes 10450 decimal digits to write the output.

Just to benchmark, I simplified the code of both to:

    def fib1(n):
        a, b, c, d = 1, 0, 0, 1
        while n != 0:
            if n & 1 == 1:
                a, b = a*c + b*d, b*c + (a + b)*d
            c, d = c*c + d*d, 2*c*d + d*d
            n = n >> 1
        return b

    def fib2(n):
        a, b = 0, 1
        for k in range(n):
            a, b = b, a + b
        return a

Hmm. Surprisingly, if I benchmark time_of(fib1, n)/time_of(fib2, n) seems to be
increasing with log(n) all the way out to n = 2**20 or so. I wonder why that is?
Is multiplication not O(n^2)?