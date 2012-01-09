
# Solid-solid friction

We'll treat fluid cases soon, but I think it's nice to build up an intuitive model for why solid-solid frictions don't depend on velocity, because this confused me a great deal when I was in school. There is a simple toy model that we can use to understand them.

Suppose that we are forming bonds with some system, and these bonds just steal energy directly: you might imagine a spring which we grab onto and then pull until it breaks, costing a certain energy ε which we generally don't get back as the remaining bits settle into some sort of sinusoidal motion. We'll also assume that we do this "grabbing" whenever we see something new to grab onto -- so we are forming bonds proportional to our velocity. This means that the power cost is proportional to v as well, since evey bond formed is broken, and every break costs the same energy. But the power cost is just defined as:

    P = dW/dt = F · v

... where W is the work required (W = ∫ F · dl). So if the power is proportional to velocity, then the force must be independent of it. In this sense, it is just a statement that the microscopic world is forming these bonds much faster than the microscopic world can "fly past them." 

It also helps to go through this intuitive argument about the force of static friction: Suppose that one block B has a certain weight, and a certain friction force f on a surface. We will draw this as:

        (f)
    ___B___

Then if we had two blocks next to each other, joined by some firm-but-light glue, we would imagine the force to be twice as much. But if we also stacked one block on top of the other, the weight would be twice as large and we'd imagine that this also doubles the force:

         (2f)       B (2f)
    ___BB___     ___B___

A quick comparison of these two diagrams says that the friction force must be independent of the block's surface area! It is the same two-block system with the same force, but in one case it has twice the surface area with no extra friction. More accurately, at constant *weight* we expect that the friction is surface-area independent; but at constant *pressure* it would scale proportional to the surface area, as F = P * A.

# Drag in fluids

## Linear drag (Stokes drag)

Imagine a particle which sits in an environment with a lot of tiny particles moving much much faster than it. These tiny particles will bounce against it at the same rate independent of how fast it is going, and will tend to change the direction of its momentum and/or its magnitude. After a certain time τ, these bounces will be enough to randomize your momentum p, thus the average <p> = 0. Strictly speaking even this is a little strong, and what we need can be simpler: that the bounces reduce your velocity proportional to your velocity:

    < p(t + τ) > = k < p(t) > , 0 < k < 1.

This can be described effectively with a force:

    F = Δp / Δt = - (1 − k) p / τ

Which we could describe as proportional to velocity:

    F = - κ v

This is called "linear drag".

### It's also in the Fermi sea

This mechanism is very important in electronic systems. Electrons obey the Pauli exclusion principle, meaning that they cannot all sit at 0 velocity. The transport characteristics are governed mostly by the fastest of these electrons, which have a special velocity called the Fermi velocity. (It isn't that the other ones are "too slow"; it's that energy minimization usually creates a "Fermi sphere" of occupied states and small-bias transport shifts the sphere only by a little bit in a given momentum direction. For small shifts of the ball, calculus says we can treat it purely as a boundary effect: you remove some particles from this edge and put the same amount on the opposite edge.)

Impurities in an electronic system are scattered over a characteristic length scale L, but even when there is no net current, the electrons move with a characteristic velocity v_f ≠ 0 and therefore encounter these impurities on a characteristic time scale τ = L / v_f, even at low current.

### Mobility and equations of motion
Under a constant force F₀, linear drag means a linear response. It is common to define the *mobility* μ to measure this response. Let us say that the net tendency of particles to flow is the "drift velocity" v_d, then the mobility is defined as:

    v_d = μ F₀

(Or sometimes the electron charge is incorporated into μ so that F₀ can become an electric field E₀ instead.)

On sudden application of this force, the particle will accelerate via the Newton equation:

    m dv/dt = F₀ − κ v

Thus at equilibrium we have F₀ = κ v (or μ = 1/κ) and the acceleration is given by:

    v = μ F₀ [1 − exp(-t/(μ m))]

### Example: Bacterial paddle.
Here is a cute problem to work out: imagine that you are a small cell living in a linear-drag universe and you evolve some rigid paddles. Could you use them to swim?

The obvious mechanism is to rotate them very quicky in opposite directions, to push yourself forward:

    \   /   (fast)    *0*
     *0*     --->    /   \

...and then rotate them very slowly in the reverse direction, to ready yourself for another stroke:

            (slow)   \   /
      *0*    --->     *0*   
     /   \

This would be based on the idea that the force you get is proportional to the speed u that the paddles travel. However, the paddles can only travel a certain distance L, and thus must act for only a time Δt = L / u. We would have to include both of these effects, as well as the drag from the environment, to really understand this system.

Let us suppose a constant force F = λ u, where u is the speed we swing the paddles at and λ is some constant. In the first stroke we get a velocity profile that goes like:

    v = μ λ u [1 − exp(-t/τ)], t < Δt
      = v₀ exp(-(t − Δt)/τ), t > Δt,

...where τ = μ m and v₀ = μ λ u [1 − exp(-Δt/τ)] for continuity. The resulting distance traveled in the one-way stroke is therefore:

    x = ∫ v dt 
    x = μ λ u Δt + μ λ u τ [exp(-Δt/τ) − 1] + v₀ τ 
    x = μ λ u Δt − v₀ τ + v₀ τ
    x = μ λ L

