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
    let array = lines[1].split(" ");
    let scale = array[1] / array[0];
    for (let i = 1; i < array.length - 1; ++i) {
        if (array[i + 1] / array[i] !== scale) {
            console.log("No");
            return;
        }
    }
    console.log("Yes");
}