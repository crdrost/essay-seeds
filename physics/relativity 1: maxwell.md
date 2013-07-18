# Maxwell and a new theory

So, this discussion is hopefully going to be intelligible to you, and I'm
assuming that you've had some high school physics but have largely forgotten it.
This makes my life very difficult, because the right language for many of these
concepts is very *mathematical* -- it's the language of vector calculus! So
there will be equations which I *have* to write down but which you may not
understand. I hope that this will get *better* rather than worse as we go on.

In this lecture, I'm going to talk a bit about a problem which a man named James
Clerk Maxwell faced, and his Maxwell Equations. What we'll see is that Maxwell
was *forced by simple physics* to include a new term in one equation, and that
this new term led to the *stunning discovery* that light is an electromagnetic
wave. I will provide that story, even though some of the math is a little scary,
even in its modern form. 

## What is vector calculus?
Let me begin with explaining a vector field, and I'll use a very nice example:
the wind.

Everywhere on the landscape, the wind has some direction and speed. We could
draw little arrows everywhere, in the direction that the wind is going, and with
a length proportional to how fast the wind is going. The wind is also a motion
of *air*, which has some *density*, which might also vary as a function of
position. The density is a *scalar field*, like temperature -- there is a number
associated with every point in space. The wind speed is a *vector field*; there
is a magnitude and direction associated with every point in space. There are
actually also many sorts of densities -- there is a *number* density (number of
air particles per cubic meter), a *mass* density (kilograms of air per cubic
meter), and we will deal with a sort of *charge* density in electromagnetism.
Because we use the letter "d" for too many things in physics, we usually denote
a density with the Greek letter rho, ρ.

You see, "field" just means that "there's a value for every point in space."
Velocity is a vector, which is to say, it can be represented with little arrows.
A vector field involves putting a little arrow at every point in space.

We write position as a vector **r** = [x, y, z]. The air density is a scalar
function of position and time, ρ(**r**, t). The wind velocity is a vector
function of position and time, so just like position, it also has coordinates
> **v**(**r**, t) = [v<sub>x</sub>(**r**, t), v<sub>y</sub>(**r**, t), v<sub>z</sub>(**r**, t)].
Similarly we also have a notion of *current density*. In the case of air, this
is defined by taking the density at any point and time, and multiplying by the
velocity at that point and time, and often given the letter **J**
> **J**(**r**, t) = ρ(**r**, t) **v**(**r**, t).
This has a lot of advantage in calculus; if you define a surface integral
∫ d<b>S</b> then the actual amount of stuff passing through the surface at time
t is just I(t) = ∫ **J** · d<b>S</b>.

Furthermore, we can express *continuity* of the air molecules -- that air does
not spontaneously come out of nowhere or disappear -- by a vector calculus
operator called *divergence*, which tells us how much a vector field is
"spreading out" from a point. Using the language of calculus (∂A/∂x means "how
much A changes in the x direction),

> div **V** = ∂V<sub>x</sub>/∂x + ∂V<sub>y</sub>/∂y + ∂V<sub>z</sub>/∂z.

The continuity equation can be written very simply as:

> div **J** = -∂ρ/∂t

We would read this and say "if stuff flows out of a point, then the density at
that point decreases commensurately." We could also imagine "stream lines" for
the current, and this says that stream lines can only come out of a place that
is losing density; so if you have a can of compressed air, you can make stream
lines come out of the nozzle only by decreasing the density in the can.

The divergence operator `div` transforms a vector field into a scalar field.

There is another measure which is very difficult to understand, called a
**curl**. If I were to put a *pinwheel* in the air, in some places it would
begin to rotate (we say it would feel a *torque*). Each point in space therefore
has some direction where this rotation is maximum, which we can represent with
a little arrow, and then the arrow's length can be proportional to the amount of
torque. This is an operator which we call the "curl":

> **curl** **V** = [∂V<sub>z</sub>/∂y − ∂V<sub>y</sub>/∂z,
> ∂V<sub>x</sub>/∂z − ∂V<sub>z</sub>/∂x, ∂V<sub>y</sub>/∂x − ∂V<sub>x</sub>/∂y]

