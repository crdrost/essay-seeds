# Magnetic back-action

I've always liked this description of Lenz's law. We start with:

    ∇ × E = - ∂B/∂t

    ∫ (∇ × E) · da = ∫ E · dl = EMF

    EMF = - ∂/∂t ∫ B · da = - ∂Φ/∂t

Thus the changing flux would produce a voltage, the voltage will (with some 
resistance) produce a current, and the current will produce a back-action flux.
The minus sign here tells me indirectly, through:

    ∇ × B = μ₀ J − μ₀ ε₀ ∂E/∂t

...that the voltage will tend to drive a current which opposes ∂Φ/∂t. It's 
worth asking for details here. Just consider any shape you want:

    +===+  .
    |  0| /|\       y
    |   |  |        |
    |   |  |  I     +--x
    |  v|  |       z (comes out of the page)
    +===+       

Here we have two wires sitting between two larger conductors, a current I 
flowing in response to a voltage v around the loop. There is, I can see, a 
counterclockwise steady current I, and because `∇ × B = μ₀ J` the B field must 
be curling around anticlockwise around the wire, thus the induced B comes out 
of the loop in the +z direction.

What's the relation between little-v and the EMF? Well, that's rather simple. 
When I perform `∫ E · dl` I must choose a direction to go: let's go around the 
loop in the same anticlockwise direction. You can either choose the relation
`E = - ∇V` or the relation `I || E` to see that this line integral was 
`EMF = 2v`, assuming rotational symmetry. The two is the easy factor, but the
question of whether there's a minus sign might trip you up a bit: the E has to
follow the current because it drives the current, so it must be positive. 
Alternately, there is always a minus sign when we do electric potential and 
thus `EMF = ∫ E · dl = ∫ (-∇V) · dl = -ΔV`, and the ΔV for the right hand side
is `0 - v = -v`, thus `EMF = -(-v + -v) = +2v`. 

So in this diagram the `EMF` is positive and that means `∂Φ/∂t` was negative, 
so the magnetic field was changing in the direction of -z and it induced a 
magnetic response field in the +z direction through the loop. This is Lenz's 
law: the induced magnetic field always opposes the change and tries to keep 
the magnetic field the same. The loop gives a sort of "inertia" to the magnetic
field.

## More advanced calculation?

I explained this on Yahoo! Answers once, and in rereading my answer it occurs
to me that it might be nice to do this in a little more detail, to figure out
what sort of mass we're talking about here, and how much it varies.

We can say, I think, that we change the system in such a way as to keep 
∂E/∂t = 0 -- that is, a constant ∂Φ/∂t should yield a constant EMF in the wire
which would tend to go with a constant field E within the wire, and I am just
hoping that this system has no radiative losses outside of the wire, but the 
wire's resistance forms the main loss effect. Then we would have:

    ∇ × B = μ₀ J

So the first worry is one of divergence. Very close to the loop, in an annulus 
of size δR, we treat this as if it were an infinite straight wire. If you are 
a distance y away from an infinite straight wire the field is:

    ∫ (∇ × B) · da = μ₀ I 

    μ₀ I = ∫ B · dl = 2 π y |B|

    |B| = μ₀ I / (2 π y) = 

We now locate the loop at position R, and integrate r from R − δR to R:

    δΦ = ∫ B · da = μ₀ I ∫ (2 π r)/(2 π (R − r)) dr

    δΦ = μ₀ I ∫ r dr / (R − r)

Substituting y = R − r gives

    δΦ = μ₀ I ∫{δR → 0} (R − y) (-dy) / y 

    δΦ = μ₀ I R ∫{0 → δR} dy/y − μ₀ I δR

This has got a logarithmic divergence attached to it. :-(

So we cannot answer the question if it's an infinitely thin wire; it would have
to have some thickness δs.

Still, we're almost there. Now that we no longer have to integrate over r, let
me revert to calling R the resistance and r the loop's radius. If the loop 
were very large then perhaps the main contribution would come from this outside
ring and we can just take δR → r, with the term "0" above becoming some 
characteristic length δs. Then the above says:

    δΦ = μ₀ I r [log(r / δs) − 1]

With I = V / R = - (1/R) ∂Φ/∂t this becomes:

    δΦ = [μ₀ r / R] [log(r / δs) − 1] ∂Φ/∂t


