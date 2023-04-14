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

/**
 * @param {any} grid 迷宮
 * @param {any} can 能不能走
 * @param {any} i 座標 i
 * @param {any} j 座標 j
 * @param {any} h 迷宮高度，也可以用grid.length代替
 * @param {any} w 迷宮寬度，也可以用grid[0].length代替
 * @param {any} ans 最小步數
 * @param {any} count 到現在的座標走了幾步
 */
function gogo(grid, can, i, j, h, w, ans, count) {
    // 抵達這一格的時候，如果目前使用的步數 >= 之前的使用步數，不走了，這是在繞遠路
    if (count >= ans[i][j]) {
        return;
    }

    // 沒走過的路(Infinity)，或是步數比之前還少
    // 儲存這一格的最小步數
    ans[i][j] = count;

    // 這一格走過了，之後不能走
    can[i][j] = false;

    // 隨便爬爬造
    // 在迷宮內，不是牆壁，沒有走過，出發
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

    // 這一格的衍生道路上面都走完了，變回可以走，讓下一格的衍生道路可以走
    can[i][j] = true;
}

function solve(lines) {
    // 高, 寬
    let [h, w] = lines[0].split(" ").map(Number);

    // 迷宮本人
    let grid = lines.slice(1).map(l => l.split(""));

    // 最小步數，求出到迷宮每一格的最小步數，全部初始化為無限大
    // 跟迷宮一樣寬高
    let ans = Array(h).fill(null).map(() => Array(w).fill(Infinity));

    // 可不可以走，如果之前走過了會設為false
    // 跟迷宮一樣寬高
    let can = Array(h).fill(null).map(() => Array(w).fill(true));

    // 開始走迷宮
    gogo(grid, can, 0, 0, h - 1, w - 1, ans, 0);

    // 印出出口的最小步數
    console.log(ans[h - 1][w - 1]);
}
