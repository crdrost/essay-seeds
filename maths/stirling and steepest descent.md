You start with

    n! = ∫_{0 → ∞} exp(-t) t^n dt

And rewrite it as:

    n! = ∫_{0 → ∞} exp(-k x) (k x)^n * k dx

    n! = k^(n+1) ∫_{0 → ∞} exp(n log(x) - k x) dx

Then take k = n so that this has the form:

    n! = k^(n+1) ∫_{0 → ∞} exp[n (log(x) - x)] dx

For large n it is possible to use the Method of Steepest Descent to derive a Stirling's approximation expansion. The trick is that this integral for large n is peaked sharply at a single point, namely the maximum of log(x) - x. This maximum is:

    d/dx { log(x) - x } = 1/x - 1 = 0
    x = 1.

We can therefore choose to "expand around" 1. (If you're doing this generally, you want to phrase it as exp(n f(z)) and you'd want Re{ f(z) } at a global maximum at some z0, but Im{f(z)} might do something different. You then attempt to deform the curve to take a direction over z0 where Im{f(z0 + dz)}  is constant. This ensures that you are in the place where the descent is steepest, because for analytic functions, lines of constant Re{} and Im{} intersect at right angles.

In our case, this doesn't matter so much:     
    
    Im{log(x) - x} = 0 along the real axis.

So we expand near the minimum with a Taylor expansion:

    log(1 + x) ~= x - x^2/2 + x^3/3 - x^4/4 + ... 
    log(x) - x ~= -1 + 1/2 (x - 1)^2 + (x - 1)^3/3 + ...  

Then we pull out the constant:

    n! = n^(n+1) exp(-n) ∫_{0 → ∞} exp[-n (x - 1)^2 / 2 ] dx

...and we find that the result is a Gaussian integral over basically its entire range:

    y = sqrt(n) (x - 1)
    
    n! ~= n^(n+1) exp(-n) ∫_{-∞ → ∞} exp[y^2 / 2 ] dy/sqrt(n)

    n! ~= n^n exp(-n) sqrt(2 * pi * n)

This is actually an expansion in y. The next term can be gotten by considering
the possible acts of the cubic and quartic terms:

    I(n) = ∫_{0 → ∞} exp[n log x - n x] sqrt(n) dx
    I(n) ~= ∫_{-∞ → ∞} exp[-y^2/2 + y^3/(3 sqrt(n)) - y^4/(4 n) + ...] dy
    I(n) ~= ∫_{-∞ → ∞} exp[-y^2/2] exp[y^3/(3 sqrt(n)) - y^4/(4 n)] dy

The second exponential can be expanded to order 1/n as:

    exp[y^3/(3 sqrt(n)) - y^4/(4 n)] ~= 
        1 + y^3/(3 sqrt(n)) + (1/2) y^6/(9 n) - y^4 / (4 n)

Then we need to know the moments of the distribution, done by observing that:

    M(k) = ∫ dy exp[-y^2/2] exp(k y) = ∫ dy exp[-(y + k)^2/2] exp(k^2/2) 
    M(k) = ∫ dy exp[-y^2/2] = sqrt(2 pi) exp(k^2 / 2)

Successive moments come from successive derivatives of this with respect to k 
at k = 0. These pull out various powers of y from the exponential:

    d^m M / dk^m = ∫ dy exp[-y^2/2] exp(k y) y^m
    @ k = 0:  M^(m)(0) = ∫ dy exp[-y^2/2] y^m.

So, let's do it:

    M^(0)(k) = sqrt(2 pi) exp(k^2 / 2) [ 1 ]
    M^(1)(k) = sqrt(2 pi) exp(k^2 / 2) [ k ]
    M^(2)(k) = sqrt(2 pi) exp(k^2 / 2) [ 1 + k^2 ]
    M^(3)(k) = sqrt(2 pi) exp(k^2 / 2) [ 3 k + k^3 ]
    M^(4)(k) = sqrt(2 pi) exp(k^2 / 2) [ 3 + 6 k^2 + k^4 ]
    M^(5)(k) = sqrt(2 pi) exp(k^2 / 2) [ 15 k + 10 k^3 + k^5 ]
    M^(6)(k) = sqrt(2 pi) exp(k^2 / 2) [ 15 + 45 k^2 + 15 k^4 + k^6 ]

Evaluating these terms at 0 means that the y^3 term vanishes and:

    I(n) ~= ∫_{-∞ → ∞} exp[-y^2/2] { 
        1 + y^3/(3 sqrt(n)) + (1/2) y^6/(9 n) - y^4 / (4 n) + O(1/n^2)
    } dy

    I(n) ~= sqrt(2 * pi) [1 + (1/2) 15/(9 n) - 3/(4 n)]
    I(n) ~= sqrt(2 * pi) [1 + 1/(12 n)]


    n! ~= n^n exp(-n) sqrt(2 * pi * n) [1 + 1/(12 n)]

This can be done for many more terms, giving a full expansion, but the 1/n
term is good enough to see that you only get ~1% error using the rest of
the formula for n ~= 10. Just to work this out as an example:

    10! = 3 628 800
    10^10 exp(-10) sqrt(2 * pi * 10) ~= 3 598 696 

The difference is indeed only 0.83%. And it gets smaller for larger numbers.
