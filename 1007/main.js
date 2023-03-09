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
    let vec = [{ name: "", score: -1 }];
    let len = Number(lines[0]);
    for (let i = 1; i < 1 + len; ++i) {
        let [name, score] = lines[i].split(" ");
        if (score > vec[0].score) {
            vec = [];
            vec.push({ name, score });
        } else if (score == vec[0].score) {
            vec.push({ name, score });
        }
    }
    for (let i = 0; i < vec.length; ++i) {
        console.log(vec[i].name);
    }
}