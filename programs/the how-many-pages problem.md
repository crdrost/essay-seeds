# Problem Statement

I was reading an average-sized book and I was on a page, when I realized that 
the sum of all of the page numbers before that page was equal to the sum of all 
the page numbers after that page. (The current page is not included in either 
sum.) How many pages did my book have?

# The beauty of brute-force

This is a nice situation where brute-force is a much much faster algorithm to
program than working out all of the mathematics. The novel *Atlas Shrugged* was
a hefty tome weighing in at over 1100 pages. If we set a size limit on our
books of 2,200 pages or so, to give an engineering "safety factor", then this
can be programmed like so:

    >>> def arith(a, b):
    ...     "Compute a + (a + 1) + ... + b."
    ...     return sum(range(a, b + 1))
    ... 
    >>> for p in range(1, 2200):
    ...     for i in range(1, p + 1):
    ...         if arith(1, i - 1) == arith(i + 1, p):
    ...             print(i, p)
    ... 
    (1, 1)
    (6, 8)
    (35, 49)
    (204, 288)
    (1189, 1681)

Altogether this takes about a minute, and the first four answers are there 
within a tenth of a second or so. This is much, much better than spending 
fifteen minutes working out mathematics, so this is an extremely good approach.

But, just humor me -- what if it weren't a *book*? What if our upper limit were
much larger? If our upper bound is N, this algorithm does work proportional to
N³ or so. So if we go from p < 2,200 to p < 10,000, we can already expect this 
to take almost 94 times as long. 

# Some loops have a closed form

The first trick we can use to make this faster is to be able to accomplish 
some of the summation without a loop.

First you need to know the sum of counting numbers. It goes like this: a sum
of counting numbers can be thought of as counting checkers laid out in a 
triangle grid

    o
    o   o
    o   o   o
    o   o   o   o
    4 + 3 + 2 + 1

There is a nice trick to sum these all up quickly and it looks like this: take
two triangles of these checkers together, one red and one black (x), and you 
can make a rectangle:

    o x x x x
    o o x x x
    o o o x x
    o o o o x

This rectangle obviously has 4 * (4 + 1) checkers total, half red and half 
black. So if we say S = 1 + 2 + ... + m, this cute trick says that:

>   2 S = m (m + 1)
>   S = m (m + 1) / 2.

This can apply in multiple ways to our problem, but the fundamental idea would
be to use this trick to rewrite the above code:

    >>> def sumcount(N):
    ...     """Closed form for 1 + 2 + ... + N."""
    ...     return N * (N + 1) / 2
    ... 
    >>> def arith(a, b):
    ...     """Compute a + (a + 1) + ... + b."""
    ...     return sumcount(b) - sumcount(a - 1)
    ... 
    >>> for p in range(1, 10000):
    ...     for i in range(1, p + 1):
    ...         if arith(1, i - 1) == arith(i + 1, p):
    ...             print(i, p)
    ... 
    (1, 1)
    (6, 8)
    (35, 49)
    (204, 288)
    (1189, 1681)
    (6930, 9800)

The computation has gotten a little more complicated to read, but the p=1681 
answer comes in 2 seconds and the p=9800 answer comes in under a minute. We'd
still be stuck at 100 minutes, though, if we went to N = 100,000.

# Heuristics, making the problem look nice

Let's say the sum before is X, the sum of pages after is Y, the current page is
n, and the last page is p. Then we can say that:

>   X + n + Y = p (p + 1) / 2

But we're told two special facts by the problem. The sum before is the same as
the sum after, so X = Y. And X is the sum up to (but not including!) n. We can
write this as:

>    X = Y = 1 + 2 + ... + (n - 1) = (n - 1) n / 2.

This means that:

>   2X + n = p (p + 1) / 2
>   
>   (n - 1) n + n = p (p + 1) / 2
>   
>   n² - n + n = p (p + 1)/2
>   
>   n² = p (p + 1)/2
>   
>   2 n² = p (p + 1)

This form will be useful for number theory later, but for now I'd just like to
apply an approximation which comes from calculus: 

>   √(1 + x) ≈ 1 + x/2 − x²/8, for x << 1.

Casting this into the appropriate form, we can say:

>   n = √(1/2) p √(1 + 1/p) 
>   n ≈ √(1/2) p (1 + 1/(2p) − 1/(8 p²)) for p >> 1
>   n ≈ √(1/2) [p + 1/2 − 1/(8 p)]

We can use this as a heuristic, a way of trimming down our search space on n.
Rather than searching 1000 different places for p = 1000, we will just search
a couple, because 1/(8p) is going to be much smaller than 1.

    >>> def guess_space(n):
    ...     g = int( (0.5**0.5) * (p + 0.5) )
    ...     return (g - 1, g, g + 1)
    ... 
    >>> def sumcount(N):
    ...     """Closed form for 1 + 2 + ... + N."""
    ...     return N * (N + 1) / 2
    ... 
    >>> def arith(a, b):
    ...     """Compute a + (a + 1) + ... + b."""
    ...     return sumcount(b) - sumcount(a - 1)
    ... 
    >>> [(i, p) for p in range(1, 1000000) for i in guess_space(p) 
    ...     if arith(1, i - 1) == arith(i + 1, p)]
    [(1, 1), (6, 8), (35, 49), (204, 288), (1189, 1681), (6930, 9800), 
    (40391, 57121), (235416, 332928)]

