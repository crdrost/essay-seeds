These are my notes on Real Analysis, in case I ever want to teach a course on
it.

# The Integers
I'm going to start off by assuming that you know a lot about the integers,
including zero and the negatives. It's a lot of axioms when you write it down!
Let a, b, c be integers, then their arithmetic structure looks like this:

    « closure »                    « associative »
        a + b is an integer            (a + b) + c = a + (b + c)
        a * b is an integer            (a * b) * c = a * (b * c)
    « commutative »               « identity elements »
        a + b = b + a                  a + 0 = a
        a * b = b * a                  a * 1 = a
    « additive inverse »
        for all a there exists an integer -a such that a + (-a) = 0
    « distributive »
        a * (b + c) = a * b + a * c
    « no zero divisors »
        a * b = 0 implies that a = 0, b = 0, or a = b = 0.

This last rule is actually pretty interesting, because if you think about it all
of the other rules would be compatible with the definition of a trivial sort of
multiplication as `a * b = 0 for all a and b`. Real analysis is probably the
first mathematics course people have where you really start to question these
basic ideas which were forced upon you in earlier grades -- is conventional
multiplication (as repeated addition) the *only* multiplication which fits those
rules? Or are there others?

What about multiplicative inverses, the way that there are additive inverses?
You probably know that in order to add these, you generally construct the
*rational* numbers. We'll do that explicitly, to show how new numbers can be
constructed.

# Set Theory
In mathematics and programming, we have *primitives* whose existence goes
unquestioned. The integers above are a primitive from which we are building
our mathematics, but they could be defined in certain more-basic terms. We will
call all of our primitives, and anything which we can build from them, as
mathematical *objects*. In a certain sense the only object we really need are
the sets, and we can build integers and rationals and even logic from those. So
it is important to review these primitives and make sure that we know what they
are.

Another useful idea which we can take as primitive is the ordered pair of
objects: we say:

    (a, b) = (c, d) if and only if a = c and b = d.

This is a recursive definition -- in other words, `a` and `b` don't have to be
integers, they could also be ordered pairs, or even sets! Ordered pairs give us
a "glue" to collect together our primitives into these objects. As the name
implies, order is important: `(1, 2) ≠ (2, 1)`.

Sometimes we don't want *glue* so much as a *basket* to collect a bunch of
objects together with, so that we can refer to them by the same name. This
notion we call a *set*. A set is a collection of objects: the order does not
matter, and repetition in the description does not matter. The fundamental
relationship which sets have with each other is the "contains" relation, which
is usually written as follows:

    x ∈ S  « x is in S »;
    x ∉ S  « x is not in S ».

Here `A` is the set, and `x` is some arbitrary object. There is a very important
set which contains no objects at all, called empty set `{}` (also denoted as
`∅`). As for other sets, we have already met the set of integers, which have an
official name: ℤ. Certain finite sets can be listed directly, like
`{1, 2, 3}`, in curly braces. It is worth re-emphasizing that order does not
matter and repetition does not matter, so that `{1, 2, 3} = {3, 1, 1, 2}`. We
see that, like ordered pairs and integers, there is a set equality relation.

Let's make this formal by introducing the notion of subsets. We write "`A` is a
subset of `B`" or just `A ⊆ B` whenever `for all x ∈ A we have that x ∈ B`. So
this means that `{2, 3} ⊆ {1, 2, 3}`. Because subsets are pathologically smaller
we take as a trivial aspect of the definition that `∅ ⊆ S for all sets S`. We
can then define that:

    A = B if and only if A ⊆ B ⊆ A.

In other words, they contain exactly the same objects at the top level. This
notion of "top level" is somewhat important, because sets can contain other
sets. So for example, `2 ∉ {3, 27, {1, 2}, 5}`. Yes, that is a valid set, but
`2` is not one of its elements.

We can begin to build even larger sets with *set-builder notation*:

    squares = {n * n: n ∈ ℤ},
    gt3 = {n ∈ ℤ: n > 2}.

This is read as: "`squares` is the set of all `n * n` such that `n` is in ℤ,
`gt3` is the set of all `n` in ℤ such that `n` is greater than 2."

The first key idea here is that there is a *variable* `n` which is allowed to
describe the system, and there is a *filtering restriction* created by these
words "such that", which is embodied by the symbol `:`. The relation "is in"
could appear on either side or could perhaps not appear at all; we could perhaps
restrict the set in other ways, like the power set `2ᵂ = {a: a ⊆ W}`. (The
syntax here is in part because 2^{1, 2, 3} has 2³ elements which can be mapped
straightforwardly to binary strings `000-111`.) 

