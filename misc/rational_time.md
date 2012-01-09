# The Rational Clock

## Introduction

*This section is purely informational.*

As part of my attempt to build a more-rational unit system, I am interested in
standardizing what to my mind is the most egregious failure of the Systeme 
International (SI) Units: Time, in these units, is a hodgepodge of base-60, 
base-24, and base-1000 counting systems. While the second is the official unit
of time in the SI units, and it is defined in terms of a caesium clock, the
history of the second comes from a definition of the day and night as separable
into 12 hours each, with 60 minutes per hour and 60 seconds per minute to 
follow the same pattern. Kiloseconds and megaseconds have utterly failed to 
displace these units of 'minutes' and 'hours', and the result is that it is 
now frequent, in countries which use SI units, that times are denoted in 
hour-minute-second notation, road speeds are measured with the non-SI unit 
"kilometers per hour," and household electrical consumption is measured with 
the non-SI unit "kilowatt-hours", to name the most important failings. Such
units are not related by a simple power of 10 to more conventional SI units, 
like m/s and J.

The following aspects of time need to be fixed:

*   Time should be decimal. Base-60 counting systems should have been phased
    out long before the year 2000 and their continued presence is a bug.

*   Time should be atomic. Unix time follows the international convention of
    UTC time, which inserts "leap seconds" into an atomic clock so that the 
    UTC "day" may be 86399, 86400, or 86401 seconds long. This is done to keep 
    the unit of "days" in sync with the actual rotation rate of the Earth. 
    Leap seconds are a bug. They may be a *useful* bug in some circumstances 
    but they should not be a low-level essential part of how we measure time. 

*   Time zones should be measured relative to the International Date Line. The
    continued reference to "Greenwich" or "Zulu" time is a bug. 

*   The day should start at some time near sunrise. Before the advent of 
    professional astronomy and artificial lighting, it was a reasonable 
    assumption that people would be asleep in the middle of the night, but this
    assumption is no longer relevant. Starting the day with sunrise will make
    New Year's Eve parties harder to celebrate, but it has cultural support 
    from the Hindu calendar and the shared etymology of the words "morning"
    and "tomorrow" in most languages, including English, French, German, 
    Spanish, Arabic, Russian, Swahili, and Greek. It appears to be the case 
    that in protolanguages we would essentially refer to tomorrow by referring 
    to the coming morning.

The French have attempted twice to replace their time systems with appropriate
decimal systems, but both have failed. This proposal is instead intended to 
provide a time system which can exist alongside other clocks while it is more
gradually adopted.

The core of this proposal is the *instant*, which is approximately equal to 
86.4 milliseconds and is therefore one-millionth of a day. Human reaction time 
is approximately a couple instants, and the relationship of 1 cycle/instant 
tends to form the difference between things observed as continuous and things 
perceived as distinct-but-frequent, so I feel this is the proper name for this
time interval. Time-of-day is measured in *ki*, which is pronounced ki and is 
approximately one and a half minutes. Where someone once said "I'll be there
in five minutes," they now say "I'll be there in five ki." (Side note: in my 
experience when someone says 5 minutes they usually mean a longer interval 
anyway.) People also seem to have gravitated towards quarter-hours rather than,
say, third-hours, and 10 ki is approximately 15 minutes. 

To keep the general structure of the day, 0 ki is approximately 6 AM on most
days, thus 250 ki is noon and 500 ki is 6 PM and 750 ki is midnight. A "nine to
five" job is 125 - 440 ki on the simplest schedule but might drift to 150 - 450
ki or so as people get more used to the schedule. 

# The epoch

The epoch (the time at which the standard rational clock is 0) is precisely:

    2009-12-31 18:00:00 UTC
    POSIX 1262282400

At this time the standard rational clock began ticking out the day 2010-01-01
on the East side of the International Date Line. 



## Scratchpad: optimizing the accumulated offset.

The mean solar day is now about 1 ms longer than an SI day and this is growing
by about 1.7 ms/century; there is a tremendous amount of noise, with decades 
routinely varying by ~1 ms/decade. Here is a nice plot:

    http://maia.usno.navy.mil/whatiseop.html

Some more are available here:
    
    http://maia.usno.navy.mil/ser7/historic_deltat.data
    http://maia.usno.navy.mil/ser7/deltat.data

Though they need to be plotted more directly. There is a decade-to-decade
variance of about 1-2 ms in the length of a day, which was below 24 hours from
1870 - 1890 and marginally below 24 hours in 1930. 

