import Prelude
import Data.Sequence hiding (length, reverse)
import Data.Foldable (toList)
-- Trits can be either the -1 = N, 0 = Z, or +1 = P.
data Trit =  N | Z | P deriving (Eq, Ord, Show)

-- a number made of trits. We uniquely represent zero and for all other trits
-- we pull the most significant bit out into the data structure, so that every
-- number has exactly one representation as a TInt. This lets us derive Eq.
data TInt = Neg !(Seq Trit) | Zero | Pos !(Seq Trit) deriving (Eq)

seq_from_tint :: TInt -> Seq Trit
seq_from_tint (Neg x) = N <| x
seq_from_tint Zero = singleton Z
seq_from_tint (Pos x) = P <| x

newtype LE x = LE [x] deriving (Show) -- big & little endian views of the data.
newtype BE x = BE [x] deriving (Show)

tint_from_be :: BE Trit -> TInt
tint_from_be (BE xs) = convert xs where
    convert [] = Zero
    convert (Z:xs) = convert xs
    convert (N:xs) = Neg $ fromList xs
    convert (P:xs) = Pos $ fromList xs

tint_from_le :: LE Trit -> TInt
tint_from_le (LE xs) = tint_from_be $ BE $ reverse xs

le_from_tint :: TInt -> LE Trit
le_from_tint = LE . reverse . toList . seq_from_tint

-- We could just compare the Data.Sequence.length but that's a little cheating
-- since these TInts are supposed to be a replacement to the Integer type; why
-- use an Int as part of the implementation?
compareLengths a b = compareListLengths (toList a) (toList b) where
    compareListLengths [] [] = EQ
    compareListLengths (_:_) [] = GT
    compareListLengths [] (_:_) = LT
    compareListLengths (_:xs)(_:ys) = compareListLengths xs ys

instance Ord TInt where
    compare (Neg a) (Neg b) = case compareLengths a b of LT -> GT; GT -> LT; EQ -> compare a b
    compare (Pos a) (Pos b) = case compareLengths a b of LT -> LT; GT -> GT; EQ -> compare a b
    compare (Neg _) _ = LT
    compare Zero (Neg _) = GT
    compare Zero Zero = EQ
    compare Zero (Pos _) = LT
    compare (Pos _) _ = GT

instance Show TInt where
    show = map tochar . toList . seq_from_tint where
        tochar N = '\\'
        tochar Z = '-'
        tochar P = '/'



-- the "half adder" for two trits
haddr Z x = (Z, x)
haddr x Z = (Z, x)
haddr N N = (N, P)
haddr N P = (Z, Z)
haddr P N = (Z, Z)
haddr P P = (P, N)

-- the "full adder" for two trits
faddr a b c = (c', x) where
    (c1, m) = haddr a b
    (c2, x) = haddr m c
    (_, c') = haddr c1 c2

-- internal addition of two trit-based numbers
add :: LE Trit -> LE Trit -> LE Trit
add (LE xs) (LE ys) = LE $ addc Z xs ys where
    -- loop to add with carry through a little-endian view.
    addc c [] xs = carry_add c xs
    addc c xs [] = carry_add c xs
    addc c (x : xs) (y : ys) = z : addc c' xs ys where
        (c', z) = faddr x y c
    -- loop to add a carry through the remainder of a little-endian view with half-adders
    carry_add Z xs = xs
    carry_add c [] = [c]
    carry_add c (x : xs) = y : carry_add c' xs where
        (c', y) = haddr c x


-- internal inversion of two trit-based numbers.
ti_inv :: (Functor f) => f Trit -> f Trit
ti_inv xs = fmap trit_inv xs where
    trit_inv N = P
    trit_inv Z = Z
    trit_inv P = N

mult :: LE Trit -> LE Trit -> LE Trit
mult (LE xs) (LE ys) = go xs ys (LE [Z]) where
    go :: [Trit] -> [Trit] -> LE Trit -> LE Trit
    go xs [] acc = acc
    go xs (y:ys) acc = go (Z:xs) ys acc' where
        acc' = case y of
                N -> add (LE $ ti_inv xs) acc
                Z -> acc
                P -> add (LE xs) acc

instance Num TInt where
    x + y = tint_from_le (le_from_tint x `add` le_from_tint y)
    x * y = tint_from_le (le_from_tint x `mult` le_from_tint y)
    negate (Neg xs) = Pos (ti_inv xs)
    negate Zero = Zero
    negate (Pos xs) = Neg (ti_inv xs)
    signum (Neg xs) = Neg empty
    signum (Pos xs) = Pos empty
    signum Zero = Zero
    abs (Neg xs) = Pos (ti_inv xs)
    abs x = x
    fromInteger = tint_from_le . LE . convert where
        convert n = let (d, m) = divMod n 3 in case m of
                    0 -> Z : if d == 0 then [] else convert d
                    1 -> P : if d == 0 then [] else convert d
                    2 -> N : if d == -1 then [] else convert (d + 1)

instance Enum TInt where
    toEnum = fromInteger . toInteger
    fromEnum = fromInteger . num_val . le_from_tint where
        num_val (LE list) = go 0 1 list where
            dig N = -1
            dig Z = 0
            dig P = 1
            go sum mult [] = sum
            go sum mult (x : xs) = go (sum + mult * dig x) (mult * 3) xs

astn :: String -> Maybe TInt
astn = fmap convert . sequence . reverse . map trit where
    trit '\\' = Just N
    trit '-' = Just Z
    trit '/' = Just P
    trit _ = Nothing
    convert xs = tint_from_be $ BE $ xs
