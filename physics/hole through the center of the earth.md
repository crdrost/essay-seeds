# Tunnelling through the Earth

Assume a perfect lossless tunnel through the Earth -- what would it be like to 
fall through? Just for the heck of it, also assume a constant density 
approximation.

Newton's law of gravitation says that the acceleration due to a small mass m
at a distance r away is:

    a = -G m/r²

But this needs to be generalized. The best way to generalize it is the field
line picture. Imagine that we draw little lines out from this mass, off to 
infinity. We'll interpret what these lines mean in just a second, but just 
imagine that they stick out like thin, long hairs evenly spaced around this 
mass, pointing straight out to infinity.

The reason for the hairs is very simple: if I take a sphere around the small
mass, that sphere must have N hairs going through it, where N is now some 
geometric fact -- how many hairs are on this little ball that we started out
with. The fact that N is the same for all spheres is the crucial geometric fact
that we're looking for. This fact is also true here, because on the sphere the
acceleration above is constant and points perpendicular to the surface, and 
we can "sum it up" over the whole surface to give something called the "flux"
through the surface. But the surface area is 4 π r², so this flux is the same
for any sphere, just like N is:

    Φ = ∫ a · dA = (-G m/r²) * (4 π r²) = - 4 π G m

There are more sophisticated rules for these field lines which I don't want to
get into -- the hairs should always point along the local acceleration, for
example. This means that the hairs should never cross! Geometrically the rules 
are also pretty simple. Suppose I want to look at field lines for two masses, 
M and m. Imagine, for example, Earth and the Sun. They get different numbers of
hairs, N and n, proportional to their masses. In our case the Sun should get
333,000 times as many hairs, to spread across 12,000 times as much surface 
area.

In the case of gravity, the hairs are not allowed to go from one of 
these masses to the other, so there are N + n hairs in total. And very close
to each of these masses, its own gravitational field is much much stronger than
the other one's -- we don't really feel the pull of the Sun so much! -- so the
hairs are still evenly spaced on the surface.

But that's where the similarity ends. All of the hairs from our Earth, because
they can't cross into the Sun's hairs, come out from our planet and then turn
away from the Sun. The Sun's own hairs all shift slightly to accomodate it. At
a far enough distance, it has to look like we're both a single point mass, so
off at infinity the N + n hairs become uniformly spaced again, but in this 
middle space between our Sun and the Earth there is this complicated twisting 
of hairs outward.

This picture gives us the opportunity to answer a simple mathematical question
that we wouldn't be able to otherwise answer. If you take a LOT of little 
masses m, and arrange them on a spherical shell, what does the acceleration
look like inside and outside that shell?

The answer is, all of the field lines must immediately twist out of this shell.
If they went in, they would probably be bound by symmetry to cross at r = 0,
and that's not allowed! Anything which involves hairs not turning around and
coming back out of this sphere is not allowed by the geometric rules, so that 
as we make the masses smaller and distribute the mass more evenly around this 
shell, the penetration depth of the field lines into the sphere shrinks to 0, 
and they all begin to come out uniformly from the sphere. 

Outside the sphere, you see all N lines sticking out uniformly from the mass.
It's exactly the same thing as you'd see if all the mass were a point mass 
concentrated at the center, `a = -G m/r²`. But *inside*, there are no field 
lines and there is therefore no flux, no field strength: `a = 0`. 

That's a little bit of hard geometry to deal with this 1/r² term! But that's
also a pretty beautiful result. If you prefer calculus and numbers and symbol-
shuffling algebra, you can do this with vector calculus by insisting that a 
mass density ρ generates accelerations according to the equations:

    ∇ · a = -4 π G ρ
    ∇ × a = 0

Shifting our perspectives to the problem at hand, we see that as we fall into
the Earth, we will be somewhere inside at a radius r. There is mass above us
between r and R, where R is the radius of the Earth itself -- but that mass
has no effect on us! Its field lines bend out. So we get to ignore it when we 
figure out our own acceleration. Only the mass at these values between 0 and r 
matter, and all of that mass can be treated as if it were shrunk down to the 
center, so that the acceleration it exerts is simply:

    a = - G m(r) / r²