It is worth remarking that there must be some sense of restriction when we use
set-builder syntax, because not every well-formed set-builder expression defines
a set. The problem is letting "for all" operate boundlessly on the set of all
sets. If you do this you run into certain paradoxes, most notably Russell's
paradox:

    Let S = {s: s ∉ s}
    Then S ∈ S implies S ∉ S which also implies S ∈ S.

This is "the set of all sets which do not contain themselves." Can sets contain
themselves as elements? The above definition of "set" does not prohibit it! But
whether this thing is a valid "set" really depends on whether we allow all
descriptions which sound "set-like" to be valid. My point here is that, if we
had restricted ourselves to some set of objects `Ω` this would only say:

    S = {s ∈ Ω: s ∉ s}.

Then we nicely escape this paradox: sure such a set `S` can exist; it's just
not in `Ω`! If you're interested in this sort of paradox, it is the driving force
behind the normal understanding of the Halting Problem, Gödel's incompleteness
theorem, and Cantor's notion that there are different magnitudes of infinity.

Caveats aside, we now have a firm idea of set-builder notation. We can use this
to define *intersection*, *union*, and *difference* as:

    « intersection »  A ∩ B = {x: both x ∈ A and x ∈ B},
    « union »         A ∪ B = {x: either x ∈ A, or x ∈ B, or both},
    « difference »    A − B = {x ∈ A: x ∉ B}.

Notice that in all cases we are nicely restricted, so we have no worry of
paradoxes here. You may like to formalize the notion of -B as its own
independent entity above. This again requires a universal set Ω of all objects
which we are interested in considering, we can then denote the *complement* of B
as Bᶜ = Ω − B.

One last notion combining what we have is the Cartesian product:

    A × B = {(a, b): both a ∈ A and b ∈ B}.

This is why we introduced ordered pairs: we simply form a set of all the
different ways that we can "glue together" elements from `A` with elements from
`B`. For example,

    {1, 2, 3} × {3, 4} = {(1, 3), (2, 3), (3, 3), (1, 4), (2, 4), (3, 4)}.

The notion of a "product" is intuitive because the size of the resulting set,
for finite sets, is the product of the sizes of the input sets.

## Sidebar: All you really need are sets
Let me just show you how you could describe numbers with sets alone: you could
start by defining 0 as the set {}, and then you could describe 1 as the set

    1 = 0 ∪ {0} = {{}} = {0}

and 2 as the set

    2 = 1 ∪ {1} = {{}, {{}}} = {0, 1}

In other words, you define that {} is a natural number, and for every natural
number n, S(n) = n ∪ {n} is another natural number, the "successor" of n. (We
would say, n + 1.) In full set-theoretic glory this is ugly, but if you just
write 3 = {0, 1, 2} it's actually quite pleasant to look at. This construction
is due to John von Neumann and satisfies the "Peano axioms", you must then
invent addition, multiplication, subtraction, and the negative numbers.

Similarly, you can now construct the ordered pairs as:

    (a, b) = {{0, {{a}}}, {1, {{b}}}}

I admit, that is painful to look at, and it "wraps" a and b in subsets just so
that in the odd case that `a = {{}} = 1` or `b = 1` we don't accidentally create
ambiguity above. But you can now ask whether the first element is `x` by asking
whether `{0, {{x}}}` is in the set, or whether the first element is `y` by
asking whether `{1, {{y}}}` is in the set, you see, and these can never be
confused for each other.

We have been using words from formal logic like "and" and "or". Formal logic is
also set theory. `A ⊆ B` is really the formal logical statement that `A` implies
`B`, or `A → B`. This is because membership in `A` implies membership in `B`.
Similarly, intersection `∩` is isomorphic to the "logical and" `∧`, union `∪` is
isomorphic to the "logical or" `∨`, complement is isomorphic to "logical not"
`¬`, the universal set `Ω` becomes the logic value `true`, and the empty set
becomes the logic value `false`. You may verify that de Morgan's laws, like
`¬(a ∧ b) = ¬a ∨ ¬b`, do indeed remain in set theory, like `(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ`.

This idea that "sets are all you need" underlies a
major theme in some professional mathematics: a quest to derive all of mathematics from
an axiomatic set theory -- for example the Zermelo-Fraenkel axioms. That isn't
our goal in this course, so we will content ourselves with the integers.

# The Rationals
What do we mean when we say `2/3`? More importantly, what do we mean when we say
`2/3 = 4/6`? Notice that we do not mean ordered pairs, because if we know
anything, we know that `(2, 3) ≠ (4, 6)`.

