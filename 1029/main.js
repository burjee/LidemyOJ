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
    let [a, symbol, b] = lines[0].split(" ");
    a = Number(a);
    b = Number(b);
    if (symbol === "+") {
        console.log(a + b);
    } else if (symbol === "-") {
        console.log(a - b);
    } else if (symbol === "*") {
        console.log(a * b);
    } else {
        console.log(a / b);
    }
}