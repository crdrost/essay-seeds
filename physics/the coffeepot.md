The coffeepot at work has a neat structure where you press the top to create a flow out from a spigot at the top into your glass; when you release, air flows in through a one-way valve. I thought it might be interesting to answer the question "given that intelligent agents are independently trying to remove a specific volume c (one cup) as fast as possible from the system, how would they press it and how would the flow parameters change? What if they were only limited to two or three presses?" Etc.

In Hagen-Poiseuille flow, Φ ~ ΔP.

We have a volume of coffee U, a number of air particles n, a volume of air V, an air pressure P. Relations include: 

Φ = - ∂U/∂t
(P₀ + P) V = n R T = ε n
V + U = Q

Φ = κ (P − ρ g h) θ(P − ρ g h)

h = L (Q − U)/Q

The first question is, at constant n, how does this system respond to a sudden compression of Q?

Eventually a coffee ~ δQ should flow out from the system.

Instantaneously, the air compresses, raising P.

    P₀ + P = ε n / (V₀ 
    (P₀ + P) V = n R T = ε n

If it is sitting at equilibrium at V = Vₑ, then the pressure suddenly spikes to:

    P₁ = -P₀ + ε n / (Vₑ − δQ)

Then the system is responding with the coupled equations above.

    ∂V/∂t = κ [-P₀ + ε n/V − ρ g L V/Q]

    dV / [-P₀ + ε n/V − ρ g L V/Q] = κ dt

The result is something like:

    - 0.5/c (log(x (a + cx) - b) - 2a atan[(a + 2 c x) / D] / sqrt[D])

    Where D = -a^2 - 4bc 