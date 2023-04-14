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
    let target = Number(lines[0]);
    let n = Number(lines[1]);
    for (let i = 0; i < n; ++i) {
        console.log(target);
    }
}