Surely we mean that, in some sense, `(2, 3)` and `(4, 6)` are "equivalent". You
might even see the sense directly: the idea is that `(2 n, 3 n)` are all
"equivalent" to `(2, 3)` in the rational sense, for all `n ∈ ℤ − {0}`.

So we have these murky ideas floating around, but we want to make them concrete.
The first thing to think about is that `2/3 = 4/6` could, in set theory, mean
that both the thing on the left and the thing on the right are the same set.

"Aha," you say, "I shall construct 2/3 = {(2 n, 3 n): n ∈ ℤ − {0}}." That is a
good start, but when you follow through for `4/6`, you'll find that the set for
`4/6` does not contain `(2, 3)` and is therefore not equal to the above set! The
idea is right -- I will even say that the above construction of `2/3` is right
-- but the approach is wrong.

Okay, so we've got the idea: rationals are sets of ordered pairs; to say that
two rationals are the same number is to say that they are the same set. How will
we formalize that? That is a trickier question, and it requires defining a
relation. What is a relation?

> Let R be any subset of A × B. Then a R b means that (a, b) ∈ ℝ. We say that R
> is a "binary relation" between A and B, and that a is related to b through R.

Well, that was easy, but we care about one subset of relations more importantly:

> For any binary relation R between S and S, we define the following properties:
> 1. reflexivity: x R x, for all x in S
> 2. symmetry: x R y implies y R x, for all x and y in S.
> 3. transitivity: x R y and y R z together imply x R z, for all x, y, z in S.
> A reflexive, symmetric, transitive binary relation is called an *equivalence
> relation* on S.

Now you see what I am getting at; what does it mean to say that these ordered
pairs are "equivalent"? Well, it might mean any number of different things, but
it certainly implies a specific structure, where things are equivalent to
themselves, and equivalent to anything which is equivalent to them, and
equivalent to things which are equivalent to things which are equivalent to
them.

If we know what the equivalence relation is, we can now define an equivalence
class:

> If `R` is an equivalence relation on `S`, then the *equivalence class* of `x`
> under `R` is `{y ∈ S: x R y}`.

This is a set of all the things which are equivalent to our original member.
Now we just need to say what it takes for rationals to be equal. As you learned
in high school, `2/3 = 4/6` because `2 * 6 = 4 * 3`. This is basically all we
need: that is going to become the *equivalence relation* on pairs of numbers,
and then a rational can be the *equivalence class* of a pair of numbers.

Formally:

> Let `P = ℤ × (ℤ − {0})` be the set of pairs of integers for which the second
> is nonzero. Define `~ ⊆ P × P` to be the relation among such pairs:
> 
>     (a, b) ~ (c, d) if and only if ad = bc.
>
> Then `~` is an equivalence relation on `P`. Let `a/b` be the equivalence class
> of `(a, b)` under `~`, then ℚ = `{a/b: (a, b) ∈ P}` is the set of
> *rational numbers*.

We first off notice that it is an equivalence relation: It is reflexive because
`ab = ba`, and it is symmetric because `ad = bc` does indeed imply `cb = da`. It
is transitive because if we now introduce a third pair `(e, f)` then we have:

    a d e = b c e
    a c f = b c e
    c (af + -be) = 0, c ≠ 0
    af + -be = 0
    af = be

So we have an equivalence relation, and we can easily form equivalence classes
`a/b` such that `2/3 = 4/6` simply because `(2, 3) ~ (4, 6)`. 

In an earlier digression I mentioned that one could generate the whole numbers
`ℕ = {0, 1, 2, ...}` from set theory directly, but that one then needs to
construct the negatives to create ℤ from ℕ. One way to construct ℤ
from ℕ follows the exact same description: let
`(a, b) ≡ (c, d) if and only if a + d = b + c`, then each positive integer `n`
is the equivalence class of `(n, 0)`, while each negative integer `-n` is the
equivalence class of `(0, n)`, and there are no other integers in ℤ.

So we observe that we can *embed* ℕ in ℤ and similarly we can embed
ℤ in ℚ by taking z → z/1.

# Operations on the Rationals
You now have seen how to *construct* a set of numbers? Well, not quite! We still
don't have relations of *addition* or *multiplication* for these numbers! To get
such *operations* we must have a general notion of *functions*. What exactly is
a function?

