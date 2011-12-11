# Why e^(i π) + 1 = 0

This number `i` is a square root of -1, and so before I tell you why this 
mathematical fact happens to be true, I have to tell you a little bit about the
complex numbers and show you the basics of de Moivre's theorem. 

Complex numbers come when we try to add square roots of negative numbers to the
real numbers. The history of this is long and complicated and it's best to 
simplify things like so: long ago, people noticed that you could do a lot of
clever mathematics by saying 'technically these square roots don't exist, but 
they somehow give you the right answer anyway'. So it's worthwhile to invent 
them for that reason.

The algebra is very simple. You have to guarantee that i * i = -1, and this 
leads to a simple multiplication rule:

    (a + b i) * (c + d i) = (a * c - b * d) + (b * c + a * d) i.

So for example:

    (3 + 5 i) * (2 + 1 i) = 1 + 13 i.

There is also a + operation on complex numbers:

    (3 + 5 i) + (2 + 1 i) = 5 + 6 i.

You just add the real and imaginary parts separately.

## Complex numbers as 2D points and 2×2 matrices

Remember Cartesian coordinates of the form (x, y)? Those are called *vectors* 
and they are another way to package two numbers. It helps to think of extending
the "real line" into the "complex plane" by visualizing the complex numbers as
a 2D space:

    (x, y) <--> x + y i

Our multiplication rule * therefore works on vectors to say that:

    (a, b) * (x, y) = (ax − by, bx + ay)

This product could also be written in matrix form as:

    [a  -b] [x]
    [b   a] [y]

I don't know how much that means to you, but the thing on the left is actually 
a *scaled rotation matrix* of the form:

    [r cos(θ)  -r sin(θ)] = r rotate(θ)
    [r sin(θ)   r cos(θ)]

In the above case, you have that r = √(a² + b²) and tan(θ) = b/a. 

We could also write this column vector [x; y] as its own matrix multiplied by
one, like so:

    [a  -b] [x  -y] [1]
    [b   a] [y   x] [0]

In this sense, I guess you could say that the scaled rotation matrices **are**
the complex numbers, and this vector [1; 0] just lets you convert them back to
vector format. 

So every complex number has a "polar coordinate form" also, r rotate(θ). This
is connected to the complex number form by forming rotate(θ) [1; 0] to find 
that:

    rotate(θ) <--> cos(θ) + i sin(θ).

These are all equivalent ways to understand complex numbers, and some of them
are more useful at some times, and others are more useful at other times.

## Exponent rules

At this point you need to learn that complex multiplication becomes super
simple when you use this polar form, because if I say, "rotate by θ₁ and then 
rotate by θ₂" that is the same as just saying "rotate by θ₁ + θ₂". So in polar
form the complex multiplication becomes just:

    r₁ rotate(θ₁) * r₂ rotate(θ₂) = r₁ r₂ rotate(θ₁ + θ₂) 

Those are **exponent rules**. In other words, if I were to say that:

    r₁ = exp(b₁),  r₂ = exp(b₂)

... then this expression would say: 

    exp(b₁) rotate(θ₁) * exp(b₂) rotate(θ₂) = exp(b₁ + b₂) rotate(θ₁ + θ₂) 

So we immediately become curious: to what extent is rotate() like exp(), 
exactly? Are they somehow the same function, with a little tweak somewhere?

The easiest way to see this is to just take a derivative of the known 
expression for the rotation matrix, that:

    d/dt { cos(t) + i sin(t) } = -sin(t) + i cos(t) = i [cos(t) + i sin(t)]

In other words, rotate(t) behaves under derivatives like exp(i t): it gives you
the exact same function as itself, but multiplied by i.

If we take this connection seriously we get:

    exp(i θ) = cos(θ) + i sin(θ)
    exp(i π) = cos(π) + i sin(π)
    exp(i π) = -1
