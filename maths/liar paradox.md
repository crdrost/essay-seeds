# Introduction

There's this thing called the 'liar paradox' which I'd like to talk a little bit about. It consists, to my mind, of two sentences:

    "This sentence is false." In day-to-day life, that sentence doesn't bug us. 

You see, if that first sentence doesn't bug us, that second sentence probably should. Because this same first sentence has been explored in many different mathematical directions, and it always leads to some otherwise surprising results. It tells us that there are different sizes of infinity. It tells us that sometimes there are no solutions. It tells us that set theory, mathematics, and computation are fundamentally incomplete, because *analysis itself* is fundamentally incomplete. 

I'd like to show you how it does all these things, and why perhaps it should bug you that this sentence doesn't have a good true/false status. But first I would like to show you that the obvious answer doesn't work. 

# The Obvious Answer: Just Give Up

The obvious answer is that this sentence should be labeled 'undecidable': if we decide that it is true, then it is false; if we decide that it is false, then it is true; so we decide that we cannot decide. If you like, we are throwing our hands up and simply saying 'Error!'

Here's why it doesn't work: you're trapped between two different choices, and neither of them is nice:

(1) The number of different 'undecidable' statuses is infinite.
(2) There are some statements which look entirely true, but which cannot be decided. 

Here's why this happens: we simply broaden the sentence a little bit to say "This sentence is either false or undecidable." If you like, we simply say "This sentence is not decidedly true," to cover all possible 'undecidable' statuses. In programming-speak, we "catch the error" or "handle the exception".

When I say 'look entirely true', I mean that if you transfer the entire meaning of the sentence to another sentence, preserving the object reference, that other sentence can well be true. "This statement is either false or undecidable," you say, is undecidable. But "That statement was either false or undecidable" then expresses the exact same content as the first sentence, and is perfectly true.

Option (1) suggests that you can make a hierarchy of undecidable statuses: "This statement is either false or undecidable" is undecidable-2, which is different from being undecidable, and then you have to have an undecidable-3 for "either false or undecidable or undecidable-2", and so on. Then you have to specify some sort of infinite undecidability for "either false or undecidable-N for some N," and then some sort of infinity-plus-one undecidability for "either false or undecidable-N or undecidable-infinity." 

The other option, option (2), says that "This sentence is false or undecidable" is indeed undecidable, which you would think makes it perfectly true, but 'we cannot prove that within our system.' This is the Godel incompleteness theorem in a nutshell. 

Godel was dealing with strict statements about numbers, but what he found can be summarized like this: a number can encode a text file (e.g. in binary with utf8 encoding). That file can then express some mathematical truth, in an abstract symbolic language. So the result of Godel's theorem is simply "For any set of axioms which can prove facts about the integers, there are some perfectly true facts which it cannot prove." And it comes from this same idea: the number might utf8-encode a statement of 'this statement cannot be proved.' (Godel's proof of this is a little uglier, because he didn't have this notion about a computer, and encoded 'files' with numbers by factoring those numbers into primes: so 2^a * 3^b * 5^c would represent the characters "abc" after you had created a mathematical alphabet, like utf8, which matched letters 'a', 'b', and 'c' to their numbers a, b, and c.)

Surprisingly, computers have poked their head in here. Computers themselves have an analogue of this same problem, called now the 'halting problem'. Here's the problem: it's very easy to make a computer go into an infinite loop from which it can never return. It would be really nice if there were a way to check for this automatically -- 'is this program going to halt, given this input?' But we cannot answer that question either, because of the liar paradox!

# The Halting Problem

To prove that this is a fundamental problem with analysis in general, it helps to explore the halting problem in some depth. Unfortunately, I am going to need to write a short program or two, and must therefore choose a *program syntax*. The easiest one to use here is Javascript, with Lisp coming in at a close second.

Javascript is nice because you can define functions (procedures performed by the computer) which accept as input other functions, like so:
    
    > function square(x) { return x * x; }
    > function double(x) { return 2 * x; }
    > function twice(f, x) { return f(f(x)); }
    > twice(square, 5) 
    625
    > twice(double, 111)
    444

Notice that 'twice' is a procedure which accepts a procedure and an input, and runs the procedure twice on the input.