> A *partial function* `f` from `S` to `T` is a subset of `S × T` such that both
> `(s, a) ∈ f` and `(s, b) ∈ f` together imply `a = b`. If `(x, y) ∈ f`, we
> often write that `f(x) = y`. `S` is called the *domain* of `f`, `T` is called
> the *codomain* of `f`, and we often write this information as its *type
> signature* `S → T` as `f: S → T`.
>
> A partial function `f: S → T` is also a *total function*, or simply a
> *function*, if for all `s ∈ S` there is some `t ∈ T` such that `(s, t) ∈ f`.

We can now define *binary operations* on a set S as functions `f: S × S → S`,
and write `a f b = f(a, b)` as notation for them.

We can now say what exactly would be wrong about defining addition as:

    a/b + c/d = (a + c)/(b + d)

which would more formally be the set:

    {(a + c)/(b + d): a/b ∈ ℚ, c/d ∈ ℚ}
    
While that is a perfectly agreeable definition for `(a, b) + (c, d)`, it is not
an agreeable procedure for `a/b + c/d` because it is not *well-defined*: the set
we've just described contains both `((0/1, 1/1), 1/2)` and `((0/2), 1/1), 1/3)`,
which violates the definition of a function because `(0/1, 1/1) = (0/2, 1/1)`
while `1/2 ≠ 1/3`. A function is *not well-defined* when it is given in the form
of a procedure which may give different answers for the same input.

Of course, with the rationals, we are used to an idea that `1/5 + 2/5 = 3/5` and
we can say that due to the fact that `a/b = (an)/(bn), n ≠ 0,` we have in any
case that `a/b + c/d = (ad)/(bd) + (cb)/(bd)` for any well-defined operation
`+`. So we choose normally that `a/b + c/d = (ad + bc)/(bd)` as a rule.

This certainly defines subsets of `{((a, b), c): a, b, c ∈ ℚ}`. But is it
well-defined as a function `ℚ × ℚ → ℚ`? First off, notice that this definition
clearly commutes: `a/b + c/d = c/d + a/b`. The question is then, if `a/b = e/f`,
do we have `a/b + c/d = e/f + c/d`? Here is the proof:

    af = be
    afdd = bedd
    afdd + bcfd = bedd + bcfd
    fd(ad + bc) = bd(ed + cf)
    (ad + bc, bd) ~ (ed + cf, fd)
    (ad+bc)/(bd) = (ed + cf)/(fd)
    a/b + c/d = e/f + c/d

So rational addition is indeed a function `ℚ × ℚ → ℚ`. Similarly we have
rational multiplication, which we of course define as:

    a/b * c/d = (ac)/(bd),

and this is also well-defined. Just like the integers, we have an additive
identity `0/1` and a multiplicative identity `1/1`, the two operations are
associative and obey the same distributive law that they did for `Z`, and we
have additive inverses `(-a)/b`. We actually have something a little more
special now: the multiplicative inverse `a/b * b/a = 1` for every rational
except `0/1`. This is, presumably, why we did it: we can now not just multiply
by three, but also divide by 3, in the sense of multiplying by `1/3`. 

These axioms are the **field axioms**, and we say that the rationals, unlike the
integers, are a *field*, sometimes written `(ℚ, +, *)`. It is important to be
a little careful: there are actually a lot of things to specify with a field,
and a more proper description would probably be `(ℚ, (+, 0, -), (*, 1, ⁻¹))`.
In practice people just assume that the knowledge about the identity and the
inverse "come along with" the operations `+` and `*`, because those two are, we
would say, *group operations*.

The last thing that you might care about is *order*. The rationals have an
ordering, just as the integers did. What is an ordering?

> A relation between S and S is *antisymmetric* if a ≤ b and b ≤ a together
> implies a = b for all a, b ∈ S; it is *total* if for all a, b ∈ S either a ≤ b
> or b ≤ a.
>
> A *total order* on S is a transitive, antisymmetric, total relation ≤ between
> S and S. (A *partial order* is transitive, antisymmetric, and reflexive, but
> need not be total.)

Recall that ℤ was constructed from ℕ = {0, 1, 2, ...}, which was then
embedded within it. On ℤ we had that `m ≤ n if and only if n − m ∈ ℕ`. We
will have to do something similar here, and define the nonnegative rational
numbers in terms of the natural numbers ℕ, with the order of ℚ based on
a nonnegative difference.

That is not so hard: `m/n is nonnegative if m * n ∈ ℕ` is, in fact,
well-defined, and then we can say that:

    m/n ≤ p/q if and only if p/q − m/n is nonnegative.

We can work backwards to recover antisymmetry and totality from those rather
easily, so I won't bore you with the details. One key fact about these orders
is that they play nice with the field operations:

