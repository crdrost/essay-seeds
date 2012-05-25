# Complex Analysis

Complex numbers occur when we add the square root of -1 to the real numbers,
following the other rules of multiplication (distributive and associative):

    (a + b i) * (c + d i) = (ac - bd) + (ad + bc) i

I think the first question a new student has when they see this is, "yeah, but
what is the square root of i? Isn't this an infinite regression?" The answer,
surprisingly, is "no". The square roots of i are actually:

    √(i) = ± (1 + i) / √(2)

As we can confirm by multiplying:

    (1 + i) * (1 + i) = (1*1 - 1*1) + (1*1 + 1*1) i = 2 i.

In fact, complex numbers are one of the most versatile entities in mathematics,
so it is worth looking at the many different perspectives which complex numbers
provide.

## Other ways to look at complex numbers
Viewed another way, we have added a new operation which composes vectors in R²:

    [a] . [c]  =  [ ac - bd ]
    [b]   [d]     [ ad + bc ]

If you look only as a transform of the second vector [c, d], you see that this
operatiion can be characterised as a matrix:

    [a  -b] [c] = [ ac - bd ]
    [b   a] [d]   [ ad + bc ]

We can also extend this to [c; d] by including a final conversion step of
applying the complex matrices to the vector [1, 0]:

    [a  -b] [c  -d] [1] =  [ ac - bd ]
    [b   a] [d   c] [0]    [ ad + bc ]

So complex numbers are also vectors in R² and 2x2 matrices! Now let us ask what
these matrices describe, to give one final question about what complex numbers
"are". Simply looking at the pattern of the numbers, we can say:

    [a  -b]  = [r cos θ,  -r sin θ]    for   r = √(a² + b²)
    [b   a]    [r sin θ,   r cos θ]          tan θ = b / a 

We see that complex addition is like vector addition, while complex
multiplication is a **scaled rotation**. This is a very geometric way to
understand complex numbers. We can now see that the complex number i = [0, 1]
corresponds to the case `r = 1, θ = π/2`, or a rotation by 90°:

    [0  -1]
    [1   0]

And we can now understand why (1 + i) / √(2), when squared, gives 1: the vector
(1, 1) makes a 45° angle with the x-axis, so multiplying two of them gives a
sum of angles. That is to say, one can use sine and cosine rules to say that the
product of two complex numbers is given as:

    r R(θ) · s R(φ) = (rs) R(θ + φ)

where R(t) is the rotation matrix by angle t. We can see the connection most
clearly if we use the Taylor series on these matrices to expand exp(i t):

    exp(i t) =  [1  0] cos(t) + [0  -1] sin(t)  = R(t)
                [0  1]          [1   0]

So we have unified the multiplication-becomes-sum rule of logarithms with a
similar rule for the argument of the rotation matrix, R(θ) · R(φ) = R(θ + φ).
This gives us one last way to view complex numbers: since cos(t) and sin(t) are
the simplest waves, `eⁱᵗ` is an even simpler representation of such waves.

# Holomorphic functions
A complex function is really a vector field over R², since you are mapping
complex numbers to other complex numbers. Any such function W(z): R² → R² can
have a derivative defined by its Jacobian matrix:

    Let W(x, y) = [u(x, y), v(x, y)]
    ΔW = [Δu, Δv] = [ ∂u/∂x Δx + ∂u/∂y Δy, ∂v/∂x Δx + ∂v/∂y Δy ]

    ΔW  = [ ∂u/∂x,  ∂u/∂y ] [Δx] = (∇ ⊗ W) · Δz
          [ ∂v/∂x,  ∂v/∂y ] [Δy]

We see that we can describe this derivative as a complex number whenever the
Cauchy-Riemann conditions hold:

    ∂u/∂x = ∂v/∂y
    ∂v/∂x = - ∂u/∂y

We call this *complex differentiability*. Notice that for sufficiently nice
functions we might take two derivatives:

    (∂/∂x)² u = (∂/∂y) (∂/∂x) v = - (∂/∂y)² u
    ∇² u = ∇² v = 0

In other words, generally both u and v are *harmonic functions*, with a special
relationship between them (that v is u's *harmonic conjugate* and u is v's
*harmonic anticonjugate* if you want to be specific).

