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

function helper(arr) {
    let count = 0;
    mergeSort(arr);
    return count;

    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        let m = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, m));
        let right = mergeSort(arr.slice(m));
        return merge(left, right);
    }

    function merge(left, right) {
        let arr = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr.push(left[i]);
                i += 1;
            } else {
                arr.push(right[j]);
                j += 1;
                count += left.length - i;
            }
        }
        while (i < left.length) {
            arr.push(left[i]);
            i += 1;
        }
        while (j < right.length) {
            arr.push(right[j]);
            j += 1;
            count += left.length - i;
        }
        return arr;
    }
}

// 排序法的交換位置次數就是答案
// 因此挑選穩定的排序法可以加速
function solve(lines) {
    let nums = lines[1].split(" ").map(n => Number(n));
    console.log(helper(nums));
}

function solve2(lines) {
    let nums = lines[1].split(" ").map(n => Number(n));
    let ans = 0;
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[i] > nums[j]) {
                ans += 1;
            }
        }
    }
    console.log(ans);
}