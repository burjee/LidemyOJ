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
    let n = Number(lines.shift());
    for (let i = 0; i < n; ++i) {
        let x1 = Number(lines.shift());
        let y1 = Number(lines.shift());
        let x2 = Number(lines.shift());
        let y2 = Number(lines.shift());
        let distance = (((x1 - x2) ** 2) + ((y1 - y2) ** 2)) ** 0.5;
        console.log(distance.toFixed(2));
    }
}