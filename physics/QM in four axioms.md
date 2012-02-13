I've done this before a couple of times, but I wanted to do it again here. 
Classical QM, before you get to Feynman's path-integral formalism, can be given
by something like four different axioms, which you must do in order to quantize
a theory.

I usually say that quantum mechanics is "just" these three:

1.  There is a wavefunction |Ψ> in some Hilbert space which evolves according 
    to the Schrödinger equation, i ħ | ∂Ψ/∂t > = Ĥ | Ψ >, where Ĥ is the 
    Hamiltonian, an operator observable representing the total energy.
2.  Observables are represented by operators such that < A > = < Ψ | Â | Ψ >.
3.  Constraint #1 on the observables: it must be the case that the eigenvalues
    of the observables are the numbers that you would actually get from your 
    observations. (Since most observations are of real numbers, this implies 
    that those observables must be Hermitian.)

The problem is that there is one thing which is missing, which is the 
commutation relations. Observables frequently fail to commute and this is a 
core fact about quantum mechanics which creates uncertainty relations and 
everything. So we really need to add something like the Heisenberg equations:

> Constraint #2 on the observables: they will generally fail to commute. You 
> are free to choose any commutation relation as long as it generates the 
> classical equations of motion via the Heisenberg equations of motion:
>
> > i ħ dÂ/dt = Â Ĥ − Ĥ Â + ∂Â/∂t

However, this is really a coordinate-transformed version of the Schrödinger
equation and therefore it removes the differential equation from postulate #1, 
except for the fact that you do usually still have a wavefunction "starting 
state", and it's easier to explain the evolving wavefunction to newcomers.

On the other hand, I love the idea that we should immediately describe 
operators with their Dirac representation. I like the idea that we say, 
"to make an observable Â, just write out the values Αᵢ which you could get out,
then the operator is Σᵢ Αᵢ | Αᵢ >< Αᵢ | for some set of kets { | Αᵢ > }." 

Because that's what we really mean by observables, anyway, and it gives an 
interpretation to a non-real observable. I started to encounter a bunch of 
work on complex observables during my Master's thesis. The basic problem is 
that harmonic oscillators have a very useful and generic energy annihilation 
operator â which is not, and cannot be, Hermitian. It has eigenstates, although
it has a little too many of them:  â | α > = α | α > for any complex number α.
But those eigenstates *can* be used to build up an identity operator in an 
integral. In some sense there is an "annihilator uncertainty" which can 
sometimes be more useful than the also-poorly-defined "phase uncertainty"; and
the problem with "phase" is that even though there is no Hermitian φ, you often
have some pairing with a number operator N so that [N, φ] = i, and φ = -i ∂/∂N
in some very useful sense. 

On a purely harmonic oscillator level, with a certain convention for making the
Harmonic oscillator dimensionless, Ĥ = ħω/4 (x² + p²) and [x, p] = 2i. The 
classical trajectories are now just circles in the phase space, and quantum 
mechanics adds to them a little uncertainty relation, Δx Δp > 2. 

Invent the radial coordinate r² = x² + p², and the angle θ = tan⁻¹(p/x), and 
you get an (r, θ) description with an uncertainty r Δr Δθ > 2. But we have:

    r Δr = Δ(½ r²)

Meanwhile the Hamiltonian is actually Ĥ = ħ ω (n + ½) for suitable n, thus:

    r²/4 = (n + ½)
    Δ(½ r²) = 2 Δn

    Δn Δθ > 1

This is exactly the relation that would come from `[n, θ] = i` except that it
is downright impossible to properly define this phase as an operator variable.

If we find some explicit way to make the observables all diagonal from the 
start, the Hamiltonian is just Ĥ = Σᵢ Eᵢ | Eᵢ >< Eᵢ | and the Heisenberg 
equations of motion say something about < Eᵤ | Aᵥ > or so. That is more of a 
struggle I guess, because you start to require that eigenvectors for a given
operator are orthogonal or something like that, which is difficult for an 
overdetermined basis like `â | α > = α | α >`.