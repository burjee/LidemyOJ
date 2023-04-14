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
    let str = lines[0];
    let end = lines[1];
    let delta = str.length - end.length;
    if (delta < 0) {
        console.log("false");
        return;
    }
    for (let i = 0, j = delta; i < end.length; ++i, ++j) {
        if (str[j] !== end[i]) {
            console.log("false");
            return;
        }
    }
    console.log("true");
}