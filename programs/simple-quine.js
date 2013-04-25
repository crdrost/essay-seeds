
// really cheap version
function self() { return "" + self; }

// but what if JS didn't allow us to turn functions into strings?
function quine() {
    var data = ["function quine() {\n    var data = ",";\n    return data[0] + JSON.stringify(data) + data[1];\n}"];
    return data[0] + JSON.stringify(data) + data[1];
}

// above the comma represents the Emptiness about which the quine is formed,
// but it does not have to be a character; it can be the emptiness between two
// characters too, in this case the nothingness between ` ` and `;`:

function q() {
    var s = "function q() {\n    var s = ;\n    return s.slice(0, 28) + JSON.stringify(s) + s.slice(28);\n}";
    return s.slice(0, 27) + JSON.stringify(s) + s.slice(27);
}
