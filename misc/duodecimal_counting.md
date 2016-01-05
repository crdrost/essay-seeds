# An international duodecimal system.
We have a decimal number system. It has ten digits: zero, one, two, three, four,
five, six, seven, eight, and nine. These are written with consecutive ASCII code
points:

    0123456789

To represent a larger number than 9, we ask what its **quotient and remainder**
are when divided by 10. We then write the quotient string, followed by the
remainder digit. For example, the number that comes when we multiply thirteen
times thirteen has remainder 9 and quotient sixteen; sixteen has remainder 6 and
quotient 1, so we write this as `169`.

In theory, we can do this with other digit systems. One really popular
alternative is called "duodecimal" or "dozenal": it would have 12 digits. Sadly,
nobody has designed a good system for writing these 12 digits! The most common
one today reuses English numbers through nine: zero, one, two, three, four,
five, six, seven, eight, nine, dec, el. Bigger numbers are spoken with an
agglutinative particle in the middle, `doh` for 12, `gros` (pronounced like
"grow") for 144: so "three-gros-two-doh-el" is the number four-hundred and sixty
seven. It is two syllables shorter than the English equivalent but looks very
weird and is not friendly to internationalization. Furthermore there is no good
agreed standard for dec and el: X and E are the only really well-supported
proposals although there are now Unicode code points for a rotated 2 and rotated
3 for these.

Here I am proposing that we use the twelve monosyllables: ho, pa, qu, re, so,
ta, fu, ve, wo, xa, yu, ze. These are written with the Spanish vowels `aeiou`,
so that `a` is the vowel in the English word `bra`, `e` in the English word
`pay`, `i` (which is not yet in these 12, but will be used in a moment) like the
word `see`, `o` as in the English word `go`, and `u` as in the English word
`goo`. In IPA, the English pronunciations of these words would therefore be
written:

> hoʊ, pɑː, kuː, ɹeɪ, soʊ, tɑː, fuː, veɪ, woʊ, ksɑː, juː, zeɪ.

The digits can be written with the consecutive ASCII characters:

    opqrstuvwxyz

Since there is both a "word form" and a "digit form" and they can get confused,
I will strive to consistently suffix each word with an apostrophe `'` in this
document; this is not a pronunciation cue but just a marker.

I fully allow non-English pronunciations to vary slightly from these. Several
such variations are possible. Many languages do not have an English R-sound,
and are allowed to pronounce re' with a trilled-R, or with an L-sound. Other
languages would not suffix a K-sound with an S-sound, and might pronounce
xa' like the English words "jar" or "czar" with a J-sound or a Z-sound. Still
others might have no V-sound and can pronounce ve' with a B-sound. So for
example a Japanese text might explain these digits to have the sounds:

> ホ、パ、ク、レ、ソ、タ、フ、ベ、ヲ、ザ、ユ、ゼ.

This would be totally OK by me.

# Why these sounds?

Because (a) the block of points is easy to type for Westerners, (b) there is a
serendipitous collision of the symbol for "ho" with a universal symbol for zero,
(c) the vowel sounds repeat in an aesthetically pleasing way, and (d) there is a
seredipitous non-collision of these sounds with most other number systems. In
addition, though we cannot avoid common words with this scheme, it does a pretty
good job of avoiding common swear words in several languages.

In fact, the only collision that I know of at present is the collision of "re"
and "so" with the musical solfège system, "do, re, mi, fa, sol, la, ti." This is
partially rectified by choosing our music theory so that the notes numbered by
"re" are always D-notes on a chromatic 12-tone equal temperament scale, which
coincides with fixed-do notation. This forces "so" to be D♯/E♭ and therefore
pushes the problem off to more advanced musical theory.

