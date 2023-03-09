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
    let stairs = lines[1].split(" ");
    stairs.push("0");

    let count = 0;
    let level = stairs[0];
    let ans = 0;

    stairs.forEach(stair => {
        if (stair === level) {
            count += 1;
        } else {
            ans = Math.max(ans, count);
            count = 1;
            level = stair;
        }
    });
    console.log(ans);
}