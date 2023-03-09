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

function is_prime(m) {
    for (let i = 2; i <= m / 2; ++i) {
        if (m % i === 0) {
            console.log("Composite");
            return;
        }
    }
    console.log("Prime");
}

function solve(lines) {
    let n = Number(lines[0]);
    for (let i = 1; i < n + 1; ++i) {
        let m = Number(lines[i]);
        if (m === 1) {
            console.log("Composite");
        } else {
            is_prime(m);
        }
    }

}