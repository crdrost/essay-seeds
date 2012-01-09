On gauges:

If a field is a gradient of a scalar potential then:

    F = F₁ ê₁ + F₂ ê₂ + F₃ ê₃

    Fᵢ = ∂f/∂xᵢ = ∂ᵢ f 

But because 

    ∂ᵤ ∂ᵥ f = ∂ᵥ ∂ᵤ f
    ∂ᵤ Fᵥ = ∂ᵥ Fᵤ

This is clearly necessary, but it turns out that it's also sufficient. Why? This condition in 3D can be reiterated as:

    ∇ × F = 0

We can construct a scalar potential, up to a global constant, by defining the line integral:

    f(x) = ∫{x₀ → x} F(r) · dr

This will fit the requirement that ∇f = F(x), but it is only well-defined if it
 doesn't matter which pathway is used to get from x₀ to x. But if two different
 pathways {x₀ → x} have different integrands, then we can construct:

    ∂C = {x₀ → x}₁ + {x → x₀}₂
    
    f₁ − f₂ = ∫_∂C F(r) · dr ≠ 0

But this is an integral over a closed loop and is therefore equal by Stokes's 
theorem to:

    ∫_∂S F(r) · dr  = ∫_S (∇ × F) · dA

...where S is a surface bounded by the curve ∂S.

So, if we reverse this argument, whenever ∇ × F = 0, we can use Green's theorem
to guarantee the uniqueness of the f(x) construction above, up to the choice of
x₀ which can be included explicitly as an arbitrary added constant. So the 
condition ∇ × F = 0 is both necessary and sufficient for F = ∇f, alongside some 
stipulations about f's smoothness and whatnot.

One last statement:

    ∇ × F = 0, define q = ∇ · F

    ∇ × (∇ × F) = 0 = ∇ (∇ · F) − ∇² F = ∇q − ∇² (∇f)

    ∇² (∇f) = ∇q
    ∇² f = q + c?
 


 implies  F =  ∇ f

    ∇ × (∇ × F) = 0 = ∇ (∇ · F) − ∇² F
    



Similarly, there is also such a thing as a "vector potential" in certain
contexts. To have:

    F = ∇ × G

... it is necessary to satisfy the divergence relation:

    ∇ · F = ∇ · (∇ × G) = 0

Let us construct the solution of G which will not point at all in the ê₃ 
direction, G₃ = 0. We define:
    
    G₁ =  ∫ F₂ dx₃
    G₂ = -∫ F₁ dx₃
    G₃ = 0

This works when ∂₁ F₁ + ∂₂ F₂ + ∂₃ F₃ = 0 because: 

    ∇ × G = [-∂₃ G₂, ∂₃ G₁, ∂₁ G₂ − ∂₂ G₁]

    ∇ × G = [F₁, F₂, ∫ -(∂₁ F₁ + ∂₂ F₂) dx₃]

    ∇ × G = [F₁, F₂, ∫ (∂₃ F₃) dx₃]

    ∇ × G = [F₁, F₂, F₃]

Thus, given some conditions on smoothness, ∇ · F = 0 is also sufficient for
F = ∇ × G. The heavy restriction G₃ = 0 should help to indicate that there are
a huge number of G's which can act as a vector potential in general, and more
precisely:

    ∇ × (G +  ∇g) = ∇ × G = F, for any scalar field g.

We can now articulate the decomposition theorem:

    F = ∇f + ∇ × G for some f and G.

The idea is very simple. Let ∇ · F = q. Solve  ∇²f = q for the scalar field
f. Then (F − ∇ f) has divergence 0 and therefore:

    (F − ∇ f) = ∇ × G for some G.

Alternatively, let ∇ × F = Q. Solve the problem:

    ∇ · G = 0
    ∇² G = −Q

Then (F − ∇ × G) has curl 0 and therefore:

    (F − ∇ × G) = ∇f for some f.

We can see that we keep getting terms of Poisson's 