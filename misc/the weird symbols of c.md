The C expression;

    T *pointer;

is a pointer to a place in memory which is storing an object of type `T`. Thus
n has two values: one is a value of type `T`, the other is a value of type 
`T *`, some integer which represents a location in memory. 

There is a null pointer `NULL` which points to nowhere. This is actually a macro
because different compilers may have different nullity conventions. It is not 
necessarily 0 or any particular number.

We declare pointers with `*pointer`, and we can also assign to `*pointer`:

    *pointer = (some value);

Which will assign a `T`-value to `pointer`, as opposed to a `T *`-value:

    pointer = other_pointer;
    pointer = &other_variable;

In summary: pointers have two separate values: their address in memory, and 
the value at that address in memory. You assign-address with `pointer =` 
and you assign-value with `*pointer =`. Similarly, you can pass-address with 
`fn(pointer)` or you can pass-value with `fn(*pointer)`. And finally, the
name of a pointer type is `T *`. Those are the three different meanings of
this bizarre `*` symbol. They basically all mean 'special pointery things are
happening here.'

Note that the `other_variable` in the last example is of type `T` while the 
`other_pointer` is of type `T *`. In other words, basically *everything* has 
an `&value`. So the following code makes sense:

    int k = 2;
    int ptr = &k;
    *ptr = 4
    // now, k == 4, because ptr was pointing to k's region of memory.

Now you understand the `&` operator. It just grabs the address in memory of 
some variable. 

Since pointers are numbers, you sometimes need the dubious applications of 
"pointer arithmetic":

    int[] l = {1, 2, 3};
    int *ptr;
    ptr = &l[0];
    printf("l[1] = %d", *(ptr + 1));

This is why pointers are of type `T *` rather than something else, like type 
`Ptr` or so: knowledge of `ptr`'s type above tells the compiler that 
`(ptr + 1)` points to an integer 4 bytes further along in memory; if we used a
one-size-fits-all solution without type, then the compiler wouldn't know how
to increment the pointers -- where the "next" integer is.

The above code could be written with some syntactic sugar: the standards say 
that `&l[0] == l`. In other words, the value of an array is a pointer to its 
zeroth element, and the brackets just add a number onto that pointer. We could 
have just as easily said:
    
    ptr = l;
    
Just to be clear: `l` does not have type `int *`, so to speak. It is simply
syntactic sugar that this sort of assignment, with arrays, returns the pointer
to its 0'th element. As the above code shows, further elements can be reached
either as `l[i]` or as `*(l + i)`, because when `l` is treated as a value, its
value is `&l[0]`.

Since pointers have type, they can be cast. One sort of pointer is the generic
pointer:

    void *ptr;

and other pointers can be cast to this type with `(void *) ptr`.

We're almost done. There is one other operation on pointers:

    ptr->key.

This is used with C structures. Let's do a little C structuring:

    struct str_allows_nulls {
        char raw_string[128];
        int length;
    }
    struct str_allows_nulls mystring;
    struct str_allows_nulls *ptr;
    ptr = &mystring;
    strcpy(mystring.raw_string, "abc123");
    mystring.length = 6

What ptr->key does is to call `(*ptr).key`, so that you could instead have 
written:

    ptr->raw_string
    ptr->length

...to achieve the same effect.

Here is why you need pointers:

Pointers are used to deal with dynamically-allocated memory. Memory is 
dynamically allocated on the heap with a function `malloc(size)`, which returns 
a pointer. This memory must then be *freed* later with the function 
`free(void *ptr)`, which will clear the memory from the stack. If this doesn't 
happen then there is a *memory leak* bug -- the memory doesn't get freed until
the program closes, and if the malloc-calling function happens over and over 
again, the  process could grow to an arbitrary size in memory. C++ uses the 
words `new` and `delete` essentially as synonyms of C's `malloc()` and 
`free()`, just with a different syntax.

So for example you might initialize an array on the heap with:

    int *ptr = malloc(10 * sizeof(*ptr));

This dynamic allocation holds 10 int objects and is then freed with:

    free(ptr);

Other languages like Python do this automatically for you. Usually it is based
on some *reference count* for the given object: each time you refer to an 
object with some snippet of code, the reference count is incremented; then 
when these references pass away, the reference count is decremented. When the
count hits zero, the program is not referencing the data any more and its 
memory can be freed. There are added complexities for catching code like:
    
    x = []
    x.append(x)

Which does the perfectly valid operation of putting a list inside itself. 
When you quit referring to x, a program has to be smart enough to realize that
the only remaining reference to x is x[0], and the only remaining reference to
x[0] is in x, so that *you* are not referencing either one anymore.

If you don't detect the conditions for decrementing a reference count properly,
then that is also a memory leak. Thus if you are, say, writing C code which
interfaces with Python code, you have to make sure that your code deals with
possible situations where Python changes reference counts under your nose.
