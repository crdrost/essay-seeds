# Base units as of 2011-06-28

Some thoughts which I am still developing:
    
    1 agro = 10^24.
    1 instant = 0.0864 s
    1 thomson = -10^18 elementary charges. 
        Thus e = 1 Mt/ag. 1 t = 0.1602 C.
    1 fing = 2.59 cm ?
        Thus c = 10^9 f/i, g = 2.827 f/i^2.
        Could choose 25.9 cm, 10^8 f/i.
    1 ruth = 1.67 gr?
    unfortunately the smallness of this mass unit is nasty, you get a
    fundamental force unit of only 5.8 mN. You want it closer to 5.8 N.
    The above is 1 agroamu, but 10^27 amu might have been better for this. On the other hand, an agro is square-rootable.
    Energy is also at a very low scale due to being force * distance. We
    start off with 1.67kg * (2.59 cm)^2 / (0.0864 s)^2 = 0.150 J.
    10^9 (energy units) ~= 40 kWh ~= $1 in cash, so it's not necessarily a
    bad way to measure energy, in Giga___s.

    In its present form, one kelvin is ~10^-22 * 0.150 J. In fact this
    combination is c^2 * 1 amu / Boltzmann contant = 1.08095 * 10^13 K, and you
    can get water to boil at 92.5 degrees.

    The alternative is to use electron masses, which gives 5.92988981 * 10^9 K.
    Then water boils at 168.6 degrees above freezing, body temperature is 62
    units, but periodic tables are no longer in native units. :-(.
    
    right now the rational volt looks like:
    1.67 gr * (2.59 cm)^2 / ((0.0864 s)^2 * 0.1602 C)
        = 0.936 mV.
    Want instead 0.936 V? Then need to raise or lower something.

    Milliamps and volts? th = -10^15 e, so that 1 th/i ~= 1.85 mA.
    Then you just naturally get a rational volt of 0.936 V, plus
    milliamps are much nicer for currents and the force gets a little
    less outrageous between two point charges separated by one unit of distance, only ~344 kN or ~30 metric tons.

# Introduction

This essay is a semi-serious proposal for a new system of measurement units,
appropriate for macroscopic measurements and reckoning, but ultimately also 
interesting for microscopic and astronomical sciences. Now, normally when a 
physicist proposes a new system of units, it is a matter of laziness in the
presentation of formulas: we choose to set G, ħ, c, or k_B to 1, so that we may
omit them from our equations. The actual procedure of restoring these constants
is notoriously error-prone and usually requires the reader to rederive the 
formula; even worse, the units are typically absolutely unacceptable values for
day-to-day usage -- a good example is the 'natural units' unit for length, 
which is about 10^20 times smaller than the diameter of a proton. 

The goal here is different, and has to do with unit conversions. I take as my 
target a comment by Richard Feynman which I have transcribed in its entirety in
Appendix A:
    
>   The proof that physicists are human is the idiocy of all the different 
>   units which they use in measuring energy. [...] If anything could be 
>   analogous to it at all, the only hope would be to say that there are 20 
>   shillings  to a pound, and that you have shillings and pounds, with one 
>   complication that the physicist allows, in that instead of saying he has 
>   20 shillings to a pound, he says he has irrational ratios like 1.6183178 
>   shillings to a pound.

In the appendix, Feynman states that his preference is for everybody to 
synchronize upon the same units: "We don't need any more inventions; we should 
measure the energy in one unit and let it be done, instead of having all these 
different names." This paper comes out in contradiction to this statement, 
instead preferring to create a system of units which are analogous to SI units,
but which allow for non-irrational ratios between different perspectives on 
energy.

So, what I want to do with my proposal, which I am calling "rational units" for 
the moment, is to provide a macroscopic replacement for the SI units, in which
it doesn't matter whether you prefer to measure energies in eV or Joules or 
kelvin or kilowatt-hours -- the equivalent units are the same, up to a factor 
of a power of 10. 

Social forces compel people to use these different scales; someone who is 
concerned with nanoelectromechanical systems uses eV, because charge is 
quantized in units of e and voltages in such devices are key. Meanwhile, if  
someone is studying molecular quantum effects, they need to purchase 
refrigerators and thus they use kelvin. Meanwhile people who just want some
macroscopic energy use Joules, unless they are studying processes which happen
over hours or days, in which case kilowatt-hours become more useful. Since the
social forces are so strong, I don't think that the irrational ratios can 
disappear due to Feynman's imagining of a sudden consensus among physicists. 

So, we have our alternative: define a set of units where the ratios are no 
longer so irrational. It must be as pedagogically simple as the Système 
International, with macroscopic lengths and times given reasonable values; but
it must also assign powers of 10 to the fundamental physical constants which 
relate different energy scales lke eV and kelvin.


# Why energy?

Feynman above identifies several different units of energy, and identifies that the real problem is that the ratios of energies are irrational. Feynman's solution is that "we should all agree on some unit," but I think that this is naive. The different units are mostly trying to compare energies to different things:
    
* degrees Kelvin: "how much latent thermal energy would you need to cause effects like this all the time?"
* calories and BTU: "if a mass of water absorbed this energy, what temperature would that mass of water increase by?"
* electron-volts: "what sort of voltage would you need to accelerate an electron through to get this sort of energy?"
* horsepower: "how does this compare to the energy output of a draft horse?"
* inverse Fermis: "light comes in energy packets -- what wavelength of light would have this same energy?"
* tons of TNT: "how much TNT would I have to explode to get a comparable amount of energy in an explosion?"
* grams: "how much matter would I have to cancel out with antimatter to get a comparable amount of energy in an explosion?"

The more interesting ones are not really comparison-based. The ergs come from a system of measurement called 'cgs', or centimeter-gram-second, and exist in a nice ratio with the Joules of the SI units, namely 10,000,000 ergs = 1 J. But the reason for this other system to exist comes from the fact that cgs measures charge in a different way from SI, so that the laws of electromagnetism are simpler.

The other very interesting one is the kilowatt-hour. Kilowatts are again an SI unit, but hours are not. Power companies, which are willing to use SI units but do not like thinking in terms of seconds, wanted a longer interval based on household power consumption per hour: a 500 W power supply for my computer will not use more than 0.5 kilowatt-hours, if my computer stays on for an hour. In other words, the problem is the fact that we use bizarre units of time, where an hour is 3600 seconds, to organize these long-term events in our life like 'how long is my computer on for?'.

The question that arises is, could a system of units solve all of these problems of measuring energy?

# The way things are now

The SI units are given by choosing a couple of basic elements, which in this case are kilograms, meters, seconds, coulombs, kelvin, candelas, and moles. It does not completely matter how we came to these numbers, but they were originally chosen as follows: 

* We define the kilometer so that the world is about 40,000 km around.
* We define the second as one 86,400th of a day.
* We define a gram as the mass of one cubic centimeter of water.
* We define that there is a 100 kelvin temperature difference between water's boiling and freezing points, at atmospheric pressure.
* We define the Coulomb like so: two infinite straight wires placed one meter apart in a vacuum, both carrying constant currents of one coulomb per second, feel an attractive force of 0.0000002 kilogram meters per second squared. The ultimate goal of this is to get a joule per coulomb to be a unit of energy about the size of a volt.
* We define a candela to be about the luminous intensity of a candle.
* A mole is the number of carbon atoms in 12 grams of carbon-12.

Those are some peculiar conventions, but you can kind of see why in the past people might have chosen these numbers. 

SI prefixes changed a lot of things because it is so darn easy to switch between dollars and cents -- just move the decimal place. Nobody considers kilowatts as distinct from watts, or kilojoules as distinct from joules -- this is not Feynman's gripe in the above text. Since the base-10 Arabic counting system is entrenched in our culture, I take the position that we will not modify it.


# Fixing the Metric system: towards rational units of time and space. 

There are a couple of metric systems, but they all share some of the 
fundamental problems of the SI units -- the international system which has 
slowly begun to creep into everyone's lives.

The first one is that the base-10 idea -- that all units should be connected by
multiples of 10, or more usually multiples of 1,000 -- does not extend to our
way of measuring time. In some respects we cannot fix this: there are certain
unitless constants like (1 year) / (1 day), which we are just stuck with no 
matter how we measure time. But at least at the timescale for days, we now have
many situations where, say, power is measured in kilowatt-hours (which is 3.6 
megajoules), while driving speeds are measured in kilometers per hour (which 
is 0.278 m/s), while distant stars are measured in light years (which is 9.46 
terameters).

The fact that time is not metric, in other words, fundamentally complicates the
rest of our units.

The second one is the units of energy. Joules are used by students, but these
kilowatt-hours are used by power companies. Meanwhile an electron volt, which
is 1.602 * 10^-19 J, is used by anyone who deals with atoms or particles. And
if those weren't enough, nutritional information is presented in kilocalories,
which are in some places simply called Calories, while explosions are measured 
with TNT equivalent. We have not even gotten to bizarre US units like BTUs and
horsepower. Average energies are almost always measured with temperature units,
but those units themselves are complicated -- kelvins, degrees Celsius -- where
on a 27°C = 300K day, the average thermal energy is about 26 meV. 

Mass is of course a peculiarity: the fundamental unit is grams but we almost 
always prefer to use kilograms, except when we are using atomic mass units in
our chemistry classes or electron volts in our particle physics courses. But 
it is not much more of a peculiarity than Coulombs, which ultimately define 
a wide range of units -- volts, ohms, amperes, farads, siemens among them. The
odd J-to-eV conversion factor comes about because an electron only has a charge
of 1.602 * 10^-19 coulombs. Meanwhile a coulomb is a hideously large amount of 
electrical charge, thus currents are typically in the milliamp range, while 
capacitances are generally in the microfarad range or smaller. Volts are just
about the only unit we've even vaguely gotten right.

# Rationalizing time

The most fundamental thing, I think, is to introduce units of time which are
divisible by 10. Like I said earlier, there are some times which you simply
cannot get around -- a year is 365.25 days on the Roman calendar, unless you
are a Muslim, in which case it is closer to 354 or so. I do not think that any
system of units should be specifying calendars, thus the unit of distance of 
"light years" is beyond our hope.

Nonetheless, within the days, we can strive to be as metric as possible. One
day is a pretty well-defined stretch of time, 86,400 seconds. The question is
simply how we measure it.

The first radical change I want to bring about is the stupidity of measuring
the 0 hour from midnight. It is, today, routine for people to stay awake past
midnight -- we do it whenever we stay awake waiting for the new year. But 
except for this, and for the wordplay of saying "it's already tomorrow," we
don't see any use from these time units. Actually, they artificially complicate
any astronomical observations which are made during the night. But the most 
important thing for me is that we simply don't *talk* about time this way. We
don't *think* that a new day has started when the clock strikes midnight. The
boundary holds between darkness and light which determines our actual day.

Thus the first crazy change I would like to introduce is simply to say that the
day should start at 6am. New Year's parties will be dampened, but it is the 
obvious choice in a world where people may often go to bed at 12:30 AM only to
wake up at 8:00 AM.

The next crazy change that I would like to introduce is that the fundamental
unit of time be taken as about a tenth of a second, a unit which we will call
an *instant*:

    1 instant = 0.0864 s.

This is a very human unit, because a human reaction time is only a couple 
instants long. Human perception for sound is something like 20 Hz - 20 kHz, 
so that when a pressure wave hits our eardrums more than twice per instant, we
hear it as sound -- but less often means that we don't hear it at all. Our 
movies similarly flicker at 23.97 frames per second, meaning that as you flip
through images at a speed faster than 1 per instant, we stop seeing them as
individual images and start seeing them as continuous motion.  

Our actual experience of the present is a bit longer: if you see how long 
someone alights on a television channel before choosing whether to watch it
(the human attention span) it is something more like a couple seconds; a
"specious present" which measures out the time that it takes to gesture or to
recover from a brief painful stimulus like getting pinched. So seconds also
have their use. But minutes are far more important for day-to-day life, since
they represent a concerted period of focused activity. 

They take a natural place in our unit system:

    1000 instants = 1 ki = 86.4 s = 1 minute + 26.4 s.

These are pronounced "key" and are probably the most relevant to day-to-day
life. If you are going to come downstairs after you finish writing one more
paragraph, "be there in a ki" is simple enough to say. 

It is worth saying that the day should begin at 6 o'clock, and the world 
clocks should be measured from the East side of the International Date Line.
Thus the hours 0-5 are the daytime hours and the hours 5-10 are nighttime 
hours. Daylight savings time would involve adding 50 ki to your clocks or 
else subtracting it, which might sound a bit bad but it amounts to just 
rotating the minute hand by 180 degrees.

The next absolutely fundamental unit would be mass. As the rational mass I 
choose the proton mass, because it allows us to calculate in so-called "amu"
directly without too much mess. So we define that one em is 1.67262158 kg, 
and the proton mass is 10^-27 em. Perhaps one mole is then defined as 10^27
particles. This might be done with gram-equivalents instead, with 10^-24 em
as one proton mass; I haven't decided yet.

Length would be an important unit, but I want to accomplish two things with
it. We can choose a particular definition of electrodynamic charge so that

    F = q₁ q₂ / r².

But choosing this so that the electron charge is also the fundamental unit
of charge, amounts to choosing the length scale accordingly.

(I also contemplated choosing a unit of distance so that the speed of light 
has a nice representation in those units, 1 dee = 2.59020684 cm, c = 1 gigadee 
per instant -- but I think the measurement of energies in eV is more important
to correct than the difficulty of measuring mass in MeV/c² and so forth.) 

So the idea is to define that two electrons at a separation of 1 d feel a 
repulsion of 1 p d² / i², where p is the proton mass. 

So this would mean that we start looking at the metric constant:
    
    e² / (4 π ε₀) = 2.30707706 × 10⁻²⁸ m³ kg / s².
    
Divide by 1 proton mass, multiply by (0.0864 s)², to find:
    
    e² / (4 π ε₀) * i²/p = 1.02965537 liters
    
The cube root of this volume is:
    
    1 dee = 10.0978899 cm.
    
    e² / (4 π ε₀) = 1 d³ p / i²


It is worth noticing that the dee is very close to one Imperial inch, to about
2% error. Thus this is a meaningful unit to be measuring in. It may also help 
to remember that 1 kilodee ≈ 26 m ≈ 85 feet. A city block is about 10 kilodee. 

Speeds thus come down to dpi, dee per instant. 1 dpi = 0.671 mph = 1.08 km/hr. 
But we get the added benefit that dpi = kd/ki = Md/day.

Gravity is then 9.81 N/kg = 2.83 d/i^2. 

I'm not sold on the idea of the word "dee", and I'm not set on defining the 
"near-inch" as the base unit. Perhaps a "stretch" should instead be 26 m.
 Perhaps these units should be named after someone. I don't know yet.

The basic unit of volume would be the cubic dee, and we might choose, as the
metric system did, that the mass unit be 1 d^3 of water. The other obvious 
choice is to use 1.67262158 g = 1 m. The reason that this is nice is that it 
establishes the proton mass as 10^-27 m exactly. We could then define a mole
as 10^24 particles, since 12 m of Carbon-12 will have ~10^27 particles in. 
Then the density of water is actually only 10.4 mm/d^3, so this conversion 
factor is not so bad either way you choose it. A d^3 is basically 17.4 mL,
or 0.85 tablespoons. A 2L bottles of cola that you see in the US would be 
115 d^3. Probably they would prefer a bottle design which was just 100 d^3.

One number which is a little less pleasant: 1 atm / g = 4.143 m/d²

Another: ħ = 8.1194 * 10^-30 m d^2/i.

The native energy measure: 1m d^2/i^2 = 0.15 J, is a little on the low side.

If we measured charge in e, or some metric multiple, then I am not sure we get
back the cgs-style units, which say that:

    F = q₁ q₂ / r².

The CGS-esque unit of charge is thus 1 re, such that the force between two 
spheres of charge 1 re is 1 m d/i^2. Using 10^27 for Avogadro's number means
that 1 m d/i^2 = 5.80 N. Two charges at a distance of 1 d = 2.59 cm away from 
each other should have this ~580g force between them, and if you calculate
this out in SI units you find:

    1 re = 6.58212417 * 10^-7 coulombs
    
    1 re/i = 7.6182 * 10^-6 amperes.

    e = 2.434 * 10^-13 re. 

I like the idea of saying "0.24 pico-re" but I am not sure if I can do it in
practice. ^_^;;

Energy units are usually in eV or J. Thus this system should have eu and j. 

1 j = 0.150327731 J
1 j/i = 1.740 W
1 kWh = 23.947677 Mj. 

But the volt analogue is:

1 u = 1 j/re = 228,388 V.

That's huge, compared to the SI version. It comes fom the fact that the re is
a rather small unit compared to the coulomb. a 1 uF capacitor is not hard to 
find on the market now, and would charge up with 1.5re of charge in a 1V 
potential. So 1 re is a more accessible macroscopic charge than the coulomb. 

The consequence is that we'd always be measuring in micro-u:
    
    1.5 V = 6.6 μu 

You would then get results like:
    
    13.6 eV = 144.95 * 10^-15 j = 59.55 μeu

This seems Bad because the whole point of people using eV is not just that 
volts are relatively intuitive and electrons pick up this energy, but that we
get very nice answers in the relevant units. 

On the other hand, the proton rest energy is exactly 10^-9 j, because the 
proton's mass is exactly 10^-27 m and the unit conversion is just 10^-9 c.
The electron mass is 0.5446170 * 10^-12 j. So there might be some use for these
units still in the sense that you are basically measuring with proton masses.

In other words, suppose that I just define a special name for 10^-12 j, so 
that it is 1 y. Then 13.6eV = 0.145 y, so it kind of works for atomic spectra.
Then 1 y/re is 0.228 μV, but 1 y/e = 938,272 V.


It looks like we only get to choose a couple of these parameters nicely? (I
mean, that's obvious, but it's worth working out in detail.)

The SI unit system chooses kg, m, s, C, K, candela, mol.

They choose kg to fix the density of water, m to fix the circumference of the 
Earth, s to fix 1 day, C to fix the magnetic constant, K to fix the number of
degrees between freezing and boiling, and mol to fix the atomic mass unit. I
use the word "fix" here in the sense of "making it a nice value."

Right now I am choosing kg to fix proton mass, m to fix c, s to fix 1 day, 
C to fix F = q₁ q₂ / r², K to fix boltzmann's constant, and 1 mol to fix 
Avogadro's number, because 1 amu is already fixed by the kg choice.

I would like to get a distance measurement for cars which is based on roughly 
a 600m unit, because that is about what I package, as a cyclist, as one 
"stretch" and cars travel about 10 times faster than me. In about 3 min = 2 ki,
I travel about 1 stretch while the car travels about 10, so car speeds are 
~5 s/ki, while I'm more at 0.5 s/ki. Maybe it's better to have a ~300m unit, 
implying that our classroom unit should be closer to 0.3 m = 1 ft. 

This is not quite furnished by fixing c, because you get 2.59 cm as your base 
unit, not 25.9 cm. So you're looking at 25.9 m where you might like 259 m.
We could fix this by fixing c = 10^8 d/i instead. This provides a sort of happy
medium, I think? 1 d = 25.9 cm = 0.850 ft. 


 
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

# Appendix B: The Mean Solar Day and the Definition of the Second #

The rational epoch was chosen in particular because it lies near the POSIX 
epoch and also lies before all of the modern UTC leap seconds, thus leap second 
handling can be done with code that only looks forward in time. 

As discussed in the text, the base unit of time is the instant, which is an
atomic unit of time which exists in a fixed conversion factor to the second
of approximately: 
    
    1 i = 0.086 400 002 727 402 s

The leading terms are determined by the desire to make 1 Mi ~= 86 400 s, 
which is one SI day. But instead I have chosen the rational day to be 
approximately 2.73 ms longer than this. Why? 

The fact is that the mean solar day right now is actually a little longer than
the SI day: from 1965-1985 it was about 2.5 ms longer, although in recent years
it has dropped to only be about 1 ms longer. (There is a tremendous amount of 
noise, with decades routinely varying by ~1 ms/decade.) But there appears to 
be a long-term average lengthening effect of maybe 1.7 ms/century due to many
causes, one of which is tidal braking from the Moon. This means that the length
of the mean solar day may be approximately 1 Mi in 2100 or afterwards. In the 
intervening years, I calculate that the accumulated deviation might collect to
be about a minute in magnitude, and then it would decrease for the following 
hundred years, so that "leap seconds" would not need to be a serious problem
until perhaps the year 2300 or so, barring unforseen events. 

If we did institute them now, at least they would be the right sort of leap
seconds -- the current SI-based system, called UTC, inserts an extra second
at the end of hours which should not have 61 seconds, and the most obvious
way to do this with a counter (like POSIX specifies) is to keep the counter on 
one value for two seconds. This breaks the bijectiveness of the mapping in a 
way that "jumping ahead" by one count doesn't.

However, the system as I've presented it already provides a secondary scheme
for inserting leap seconds in the form of time zone differences, without 
compromising the central atomicness of the clock. A named time zone can track
alternate 

