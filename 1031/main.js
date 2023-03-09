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
    let max = Number(lines[0]);
    let sum = 1;
    for (let i = 2; i < max; ++i) {
        let square = i * i;
        if (square > max) {
            break;
        }
        sum += square;
    }
    console.log(sum);
}