We can now use an assumption about constant density to make this cleaner, it
says that the mass m(r) contained in our sphere of radius r is:

    m(r) = ρ V(r) = ρ (4 π r³ / 3)

So this expression actually says just 

    a = -G m/r² = - (4π/3) G ρ r 

Introducing the total mass of the earth M = ρ (4 π R³ / 3), we can get rid of
the nasty terms and write this as:

    a = - G M r / R³

So you see that instead of 1/r² we have r / R³, when we have worked out this
problem completely. 

This is a simple harmonic oscillator problem now, because if you just fall 
radially in, a = d²r/dt² , and you get:

    d²/dt² r(t) = - G M r(t) / R³ = - r(t) / τ²

    r(t) = R cos(t / τ)
    τ = √(R³ / (G M)) = 13.4457581 minutes

Since cosines repeat after 2π, and half of that period will get you to the 
other side, you would get to the other side in `π τ = 42.24 minutes` and you
would return back to your starting point after 84.5 minutes, assuming friction
didn't slow you down!

How fast would you be going? Your velocity would be given by taking a 
derivative and invoking the Pythagorean theorem of trigonometry, which says 
that `sin²(x) + cos²(x) = 1`:

    v = dr/dt = - (R / τ) sin(t / τ) = - (R / τ) √(1 − cos²(t / τ))

    v = - (R / τ) √(1 − (r(t) / R)²)

    v = - √(R² − r²) / τ 

In the case where r = 0, we hit our maximum speed, and the velocity then is 
just R / τ. (Alternatively, sin(t / τ) is maximized at ± 1.) So our maximum 
speed would be:

    v = 28 461.467 km/hr = 17 685 mph

That's pretty incredible! There had better not be any air, because that's
23 times the speed of sound. 

Even ignoring fricion losses due to air, there might be another sort of force
that would slow you down -- friction with the walls. You might think, "oh, 
I'll just start out in the middle of the tube, then I won't touch the walls, so
there will be no friction!" Unfortunately, that requires a very curvy tube! 
You see, the problem is that we've forgotten that the Earth itself is rotating
slowly, completing one revolution per day. If θ is your latitude, as measured
from the equator, you are right now travelling in sync with it, at a speed:

    v = r(t) * (2 π / day) cos(θ) = u (r/R) cos(θ)

    u = R * (2 π / day) = 1 669.78268 km/hr

So you might be easily moving at a thousand km/hr, depending on your latitude.
If you're reading this at the North Pole, there is no problem. ;-) But anywhere
else, as r(t) drops to zero, to remain "in sync" with the Earth you have to 
let the walls of the tunnel push on you, because you started out at r = R with
velocity u cos(θ) where you had slowed down to 0, and then you emerged at the
other side with velocity -u cos(θ). 

The acceleration needed is dynamical -- it changes as you fall. It's given to 
first approximation by the Coriolis acceleration formula:

    a = -2 ω × v

Since the angle of the cross product doesn't change, this is maximized when
|v| is maximized, thus I go back to the expression:

    v = - √(R² − r²) / τ

...and find that when r = 0,

    a = 2 ω R cos(θ) / τ = 1.150 m/s² cos(θ).

That sort of acceleration is only maybe about one tenth of gravity at its 
strongest -- so 0.1 g's are not going to *kill* you or anything, but it's not
negligible either. So your capsule (no air!) is going to have to have wheels 
on it, and those wheels are going to have to be able to withstand driving at
28 500 km/hr down this "tunnel". Even then, due to very high friction losses
in any wheel running at that speed, it might be a good idea to bring a rocket 
engine to assist in getting out. ;-D

There is also a centrifugal acceleration ~ ω² r, but this is only 0.034 m/s²
or so, so we can ignore it.