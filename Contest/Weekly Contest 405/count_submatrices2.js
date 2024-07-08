// 100359. Count Submatrices With Equal Frequency of X and Y
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function (grid) {
    let numRows = grid.length;
    let numCols = grid[0].length;
    let answer = 0;

    let dp = [];
    for (let i = 0; i < numRows; i++) {
        dp.push(new Array(numCols).fill(-100));
    }
    //console.log(dp);

    for (let i = 0; i < numRows; i++) {
        let tempSum = 0;
        for (let j = 0; j < numCols; j++) {
            dp[i][j] = 0;
            if (i === 0 && j === 0) {
                let c = grid[0][0];
                dp[0][0] += c == "X" ? 2 : c === "Y" ? -2 : 0;
                if (grid[i][j] == "X" && dp[i][j] % 2 == 0) {
                    dp[i][j]++;
                }
            } else if (i == 0) {
                let c = grid[i][j];
                dp[i][j] += dp[i][j - 1] + (c == "X" ? 2 : c === "Y" ? -2 : 0);
                if (grid[i][j] == "X" && dp[i][j] % 2 == 0) {
                    dp[i][j]++;
                }
            } else {
                dp[i][j] += dp[i - 1][j];
                let c = grid[i][j];
                tempSum += c == "X" ? 2 : c === "Y" ? -2 : 0;
                dp[i][j] += tempSum;
                if (grid[i][j] == "X" && dp[i][j] % 2 == 0) {
                    dp[i][j]++;
                }
            }

            if (dp[i][j] == 1) {
                answer++;
            }
            //console.log(i, j, dp[i][j], answer);
        }
    }
    console.log(dp);
    return answer;
};
