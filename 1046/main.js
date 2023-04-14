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

const w = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function solve(lines) {
    let input = lines.join("").split("");
    for (let i = 0; i < w.length; ++i) {
        let a = input[w[i][0]];
        let b = input[w[i][1]];
        let c = input[w[i][2]];
        if (a === b && b === c) {
            console.log(a);
            return;
        }
    }
    console.log("DRAW");
}