This segment of digits also has a nice property that except for `p` all of the
odd letters look angular in some way: `p,r,t,v,x,z` while the even numbers can
be written in a more rounded way: `o,q,s,u,w,y." Children who are very visual
learners might be able to see this difference without much prompting.

# Standardizing offsets and negative numbers and digit order.

Duodecimal numbers larger than "ze" should be written in the same order as
English decimals, with a (recursively converted) quotient followed by the
remainder digit, where the quotient and remainder come after division by 12.
The resulting sounds are pronounced by simply agglutinating the syllables
together in order: thirteen is one more than twelve and is thus written
longhand as pa'pa'. Thirteen-squared (169) is therefore pa'qu'pa'.

When written as raw digits, these should be prefixed by the colon character `:`,
so `:pqp`, so that we can differentiate for example so' (so', decimal 4) from
`:so` (so'ho', decimal 48), but in most circumstances context should make this
pretty clear.

Two prefixes should also be standardized: a' (represented by the unicode caret
symbol `^` replacing `:`) and ni' (represented by the unicode hyphen `-` right
after the respective `:` or `^`). The a' prefix marks a number as being
*relative* or an *offset*; in other words the sound a'ho' means "staying the
same" while a'pa' means "increasing by one". The prefix ni' negates a number,
functioning the same  role as English "minus". To combine these, use a'ni' and
not ni'a'.

The English idiom "two steps forward, one step back" would therefore be the two-
word phrase "a'qu' a'ni'pa'" written `^q ^-p`.

Other operations are translated with their normal words; "plus" and "minus" for
example.

One way I'd like to extend this prefix system would be to include a sound for
"plus or minus," as in "There are three apples, plus or minus one." Clearly I 
would want to use an ASCII tilde ("There are :r ~p apples.") but I do not know
yet what syllable I want to use for this. Ma' might be too much like pa' for
some languages; mi' might be too much like ni' for others; new syllable sounds
like di' would need to be vetted against numbers in other languages: in this 
case for example are there Romance languages whose number for ten looks like 
either di'ze' or di'so'? (One fun thing: plus-or-minus is always relative and
so it merges with the leading `^`.)

Another way that it has to extend: we have to include a decimal point. Here I
am using commas, and I like to think that maybe they'd be pronounced `pi`. 

# Living with the system

Numbers pronounced with the system immediately tell you whether they are evenly
divisible by 2, 4, 3, or 6. When divisible by 4 they end in `-o` sounds, when
only divisible by 2 they end in `-u`; when divisible by 3 they end in `-ho'`,
`-re'`, `-fu'`, or `-xa'`. There are lots of patterns to pick up: the times
table looks like this:

        |  :o   :p   :q   :r   :s   :t   :u   :v   :w   :x   :y   :z
    ----+-------------------------------------------------------------
     :o |  :o   :o   :o   :o   :o   :o   :o   :o   :o   :o   :o   :o
     :p |  :o   :p   :q   :r   :s   :t   :u   :v   :w   :x   :y   :z
     :q |  :o   :q   :s   :u   :w   :y  :po  :pq  :ps  :pu  :pw  :py
     :r |  :o   :r   :u   :x  :po  :pr  :pu  :px  :qo  :qr  :qu  :qx
     :s |  :o   :s   :w  :po  :ps  :pw  :qo  :qs  :qw  :ro  :rs  :rw
     :t |  :o   :t   :y  :pr  :pw  :qp  :qu  :qz  :rs  :rx  :sq  :sv
     :u |  :o   :u  :po  :pu  :qo  :qu  :ro  :ru  :so  :su  :to  :tu
     :v |  :o   :v  :pq  :px  :qs  :qz  :ru  :sp  :sw  :tr  :ty  :ut
     :w |  :o   :w  :ps  :qo  :qw  :rs  :so  :sw  :ts  :uo  :uw  :vs
     :x |  :o   :x  :pu  :qr  :ro  :rx  :su  :tr  :uo  :ux  :vu  :wr
     :y |  :o   :y  :pw  :qu  :rs  :sq  :to  :ty  :uw  :vu  :ws  :xq
     :z |  :o   :z  :py  :qx  :rw  :sv  :tu  :ut  :vs  :wr  :xq  :yp

Note that `:q` has numbers ending in `^o, ^q, ^s` while `:r` has numbers ending
in `^o, ^r, ^u, ^x`, so that the only ones that are not somehow covered by
normal rules and patterns are :t (5), :v (7) and :z (11), which are governed by
the much smaller table:

        |   :t   :v   :z
    ----+-----------------
     :t |  :qp  :qz  :sv
     :v |  :qz  :sp  :ut
     :z |  :sv  :ut  :yp

So these are the most important ones to memorize: ta' times ta' is qu'pa',
ta' times ve' is qu'ze', ta' times ze' is so've', ve' timese ve' is so'pa',
ve' times ze' is fu'ta', and ze' times ze' is yu'pa'. Everything else follows
some sort of pattern.

# Hand symbols!
Many people know the trick to counting on your hands in duodecimal: you touch 
your thumb to the "pads of your fingers" (technical term: the phalanges). These
systems are usually not clearly spelled-out so let me establish a set order:

Make an "O" shape with your hand, with your thumb touching the tip of the index
finger: this is the digit ho', and represents a count of 0. (The bone inside 
this part of the finger is called a "distal phalange", it connects to an 
"intermediate phalange" in the middle of the finger, then a "proximal phalange"
at the base of the finger, which connects to "metacarpals" that live inside your
hand.)

