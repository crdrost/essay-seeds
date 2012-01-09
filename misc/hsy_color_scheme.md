Consider 0 <= b <= g <= r <= 1, hue on (0, 60).

    c = r - b            (chroma)
    ph = (g - b)/c       (pseudohue)
    y = u r + v g + w b  (luma)
    (u + v + w = 1)

Given hue, there is a unique critical luma y* where chroma = 1. For this range
it is given by:

    (r, g, b) = (1, h, 0)
    y* = u + v ph.

You cannot minimize something linear like c = r - b anywhere except at the 
boundary points, and for us the boundary points are b = 0 and r = 1. The 
critical luma happens to obtain both of these at the same point, but if y < y*,
then only b = 0 is attained at the maximum chroma, while if y > y*, then only
r = 1 is attained. In general the only solution for a luma of 0 is black and
the only solution for a luma of 1 is white.

For y < y*, the max chroma is therefore:

    c_max = r
    ph = g / r = fixed
    y = u r + v g = fixed
    
    y = u r + v (r ph) 
    y = r (u + v ph) = r y*

    c_max = y / y*

For y > y*, the max chroma is instead given by requiring u+v+w = 1:

    c_max = 1 - b
    ph = (g - b)/(1 - b) = fixed
    y = u + v g + w b = fixed

    ph (1 - b) + b = g
    
    y = u + v [ph (1 - b) + b] + w b
    y - 1 = v [ph (1 - b) + (b - 1)] + w (b - 1)
    1 - y = (1 - b) [ v (1 - ph) + w ]

    1 - y = (1 - b) (1 - y*)

    c_max = (1 - y) / (1 - y*).

For y