This curl operator is now transforming a vector field into a vector field! There
is one other significant operator which transforms scalar fields into vector
fields, by essentially "pointing towards the greatest increase". This is called
the *gradient*:

> **grad** f = [∂f/∂x, ∂f/∂y, ∂f/∂z]

There is only one more operator which you need to know about, which maps scalar
fields to scalar fields or vector fields (component-by-component) to vector
fields. It is called the Laplacian, denoted ∇<sup>2</sup>:

> ∇<sup>2</sup> f = div **grad** f = ∂<sup>2</sup>f/∂x<sup>2</sup>, ∂<sup>2</sup>f/∂y<sup>2</sup>, ∂<sup>2</sup>f/∂z<sup>2</sup>
>
> ∇<sup>2</sup> **V** = [∇<sup>2</sup> V<sub>x</sub>, ∇<sup>2</sup> V<sub>y</sub>, ∇<sup>2</sup> V<sub>z</sub>]

If the gradient points uphill, the Laplacian notices that the gradient is
flowing into this point at the top of the hill, and out of the points at the
bottom. It therefore measures the curviness of the terrain. It appears in a
couple of important equations, including the diffusion equation ∂ρ/∂t = D ∇<sup>2</sup> ρ,
and the wave equation, (∂/∂t)<sup>2</sup> u = c<sup>2</sup> ∇<sup>2</sup> u.

I don't want to overwhelm you but I must mention that the mathematics gives us
two powerful *connections* between these symbols. First off, the vector fields
which **curl** forms cannot flow out of any points:

> div **curl** **V** = 0

Secondly, when you curl a curl, the mathematics gives you an interesting result:

> **curl** **curl** **V** = **grad** (div **V**) − ∇<sup>2</sup> **V**.

We will use both of these later.

## Electromagnetism before Maxwell
It's hard to remember that electricity and magnetism were once considered
different things, and that light had nothing to do with either! Electricity,
from the Greek "elektrum", a word for *amber*, was something you created by
rubbing glass with wool. You can also create it by rubbing a balloon against
your hair. It creates strange attractions between nearby objects, and it also
creates *sparks* of static electricity. With great effort, it was determined
that the same charges, at twice the distance, will feel *one quarter* the force,
which was embraced as a *force law* between two charges Q and q:

> F = k<sub>e</sub> Q q / R<sup>2</sup>

where k<sub>e</sub> is a special electric constant of nature, which we'd have to
measure, and R is the distance between the charges.

It turns out that the surface area of a sphere of radius R goes like R<sup>2</sup>.
More precisely, the surface area is 4 π R<sup>2</sup>. This means that we can
imagine these 'force lines', like the flow lines of the wind, coming out of
positive charges and flowing either out to infinity, or into negative charges --
and how close they are to each other would represent how strong the force was.
In other words, we can invent an "electric field" **E** defined by:

> div **E** = 4 π k<sub>e</sub> ρ

A little charge q in this electric field would feel the force **F** = q **E**. A
spark happens when this force is so strong that it can push electricity through
the air, even though the air is normally electrically insulating. Finally, for
various reasons people prefer to write 4 π k<sub>e</sub> = 1/ε<sub>0</sub>,
where ε<sub>0</sub> is known as "the electric constant", so that we can just
write ρ/ε<sub>0</sub> in the above equation. And notice that ρ is now free to be
negative, because it is a *charge density* and electric charge can be positive
or negative.

Magnetism was thought of as totally different, it was something which would line
up iron filings so as to show a "magnetic field" **B**. The reason why it's so
different is that if you chop a magnet in half, you don't just have one magnet
which is "North" and the other magnet which is "South", in the absolute positive
and negative distinction of electricity. Rather, you get two magnets, both with
a North and South pole. In other words, there doesn't seem to be any place which
this **B** field is coming out of:

> div **B** = 0

