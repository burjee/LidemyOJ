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
    let used = lines.slice(2);
    let set = new Set(used.map(e => Number(e)));

    let n = Number(lines[0]);
    let ans = -1;

    for (let i = 1; i < n; ++i) {
        if (set.has(i)) continue;

        if (!set.has(i + 2)) {
            ans += 1;
        }
        if (i % 2 === 1 && !set.has(i + 1)) {
            ans += 1;
        }
    }

    console.log(ans);
}