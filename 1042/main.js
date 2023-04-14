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
    let str = lines[0];
    let ans = "";
    for (let i = 0; i < str.length; ++i) {
        let ascii = str[i].charCodeAt();
        if (ascii >= 65 && ascii <= 90) {
            ascii += 32;
            ans += String.fromCharCode(ascii);
        } else {
            ans += str[i];
        }
    }
    console.log(ans);
}