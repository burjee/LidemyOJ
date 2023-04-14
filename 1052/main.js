var readline = require('readline');

var lines = [];
var rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', function (line) {
    lines.push(line)
});

rl.on('close', function () {
    solve(lines)
});

function solve(lines) {
    let [n, m] = lines[0].split(" ").map(Number);
    let item = lines.slice(1).map(e => e.split(" ").map(Number));
    let ans = Array(m + 1).fill(0);
    for (let i = 0; i < n; ++i) {
        for (let j = m; j >= item[i][0]; --j) {
            ans[j] = Math.max(ans[j], item[i][1] + ans[j - item[i][0]]);
        }
    }
    console.log(ans[m]);
}
