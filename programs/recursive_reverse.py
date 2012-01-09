# could just use tuples directly.
class Node:
    def __init__(self, first=None, rest=None):
        self.first = first
        self.rest = rest
    
    def __repr__(self):
        return 'Node' + repr((self.first, self.rest))

def reverse(ls, base=None):
    return base if ls == None else reverse(ls.rest, Node(ls.first, base))

def node_list(iterable):
    current = None
    for i in iterable:
        current = Node(i, current)
    return reverse(current)

node_list(xrange(3, 10))