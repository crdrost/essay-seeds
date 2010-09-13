# BitTorrent Ratios #

## Maths ##

A "karma number" is any statistic which tells you how important or valuable you
are to some community that you are socially engaged in: a concept which is not
useful in most societies. But with big impersonal social networks and the now-
mainstream filesharing community on the Internet, real numbers /can/ indicate
how valuable you are to the local community.
 
Your normal BitTorrent client uploads a certain number of bytes U and downloads
a certain number of bytes D. The simplest way to characterize this is with the
upload-download gap:

	g = U − D

...which describes, in a number of bits, how much you have directly contributed 
to the BitTorrent community, minus the direct cost you have required from the
same community. It is a nice number, but with a couple of flaws: for example, it 
seems like someone who has downloaded 2 GB while uploading 1 GB is a "leech", 
only pulling half their share, while someone who has downloaded 90 GB while only 
uploading 88 GB is clearly "trying hard to get even", even though their upload-
download gap is twice as big as the earlier "leech."

For the sake of later discussion, I will also define the BitTorrent "activity", 
given as the sum of these numbers:

	A = U + D.

The traditional way to see whether a user is a positive member of the community, 
then, is to use the *BitTorrent ratio*, which is a karma number defined as:

	r = U / D

It is a unitless number. On a per-torrent basis it has a relatively simple 
interpretation: Once you have downloaded one full copy of a file, then your ratio 
states how many copies you have uploaded. Among many files, it averages out 
individual-ratios by download size: if you imagine a set of uploads {uᵢ} and 
downloads {dᵢ}, then:

	U = Σᵢ uᵢ, and D = Σᵢ dᵢ, and rᵢ = uᵢ / dᵢ

	r = U/D = Σᵢ uᵢ / D = Σᵢ dᵢ rᵢ / D

This is a weighted average of ratios, weighted by the "probability" dᵢ/D, the 
relative download importance of the ratio.

Important to the ratio is this fact: a change in uploads δU and downloads δD
produces the following change in r:

	δr ≈ δU/D − δD U/D² = (δU − r δD) / D

It is the dependance on δU − r δD which I would like to highlight: at a low 
ratio, uploads change your ratio much more than downloads, and at a high ratio, 
downloads change your ratio more. In other words, the combination δU − δD allows 
one's karma number to grow without bound, but ratios establish a stable midpoint: 
as r increases, downloads become more "costly" than uploads are "profitable", 
until an equilibrium is reached. This equilibrium is reached when δU / δD = r. In 
other words, your ratio is always tending towards your instantaneous ratio.

As a karma number: zero is the worst you can get, infinity is the best you can 
get, and one is "breaking even" or "somewhere in the middle."

## Decibels ##
The last fact that I've described is a bit weird, and takes some getting used to: 
that 1 is "even", 0 is "bad", and infinity is "good". We can add some more sense 
to it by taking a /logarithm/. We will call this the L-ratio:

	L = k log r, for some k.

The value of k establishes the "base" of the logarithm: that is, we always have 
that:

	- For logarithms of any base, if log(a)/log(b) = c, then a = b^c. 
	- Thus log(a)/log(b) is the exponent c that you raise b to, to get a.
	- We call this exponent c the base-b logarithm of a.

The "natural log" is a specific logarithm with base e = 2.718281828..., chosen 
because this particular logarithm satisfies:

	d/dx (log x) = 1 / x.

We will write this natural logarithm as log(x), but it is important to understand 
that the constant k = 1/log(b) means that we're talking about an arbitrary 
logarithm.

We have that:

	L = k log r
	δL ≈ k δr / r ≈ k (δU − r δD) / U

We thus see that the difference between the L-ratio and the normal ratio, in 
terms of growth, is just that the L-ratio divides by U while the normal ratio 
divides by D. This has one important effect in single torrents, where D "maxes 
out" at downloading one copy of the file: the normal ratio grows at the same rate 
forever after when this happens, but this ratio grows slower and slower as U 
increases. In other words, it means more for someone who has only uploaded 1 GB 
to upload one more GB, than it means for someone who has uploaded 10 GB. This 
seems to better capture the above notion of "fairness".


At the same time, we recapture some of our "U − D" interpretation, because the 
logarithm of a ratio can be described as a difference of logarithms:

	L = k log(U/D) = k log(U) − k log(D).

In other words, your downloads are again a sort of intuitive "cost" [k log(D)] to 
your karma number, and your uploads are an intuitive "gain" in the same sense. 
The only part that's non-intuitive is that we are evaluating the "price" of a 
given byte upload or download via the nonlinear function k log(x).

You get an extra benefit which I alluded to at the beginning of this section: 
"bad" L-ratios are negative numbers, and "good" L-ratios are positive numbers. 

### Choice of k ###

I recommend k = 10/log(10), which is the k that you need to get a /decibel/ 
measurement. This choice establishes that a ratio of 10 is mapped to an L-ratio 
of 10, and a ratio of 0.1 is mapped to an L-ratio of -10. Within this space, a 
positive L-ratio is usually higher than the corresponding normal ratio; for 
example, if you had a ratio of 2, your L-ratio is going to be 3. Above this, L-
ratios tend to be lower than normal ratios. 

