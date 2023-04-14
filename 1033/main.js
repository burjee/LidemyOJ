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

function getDistance(x1, x2, y1, y2) {
    return (((x1 - x2) ** 2) + ((y1 - y2) ** 2)) ** 0.5;
}

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

function solve(lines) {
    let n = Number(lines[0]);
    let dots = [];
    for (let i = 1; i <= n; ++i) {
        let dot = lines[i].split(" ");
        dots.push(dot.map(e => Number(e)));
    }

    let min = Infinity;
    let a;
    let b;
    for (let i = 0; i < dots.length; ++i) {
        let [x1, y1] = dots[i];
        for (let j = i + 1; j < n; ++j) {
            let [x2, y2] = dots[j];
            let distance = getDistance(x1, x2, y1, y2);
            if (distance < min) {
                a = i;
                b = j;
                min = distance;
            }
        }
    }

    if (dots[a][1] > dots[b][1]) {
        [a, b] = swap(a, b);
    }
    if (dots[a][0] > dots[b][0]) {
        [a, b] = swap(a, b);
    }

    console.log(dots[a].join(" "));
    console.log(dots[b].join(" "));
}