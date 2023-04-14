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

// 97 - 122
function solve(lines) {
    let n = Number(lines[0]);
    let s = lines[1];
    let ans = [];
    for (let i = 0; i < s.length; ++i) {
        let ascii = (s[i].charCodeAt() - 97 + n) % 26 + 97;
        ans.push(ascii);
    }
    console.log(String.fromCharCode(...ans));
}