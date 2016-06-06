Suppose I am writing a spreadsheet program.

Users script the individual columns, maybe say that this one is equal to RANDOM() * A2.
Now I want to get the idea that this value is most certainly predicated on the RANDOM() function,
which is not deterministic but uses global state, so I want to lock the spreadsheet column and provide
a little button to update this column (so that I don't overwrite someone's work-in-progress) and make
the data in the column grayed-out by default. And I want to do this in Haskell so that I can have some
infinitely long columns without worrying about what they contain, etc.

What I want is basically to have an Effects Monoid, since I need this at runtime...

    data JSON = Null | Yes | No | List [JSON] | Object (Map Text JSON) | Number Double | String Text

    data Effects = Effects {random :: Bool, io :: Bool, multivalue :: Bool, nullable :: Bool, 
                            state :: Map Text JSON}
            deriving (Eq, Show, Ord)

    instance Monoid Effects where
        mempty = Effects False False False False Nothing
        mappend (Effects r1 i1 m1 n1 s1) (Effects r2 i2 m2 n2 s2) 
            = Effects (r1 && r2) (i1 && i2) (m1 && m2) (n1 && n2) (Map.union s1 s2)

Then I want to build up an Effectful expression...

    data Effectful x = Effectful Effects (IO ([State (RandomGen, JSON) (Maybe x)]))

And the latter can be a monad. By elaborately writing a few primitives in this context you can tag
each function that is e.g. nondeterministic-random, while compacting that info from the typechecker's
perspective. Each cell can have a JSON data structure inside of it; we might want to declare that
columns have a consistent structure or so, then that could appear at the type level.

Of course with multivalue each column is secretly a [JSON] rather than a JSON, representing parallel
values in parallel worlds. Would be nice to give the same RandomGen to all of these parallel worlds,
maybe. It'd just be nice that you can take some spreadsheet and in one cell put a term `parallel 0 1`
and magically everything gets updated to its value when x=0 or when x=1. Another term can look like
`postSelect (==2)` and it can magically collapse these intermediary values or something.

Then each cell/column is presumably a signal in some Reactive context. We could maybe even push 
column dependencies into the Effects so that we could do cycle detection, but cycles are only a bad
thing if they do not recurse properly; mutual recursion is OK as long as the data structures simplify
eventually...
