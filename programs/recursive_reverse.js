/* a basic itero-recursive algorithm: reversing a linked list.
 *
 * The general idea of doing a project itero-recursively is to create a 
 * function which has iterative logic, but which passes through the steps 
 * recursively. This is used in Lisp especially, where a "tail recursion", 
 * when compiled, is as efficient as iteration and does not leave anything "on
 * the stack". A recursion happens at a "tail" when no more processing has to 
 * happen to the result: if a then b, else recurse(c) is a tail recursion, 
 * while the naive factorial: if n <= 1 then 1, else n * recurse(n - 1) is not,
 * because some extra processing has to happen (multiplying by n) and that 
 * requires some extra overhead sitting on the stack.
 */

// first, establish the data type here:
function Link(first, rest) { 
    this.first = first;
    this.rest = rest;
}
// and an example of its use to create a linked list.
var example = new Link(3, new Link(2, new Link(1, new Link(0))));

example.rest.rest.first; 
    // 1
JSON.stringify(example); 
    // '{"first":3,"rest":{"first":2,"rest":{"first":1,"rest":{"first":0}}}}'

// Now we start with an example of iteration. This is how you might try to 
// convert a set of Links to a Javascript array:

Link.prototype.to_array = function () {
    var out = [], current = this;
    while (current !== undefined) {
        out.push(current.first);
        current = current.rest;
    }
    return out;
};
example.to_array(); 
    // [3, 2, 1, 0]

// What about recursion? Let's create this sort of list from an array to give
// that basic idea of recursion:

Link.from_array = function recurse(list, i) {
    i = i || 0; // when called with no parameter, the parameter is 0.
    return (i >= list.length) ? undefined : 
        new Link(list[i], recurse(list, i + 1));
};
JSON.stringify(Link.from_array([5, 6, 7]));
    // '{"first":5,"rest":{"first":6,"rest":{"first":7}}}'
    
// Similar to this, we might create the following O(n^2) recursive algorithm
// to reverse a linked list. It's straightforward recursive thinking:
// "Reverse list.rest, and then append my item to the end of it."

function bad_reverse(list) {
    if (list.rest === undefined) {
        return new Link(list.first, undefined);
    }
    var base = bad_reverse(list.rest),
        last = (function get_last_link(ls) {
            return ls.rest === undefined ? ls : get_last_link(ls.rest);
        }(base));
    last.rest = new Link(list.first, undefined);
    return base;
}
bad_reverse(Link.from_array([7,8,9,10])).to_array();
    // [10, 9, 8, 7]

// We could even make it O(n) by bubbling up a special data 
// structure which knows where the last is:

function bad_reverse2(list) {
    function subreverse(ls) {
        var base;
        if (ls.rest === undefined) {
            base = new Link(ls.first, undefined);
            return {first: base, last: base};
        } else {
            base = subreverse(ls.rest);
            base.last.rest = new Link(ls.first, undefined);
            base.last = base.last.rest;
            return base;
        }
    }
    return subreverse(list).first;
}
bad_reverse2(Link.from_array([7,8,9,10])).to_array();
    // [10, 9, 8, 7]

// That's all getting pretty complicated! Let's see how we would program this
// iteratively. It's actually pretty simple. Keep two piles: one of things "to
// do", and one of things "done", and move things "to do" onto the "done" pile:

function iterative_reverse(list) {
    var to_do = list, done = undefined;
    while (to_do) {
        done = new Link(to_do.first, done);
        to_do = to_do.rest;
    }
    return done;
}

// An itero-recursive algorithm looks functionally like the above code, but 
// comes in more or less one line.

Link.prototype.reverse = function () {
    function reverse(to_do, done) {
        return to_do? reverse(to_do.rest, new Link(to_do.first, done)) : done;
    }
    return reverse(this);
};
Link.from_array([1, 2, 3, 4, 5, 6, 7, 8]).reverse().to_array();
// [8, 7, 6, 5, 4, 3, 2, 1]

// Lisp will compile this into the same as the iterative_recurse procedure 
// above, but this is the idiom more often used in Lisp.

// One more quick example. Fibonaccis:

// O(2^n) recursive
function fibs_recursive(n) {
    return n <= 1 ? n : fibs_recursive(n - 1) + fibs_recursive(n - 2);
}

// O(n) iterative
function fibs_iterative(n) {
    var last = 0, current = 1, temp;
    while (n > 0) {
        temp = last;
        last = current;
        current = current + temp;
        n -= 1;
    }
    return last;
}

// O(n) itero-recursive
function fibs(n) {
    function f(current, last, n) {
        return n > 0 ? f(current + last, current, n - 1) : last;
    }
    return f(1, 0, n);
}

// Itero-recursive algorithms also solve the problem without using the 
// assignment operator directly. Assignment is generally too powerful for most
// computational problems. 