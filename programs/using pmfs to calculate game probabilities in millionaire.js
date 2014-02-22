// In making a tutorial for a /Millionaire/ style game, I wanted to do 
// probability calculations for a random "phone-a-friend" system. The idea is 
// that the wrong options will be given a score floor(random() * 10) while the
// right option will be given a score offset+floor(random() * spread). 
// 
// If the right option comes out 10 or greater, the friend says "definitely 
// that." Otherwise, for any wrong options which are score < offset, the friend 
// says "definitely not those." If either of those generates only one option,
// we say the friend is "sure". We reveal the other scores too.
//
// From a game design perspective, we want to minimize the number of sure 
// answers (to increase drama) but keep the friend reliable: that is, in at 
// least 70% of cases, the friend's score for the right option should be greater
// than (and not equal to) all the other options.

// First we calculate the actual probability that max of three rand10()s is 
// various numbers:

res = [0,0,0,0,0,0,0,0,0,0];
for (i = 0; i < 10; i++)
    for (j = 0; j < 10; j++)
        for (k = 0; k < 10; k++)
            res[Math.max(i,j,k)]++
for (i = 0; i < 10; i++)
    res[i] /= 1000;

// yielding:
three_others = [0.001, 0.007, 0.019, 0.037, 0.061, 0.091, 0.127, 0.169, 0.217, 0.271];
one_other = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1];
// here "PMF" is an acronym from probability theory, "probability mass function"
// which works the way you expect; pmf[i] is the probability of getting i.

// we'll generate a lot of PMFs for the spread/offset version too:
function pmf(spread, offset) {
    var i, o = [];
    for (i = 0; i < spread + offset; i++) o[i] = i < offset ? 0 : 1 / spread;
    return o;
}

//okay, so how do we measure how sure we are?
function sure(pmf, others) {
    var i, p = 0, p2 = 0;
    // we could be sure because we generate a result 10 or greater
    for (i = 10; i < pmf.length; i++)
        p += pmf[i];
    // otherwise we could be sure because the others are all less than the 
    // minimum score of the PMF.
    for (i = 0; i < pmf.length; i++) {
        if (pmf[i] > 0)
            break;
        p2 += others[i]; // so p2 = prob that max(i,j,k) < min_index(pmf)
    }
    return p + (1 - p) * p2;
}
// and how do we measure the probability of the phone-a-friend getting the 
// answer right?
function win(p1, p2) {
    var i, j, p = 0;
    for (i = 0; i < p1.length; i++) // phone-a-friend says i
        for (j = 0; j < Math.min(i, p2.length); j++) // max(other_contestants) is some j < i.
            p += p1[i] * p2[j];
    return p
}

// so now we look at all the win-rates > 0.7 and find the minimum sure-rate.
res = [];
for(offset = 0; offset < 10; offset++) {
    for(spread = 1; spread < 100; spread++) {
        p = win(pmf(spread, offset), three_others);
        if (p >= 0.7)
            res.push([sure(pmf(spread, offset), three_others), p, spread, offset])
    }
}
// we sort by least-sure and take the lowest 12 as options for me to choose from
console.log(res.sort(function (x, y) { return x[0] - y[0]; }).slice(0,12));