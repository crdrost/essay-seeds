/*
Given a list of N coins, their values (V1, V2, ... , VN), and the total sum S. 
Find the minimum number of coins the sum of which is S (we can use as many 
coins of one type as we want), or report that it's not possible to select coins
in such a way that they sum up to S. 
*/

function rev_sort(list) {
    return list.slice(0).sort().reverse();
}

function min_coins(list, sum) {
    return min_coins_work(rev_sort(list), sum);
}

function min_coins_work(list, sum) {
    // recursive algorithm. Base case: 
    if (sum === 0) {
        return 0;
    }
    // otherwise reduce the problem by trying to subtract the coins in 
    // decreasing value from the sum.
    var i, x;
    for (i = 0; i < list.length; i += 1) {
        if (sum - list[i] >= 0) {
            x = min_coins_work(list, sum - list[i]);
            if (x !== "error") {
                return x + 1;
            }
        }
    }
    // if you reach the end of the coins list without finding anything, this
    // path has failed, return error.
    return "error";
}




/*
    This is my original scratchpad for this problem.
    Basically I was doing a slightly more complicated version of the problem,
    where you also return what coins were used. That requires keeping track of
    inputs and so forth.
    
    Apparently the dynamic programming approach calculates this recursive 
    structure *iteratively*.
 
function rev_sort(list) {
    // data structure. Reverses the array by value, storing this in r[i].val, 
    // while keeping information about the original indices at r[i].index.
    var ls = list.map(function (a, b) {
        return {val: a, index: b};
    });
    ls.sort(function (a, b) {
        return a.val > b.val ? -1 : 1;
    });
    return ls;
}

function min_coins(list, sum) {
    // Solves the question, "if I have a list of coin values and a sum which I
    // have to produce, what is the fewest number of total coins that I can use
    // to evenly produce that sum?
    
    var y = min_coins_work(rev_sort(list), sum, 0);
    
    if (y === "error") {
        throw "Error on min_coins(" + JSON.stringify(list) + "," + sum + 
            "): no such arrangement possible.";
    }
    return y;
}

function min_coins_work(list, sum, min) {
    // recursive algorithm. Base case: 
    if (sum === 0) {
        return list.map(function () { return 0; });
    }
    // otherwise reduce the problem by trying to subtract the coins in 
    // decreasing value from the sum.
    var i, x;
    for (i = min; i < list.length; i += 1) {
        if (sum - list[i].val < 0) {
            min += 1; // for recursive calls, don't consider coins too large.
        } else {
            x = min_coins_work(list, sum - list[i].val, min);
            if (x !== "error") {
                x[list[i].index] += 1;
                return x;
            }
        }
    }
    // if you reach the end of the coins list without finding anything, this
    // path has failed, return error.
    return "error";
}
*/