Now extend your index finger out from the rest of them a little, resting your 
thumb on the middle "pad" (the intermediate phalange): this is pa', or 1. 
Extending your finger further, your thumb will rest on the proximal phalange or
even on the top of the metacarpal, giving you qu', or 2. Note that the even
numbers are like a checkerboard on your phalanges.

Now you leave your index finger sticking out and move your thumb to the tip of 
your middle finger, to get re'. Sticking the finger out further, like you did
to the index finger, gives so' and ta'. Then switch to the tip of the ring 
finger for fu', following the progression to ve' and wo'. Finally the pinky 
finger gives xa', yu', and ze'.

Using this progression reduces your chances of accidentally moving the thumb 
from finger to finger (a're' or a'ni're') during counting, and if we agree 
that instead of touching the proximal phalanges we will let the thumb stick
out, we can use this for stanA♯/B♭dardized communication with little ambiguity. 

# What about music?
Music on the chromatic scale is base-12, but we talk about it with a strange 
base-7 system (C, D, E, F, G, A, B) with five added numbers "between" these 
numbers whose names shift based on context (the black keys on a piano, called 
C♯/D♭ , D♯/E♭ , F♯/G♭ , G♯/A♭ , A♯/B♭, each depending on what key the music is
in). 

With this counting system in place, we have a new way to refer to the 12 notes
of this scale without inappropriately privileging some of them over others.
Furthermore we are able to complete a process which was started in America with
the "movable-do solA♯/B♭fège" system: clearly denote the difference between a 
relative pitch change (in movable-do, these are *do, re, mi, fa, so, la, ti*)
and an absolute pitch (in movable-do, these are C, D, E, F, G, A, B). 

I recommend that our systems coincide for mutual word *re* which in the more 
common fixed-do system is the note D. This means that the notes are numbered as:

    ho'   pa'   qu'   re'   so'   ta'   fu'   ve'   wo'   xa'   yu'   ze'
     B     C   C♯/D♭   D   D♯/E♭   E     F   F♯/G♭   G   G♯/A♭   A   A♯/B♭

This amounts to setting "true ho'" to 440 / 2^(58/12) Hz, so that "middle C" 
(C<sub>4</sub>) is formally the note :sp and the reference A<sub>4</sub> is 
formally :sy set to :row Hz. Speaking realistically, we're going to want a new
way of measuring time anyway (see my essay-seed on rational units) especially if
we're going to supplant the metric system with a dozenal unit system, so this
choice is theoretically going to be superseded when the unit of "second" is 
superseded anyway.

The common names for musical intervals as relative steps then become simple 
relative numbers:

    unison          ^o    tritone        ^u
    minor second    ^p    perfect fifth  ^v
    major second    ^q    minor sixth    ^w
    minor third     ^r    major sixth    ^x
    major third     ^s    minor seventh  ^y
    perfect fourth  ^t    major seventh  ^z

A major chord therefore contains a'so' and a've' while a minor chord contains
a're' and a've'. The diminished chord contains a're' and a'fu' while the 
augmented chord contains a'so' and a'wo'. (This may sound a little more complex
if you already know music theory but I guarantee someone who didn't know that 
in the last five minutes has in principle learned what normally takes an hour's
lesson in music theory; for example seeing that a diminished chord contains a 
minor third atop a minor third is as easy as noticing that fu' is twice re'; 
and the equivalent for the augmented chord is that wo' is twice so'.)

# Where does the 12-tone chromatic equal temperament come from?
Roughly speaking, any chord can be transposed on a piano by shifting all of the
notes left or right by the same amount of keys, but only if you include these 
black keys when you're counting -- and, depending on how your piano is tuned, a
certain combination that sounds pretty good, called a "perfect fifth," may sound
surprisingly bad in a certain place (called that tuning's "wolf fifth"). 

The only reason that the keys are black is because they sound a little "off" or
"bad" or "disharmonic" when played with the C key; they can sound all-right when
played with more appropriate keys on the keyboard.

The reason for this system comes from variable-pitch instruments like violins
and trombones improving on fixed-pitch instruments like harps and pianos: at
some point someone realized that the fixed-pitch instruments sounded good with a
certain tuning, and started to make "chords" with them; these patterns seemed to
repeat with the 8th note you played (which was called the next "octave"), which
always sounded good with a certain note. So the fixed notes were A,B,C,D,E,F,G
and then the variable-pitch instruments showed that you could generate even more
chords, if only you played something which was "close to B but a little lower"
(B-flat) or "close to A but a little higher" (A-sharp). In practice these notes
are regarded as the same, but really there is a whole spectrum of pitches
between A and B and the terms can be applied to any sounds within that spectrum.

It turned out when this was all fully understood that the "distance" between 
pitches A and B is a little less than twice as large as the "distance" between B
and C, so that "B sharp" is basically almost C no matter how you slice it. 

The underlying pattern is that notes which sound good together stand in 
whole-number frequency ratios, so that their waves when played together "repeat"
in our heads, and this sounds aesthetically pleasing to us. Relative to middle-C
these ratios were historically:

     C     D     E     F     G     A     B     C+
    1/1   9/8   5/4   4/3   3/2   5/3  15/8   2/1

The simpler the numbers, the nicer the tones: C sounds very good with G (its 
"perfect fifth") and E (its "major third") and F (its "perfect fourth") and A 
(its "major sixth") and C+ (its "octave"). If the other strings also sound good
together, then you can have a chord: for example, the C-major chord on a guitar
comes from playing C, E, G, C+, and E+. That first "CEG" pairing is what makes
it a major chord and the next-octave notes are decoration; the E-G interval is
(4/5) * (3/2) = (6/5) which is pretty simple still; etc.

The "right way" to view ratios of pitches (a multiplicative system) in an 
additive way was discovered in the :ZPOs CE (the 1600s AD) and they are called
"logarithms." The base-:q logarithms of the above notes are, to re' duodecimal
places,

        C       D       E       F       G       A       B       C+
       1/1     9/8     5/4     4/3     3/2     5/3    15/8     2/1
     ^o,ooo  ^o,qou  ^o,rys  ^o,szx  ^o,vor  ^o,wyp  ^o,yyv  ^p,ooo

Even finely-trained people cannot tell the difference between pitches at a level
of about "5 cents", which is ~o,oov, with differences of ~o,op becoming 
noticeable "beats" when you play two strings of the same nominal pitch at the
same time, and ~o,oq being more widely discernible to reasonable, untrained 
adults.

So D is an indiscernible step from ^o,q while F is an indiscernible step from
^o,t and G is an indiscernible step from ^o,v. By sharpening E, A, and B 
noticeably-but-not-too-dramatically we get ^o,s, ^o,x and ^o,z respectively. 

The other 7 points follow directly from filling in the blanks: since F and G
turn out to be odd twelfths, we have to include a minimum of 12 steps to get an
even spread; the missing 5 are ^o,p (C♯/D♭), ^o,r (D♯/E♭), ^o,u (F♯/G♭), ^o,w 
(G♯/A♭), and ^o,x (A♯/B♭). 

# Appendix: What is counting?
A number system provides a way to *count*. Counting is a process by which we
assign symbols to abstract collections. That sounds really crazy -- how do we do
it? Well, we've learned to do it with a song-and-dance game.

The "song" is a stream of symbols one after another, so if it's actually sung
then it's a form of chant. The stream only requires a couple of properties: it
must be deterministic, and any two symbols in the stream must be easily
distinguishable. The chant goes on forever and every sound occurring in the
chant is different from the sounds before and after it. There is often a special
symbol paired with the song which occurs before the actual song, called "zero"
in English, which is often omitted. The symbols in the song are called the
"numbers". Once the song proper has begun, you perform a "dance" where you point
at the items in the collection, in time with the beats of the song.

In practice all songs we recite end up finite; so hands work perfectly well as a
symbol system but most people only have symbols to count to 5 with one hand, and
so they need two hands to count to 10. Actually, using the "finger up / finger
down" mechanism of hand-based counting, with two hands you can hypothetically
count to 1024, but nobody in practice does this.

The "game" makes the song-and-dance interesting, because there is only one real
rule: you may not point at the same item twice. For most collections we care
about, this means that the dance cannot continue forever anyway (which is why we
do not worry about finite songs), but we must abruptly halt the song at some
point where the dancer has pointed at all of the items. The last symbol uttered
is then the size of the collection.

Sometimes, the dance could go on forever; for example if you tried to count the
symbols in the counting song. We call these collections "infinite." There are
then two classifications of infinite collections: in some collections, there is
some way to count such that, if the dance continued forever, then every item in
the collection is assigned *some* symbol by the counting-dance. These
collections are called "countable". The odd numbers, for example, are countable.
The pairs of numbers are also countable by "counting outwards with the sum",
which if we start with (1,1) can be expressed as the formula turning `(x, y)`
into `1 - x + (x + y)*(x + y - 1)/2`. Sometimes we can prove that there is no
such dance which points to all the numbers, and we call those collections
"uncountable". Infinities get very strange very quickly; there are an infinite
number of different sizes of infinity.