Magnetism was very mysterious therefore, and had to do with iron filings and
compasses and had nothing to do with sparks and batteries. But with a bit of
effort, a connection was found: if you connect a battery to a big loop of wire,
it behaves much like a bar magnet does, as if the magnetic field was curling
around the current. There was therefore some magnetic constant μ<sub>0</sub>
which connected the current to the magnetic fields it generated:

> **curl** **B** = μ<sub>0</sub> **J**

Suddenly you could understand why a magnet breaks apart into two magnets: a
magnet is like a stack of loops of current, and when you break it in half, you
still have loops of current in both the top and the bottom.

Finally, and most crucially for the modern era, if you passed the North side of
a magnet over a loop of wire, you could create a counterclockwise current in the
loop as the magnet went in, and a clockwise current as the magnet left. This is
still the central principle of the "turbines" which generate pretty much all AC
electricity today: the loops kind of "oppose the change" in the number of
magnetic field lines flowing through them, by creating a current which creates a
magnetic field which would preserve the status quo. However, this current cannot
do a perfect job because the loop is not a perfect conductor, so the magnetic
field lines slowly "work their way inside" the loop, dragging electrons with
them. We write this as:

> **curl** **E** = - ∂<b>B</b>/∂t

These four equations were everything that was known about electromagnetism
before Maxwell, but it was not in this language and they were treated as wildly
different experiments. Maxwell's big task was to bring all of these phenomena
together into one theory.

## Maxwell's contribution

This "field" description was invented in 1861, when James Clerk Maxwell dared to
imagine that every point in space was filled by little vortices which were
somehow transmitting centrifugal forces to the charges which occupied them. He
thus basically invents the notion of the electric and magnetic field, and also
develops what we'd now call the "scalar" and "vector" potential. So he created
this "field" language and collected the above four equations:

- div **E** = ρ/ε<sub>0</sub>
- div **B** = 0
- **curl** **E** = - ∂<b>B</b>/∂t
- **curl** **B** = μ<sub>0</sub> **J**

He also noticed that there was something very fishy about that last equation.
Can you see what it is on your own? It has to do with all of that vector
calculus stuff we talked about before!

It's continuity. Maxwell's 1861 paper is building these equations up gradually,
starting from the magnetic field, which is the more "vortex-y" of them both; the
electric field has an "elastic" character to it. But Maxwell knows that he has
a continuity equation div **J** + ∂ρ/∂t = 0. And he sees that this last
equation, in the form it was then understood, would actually demand

> div **J** = div **curl** **B** / μ<sub>0</sub> = 0 / μ<sub>0</sub> = 0

because the divergence of any curl is zero. So if you applied  the continuity
equation you would actually just predict that charge can never "build up"
anywhere.

Maxwell introduced an extra term now called the "displacement current",

> **curl** **B** = μ<sub>0</sub> **J** + μ<sub>0</sub> ε<sub>0</sub> ∂<b>E</b>/∂t.

This extra term can now be combined with the continuity equation to *derive* the
first Maxwell equation:

> div **curl** **B** / (μ<sub>0</sub> ε<sub>0</sub>) = div **J** / ε<sub>0</sub> + ∂(div <b>E</b>)/∂t,
>
> ∂/∂t [ -ρ/ε<sub>0</sub> + div **E** ] = 0

So this fit nicely into his exposition, and was required by the combination of
the continuity equation and the 1/r<sup>2</sup> force law. Again, he added it in
1861 in a paper titled "On Physical Lines of Force."

## The Whole World Explodes

Maxwell was genius enough to realize that the story does not end there. What we
have is that a changing E curls B, and a changing B curls E. The question was,
"can these vibrate each other in any interesting observable ways?". That would
be a great way to measure this sort of modification, if you could set up that
experiment!

His 1861 paper speculates on how fast certain vibrations would go through the
vortices; and in 1865 he expands this into a full derivation: not only was
Maxwell right, he's right *even if there's no charge around*. In other words,
just set **J** = 0 and ρ = 0: we don't need them for this! In vacuum we would
still have:

