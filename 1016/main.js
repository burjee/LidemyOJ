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
    let vote = { "A": [], "B": [] };
    for (let i = 1; i < 1 + n; ++i) {
        vote[lines[i]].push(i);
    }
    let a = vote.A.length;
    let b = vote.B.length;
    if (a === 0 || b === 0 || (a === b)) {
        console.log("PEACE");
    } else if (a < b) {
        vote.A.forEach(v => console.log(v));
    } else {
        vote.B.forEach(v => console.log(v));
    }
}