The fibonacci is the "most irrational" in the sense that its rational approximations do not catch up.

They do not catch up because the best rational approximations come from a continued fraction expansion:

    q = a₀ + 1/(a₁ + 1/(a₂ + 1/(a₃ + ...))), and ∀i: aᵢ ∈ N

Call these the cumulants of q:

    q₀ = a₀
    q₁ = a₀ + 1/a₁
    q₂ = a₀ + 1/(a₁ + 1/a₂) 
    ...

This gives a way for finding the next continued fraction number:

    a₀ = ⌊q⌋
    a₁ = ⌊1/(q − a₀)⌋
    a₂ = ⌊1/(1/(q − a₀) − a₁)⌋
    ...

In other words, define f₀ = q, and fᵢ₊₁ = 1/(fᵢ − aᵢ), and then aᵢ = ⌊fᵢ⌋.

for sqrt(2) we seem to have a = [1, 2, 2, 2, 2, 2, ...] because:

     1/(√(2) − 1) − 1 = (1 − √(2) + 1)/(√(2) − 1) = √(2)

Thus:
    
    f₀ = √(2)
    a₀ = 1
    f₁ = 1/(√(2) − 1) = √(2) + 1
    a₁ = 2
    f₂ = 1/(√(2) + 1 − 2) = √(2) + 1
    
At this point we catch ourselves in a loop.

The golden ratio is specially the case of: a = [1, 1, 1, 1, ...].

The continued fractions defined above are unique although you'd need to work a
bit to prove that all continued fractions are unique -- that there is no other
infinite sequence of numbers which converges to the same rational.

I find that a little surprising, actually. It was already known that {0, 1}^∞
is a powerset 2^N larger in size than the naturals. 