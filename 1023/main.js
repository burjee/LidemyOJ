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
    for (let i = 1; i <= n; ++i) {
        let str0 = Array(n - i).fill(" ").join("");
        let str1 = Array(i * 2 - 1).fill("*").join("");
        console.log(str0 + str1);
    }
    let root = Array(n - 1).fill(" ").join("") + "|";
    for (let i = 0; i < n - 1; ++i) {
        console.log(root);
    }
}