For me, this completes (with all the terms up to 1,000,000!) in under ten 
seconds, because we only have to check three of them. 

But ten seconds is still a long time, and this thing seems to be growing pretty
fast. Is there a way to skip several of the *middle* steps, so that we're not
doing so much work?

# Then add some number theory

Remember this expression?

>   2 n² = p (p + 1)

The trick now is to work with prime factors. The numbers, as you may recall, 
can all be "built from" certain prime "atoms" by multiplication, and they can
be built *uniquely*. 

Here's the two tricks. The first trick, is you can't find a number D (other 
than 1) which will evenly divide both p and p + 1. That's because if we assume
that p/D is a whole number, we can see that:

>   (p + 1)/D = p/D + 1/D.

Except if D is bigger than 1, 1/D is a non-whole number like 1/2 or 1/3 or 1/4.
It gets smaller and smaller but it never gets all the way to 0, so this is 
never a whole number, if p/D is.

So that means that we must split the prime numbers in 2 n² between p and p + 1:
one of them gets all of the twos, the other might get all of the threes, and so
on. I can't give a couple of the threes to one and a couple of the twos to the 
other.

The second trick is more complicated. Because n² is a square number, all of its
prime factors come in pairs. So for example 144 is a good square number, and
it is 12 * 12. But this means that it is:

    144 = (2 * 2 * 3) * (2 * 2 * 3) = (2*2) * (2*2) * (3*3)

So the primes in the factorization all come in pairs. This goes both ways: if 
this is true, you can immediately conclude that it's a square number, because
we can split up all the pairs of factors into two numbers, n * n, and then we
know that it's a square number.

Here's the final fact: Either p is odd, or p + 1 is odd.

Now you know that whichever one it is, it's a square number. You see, all of 
the 2's in 2 n² -- any in n, and the extra one out front -- must go to one of 
these numbers, and the other one gets a bunch of odd numbers. But all of those
odd numbers come in pairs! Multiply those pairs together, and you get another
square number!

We could say this more precisely as:

    Either p is odd, and then both p and (p + 1)/2 are square, 
    or else p is even, and then both p/2 and p + 1 are square.

This is what we were looking for earlier, a way to skip the irrelevant items
in the search space. But look at how much time and mental effort it takes to 
develop this idea!

The search now starts from an "oddsquares" set, and we need to define a 
function to check for squareness. None of those is particularly complicated
in python.

Now the results are done in either of the two cases. First off, p could be an
odd square, if (p + 1)/2 is a square number. Or, q = p + 1 could be an odd 
square, if p/2 = (q - 1)/2 is a square number.

We take those two solutions and merge them into one set and then format it 
appropriately to find:

def n(p): 
    return int((p * (p + 1)/2) ** 0.5)

def is_square(n):
    return n >= 0 and (n ** 0.5) % 1.0 == 0

def oddsquares():
    return (o*o for o in xrange(1, 100000002, 2))

[(n(p), p) for p in sorted(
    [p for p in oddsquares() if is_square((p + 1)/2)] +
    [q - 1 for q in oddsquares() if is_square((q - 1)/2)]
)]

    >>> def n(p): 
    ...     return int((p * (p + 1)/2) ** 0.5)
    ... 
    >>> def is_square(n):
    ...     return n >= 0 and (n ** 0.5) % 1.0 == 0
    ... 
    >>> def oddsquares(): 
    ...     return (o*o for o in xrange(1, 100000002, 2))
    ...
    >>> [(n(p), p) for p in sorted(
    ...     [p for p in oddsquares() if is_square((p + 1)/2)] +
    ...     [q - 1 for q in oddsquares() if is_square((q - 1)/2)]
    ... )][1:]
    [(1, 1), (6, 8), (35, 49), (204, 288), (1189, 1681), (6930, 9800), (40391, 
    57121), (235416, 332928), (1372105, 1940449), (7997214, 11309768), 
    (46611179, 65918161), (271669860, 384199200), (1583407981, 2239277041), 
    (9228778026, 13051463048), (53789260175, 76069501249), (313506783024, 
    443365544448), (1827251437969, 2584123765441), (10650001844790, 
    15061377048200), (62072759630771, 87784138523761), (361786555939836, 
    511643454094368), (2108646576008245, 2982076586042449)]

All told, this runs in about a minute and gives me all of the answers less than
100,000,001² (all answers less than 10 quadrillion). 

I want you to notice two things about this code, though. The first thing is 
that it really *needs* to be commented. Nobody looking at any part of this code
could determine what problem it is solving. There are even things which you 
probably don't understand *even though you know the mathematical principles*,
like why there is this weird expression for oddsquares (to cut down on memory
costs) and why the slice `[1:]` happens (because the q = 1 case above is (0, 0)
which may be a valid answer but which was inconsistent with the other programs
we were writing above).

So if the answer that you're looking for was just page 204 of 288, you might 
want to simply try brute force. I know that you may want to flaunt your number
theory skills, but it will always be more compelling and understandable and 
extensible if you use one of the more brute-force methods described above.