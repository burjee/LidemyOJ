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
    let a = Number(lines[0]);
    let b = Number(lines[1]);
    let max = Math.max(a, b) * 2;
    let lose = max - a - b;
    console.log(max);
    console.log(lose);
}