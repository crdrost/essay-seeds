# How to Program

## prerequisites

I'm going to be writing in Javascript, because it was one of the first 
languages I ever used, and because it feels like whenever I learn more, the
picture just gets richer and richer. 

Javascript is the language of the web -- almost every website you have ever 
used does something interesting in Javascript code. Javascript is also very 
very close to ActionScript, which is the language of flash games. 

The easiest way to get a version of Javascript on your computer is to use 
Google's Chrome / Chromium browser and press `Ctrl+Shift+J` or else go to 
`Wrench Button > Tools > Javascript Console`. The second easiest way is to use
Mozilla's Firefox browser and install the Firebug Add-On, and possibly 
Greasemonkey (which can run a Javascript script on any page after it loads). 

The third easiest way, which is much more powerful, is to download and install
`node.js`. The fourth easiest way is to use a text editor to remove newlines 
until your code is on one line, then wrap it with the syntax:

    javascript:void(function () { ______ }())

...and then paste it into a web browser's Location bar. If you cannot find some
way to get Javascript working, then you are not trying hard enough. ;D

## what talking looks like

The first thing that you should know is that a programming language is a 
*language* which we use to talk to *computers*. Computers are machines which 
carry out instructions with abstract symbols, so these languages are often 
doing very deeply mathematical things. Meanwhile, the languages are optimized
for communicating *how to do stuff*.

So we're going to start by talking about *recipes* -- how we do things.

Sometimes in mathematics you see functions which come with information on how
to find them, like `f(x) = 4 + (60 / x)`. But often you also see mathematics
which comes with no idea of "how you find it". A good example of this is the 
square root. "The square root of N is a number x such that x * x = N." How do
you find it? That is not covered by the definition.

So in a programming language you can usually write the first one, but not the
second. In Javascript, here is how you write the first:

    function f(x) {
        return 4 + 60 / x;
    }

Notice these words `function` and `return`. A Javascript `function` is a little
more powerful than a mathematical function, but it is also a little harder to
specify.

It is like a dog. You tell it that when this dog runs, it should do a bunch of 
steps, like dividing 60 by x and adding 4. When it's done, it should carry the
result back. You could now say `f(30);` and it would tell you `6`.

Meanwhile here is how you write the second:

    function sqrt(N) {
        return Math.sqrt(N);
    }
    sqrt(60);

What's all of that crap? Well, Javascript happens to have a basic *library* --
a set of functions -- called `Math` which knows how to do square roots. This is
what's called the "easy way out." As a programmer you should always take the 
easy way out, if you can. Laziness might be bad in other fields, but it is very
important in any communication-oriented discipline, and programming is all 
about communicating -- both to a computer and to other people who will read 
your code.

Remember, we are talking to a computer, telling it how to do things. In both of
these cases you see some special ideas: the reserved words `function`, `var`, 
and `return`, the object named `Math`, the connectors (or *operators*) `.`, 
`+`, and `/`, and some extra symbols like `(){};`. If I wrote out the 
second program in plain English it would read:

    I want you to remember a set of instructions which I will call `sqrt`. 
        When I ask you to do `sqrt` I will usually also give you an input
        parameter. Let me call it `N` here.
    Here are those instructions: 
        Look up the `Math` object, get its `sqrt` property. It is a set of 
        instructions. Perform those instructions on `N`. The output of this 
        should be sent as the output of this procedure.
    End those instructions.
    Apply the `sqrt` instructions to the parameter 60.

Notice that there is nothing stopping you from saying, almost-equivalently:

    var sqrt = Math.sqrt;
    sqrt(60);

Or even skipping the middleman and just writing:

    Math.sqrt(60);

In fact, this last one is the *best style*. Style is very important in any 
mathematical discipline and is especially important when you're trying to 
communicate.

Finally, since we're going to be using these ideas a bunch, let us define a 
couple jargon words. The first is a *function* -- a set of instructions which 
can take input values called *arguments* and can *return* -- or output -- a 
value.

If you know those three words, then: applying those instructions to a special
set of input values is called *calling the function on the arguments*. And we 
call a this chunk of memory above a *local variable*. There are also *global*
variables like `Math` which exist no matter where you are, unless you override
them by defining a new local variable with the same name. 

With this jargon we can write the above program as saying:

    make me a function called sqrt with one argument N:
        look up `sqrt` in `Math`, call it on N, return the result.
    end instructions.

One last thing which is somewhat important: When I say "return" I mean "return
from the procedure" -- in other words, "stop doing instructions now." It does
not just set the output value, but it actually ends the function and brings 
back that output, just like a dog.

The semicolons act to separate statements. 

## what to say

Now, you might still want to know *how* to calculate a square root. Maybe you
find yourself one day at a test where you forgot to bring a calculator and you
have enough time to work a square root out with pen and paper, if only you knew
which value it was. 

Here is one way to do it, due to the Babylonians. It requires knowing that if
`x` is the square root of `N`, then `N/x` must also be the same number `x`. But
crucially, if `x` is a little smaller, then `N/x` is a little larger, and vice
versa. Averaging them together gives a better guess. A full program
might then say:
        
    function sqrt_work(guess, N) {
        function improve(guess, N) {
            return (guess + N / guess) / 2;
        }
        function good_enough(guess, N) {
            return Math.abs(N - guess*guess) < 0.000001;
        }
        if (good_enough(guess, N)) {
            return guess;
        } else {
            return sqrt_work(improve(guess, N), N);
        }
    }
    function sqrt(N) {
        return sqrt_work(N, N);
    }

We have introduced many new ideas here. Some are trivial, like `Math.abs`, a 
function which returns an absolute value of a number. 

    function sqrt(N, guess) {
        var newguess, oldguess;
        newguess = guess | N;
        while (oldguess !== newguess) {
            oldguess = newguess;
            newguess = (oldguess + N / oldguess) / 2;
        }
        return newguess;
    }
    sqrt(60);

Okay, this def