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
    let [w, h] = lines[0].split(" ");
    let [x, y] = [0, 1];
    let state = 5;
    let ans = 0;
    while (true) {
        if (x == w - 1 && y == h) {
            break;
        }
        if (lines[y][x + 1] === "." && state !== 4) {
            state = 6;
            x += 1;
        } else if (lines[y][x - 1] === "." && state !== 6) {
            state = 4;
            x -= 1;
        } else if (lines[y + 1][x] === "." && state !== 2) {
            state = 8;
            y += 1;
        } else if (lines[y - 1][x] === "." && state !== 8) {
            state = 2;
            y -= 1;
        }
        ans += 1;
    }
    console.log(ans);
}