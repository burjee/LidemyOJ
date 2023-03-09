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
    let input = lines[1].split(" ");
    let sum = input.reduce((sum, current) => Number(sum) + Number(current));
    let avg = sum / input.length;
    if (avg >= 183) {
        console.log("real");
    } else {
        console.log("fake");
    }
}