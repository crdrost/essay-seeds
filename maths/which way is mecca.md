Muslims are supposed to pray in the direction of the Kaaba in Mecca, but they
have known since the faith was very young that the Earth was spherical -- and
hence when you generalize the direction of prayer beyond the nearby vicinity of
Mecca, you will instead want to draw a Great Circle over the Earth between your
point and the Kaaba, which is at 21.422495°N, 39.826201°E. Such a great circle
will also go through the antipode of the Kaaba which is at [21.422495°S,
140.173799°W][antipode], about 55 km northeast of a lagoon in French Polynesia
called Tematangi.

-21.422495, -140.173799

These great circles can be a bit counterintuitive. Obviously if you live on
Tematangi you have to pray away from the antipode and therefore you pray
southwest, but someone on Vanavana lagoon, 180 miles to the northeast, would
pray northeast. Many people are astonished to find that if you're in Washington
D.C., even though Mecca is at ~21°N and Washington is at ~39°N, you have to pray
northeast: you are not praying southward at all. If you want an intuitive
geometric picture of why this would be, it helps to think about the rings of
constant latitude and longitude which circle the globe in a grid. The rings of
constant longitude are pretty much fixed in size as they pivot around the poles,
so going north-south by a certain number of degrees is always a certain cost of
distance. However, the rings of constant latitude actually get smaller as you
get nearer the pole, and so going east-west by a certain number of degrees can
cost *less* distance the further north you go (that is, if you're already north
of the equator). For a long journey eastward or westward it simply makes sense
to take some form of "detour" north, so that your total distance gets minimized.

In fact, Mecca is so far east from Washington that you could actually go due
south of Mecca, past the equator, and you would still find points where the
great circle from Washington to those points goes east-northeast -- and other
points in the US share the same story; prayer in Manhattan is also performed
somewhere between northeast and east-northeast, but since the grid of the
Manhattan streets does not go north-south/east-west, you would feel like you are
facing more "north" than "east"!

Calculating this direction ("qibla") is not so important, as any prayer made
within 45 degrees of the right direction is generally considered "good enough",
and you are not punished if you were ignorant of the direction or misled as to
its proper facing. But it shows a very interesting question; how do we calculate
it? The answer is with complex numbers, which preserve angles and which can also
preserve circles on spheres.

The first thing we're going to need is your latitude and longitude. If your
latitude is south, we will use negative numbers; if your longitude is west, we
will also use negative numbers, and we will report in degrees `(lat, lon)`.
The Kaaba is thus at `(21.422495, 39.826201)`.

The first thing we're going to do is a special projection of the globe onto the
plane, known as the stereographic projection. This can be done quite elegantly:

    from math import pi, cos, sin, atan
    deg = pi / 180
    r = cos(lat * deg) / (1 + sin(lat * deg))

We are also going to subtract off the longitude angle of the Kaaba while we're
at it:

    t = lon - 39.826201
    
We now have a polar representation of your point, and a corresponding complex
representation:

    z0 = 0.681866134
    z1 = complex(r * cos(t * deg), r * sin(t * deg))
    zi = -1/0.681866134

If you were to draw a circle on the Earth's surface this would become a circle
on the complex plane under this stereographic mapping -- or possibly a straight
line, if your circle went through the south pole. The north pole appears as the
complex number `0`, it is in the center of our world. Mecca is right now at the
complex number `z0` and the antipode of Mecca is at the complex number `zi`, and
your point is at `z1`. 

Then due to a bunch of interesting results in complex analysis, you can
calculate the heading as follows: 

    def angle(z):
        if z.real == 0:
            return 90 if z.imag > 0 else -90 if z.imag < 0 else 0
        base = 0 if z.real > 0 else 180 if z.imag >= 0 else -180
        return base + atan(z.imag / z.real) / deg

    qibla = angle(1 + z1 ** 2) + t

(**Note**: that isn't consistent with calculators freely available on the
Internet, thus I need to work this out further.)
    
It turns out that there is a simple way to transform circles and lines to
circles and lines on the complex plane, known as a Mobius transform: if you want
to take three points `(z0, z1, zi)` to the points `(0, 1, ∞)`, you can define a
general transform of any complex `z` as:

    def mobius(z0, z1, zi):
        def transform(z):
            return (z - z0) * (z1 - zi) / ((z - zi) * (z1 - z0))
        return transform

This transform is very closely related to the stereographic projection we did
before, as it maps circles on the globe to other circles on the globe: or
circles and lines in the complex plane to other circles and lines. In fact, the
'circle' defined by `(0, 1, ∞)` is just the real line, so we can describe the
situation as follows: map Mecca as z0, the antipode of Mecca as zi, and your
point as z1, then we have that the real line is the image of the great circle
which goes through all three points. Equivalently, we can invert this transform
as another Mobius transform:

    (zi * (z1 - z0) * z - z0 * (z1 - zi)) / ((z1 - z0)*z - (z1 - zi))

Writing (z0, z1, zi) as (u, v, w) and ignoring multiplications is maybe going to
make it easier to see:

>  f(z) = [w (v - u) z + u (w - v)] / [(v - u) z + (w - v)]

so we see f(0) = u, f(1) = (w v - u v) / (w - u) = v, and f(∞) → w. Now the
point is to regard this too as a bilinear transform:

> f(z) = (a z + b) / (c z + d)
>     a = w (v - u)
>     b = u (w - v)
>     c = v - u
>     d = w - v

This is therefore the correct Mobius transform to map the real line to the
circle defined by the points (u, v, w), and since u and w are antipodes on the
sphere this is the great circle through those points. Furthermore, 0 represents
Mecca and 1 represents the present point, thus you face towards 0, or in the -1
direction.

Now take a derivative and substitute z=1 to find the complex derivative in the
vicinity of your point:

> f'(1) = (a c - b d) / (c + d)^2

In the neighborhood of z = 1 we therefore have that:

> f(z) ≈ f(1) + (z - 1) * f'(1)

The line in the -1 direction gets locally modified to point in the -f'(1)
direction. Furthermore, with the above values of a, b, c, d we have:

    ac - bd = w (v - u)^2 - u (w - v)^2 = w v^2 + w u^2 - u w^2 - u v^2

    ac - bd = (w - u) (v^2 - u w)
    (ac - bd)/(c + d)^2 = (v^2 - u w) / (w - u)

The key here is that we only want the angle of -1 * that, so we really just
want:

    -angle(uw - v^2) + angle(w - u)

But the angle(w - u) = 0 and we know that uw = -1 because the points were
antipodal, so somehow this all reduces to just:

    angle(1 + v^2)

We would now need to see the angle that this line makes with the line that goes
through (0, 0), which points due north, but that's as simple as rotating all
angles by the angle `t` we calculated before.
    
[antipode]: https://maps.google.com/maps?q=-21.422495,-140.173799&hl=en&ll=-21.427503,-140.152588&spn=2.684416,4.724121&sll=21.422495,39.826201&sspn=0.009848,0.013754&t=h&z=8 "Google Maps: antipode of the Kaaba."