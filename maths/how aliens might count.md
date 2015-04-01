# How aliens might count
There are a lot of things that we might do differently from aliens that we meet. For instance, we have a fixation on the number π ≈ 3.14159, but an alien might be more interested in its square root, which appears in the factorial of half-integers. Some alien probably discovered that the area of a circle with diameter D is σ² D² where σ = (1/2)!. Alien kids would memorize that

    σ = 0.
    8862 2692 5452 7580 1364 9083 7416 7057 2591 3987 7472 8061 1935 6410 6903
    8949 2645 5642 2955 1609 0687 4753 2836 9272 3327 0811 3411 8121 4128 5333
    1180 7643 2862 2113 0126 2546 8548 0139 3534 2310 1884 9326 5525 6142 4962
    5865 1447 5413 1144 6604 7689 6339 8140 0087 3195 0767 5739 8602 5835 0095
    0926 1700 9292 7234 8724 7456 3201 5696 0887 7629 5310 8202 7096 6625 0453
    1992 0380 6866 7387 3757 6716 8339 9489 4682 9259 1820 4397 7255 8258 0869
    3800 2953 3696 7158 9566 6404 9274 2312 4092 4510 2732 7426 0978 0662 5780
    8237 3375 7521 3693 8052 8053 9980 6355 3605 0301 8602 2241 8361 8264 8306
    8540 4716 1749 4158 3421 2106 9228 5480 4560 2102 1389 2889 0343 4738 ...

Except, well, they probably won't have 5 fingers on each hand and therefore they probably won't use base-10 digits to encode numbers. Hence: this essay.

# Hexadecimal
Probably the most obvious counting system to use is binary and its cousin, hexadecimal. Any aliens who we're likely to find are probably using some forms of digital computer, and the simplest way we've worked out to do this involves two-state units called "bits" which can be in one of two arbitrarily-labeled states. We usually say "off and on" or "zero and one" but if you think about it, even in a memory cell where a certain wire can either be at electric potential +5V relative to ground, or at ground level, the choice of which of those is "off" and which is "on" is highly arbitrary, because one is a physical property while the other is a *symbol*, and the mapping of symbols to reality is an arbitrary human convention which can even vary from chip-maker to chip-maker.

Hexadecimal has a huge advantage over octal, which is that the base (16) is a square number. To explain why this is a good thing, we should speak about orders of magnitude.

In physics, we often speak about "orders of magnitude", which are factors of 10 between two numbers with the same units. For example, young-Earth creationists think that the universe is "on the order of" ten thousand years old; it doesn't matter at that scale whether you think it's, say, eight thousand years old or twenty thousand, those are all about the same order of magnitude. By contrast, cosmologists think that the universe is on the order of ten *billion* years old, and it doesn't matter too much at the scale that I'm speaking whether it's nine billion or thirteen point six billion years old. Without caring about these specifics we can say that there's about a million-fold difference, or six orders of magnitude difference, between these two timelines. So at least one of these two groups is (and maybe both are!) very wrong, to the extent that there is a *difference in character* between them. This happens because a millionfold difference is on the order of this gap: assume that you show someone a picture from your hiking in Nepal, and in the background of the picture you can see Mt. Everest, which is almost ten kilometers above sea level. Let's say that on this picture it's only about a centimeter high: that's a millionfold difference. The gap between cosmologists and young-Earth creationists is on the level of someone looking at the photograph and saying, "Oh, that mountain is not *that* high, I've climbed larger hills on my bed while rolling over in my sleep, I don't see what the big deal is, I can fit that mountain between my fingers." Clearly the quantitative difference is so large that it induces an immense qualitative difference in how you think about that time, or that distance, respectively.

Now, why do we use factors of *ten*? Well, two reasons. The first is a little technical: this "what's the approximate multiplicative factor, up to 10%" question is *intrinsically logarithmic*, so we have to use a factor of **something**. The reason that we use ten is that we can just count digits to figure out what the order of magnitude is, and what this multiplicative factor is.

