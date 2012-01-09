// The UTC date begins at 12:00 AM, this date begins at 6:00 AM.
// Thus if the time is between 12:00 midnight and 6:00 AM

function round(n, c) {
    return Math.round(n/c)*c;
}
function pad(x, n) {
    return x.length >= n ? "" + x : pad("0" + x, n - 1);
}
function tz(date) {
    var t = round(date.getTimezoneOffset()/-1.44 + 500, 50),
        dayfrac = date.getTime() / 86400000;
        ki = secs /
    return [ki, t];
}
    (24 * 60 + 11)/(2.4 * 60)

// the above doesn't seem to pass a sanity check just yet.

// here's how to convert gmt into [h, m, s].
function hms(date) {
    var x = (date.getTime() / 86400000) % 1;
        x *= 86400;
    var s = Math.round(x) % 60,
        m = Math.floor(x/60) % 60,
        h = Math.floor(x/3600);
    return [h, m, s];
}

// getTime() is in UTC millis, so at 9:30 AM this gives 
// [7, 30, 0]. 

// Similar to us being at +120 minutes I expect us to be
// right now at UTC+100 ki, which is really +600 in the 
// new system. The date should therefore be written:
//     "2011-07-25 145.833 z600"
// The official related time at z0 is:
//     "2011-07-24 545.833 z0"
// Note also that JS supports both new Date(ms) and 
// new Date(y, o, d, h, m, s).
// So what we're saying here is:
//
//    rational_time(new Date(2011, 7, 25, 9, 30, 0))
//    "2011-07-25 145.833 z600"
//
// the above gives 300-something instead of 150-something.