We can relate it to the original definition of complex numbers by saying:

    ∂/∂x (u + i v) = ∂/∂y (v - i u)
    ∂f/∂x = -i ∂f/∂y
    ∂f/∂y = i ∂f/∂x

In other words, the response to the y-variation must look exactly like the
response to an x-variation, rotated by 90°, reinforcing the geometric picture.

We say that a complex function is *holomorphic at a point* if it is complex-
differentiable in a neighborhood about that point. We call it a holomorphic 
function if it is holomorphic at every point in its domain. f(z) = z is defined
over the entire complex plane and is a holomorphic function, as is f(z) = 1.

Holomorphic functions are closed under addition (f + g is holomorphic when f and
g are), complex multiplication, and division (though f / g is not defined at,
and therefore not complex-differentiable at, any location where g(z) = 0). This
means that f(z) = z² and f(z) = 1/(1 + 1/z) are both holomorphic, as is a
Taylor-style polynomial expansion of a function, as long as it converges.

One crucial and interesting fact about holomorphic functions is their use as
conformal maps. As we said, "holomorphic at z" means "complex-differentiable in 
the neighborhood of z," and this means:

    f(z + dz) ≈ f(z) + f'(z) · dz

Since f'(z) is just a complex number, this means that locally a holomorphic
mapping is a scaled rotation. This means that it *preserves angles*. If two
lines cross at z with an angle φ between them, those two lines now cross at f(z)
with the same angle φ between them. Such a mapping is called *conformal* and we
often display it with a grid of real and imaginary lines as input, showing their
image under the transformation. See the images at
http://mathworld.wolfram.com/ConformalMapping.html for examples of this; the
curves intersect at right angles even though they are no longer a square grid.

So holomorphic functions can be formed by Taylor expansions, and yield harmonic
functions and conformal maps.

# The minimum modulus principle

We define the *modulus* of `c = a + i b` as:

    |c| = √(a² + b²)

It corresponds to the `r` above -- the scale factor of the geometric transform.
It gives a natural meaning to "increasing" and "decreasing" among the complex
numbers, which do not otherwise have the `<` and `>` orderings of the real
numbers. But the modulus of a holomorphic function must obey:

    ∂/∂x ½ |w|² = u ∂u/∂x + v ∂v/∂x
    ∂/∂y ½ |w|² = u ∂u/∂y + v ∂v/∂y

Now suppose we wanted a local extremum, we would be desiring that:

    u ∂u/∂x − v ∂u/∂y = 0
    u ∂u/∂y + v ∂u/∂x = 0

    u [(∂u/∂x)² + (∂u/∂y)²] = 0

We would therefore require either that u = 0 or else that ∂u/∂x = ∂u/∂y = 0. The
same holds for v, either v = 0 or else ∂v/∂x = ∂v/∂y = 0. We come to the
startling conclusion that *holomorphic functions can always increase* in some
direction, unless they are constant. They can also *always decrease* in some
direction unless they happen to hit 0. This means that given any connected
domain D over which f is holomorphic, the maximum of |f| occurs on the boundary
of that domain.

# The arbitrariness of i
We said that we would define `i = √(-1)` but a little reflection suggests that
this is unclear, because surely `(-i)² = -1` as well, and in complex math both
± i are distinct numbers. Which one is the "correct" +i?

The answer is simply that we choose one arbitrarily. This means that there is a
powerful symmetry: all of this mathematics must hold if we were to consistently
replace +i with -i. This unary operation is called the *complex conjugate*:

    (x + i y)* = x − i y

You can show that this distributes over multiplication and addition in the
obvious ways, so that even `( exp(i t) )* = exp(- i t)`. This gives another
occasion for complex conjugates:

    z = r R(θ) = r exp(i θ)
    
    |z|² := r² = r exp(i t) · r exp(-i t) = z · z*

This means that complex-conjugation is a useful way to find the scale factor
(the *modulus*) of a complex number: any number multiplied by its complex
conjugate yields a real number, just as surely as:

    (a + i b) (a − i b) = a² + b²

It is also useful for testing whether a number is real, or finding a real or
imaginary part:

    x ∈ R ←→ x = x*

    Re{z} = (x + x*) / 2
    Im{z} = (x − x*) / (2 i)
    
The complex conjugate is not complex-differentiable anywhere, thus z* and |z|
are not complex-differentiable either. One special combination is, and it is the
only way to obtain a "nice" complex conjugate function: that is via division:

    1/z = z* / |z|².

