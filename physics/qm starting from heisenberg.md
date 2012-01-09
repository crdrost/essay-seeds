The Heisenberg formula for Quantum Mechanics:

1. Take a classical system.
2. Find the equations of motion for the system.
3. Find the Hamiltonian of the system.
4. Replace the classical variables in the Hamiltonian with operators.
5. Postulate commutation relations between the operators.
6. Verify (2) against (5) via the Heisenberg equation:

    dÂ/dt = i/ħ [Ĥ, Â]

How this creates the [x̂, p̂] = i ħ relation: in general, your Hamiltonian appears as:

    H = ½ p²/m + U(r)
    dr/dt = ∂H/∂p = p/m
    dp/dt = − ∇ H = − ∇ U

In our case, we quantize this as:

    Ĥ = ½ p̂²/m + U(r̂)

Then we postulate:

    [r̂, p̂] = i ħ

To get:

    dr̂/dt = i/ħ [½ p̂²/m + U(r̂), r̂]
    dr̂/dt = i/(2 m ħ) [p̂², r̂]

In general [p̂², r̂] = p̂ p̂ r̂ − r̂ p̂ p̂, so that: 
    
    [p̂², r̂] = p̂ r̂ p̂  − r̂ p̂ p̂ + p̂ [p̂, r̂]
    [p̂², r̂] = p̂ [p̂, r̂] + [p̂, r̂] p̂ = { p̂, [p̂, r̂] }

Thus:

    dr̂/dt = i/(2 m ħ) {p̂, -iħ} = p̂/m.

On the other hand:

    dp̂/dt = i/ħ [U(r̂), p̂]

Taylor-expand this as:

    U(r) = Σᵢ uᵢ rⁱ / i!

Commuting through rⁱ is a little more complicated than commuting through r², but the iterative rule looks like this:

    [r̂ⁿ, p̂] = r̂ⁿ⁻¹ r̂ p̂ − p̂ r̂ⁿ
    [r̂ⁿ, p̂] = [r̂ⁿ⁻¹, p̂] r̂ + r̂ⁿ⁻¹ [r̂, p̂]

And the solution to this form looks simply like this:

    [r̂ⁿ, p̂] = Σᵢ r̂ⁿ⁻ⁱ⁻¹ [r̂, p̂] r̂ⁱ

So the cubic and quartic terms for example are:

    [r̂³, p̂] =  r̂² [r̂, p̂] + r̂ [r̂, p̂] r̂ + [r̂, p̂] r̂²
    [r̂⁴, p̂] =  r̂³ [r̂, p̂] + r̂² [r̂, p̂] r̂ + r̂ [r̂, p̂] r̂² + [r̂, p̂] r̂³

In our particular case it is immensely useful that [r̂, p̂] is not an operator, and therefore:

    [r̂ⁿ, p̂] = i ħ n r̂ⁿ⁻ⁱ

This can be summarized by saying that:

    [U(r̂), p̂] = i ħ ∇ U

...and therefore:

    dp̂/dt = − ∇ U

So this is a choice which works for any external potential, at least in 1D (and ultimately arbitrarily in N-D?). The Schrödinger equation peeks out the moment that we imagine that the state evolves, rather than the operators, but this requires a sense of state in the first place. That is, we must now say:

    <Â> = <u| Â |u> ...for some u.

I guess the clearest motivation for this is *boundary conditions* or some such; we start in a definite state with observables (A) [which fixes |u>] and then we allow the system to evolve into a new state and reuse the same |u> to find the answer.
    

