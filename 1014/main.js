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
    // console.log(parseInt(n, 9));
    let l = 0;
    let ans = 0;
    while (n > 0) {
        let p = Math.pow(9, l);
        let m = n % 10;
        ans += p * m;
        l += 1;
        n = Math.floor(n / 10);
    }
    console.log(ans);
}