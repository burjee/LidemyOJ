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
    lines.shift();
    let nums = lines.map(n => Number(n));
    let ans = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        if (sum > ans) {
            ans = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    console.log(ans);

}