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
    let x = lines[1].split(" ").map(n => Number(n));
    let y = lines[2].split(" ").map(n => Number(n));

    let ans = 2147483647;
    let ix = 0;
    let iy = 0;
    let ex = x.length - 1;
    let ey = y.length - 1;

    while (ix <= ex && iy <= ey) {
        let distance = Math.abs(x[ix] - y[iy]);
        ans = Math.min(ans, distance);

        if (x[ix] > y[iy]) {
            iy += 1;
        } else {
            ix += 1;
        }
    }

    for (let i = ix; i <= ex; ++i) {
        let distance = Math.abs(x[i] - y[ey]);
        ans = Math.min(ans, distance);
    }

    for (let i = iy; i <= ey; ++i) {
        let distance = Math.abs(x[ex] - y[i]);
        ans = Math.min(ans, distance);
    }

    console.log(ans);

}