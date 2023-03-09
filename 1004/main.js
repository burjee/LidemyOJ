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

function judge(rule, larger, smaller) {
    if (rule == 1) console.log(larger);
    else console.log(smaller);
    return false;
}

function solve(lines) {
    let len = lines[0];
    for (let i = 1; i <= len; ++i) {
        let tmp = lines[i].split(' ');
        if (tmp[0].length > tmp[1].length) {
            judge(tmp[2], "A", "B");
        } else if (tmp[0].length < tmp[1].length) {
            judge(tmp[2], "B", "A");
        } else {
            let flag = true;
            for (let j = 0; j < tmp[0].length; ++j) {
                if (tmp[0][j] > tmp[1][j]) {
                    flag = judge(tmp[2], "A", "B");
                    break;
                } else if (tmp[0][j] < tmp[1][j]) {
                    flag = judge(tmp[2], "B", "A");
                    break;
                }
            }
            if (flag) console.log("DRAW");
        }
    }
}