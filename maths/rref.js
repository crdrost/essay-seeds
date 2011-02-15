Array.prototype.mul = function (x) {
    return this.map(function (y) { return x * y; });
};
Array.prototype.pls = function (arr) {
    return this.map(function (x, i) { return x + arr[i]; });
};
Array.prototype.min = function (arr) {
    return this.map(function (x, i) { return x - arr[i]; });
};
Array.prototype.round = function () {
    return this.map(function (x) { return Math.round(1e12 * x)/1e12;});
};
Array.prototype.rref = function () {
    // copy array.
    var arr = this.map(function (x) { return x.slice(0); }),
        L = Math.min(arr.length, arr[0].length),
        i, j, r;
    for (i = 0; i < L; i += 1) {
        // swap to make sure arr[i][i] !== 0.
        r = arr.map(function (x) { return x.round(); });
        if (r[i][i] === 0) {
            for (j = i + 1; j < r.length; j += 1) {
                if (r !== true && r[j][i] !== 0) {
                    r = arr[j];
                    arr[j] = arr[i];
                    arr[i] = r;
                    r = true;
                }
            }
            if (r !== true) {
                continue;
            }
        }
        // arr[i][i] == 1.
        arr[i] = arr[i].mul(1/arr[i][i]);
        for (j = 0; j < arr.length; j += 1) {
            if (j !== i) {
                // use it to set arr[j][i] == 0.
                arr[j] = arr[j].min(arr[i].mul(arr[j][i]));
            }
        }
    }
    return arr;
};

(function (d) {
    function reduce(x, y, n) {
        return x.min(y.mul(x[n]));
    }
    var x = 20;
    var a = [12, 12.5, 23, 8.25];
    var b = [23, -1, -4, 7];
    var c = [12.5, 23, -1, x];
    a = a.mul(1/a[0]);
    b = reduce(b, a, 0);
    b = b.mul(1/b[1]);
    a = reduce(a, b, 1);
    c = reduce(c, a, 0);
    c = reduce(c, b, 1);
    c = c.mul(1/c[2]);
    a = reduce(a, c, 2); 
    b = reduce(b, c, 2); 
    //a = reduce(a, d, 3); 
    //b = reduce(b, d, 3); 
    //c = reduce(c, d, 3);
    return a.concat(b).concat(c).round();//[a[4], b[4], c[4], d[4]];
}(0))