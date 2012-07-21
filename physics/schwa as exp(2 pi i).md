# ə = exp(2 π i) ≈ 1

I am going to advocate for adding the symbol "schwa" (Unicode: ə) to the physics
lexicon, as a very pretty way of describing waves. In so doing, I wish to call
attention to the question of whether the conventional unit proposals are
functionally wrong to set "ħ = 1" -- perhaps we should be setting "h = 1"
instead.

When I transferred from doing biomedical engineering courses at Cornell to doing
applied physics courses, I suddenly had to learn a bunch of wave theory. And
what frustrated me was the sheer number of parentheses.

The problem is that your most basic wave might be written as:

    exp(i (k x − ω t))

Usually one set of parentheses is omitted by defining e = exp(1) and then
writing this as e raised to a suitable exponent. But then it seemed absolutely
obvious to me that one could instead define some other symbol as exp(i) and thus
avoid both of these!

Meanwhile, radians are really hard to teach kids, and there has now been an
interesting movement to replace the familiar mathematical constant "2 π" with
"τ", designed to emphasize how many "turns" there are in going about a circle.
There is a pedagogical use to this, because it's obvious that "a quarter turn"
and "a right angle" describe the same mathematical construct -- this would unify
them in notation as well, so that when you see the expression for the right
angle τ/4, you immediately can think of it as a quarter-turn.

This is actually a source of great confusion in physics: it is often unclear
when we are talking about a frequency, and when we are talking about an
*angular* frequency. I will give one example; in spectroscopy you usually
measure energies in inverse centimeters (cm⁻¹), now tell me quick: is the
common conversion factor for this unit `h c`, or `ħ c`? That is, are they
more concerned with the frequency of their lasers (real frequency) or
wavenumbers in k-space (angular frequency)?

In fact, it is such a great confusion that the standard solid-state textbooks
describe something mathematically bizarre: given unit vectors êₙ so that a 
vector `v` in the lattice is expressed as `v = Σₙ vⁿ êₙ`, they define basis
vectors in the dual space as `ŝᵐ · êₙ = 2 π δᵐₙ`. It *should* just be `δᵐₙ` so
that you can satisfy the inner product rule that `u · v = Σₙ uₙ vⁿ` but instead
the factor of `2 π` has been illegitimately leaked into the dual-space basis.
This complexifies the formula for those dual space vectors to the point where
students seem to just "shut off". That is, the R³ dual-space expression:

    ê¹ = ê₂ × ê₃ / [ê₁ · (ê₂ × ê₃)]

seems to "click" for every undergraduate I have ever taught. "Oh, yes, of course
we want a vector perpendicular to ê₂ and ê₃, and that thing at the bottom is
just a normalization factor so that ê₁ · ê¹ = 1." However, when I start with a
mysterious 2 π in this expression, this equation magically transitions from
"something to immediately understand" into "something to memorize later before
the test".

The absolute final nail-in-the-coffin for this matter comes from the Fourier
transform. There is an arbitrarily-distributable normalization factor of 2 π
entering the Fourier transform. That is, we have the inverse relation:

    ∫ ds ∫ dω exp(i ω (t − s)) g(s) = 2 π g(t)

    ∫ dω exp(i ω t) = 2 π δ(t)

and there is a long-running dispute about whether the `2 π` whould be associated
with the `dω` or distributed over both as `1/√(2 π)` terms. One looks more
symmetric; the other looks cleaner in practice. After all, when we move the
factor of `2 π` into the integral over `ω`, then the `ω = 0` value of the
Fourier transform is simply the definite integral over the whole real axis. This
may often be normalized (as in probability distributions) to `1` or might
otherwise have a 'nice' value which should not be obscured by dividing by
`√(2 π)`.

This debate *totally evaporates* when we define `ω = 2 π f`. There is simply no
`2 π` to distribute. Instead, defining `ə = exp(2 π i)`, we have simply:

    ∫ df əᶠᵗ = δ(t)

We have a real frequency, we have cleanliness in practice, and we have the
symmetry between the two:

    F{t → f}[_] = ∫ dt ə⁻ᶠᵗ [_]     F⁻¹{f → t}[_] = ∫ dt əᶠᵗ [_]