Here is a list of problems which should be my future guide:

    http://www.ucolick.org/~sla/leapsecs/epochtime.html
    http://www.ucolick.org/~sla/leapsecs/deltat.html

A proposal is forwarded here:

    http://www.ucolick.org/~sla/leapsecs/right+gps.html

Relativistic problems also become important!

Here is an email in some sort of defense of leap seconds:

    http://www.mail-archive.com/leapsecs@rom.usno.navy.mil/msg00476.html

The standard rational clock is an idealized abstraction which was 0 at the UTC
time:

    1970-01-01T18:00:00Z

which is also the POSIX time 57600. This is known as the rational epoch. 

The standard rational clock is envisioned as an atomic clock ticking once per 
instant at the eastern side of the Interational Date Line. This puts it 
approximately in the conventional time zone UTC-12, so that the local time at 
that instant was 6:00 AM.

An instant is roughly 0.0864 s, or a little under a tenth of a second. More 
precisely, an instant is defined on the cesium clock as:
    
    794 243 410 cycles of the Cs-133 hyperfine levels.

This fixes the conversion factor to approximately:
    
    1 i = 0.086 400 002 727 402 s
    
The exact reasons for choosing this epoch and deviation are discussed in 
Appendix B.

We define further:
    
    1 ki = 1 kiloinstant = 1000 instants
    1 rational day = 1 megainstant = 1000 ki.
    
Thus the day is defined exactly and atomically; there are no "leap seconds" on 
the rational clock, and it will not keep exact time with the Earth's rotation 
as the centuries press on. However, these may be incorporated via time zones, 
and will on this system amount to a half-ki deviation which "undoes itself".

One ki is 86.4 seconds and forms a sort of "rational minute," although the 
proper term is "ki" and it is pronounced like the English word "key". (The name
"kiloinstant" may also be used, but it is laborious.)

A time on a given day can be specified as "200 ki", for example. Under the 
implicit time zone proposal given within this document, the local time "200 ki"
becomes approximately equivalent to the local time "10:48 AM". A handy 
reference guide comes from dividing the day into eighths:

    0 ki = 6 AM
    125 ki = 9 AM
    250 ki = 12 PM
    375 ki = 3 PM
    500 ki = 6 PM
    625 ki = 9 PM
    750 ki = 12 AM
    875 ki = 3 AM

# Including Noise

The proper thing to do is to look at the system from the perspective of the atomic clock.

There is this rotating planet with some angular momentum feeling a relatively constant torque and its moment of inertia is noisily fluctuating about some mean

Simplest possible model, no noise, no tides, you would get:

    L = I ω

    dL/dt = I dω/dt = -τ

...where τ is the approximately constant tidal torque we feel from our Moon and
Sun. Let k = τ / I, so ω = ω₀ − k t.

Assuming that all of the fluctuations of noise and tides will approximately
cancel out in the long run, you would simply get 

    α(t) = ω₀ t − ½ k t²

The time that this takes to complete one rotation Δα = 2 π is the length of a
day Δ, and that is given by:

    α(t + Δ) − α(t) = 2 π

    ω₀ Δ  − k t Δ − ½ k Δ² = 2 π

    ½ k Δ² − (ω₀ − k t) Δ + 2 π = 0

This is important to me for a very simple reason: I happen to know right now
that the day is a little longer than 86400 s and this leads to a guess about
ω₀, and I know that the day is getting longer by a certain amount per century,
which gives me an estimate for k. 

Let the value of Δ at t = 0 be Δ₀ , and meanwhile the susceptibility of Δ to 
time is given by Δ' :

    Δ ≈ Δ₀ + t Δ'

Here is the number which I know -- Δ'(0) = 170 ms/century ~= 10^-10 is tiny. 
Now if we take a derivative of the earlier expression we get:

    k Δ Δ' − (ω₀ − k t) Δ' + k Δ = 0

Let t = 0:

    k Δ₀ Δ' − ω₀ Δ' + k Δ₀ = 0

Now neglect the first term, because it is dwarfed by the third term by about 
ten orders of magnitude. Then:

    k = ω₀ Δ' / Δ₀

