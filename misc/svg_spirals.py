# -*- coding: utf-8 -*-
import math
def spiral(n, turn=137.50776405003785, inv_cdf=lambda p: 300*p**0.5):
    for i in range(0, n):
        k = (0.5 + i)/n
        t = turn * i * math.pi / 180
        r = inv_cdf(k)
        yield (r * math.cos(t), r * math.sin(t))

__svg_header__ = """
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
    "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="800" height="600" version="1.1" xmlns="http://www.w3.org/2000/svg">
"""[1:]

__circle_template__ = """
    <circle cx="%s" cy="%s" fill="%s" r="%s" fill-opacity="%s" />
"""[1:]

def draw(points, filename="/tmp/render.svg"):
    with open(filename, 'w') as f:
        f.write(__svg_header__)
        for pt in points:
            x, y = pt
            x += 400
            y = 300 - y;
            f.write(__circle_template__ % (
                x, y, '#0000ff', '3', '1.0'
            ))
        f.write('</svg>')

draw(spiral(5000, 183), '/tmp/example1.svg')
draw(spiral(1500, 74.03, lambda p: 300 * ((p + 0.01)**0.5 - 0.1)), '/tmp/example2.svg')
    
        

