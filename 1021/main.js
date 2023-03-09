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
    for (let i = 1; i < n + 1; ++i) {
        let str = Array(i).fill("*").join("");
        console.log(str);
    }
}