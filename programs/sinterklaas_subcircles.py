def rshift(tup):
    return tuple(0 if i == 0 else tup[i - 1] for i in range(0, len(tup) + 1))

def plus(a, b):
    m = max(len(a), len(b)); z = tuple(0 for i in range(0, m))
    a += z; 
    b += z
    return tuple(a[i] + b[i] for i in range(0, m))

def times(k, tup):
    return tuple(k * a for a in tup)

def sint(n):
    """
    Return the n'th Sinterklaas subcircles distribution.

    Suppose that n people engage in a Sinterklaas or "Secret Santa" party. They
    all draw lots, and if anyone gets their own name they all redraw. If Alice
    and Bob and Carol and Daryl play this game, they can form nine possible 
    outcomes. Let "ABC" indicate "A buys a gift for B, B buys a gift for C". 
    Then these 9 possibilities can be described as:

        abcda,  abdca,  acdba, acdba, adbca, adcba
        aba cdc,  aca bdb,  ada bcb
        
    This is represented as (0, 6, 3): zero possibilities for 0 subcircles, six
    possibilities for 1 subcircle, and three possibilities for 2 subcircles. Or
    for n = 3 the result is (0, 2): there is only abca and acba.

    Now imagine that Eve wants to join in. Ignore the drawing of lots and look
    at it purely mathematically. She could either join into a subcircle of size
    2 or a larger subcircle. The subcircles of size 2 are in some sense 'new' 
    options: she picks one of the n - 1 people, she buys a gift for them, they
    buy a gift for her, and the rest form sint(n - 2) different arrangements 
    amongst themselves. The other options are 'old' options which she is 
    inserting herself into: she can do this in general by picking one of the 
    n - 1 people to buy a gift for her, and then she takes over the gift that
    this person was giving. These are the recurrence relations; sint(n - 2) is
    right-shifted (prepended with a 0, everything gets moved up an index) to
    reflect the new subcircle, then sint(n - 1) is added like a vector, and 
    then the result is multiplied by n - 1 since that appears in both cases.
    
    """
    last = (1,); curr = (0,)
    if n == 0: 
        return last
    for i in range(2, n + 1):
        last, curr = curr, times(i - 1, plus(rshift(last), curr))
    return curr

mean = lambda seq: sum(i * seq[i] for i in range(0, len(seq)))

probs = lambda m: times(1.0/sum(sint(m)), sint(m))

from matplotlib import pyplot as pp

pp.plot(tuple(mean(probs(i)) for i in range(2, 100)))
pp.show()


