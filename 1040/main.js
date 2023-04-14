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
    let c = lines[0];
    let n = Number(lines[1]);
    let s = lines[2];
    for (let i = 3; i < n + 2; ++i) {
        s = `${s}${c}${lines[i]}`;
    }
    console.log(s);
}