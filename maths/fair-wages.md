How should the amount you charge per hour depend on the length of a project? Equivalently, how should your wage per hour depend on the number of hours in a week your employer has work for you?

Some terms: the total time of the longest possible project is T; for a weekly process we might imagine T = 40hrs. The total cost of the longest project is C. So we've got a function c(t) with c(0) = 0, c(T) = C. I am specifying T and C so that I can define dimensionless cost and dimensionless time: x := t / T and y(x) := c(T * x) / C. The wage that you charge per unit time will be w(t) := c(t) / t; we can also make this dimensionless with W = C / T as z(x) := w(T * x) / W. Then z = y / x, or equivalently y(x) = x * z(x)

We could also imagine projects of boundless time; in which case we are not limited to (0, 1) and C and T are just a typical cost for a typical project length.

Desiderata (Latin for "the things we desire"): In addition to y(0) = 0 (zero work shouldn't cost anything), and y(1) = 1 (the maximum cost should be C), on this range (0, 1) we want dy/dx > 0 (more work always costs more, in terms of total cost). We should probably also have d²y/dx² < 0. This means that dy/dx is decreasing, perhaps towards zero. This reflects the fact that we'd rather have one project which lasts for time 2t than two projects which last for time t; it is what economists call "returns to scale" and what most of us call "discounts when buying in bulk."

These restrictions can be partly embodied by imagining that we draw a curve y(x) between the curves y = x and y = 1. When we do w = y / x, this means the wage graph must be bounded between 1/x and 1. There is a nice "geometric mean graph" between these two, w = 1/√(x), so that y = √(x). There are also some linear graphs between the two, y = 1 − α (x − 1), with 0 < α < 1, so y = (1 + α) x − α x². The geometric mean extends to the boundless-time case; the linear-wage formulas are much nicer but cannot be extended in the same way. The arithmetic mean would violate our desiderata. Logarithms could also work but they're a little trickier:

    y = log(1 + x*(k - 1))/log(k)

Clearly if you're in a job negotiation you need to negotiate some number of hours per week and it needs to be mental math. Then the best of these to use is simply the linear w = 3/2 - x/2, which works up to t = 1.5 T in principle, just in case you can commit to more than 40 hours per week.

So if you were looking for a job which is $30/hour for 40 hours, this heuristic says that you should accept a job which is $33.75/hour for 30 hours or $37.50/hour for 20 hours. 

Open question: if we consider open-ended (infinite) projects, then really we are assuming that the total cost is being paid up-front -- but really it is either a constant payment or we ask for half up-front, half at the finish. Any of these actually have a *discounted* present value, which may interfere with the hope of "more hours costs more"?

Hm. In the constant-payment model the answer is close to "no." To extend a project we first extend it the above way, dc/dt > 0, so we're tacking some amount of money on at time t. Then we discount this cost by bringing it back to the present, so the present cost changes by dc/dt * δt / e<sup>t/τ</sup> > 0. In the "half now, half-at-the-end" model, my answer is "maybe," because there is a chunk c/2 which is also getting delayed in its payment to us, and that decreases the present value of the whole chunk; d/dt [ c e<sup>-t/τ</sup> ] = (dc/dt − c/τ) * e<sup>-t/τ</sup>, and so we require dc/dt > c/τ.

Also, earlier we required that c(+∞) → +∞ and that might *not* be true of the present value of c(+∞), even in the constant-payment model. That is, ∫ dt e<sup>-t/τ</sup> dc/dt might be bounded while ∫ dc is infinite, violating a desideratum.

So, is there a particularly *just* way to include discounting? Probably the easiest is to assume that the c(t) above is present-value, then "un-discount" it...?