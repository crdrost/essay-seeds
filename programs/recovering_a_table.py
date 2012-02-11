# This is a solution to a puzzle posed at:
#
#     https://dumbblogname.wordpress.com/2012/02/11/the-debut/
#
# The puzzle is as follows: there is a 4x4 grid of numbers 1-9. The row-wise 
# products these numbers are [162, 200, 147, 140]. The column-wise products of
# these numbers are [140, 150, 441, 72]. You are also told that there is at 
# most one 1 in any given row or column, otherwise there are two solutions. 
# 
# (This algorithm is capable of finding the two solutions as well if you modify
# the line in the generator which embodies that constraint -- it uses the 
# below count_ones function.)

def count_ones(ls):
    """Count the number of 1's in `ls`."""
    return sum(1 if i == 1 else 0 for i in ls)

def items_in_sets(v, s):
    """Validate that every element v[i] is in s[i]."""
    return sum(1 if v[i] in s[i] else 0 for i in range(0, len(v))) == len(v)

def refine_row(row, val):
    """
    Refine the possibilities for `row` such that its product is `val`. 
    
    Here `row` is a list of sets defining which numbers are possible in each
    field. Python generates a list of possibilities for how `val` might be 
    created, and then updates `row` based on how these shared constraints 
    restrict further possibilities for the items in `row`.
    """
    # to make this custom generator cut off at some nonfixed point we start at
    # 1 and continue to some data-dependent maximum `m`:
    m = max(max(c) for c in row) 
    
    # Then we build a generator which recursively yields all the ways to make 
    # `t` in `n` values if the maximum number allowed is `m`: 
    def ways_to_make(t, n):
        if n == 1:
            if t <= m: 
                yield [t]
        else:
            # recursion: for each factor f, try to form t/f in n - 1 numbers. 
            # for any ways so generated, append f to their lists.
            for f in range(1, m + 1):
                if t % f == 0:
                    options = work(t/f, n - 1)
                    for o in options:
                        o.append(f)
                        yield o
    # we filter this generator to only the elements which exist in the range
    # of possibilities currently set out by `row`.
    options = [
        o for o in ways_to_make(val, len(row))
        if count_ones(o) <= 1 and items_in_sets(o, row)
    ]
    # then we revise our original statement of "in row[i] values X are allowed"
    # because some of them might no longer be allowed by the `options` we 
    # calculated.
    return [set(o[r] for o in options) for r in range(0, len(row))]


def calculate(rows, cols):
    # how to copy a table
    copy = lambda t: [[s.copy() for s in row] for row in t]
    # how to transpose a table, switching its rows with its columns.
    transpose = lambda t:[[t[j][i] for j in range(0, len(t))] for i in range(0, len(t[0]))]
    # initialize a table with all possibilities open for us:
    table = [[set(range(1, 10)) for c in cols] for r in rows]
    
    # we refine until we no longer are modifying the table:
    last = None
    while last != table:
        last = copy(table)
        # for each row we refine the rows.
        for r in range(0, len(table)):
            table[r] = refine_row(table[r], rows[r])
        # then we switch its rows and columns, and refine the columns, and then
        # switch rows and columns back for the next loop.
        table = transpose(table)
        for c in range(0, len(table)):
            table[c] = refine_row(table[c], cols[c])
        table = transpose(table)
    return table

for row in calculate([162, 200, 147, 140], [140, 150, 441, 72]):
    print ', '.join(
        ''.join(sorted(str(i) for i in s)) 
        for s in row
    )
