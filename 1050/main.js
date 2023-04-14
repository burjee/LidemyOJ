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
    let target = Number(lines[0].split(" ")[1]);
    let nums = lines[1].split(" ").map(n => Number(n));
    let map = new Map();

    for (let i = 0; i < nums.length; ++i) {
        let half = target - nums[i];
        if (map.has(half)) {
            console.log(`${map.get(half)} ${i}`);
            return;
        }
        map.set(nums[i], i);
    }
}