So for example the conjugate of 1 + i is 1 − i, while 1/(1 + i) = (1 − i) / 2.

The arbitrariness of i comes back to help you when you are solving for the
*roots of real polynomials*. Since wherever +i works, -i would also work, we can
quickly state that all nonreal solutions to a real polynomial occur in complex
conjugate pairs, because:

    Σₙ aₙ zⁿ = 0 where aₙ = aₙ*   implies   Σₙ aₙ (z*)ⁿ = 0

Hey, while we're speaking of polynomials...

# The Fundamental Theorem of Algebra

We are now prepared to prove the Fundamental Theorem of Algebra, which we might
state as:

    The equation c₀ + c₁ z + ... + cₙ zⁿ = 0 has n solutions for complex z, if
    you count degenerate roots separately and cₙ ≠ 0.

First we reduce the complexity, as this is a direct consequence of a simpler
statement:

    Any non-constant complex polynomial has a root.

Why? Because if you call that root z₀, you can divide the original polynomial by
(z − z₀) to obtain a new polynomial of degree n − 1, which also has a root, and
so on until you have n roots and a constant polynomial. That is how the
reduction works.

Now we prove the reduced form of the Fundamental Theorem. There plainly exists
some (perhaps very large) radius R such that the dominant term on the z-circle 
of radius R is the first:

    |cₙ| Rⁿ > |c₀| + |c₁| R + ... + |cₙ₋₁| Rⁿ⁻¹

In fact, we can choose it to be a little larger and we thus have that on this
circle |z| = R:

    |f(z)| > |c₀| = |f(0)|

This means that the modulus is *smaller* at a point inside the circle than it is
on any boundary point of the circle, which means that there must be an
*interior minimum*, not necessarily at z = 0. But the polynomial is holomorphic,
and can only have an interior minimum if f(z) = 0 at that minimum, by the
minimum-modulus principle. QED.

# A Contour Deformation Theorem

This is sometimes called the Cauchy integral theorem. To deal with it, we will
have to be clear about what a complex integral is. Suppose we have some curve
C which we shall approximate with evenly-spaced points c₀, c₁, ... cₙ . Then the
complex integral is simply the limit of a normal Riemann sum with complex
numbers instead of real numbers:

    ∫{C} dz f(z) = lim{maxₖ |cₖ − cₖ₋₁| → 0} Σₘ f(cₘ) * (cₘ − cₘ₋₁)

There are several ways to do these integrals. For example, you might parametrize
the curve with some function c(t) with t ranging from 0 to 1, and then perform:

    ∫₀¹ f(c(t)) * c'(t) dt

This could be done for example with the curve R eⁱᵗ to integrate over a circle
of radius R. The question we face is, under what circumstance does the contour
matter? Engineering and physics students, for example, are very familiar with an
interesting result called the Stokes theorem, for vectors in R³; it says:

    ∫{∂S} F · dr = ∫{S} (∇ × F) · dA

In places where `curl F = 0` we recover a nice result that any line integral
`∫{C} F · dr` can be deformed into another line integral to the same endpoints,
thus proving that the choice of the exact contour does not matter. You can thus
deform the contour through any space where `∇ × F = 0`, because it amounts to
adding a closed curve through that space.

This deformation theorem is called the Cauchy integral theorem, and we prove it
the same way that we prove the Stokes theorem: we show that integrating the
linear approximation over a small triangle has no effect.

We imagine a function f(z) ≈ p + q z near z = 0 which we integrate along the
contour C: (0, 0) → (a, 0) → (a, b) → (0, 0). This means that along the first
path, z = a t, on the second path z = a + i b t, and on the third path
z = (a + i b) (1 - t). Let me handle the constant part first:

    I₀ = ∫{C} p dz = ∫₀¹ p [ a dt + i b dt − (a + i b) dt ]
       = ∫₀¹ p * 0 dt = 0.

The linear part is slightly more complicated: 

    I₁ = ∫{C} z dz
       = ∫₀¹ [a t a + (a + i b t) i b + (a + i b) (1 - t) * -(a + ib)] dt
       = ∫₀¹ (t [a² − b² + (a + i b)²] + i a b − (a + i b)²) dt
       = ½ [a² − b² + (a + i b)²] + i a b − (a + i b)²
       = a² − b² + i a b + i a b − a² − 2 i a b + b²
       = 0

