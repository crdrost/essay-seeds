# Better duodecimal sounds
Recently people have promoted the duodecimal system; there is now a "Dozenal
Society of America" and such. The idea is that with a base-12 system, we eschew
the easy use of fifths in the decimal system, which is uncommon, and replace it
with an easy use of thirds, fourths, and sixths. This is possible if we add two
new digits to the decimal digits. It's meant to make practical mathematics much
easier, at the expense of a few generations of kids who will have to learn two
number systems together.

There is a central problem with the duodecimal system, which is that you cannot
at present use it to count things.

## What is counting?
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

## Duodecimal counting
The duodecimal system has figured out how to count on one hand: you count on the
joints or pads of your fingers, starting from placing your thumb the outermost
pad of the index finger and counting inwards, swapping to the outermost pad of
the middle finger after three, and swapping to the outermost pad of the ring
finger after six, and the pinky after nine. To get more numbers, we can either
use the same hand's orientation (palm-up to start, palm-down means "add twelve",
perhaps palm-up-again means "add twenty-four" and palm-down-again means "add
thirty-six"), or else use two hands.

As with normal counting, there is a symbol which occurs before the counting
process proper, where the hand is simply open with the thumb not touching any
fingers, symbolizing zero. This is also the only symbol which can be confused
with "counting on your hands" -- it is confusable with the symbol for 5. No
other conflicts exist when these two systems coexist.

In all other ways, there is no good duodecimal counting system forwarded today.
We use the Arabic digits so that 10 becomes ambiguous -- did you mean ten or
twelve? Much discussion which seems to be irrelevant renames ten to "dek" and
eleven to "el", with "doh" for "twelve." Nobody has settled on what comes after
that, but "doh one" and "doh two" are common, pushing the problem to what comes
after "doh el" -- not "doh doh" presumably but "two doh", with something like
"three hundred and forty two" being "two-doh-four-doh-six." Aside from the fact
that linguistic selection has not yet operated on these phonemes (so we do not
know if they will warp over time the way "three-and-ten" became "thirteen"), we
still have the problem of distinguishing decimal 342 from duodecimal 246 on
paper.

We also need one-letter symbols for ten and eleven; the usual proposal is
something like X and E. The disadvantage here is that other numbers can be
expressed on a calculator-style display; X cannot (except perhaps by looking
like an H). So we need to decide what these numbers look like.

# Voices
We could instead transmit words with a Japanese flair by picking a couple of
syllables and consonants and using them consistently. The English alphabet
offers the consonants:

    bcdfghjklmnpqrstvwxyz

but the English 'r' is very rare in languages and should be dropped to promote
internationalization. Also many of these split into families of similar sounds,
often by voicing/unvoicing:

    bp cgk dt fv lr mn sz h j w x y

Of these families we can look at which sounds exist in other languages:

    .~  ~. .. .  .~ .. .. . . .   . (Arabic, ~ for "approximate equivalence")
    bp cgk dt fv lr mn sz h j w x y
    ^^  ^^ ^^     ^ ^^ ^^ ^   ^   ^ (Japanese)

This suggests that we choose something like three syllables, two to help further
disambiguate within a category (*ga* versus *ki*, but *ka* and *gi* are not
phonetical digits), and one to help designate places (Perhaps, for example,
*gakido* represents `(g * 12 + k) * 12^d`.