# Spinor calculus

The 4-vector formalism is only one mathematics to describe special relativity.
Another one which looks awfully like quantum mechanics, featuring Hermitian and
unitary matrices and complex 2x2 matrices, is the spinor formalism. The idea is
very simple:

Let σᵢ be the 4-vector of Pauli matrices, taking σ₀ = 1 = [1, 0; 0, 1]. Then 
you get an elegant representation of any 4-vector vⁱ as a Hermitian matrix:

    V = σᵢ vⁱ = [v⁰ + v³,   v¹ − i v²]
                [v¹ + i v², v⁰ − v³  ]

The inverse transform is more complicated but linear:

    vⁱ = ½ Tr σᵢ V

This would be essentially pointless if it weren't for the fact that:

    det V = (v⁰)² − (v¹)² − (v²)² − (v³)²

This is vᵢ vⁱ if you adopt the (+ − − −) convention for the metric tensor. From
quantum mechanics we again adopt the idea of a unitary matrix det Û = 1. Thus
we have:

    det (Û V Û†) = det V 

And Û V Û† is Hermitian and therefore also represents a 4-vector. Since these
combinations Û _ Û† linearly map 4-vectors to other 4-vectors with the same 
length, they are a Lorentz transform. 

This motivates the spinor calculus for null vectors. Let vᵢ vⁱ = 0; then 
det V = 0, which makes V some form of projection. It follows that V = |v><v| 
for some characteristic vector |v> and its conjugate transpose <v| . Very 
interesting.

