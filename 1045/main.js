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
    let str = lines[0];
    let l = Number(lines[1]);
    let r = Number(lines[2]);
    let ans = "";

    for (let i = l; i < r; ++i) {
        ans += str[i];
    }

    console.log(ans);
}