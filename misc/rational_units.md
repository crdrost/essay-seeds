# Rational Units
**Note:** These units may still be in flux; this document is an essay-seed and not a final proposal. Until these are standardized, and final names are chosen, these units should be called "rational units" to discourage their actual use, as that name is unnecessarily nonspecific and confusing. When a plan is actually put forward we can call these "Drost units" or whatever.

This essay is a semi-serious proposal for a new system of measurement units, appropriate for our macroscopic measurements and reckoning, but ultimately also interesting for microscopic and astronomical sciences. Now, normally when a physicist proposes a new system of units, it is a matter of laziness in the presentation of formulas: we choose to set G, ħ, c, or k_B to 1, so that we may omit them from our equations. The actual procedure of restoring these constants is notoriously error-prone and usually requires the reader to rederive the formula; even worse, the units are typically absolutely unacceptable values for day-to-day usage -- a good example is the 'natural units' unit for length, which is about 10<sup>20</sup> times smaller than the diameter of a proton.

The goal here is different, and has to do with unit conversions. I take as my target a comment by Richard Feynman which I have transcribed in its entirety in Appendix A:
    
> The proof that physicists are human is the idiocy of all the different units which they use 
> in measuring energy. [...] If anything could be analogous to it at all, the only hope would 
> be to say that there are 20 shillings to a pound, and that you have shillings and pounds, 
> with one complication that the physicist allows, in that instead of saying he has 20 
> shillings to a pound, he says he has irrational ratios like 1.6183178 shillings to a pound.

In the appendix, Feynman states that his preference is for everybody to synchronize upon the same units: "We don't need any more inventions; we should measure the energy in one unit." This essay comes out in contradiction to this statement. I would rather create a system of units which are analogous to SI units but "accumulate" these different perspectives on energy with factors-of-10 differences between them.

I reason thusly: Social forces *have compelled* people to use these different scales. Someone who is concerned with nanoelectromechanical systems uses eV, because charge is quantized in units of e and voltages in such devices are key. Meanwhile, if someone is studying molecular quantum effects, they need to purchase refrigerators and thus they use kelvin. People who just want some macroscopic energy (especially some kinetic energy) use Joules, unless they are studying processes which happen over hours or days, in which case kilowatt-hours become more useful. Since the social forces are so strong, I don't think that the irrational ratios can disappear due to Feynman's imagining of a sudden consensus among physicists.

Different units are mostly trying to compare energies to different things:
    
* degrees Kelvin: "how much latent thermal energy would you need to cause effects like this all the time?"
* calories and BTU: "if a mass of water absorbed this energy, what temperature would that mass of water increase by?"
* electron-volts: "what sort of voltage would you need to accelerate an electron through to get this sort of energy?"
* horsepower: "how does this compare to the energy output of a draft horse?"
* inverse Fermis: "light comes in energy packets -- what wavelength of light would have this same energy?"
* tons of TNT: "how much TNT would I have to explode to get a comparable amount of energy in an explosion?"
* grams: "how much matter would I have to cancel out with antimatter to get a comparable amount of energy in an explosion?"

The more interesting ones are not really comparison-based. The ergs come from a system of measurement called 'cgs', or centimeter-gram-second, and exist in a nice ratio with the Joules of the SI units, namely 10,000,000 ergs = 1 J. But the reason for this other system to exist comes from the fact that cgs measures *electric charge* in a different way from SI, so that the laws of electromagnetism are simpler.

The other very interesting one is the kilowatt-hour. Kilowatts are again an SI unit, but hours are not. Power companies, which are willing to use SI units but do not like thinking in terms of seconds, wanted a longer interval based on household power consumption per hour: a 500 W power supply for my computer will not use more than 0.5 kilowatt-hours, if my computer stays on for an hour. In other words, the problem is the fact that we use bizarre units of time, where an hour is 3600 seconds, to organize these long-term events in our life like 'how long is my computer on for?'.

Since nobody uses the SI unit of "kiloseconds", we should replace seconds altogether.

# The Proposal
Here are the basic unit definitions which I am proposing here. The names and definitions are **not** final.

## Time
One *instant* or *ee*, written `1 i`, is defined as the duration of 794,243,420 periods of the hyperfine-transition radiation of Cesium-133.

This locks the number of SI seconds in an instant to a fixed ratio, `794243420/9192631770 = 0.086400003815229509622792168...`.

