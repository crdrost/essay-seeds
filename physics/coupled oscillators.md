I'm bugged by something mentioned in the Teaching Company Lectures on Mind: the
philosopher says that if you've got two clocks on the opposite sides of the 
room they exchange a very weak set of vibrations through the floorboards which
communicate their position like an ultraweak spring between them. The statement 
is that they will eventually come to tick in sync (if they are grandfather 
clocks) purely due to this sort of spring coupling.

Notice that he didn't say what I would have expected -- a dirac comb of "ticks"
from the ratchet inside the clock perhaps weakly impacting the system. A clock
in itself consists of an oscillator which receives a "bump" whenever it is at
a certain part of its motion. To the normal bumps which counter dissipation we
are now adding a new set of much-weaker bumps from the vibration transmitted 
through the floorboards, and I would suppose that these have a Fourier 
transform which is only near the resonant frequency for the leading component.
It would then be a damped-driven oscillator which might indeed come in sync
with its driving force.

But that's not what this philosopher said. He said that we could couple them by
a weak spring.

So we start with two identical coupled oscillators: x(t) and y(t), and because
it sounds like you need the phase to "damp out." Let's include a damping term:

    x'' = -ω² x − 2 x' / τ

This has a normal solution:

    x ~= exp(i u t)
        -u² = -ω² − 2 i u / τ
        u² − 2 i u / τ − ω² = 0
        u = i/τ ± √(ω² − 1/τ²)
    
    Let ῶ = √(ω² − 1/τ²):
        x(t) = exp(-t/τ) [A sin(ῶ t) + B cos(ῶ t)]

But now we have:

    x'' = -ω² x − 2 x' / τ − λ (x − y)
    y'' = -ω² y − 2 y' / τ − λ (y − x)

What bugs me is that I'm not sure how this spring λ is supposed to synchronize
anything. If you let u = x + y, then you just get:

    u'' = -ω² u − 2 u' / τ

Which helps to show that in some sense there is no dissipation and no 
complication: for x + y this coupling is never felt. And it doesn't look any 
better when v = x − y, so that v is a sort of proxy for the phase between them.
Then:

    v'' = -ω² v − 2 v' / τ − 2 λ v

This suggests that all a small λ does is to increase ω by a little bit for v.
This would cause a beat frequency: they would beat "in sync" and then 
"out of sync" but would not harmonize.