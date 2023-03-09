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
    let number = lines[0].split(" ").join("");
    while (number.length > 1) {
        let sum = 0;
        for (let i = 0; i < number.length; ++i) {
            sum += Number(number[i]);
        }
        number = sum.toString();
    }
    console.log(number);
}