This simplifies the previous expression into:

    ½ ω₀ Δ' Δ₀ − ω₀ Δ₀ + 2 π = 0

    ω₀ (1 − ½ Δ') = 2 π / Δ₀

    ω₀ = 2 π / Δ₀

Where again we ignore 10^-10 contributions. Thus k = 2 π Δ' / Δ₀². 

Finally I make one more statement: there is an ideal number of seconds in a day
D = 86400 s, and the proper way to think about Δ₀ is:

    Δ₀ = D + δ

    ω₀ ≈ 2 π / D − 2 π δ / D²
    k ≈ 2 π Δ' / D²

The initial offset δ is only around 200 ms to D's 86400 s, so δ / D ~ 10^-6 
and we only need to keep the first term here to correct to the 10^-10 
accuracy of the other approximations. I neglect δ in k because we don't even
know Δ' to three digits of accuracy, so δ's effects can't be resolved in k.

The earlier expression for the rotation angle now becomes:

    α/(2 π) = t / D − t δ / D² − ½ Δ' t² / D²

α/(2 π) is some number of revolutions R of the globe, while t / D is some 
number of "revolutions" of an atomic clock.

It is at this point most convenient to just think of successive sunrises. The
number that has passed at a given t is N = α/(2 π). If we look at a time one 
day in the future, t = D, then we see:

    N = 1 − δ / D − ½ Δ'

The system is therefore telling me "I haven't quite gotten to the next sunrise
yet, your clock is too fast, I'm a time of about δ behind you." If you wait a
further time t = δ it then says "okay, I've gotten this.

Looking 273.79 years into the future (t = 10^5 D) we see instead:

    α/(2 π) = 10^5 − 10^5 δ / D − ½ Δ' 10^10

With ½ Δ' = 0.27e-10 and δ / D = 2e-6 this gives:

    10^5 − 0.2 − 0.27

In other words we are finally half a day "behind" the correct time.

    N = 10%4
10^5 "days" into the future t = ± 10^6 D, we see this become instead:

    N = ± 10^6 − 

    ε = D α/(2 π) − t = - t δ / D − ½ Δ' t² / D

After t = D we see that this is -δ. The atomic clock says D has passed while 
the rotation of the Earth says that it's not completed one full revolution yet 
and is in fact approximately a time δ away from doing so. So on the new day the
sun rises at approximately time T + δ. 

3000 years ago would be about t = -10^6 D or so, and then we would see 
    


These 
constants can be numerically evaluated for Δ₀ = 86400 s + 200 ms and for
Δ' = 170 ms/century as:

    ω₀ ≈ 7.272e-5 / s
    k  ≈ 4.534e-20 / s²

In 1000 years ῶ

In this case , so the first term is negligible 
with respect to the third, and we get simply:

    k = ω₀ Δ' / Δ₀.

Thus the first expression becomes:

    ω₀ Δ₀ − ½ ω₀ Δ' Δ₀ = 2 π





But Δ is going to be approximately 24 hours, thus for times 

For times several days away from the 

Δ ≈ 2 π / (ω₀ − k t).

We could also solve it analytically for Δ:

    ½ k Δ² − (ω₀ − k t) Δ + 2 π = 0



    k Δ = ω₀ − k t + √( (ω₀ − k t)² − 4 π k )

    k Δ ≈ ω₀ − k t + ω₀ √( 1 − k (2 ω₀ t + 4 π)/ω₀²  )

    k Δ ≈ ω₀ − k t + ω₀ (1 − ½ k (2 ω₀ t + 4 π)/ω₀² )


    Δ = ω₀/k − t ± √( (t − ω₀/k)² − 4 π / k )

    Δ = ω₀/k − t ± (1/k) √( (k t − ω₀/k)² − 4 π / k )



    Δ = 
    
      + k t Δ 

    d²α/dt² -τ / I

    dα/dt = -τ t / I + ω₀

    α = ω₀ t − ½ (τ/I) t

If one now imagines dI = λ dW the Ito rules suggest that this becomes:

    dα = [ω₀ − (τ/I) t − λ²τ/I³] + ½ (τ/I²) λ dW 



## Time strings ##

Times should be specified in rational units with the following character string
patterns, where names enclosed by curly brackets stand for variables:
    
    R{standard-instants}
    {date} {ki.} {tz}

The variable {standard-instants} is the time as provided as an integer number 
of instants on the standard rational clock. The integer may be negative, in 
which case it is preceded by the character '-'. The preceding capital R helps 
to distinguish rational timestamps from POSIX timestamps. 

The second variant allows a time string to contain an explicit calendar string
{date}, time-of-day {ki.} represented as a positive decimal number in units of 
ki, and a time zone {tz}. The time zone specifies the interpretation of the 
given date and time. In this paper we only concretely specify the time zone 
syntax, the 'absolute' time zones, and the calendars allowed by them. 

According to the specifications in this paper, these three strings represent 
the exact same time:

    R1875000
    r1 875.0 +0
    2010-01-02 225 +350

This is approximately the same as the UTC time:
    
    2010-01-03T15:00:00Z

(Due to the extra length of the instant, the above expression is about 5.11 ms 
after this time. 

## The implicit calendar

For the standard rational clock, the implicit calendar is defined as the 
lower-case character 'r' followed by the integer number of megainstants which 
have elapsed since the rational epoch. This number may be negative, in which 
case it is prefixed with the character '-'. 

For absolute time zones, as will be discussed momentarily, the standard 
rational clock is advanced by a certain ki offset to produce a local rational 
clock. The important detail here is that the calendar is advanced as the 
rational clock is advanced. Thus the change in day always occurs at 0 ki, local
time. Absolute time zones may denote dates using the implicit calendar.

### Rationalizing other calendars

The use of {date} above means that other calendars may be used. The number of
calendars used across the world is too large for the rational clock to specify 
any one in particular. However, different calendars also have different 
conventions on *when the day begins*, and this is a particular problem when 
using other calendars with the rational clock. The implicit calendar (when 
combined with implicit time zones) specifies that the day begins roughly around
6 AM, close to the local sunrise, while Jewish and Muslim customs typically 
start the day closer to sunset and the Gregorian calendar begins the day in the 
middle of the night.

This paper recommends that such calendars should be rationalized: they should 
be modified when used with rational times, so that new days begin at 0 ki. In
order to make this unambiguous, we add the convention that both dates agree
during daylight hours. To the author's knowledge there are no calendar systems
where the date changes at midday, thus this is unambiguous. 

### The rationalized Gregorian calendar

For absolute time zones, a date may also be specified with the rationalized 
Gregorian calendar. This is represented as a character string with the 
following regular expression pattern:

    -?[0-9]{4}-[0-9]{2}-[0-9]{2}

This represents the calendar in "YYYY-MM-DD" format. We follow the ISO 8601 
practice of including a year 0 (really a year 0000), requiring a full 4 digits
in the year, and labeling years before this with negative year numbers -- thus 
the birthday of Cicero (January 3, 106 BCE) is represented as -0105-01-03.  

The rationalized Gregorian calendar is rationalized so that days begin at 0 ki,
local time. 


rational clock is advanced by a certain ki offset to produce a local rational 
clock. The important detail here is that the calendar is advanced as the 
rational clock is advanced. Thus the change in day always occurs at 0 ki, local
time.



## Time Zones ##

A time zone specifies the interpretation of a local time relative to either the
rational epoch or some other clock. The allowed syntax is provided by the 
following regular expression:
    
    [.a-z]*[-+][0-9]+(\.[0-9]+)?

For example, the following are valid time zones:
    
    -500
    +0
    leap-200
    ca-0.001

The text prefix is called a "zone name". Each allocated zone name must define a
local clock, which is advanced by the given number in ki (a "ki offset") to 
obtain the  local time. Note that neither the ki offset nor the leading + or - 
signs are optional in the time zone. 

The zero-letter zone name specifies the 'absolute' time zones, for which the 
local clock is the standard rational clock and the calendar is the implicit
calendar (or some rationalized trans

When the clock resets to 0 that is
generally a trigger for a day to increment; this specification will have more 
to say about this effect later. 

Two-letter zone names should only be allocated by the country with the 
respective country code, hence ca-0.001 is meaningless until Canada regulates a
national local time, at which point it refers to a moment 1 instant before 
Canada's local time. The character '.' should be used as a separator when 
several such options are available. For example, in the USA, the Eastern, 
Central, Mountain and Pacific time zones all observe daylight saving shifts at 
different times; the US could continue this behavior by defining us.e, us.c, 
us.m, and us.p zone names.

Zone names consisting only of '.' characters are reserved and should not be 
allocated without international consensus. 

Local clocks may include daylight-saving shifts or leap seconds, and may define
times on a given day greater than 1000 ki or may skip times between 0 and 
1000 ki. However, local times should be able to be converted back onto the 
rational clock unambiguously.

### Implicit Time Zones ###

It may be the case that citizens will want to use rational time zones before
rational time has been standardized by their respective governments. This is 
provided by an implicit time zone convention. If a government defines a UTC
time zone offset, but has not defined a rational time zone offset, then by
convention their time zone is rounded to the nearest equivalent multiple of
50 ki. That is, the conversion is given for a UTC offset z by:
    
    round((z + 12) / 1.2) * 50

For example, during summer, the Central European Time is UTC+2, which is 
automatically treated as the rational time zone +600 if nothing else is 
otherwise specified. This paper calls such time zones "implicit" time zones.
