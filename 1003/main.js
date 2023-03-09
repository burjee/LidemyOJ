var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

var lines = [];

rl.on('line', function (line) {
    lines.push(line)
});

rl.on('close', function () {
    solve(lines)
})

function solve(lines) {
    let str = "";
    let strAmount = lines.shift();
    for (let i = 0; i < strAmount; ++i) {
        str += lines.shift();
    }

    let charIndex = [];
    let charAmount = lines.shift();
    for (let i = 0; i < charAmount; ++i) {
        charIndex.push(lines.shift());
    }

    let ans = "";
    for (let i = 0; i < charIndex.length; ++i) {
        ans += str[charIndex[i] - 1];
    }

    console.log(ans);
}