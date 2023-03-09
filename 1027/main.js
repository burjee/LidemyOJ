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
    let card = { "4": "VISA", "5": "MASTER_CARD" };
    let number = lines[0].split("-").join("");
    let odd = 0;
    let even = 0;
    for (let i = 0; i < 16; i += 2) {
        let n = Number(number[i]) * 2;
        if (n > 9) {
            n -= 9;
        }
        odd += n;
    }
    for (let i = 1; i < 15; i += 2) {
        even += Number(number[i]);
    }
    let check = (odd + even) % 10;
    if (check !== 0) {
        check = 10 - check;
    }
    if (check == number[15]) {
        console.log(card[number[0]]);
    } else {
        console.log("INVALID");
    }
}