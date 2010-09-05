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
same community. It is a nice number, but with a couple of flaws: mainly, it is
too noise sensitive.


The traditional way to see whether a user is a 
positive member of the community, then, is to use the *BitTorrent ratio*, which 
is a sort of "karma number" defined as:

	r = U / D

It is a unitless number. On a per-torrent basis it has a relatively simple 
interpretation: If you have downloaded one full copy of a file, then your ratio 
states how many copies you have uploaded. Among many files, it averages out the
uploads and downloads according to the download size. 

Important to the ratio is this fact: a change in uploads δU and downloads δD
produces the following change in r:

	δr ≈ δU/D − δD U/D² = (δU − r δD) / D

We might have instead 

In other words, instead of a combination like δU − δD, which might allow one's
karma number to grow exponentially, with BitTorrent ratios, as r increases 
downloads become more "costly" than uploads are "profitable", thus offering
at least a possibility for stability. Indeed, if you seed, δD = 0 and the whole
ratio grows arbitrarily large as δU gets even larger.

## Decibels ##
 
----=----+----=----+----=----+----=----+----=----+----=----+----=----+----=----+
