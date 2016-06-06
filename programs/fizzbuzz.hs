import Data.Maybe (catMaybes)
import Data.Monoid (Monoid, mconcat)

-- the abstract fizzbuzz pattern where "fns" is the list of special case
-- functions and d_fn is what to do "by default" if none of them match.
gen_fizzbuzz :: (Monoid m) => [x -> Maybe m] -> (x -> m) -> [x] -> m
gen_fizzbuzz fns d_fn xs = do
    x <- xs
    let special = catMaybes $ map ($ x) fns
    return $ case special of [] -> d_fn x
                             _  -> mconcat special

make x fn a = if fn a then Just x else Nothing

-- meant to be used infix; n `divides` m iff m `mod` n == 0.
divides n m = m `mod` n == 0

main = putStrLn $ unlines $ fizzbuzz where
    fizzbuzz = gen_fizzbuzz [make "Fizz" (3 `divides`), make "Buzz" (5 `divides`)]
                            show
                            [1..100]