Notice that all the ugliness of the 2 π has been largely soaked into this
elementary phasor əˣ. You may object that `ə = 1` but I regard this as a
strength rather than a weakness.

Now, it's true that this now entails that if

    G(f) = F{t → f} g(t) and H = F{t → f} g'(t)

then

    G(f) = 2 π i f H(f)

but, this (I think) is finally "where it should be". After all, when we teach
this to undergrads we will be teaching them:

    dəˣ/dx = 2 π i əˣ

    g(t) = ∫ df əᶠᵗ g[f]

and it strikes me that this relationship between the Fourier components g[f] and
the time components g(t) will come naturally to a clever student.

I would just like to close with a worked example, the Fourier transform of a
Lorentzian spectrum with full-width-at-half-maximum γ:

    ∫ df əᶠᵗ γ / (γ² + f²)

We know that əᶻ decays to zero for positive-imaginary z, so we close this
contour towards positive-imaginary infinity on the complex f plane when t > 0,
or to negative-imaginary infinity when t < 0. These create orbits of the poles
at f = ± i γ, call those orbits f = ± i γ + ε əˣ, take the limit as ε → 0.

This yields:

    lim{ε → 0} ∫₀¹ 2 π i ε əˣ dx ə^{i γ t} γ / (2 i γ ε əˣ) , t > 0
        = π ə^{i γ t}, t > 0

    lim{ε → 0} ∫₁⁰ 2 π i ε əˣ dx ə^{-i γ t} γ / (-2 i γ ε əˣ), t < 0
        = π ə^{-i γ t}, t < 0.

(This factor of π is unavoidable in any case as the integral of a Lorentzian --
the t=0 term -- is an arctangent.) Of course we could rewrite this as
`π ə^{i γ |t|} = π e^{-2 π γ |t|}`, but we do not have to. The reverse transform
is simply:

    ∫ dt ə⁻ᶠᵗ π ə^{i γ |t|} = π/(2 π i (-f − i γ)) − π/(2 π i (-f + i γ)))
        = Im { -1/(f + i γ) } = γ / (γ² + f²) 

Similarly, it is common in quantum transport calculations to combine a bunch of
probability amplitudes `uₖ` and corresponding (angular) frequencies `ξₖ` into a
rate Γ as:

    Γ(ξ) = Σₖ |uₖ|² 2 π δ(ξ − ξₖ)

The hope is that there are so many peaks spaced so closely that we can treat
`Γ(ξ)` as a continuous function.  This `2 π` could be trusted to disappear if
we instead had been using real frequencies all along, so that the rate was
instead:

    Γ(f) = Σₖ |uₖ|² δ(f − fₖ)

Similarly the Schrödinger equation now reads:

    i ħ |∂Ψ/∂t> = Ĥ |Ψ>

The use of `ħ` here is an idiosyncrasy caused by the simple fact that physicists
presently prefer working with `ħ ω` rather than `h ν`. In retrospect this was a
smart decision because now when you see an `ħ` you know exactly what constant it
names, whereas 'h' can be 'height' or 'Hamiltonian' or perhaps many other
candidates. However, we are missing a pedagogical tool of teaching our students
that, "hey, we start with the Planck relation `E = h ν`, let us simply write out
the wave equation corresponding to that -- h/(2 π i) ∂Ψ/∂t = E Ψ."

(The presence of the opposite sign on `i` here is almost enough to make me
instead define that `F ∝ əᶠᵗ, F⁻¹ ∝ ə⁻ᶠᵗ`, in sync with physicists' usual
conventions. I like, however, that `d/dt → 2 π i f` and the fact that in some
sense `g[f]` are the "components in the Fourier basis" in a way that will seem
natural to undergraduates.)

In short, the use of radians to improve the Taylor series of `sin(x)` and
`cos(x)` is not a bad idea, and that notation can perhaps be kept and used
successfully, as the relation `sin(x) ~ x` is often quite useful and the ability
to say for circular motion, `v = ω r, and a = ω² r, therefore a = v²/r` is an
absolutely beautiful calculus one-liner. But, as we develop a class on wave
theory we should begin instead to make our factors of `τ = 2 π` more explicit.
We *can* just say əˣ = exp(2 π i x) and be done with this -- and it will ensure
that our factors of `2 π` appear in their appropriate places.