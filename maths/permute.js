function tc(str) {
    var a = str[0], b = str[1], c = str[2];
    return a + b + c + " + " + c + b + a + " - " + a + c + b + " - " + b + c + a;
}
function permute(str) {
    if (str.length <= 1) return [str];
    var out = [], 
        char = str[0],
        subset = permute(str.slice(1)), 
        i, j,
        L = subset[0].length;
    for(i = 0; i < str.length; i += 1) {
        for (j = 0; j < subset.length; j += 1) {
            out.push(subset[j].slice(0, i) + char + subset[j].slice(i));
        }
    }
    return out;
}

permute("abc")