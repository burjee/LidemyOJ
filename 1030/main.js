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
    if (lines[0] === lines[0].split("").reverse().join("")) {
        console.log("True");
    } else {
        console.log("False");
    }
}