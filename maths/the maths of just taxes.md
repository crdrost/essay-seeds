How does the tax rate need to vary as a function of income for you to be just indifferent about accepting an income of x and an income of x + dx?

The tax rate is t, and the amount of money you get to keep is therefore 

    m = (1 - t) x

With differential:

    dm = (1 - t) dx - x dt

To ensure that someone still wants to make more income, dm > 0. Thus:

    dm/dx = (1 - t) - x dt/dx > 0

    x dt/dx < 1 - t

A linear tax rate increase, t(x) = k x, would thus look like:

    m = (1 - k x) x

....and would be unprofitable after x = 1/(2k), creating an income limit.

The exponentially decaying tax rate 

    t(x) = 1 - exp(-kx)

... would generate:

    m = x exp(-kx)
    dm/dx = exp(-kx)(1 - k x)

...thus becoming unprofitable after x = 1/k.

Instead you want something which goes more like:

    t = 1 - m/x

So that (1 - t) x = m, and everyone keeps this amount m.

Tax rates thus have to go to 1 slower than 1/x. For example:

    t = 1 - sqrt(m/x)

...would mean that the money you keep is sqrt(m x), an always increasing function. You would have to bound this so that the tax is 0 for x < m.

So there are two more constraints necessary:

    Justice: d (x t) > 0 : as you earn more, you pay more taxes.
    Bounding: 0 < t < 1.

The second can perhaps be dropped. The idea would be that if you have a lower income, the government supports you. However, you still want people with a lower income to want to earn more money, hence dm > 0 is a strict rule. (1 - t) x must be a strictly increasing function. 

Still, this rule:

    d (x (1 - t)) > 0 && d (x t) > 0 .

...seems pretty strict; x - tx is increasing while tx is increasing.