> We say that `(F, +, *, ≤)` is an *ordered field* if and only if all of the
> following hold:
> 1. `(F, +, *)` is a field,
> 2. `≤` is a total order on `F`, 
> 3. `a ≤ b` implies `a + c ≤ b + c`,
> 4. `0 ≤ a` and `0 ≤ b` both imply `0 ≤ a * b`.

We have that, with the operations defined above, the rationals form an ordered
field.

It is worth mentioning one other property of rationals, which is a sort of
counterpart to the unique factorization of the integers: the reduced form. The
reduced form of `p/q` is `(m, n) = (p/g, q/g)`, where `g = gcd(p, q)` is the
greatest common divisor of `p` and `q`. We have `m/n = p/q` but `gcd(m, n) = 1`.
Each rational has a unique reduced form, if we specify that `q > 0` and that the
reduced form of `0/1` is `(0, 1)`. 

This means that we could actually make the "addition" relation
`a/b + c/d = (a + c)/(b + d)` well-defined! All we need to say is that for this
formula we assume that both `a/b` and `c/d` are in reduced form. So you should
feel this sudden freedom in analysis: we could be choosing all sorts of
alternate definitions. Similarly we could choose a different order relation for
the rationals, like the lexicographical pair ordering,

    (a, b) ≤ (c, d) if and only if either a < c or both a = c and b ≤ d.

That isn't well-defined on the rationals as it stands, but it would be
well-defined if you just require that `a/b` and `c/d` are in reduced form; and
then you would indeed have that `1/3 ≤ 1/4` even though `1/3 = 2/6`. Finding
some operations which respect this order among the rationals, on the other hand,
might be a rather tricky challenge.

# The Need for Reals
The Greeks knew that there were some proportions of lines which they could draw,
but which didn't seem to be rational. Today the best-known example is probably
the ratio of the circumference of a circle to its radius, but it turns out that
this took a very long time to prove, and Archimedes developed some very good
rational approximations to it. The one which the Greeks *could* prove was
irrational, was the ratio of a square's sides to its diagonal, given by the
Pythagorean Theorem as:

    x² = 2.

The proof was simple: a proof by contradiction. Suppose for the sake of argument
that `x` is in fact a rational number `m/n` in the above expression, so that:

    m² = 2 n².

We see from the right-hand side that `m²` is even. Now, an odd number of the
form `2k + 1` for integer `k` has a square of the form `4 k² + 4 k + 1`, which 
is also odd. It follows that for `m²` to be even, `m` must itself be even. Let
us phrase this as `m = 2 k` for integer `k`. Then the above equation says:

    2² k² = 2 n²,
    2 k² = n².

From this it follows that `n` is also even, and thus that `gcd(m, n) ≥ 2`. But
this means that a rational solution `x = m/n` can never be in reduced form,
since reduced form states that `gcd(m, n) = 1`. Since all rationals have a
reduced form, we've run into a contradiction: whatever `x` is, it is not in ℚ.

(This last step is often enforced by going back to the beginning of the proof
and making the arbitrary-seeming-at-the-time restriction that `m/n` be in
reduced form. When working with an equivalence class we can have a lot of
freedom to just choose the set member which best suits our proof.)

Now what's really weird about this is that you can form good *rational
approximations* to `x`: in other words, you can make `x² − 2` as small as you
like by choosing `x` properly. So the specific value of `x` is almost like some
sort of "hole" in the number line that we've already got. We want to be able to
fill in these gaps "between rationals" -- of course there's always a rational
`(r + s)/2` between two rationals `r` and `s`, but we need to find something
which cannot be *assigned* a rational even though it can be *approximated* by
rationals.

# From Rational Approximations to a Set Description
This is a key idea from Dedekind. What if we start to think about the set of
all rationals `{r ∈ ℚ: either r ≤ 0 or r² ≤ 2}`? This is in some sense the
entire rational number line up to this mysterious `x`, but not including it. We
have thus partitioned ℚ into a "lesser" and "greater" section, and this set
identifies a point "just between" them.

This set is peculiar because it is *bounded* (at least, from above) but it has
no *maximum* (at least, not among the rationals). These words come up frequently
enough that we should say what they mean:

> Suppose `≤` is a total order on `S` and `A ⊆ S`, then we call `b ∈ S` an
> *upper bound* on `A` when for all `a ∈ A` we have `a ≤ b`. We call `b ∈ S` a
> *lower bound* on `A` when for all `a ∈ A` we have `b ≤ a`. Then we say that
> `A` is *bounded above* if there exists an upper bound on `A`, or *bounded 
> below* if there exists a lower bound on `A`.
>
> The *supremum* of `A`,  denoted `sup A`, is an upper bound `b` such that for
> any `c ∈ S` such that `c < b`, `c` is not an upper bound on `A`. In this
> sense the supremum is the *least* upper bound. If `sup A ∈ A` we call it the
> *maximum* of A.

