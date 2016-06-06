# Scott encodings, Church encodings, and Transducers

Every data structure is secretly a fold function. This usually surprises people; a lot of people
don't know that in computing, functions are all you need. Of course, functions are very far from the
"bare metal" of the computer, so in practice there will always be "primitives" which interface
between the two. It's all well-and-good for me to encode strings with a function which produces
other functions which represent numbers -- but then when I want to print this string to the console,
I'm screwed unless my programming language provides support for it!

But still, let's look at the general recipe.

# Functions as glue
The first key insight here is called **currying**, it says that a function of two arguments has the
same shape (is *isomorphic* to) a function which produces a function. In JavaScript we'd write

~~~~javascript
curry = f => (x => y => f(x, y));
~~~~

where the Haskell type signature is

~~~~haskell
curry :: ((x, y) -> a) -> (x -> y -> a)
curry f = \x y -> f (x, y)
~~~~

Now each pair `(a, b)` can be stored as a function in the **continuation-passing** style,

~~~~javascript
cp = val => (f => f(val));
~~~~

To really specify this equivalence it helps to include an explicit type-variable which is otherwise
unspecified; in the Haskell vocabulary you have to enable `Rank2Types` and then write `forall a.` to
generate one of these. It's just a fancy way of saying "these functions do not have any logic which
cares about the specific type of `a`, it can be anything.

So we have that `(x, y)` is isomorphic to `forall a. ((x, y) -> a) -> a`  which, as we've seen from
currying, is isomorphic to `forall a. (x -> y -> a) -> a`. We can use functions to glue two pieces
of data together.

# Functions as choice
If pairs are a type-conjunction, then most of the rest of types involves type-disjunctions. The 
easiest example is Haskell's notion of a boolean value:

~~~~haskell
data Bool = False | True
~~~~

This is called a sum-type: a boolean value can either be the construct on the left or the construct
on the right; both are valid. It's worth taking a pause to think how you'd do this in, say, Java, 
which has strong types but no explicit sum-types. One way is by subclassing and then hoping that
nobody creates further subclasses. To solve the problem of "I want to deal with this logic or that"
you would have to use Java lambdas to delay execution of the logic until runtime, more specifically
since you don't care about the argument you'd probably use a `java.util.Supplier<T>` like so:

~~~~java
abstract class Bool { 
    public abstract <T> T thenElse(Supplier<? extends T>, Supplier<? extends T>)
}
class True extends Bool { 
    public True () {}
    public <T> T thenElse(Supplier<? extends T> a, Supplier<? extends T> b) {
        return a();
    }
}
class False extends Bool {
    public False () {}
    public <T> T thenElse(Supplier<? extends T> a, Supplier<? extends T> b) {
        return b();
    }
}
~~~~

Now you can accept a Bool x, call its thenElse() with two arguments, and you'll do something 
differently in this case versus that case. You just stumbled across the way to encode disjunctions:

~~~~javascript
left = x => (f, g) => f(x)
right = y => (f, g) => g(y)
~~~~

In Haskell we'd write more generally `data Either a b = Left a | Right b` and we see from the above
that it's the same as the sum-type `(x -> a, y -> a) -> a`. Again, by currying we can write this as
something like `(x -> a) -> (y -> a) -> a` without any pair-data-structures. In the special case of
`Bool` which is basically `Either () ()`, the lazy-by-default nature of Haskell lets us simplify 
this even more to say that `Bool` is isomporphic with `a -> a -> a`, rather than 
`(() -> a) -> (() -> a) -> a`.

So that's how to write a data structure which contains information about which branch of a bunch of
possibilities was chosen, using simply functions.

# Recursion: Scott and Church styles

What about recursive data structures like trees and lists? Haskell lists are constructed out of 
cells, which we could write as:

~~~~haskell
data List x = Nil | Cons x (List x)
~~~~

Clearly we see a sum-type `|` and a product-type `,`, and following the above recipe we get:

~~~~javascript
nil = (f, g) => f();
cons = (first, rest) => (f, g) => g(first, rest);
~~~~

This is called the Scott encoding of recursion, and to write it in Haskell we probably need a 
`newtype` wrapper:

