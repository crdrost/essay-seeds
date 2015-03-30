# The generic equations of Electromagnetism
There are three different unit systems common for electromagnetism and some other unit systems like Planck units which are not usually discussed in that context but must fit into it. At the same time a given textbook usually only covers electromagnetism in one set of units, so I wanted to derive something more general.

Subject to maintaining the invariants:

    ∇ · B = 0               (no magnetic monopoles)
    ∇ · J + c ρ' = 0        (charge continuity)
    ∇ × (∇ × B) = -B'' + …  (wave speed = c)
    F = q E + …             (definition of E-field)

we can parameterize the Maxwell equations with two parameters μ, κ as:

    ∇ · E = κ ρ    ∇ × E = -λ B'       where λ = κ / (μ c)
    ∇ · B = 0      ∇ × B =  E' / λ + μ J

Here are the "big three" systems in terms of these three parameters:

             SI       Gaussian    Lorentz-Heaviside
    κ       c² μ₀        4π              1
    μ        μ₀         4π/c            1/c
    λ        c            1              1

Both of the latter systems can achieve dimensionless coefficients by means of a **unit pun**, which occurs when a unit system defines a physical quantity to have units of different dimensions than that quantity (e.g. in Gaussian units, one statcoulomb is defined by two 1-statcoulomb charges having a force of 1 erg/cm (where an erg is 10<sup>-7</sup> Joules) at a distance of 1 cm. The unit pun is calling 1 statcoulomb = 1 √(erg · cm). Planck units are generally taken to be Gaussian units with a further unit pun which makes `c = 1`, but you could choose a fundamentally different value for μ if you wanted.

# Generic energy density & Poynting vector
This guarantees a Coulomb field of `|E| = κ Q / (4π r²)`, an infinite-solenoid field of `|B| = μ n I`, and an infinite-plate field of `|E| = κ σ / 2`.

We can figure out the energy density expression without a proper derivation, by simply working through two examples to figure out what each element brings. (1) Moving a charge `Q = σ A` a distance `L` through that infinite-plate field constructs a parallel-plate capacitor of area A and spacing L. This costs an energy `Q κ σ L / 2` which sits in a volume `A L` of the field between the plates, which now has strength `κ σ`. (2) A voltage drop around a loop, created by changing that solenoid field, is `δV = λ B' A = (λ/c) A dB/dt`, where A is the cross-sectional area of the solenoid. In a distance L along the solenoid axis, there will be a current `n L I = L B / μ` flowing through those loops, so the power lost is `(λ/(μc) LA B dB/dt)`. Summing these together:

    u = (E² + λ² B²)/(2κ)

Taking a time derivative we get Poynting's theorem:

    (κ/c) du/dt = E · (λ ∇ × B − μ λ J) − λ B · (∇ × E)
    du/dt = -E·J + [E · (∇ × B) − B · (∇ × E)] / μ
    du/dt = -E·J + ∇· [(E × B)/μ]

So our generic Poynting vector is actually just `S = (E × B)/μ`.

# Generic potentials and Lorentz force
The scalar and vector potentials in this system are :

    B = ∇ × A
    E = -∇ϕ − λ A'

The gauge freedom is that we can take A → A + ∇ψ without changing B; to also not change E we then need to also take ϕ → ϕ − λ ψ'. Defining the overlap field Ω[A, ϕ] = ∇·A + ϕ'/λ, the potential equations become:

    ϕ'' − ∇²ϕ = κ ρ + λ Ω'
    A'' − ∇²A = μ J − ∇ Ω

while our gauge freedom takes Ω → Ω + ∇²ψ − ψ''. Of course we have the Coulomb gauge where we solve ∇²ψ = -∇·A and then make A divergence-free, which causes ∇²ϕ = -κ ρ. We also have the Lorentz gauge where we solve ψ'' − ∇²ψ = Ω to get the Lorentz gauge Ω = 0:

    ϕ'' − ∇²ϕ = κ ρ
    A'' − ∇²A = μ J

We can use that to derive the force law for magnetic forces as follows: since (c ρ, J) is a 4-vector this identifies (ϕ/λ, A) as a 4-vector. Therefore the field tensor is:

    F_{μν} = ∂_μ A_ν − ∂_ν A_μ
           = asym [ ϕ'/λ    -A' ]
                  [ ∇ϕ/λ   -∇⊗A ]
           = [ 0       E/λ      ]
             [-E/λ   -asym(∇⊗A) ]

By looking at the second row times the (c, v) of the four-velocity we find that the Lorentz force must work out to:

    F = q (E + λ (v/c) × B)

There are probably more direct routes to this result. 
