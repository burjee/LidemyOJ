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

function getNiceNumber(n) {
    let niceNumber = 1;
    for (let i = 2; i <= n / 2; ++i) {
        if (n % i === 0) {
            niceNumber += i;
        }
    }
    return niceNumber;
}

function solve(lines) {
    for (let i = 0; i < lines.length; ++i) {
        if (lines[i] == 0) return;
        let niceNumber1 = getNiceNumber(lines[i]);
        let niceNumber2 = getNiceNumber(niceNumber1);
        if (niceNumber2 == lines[i]) {
            console.log(niceNumber1);
        } else {
            console.log("QQ");
        }

    }
}