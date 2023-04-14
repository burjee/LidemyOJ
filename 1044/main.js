var readline = require('readline');

var lines = []
var rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', function (line) {
    lines.push(line)
});

rl.on('close', function () {
    solve(lines)
})

let point = 0;
function nextChar(str) {
    let c = str[point];
    point = (point + 1) % str.length;
    return c;
}

function solve(lines) {
    let str = lines[0];
    let len = Number(lines[1]);
    let pad = lines[2];

    if (len > str.length) {
        let delta = len - str.length;
        for (let i = 0; i < delta; ++i) {
            str += nextChar(pad);
        }
    }

    console.log(str);
}