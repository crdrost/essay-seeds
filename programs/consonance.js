function period(semitone) {
    return Math.pow(2, -semitone / 12);
}
var notes = {
    "E": 0,
    "E#": 1,
    "Fb": 0,
    "F": 1,
    "F#": 2,
    "Gb": 2,
    "G": 3,
    "G#": 4,
    "Ab": 4,
    "A": 5,
    "A#": 6,
    "Bb": 6,
    "B": 7,
    "B#": 8,
    "Cb": 7,
    "C": 8,
    "C#": 9,
    "Db": 9,
    "D": 10,
    "D#": 11,
    "Eb": 11
};
var threshold = 0.05;

function consonance2(lo, hi) {
    var i, t, n = notes[hi] - notes[lo];
    while (n < 0) {
        n += 12;
    }
    for (i = 1; i < 10000; i += 1) {
        t = period(n) * i;
        if (Math.abs(t - Math.round(t)) < threshold) {
            return i;
        }
    }
}

function consonance3(lo, md, hi) {
    var i, t1, t2, n1 = notes[md] - notes[lo], dn = notes[hi] - notes[md], n2;
    while (n1 < 0) {
        n += 12;
    }
    while (dn < 0) {
        n += 12;
    }
    n2 = n1 + dn;
    for (i = 1; i < 10000; i += 1) {
        t1 = period(n1) * i;
        t2 = period(n2) * i;
        if (Math.abs(t1 - Math.round(t1)) < threshold &&
            Math.abs(t2 - Math.round(t2)) < threshold) {
            return i;
        }
    }
}