The result is surprising and is, in fact, robust due to the principle of superposition: the forward stroke moves you forward a distance independent of the speed that you stroke at, so that the "backward" stroke would perfectly undo the "forward" stroke. You could not use this to swim!

These "paddles" don't exist in this rigid form in bacteria: the closest things are little hairs called "cilia". These are indeed used for locomotion, but they always have one crucial property: on the "return stroke" they are "bent", so that they have a different λ. Presumably if you introduced a gene to make the cilia rigid, such cells could not swim anywhere.

## Quadratic drag (Newton drag)

On the other hand, this is not what happens in air. In air, as I move forward at a speed v, I encounter a volume of air per unit time:

    Φ = A v

...where A is my cross-sectional area. The faster I go, the more air I scatter. Such drag can be characterized for particles as well, by using a characteristic length scale L, so that the time scale goes like L/v, where v is the particle's velocity. Thus our force instead goes like:

    F = Δp / Δt = - (1 − k) p / (L/v)

    F = Δp / Δt = - κ v²

### Equations of motion

Running the same Newton's equation for this case gives:

    m dv/dt = F₀ − κ v²

This is a little harder to solve because it is not a linear equation. The equilibrium speed ("terminal velocity") is still simple; it is:

    v₀ = √(F₀ / κ)

The rest can be solved by defining 

    u = v/v₀, 
    τ = t F₀ / (m v₀)

Which makes the equation into the dimensionless:

    du/dτ = 1 − u²

This has an easy analytic solution:

    u(τ) = tanh(τ)
    v(t) = v₀ tanh(t F₀ / (m v₀))

### Angle mixing

Another important thing to understand about quadratic drag is that it tends to mix directions. For example, a cyclist bicycles north at speed u as a wind sweeps in with speed w from the west. In a linear drag situation, the wind would do no work on the cyclist: work, after all, is a time integral of power, and the power formula is: 

    P = F · v. 

Wheras the force is something like F = - κ [u, w], the cyclist's forward velocity is v = [u, 0], and the wind speed doesn't enter into the calculation at all due to the dot product.

In nonlinear drag, the side wind enters into the power formula due to nonlinearities; the force is something like:

    F = - κ [u, w] √(u² + w²)

And thus the power is - κ u² √(u² + w²).

# Limitations
It would be tempting to suppose that there is basically just a Taylor expansion of the drag force, with an emerging cubic drag coming after the linear and quadratic drags:

    F = a v + b v^2 + c v^3 + ...

...but this simply isn't true. Instead, it is common to speak of a "drag coefficient" C which ensures:

    F = ½ C v² A 

It does this by absorbing whatever other powers of v happen to exist into itself. It is a dimensionless constant, and it is also common to define a dimensionless velocity called the Reynolds number,

    Re = v / v₀
    v₀ = μ / (ρ L)

...where μ is the fluid viscosity, ρ is the fluid density, and L is a characteristic length scale defined by the geometry. (For example, for spheres, L is usually the diameter of the sphere.) For L = 10 cm in air at STP,  v₀ is about 0.15 mm/s. For L = 10 cm in water, this shrinks to around 0.01 mm/s. For L = 1 μm in water (cell size or so), v₀ is about 1 m/s.

You can then see graphs that people have made of drag coefficient as a function of Reynolds numbers for different geometries. In these graphs, it is typical to see our linear drag (C ~ 1/Re), which applies on 0 < Re < 1, and to see a quadratic drag take over from 1000 < Re < 100,000, with a straightforward (monotonic) transition between them in this space of 1 < Re < 1000.

It is then common, at a speed of maybe Re ~ 300,000 or so (depending on how L is defined and how smooth and streamlined the structure is!) to see a sudden drop in drag coefficient. This is due to a boundary layer effect, and there is no real way to get it in a Taylor expansion. It is also not really described by the above discussion. What happens is that the fluid flow at high Re is heavily based on vortices getting shed by the object. This in turn depends strongly on a thin "boundary layer" between the fluid and the solid. There is a qualitative change in the boundary layer (the turbulent part shrinks) which causes this sudden drop in Re. And only after that does it really start to go up again.

Comparing the earlier numbers with these limits, we can see that everything conventional up to typical road traffic  and human swimming can be regarded as quadratic drag. High-speed racecars may begin to be an exception, where quadratic drag no longer holds. Meanwhile, most of the cellular world lives at speeds much smaller than 1 m/s and thus sees an entirely linear-drag universe.

So this is the first limitation: as you get to very high speeds, the fluid stops being "nice" and instead the turbulent chaos that you're inducing starts to push back on you in different ways -- at first it actually helps you out, suddenly lowering the drag, but then it progressively begins to slow you down.

Another limitation comes as you approach the speed of sound in the material you're using; a phenomenon called "wave drag" begins to take priority as shock waves form and carry energy away from you. The most dramatic versions of this effect are the sonic booms which can attend bullwhips, bullets, and supersonic aircraft.

