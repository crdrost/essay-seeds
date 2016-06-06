# How music works

I haven't seen any good lay explanations of how chords and such work.

# Frequencies in our heads
Sound is a pressure wave in air, and you hear sound because it vibrates your eardrum. If you've ever been surprised that we can take a whole symphony orchestra, with all of these different instruments, and somehow replicate it with a speaker -- which is just a vibrating paper cone -- the essential trick is that "I don't need to make all of the air in this room vibrate the same way, I just need to make your eardrum vibrate the same way, for it to sound the same." A microphone is basically just a speaker in reverse -- it detects the vibrations of its "paper cone" -- and it's sort of like the speaker provides a tiny artificial doorway, across time and space, into the place where the microphone was sitting. If you are just listening through one speaker, as you may be familiar if you've ever played a song through your cell phone, it accordingly sounds like you're "far away" from the instruments, so that it seems to lack a certain "depth". We usually try to "fake" this by using multiple speakers to make it seem like the instruments are actually located in the space around you. Following the "we only need to make your eardrums sound the same," you only need two speakers to do this (left and right; think about how headphones "select" individual ears to vibrate). However if you want to be able to rotate your head, or move it back and forward, more speakers help to give a better illusion: hence the 5.1 and 7.1 "surround sound" setups which use 5 and 7 speakers for this purpose respectively. (When we talk about wavelengths it may become more clear why bass notes are harder to locate and only need one "subwoofer", which is the 6th/8th speaker used in these setups.)

It's not just vibrating your eardrum that gets nerves to send electric signals to your brain. In fact, the eardrum lives inside a complicated little bone -- its actual name is the "bony labyrinth", no joke -- and the eardrum sends the vibration to a couple of bones which amplify the vibrations and transmit them to a pressure wave in water in a spiraling space of the bony labyrinth called the "cochlea". This cochlea is separated into two tubes by a flexible wall called the "basilar membrane", which also contains little hair-like parts that vibrate with the fluids in the tubes: these vibrations get sent on to your brain.

Here's where it gets interesting: there are two effects having to do with the *frequency* of the sound, which is the number of high-low-high undulations of the pressure wave in a certain time. All of the parts of the ear preserve this frequency information as it goes into this spiral, and then different parts of the spiral seem to respond to different frequencies. That's one effect, but it's not good enough -- there is an extremely complex relationship between the frequency that comes into your ear and the part of the basilar membrane which sends out signals. (To give one data point: the stiffness of the cochlea is not uniform down that spiral.), but we seem to all agree on which chords "sound good" and which ones don't. So this points to the fact that our nerves are firing *in time with the frequencies of the sounds we hear*, which is the other effect. But that effect is *also* complicated, because we know that we can hear pitches (up to 20,000 cycles per second!) which are higher than our nerves can fire (only about 1000 cycles per second or so). To solve this problem, there is a "volley theory" which says that sometimes nerves fire only after every 3, 4, 5, etc. cycles that the hairs attached move. So actually, to understand these frequencies, the brain is constantly looking for how these different nerves "sync up".

So if you hear a tone that goes 2000 cycles per second, and one hair fires every 4 cycles, that hair will fire 500 times per second, or once every 2 ms. A nearby hair fires every 5 cycles, so it fires 400 times per second, or every 2.5 ms. The brain sees that the smallest "gaps" when nothing is firing are 2.5 ms - 2.0 ms = 0.5 ms long, and that "gap" encodes 2000 cycles per second even though the individual neurons don't. With lots of nerves in parallel, the brain averages out all of their firings and gets a steady thrum at the frequency of the sound, which gives it an "objective" basis as well as the "subjective" basis of sound, which is "where in the ear is this vibration happening?"

# What sounds good?
It's not just that the brain notices when nearby neurons fire in sync, it notices when *all* of them are firing in sync or not. When they are, you'll hear "harmony" or "assonance" of musical notes; when they aren't you'll hear dissonance.


# base-12 stuff

Pachelbel's Canon in D:
    D A Bm F#m
    G D G A

The chord progression is written in the traditional way as:

    I V vi iii IV I IV V

This can be transposed into keys by the mapping:

    Key     |  I   ii   iii   IV   V   vi   vii^o
    A major |  A   Bm   C#m   D    E   F#m  G#dim
    B major |  B   C#m  D#m   E    F#  G#m  A#dim
    C major |  C   Dm   Em    F    G   Am   Bdim
    D major |  D   Em   F#m   G    A   Bm   C#dim
    E major |  E   F#m  G#m   A    B   C#m  D#dim
    F major |  F   Gm   Am    Bb   C   Dm   Edim
    G major |  G   Am   Bm    C    D   Em   F#dim

giving:

    A major |  A    E    F#m  C#m  D    A    D    E
    B major |  B    F#   G#m  D#m  E    B    E    F#
    C major |  C    G    Am   Em   F    C    F    G
    D major |  D    A    Bm   F#m  G    D    G    A
    E major |  E    B    C#m  G#m  A    E    A    B
    F major |  F    C    Dm   Am   Bb   F    Bb   C
    G major |  G    D    Em   Bm   C    G    C    D

Basically the notes in a true spectrum are

    C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C

so the notes which have no sharps are E and B.

This is a duodecimal system so we write with letters as:

     0   1   2   3   4   5   6   7   8   9  10  11  12
     o   p   q   r   s   t   u   v   w   x   y   z  po
     C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C

If we want to pronounce in base-12: foh, pa, qu, re, sa, ta, fu, ve, wa, xe, ya, zi?
The key things to watch for is that the vowel for z should be distinct from s, and v
from o or u (since we reappropriate it), and q z s x need to all be different.

The Pachelbel chord progression in base-12 is:

    po   v   x_  s_  t   o   t   v

where an underscore is a minor chord--hence for D you get back the above result,

    D A Bm Gbm G D G A.

The seven notes that make the "major scale" in a key are:

    o q s t v x z

To get a minor key you instead use:

    o q r t v w y

Changing this is called a mode-change. Mode-changed Pachelbel is therefore:

    po_  v_  w  r  t_  o_  t_  v_

where the TVTropes wiki suggests modifying v_ to v. So in the key of Am (x) you get:

    Am  Em  F  C  Dm  Am  Dm  E

or in the key of Bm (z) without transposing minor chords you get:

The "four chords of pop" are there in Pachelbel, too, and are: I V vi IV, or

    po   v   s_  t
