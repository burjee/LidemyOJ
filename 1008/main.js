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
    let ans = 0;
    while (n > 0) {
        ans += n & 1;
        n = n >> 1;
    }
    console.log(ans);
}