For finite sets, and sets which have a "clear boundary" in some sense, the
supremum corresponds nicely to what we think of as the "maximum". If we ask for
`sup {r ∈ ℚ: r² ≤ 4}` we can nicely answer that this is `2`. On the other hand,
the supremum can be used for sets which *don't* have a clear boundary, and can
then "escape the set" a little, so that `sup {r ∈ ℚ: r² < 4}}` is also `2` even
though this number is not in that set. We will call a supremum which 

What about `sup ℚ`? We say informally that since ℚ is not bounded above in the
first place that `sup ℚ = ∞`, which is just a symbolic notation to indicate the
reason why we lack a supremum. This is not a "real" problem, in the sense that
it doesn't threaten our notion of *continuity*. Rather, the fact that
`sup {r ∈ ℚ: r² ≤ 2} ∉ ℚ` is a very strong problem for our notion of continuity.
Fixing this problem leads us straight to the real numbers ℝ: the
*completeness axiom* on ℝ states that every non-empty `S ⊆ ℝ` which is
bounded above has a supremum in ℝ.

Now how do we construct the reals? We do the same as we did for rationals: we
construct reals as sets! Sets of what? This time, sets of rationals! Which sets?
Somewhat ironically, ones which do not have maximums:

> A *real number* `r` is a subset of ℚ for which all of the following hold:
> 1. `∅ ≠ r ≠ ℚ`, « not infinity »
> 2. for all `x ∈ r` and `y ∈ ℚ`, `y ≤ x` implies `y ∈ r`, « closed downwards »
> 3. for all `x ∈ r` there is a `y ∈ r` such that `x < y`. « no maximum »
> The set of all real numbers is denoted ℝ.

This construction of ℝ is known as a construction by "Dedekind cuts." The
condition of *no maximum* is, if you like, the driving force behind the fact
that `0.999... = 1.0`. The condition that real numbers be *closed downwards*
allows us to immediately define a total order: for all `r, s ∈ ℝ` we say that
`r ≤ s` when `r ⊆ s`. The fact that we ignore `± ∞` makes the arithmetic a bit
simpler.

# Arithmetic on Dedekind Cuts
It is already pretty amazing that we can easily state the order in this
construction of the reals: that `r ≤ s` when `r ⊆ s`. What's even more
surprising is how simple addition is.

What is addition? Simple: `r + s = {a + b: both a ∈ r and b ∈ s}`. Remember, we
can include duplicate elements in a set definition, so the fact that this set
definition contains infinitely many elements is not troubling. And what is the
additive identity? Simple: `zero = {q ∈ ℚ: q < 0}`.

Well, stating these things is simple, but *checking* them is not so simple.
There are a lot of axioms to check! Is `0` a real number? Is `r + s`? Do we have
that `r + s = s + r`? I will take these in turn.

Since `r` and `s` are both not ℚ there exists, for each, a rational which
they do not contain, call these `a` and `b`. These are upper bounds on those
sets because `r` and `s` are closed downwards, and `a + b` becomes therefore an
upper bound on `r + s`, so `r + s` is not ℚ. It is also not empty. So we
never have `r + s` becoming infinity. Now is it still closed downwards? Let us
go through the above:

    assuming: x ∈ r + s, y ∈ ℚ, y ≤ x.
      x = a + b such that both a ∈ r and b ∈ s, by definition of +.
      y ≤ a + b, applying the above assumption.
      y − b ≤ a, thus (y − b) ∈ r, because r is closed downwards)
      (y − b) + b ∈ r + s, by definition of r + s
      y ∈ r + s

So yes, we have that for all `x ∈ r + s` and `y ∈ ℚ`, `y ≤ x` implies
`y ∈ r + s` and `r + s` is closed downwards. Finally, did `r + s` gain a
maximum? No: for any element `m ∈ r + s` there was an `a ∈ r` and `b ∈ s` such
that `a + b = m`. But there is also some `c ∈ r : a < c`, because `r` does not
have a maximum, thus we have `m < (c + b) ∈ r + s`, and there is no maximum in
`r + s` either. Therefore: `r + s ∈ ℝ`. Whew!

