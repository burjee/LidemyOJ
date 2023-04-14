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

function binarySearch(value, arr) {
    let [l, r] = [0, arr.length - 1];
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (value === arr[m]) {
            return m;
        }
        if (value < arr[m]) {
            r = m - 1;
        } else {
            l = m + 1;
        }

    }
    return -1;
}

function solve(lines) {
    let [n, m] = lines[0].split(" ");
    n = Number(n);
    m = Number(m);

    let arr = [];
    let query = [];
    for (let i = 1; i < n + 1; ++i) {
        arr.push(Number(lines[i]));
    }
    for (let i = n + 1; i < n + m + 1; ++i) {
        query.push(Number(lines[i]));
    }
    for (let i = 0; i < query.length; ++i) {
        console.log(binarySearch(query[i], arr));
    }
}