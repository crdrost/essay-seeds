# Grover's Algorithm as a way to understand Quantum Computers

A quantum computer still has to answer "0" or "1" when you look at it, but the
probabilities of 0 and 1 can be affected by the entire space of possible inputs.
One example is Grover's algorithm.

Here's Grover in a nutshell: let's say you want to search the space `0 .. N` for
a special number, maybe it satisfies `hash(password(N)) == special_hash` or so.
If you can build that circuit with quantum-capable components, you can run that
circuit once and feed the "yes/no" answer into a "controlled-phase-flip" gate.
With these two operations, quantum mechanics lets you run your circuit on all
possible inputs, getting a superposition of all possible outputs. And then you
can loop a quantum "purifying" step `sqrt(N)` times so that when you measure the
state bits, with very high probability they all together give you the number
you were searching for. In this way, you search a 60-bit space in 2^30 time with
a register which holds 60 qubits, and with very high probability you get a
correct solution.

So that's the sort of thing which quantum computing can do. But in the middle
steps, once you apply the phase flip your circuit, it turns out that the bits
cannot be described individually but must be described collectively, in what we
call an "entangled" state. They must remain collectively in this entangled
state.

What else should I add, and is "phase flip" too magical a term to use in an
essay?