One instant is approximately a tenth of a second and a millionth of a day on Earth. It corresponds approximately to a transition between things that human beings regard as continuous (more frequent than once per instant) and discrete (less frequent than once per instant): for instance, often modern movies run a little faster than 2 frames per instant to give an illusion of continuous motion, and sounds lower than about 2 cycles per instant go from the low edge of the audible spectrum to "infrasound" frequencies.

As you can probably calculate for yourself, most days are 86,400 seconds long: in order to keep parity with the rotation of the Earth, we sometimes have to insert an 86401st second. This problem is increasing as time goes on due to a problem called "tidal friction". I intend the extra fraction of time to compensate for this by making one million instants about `3.8ms` longer than 86,400 s. The current estimate for a length of a day is only 1.7ms longer or so, but tidal braking should gradually lengthen the day, making it slightly longer than one million instants. If it takes 100 years to reach parity then it will take another hundred years to return to the current offset -- which is to say, not offset at all. Cultural norms in 300 years or so would then decide what to do with the problem of leap instants in the clocks.

By using a vowel for the name of the unit, I intend that SI prefixes get merged into the unit, with a milli-instant being called a "mi" and a kilo-instant (86.4 seconds) being called a "ki". One ki is a very useful unit of time both for clocks and daily usage.

By defining a metric unit of time, I intend to remove the distinction between the analogues of "Joules" and "kilowatt hours," where the difference was caused by the fact that wall-time longer than a few minutes is measured in units which are not commensurate with the normal SI unit of time.

## Distance
One *dee*, written `1 d`, is defined as the distance travelled by light in vacuum during a time interval of 10<sup>-9</sup> of an instant.

This locks the speed of light to a fixed number, `c = 1 Gd/i`. It also locks the number of SI meters in one dee to a fixed ratio, `0.794243420 * 299792458/9192631770 = 0.0259020695149770325239515168...`). The approximation that `1 d = 2.590 cm` is not too hard to remember; furthermore it is only about 2% larger than an Imperial inch, meaning that Imperial measuring tapes can be used to measure distances with relatively good accuracy.

By defining the speed of light to be a power of ten, we remove the distinction between the units of mass and units of energy. In addition, the speed `1 d/i` is approximately equal to `1.079 km/hr`, allowing easy computation of approximate speeds for cars which use those non-metric units.

## Charge
One *lor*, written generally with a script small-L as `1 ℓ`, is the charge of 10<sup>15</sup> electrons.

This number is not in a fixed relationship with the corresponding SI unit, the Coulomb. The best current numbers defining the relationship suggest that one lor is `0.0001602176565(35) C` where the parentheses indicate the standard uncertainty of the last digits. In terms of currents, `1 ℓ/i = 1.854370942(40) mA`.

These units of charge and current will alleviate the constant headache of physics teachers having to tell their students that "one Coulomb is a very large amount of charge" by reducing current flows to the scale of milliamps, which are seen much more often in real circuits.

A proposed 2018 revision of the SI system suggests that the elementary charge will soon be fixed by the SI system, at which point the relationship above will become exact.

## Force
One *newt*, written `1 n`, is defined as the Coulomb force experienced by two 1-lor charges in vacuum at a distance of √(10<sup>9</sup> / (4 π)) d, which is approximately 231 meters. It is a relatively small force.

Due to the fact that the SI unit fixes the electric constant, the only uncertainty lying between these two units comes from the uncertainty of the relationship between 1 ℓ and 1 C. This will in the proposed revision of SI become a real uncertainty in its value for the electric constant. The SI system forces the vacuum permittivity to be:

> ε<sub>0</sub> = 10<sup>7</sup> (farads/m) /(4 π * 299792458<sup>2</sup>))

From these we can ascertain that `1 n = 4.32118749(19) mN`.

With this complicated definition we are setting the Coulomb force law to have the form:

> F = (10<sup>9</sup> n d<sup>2</sup>/ℓ<sup>2</sup>) * q<sub>1</sub> q<sub>2</sub> / (4 π r<sup>2</sup>).

Using cgs-style unit puns, we identify this prefactor with `c` so that formally:

> 1 ℓ = 1 √(n d i).

This unit pun causes the Maxwell equations to take on a pleasing form, if we specify that primes are time derivatives divided by c so that `X' = 1/c ∂X/∂t`

    Maxwell Equations
        ∇ · E = c ρ    ∇ × E = -B'
        ∇ · B = 0      ∇ × B =  E' + J

    Lorentz Force: F = q [E + (v/c) × B]

    Potentials: E = -∇φ − A',  B = ∇ × A
    Gauge freedom: can take A → A − ∇ψ as long as we also take φ → φ + ψ'
    Lorentz gauge: φ' − ∇·A = 0, causing ⧠ (φ, A) = (c ρ, J).

    Energy density: u = (E² + B²)/(2 c)
    Poynting vector: S = E × B