~~~~haskell
newtype ScottList x = SL (forall a. a -> (x -> ScottList x -> a) -> a
~~~~

Here I've again used Haskell's laziness to avoid writing `() -> a` for the first argument. So that
is a Scott-encoded list. The only cost is that to deal with them we have to use some recursion:

~~~~javascript
unit = () => [];
listify = (first, rest) => [first].concat(rest(unit, listify));
cons(1, cons(2, cons(3, nil))).call(null, unit, listify); // [1, 2, 3]
~~~~

Notice how `listify` must call `listify` whenever we do it this way. There is also the Church 
encoding which is in my opinion somewhat harder to program with, because you must think wishfully
about the inputs to your function -- but it bakes in the recursive call to the sublist into the 
recipe:

~~~~javascript
nil = (f, g) => f();
cons = (first, rest) => (f, g) => g(first, rest(f, g));
~~~~

Now the same operation is just:

~~~~javascript
cons(1, cons(2, cons(3, nil))).call(null, () => [], (x, sublist) => [x].concat(sublist))
~~~~

The type of this is instead:

~~~~haskell
type ChurchList x = forall a. a -> (x -> a -> a) -> a
~~~~

and in fact the function to convert these is basically `foldr`, the Haskell library function for
list manipulations. In other languages this is called a `reduce` function; e.g. in JavaScript it is
`Array.prototype.reduceRight`. 

So the general recipe is: 

1. 

# 


We just need to decide on the encoding of the `rest` of the list. 


[One of my biggest Stack Overflow answers][SO] involves the simple question, "If in Clojure 
`(map f)` is a transducer, is the type of transducers `[a] -> [b]` or so? Can't we do that with 
Haskell?" 

Before we start proper, this question was forgetting a crucial difference between Haskell, which is
bound to do the simple things you'd expect by the type system, and a Lisp like Clojure, which is
allowed to basically do whatever it wants if it doesn't see all of its arguments. So a standard
place I like to go when thinking of dynamic languages is JavaScript, because it was my first real
language (after BASIC) when I was growing up. In JavaScript we can easily do:

~~~~javascript
function map(fn, list) {
    if (arguments.length === 1) {
        return reduce => (acc, val) => reduce(acc, fn(val));
    } else {
        return list.map(fn);
    }
}
~~~~~~~~~~~~~~

Notice that the first branch of this is hypothetically allowed to do whatever the eff it wants. It
could hypothetically return `4` or `x => x` with no regard for the type system; in this case it is 
returning a function `reduce :: (a, b) -> c` and returning an `(a, d) -> c` by using the function
`fn :: d -> b` to process that incoming `d` into a `b` before it gets handed to `reduce` to do the
rest. This is the *mapping transducer*. But my point is just that Haskell has a very constrained
type system where you cannot map `(d -> b) -> (a -> b -> c) -> (a -> d -> c)`, like this does when
all of the functions are curried, and yet also map the fully applied function 
`(d -> b) -> [d] -> [b]`. Haskell forces everything to be simple; Clojure intentionally complects
these two ideas because they believe transducers will be more useful in the long haul than the 
partially applied `(map f)` would have been.

The only thing that you need to know more specifically for this is that for transducers the above
type `c` and `a` are the same: these "reducer functions" are meant to be part of a fold; in Haskell
the specific fold is called `foldl'` but in Clojure and JS it is called `reduce`. The type of a 
transducer is therefore:

~~~~haskell
{-# LANGUAGE Rank2Types #-}
import Data.Foldable (Foldable, foldl')

type Transducer a b = forall x. (x -> b -> x) -> (x -> a -> x)

tmap :: (a -> b) -> Transducer a b
tmap f = \reduce acc val -> reduce acc (f val)

transduce :: Foldable f => Transducer a b -> (x -> b -> x) -> x -> f a -> x
transduce t = foldl' . t
~~~~~~~~~~

The `Rank2Types` enables the `forall x.` here, which just says that when you call something a
Transducer you must leave this type-variable `x` as a *free* variable, to be decided later: you
can't use any type-aware logic on it.

; this is a type-variable scope which says that once you get to this constructor 
function `Trans` you must have left `x` as a fully general type variable; you are not allowed to
specialize on it the way that you can specialize on `a` and `b` to have, say, a
`Transducer [Int] Int` or whatever. 

You can avoid the newtype wrapper and the 


