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
    let set = new Set();
    let amount = Number(lines[0]);
    let used = Number(lines[1]);
    let ans = 1 + (amount / 2 - 1) * 3;
    for (let i = 2; i < 2 + used; ++i) {
        let n = Number(lines[i]);
        set.add(Number(n));
        ans -= 3;
        if ((n - 2) <= 0) {
            ans += 1;
        }
        if ((n + 2 > amount)) {
            ans += 1;
        }
        let x = 1;
        if (n % 2 === 0) {
            x = -1;
        }
        if (set.has(n + x)) {
            ans += 1;
        }
        if (set.has(n + 2)) {
            ans += 1;
        }
        if (set.has(n - 2)) {
            ans += 1;
        }
    }
    console.log(ans);
}