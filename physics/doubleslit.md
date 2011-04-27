The Dual-Slit Experiment: how quantum mechanics looks from the inside out.
By Chris Drost

# Introduction: on misunderstandings #

I've noticed a lot of misunderstanding on the subject of quantum mechanics in 
the popular press, and most of it is down to Griffiths' Law of Quantum 
Mechanics:

    The purpose of this book is to teach you how to *do* quantum mechanics.
    Apart from some essential background in Chapter 1, the deeper quasi-
    philosophical questions are saved for the end. I do not believe one can
    intelligently discuss what quantum mechanics *means* until one has a 
    firm sense of what quantum mechanics *does*.
    D.J. Griffiths, /Introduction to Quantum Mechanics/.

Feynman had something similar scribbled on the chalkboard in his office: "What 
I cannot create, I do not understand." The purpose of this essay is to show you 
a full derivation, including density matrices, decoherence, and "tracing out" 
supersystems, of the dual-slit experiment. In doing so, we will be establishing 
what the dual-slit experiment /means/ and addressing some common issues with 
its understanding. 

This was motivated by a long email exchange with a military contractor named
Tom Campbell after he said the following wrong thing in a YouTube video:

    "So then [the physicists] said 'let's not look, but let's leave the 
    equipment, maybe it's the equipment that's doing it,' so you leave the 
    sensors where they are, but you just turn off the power to what's 
    recording the data, so now the sensors are still in place but they're 
    not recording anything. What do you think happens? It goes through both
    slits, you get a wave pattern on the other side."
    T. Campbell,  [1][http://www.youtube.com/watch?v=1sB4j6L6Rzw]

This is totally wrong. You don't get a wave pattern on the other side, because 
the measurement apparatus still gets entangled with the qubit you're interested 
in. Anything else would violate the rules of quantum mechanics and the 
experiments that have been done. I hope to give you a better appreciation of 
quantum mechanics by showing you what's really happening in this famous puzzle. 

You will probably need some calculus and some understanding of linear algebra,
and certainly some understanding of complex numbers. I wish that I could make 
those requirements a little less strict, because unfortunately, none of those
topics is the subject of a typical high school mathematics education. But: this
is the language of modern quantum mechanics, complex linear algebra.

# The Hilbert Space #

In quantum mechanics, the physical state of a system is usually denoted by a 
Greek letter Ψ. Ψ is an object which contains all the physics of the system, 
and it lives in a nice little mathematical world called "Hilbert space." To 
show that Ψ lives in this world, we write it in the Dirac notation with a "ket
vector":

    |Ψ>

Kets are vectors living in a vector space, and therefore they can be added and 
subtracted, and multiplied by complex numbers:
    
    |Φ> = a |u> + b |v>
    
For every "ket" |a> there is a "bra" <a|, which lives in the "dual space" of 
our Hilbert space. A bra is a complex-conjugated transpose of its ket. Thus:
    
    <Φ| = a* <u| + b* <v|

...where * is the complex conjugation operation. The reason for the weird names 
"bra" and "key" is that this is called the "bra-ket" notation, which sounds 
like "bracket." They can combine together in an *inner product* <u|v>, which is
just some complex number. This inner product works like any multiplication that
you've ever heard of, distributing across sums in both directions:
    
    (a <u| + b <v|)|w> = a <u|w> + b <v|w>
    <u|(a |v> + b |w>) = a <u|v> + b <u|w>. 

...however these formulas are not very useful just yet, because we don't have a 
basis for our vector space. Hang on; it's coming!

Also interesting but not very important for us, is that our state |Ψ> 
changes over time according to the Schrödinger equation:

    i ħ |∂Ψ/∂t> = Ĥ |Ψ>
    -i ħ <∂Ψ/∂t| = <Ψ| Ĥ 

This is your first exposure to an "operator", in this case the "Hamiltonian 
operator" Ĥ, which is associated with the total energy of the system. An 
"operator" is anything which takes in a ket vector and produces another
ket vector as its output. We require operators to be /linear/, which means 
that they distribute over a sum:

    Ô [ a |u> + b |v> ] = a Ô |u> + b Ô |v>.

By the way, the above Schrödinger equation more or less just states the
Planck-Einstein law that "E = h f." A full derivation would confuse other
readers here, but you can find more information in any standard quantum
mechanics book.

Okay. We have already quietly covered a lot. Kets are vectors, and can be added
or subtracted or multiplied. And linear operators, which we write with a little 
"hat", distribute over these sums. One special linear operator, the Hamiltonian 
Ĥ, is associated with the energy of the system, and it tells you how the system 
changes. If you are new to these notions, it might be a good time to rest and 
reread this paragraph until you're sure you understand these basic lessons.

# Basis

Okay, we have bras and kets. Our Hilbert space also has a "basis": a set of 
"unit vectors" which you can use to express any other ket. It is easiest to
just label these vectors as |0>, |1>, |2>, and so on. The basis is not unique, 
and there may be other interesting perspectives on the Hilbert space, but it 
will always follow that general form. With our basis, for example, our
"physical state" vector |Ψ> can be written with complex numbers {ψᵢ} as:

    |Ψ> = ψ₀ |0> + ψ₁ |1> + ψ₂ |2> + ...
    |Ψ> = Σᵢ ψᵢ |i>. 
    
In the dual space, all of these coefficients get conjugated:

    <Ψ| = Σᵢ ψᵢ* <i|

Here, the symbol Σᵢ means "sum over all possible i."

We make one restriction about the basis: it must be *orthonormal*:

    <u|v> = 1 if u = v, or 0 if they aren't. 

So for example <0|0> = 1, <0|1> = <1|0> = 0, and <1|1> = 1. This means that
if you have some function fᵤᵥ of two indices, then:

    Σᵤ fᵤᵥ <u|v> = fᵥᵥ

Why? Because you are summing terms of 0 whenever u is not exactly the same as 
v, and when you sum over all u, you surely hit the case where it *is* v. This
expression of <u|v> is sometimes called the "Kronecker delta" δᵤᵥ, but this 
will be unnecessarily clumsy for the rest of this discussion.

We now make one more restriction on the elements we're interested in in Hilbert
space: for every real observable, we assign an operator Â. Then the *average 
value* <A> of the observable A in any physical state |Φ> is given by:

    <A> = <Φ| Â |Φ>

Notice that these angle brackets on the left hand side mean something a little 
bit different: the average value an experiment will give you. Also, recall 
from the last section that that Â will take in a ket |Φ> and produce some other 
ket |Φ'>. So the right hand side is an inner product <Φ|Φ'> of a vector with
an operated-upon-by-Â version of itself. 

For example, the average energy of any physical state |Φ> is <Φ| Ĥ |Φ>. You can
thus confirm that as the actual physical state Ψ evolves according to the 
Schrödinger equation, its average energy changes like:
    
    d<H>/dt = <∂Ψ/∂t| Ĥ |Ψ> + <Ψ| ∂Ĥ/∂t |Ψ> + <Ψ| Ĥ |∂Ψ/∂t>
    d<H>/dt = <∂Ĥ/∂t>.
    
If the Hamiltonian operator has no explicit time dependence, energy is 
conserved. 

As a consequence of this notion of average values in physical states, all
physical states in quantum mechanics are *normalized*; the average value of 1 
is and always should be:
    
    <1> = <Φ| 1 |Φ> = <Φ|Φ> = 1.
   
Thus <Φ|Φ> = 1. If you like, physical states are the unit vectors in the 
Hilbert space. There are other vectors in the Hilbert space, of course, but 
the ones we care about are the physical states, which are the unit vectors.
It is worth verifying for yourself that our earlier Schrödinger equation 
also guarantees that d/dt <Ψ|Ψ> = 0, thus guaranteeing that when we start with 
our system in a physical state, we always stay in a physical state. 

This is enough for almost the complete structure of quantum mechanics. Your 
actual state |Ψ> is a unit vector in Hilbert space moving around according to
the Schrödinger equation. Operators exist for any observable quantity, and the 
average value of any observable quantity, for any state, is an inner product 
containing that observable's operator:
    
    i ħ |∂Ψ/∂t> = Ĥ |Ψ>
    <A> = <Ψ| Â |Ψ>

An example before we go on. Suppose we have a two-level Hilbert space,
{|0>, |1>}. This system is often called a "qubit", because like a classical
bit, it can be either in the state 0 or in the state 1. Quantum mechanics
allows something slightly more complicated, though:

    |Ψ> = ψ₀ |0> + ψ₁ |1>.

We design an observable which will tell us if the system is in state |1>. It 
can be written as:

    Â = |1><1|
    
This is an "outer product", but it works just like you might expect: 

    Â |Ψ> = |1> <1|Ψ>
    
We could say that it "projects" |Ψ> along |1>. Why does this tell us if the 
state is in |1>? Because if you are in a pure state |0> or a pure state |1>, 
you would get:

    <0|Â|0> = <0|1> <1|0> = 0 * 0 = 0
    <1|Â|1> = <1|1> <1|1> = 1 * 1 = 1.

In our general state |Ψ> the average value of A is:

    <A> = <Ψ|Â|Ψ> =[ ψ₀* <0| + ψ₁* <1| ] |1><1| [ ψ₀ |0> + ψ₁ |1> ]
    <A> = [ ψ₀* <0| + ψ₁* <1| ] ψ₁ |1>
    <A> = ψ₁* ψ₁ = |ψ₁|²

Conclusion: |ψ₁|² is a sort of "probability" to be in state 1, while |ψ₀|² 
is a probability to be in state 0. Yes, quantum mechanics is essentially
probabilistic, and can only describe averages. But it describes averages
really well, and averages can be scientifically tested. So we should not be
too afraid.

# Enter the Matrix #

We can use the basis vectors for our Hilbert space to change any operator Â 
into a matrix Aᵤᵥ, by describing the *end result* of Â |v> as a linear 
combination of the basis vectors:

    Â |v> = Σᵢ |i> Aᵢᵥ .
    
If it helps your memory, Aᵤᵥ = <u| Â |v>, and equivalently, Â = Σᵤᵥ Aᵤᵥ |u><v|.
The diagonal elements Aᵤᵤ are just the average values of A in the basis states.

This means that the average value of A in |Ψ> is:

    <A> = <Ψ|Â|Ψ> = [ Σᵤ ψᵤ* <u| ] Â [ Σᵥ ψᵥ |v> ]. 
    <A> = Σᵢᵤᵥ ψᵤ* ψᵥ Aᵢᵥ <u|i>
    <A> = Σᵤᵥ ψᵤ* ψᵥ Aᵤᵥ

We want this value to always be equal to its complex conjugate <A>*, so that 
we know that we have a real number. This puts a restricton on Aᵤᵥ:

    <A>* = Σᵤᵥ ψᵤ ψᵥ* Aᵤᵥ*
    Swap uv → vu:
    <A>* = Σᵥᵤ ψᵥ ψᵤ* Aᵥᵤ*
    <A>* = Σᵤᵥ ψᵤ* ψᵥ Aᵥᵤ*

For this <A> = <A>* to hold for an arbitrary state {ψᵢ}, we must have:

    Aᵤᵥ = Aᵥᵤ*

We call this the "Hermitian property": any real observable has to have a matrix
which is its own conjugate transpose. Not all operators must be Hermitian, but
Hermitian operators represent real, observable numbers. We don't have many 
complex observables in quantum mechanics, so it is fair to say that everything 
we care about will be Hermitian.

The Hamiltonian, which we encountered before, is a Hermitian operator. I was 
using this fact implicitly when I wrote down the "bra" form of the Schrödinger 
equation. To give a full proof that this is the correct dual-space form, I 
observe that <a|b> = <b|a>* for all vectors a and b. Thus for any Hermitian 
operator Â and ket |Φ>, we have:
    
    |Φ'> = Â |Φ> = (Σᵤᵥ Aᵤᵥ |u><v|) |Φ> = Σᵤᵥ Aᵤᵥ <v|Φ> |u> 
    <Φ'| = Σᵤᵥ Aᵤᵥ* <v|Φ>* <u|
    <Φ'| = Σᵤᵥ Aᵥᵤ <Φ|v> <u| 
    <Φ'| = <Φ| Σᵥᵤ  Aᵥᵤ |v><u| = <Φ| Â

The bra form of the Schrödinger equation is just a special case of this. 

We now return to this equation <A> = Σᵤᵥ ψᵤ* ψᵥ Aᵤᵥ. There is a very nice way 
to write this. We define the "density matrix" ρ as:
    
    ρ = |Ψ><Ψ|
    ρᵤᵥ = ψᵤ ψᵥ* 

Then we can simply say:
    
    <A> = Σᵤᵥ ρᵥᵤ Aᵤᵥ

This is the trace of the matrix ρ Â. We define the trace of any operator Ô as:
    
    Tr Ô = Σᵢ <i| Ô |i> = Σᵢ Oᵢᵢ
    
It is the sum of diagonal entries on the matrix. Since (ρ Â)ᵢᵥ = Σᵤ ρᵢᵤ Aᵤᵥ, I
can write:
    
    <A> = Tr ρ Â = Tr Â ρ

With these definitions, we come at an alternate description of quantum 
mechanics in terms of a "commutator bracket", [Â, Ô] = Â Ô − Ô Â:

    i ħ ∂ρ/∂t = Ĥ ρ − ρ Ĥ = [Ĥ, ρ]
    <A> = Tr ρ Â

Thus we could consider the density matrix as our starting point for all 
quantum mechanical investigation, rather than the wavefunction. The density 
matrix evolves according to this commutator equation and traces give our
expectation values. We do not lose anything because any physical state |Φ> can
be turned into a corresponding density matrix |Φ> <Φ|.  

It turns out that there are states which are easy to describe with a density
matrix which are very hard to describe with a wavefunction. One such state,

    ½ |0><0| + ½ |1><1|,
    
...sits at the very heart of the double slit eperiment. Thus, I will teach you
a little more about traces and density matrices before we move on to this 
experiment.

# Properties of trace #
The first property of trace is that it is linear:

    Tr (a Ô + b Â) = Σᵢ (a Oᵢᵢ + b Aᵢᵢ) = a Σᵢ Oᵢᵢ + b Σᵢ Aᵢᵢ 
    Tr (a Ô + b Â) = a Tr Ô + b Tr Â

We can also say in general that there is an imperfect commutation property:

    Tr Â Ô = Σᵤᵥ Aᵤᵥ Oᵥᵤ = Tr Ô Â

It does not require operators to be Hermitian to commute them in this way;
they simply need to be members in a trace. This property is "imperfect" because 
operators do not in general commute with one another, so that it is actually 
only a *cyclic property*:

    Tr Ĝ Ĥ Î = Tr Î Ĝ Ĥ = Tr Ĥ Î Ĝ.

We use this to prove the most important fact about trace. We said that there was
an orthogonal basis for the Hilbert space, {|i>}, but there is no guarantee that
there isn't another orthogonal basis {|φᵢ>}. For example, the alternate basis:

    |+> = √½ |0> + √½ |1>
    |−> = √½ |0> − √½ |1>

...still has the property that <+|+> = <−|−> = 1, <−|+> = <+|−> = 0.

One simple way to choose these orthogonal basis vectors {|φᵢ>} as your basis 
{|i>} requires the following non-Hermitian coordinate-change matrix:

    Ĉ = Σᵢ |i><φᵢ|
    Ĉ⁻¹ = Σᵢ |φᵢ><i|
    Ĉ Ĉ⁻¹ = Ĉ⁻¹ Ĉ = 1

Any other operator Â would be represented in this basis as:

    Â' = Ĉ Â Ĉ⁻¹

This can be read as "Turn |i> into |φᵢ>, apply Â, and then turn |φᵢ> back into
|i>." So let us say that we want to use the {|+>, |−>} basis by the names 
{|0>, |1>}: Then what we once called Â = |1><1| is now in this basis:
    
    Â' = (|0><+| + |1><−|) |1><1| (|+><0| + |−><1|)
    Â' = (√½ |0> − √½ |1>)(√½ |0> − √½ |1>)
    Â' = ½ ( |0><0| + |1><1| − |0><1| − |1><0| ).

Basis changes can get very confusing if you do not pay attention! For the rest 
of this essay, when I want the {|+>, |−>} basis, I will just use those names 
rather than using |0> and |1> to mean two different things. 

The crucial point which I want to make here is that our cyclic rule of trace 
says that:

    Tr Â' = Tr Ĉ Â Ĉ⁻¹ = Tr Â Ĉ⁻¹ Ĉ = Tr Â.

Thus the trace is totally basis-independent. Use whatever basis you want, and 
the trace of an operator will always be the same.

In particular, consider the eigenbasis of Â -- a set of nice vectors |φᵢ> such
that:

    Â|φᵢ> = Aᵢ|φᵢ>

In this basis, there are a complete set of "directions" which Â does not 
"rotate" in any way, so that in such a direction you are not dealing with a 
matrix Aᵤᵥ |u><v|, but a scalar, Aᵢ. These Aᵢ are called the "eigenvalues", and
are basis-independent because they are phrased above in terms of vectors.

But the trace in this eigenbasis, and thus in all bases, is 
    
    Tr Â' = Σᵢ Aᵢ.

We see that our basis-independent trace is basis-independent precisely because
it is the sum of the eigenvalues, which are also basis-independent.

We can also derive, with our cyclic result and our linearity result, the 
quantum result for conservation of A:

    d<A>/dt = d/dt Tr ρ Â = Tr (∂ρ/∂t Â + ρ ∂Â/∂t)
    i ħ d<A>/dt = Tr (Ĥ ρ Â − ρ Ĥ Â + i ħ ρ ∂Â/∂t)
    i ħ d<A>/dt = Tr (Ĥ ρ Â) + Tr(-ρ Ĥ Â + i ħ ρ ∂Â/∂t)
    i ħ d<A>/dt = Tr (ρ Â Ĥ) + Tr(-ρ Ĥ Â + i ħ ρ ∂Â/∂t)
    i ħ d<A>/dt = < Â Ĥ − Ĥ Â + i ħ ∂Â/∂t >

In the "Schrödinger picture," which we have been using, ρ is changing and 
generally Â is constant, so that this reduces to just:

    i ħ d<A>/dt = < [Â, Ĥ] >

There is another, older "picture", the "Heisenberg picture", where the matrices 
change while the states remain the same. In this picture, ∂ρ/∂t = 0 and:

    i ħ ∂Â/∂t = [Â, Ĥ]

...so as to give the exact same result as in the Schrödinger picture of quantum 
mechanics. This Heisenberg picture is very counterintuitive: if you will allow 
me to be a little dramatic, it states that the wavefunction of the universe 
is actually exactly the same as it was in the big bang, and that all life and
change and so forth occurs because the /definitions of space and momentum/ are
somehow changing against this constant background. Whether you feel that this
is *metaphysically true* or not, the mathematics says that you can't tell the 
*physical difference*: and this can sometimes help with complicated physics 
problems: because the system starts and ends in the ground state. 

# Coupled systems #
We have seen that we can rewrite quantum mechanics so as to not use |Ψ>, but
rather ρ = |Ψ><Ψ|, as our physical state. Thus we have adequacy conditions on 
ρ: ρ is a Hermitian matrix with trace 1; its diagonal entries are all positive
real numbers. And these density matrices generate quantum mechanics via:

    i ħ ∂ρ/∂t = Ĥ ρ − ρ Ĥ
    <A> = Tr ρ Â

It is important to understand that some ρ fulfil the adequacy conditions but
are not seperable as |Ψ><Ψ|. For example, for a 2-level system {|0>, |1>}, the 
quantum mechanics allows a general state of:

    |Ψ> = cos(θ/2) |0> + sin(θ/2) e^{iφ} |1>
    
    |Ψ><Ψ| = ½ [  1 + cos θ     e^{-iφ} sin θ ]
               [ e^{iφ} sin θ     1 − cos θ   ]

For example:
     |+><+| = ½ [ 1  1 ]  ,  |−><−| = ½ [ 1  -1 ]
                [ 1  1 ]                [-1   1 ]

Here is an adequate matrix which violates this general form:

    ρ = [ ½ 0 ]
        [ 0 ½ ]

But, notice that this is nothing more than a linear combination of matrices 
which *do* obey the general form:

    ρ = ½ |0><0| + ½ |1><1| = ½ |+><+| + ½ |−><−|

In general, Σᵢ qᵢ ρᵢ satisfies the adequacy conditions as long as the qᵢ are 
nonnegative real numbers which sum to 1: in other words, they form a classical
probability vector. 

We now want to discuss a situation where we take the composition of two Hilbert 
spaces A = {|i>} and B = {|a>}. We write the joint Hilbert space as {|ia>}. An 
operator Â which acts only on system A will therefore have a matrix: 

    Â |va> = Σᵢ Aᵢᵥ |ia>

...with just two indexes and leaving the second component of the space 
unchanged. Meanwhile our state must complexify to the system:

    |Ψ> = Σᵥₐ cᵥₐ |va>
    <Ψ| = Σᵤₐ cᵤₐ* <ua|

...with now two different systems to index over. Combining our expressions for 
Â |va> and |Ψ> gives us the expectation value:

    <A> = <Ψ|Â|Ψ> = Σₐᵢᵤᵥ Aᵢᵥ cᵥₐ cᵤₐ* <ua|ia>
    <A> = <Ψ|Â|Ψ> = Σₐᵤᵥ Aᵤᵥ cᵥₐ cᵤₐ*

At this point, we turn to an example of the general idea. Suppose we have two 
two-level systems (two qubits) and we want to describe their combined state, in 
their combined Hilbert space. We just asked the question, "can we still 
describe single-qubit operators?" and our answer was "yes, sure." But now it's 
worth asking: can we describe only the state of the first qubit of |Ψ> without 
the second one? The answer is, "not with a wavefunction". Two separate qubits 
would have a state which looks like this:

    (a |0> + b |1>)[A] (c |0> + d |1>)[B]
    = ac |00> + ad |01> + bc |10> + bd |11>

...and it thus has to obey this property:

    c₀₀ c₁₁ = c₀₁ c₁₀.

Here is an example of a state which does not obey this property and therefore 
cannot be separated into two single-qubit states:

    |Ψ> = a |00> + b |11>

In this case c₀₁ c₁₀ = 0, but c₀₀ c₁₁ = ab, which is not 0 except in the 
special trivial cases |Ψ> = |00> and |Ψ> = |11>.

This state is called an 'entangled state': because if you measure the first 
qubit as 0, then the state is |00> and you must measure the second qubit as 0; 
but if you measure the first as 1, then the state is |11> and you must measure 
the second as 1. 

However, you /can/ describe the state of the first qubit with a /density 
matrix/, where you cannot describe it with a wavefunction. Here is the 
expectation value formula that we obtained:

    <A> = Σₐᵤᵥ Aᵤᵥ cᵥₐ cᵤₐ*

We can see that the density sub-matrix needed is simply:

    σᵥᵤ = Σₐ cᵥₐ cᵤₐ*

And then this is:

    <A> = Σᵤᵥ Aᵤᵥ σᵥᵤ = Tr σ A 

More importantly, we see that the expression for σ is /itself/ a trace 
operation over the subsystem B:

    σ = Σₐ <a| ρ |a>

To get the subsystem's density matrix, you "trace out" all of the parts of the 
supersystem that you don't care about, and you can describe the subsystem 
succinctly by the above density matrix. 

In our example, our nonseparable 2-qubit state was:

    |Ψ> = a |00> + b |11>

Its density matrix, while a little complicated, is:

    ρ = aa* |00><00| + ab* |00><11| + ba* |11><00| + bb* |11><11|

To trace this out, we remove any terms which don't survive the tracing-out 
operation <0| ρ |0> + <1| ρ |1> on the second qubit:

    σ = aa* |0><0| + bb* |1><1|

We've thus come full circle on coupled systems: our earlier problem with 
density matrices has been revealed as a small aspect of quantum entanglement: 
you /can/ achieve those states when your qubits entangle with their 
environment. 

Notice also that this system has no "coherence terms" |0><1| or |1><0|, which 
if you'll recall entered into our normal one-qubit density matrix as:

    ½ e^{±iφ} sin θ

This fact -- that "entanglement destroys coherence" -- is the fundamental idea 
of the double-slit experiment.

# The Double-Slit Experiment #

We send particles, one at a time, through a slit, and then we let them travel 
to hit a detection screen. The result is that we observe a pattern, which I'll 
say is in the y-direction. With just one slit, this pattern is perhaps a bell 
curve or so. I will just treat the arbitrary case, as it's simpler to write. 

In the case of bullets sent through a well-armored slit, you would expect the
description to look like this: the distribution going through slit 0 is f₀(y), 
the distribution through slit 1 is f₁(y), and when you open both slits, the 
curve you get should be:

    g(y) = ½ f₀(y) + ½ f₁(y)

On the other hand, when a classical wave passes through such a slit, we know 
that there is some wave, which we symbolize as a phasor rotating in the complex 
plane. We see the one-slit patterns |z₀(y)|², and |z₁(y)|², and when it passes 
through both, we see ½ |z₀(y) + z₁(y)|². 

We now treat the quantum case. Depending on which slit the particle goes 
through, we mark its state at that exact moment as |0> or |1>; of course, it 
could be in a superposition. The point is, it is a two-level Hilbert space: a 
qubit. As it travels from the slits to the screen it evolves over space in the 
y-direction. We can describe its evolution as a linear evolution of each of its 
components:

    |0> → |z₀(η)>
    |1> → |z₁(η)>

This produces a new Hilbert space parametrized by the y-axis via the coordinate 
η. Our observable is going to observe this y-coordinate itself, i.e. "is the y-coordinate η equal to some specific y?":

    ŷ = δ(η − y)
    <α|ŷ|β> = ∫ dη α*(η) δ(η − y) β(η) = α*(y) β(y)

Thus, in our original basis, we can define this whole process by an analogous 
operator Â, which works exactly as you would (hopefully) expect:

    <u|Â|v> = Aᵤᵥ = zᵤ*(y) zᵥ(y)

Our "observable" in the double-slit experiment is therefore the matrix:

    Â = [ |z₀|²    z₀* z₁ ]
        [ z₀ z₁*    |z₁|² ]

In the state |Ψ> = |0>, we have <A> = |z₀|², while in the state |Ψ> = |1>, we 
have <A> = |z₁|². 
    
But in the state |+> = √½ |0> + √½ |1>, we would observe:

    <A> = ½[|z₀|² + z₀* z₁ + z₀ z₁* + |z₁|²] = ½ |z₀ + z₁|².

The double slit experiment, of course, does not end there: this is just the 
basic first result: When you fire electrons at the two slits, they act like the 
wave does, not like the bullets do.

Now you decide to change the experiment by measuring which slit the electron 
goes through, trying to make it tell you "the electron is, for sure, a wave." 
This is done by some well-designed measurement apparatus which would say "0" if 
the qubit was in state |0> and "1" if the qubit was |1>. The key here is that 
this apparatus amounts to a two-level system -- another qubit. We go from the 
state:

    |Ψ> = √½ |0> +  √½ |1>

To a new, two-qubit state:

    |Ψ> = √½ |00> +  √½ |11>

Here the first qubit is the original qubit, and the second is our measurement 
apparatus, which tells us either "it went through slit 0" or "it went through 
slit 1." We have designed it well, so that whenever the system goes through a 
slit, the device gives us the correct result. 

If we "trace out" the measurement apparatus and ask for the new state of the 
first qubit, we see that it is exactly: 

    σ = [½ 0] = ½.
        [0 ½]

We thus have that:

    <A> = Tr σ Â = ½ Tr Â = ½ |z₀|² + ½ |z₁|²

...in other words, we see the exact result that we got for the bullets, rather 
than the result that we got for the waves. Both distributions add together in 
the bullet sense f + g, rather than the wave sense |f + g|². 

# Measurement and Interpretations #

I want to point out something absolutely crucial: in /none/ of the above 
discussion have we discussed what happens during a measurement. In the double-
slit observable, if we use, say, photons: you have a photomultiplier tube at a 
point y, and you measure their probability to enter that photomultiplier tube 
with the above <A>. But something peculiar still happens: if you start 
measuring with two tubes, and your photon intensity is low, you see 
measurements in either one or the other tube, not both.

We have so far missed a bunch of the *quantum* aspect of quantum mechanics, 
and only dealt with the *wave* aspect of quantum mechanics. The wave aspect is 
still very interesting; it is the origin of Heisenberg uncertainty, for 
example. But something else happens too: light, electrons, and vibrations all
come to us as *discrete values* rather than continuous distributions.

This is very important for you to understand, because it prevents Quantum 
Mechanics from being a pure wave theory of phenomena, and it has something to 
do with everything. For example, televisions. Perhaps I can keep my television 
in two places: either my living room or my bedroom. We can describe TV-in-
Bedroom as the state |B> and TV-in-Living-Room as the state |L>. Quantum 
mechanics allows us to form the superposition state:

    |Ψ> = √½ |L> +  √½ |B>

Quantum mechanics also, as we have seen, describes what happens as air 
molecules and light in both rooms bounce against the superimposed television: 
it decays into a classical probabilistic superposition:

    ρ = ½ L + ½ B
    
    (where L = |L><L| and B = |B><B|).

But: this is not what we see! We do not see my television as half in my bedroom 
and half in my living room -- not unless it has somehow been cut in half or so. 
It's either in one or the other. Schrödinger famously described a similar case 
with a cat: quantum mechanics allows a certain superposition state of "live 
cat" and "dead cat" in a closed box, but of course we always see a cat as alive 
or dead when we open it.

The unitary, simple, clean wave theory is sufficient to describe the dual-slit 
experiment result above. It's not about "wave-particle duality" or "the 
measurment problem," or anything of the sort. Those do form a significant 
problem, sure: but they are not the problem with the double-slit experiment.
Instead we've seen that we can understand at least *some* aspects of 
measurement simply by understanding entanglement. 

Instead the problem of measurement, and the particle side of wave-particle 
duality, can be added to our above description as a sort of extra axiom:

    When you measure an observable, you observe an eigenstate of that 
    observable's operator. Moreover, repeated measurements are /consistent/: if 
    we measure X, then shortly after, if we measure again, we will again see X.

The problem is that we have a very high-level understanding of measurement -- 
we know when we have performed one -- but this does not work well with our low-
level understanding of quantum mechanics. To solve this problem, there are many 
"quantum mechanics interpretations," which try to create a /metaphysical model/ 
of quantum mechanics, so as to explain the fact that we only see superpositions 
in repeated experiments, and not in any individual one. 

The most popular "interpretation" is the Copenhagen interpretation, sometimes 
called "wavefunction collapse." It says that the act of looking for my 
television will itself force the wavefunction of my television to undergo a 
discontinuity, "collapsing" to either the L or the B state. In other words, 
wavefunctions are real, but the act of observation somehow discontinuously 
changes the wavefunction to a new eigenstate. I would say that this is the most 
straightforward method out, given the known facts: you insist on the reality of 
the wavefunction, you insist that it's changing over time, and you insist that 
the repeated-consistency criterion implies the collapse to the eigenstate.

But we have not here described what an observation means at the lowest level; 
we still don't know when the cat's life or death is "observed" or whether it 
can observe itself. Along these lines, we might worry about the paradox of 
nested observation: an experimenter measures a qubit and either shouts "0!" or 
"1!" -- we now put this whole experiment, including the experimenter, in a box 
and describe it as two two-level systems -- the qubit and the experimenter. Who 
collapses the qubit -- the experimenter inside the box, or the experimenter 
outside the box?

Another popular idea is the many-worlds interpretation, which states that the 
wavefunction does not describe something real to our universe, but describes a 
distribution of the cat, television, or other qubit across many parallel 
universes which all "came from" our present. So, about half of the universes 
which proceeded forth had my television in the living room, half of them had
my television in the bedroom, and I find it in my living room because I went 
into one of the former half of the universes, not the latter half of them. 

That one is actually kind of difficult to swallow as well. Imagine a world with
only you and me, and new universes are always being split off. How do we 
guarantee that we both travel along the same universal splits? There are two 
options: I can either not be 100% sure that you are you, or I can not be 100% 
sure that I am me. Because either we can follow different paths through history
-- and thus we can get separated, and you are not you -- or else we, like all 
of this other stuff around us, also take every possible path through history --
in which case I am really only a tiny fraction of what I once was.

To solve these, you can, in fact, do quantum mechanics purely deterministically
-- indeed, the wave-part of the theory is already totally deterministic, so you
simply need a deterministic account of "collapse". This is furnished by several
different methods, whether they might be a "guiding equation" or a sort of 
"surface appearance" which obeys quantum mechanical statistics by some 
deterministic equation. 

Why do we care? What real experiment is at stake when we add measurement into 
our discussion? What /quantum/ effect can measurement have?

# The Quantum Eraser Experiment #

We take the dual-slit experiment, with its two entangled qubits: the 
interference pattern has disappeared due to the measurement, and it is as if we 
are watching bullets, rather than waves, travelling through our two slits.

But what if I could measure another qubit in another box, far away from the 
original experiment, to make the system behave like waves again? The other 
system would have to be entangled with this present system, sure: but we could 
do it. Here's how.

In our dual-slit experiment, we could say that there was a "before measurement" 
state, where we will say that the measurement apparatus simply said "slit 0":

   |+0> = √½ |00> + √½ |10>

And this then turned into the state:

    √½ |00> + √½ |11>

The operation being applied here can be described as a "CNOT" operation:

    |00> → |00>
    |01> → |01>
    |10> → |11>
    |11> → |10>

It flips the second bit, if and only if the first bit is 1. We will apply that 
operation in our new system. The only difference is that we start our 
measurement apparatus not in the neutral state |0> but in an entangled state 
with a third qubit:

    |Ψ> = (√½ |0> + √½ |1>) (√½ |00> + √½ |11>)
    |Ψ> = ½ |000> + ½ |011> + ½ |100> + ½ |111>

Here is how we might realize this system: we create two photons with entangled 
polarizations: polarizations can be either up-down or left-right, which makes 
them a perfect two-level system. These photon polarizations are our two 
entangled qubits. 

One photon goes through a double-slit experiment. We now have a third qubit:
which slit it went through. So I will number these as follows: the first qubit 
is which slit the first photon went through, the second qubit is the first 
photon's polarization (|0> for up-down, |1> for left-right), and the third 
qubit is the second photon's polarization.

If you trace out the second and third qubits, you do indeed now get the density 
matrix |+><+|, as we got above. The pattern beyond the slit will now be a wave 
pattern.

We now apply the CNOT gate, which in this case rotates the polarization of any 
photon which goes through slit 1 by 90 degrees, so that up-down becomes left-
right and vice versa. Applying our rule of "flip the second qubit if and only 
if the first qubit is 1," we get:

    |Ψ> = ½ |000> + ½ |011> + ½ |110> + ½ |101>

We trace out the second and third qubits of this density matrix. You don't 
actually have to write out the 16 terms and trace it out: the four states each 
have different values for the second qubits, and thus the trace only gathers 
each term's density-matrix-component with itself. If you do out the maths, you 
get:

    σ = ½ |0><0| + ½ |1><1|

...and thus the wave pattern has disappeared. I want to emphasize: we do /not/ 
observe the polarization anywhere in this experiment yet. The polarization is 
merely entangled with the slit that the photon went through. All we did is to 
rotate the polarization of one slit, and the interference pattern disappeared. 
We /could/ have measured this pattern with an up-down or left-right 
polarization filter placed between the two slits and the observation screen, 
but it's not strictly necessary.

Here is the weird fact, though. This state:
    
    |Ψ> = ½ |000> + ½ |011> + ½ |110> + ½ |101>

Can be rewritten in the {|+>, |−>} basis as:
    
    |Ψ> = √½ |+++> + √½ |−−−>.

The easy way to see this is that |+++> contains all 8 basis states with a 
prefactor of + ½ √½, while |−−−> has a similar prefactor, but with a − sign in 
front of any state with an odd number of ones. |Ψ> contains just the four 
states with an even number of ones. When you add them, the evens add up while
the odds cancel. Of course, if you wish, you may do it directly.

Now let us measure this third qubit as either |+> or |−>, by placing a 
polarizer rotated at 45 degrees between the up-down and left-right states. If 
you prefer, you can instead rotate the entangled photon so that, say, |+> 
becomes |0> and |−> becomes |1>, and then measure up-down or left-right in the 
"computational basis" of |0> and |1>. It doesn't really matter which you 
choose: the photon will either pass through, or it won't pass through. In that 
moment, you will collapse the whole state to either |+++> or |−−−>.

So, I have this third qubit in a box, very far away from the first two qubits,
and I measure it with an observable of, say, |+><+|. I must get an eigenvector
of this observable, so I must get either |+> or |−>. But if I get |+>, then 
the entanglement forces the system to be in state |+++>, and I see an 
interference pattern. And if I get |−>, then the entanglement forces the 
system to be in state |−−−>, and I also see an interference pattern.

Here's the absolutely crazy part, where measurement does something totally 
unexpected: we have managed to create apparatuses which delay this choice of 
"do I measure qubit 3?" until /after/ qubit 1 has registered on the screen. 
Now, we can't wait forever, because the above decoherence effect happens with 
all sorts of noise. In particular, we don't have apparatuses which will let us 
wait for 30 seconds or so before observing qubit 3, so we can't "peek" at qubit 
1 before trying to influence qubit 3. But we have managed to use one-nanosecond 
detectors to do the detections, with an eight-nanosecond delay between 
observation of the interference pattern and observation of qubit 3. 

Our notions of time and causality are /not/ respected by quantum mechanics, 
which gives you the consistent results that you expect from the mathematics: 
when you measure qubit 3, you get an interference pattern; when you don't 
measure qubit 3, it disappears.

Here's the other weird part: there doesn't seem to be any way to express this
with the wave theory at present. *Some* of this "measurement problem" is 
presently reducible to the wave mechanics of QM, yes: but not *all*. Because 
it doesn't matter what you do to qubit 3 in the state:
    
    √½ |+++> + √½ |−−−>.

The wave mechanics, with a 1-qubit operator, might modify this to an arbitrary 
state which looks like:

    √½ |++a> + √½ |−−b>
    
Yet it doesn't matter how a and b overlap: that second − and +, from the first 
photon, are still there and are still orthogonal, so that the trace terms 
<+a|−b> and <−b|+a> are still identically 0. Measurement is *doing something*.

# Cheating at a game

We can also use these ideas to cheat at a simple game, which we can call the 
Greenberger-Horne-Zeilinger game, or just GHZ for short. The idea is simple:
the GHZ game is made of, say, 18 "rounds." A team of three people is going
to go into three isolated rooms and give the response 0 or 1 at every round.

In 9 of these rounds, chosen at random, all three are told "make the sum even," 
and the team wins if they do indeed make the sum of their numbers even.

In the other 9 of these rounds, two of them are told "make the sum odd," while 
the third is still told "make the sum even". They now win if they are able to
make the sum of their numbers odd -- even though one of them is "working 
against" the other two. Call that person the "rogue agent." The 9 rounds are 
chosen so that the rogue agent is equally often the first, second, and third.

The team wins the game if they win all 18 rounds. This game is provably
difficult: no sure algorithm exists to beat it. And it's difficult for a pretty
simple reason: when you hear the command "make the sum even", you have no idea 
if you are a rogue agent or not. If you are a rogue agent, you would like to 
help your buddies out by answering 1, so that they could both answer the same 
(either 1 or 0) and the sum would be odd. But if you are not a rogue agent, 
then you would like it if you (and everyone else) answered 0.

You can work out those probabilities and prove that there are no deterministic
solutions; thus for classical players, you must play probabilistically, and 
because winning the game means winning all the rounds, this game therefore 
becomes arbitrarily difficult as the number of rounds gets very large.

Quantum players, however, can cheat and can therefore always win. Consider just
the very first round, chosen totally at random. Recall that earlier state that 
we had:
    
    √½ |+++> + √½ |−−−> = ½ |000> + ½ |011> + ½ |101> + ½ |110> 
    
Let the players prepare one entangled quantum state of this sort for each 
round, and if they get the command "make the numbers even", they just measure
their qubits. They will all together measure these four states, and they will
pass the round.

Suppose instead that two of them -- without loss of generality, let us say the
second two -- instead get the command "make the numbers odd." What can they do
to fix the game? Simple. They perform a special phase-shift operation on their 
own qubit states:

    |+> → |+>
    |−> → i|−>

Which constructs the state:

    √½ |+++> + √½ |−−−> → √½ |+++> − √½ |−−−>
    
    √½ |+++> − √½ |−−−> = ½ |001> + ½ |010> + ½ |100> + ½ |111>.
    
And now when they measure, they give a response which indeed always has an odd
number of zeroes! The quantum players have succeeded where the classical 
players were doomed to fail. As long as they can keep quantum superpositions
alive (which is a very hard problem today!), they can beat this game.

For the GHZ paper, the key idea was *locality*: quantum players of this game 
could be separated very large distances, so that they could not communicate 
before they had to render their decision. Still, as long as they take a set of
|+++> + |−−−> states inside with them, they can always win this game. Quantum
mechanics lets them "cheat" the limits imposed by the classical mechanics.

There is also a very interesting lesson hidden in here, and it comes from this
question, "what if I ask the even player *first*, so that she/he measures the
qubit before the odd players get to change it to the right value?" Here is a 
very peculiar aspect of quantum mechanics indeed: *you can always postpone a
qubit measurement*. 

What? Well, suppose the measurement came first, and it came out 0. Then the 
two remaining players would have the state:

    1/√½ <0| { ½ |000> + ½ |011> + ½ |101> + ½ |110> }
        = √½ |00> + √½ |11> = √½ |++> + √½ |−−>.

Their combined phase shifts would convert this into:

    √½ |++> + √½ |−−> → √½ |++> − √½ |−−>
    √½ |00> + √½ |11> → √½ |01> + √½ |10>.

So, exactly one of them would measure 1, and the other would measure 0, and
they would get an odd number! On the other hand, if the measurement first came
out 1:

    1/√½ <1| { ½ |000> + ½ |011> + ½ |101> + ½ |110> }
        = √½ |01> + √½ |10> = √½ |++> − √½ |−−>.

And the phase shifts convert this in reverse to √½ |00> + √½ |11>, so that 
they either both measure 0 or they both measure 1. It is a general property of
quantum measurement that you can act as if it only happens after all of your 
quantum processes are done. 