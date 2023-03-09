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
    let floor = lines[0];
    let fib = [0, 1];
    for (let i = 2; i <= floor; ++i) {
        let n = fib[i - 1] + fib[i - 2];
        fib.push(n);
    }
    console.log(fib[floor]);
}

/**
 * 
1, 2, 3, 4, 5, 6, 7, 8, 10, 11
12, 13, 14, 15, 16, 17, 18, 20, 21, 22
23, 24, 25, 26, 27, 28, 30, 31, 32, 33
34 35 36 37 38 40 41 42 43 44
45 46 47 48 50 51 52 53 54 55
56 57 58 60 61 62 63 64 65 66
67 68 70 71 72 73 74 75 76 77
78 80 81 82 83 84 85 86 87 88
100
90 91 92 93 94 95 96 97 98 100
 */