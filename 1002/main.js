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
    for (let i = 0; i < lines.length; ++i) {
        let tmp = lines[i].split(' ');
        if (tmp[0] > tmp[1]) {
            console.log(tmp[0]);
        } else if (tmp[0] < tmp[1]) {
            console.log(tmp[1]);
        } else {
            if (tmp[0] != 0) {
                console.log(tmp[0]);
            }
        }
    }
}