Here is how we do the halting problem. Suppose that there is a magic procedure which we will call "safe(procedure, input)". It will take as input a procedure and input material, and it will tell us whether it is safe to run that program on the input. "Safe" here means "it doesn't go into an infinite loop, and it doesn't generate an error." (There is an intentional similarity here, between generating an error and saying 'undecidable!' on a proposition.)

This procedure doesn't have to be a computation -- the computer could ask a *human* to look over the code and the input and make the decision! But it cannot ever be perfect. Here's why: you can then write the following program:

    function diagonal(P) {
        return safe(P, P) ? 
            ! P(P): 
            false;
    }

This says "Ask if it's safe to run P on itself. If this is not allowed, then return false. If it is allowed, return the logical opposite of whatever P(P) is." This procedure is called diagonal.

Now, if we were asked to evaluate safe(diagonal, f), I think that we could safely say that it's safe, no matter what f is. After all, it *only* computes f(f) if we tell it that it's safe to do so! If we say that this isn't safe, then it switches to a predefined constant response. So it's an inherently safe function, because it doesn't do anything without checking that it's okay to do so first.

But now imagine that we actually call diagonal(diagonal). The program asks us whether it's safe to compute diagonal(diagonal), and we say "yeah, it's safe to compute diagonal(anything)." So it tries to create the result which is ! diagonal(diagonal).

It then goes into an infinite loop, because it reduces 'diagonal(diagonal)' to '! diagonal(diagonal)', which doesn't reduce at all. It doesn't even converge to a nice fixed value that we might pretend is the right one -- the logical-NOT operation of ! flips true-false-true-false-true-false over and over again.

Our only choice as the safe() mechanism is to fail to analyze the situation. Javascript gives a couple of different ways to do this, but we might return the special Javascript value 'undefined'. Notice that this changes the behavior of the program, and thus diagonal(diagonal) will give back the value 'false', and it is indeed perfectly safe to call diagonal on itself: but our safe() program cannot say that without being wrong. There must be programs which safe() simply cannot analyze.

# Sets and Diagonals
There is a certain reason that I have called this procedure 'diagonal', and it's because it has a deep connection to a set of 'diagonal arguments' made by Cantor. These have to do with sets.

Sets are just collections of items: {apple, banana, pear}. The order doesn't matter. We can ask if a set contains an object, and we can construct sets from a bunch of objects that we want to group together, and so on. You can even have sets of fundamentally different objects, like {1, apple}, or sets of sets, like:
    
    {{1, 2}, {1, apple}}.
    
They can also be infinite, like the set of counting numbers: {0, 1, 2, 3, 4, ...}.

So for example we have the even numbers: {0, 2, 4, 6, 8, ...}. It's very easy, then, to ask a question like, "Is 3 in the set of even numbers?" and the answer is "no."

Here's the trick: at one point, big names like Frege had more or less naively assumed, "that's all there is to the set. A set is defined by 'is in.' For every set, we need to be able to quickly say, 'Is ___ in this set?' and that's all we mean by a 'set'." But, as Bertrand Russell discovered, there's a liar paradox in that simple definition. Let me recall: sets can contain other sets. In fact, it can be very common to speak of, say, the set of all sets. The "is in" rule here is very simple: "is it a set? yes? then it's in there!" We can therefore see that the set-of-all-sets is in the set-of-all-sets. It is a set which contains itself as a member. 

Let me get some quick words out of the way. A simple rule for saying "x is in this set" would be a *predicate*, and Frege was allowing ad-hoc sets that were just defined by predicates. But some sets can contain themselves. Here is the liar paradox:

    S = {X is in this set, if X is not in X.}
    Is S in S?

You can ask whether {2, 3} is in S, and it would say "yes." You could ask if the set of all sets was in S, and it would say "no." But the moment you ask if S is in S, the answer is "yes" if and only if the answer is "no". If S doesn't contain S, then it should. If it does, then it shouldn't. Either one is an error. Russell responded to this by choosing type (1) above: he said "oh, I'll just have an infinity of 'types' in my set theory," the way that we might invent an infinity of undecidables.

Infinity just keeps coming back, doesn't it? Infinite loops, infinite undecidables, infinite types. There is a more poignant way that it connects. The 'diagonal arguments' by Cantor are used to prove that set A is larger than set B. How do we do this? By a contradiction.

