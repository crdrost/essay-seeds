# Set theory: dense number coding

You can use a set to store the bits of a binary expansion which are set -- so
for `2^100 + 2^68 + 2 + 1`, you simply store `{0, 1, 2, 68, 100}`. A key insight
here is that you can probably get this storage very dense if those numbers are
stored recursively, which you can do because the numbers you can represent grow
much faster than the numbers which you're representing. It's basically just
dynamic programming.

Here's the idea in Python:

    from math import ceil, log
    dlg = lambda n: 0 if n == 0 else int(ceil(log(n) / log(2)))
    def bits(n):
        """Compute the set-bits in the binary expansion of n."""
        return (k for k in range(0, dlg(n) + 1) if n & (1 << k) != 0)

    def set_format(n):
        return '{%s}' % ', '.join(set_format(t) for t in n) if type(n) == list else repr(n)
    
    nums = []
    for m in range(33):
        nums.append(list(nums[k] for k in bits(m)))

    for m in range(len(nums)):
        print str(m) + ': ' + set_format(nums[m])

Here are the first few set representations of various entities:

    0: {}
    1: {{}}
    2: {{{}}}
    3: {{}, {{}}}
    4: {{{{}}}}
    5: {{}, {{{}}}}
    6: {{{}}, {{{}}}}
    7: {{}, {{}}, {{{}}}}
    8: {{{}, {{}}}}
    9: {{}, {{}, {{}}}}
    10: {{{}}, {{}, {{}}}}
    11: {{}, {{}}, {{}, {{}}}}
    12: {{{{}}}, {{}, {{}}}}
    13: {{}, {{{}}}, {{}, {{}}}}
    14: {{{}}, {{{}}}, {{}, {{}}}}
    15: {{}, {{}}, {{{}}}, {{}, {{}}}}
    16: {{{{{}}}}}
    17: {{}, {{{{}}}}}
    18: {{{}}, {{{{}}}}}
    19: {{}, {{}}, {{{{}}}}}
    20: {{{{}}}, {{{{}}}}}
    21: {{}, {{{}}}, {{{{}}}}}
    22: {{{}}, {{{}}}, {{{{}}}}}
    23: {{}, {{}}, {{{}}}, {{{{}}}}}
    24: {{{}, {{}}}, {{{{}}}}}
    25: {{}, {{}, {{}}}, {{{{}}}}}
    26: {{{}}, {{}, {{}}}, {{{{}}}}}
    27: {{}, {{}}, {{}, {{}}}, {{{{}}}}}
    28: {{{{}}}, {{}, {{}}}, {{{{}}}}}
    29: {{}, {{{}}}, {{}, {{}}}, {{{{}}}}}
    30: {{{}}, {{{}}}, {{}, {{}}}, {{{{}}}}}
    31: {{}, {{}}, {{{}}}, {{}, {{}}}, {{{{}}}}}
    32: {{{}, {{{}}}}}

You can also find the right expression recursively:

    def set_repr(num):
        return [] if num == 0 else [set_repr(k) for k in bits(num)]

Interesting questions remain:
1. Is that a log(n) representation of the number? log^2(n)? It seems like the
   size of the representation is bounded by log(n) * the size of the
   representation of log(n), so `log(n) * log(log(n)) * ...` ?
2. Is this the best you can do with set theory? You can also do linked-lists,
   mind you; with `{}` as 0 and `{{}}` as 1 you can use `{{rest}}` to
   unambiguously designate the rest and then have {num, rest} pairs for every
   list except the last. Does that work in log(n), roughly, or do the brackets
   somehow add up? (I anticipate that lists are log(n), still not sure about
   recursive-nums though.)

