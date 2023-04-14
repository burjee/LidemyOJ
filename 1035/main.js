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
    lines.shift();
    lines.map(n => Number(n)).sort((a, b) => a - b).forEach(n => console.log(n));
}