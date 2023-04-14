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
    let l = 0;
    let r = str.length - 1;
    while (l <= r && str[l] === " ") {
        l += 1;
    }
    while (l < r && str[r] === " ") {
        r -= 1;
    }
    console.log(str.slice(l, r + 1));
}