- div **E** = div **B** = 0
- **curl** **E** = - ∂<b>B</b>/∂t
- **curl** **B** = μ<sub>0</sub> ε<sub>0</sub> ∂<b>E</b>/∂t

We take for example **curl curl E**. We noticed before that this becomes

> **curl curl E** = **grad** (div **E**) − ∇<sup>2</sup> **E**

But by Maxwell's equations, the first part is zero (div **E** = 0) and the
remainder is equal to:

> ∇<sup>2</sup> **E** = ∂/∂t <b>curl B</b> = μ<sub>0</sub> ε<sub>0</sub> ∂<sup>2</sup><b>E</b>/∂t<sup>2</sup>

This was the wave equation that we saw before; it is actually satisfied by *any*
vector-valued function **E**(**r** − **v** t) as long as we guarantee that
v<sup>2</sup> = 1/(μ<sub>0</sub> ε<sub>0</sub>).

Others had already noticed that there was this speed c = 1 / √(μ<sub>0</sub> ε<sub>0</sub>)
and discovered by experiment a value of 300,000 km/s. It was Maxwell who
observed in 1861 that actually, this was within measurement error of the
then-known *speed of light*. So this little term which was included to guarantee
that charges can collect in various places leads to a surprising explanation:
light is an electromagnetic wave, where E is modifying B and B is modifying E.

Just as importantly, the waves were *transverse*, meaning that they are like
vibrating a string up and down, not like vibrating a spring back-and-forth.
Maxwell knew from optical science of the time that light waves were transverse
too, and derived that in his theory you couldn't have longitudinal waves: so
that the vortices *force* light to be a transverse wave. Everything fit.

You would think that such a powerful result deserves widespread celebration, but
the triumph soon gave way to more pressing questions. The theory says that it
moves at speed `c`, but `c` relative to what? Newton had successfully explained
planetary motion with a model where all motion is relative, and you could derive
similar equations for sound, where sound (as a pressure wave) moves relative to
the fluid that it's propagating through. But this seemed stranger, because we
set **J** = 0 and ρ = 0 and got a result which was supposedly valid 'in vacuum'.
If there's nothing around to move relative to, how do you move at `c` relative
to it?

The popular approach was to imagine that light was like sound, propagating with
respect to some objective medium permeating the universe, a "luminiferous
aether." Maxwell's "vortices" practically demand this sort of thinking! This
would mean that the Maxwell equations were a little bit wrong, because they
assume that you're at rest relative to the aether. If you were moving through
it, then basically either the equations are wrong or else ε<sub>0</sub> could
depend on the direction that you point your experiment.

The beautiful thing about this is that it can be measured. In 1887, at Case
Western Reserve, two physicists had an ingenious plan for measuring the motion
of the Earth through the luminiferous aether: just measure the speed of light in
several directions. The measurements were actually so noisy that they had to
put their experiment on a block of sandstone floating in a pool of mercury. 



How does that work? Well, presumably the Earth's surface does not "drag along"
the aether, otherwise we'd be able to study optical distortions and so on. So we
simply measure the speed of light, then wait 6 hours, then measure, then wait 6
hours, and so on: the rotation of the Earth will point our apparatus in a
variety of different directions, and we'll see which way the aether-winds are
pointing, just as if we were turning around and feeling the actual wind brush
against our faces.

It was a very 

## Lorentz and the beginnings of relativity
This was the sort of crisis that electromagnetism found itself in in the 1890s;
and in order to try to understand what was going on, a Dutch physicist named
Hendrik Lorentz discovered several different things.

The first one is called the Lorentz gauge condition. It turns out we can solve
the Maxwell equations with a scalar potential (or "voltage") φ and a vector
potential **A** by choosing:

- **B** = **curl** **A**
- **E** = - **grad** φ  − c<sup>2</sup> ∂<b>A</b>/∂t


- div **E** = ρ/ε<sub>0</sub>
- div **B** = 0
- **curl** **E** = - ∂<b>B</b>/∂t
- **curl** **B** = μ<sub>0</sub> **J**
