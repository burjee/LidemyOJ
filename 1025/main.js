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

function is_narcissistic(n) {
    let digital = Math.floor(Math.log10(n)) + 1;
    let m = n;
    let k = 0;
    while (n > 0) {
        k += Math.pow(n % 10, digital);
        n = Math.floor(n / 10);
    }
    return m === k;
}

function solve(lines) {
    let [n, m] = lines[0].split(" ");
    for (let i = Number(n); i <= Number(m); ++i) {
        if (is_narcissistic(i)) {
            console.log(i);
        }
    }
}