But the real reason I'm recommending this particular value is the importance that 
the music filesharing community has had to the enterprise as a whole. Since sound 
is usually measured in decibels, with +10 dB being "ten times louder", I like the 
idea that our karma number should also be measured in decibels, with +10 dB being 
"ten times better." 

### Hyperbolic ideas ###

For a while I played with the idea that ratios should be /bounded/, so that you 
could say e.g. that -1 was the worst possible, +1 was the best possible, and 
everyone else was somewhere in the middle. Logarithms make this possible if we 
then use a function which takes infinity to +1, and minus infinity to -1. The one 
which comes to mind for me is the /hyperbolic tangent/, defined as:

tanh(x) = [e^x − 1] / [e^x + 1]

If we use x = k log r, we have that the H-ratio is:

	H = tanh L = tanh(k log r) = [r^k − 1] / [r^k + 1]

Here it seems more natural to take k = 1, so that:

	H = (r − 1)/(r + 1) = (U − D)/(U + D) = g/A

We thus see that the hyperbolic ratio H is given by your gap g divided by your 
total activity -- at least, in its most obvious exponent k, it is this way. The 
rest of the discussion is a bit murkier: of course, H is a pure function of r and 
must therefore have δH proportional to δU − r δD, as we have seen before. But the 
constant is no longer as simple as U or D:

	δH = ((r + 1) δr − (r − 1) δr) / (r + 1)²
	δH = 2 δr / (r + 1)² = 2 D² δr / (U + D)²
	δH = 2 D (δU − r δD) / (U + D)²

Rather than dividing by D or U, we thus find ourselves dividing by:

	A² / (2D) = A * (r + 1)/2

In other words, we are dividing by the total activity, but also by a "half-ratio" -- a ratio that is closer to 1.0 than the real ratio is. 

We lose here the pseudogap structure of the L ratio, but we get to keep the fact 
that if it maps A to B, then it maps 1/A to -B. If we scale our final result by 
10 to give a nice round number from -10 to 10, we get:

	h(r) = 10 (r − 1)/(r + 1)
	h(10)  =  8.2   
	h( 3)  =  5.0   
	h( 1)  =  0.0
	h(1/3) = -5.0
	h(0.1) = -8.2

Or, if you prefer, we could  scale the same to be a 0-10 scale. Creating a 
"letter grade" with a value between 0 and 100 is a bit harder, because a ratio of 
1.0 should be somewhere around a C (~75), but this is not halfway in the middle 
of the range.

## Adoption ##

I don't think that these ideas will necessarily be adopted by any private 
trackers. Private BitTorrent communities face a couple of different problems:

	- Among mega-seeders with ratios higher than 100, the best is usually 
	  determined by smallest downloads, 
	- Anyone can have an account with perfect karma by uploading a tiny bit 
	  without downloading anything,
	- Dedicated mega-seeders don't want to see their karma drop from 100 to 10 
	  overnight as the scheme for measuring such things changes,
	- Private trackers have large hosting costs, and need to offset them, 
	  possibly with people donating real money to obtain community karma.

I'm not sure that any of these real problems are addressed by my schemes. The 
first problem, for example, is not helped because everything which I've just 
presented is presented as a function of r. Thus, highest other-ratio is still 
determined by highest normal-ratio. This feeds into the second point: "perfect" 
karma in the hyperbolic case might be +10 instead of infinity, but you can still 
get perfect karma by being insignificant, which doesn't seem particularly fair.

The third point prevents adoption by any commmunity that doesn't want to drive 
away their mega-seeders. And the fourth point shows something particularly 
dangerous about using dB ratios: if you have a fixed policy which, say, adds +1 
to your karma, that's the same thing as:

	L + 1 = k log (a U/D)

...where a = e^(1/k). The point is, there is a fixed contribution money M which 
allows you to double your downloads, and the same will let you again double your 
downloads, and the same will let you double your downloads a third time. This is 
an exponential increase allowed by a linear amount of money; after paying 10M, 
you are allowed to download over one thousand times your uploads. Private 
BitTorrent sites can defend against this by making sure that they don't sell 
karma directly, but only sell "download credits" or "upload credits". Perhaps  
that is a valid deeper point: perhaps we shouldn't be "selling karma" in the 
first place. Still, I think there is room to be saying "I am a good person 
because I help keep this site running with my financial contributions."

Anyway: solving the above problems requires abandoning the ratio system  
completely, while my above approach simply communicates the information within 
the ratio more naturally, as a logarithm or as a hyperbolic tangent of that 
logarithm. I am trying to communicate better the idea that an 0.8 ratio is "bad" 
by making it a negative number, and that a 1.2 ratio is "good" by making it a 
positive number. In so doing, I want to keep the conditions for increasing your 
ratio as natural as possible.