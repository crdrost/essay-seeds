These are my notes on Real Analysis, in case I ever want to teach a course on
it.

# The Integers
I'm going to start off by assuming that you know everything about the integers:
zero, the negatives, and the positives. It's a lot of axioms when you write it
down! Let a, b, c be integers, then their algebraic structure looks like this:

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
official name: **Z**. Certain finite sets can be listed directly, like
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

    {n ∈ Z: n > 2}.

This is read as "`n` is in **Z** such that `n` is greater than 2." The `:` means
"such that". Notice that we are now establishing the *variable* `n`. It is
helpful to *immediately restrict* the variable to be in some known set, because
if we do not restrict it in certain ways, we may get certain paradoxes due to
unrestricted quantification. The most famous of these is Russel's paradox:

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
"equivalent" to `(2, 3)` in the rational sense, for all `n ∈ Z − {0}`.

So we have these murky ideas floating around, but we want to make them concrete.
The first thing to think about is that `2/3 = 4/6` could, in set theory, mean
that both the thing on the left and the thing on the right are the same set.

"Aha," you say, "I shall construct 2/3 = {(2 n, 3 n): n ∈ Z − {0}}." That is a
good start, but when you follow through for `4/6`, you'll find that the set for
`4/6` does not contain `(2, 3)` and is therefore not equal to the above set! The
idea is right -- I will even say that the above construction of `2/3` is right
-- but the approach is wrong.

Okay, so we've got the idea: rationals are sets of ordered pairs; to say that
two rationals are the same number is to say that they are the same set. How will
we formalize that? That is a trickier question, and it requires defining a
relation. What is a relation?

> Let R be any subset of A × B. Then a R b means that (a, b) ∈ R. We say that R
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

> Let `P = Z × (Z − {0})` be the set of pairs of integers for which the second
> is nonzero. Define `~ ⊆ P × P` to be the relation among such pairs:
> 
>     (a, b) ~ (c, d) if and only if ad = bc.
>
> Then `~` is an equivalence relation on `P`. Let `a/b` be the equivalence class
> of `(a, b)` under `~`, then **Q** = `{a/b: (a, b) ∈ P}` is the set of 
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
`N = {0, 1, 2, ...}` from set theory directly, but that one then needs to
construct the negatives to create **Z** from **N**. One way to construct **Z**
from **N** follows the exact same description: let
`(a, b) ≡ (c, d) if and only if a + d = b + c`, then each positive integer `n`
is the equivalence class of `(n, 0)`, while each negative integer `-n` is the
equivalence class of `(0, n)`, and there are no other integers in **Z**.

So we observe that we can *embed* **N** in **Z** and similarly we can embed
**Z** in **Q** by taking z → z/1.

# Operations on the Rationals
You now have seen how to *construct* a set of numbers? Well, not quite! We still
don't have relations of *addition* or *multiplication* for these numbers! To get
such *operations* we must have a general notion of *functions*. What exactly is
a function?

> A *partial function* `f` from `S` to `T` is a subset of `S × T` such that both
> `(s, a) ∈ f` and `(s, b) ∈ f` together imply `a = b`. A partial function `f` 
> is also a *total function*, or simply a *function*, if for all `s ∈ S` there 
> exists some `t ∈ T` such that `(s, t) ∈ f`.
>
> If `(x, y) ∈ f`, we often write that `f(x) = y`.