So let us take the set of subsets of numbers: a set including things like {1, 5, 9} and {2, 3, 5, 7, 11, ...} and other wonderful numbers. It is called the 'power set' and sometimes called 2^N, because if you consider the set of subsets of {1, 2, 3}, you find that there are 2^3 = 8 of them. (It connects back to binary: you can represent the subset {1, 2} as the binary number 110, where the first number is 1 when the subset contains 1, the second number is 1 when the subset contains 2, and so on. There are 8 binary numbers 000, 001, 010, ... 111.)

Cantor says, 'the power set is larger than the set of numbers.' Assume that the set was enumerable: that you could say "subset #1 is {2, 3}, subset #2 is {1, 2, 5}, subset #3 is {2, 3, 5, 8, 13, ...} ..." by some as yet undiscovered mechanism. This is necessary if they're both the same size -- you might not *know* the enumeration, but one exists in principle.

Cantor now says, "I'm going to use the enumeration to construct a subset which has not been enumerated." It's very much like using safe? to construct a function which cannot be declared safe. In this case, the construction goes like this:
    
    My set contains 1 if subset #1 doesn't contain 1.
    My set contains 2 if subset #2 doesn't contain 2.
    My set contains 3 if subset #3 doesn't contain 3.
    ...
    
You can imagine that we draw the binary strings which represent subsets (1 if they contain a number, 0 if they don't), and then construct a new one by 'staring at the diagonal:
    
    #1:  1 000110101...
    #2: 0 0 00111011...
    #3: 00 0 1100001...
    #4: 110 1 111010...
    #5: 1101 0 11011...
    #6: 11100 0 1101...
    #7: 000001 0 101...

    Cantor constructs: 0110111...

He is clearly defining some sort of subset of the numbers, but if you ever told him, "Oh, I reached that set N in the enumeration," then he could say, "no you didn't -- my set differs from enumeration #N. One contains N, the other doesn't." So all such enumerations are hopelessly incomplete! Or else, perhaps, you would have to study some new mathematics where such things could "hide" off at infinity.

So there must be a new infinity which describes the size of the power set, much larger than the original infinity. In fact, we can look at the set of subsets of the power set, and that must be larger than the power set. There are infinitely many infinities! 

Cantor shows that you can't enumerate numbers; Turing shows that you can't figure out whether programs will halt. The connection to infinity furnished by the liar paradox is simple: is that the infinite set of decidable, analyzable sentences must be smaller than the set of true sentences. This is because no matter how sophisticated your analysis gets, I can quickly propose a true sentence which you cannot analyze.

# Self reference isn't really the problem

A common thread in much of this discussion has been self-reference: "This sentence says X". It is very easy to see that the problem does not require self-reference and in fact exists within any circular reference system: "The next sentence is true. The last sentence is false." 

Sometimes people have assumed that the problem disappears when we forbid the phrase 'this sentence' or things like that. This is not quite correct. The examples available mostly focus on situations where you can construct the same sentence from information available within that sentence. For example, W.V.O. Quine offers the liar paradox:
    
    "Yields falsehood when preceded by its quotation" yields falsehood when preceded by its quotation.

This statement is not explicitly self-referencing. It is talking about what a phrase does when that phrase follows itself in quote marks. It *just happens to be the case*, though, that the whole statement is in fact identical to the quoted sub-phrase followed by itself. But that's not part of what this sentence is saying. The sentence happens to identify itself without actually referencing itself, by quotation.

You might wonder what this looks like in programming, for something to identify itself without referencing itself. Is there such a thing? The answer is "yes but it looks even more clumsy than Quine's attempt." So for example, here is a function which returns itself:
    
    function self() { 
        return self;
    }

If you want a distinguishing property of this function for identifying it, it is a function that you could call `self()()()()()...` as much as you want and you would never run into a problem. 

Here is a function which also returns itself in a strange way:

    function maker(recurse) {
        return function () {
            return recurse(recurse);
        };
    }
    var self2 = maker(maker);

You see, stored in the variable self2 is a function with the name "self" which, if you run it, constructs and hands you a new function which will do the exact same thing as the original if you run it. It turns out that the Javascript `===` operator will tell you that `self() === self` is true -- they are the same referenced function -- while `self2() === self2` is false -- they are different functions which perform the same action.