The inverse of the Fourier transform.

It seems pretty obvious that:

    q(k) = ∫_{-∞ → ∞} dx exp(i k x)

...should be sharply peaked around k = 0. After all, anywhere else, it is a sum
of a bunch of complex numbers with rotating phases, which tend to "spin around
in a circle" as you add them up, and you should get 0. But for k = 0, you are 
integrating 1, and the result should be infinity. But how can we make this formal?

The basic idea is that we introduce a "cutoff" for |x| > 10¹⁰⁰, say, so that 
this integral doesn't keep going to infinity. Unfortunately, unless we allow
it to decay gently, it will just tend to go around in a circle. The direct 
cutoff at limits ± X would result in:
    
    q(k) = [exp(i k X) - exp(- i k X)]/(i k) = 2 sin(k X)/k

And we can perhaps imagine things happening as X goes to infinity.

This is terribly inconvenient, so we implement the "cutoff" in another way 
which is easy to integrate. We implement this as:

    q(k, a) = ∫_{-∞ → ∞} dx exp(i k x) exp(- a |x|)

Thus there is a characteristic length 1/a where we perform the integral to get
q. We will make a ~ 10⁻¹⁰⁰ and then in the region that we care about, this 
integral looks like ∫ dx exp(i k x), but it slowly decays down to 0. 

This integral can be done directly, keeping 'a' as a variable parameter:

    q(k, a) = ∫_{-∞ → 0} dx exp(a x + i k x)
            + ∫_{0 → +∞} dx exp(-a x + i k x)

    q(k, a) = 1/(a + i k) − 1/(-a + ik) = 2 a / (a² + k²)

This shows the exact behaviour we'd expected: when 'a' goes to 0, you will get
0 if k is any number other than 0. But if you fixed k = 0, then it would look
like 2/a and would in fact diverge to infinity.

Actually identifying this as 2 π δ(k) when a = 0 is a little harder and 
requires complex analysis. Imagine an analytic function f(z) which is bounded 
by |f(z)| < 1 at infinity. Then you do the integral in the complex plane:

    F(a) = ∫_R  dz f(z) * 2 a / (a² + z²)

We close the contour by adding the circle for the upper half-plane. If we 
imagine this as ρ exp(i θ) for large ρ, the integrand will look like 

    ∫ i ρ exp(i θ) f(z) * 2 a / (a² + ρ²)

...which will sum to 1/ρ in the limit and can therefore be taken to be 
arbitrarily close to 0. So adding the contour to turn R into C⁺, the closed 
anticlockwise integral over the upper half-plane, adds 0 to the integral, and:

    F(a) = ∫_C⁺  dz f(z) * 2 a / (a² + z²)

The residue theorem from complex analysis will then allow us to shrink this
into a sum over the residues of poles. However, for all poles at some ζ ≠ ia,
the residue in the limit of small a becomes: 

    2 a Res[f, ζ] / (a² + ζ²) → 0

Thus the only pole which we care about is at ζ = ia. This is a simple pole,
but let's do it with the full machinery anyway:

    z = i a + ε exp(i θ), 0 < θ < 2 π
    dz = i ε exp(i θ) dθ

    1 / (a² + z²) = 1/((z + ia)(z − ia)) → 1/[2 i a ε exp(i θ)]
 
    F(a) = ∫ dz f(z) * 2 a / (a² + z²)
    
    F(0) = lim{a → 0} ∫ dθ i ε exp(i θ) f(i a) 2 a / [2 i a ε exp(i θ)]

    F(0) = lim{a → 0} ∫ dθ f(i a) = 2 π f(0)

Thus we can regard:

    ∫_{-∞ → ∞} dx exp(i k x) = 2 π δ(k)

Because it fulfills the general contract of the δ-function when we introduce
an exponential cutoff with a characteristic length near infinity. 

It follows that when we do these two integrals:

    f(z) = ∫_{-∞ → ∞} dk exp(-i k z) ∫_{-∞ → ∞} dx exp(i k x) g(x)

    f(z) = ∫ dx g(x) ∫ dk exp(i k (x − z))

    f(z) = ∫ dx g(x) 2 π δ(x − z)

    f(z) = 2 π g(z).

Therefore, the inverse Fourier transform is precisely:

    F⁻¹_{k → z} G(k) = 1/(2 π) ∫_{-∞ → ∞} dk exp(-i k z) G(k).

And we have that:

    F⁻¹_{k → z} F_{x → k} g(x) = g(z) 

The same lesson applies directly in 3D as well:
    
    q(k) = ∫ d³r exp(i k·r)

It is clear that we can decompose this with k_x, k_y, k_z as:
    
    q(k) = (2π)³ δ(k_x) δ(k_y) δ(k_z) = (2π)³ δ(k)

So that:
    
    F⁻¹_{k → r} • = ∫ d³k/(2π)³ exp(-i k · r) •

In order to avoid the factors of 2π, Mathworld prefers:
    
    F_{r → k} • = ∫ d³r exp(-i k · r) •
    F⁻¹_{k → r} • = ∫ d³k exp(+i k · r) •

It might be interesting if we taught this to our students, but I think it
might not catch on. I have enough problems remembering the i's when I take
derivatives of ə^x = e^(ix); remembering a set of functions like, say, 
d/dx sïn(x) = τ cös(x), τ = 2 π, might be a little bit overkill.

Perhaps it is enough to define as a function ə(x) = e^(2 π i x) or so, 
with the intentional avoidance of the exponent notation as a reminder of 
the derivative, də/dx = 2 π i. I can't bring myself to insert the negative
signs in the mathematical expressions backwards, though. It doesn't make
much sense.