The commutativity and associativity of `+` is pretty obvious in the definition.
That `r + zero = r` is not: every element in `r + zero` has the form `a + b`
for `b < 0`, implying `a + b < a`, so `a + b` is in `r` because `r` is closed
downwards: thus `r + zero ⊆ r`. And if `a ∈ r` there is some `b ∈ r` such that
`a < b` (no maximum), and then we have `a − b < 0` which implies that
`a − b ∈ zero`. But `b ∈ r`, thus `b + (a − b) ∈ r + zero` and `r ⊆ r + zero`.
So indeed, `r = r + zero`.

All of that, while tedious, is pretty straightforward. Let me show you how the
Dedekind cuts suddenly spiral into a tremendous degree of complexity. It comes
when we start to define multiplication and the additive inverses. Let me first
define:

    flip(x) = {y + z: y, z ∈ ℚ and z > 0 and y ∉ x}
    
This could be called the "open complement" of `x`; what I'm really trying to do
here is to form `ℚ − x − {sup x}`, which is why this parameter `z > 0` appears.
Of course, `sup x` might not exist as a rational, but if it does exist, I'd like
to remove it from the set. Now I can define:

    -r = flip({-x: x ∈ r})

So the problem is that `{-x: x ∈ r}` is closed *upwards* and the problem with
`ℚ − {-x: x ∈ r}` is that if `r` was one of those real numbers which we will
identify with a rational `q`, then this set contains `q` as a maximal element.
So in the above definition we have corrected for this, and the above definition
is closed downward, has no maximum, and is neither empty nor ℚ, and we
therefore have generated a real number.

It can now be shown that `r + -r = zero` because the definitions above yield:

    r + -r = {x − (y + z): x ∈ r and y, z ∈ ℚ and z > 0 and y ∉ r}

Since `y ∈ ℚ − r` and `r` is closed downwards and `x ∈ r`, we know `y > x`. Now
if there were a rational `k ≥ 0` which fit this description then we'd have
`0 ≤ x − (y + z)` and hence `y + z ≤ x` for some `x`, `y`, and `z`. But we know
`x < y` and `0 < z`, so we know that `x < y + z`, yielding the contradiction. So
we know that `r + -r ⊆ zero`. The converse is harder to prove: the idea is that
since `ℚ − r` gets arbitrarily close to `r`, we can make `y − x` arbitrarily
small, so that any point in `zero` is in `r + -r`.

The same trouble occurs for multiplication, so we start with a partial function
`prod: ℝ × ℝ → ℝ`, defined as:

    prod = {((r, s), {x * y: x ∈ r, y ∈ s}): r, s ∈ ℝ and 0 ≤ r and 0 ≤ s}.

This is a partial function; it is not defined for negative reals. But it does
indeed map pairs of positive reals to positive reals, quite the same as how the
proof that `+` takes real pairs to reals was performed. Now we just have to
weave around the sign flips associated with negative numbers, so we define `*`
for all real numbers piecewise as:

    r * s = prod(r, s) if 0 ≤ r and 0 ≤ s
    r * s = -((-r) * s), if r < 0
    r * s = -(r * (-s)), if s < 0

I am being a little sloppy by recursively defining this in terms of itself, I
admit. I am doing this because we also have a multiplicative identity
`one = {q ∈ ℚ: q < 1}`, and we must define a multiplicative inverse piecewise:

    r⁻¹ = flip({x⁻¹ : x ∈ r, 0 < x}) if zero < r ≤ one
    r⁻¹ = zero ∪ {0/0} ∪ {x⁻¹ : x ∈ flip(r)} if one < r
    r⁻¹ = -(-r)⁻¹ if r < zero.

Again, one merely needs to confirm that in the first two cases we get the right
closed-downwards no-maximum set of rationals, and then the negative case follows
from that. And then there is a flurry of checking to make sure that the field
axioms on these new definitions are all valid, that they respect the notion of
order that we started with, and so forth.

# From the Set Description Back to Rational Approximations

After all that tedium we are prepared to say:

> For all `q ∈ ℚ`, there is an *embedding* of `q` in ℝ as `{x ∈ ℚ: x < q}`,
> so that the operations `+`, `-`, `*` and `⁻¹` and the relation `≤` acting on 
> these real representations of ℚ are algebraically identical to the
> similarly-named operations defined over ℚ.

But if we're going to be mathematical about this, we should make sure that the
converse is not true -- that the real numbers, as we've defined them, really
are *different* from the rationals! To that effect, I observe:

> Let `S` be any nonempty set of real numbers, then `m = {q: q ∈ r and r ∈ S}`
> is a real number if `S` is bounded above. Furthermore, `m = sup S`.