This unit pun also means that there is a dimensionless unit for conductance/resistance, related in an exact numerical ratio to the SI units of siemens/ohms. The resistance unit, 1 = 1 (n d/ℓ)/(ℓ/i), has the exact magnitude of:

> 1 = 4 π * 10<sup>-7</sup> * 299792458 Ω = 376.7303134617706554681984... Ω

## Temperature
One *medici*, written `1 M`, is a temperature interval such that the Boltzmann constant is given by:

> k<sub>B</sub> = 10<sup>-19</sup> n d / °M

As with the definition of charge, the upcoming SI proposal will fix k<sub>B</sub> as well, so that the only uncertainty in converting between the two will be the uncertainty in the SI electric constant. At present there is still uncertainty in the SI value for k<sub>B</sub> but it was measured by the UK's NPL to be:

> k<sub>B</sub> = 1.38065156(98) * 10<sup>-23</sup> J/K

Combining the uncertainties naively we get that `1 M = 0.81068748(61) K`.

This temperature interval can be used as a temperature scale in two ways: the simplest is a temperature given in terms of medicis above absolute zero, written `M` or `Ma`. The second is the *degree Medici*, written `°M`, which is measured relative to the temperature `336.94 Ma`. On this scale, the freezing point of water at sea level is approximately `0°M` and the boiling point at sea level is about `123.35°M`, lowering by about `0.1 M/kd` as elevation increases. Probably people will just remember "water freezes at 0 and boils at 123."

## Derived units
One *jay* is the work done by a force of one newt acting through a distance of one dee; `1 j = 0.1119276938(49) mJ`.

One *em* is the unit of mass such that a force of one newt accelerates it by one dee per square ee; `1 m = 1.245363547(54) gr`. (This may need to be changed so that we don't overlap with the SI unit of length.)

One *vee* is the unit of electric potential of one jay per lor: `1 v = 0.698597746(15) V`.

One *sem* is the unit of electrical conductance of one lor per ee per vee. This is technically just a dimensionless constant 1 (see above), but we use it to be able to say that 1 s<sup>-1</sup> ≈ 376.73 Ω.

# Some common parameters

The acceleration at Earth's surface due to gravity is approximately 2.83 d/i<sup>2</sup>.

The density of water is approximately 14 m / d<sup>3</sup>.

Planck's constant is *h* = e<sup>2</sup> / (2 *α*), which works out to *h* = 6.8517999537(22) * 10<sup>-29</sup> n i d, so its digits come straight from half the inverse-fine-structure constant.

This also means that the conductance quantum is exactly four times the fine-structure constant, in sems.

# Appendix A: The Full Feynman Quote

Parts of this statement are somewhat widely quoted, but the context is missing;
it comes from Feynman's third Messenger Lecture at Cornell University, titled
"The Great Conservation Principles." Feynman says:

>   Physicists always feel so superior and smart and so on that people 
>   would just like to get them once on something, and so I'll give you 
>   something to get them on. They should be utterly ashamed of 
>   themselves, because they take the same thing -- energy -- and they 
>   measure it in a host of different ways, with different names -- 
>   absolutely absurd! Energy can be measured in calories, in ergs, in 
>   electron-volts, in foot-pounds, in BTU, in horsepower-hours, in 
>   kilowatt-hours, all exactly the same thing. It's like having money, 
>   you know, in dollars and in pounds and so on, but unlike the economic 
>   situation where the ratio can change, these dopey things are in 
>   absolutely guaranteed proportion. If anything could be analogous to 
>   it at all, the only hope would be to say that there are 20 shillings 
>   to a pound, and that you have shillings and pounds, with one 
>   complication that the physicist allows, in that instead of saying he 
>   has 20 shillings to a pound, he says he has irrational ratios like 1.6
>   183178 shillings to a pound. So in addition to that, you'd think that 
>   the more modern high-class theoretical physicists would at least use 
>   a common unit, but you can find papers with degrees Kelvin for 
>   measuring energy, megacycles, inverse Fermis is the latest invention. 
>   We don't need any more inventions; we should measure the energy in 
>   one unit and let it be done, instead of having all these different 
>   names. People often want to say, 'see, I should bring my little boy, 
>   to show on the screen, so that the audience will understand that I'm 
>   human' -- well, the proof that physicists are human is the idiocy of 
>   all the different units which they use in measuring energy.