Well, since 16 is a fourth power, when we work in base-16 we can talk about half-orders of magnitude (factors of 4) and quarter-orders of magnitude (factors of 2) without any fear. So if something were a factor of 500,000 larger than another thing, in base-16 we would say that there are "4.c orders of magnitude" (meaning four-and-three-quarter powers of 16) between the two things.

Well if there's such great benefit, what's the problem? Why don't we teach this to everyone? The basic problem for humans is how big the times table is:

    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0
    0    1    2    3    4    5    6    7    8    9    a    b    c    d    e    f
    0    2    4    6    8    a    c    e   10   12   14   16   18   1a   1c   1e
    0    3    6    9    c    f   12   15   18   1b   1e   21   24   27   2a   2d
    0    4    8    c   10   14   18   1c   20   24   28   2c   30   34   38   3c
    0    5    a    f   14   19   1e   23   28   2d   32   37   3c   41   46   4b
    0    6    c   12   18   1e   24   2a   30   36   3c   42   48   4e   54   5a
    0    7    e   15   1c   23   2a   31   38   3f   46   4d   54   5b   62   69
    0    8   10   18   20   28   30   38   40   48   50   58   60   68   70   78
    0    9   12   1b   24   2d   36   3f   48   51   5a   63   6c   75   7e   87
    0    a   14   1e   28   32   3c   46   50   5a   64   6e   78   82   8c   96
    0    b   16   21   2c   37   42   4d   58   63   6e   79   84   8f   9a   a5
    0    c   18   24   30   3c   48   54   60   6c   78   84   90   9c   a8   b4
    0    d   1a   27   34   41   4e   5b   68   75   82   8f   9c   a9   b6   c3
    0    e   1c   2a   38   46   54   62   70   7e   8c   9a   a8   b6   c4   d2
    0    f   1e   2d   3c   4b   5a   69   78   87   96   a5   b4   c3   d2   e1

How do we measure this complexity? Clearly there are "rules" for multiplying by 0, 1, 2, 4, and 8. In addition you can exploit those rules to multiply by 6 more easily: multiply by 3 (requiring memorization) then double (by rule). So 6 * 3 = 12 is subsumed by 3 * 3 = 9 and 2 * 9 = 12, if you can learn it. So probably the best measure is to count the number N of numbers which are coprime to your base B, then compute

    (B − N − 2) +  N * (N + 1) / 2
        = B + N * (N − 1) / 2.

