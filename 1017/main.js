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

function solve(lines) {
    let n = Number(lines[0]);
    let m = Number(lines[1]);
    let p = [];
    for (let i = 2; i < 2 + m; ++i) {
        p.push(Number(lines[i]));
    }
    p.sort((a, b) => b - a);
    console.log((p.slice(0, n) || []).reduce((s, c) => s + c, 0));
}