How do we see this? The above `m` is neither ∅ nor ℚ, and for each `q` there
is some `r ∈ S` to which it belonged, so it automatically contains some
rationals larger than `q` and all rationals smaller than `q`. So the
construction above *exists as a real number*; it satisfies all of the real
number criteria.

Why is that real number the supremum? Well, it is an upper bound because
`r ⊆ {q: q ∈ r and r ∈ S}`, which means `r ≤ m for all r ∈ S`, given how we've
defined `≤`. It is the *smallest* such upper bound because imagine if
`t ⊆ m` were also an upper bound for `m ≠ t`: then there would be some rational
in the set `m − t` where `−` is the set difference. This element again must be
in some `r ∈ S`, otherwise it wouldn't be in `m`. But if it's in some `r ∈ S`
then we `t < r` and `t` was not really an upper bound at all. Thus `m` is the
smallest upper bound, which makes it the supremum.

This is a property which the rationals do not share, so the reals really are
distinct from the rationals: they enjoy a *completeness axiom*: every non-empty
`S ⊆ ℝ` which is bounded above has a supremum in ℝ. The completeness axiom
allows us to construct decimals. Consider first the ratio of successive
Fibonaccis:

    {0/1, 1/2, 3/5, 8/13, 21/34, ...}

All of those numbers are real numbers by virtue of the embedding of ℚ in
ℝ. Furthermore, that is an increasing sequence which is in fact bounded from
above and therefore has a supremum. If you are curious, that number is
(√(5) − 1)/2. Now imagine that I try to form the same number by a decimal
expansion:

    0.618033988749894...

This decimal expansion is nothing more than a sequence of rationals

    {0, 6/10, 61/100, 618/1000, 6180/10000, ...},
    
and we have merely found a convenient and non-repetitive way of writing it. By
taking the supremum of this infinite decimal we do in fact get "all the way
there" to (√(5) − 1)/2, because a supremum does *not* have to be in the set
which it maximizes.

This is hinting at an alternate construction of the real numbers with what are
called Cauchy sequences: sequences of rationals which "get closer" to each other
and therefore to a final result. The definitions that we've been building amount
in this picture to extending the rational arithmetic to all things which can be
*approximated by rationals* directly. 

It turns out that there is always an isomorphism between any other ordered field
which obeys the completeness axiom and ℝ -- to say that there is an
"isomorphism between" two fields just means that there is an embedding of each
in the other, so that their field operations are fundamentally "the same" in
some sense. So ℝ really is *the* ordered continuum of numbers.

# Properties of the Reals

Often in analysis you have access to some simple statement which can be reused
over and over to get correct proofs. So for example we have that the rationals
are *Archimedean*: a word which is a fancy way of saying "none of the
reals are infinite with respect to each other". This can be formally stated as:
if `0 < x < y` then there is some natural number `n` such that `n * x > y`. How
do we do this for the rationals? Write `x = p/q`, `y = a/b`, and then you have
that actually `x * q/p * a/b = y`, so that `x q a = y p b ≥ y`. We can
thus construct `n = q a + 1` such that `n * x > y`. But how would you do this
with the *reals*, where you don't have these sorts of extractable integers?

We would probably construct the least such `n` with the "floor function"
`floor(r) = sup {z ∈ ℤ: z ≤ r}`, the largest integer less than or equal to the
given real number. At this stage we won't even bother making the distinction of
converting `z ≤ r` to `{q ∈ ℚ: q < z/1} ≤ r`, it's just assumed that you know
about the embedding which connects them both. How do we know that `floor(r)` is
defined for all `r`? Because we've got a bounded supremum (which is in fact a
maximum) and therefore `floor: ℝ → ℤ`, with `floor(r) ≤ r`. As you probably
already know, we then have `n = floor(y/x) + 1 > y/x`, thus `n * x > y`. And it
comes from this fact that a bounded set has a supremum. 

Since there is some `n` such that `1 < n * r` we have that `1/n < r` for some
`n`. This means that if `x, y ∈ ℝ`, and `x < y`, there is some `q ∈ ℚ` for which
`x < q < y`. We have some `n` such that `1/n < y − x` Now consider
`sup {m: m ∈ ℕ, m/n < x}`. We have that `m/n ≤ x < m/n + 1/n`, and so
`m/n + 1/n ≤ x + 1/n < y`. It follows that `x < m/n + 1/n < y`.

This will surprise you later in the course because it turns out that there are
many *more* reals than there are rationals, and yet even though one infinity is
absurdly larger than the other, there are still "enough rationals" to make this
statement true. 