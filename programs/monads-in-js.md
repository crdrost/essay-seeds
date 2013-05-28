All of the Node.js functions have a very common pattern:

    do_something(function callback(result) {
        // here control is ceded back to your code, with the result of doing something.
    });

For example, to read a file and then print 'done!' when the file is in memory, you would write:

    > fs.readFile(filename, 'utf8', function (err, data) { console.log("done!"); });
    undefined
    > done!

It's very important to see that there's a complicated asynchronous interplay here; that word "done!" came from the `console.log` statement but appears after the prompt `> `. This happens because the new prompt is generated immediately after `fs.readFile` returns `undefined`, and before the file is actually read. Also the callback function here returns undefined. Basically in Node.js everything returns undefined.

In Haskell we'd write a *type signature* for `fs.readFile` as:

    fs.readFile :: (String, String, (Maybe Error, Maybe String) -> IO ()) -> IO ()

Here `IO x` marks that anything can happen and the function returns something of type `x`; `()` is the type of `undefined`, and `Maybe x` is something which can either be `null` or of type `x`. (Actually in node.js the Maybe String will be `undefined` and not `null` when an error is reported, but let's not concern ourselves with that here. Let's also ignore the fact that if you don't use the second encoding string a Buffer is returned rather than a String.)

That's of course not idiomatic Haskell; you would probably instead write something like:

    data Encoding = UTF8 | UTF16 | -- some other encodings supported
    type FilePath = String
    type Callback x = Either Error x -> IO ()
    fsReadFile :: FilePath -> Encoding -> Callback String -> IO ()
    
You'd then handle the other case with `readFileBuffer :: FilePath -> Callback Buffer -> IO ()`; they'd have different names because they take different parameters. The big difference is that here every function takes one argument, so you don't need commas or parentheses to separate them; you'd simply write in Haskell:

    fsReadFile path UTF8 callback

Let me focus on the type of the last bit, `Callback String -> IO ()`. You can say that once we're here we've got a *deferred computation on Strings* going on:

    type Eventually x = Callback x -> IO ()

We can ignore errors and say `type Callback x = x -> IO ()` to reveal that `Eventually x = Callback (Callback x)`, which is a little crazy but does make a bit of sense: it is a computation C which expects a computation D which expects an x; the idea is that C computes an x and hands it off to D. In this sense there is a 'pure' deferred representation of *any* value:

    // pure :: x -> Eventually x
    function pure(x) {
        return function (callback) {
            callback(x);
        };
    }
    // idiomatic node.js would be `callback(null, x);` but let's ignore errors.
    // equivalent Haskell: pure x = \callback -> callback x

There is also a *reduction*: to say that there is "eventually eventually" a String is the same thing as saying that there is "eventually" a String:

    // reduce :: Eventually Eventually x -> Eventually x
    function reduce(d) {
        return function (callback) {
            d(function (d2) { d2(callback); });
        };
    }
    // equivalent Haskell: reduce d = \callback -> d (\d2 -> d2 callback)

But this is a special instance of a much more general fact which is that `Eventually` has a function called `bind`:

    // bind :: Eventually x -> (x -> Eventually y) -> Eventually y
    function bind(d, transform) {
        return function deferred(callback) {
            d(function (x) {
                transform(x)(callback);
            });
        };
    }
    // equivalent Haskell: d >>= transform = \cb -> d (\x -> transform x cb)

What does this let you do? It lets you take a deferred computation and feed it into another deferred computation to get one big deferred computation. In other words, we can get a deferred which corresponds to "read the file named by reading file 'filename.txt'."

    bind(fs.readFile('filename.txt', 'utf8'), function (result) {
        return fs.readFile(result, 'utf8');
    })
    // Haskell: (fsReadFile 'filename.txt' UTF8) >>= \result -> fsReadFile result UTF8

Notice that in the second term, callbacks have basically disappeared; the presence of an explicit callback is now *inferrable* because we are looking at the world in a deferred perspective. Because it has the `pure` and `bind` functions, and because they play nicely together under certain mathematical laws, we say that `Eventually` is a *monad*. Monads are *defined* by your ability to do this.

A monad is a *perspective* like Eventually with two features: you must be able to look at *every value* through that perspective, and you must be able to bind ... ? Hm. Describing *bind* is difficult.

Rearranging with `lift x y = y >>= x` you'd have `lift :: (a -> M b) -> (M a -> M b)` which suggests that you could "perspectivize" any function's input as long as its output lies in that perspective. In other words, "Any function which lifts you into the perspective can also be used within the perspective." You have to look at fs.readFile as a deferred computation, but once you're inside deferred computations, fs.readFile is a normal transformation.

So in that sense, once you lift fsReadFile, it is *synchronous* within the context, which is why you can write the "do-notation" of Haskell. 