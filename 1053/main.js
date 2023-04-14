var readline = require('readline');

var lines = [];
var rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', function (line) {
    lines.push(line)
});

rl.on('close', function () {
    solve(lines)
});

function gogo(grid, can, i, j, h, w, ans, count) {
    if (count >= ans[i][j]) {
        return;
    }
    ans[i][j] = count;

    can[i][j] = false;
    if (j < w && grid[i][j + 1] === "." && can[i][j + 1]) {
        gogo(grid, can, i, j + 1, h, w, ans, count + 1);
    }
    if (i > 0 && grid[i - 1][j] === "." && can[i - 1][j]) {
        gogo(grid, can, i - 1, j, h, w, ans, count + 1);
    }
    if (j > 0 && grid[i][j - 1] === "." && can[i][j - 1]) {
        gogo(grid, can, i, j - 1, h, w, ans, count + 1);
    }
    if (i < h && grid[i + 1][j] === "." && can[i + 1][j]) {
        gogo(grid, can, i + 1, j, h, w, ans, count + 1);
    }
    can[i][j] = true;
}

function solve(lines) {
    let [h, w] = lines[0].split(" ").map(Number);
    let grid = lines.slice(1).map(l => l.split(""));
    let ans = Array(h).fill(null).map(() => Array(w).fill(Infinity));
    let can = Array(h).fill(null).map(() => Array(w).fill(true));
    gogo(grid, can, 0, 0, h - 1, w - 1, ans, 0);
    console.log(ans[h - 1][w - 1]);
}