This is roughly "number of rules to be memorized" (ignoring rules for 0 and 1) plus "number of exceptions to be memorized", where we consider as exceptions all of the coprime numbers less than or equal to the maximum digit. (You could cut this threshold lower with "all of the primes" but I'm not sure it helps much.)

For decimal, N=3 and the cost is 7 + 6 = 11. For hexadecimal, N=7 and the cost is 28. So we're looking at something (multiplication) which might take about three times as long to teach to a child. However, aliens may well be five times smarter than us, in which case this may seem like a relatively easy thing to teach to their kids.

There may also be ways to mitigate this by switching to binary addition. A school that teaches hexadecimal might do multiplication by the process, "convert to binary, multiply by the simple binary rules, then convert back to hexadecimal." But chances are this will not be as fast or reflexive for later students: by now, you have assimilated 3 as a distinct number with its own threeness, and 7 as a distinct number with its own sevenness, and memorized 3*7 in your elementary school, so that if I ask you to multiply 13 * 7 you can probably see 70 being added to 21 in your and the 91 comes out pretty effortlessly. Contrast this with the same situation in hexadecimal, where this is a single-digit thing that "should have been memorized". Instead someone needs to mentally follow the process:

    d * 7   =  1101 * 111  =         1101    =  101 1011
                                    11010    =    5    b
                                 + 110100
                                 ========
                                  1011011

This process is a lot simpler, with ~14 rules, but because the process of actually multiplying invokes different numbers than the base, there is a good chance that someone cannot do "mental math" at the same level.

## Duodecimal
If we're scaling back from hexadecimal then the obvious next step is a real system that used to be used in the Ancient Middle East: base-12, or duodecimal. To this day, one country still uses "feet" made up of twelve "inches": it is a natural unit choice when you want to start talking about both quarters and thirds. This is slightly larger than decimal but still has N=3 and hence a cost of only 13.

There is a cost (which we are paying right now with decimal) to this approach, which is that we have to implement complicated algorithms to get base-2 computers to use numbers that we've written in our own native bases. With this cost, it might be worth asking what would happen if we had smarter computers, too.

# Balanced ternary
When computers came out, logic elements typically had two states. These could be realized however you wanted mechanically, as long as the machine would *do* different things based on the different states. So one of the states could be "this wire is raised to +5V above the ground voltage" or "raised to +15V above" or even "lowered to -5V below." So the set of voltages `{0, +5V}` works as a valid `{0, 1}` pair.  But, supposing aliens like symmetry, this state of affairs might not appeal to them. Suppose instead they use the set of voltages `{-5V, 0, +5V}` for symmetry. This corresponds to a "trit" or ternary digit, and the most natural way to view these "trits" is as the states `{-1, 0, 1}`. These also correspond to a system of logic which has a "fuzzy" middle value, useful for systems where you want to simplify "true, false, not known yet."

Let me define `/` as `+1` and `\` as `-1` with `−` as 0. Then you can write numbers using this digits by just taking the next "place" to be 3 times whatever its digit is. So, counting from 1 to 99 gives:

     +       1       2       3       4       5       6       7       8       9
     0       /      /\      /−      //     /\\     /\−     /\/     /−\     /−−
     9     /−/     //\     //−     ///    /\\\    /\\−    /\\/    /\−\    /\−−
    18    /\−/    /\/\    /\/−    /\//    /−\\    /−\−    /−\/    /−−\    /−−−
    27    /−−/    /−/\    /−/−    /−//    //\\    //\−    //\/    //−\    //−−
    36    //−/    ///\    ///−    ////   /\\\\   /\\\−   /\\\/   /\\−\   /\\−−
    45   /\\−/   /\\/\   /\\/−   /\\//   /\−\\   /\−\−   /\−\/   /\−−\   /\−−−
    54   /\−−/   /\−/\   /\−/−   /\−//   /\/\\   /\/\−   /\/\/   /\/−\   /\/−−
    63   /\/−/   /\//\   /\//−   /\///   /−\\\   /−\\−   /−\\/   /−\−\   /−\−−
    72   /−\−/   /−\/\   /−\/−   /−\//   /−−\\   /−−\−   /−−\/   /−−−\   /−−−−
    81   /−−−/   /−−/\   /−−/−   /−−//   /−/\\   /−/\−   /−/\/   /−/−\   /−/−−
    90   /−/−/   /−//\   /−//−   /−///   //\\\   //\\−   //\\/   //\−\   //\−−

Negative numbers fit very nicely into this picture as follows: take the number that you want to represent and flip it vertically (i.e. swapping `\` for `/` and vice versa) to make it negative, so e.g. `-8` is represented as `\−/`. The leading trit of `/` or `\` specifies whether something is positive or negative, just as a leading `+` or `−` does for us.

You might dislike the treatment of even numbers, since it seems like they have lost any easy patterns, but you'd be wrong: In this system, a decimal number is even if it has an even number of slashes (forwards plus backwards) in it. (It is divisible by 4 if the slashes sum to 0 when you flip every other digit, but that's a bit more difficult.) Furthermore there is a highly symmetric times-table:

    *  \  −  /
    \  /  −  \
    −  −  −  −
    /  \  −  /

In this system, there really is only one "rule"/"exception" to remember (that -1 * -1 = +1). So it has an extremely low cognitive load, just as binary does.

Aside from just looking pretty, they are also *compact*: by one metric, trits are the most compact base in which to store information. Suppose that we store information in cells which can hold B different values. Then raising B lets you store the same information in fewer cells, so that's a pressure that drives B upwards. To apply a downward pressure, suppose that the "cost" of each cell is proportional to B. To store some number N of bits you need `N / lg B` cells, so the total cost is `N B / lg B` for some proportionality factor `k` which won't matter for our purposes, and the base-2 logarithm `lg`. Plotting `B / lg B` gives:

       B      1      2      3      4      5      6      7      8
    B/lg B    ∞      2    1.893    2    2.153  2.321  2.493  2.667

So it might let you save as much as 10% on your computers as compared to base-2 or base-4.

# Balanced novemal
In fact that times-table is so simple that you may want to expand to 9x9, which has the earlier advantages (simpler times-tables, cheaper computers) as well of being a square base (half orders-of-magnitude). First we need a set of 9 digits; I am choosing these to be the mirror-symmetric ASCII characters:

    -4   -3   -2   -1    0    1    2    3    4
    \\   \-   \/   -\   --   -/   /\   /-   //
     w    p    u    q    o    d    n    b   m

Since there are at least 83 English words that can be formed with these letters, I strongly recommend that if you use these units to write a number, you prefix with a `:` character or something like that. Yes, 164 nuns is :nun nuns. I apologize in advance for any children who get hung up on the numbers :boob, :poop, and :dumb.


    * |  w    p    u    q    o    d    n    b    m
    --|---------------------------------------------
    w | nu   db   dq    m    o    w   qd   qp   un
    p | db   do   dp    b    o    p   qb   qo   qp
    u | dq   dp    m    n    o    u    w   qb   qd
    q |  m    b    n    d    o    q    u    p    w
    o |  o    o    o    o    o    o    o    o    o
    d |  w    p    u    q    o    d    n    b    m
    n | qd   qb    w    u    o    n    m   dp   dq
    b | qp   qo   qb    p    o    b   dp   do   db
    m | un   qp   qd    w    o    m   dq   db   nu

If you can remember the sign flip rules ("lower" digits are negative, flip up-down to negate a digit) then there are only eight more things to memorize, namely:

    o * [x] = o,   (zero times anything is zero)and
    d * [x] = [x]  (one times anything is that thing)
    n * n = m      (two times two is four)
    n * b = dp     (two times three is six = 9 - 3)
    n * m = dq     (two times four is eight = 9 - 1)
    b * b = do     (three times three is nine)
    b * m = db     (three times four is 12 = 9 + 3)
    m * m = nu     (four times four is 16 = 18 - 2)

So for example to rederive p * u you say "those are both negatives so I flip them up to b * n, which is dp, which gets flipped twice because I have two negatives, so the answer is still just dp = six."

## Converting to balanced novemal
You might think that we couldn't test novemals easily for divisibility by 2 or 5, so why bother? Actually, there is a trick in base-10 for testing for divisibility by 9: add up the digits. This operation preserves the remainder after division by 9, so you get to see the remainder, so if the resulting number is divisible by 9 then so was the original. Novemals can therefore also be easily tested for divisibilility by 2, 4, and 8, in just the same way.

We can use this property to make it even more efficient for humans to convert from decimal to novemal. The basic idea is to get the remainder first, convert it to balanced form (i.e. if it's greater than 4 then subtract 9), emit the corresponding digit, subtract the remainder from the number, then divide by 9 and go again.

So the number 2015 goes like this:

            2016           225          27
    2015 <        > 224 <       > 25 <      >  3
             -1            -1           -2

We start with 2015. Adding the digits gives 8 which we balance to be -1. We subtract that and write 2016 on top, then divide to get 224. We again sum digits and find 8, so we write -1 and then 225, and when we divide we get 25. The sum of the digits of 25 is 7, so we write -2 and 27. We divide to get 3, see that this is less than or equal to 4, and stop. In Python the algorithm is:

    def nov(n):
        digits, flip, out = "odnbmwpuq", False, ""
        if n < 0:
            flip = True
            n = -n
        while n > 4:
            q = n % 9
            out = digits[q] + out
            n = (n - q) / 9 + (1 if q > 4 else 0)
        out = digits[n] + out
        return out if not flip else ''.join([digits[-digits.index(x)] for x in out])


# Balanced quinqual and vigintiquinqual
Try saying that five times fast; "viginti quinque" is the Latin word for 25. If you're willing to make your computers 15.3% more costly by the previous metric, you can represent states as *quints*; for example your computer can be based on the voltages `-10V, -5V, 0V, +5V, +10V`. Extending the 3x3 times table to 5x5 yields:

    * |   ⊥   \   −   /   ⊤
    --|----------------------
    ⊥ |  /\   ⊤   −   ⊥  \/
    \ |   ⊤   /   −   \   ⊥
    − |   −   −   −   −   −
    / |   ⊥   \   −   /   ⊤
    ⊤ |  \/   ⊥   −   ⊤  /\

Basically the only thing to memorize here is `⊤ * ⊤ = /\`. What about balance base-25, which is also a square number? Focusing only on the positive part of the times table yields:

     * |  −/   −⊤   /⊥   /\   /−   //   /⊤   ⊤⊥   ⊤\   ⊤−   ⊤/   ⊤⊤
    ---|-----------------------------------------------------------------
    −/ |  −/   −⊤   /⊥   /\   /−   //   /⊤   ⊤⊥   ⊤\   ⊤−   ⊤/   ⊤⊤
    −⊤ |  −⊤
    /⊥ |  /⊥
    /\ |  /\
    /− |  /−
    // |  //
    /⊤ |  /⊤
    ⊤⊥ |  ⊤⊥
    ⊤\ |  ⊤\
    ⊤− |  ⊤−
    ⊤/ |  ⊤/
    ⊤⊤ |  ⊤⊤

In this case you need to memorize a lot --2,3,4,6,7,8,9,11,12,13,14
 (3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15),


# New Math tangent

During my childhood, a change in teaching mathematics was accomplished: a transition from what was called the "Old Math" to the "New Math." As one of the unfortunate kids in the middle of this; I had to learn both! The emphasis on the "old math" was quickly and efficiently getting the right answer. Arithmetic was done in the mod-10 ring without ever explaining these "rings" to kids explicitly; you were simply expected to memorize that `1 − 7` was `4` plus some sort of carry due to the impropriety of the operation, so that in calculating `301 − 27` you would cross out the 2, writing in order:

      3 0 1        3 0 1        3 0 1        3 0 1
     −  2 7       −  X³7       −¹ X³7       −¹ X³7
    −−−−−−−−     −−−−−−−−     −−−−−−−−     −−−−−−−−
                       4          7 4        2 7 4

Under the "New Math" you were instead expected to understand a bit more about what you were doing, and hence the emphasis was instead to "borrow" a 1 from the 0, which, since you couldn't do it, would trigger a further borrowing:

                   2            2  9         2  9         2  9         2  9
      3  0  1      X 10  1      X XX 11      X XX 11      X XX 11      X XX 11
     −   2  7     −   2  7     −   2  7     −   2  7     −   2  7     −   2  7
    −−−−−−−−−−   −−−−−−−−−−   −−−−−−−−−−   −−−−−−−−−−   −−−−−−−−−−   −−−−−−−−−−
                                                   4          7 4        2 7 4

This process was vocalized outright as "we have to borrow a ten as ten ones" or "borrowing a hundred as ten tens."

As a helpful side effect of this "New Math", a lot of kids were taught that there was nothing special about the base-10 number system, by doing things in base-9 or octal or base-5. This was distracting as hell at the time, but is actually quite true and interesting.