By stitching together these triangles over a simply-connected domain D where a
function is holomorphic, we find that:

     ∫{∂D} f(z) dz = 0

We can thus deform a complex integral through any holomorphic region. If a
function fails to be holomorphic at a point, we can leave behind a curve around
that point as we deform through it.

## A common example of contour deformation

A simple application is to find the Fourier transform of 1/(1 + x²). This looks
like:

    f[k] = ∫{-∞ → ∞} dx eⁱᵏˣ / (1 + x²)

We immediately make this complex by integrating over the real line:

    f[k] = ∫{R} dz eⁱᵏᶻ / (1 + z²)

Let us assume for a moment that k is positive. We then deform the contour
towards a semicircle in the upper half plane, z = R exp(i θ), with θ: π → 0.

         ,-----, (new contour)
        /   x   \
    ___|_________|___(old contour)
    
            x

As R gets large, we have an integral:

    I = ∫ i R exp(i θ) dθ exp(-k R sin θ) exp(i k R cos θ) / (1 + R² exp(2 i θ))

The Cauchy-Schwarz inequality says |∫f(z) dz| <= ∫ |f(z)| |dz| and we can use
this to say that this integral is small:

    |I| <= ∫ dθ exp(-k R sin θ) R / (1 + R²)

In the limit of large R, this goes to 0 as R gets very very large. So the
integral over the semicircle is actually zero, in this limit. You can also see
that for k < 0 we will have to do something different (we will have to choose
a large semicircle towards the -i side), otherwise the exponential will become
quite large.

Am I telling you that the Fourier transform is zero? Not quite. Look at the
little marks `x` in the above diagram: those are the points `z = ± i` where the
integrand was not defined. We have to "leave a contour" on the top one as we
deform the contour upwards -- a tiny counterclockwise contour about z = + i.

Let us describe this contour as `c :: [i + ε exp(i θ), θ: 0 → 2π]`. We have
that:

    f[k > 0] = ∫{c} dz eⁱᵏᶻ / [(z + i) * (z − i)]

Substituting the above and taking some preliminary limits of ε → 0 gives:

    f[k > 0] = ∫ i ε exp(i θ) dθ e⁻ᵏ / [(2i) * (ε exp(i θ))]
             = e⁻ᵏ ∫ dθ / 2
             = π e⁻ᵏ.

We now handle the case k = 0, which is very simple:

    f[0] = ∫{R} dx  / (1 + x²) = [tan⁻¹(x)]_{-∞, ∞} = π/2 − -π/2 = π.
    
It's consistent. But now what about k < 0? We must close the other way:

            x   
    _________________(old contour)
        |       |
         \  x  /
          `---'  (new contour)

Now we have `c :: [-i + ε exp(-i θ), θ: 0 → 2π]`, as the contour now goes
clockwise about the point. Our integral is instead:

    f[k < 0] = ∫{c} dz eⁱᵏᶻ / [(z + i) * (z − i)]
             = ∫ -i ε exp(-i θ) dθ eᵏ / [ε exp(-i θ) * (-2i)]
             = eᵏ ∫ dθ / 2
             = π e⁻ᵏ

The Fourier transform of f(x) = 1/(1 + x^2) is thus f[k] = π exp(-|k|). If that
is correct then it must satisfy the inverse Fourier transform:

    f(x) = 1/(2π) ∫{R} e⁻ⁱᵏˣ f[k] dk

We split this into two parts, k < 0 and k > 0, to find:

    f(x) = 1/2 [ ∫{0 → ∞} e⁻ⁱᵏˣ e⁻ᵏ dk + ∫{-∞ → 0} e⁻ⁱᵏˣ eᵏ dk ]
         = 1/2 [ [e⁻ᵏ⁽¹⁺ⁱˣ⁾/(-(1 + i x))]_{0, ∞} + [eᵏ⁽¹⁻ⁱˣ⁾/(1 − ix)]_{-∞, 0} ]
         = 1/2 [ 1/(1 + i x) + 1/(1 − i x) ]
         = 1/(1 + x²)

We see that indeed, if we allow these sorts of arguments about the scaling of
integrands with the radius R of certain contours, we get verifiable answers.