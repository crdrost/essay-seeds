# Central Force Motion
Suppose we want to draw some pretty graphs that simulate some 2-particle central
force systems -- how should we proceed?

## The Basic Physics
A 2-particle system {x₁(t), x₂(t)}} is said to have a *central force*
interaction if the force of particle 1 is always directed at particle 2 and vice
versa. Many such systems of interest can be summarized with the Lagrangian

    L = ½ m₁ v₁² +  ½ m₂ v₂² − V(x₁ − x₂).

with a notable counterexample being magnetic forces. This potential in
particular satisfies Newton's third law, hence we can state that the center of
mass R defined as

     R = (m₁ x₁ + m₂ x₂) / (m₁ + m₂)

satisfies R''(t) = (F₁₂ + F₂₁) /  (m₁ + m₂) = 0. We can choose coordinates where
R'(0) = 0 and R(0) = 0; then the above equation can be interpreted as a deep
relationship in those coordinates that:

    m₁ x₁ + m₂ x₂ = 0

    m₁ x₁ = -m₂ x₂ = m x

for a family of m, x. Actually, one member of this family particularly stands
out due to the Lagrangian: taking a derivatives with v = dx/dt, we find

    L = ½ m₁ (m v / m₁)² +  ½ m₂ (m v / m₂)² − V(x₁ − x₂).
      = ½ m (1/m₁ + 1/m₂) v² − V(x₁ − x₂).

Hence choosing 1/m = 1/m₁ + 1/m₂ simplifies this to simply ½ m v². However when
we choos this we find also that

    2 m₁ m₂ x = m₁ (m₁ + m₂) x₁ − m₂ (m₁ + m₂) x₂
              = m₁ (-m₂ x₂ + m₂ x₁) − m₂ (m₁ x₂ − m₁ x₁)
              = 2 m₁ m₂ (x₁ − x₂)

So that x = x₁ − x₂ and our Lagrangian is instead

    L = ½ m v² − V(x).

This interesting simplification, that two bodies in R^n have a single-particle
Hamiltonian, allows us to explicitly solve these cases in general.




m₁ x₁ = -m₂ x₂ = m x


₁   xx₂
central force motion

center of mass R = (m1 x1 + m2 x2) / (m1 + m2) satisfies R''(t) = 0 due to Newton's third law.

deviations: r1 = x1 - R
            r2 = x2 - R
are related, because x1 = (1 + m2/m1) R - m2/m1 x2
                     r1 = (1 + m2/m1 - 1) R - m2/m1 (r2 + R)
                        = -m2/m1 r2

So m1 r1 = -m2 r2 = k.

Total kinetic energy: 1/2 [m1 (r1')^2 + m2 (r2')^2] = 1/2 (k')^2 (1/m1 + 1/m2)

Define "effective mass" m by 1/m = (1/m1 + 1/m2), and r = k / m, to make this 1/2 m (r')^2.

Then it turns out that r = (1 + m1/m2) r1 = -(1 + m2/m1) r2 = r1 - r2.

Therefore the potential energy, which was some V(r1 - r2), is now V(r).

Our system has Lagrangian L = 1/2 m (r')^2 - V(r).

Since our problem is now 2D, express r = p [cos(q); sin(q)].

Then r' = p' [cos(q); sin(q)] + p q' [-sin(q); cos(q)].

Hence,

    L = 1/2 m [(p')^2 + p^2 (q')^2] - V(p)

    Plugging this into Euler-lagrange gives:

        d/dt (p^2 q') = 0
        m p'' = m p (q')^2 - dV / dp

Now we want to make this dimensionless. Clearly we normalize mass by dividing through by m; that leaves length and time.

It is worth choosing p(0) as our unit of length, with p(0) / sqrt[V(p(0)) / m]  as our unit of time.

For the power law V = -A/p, this gives:

    d/ds (p^2 q') = 0
    p'' = p (q')^2 - 1/p^2

If we also choose our coordinates so that q(0) = 0, we just need to express q'(0) and p'(0), which we do in terms of v.
More specifically, the magnitude of v is given by |L|, while it makes an angle phi with r.
