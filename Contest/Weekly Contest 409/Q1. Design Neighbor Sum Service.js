/**
 * @param {number[][]} grid
 */
var neighborSum = function (grid) {
    this.n = grid.length;
    this.adjacentSums = new Array(this.n * this.n).fill(0);
    this.diagonalSums = new Array(this.n * this.n).fill(0);

    const adjacentDirections = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
    ];
    const diagonalDirections = [
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1],
    ];

    for (let i = 0; i < this.n; i++) {
        for (let j = 0; j < this.n; j++) {
            const value = grid[i][j];
            for (let k = 0; k < 4; k++) {
                const [dy, dx] = adjacentDirections[k];
                const [ty, tx] = [i + dy, j + dx];
                if (0 <= ty && ty < this.n && 0 <= tx && tx < this.n) {
                    this.adjacentSums[value] += grid[ty][tx];
                }
            }
            for (let k = 0; k < 4; k++) {
                const [dy, dx] = diagonalDirections[k];
                const [ty, tx] = [i + dy, j + dx];
                if (0 <= ty && ty < this.n && 0 <= tx && tx < this.n) {
                    this.diagonalSums[value] += grid[ty][tx];
                }
            }
        }
    }
};

/**
 * @param {number} value
 * @return {number}
 */
neighborSum.prototype.adjacentSum = function (value) {
    return this.adjacentSums[value];
};

/**
 * @param {number} value
 * @return {number}
 */
neighborSum.prototype.diagonalSum = function (value) {
    return this.diagonalSums[value];
};

/**
 * Your neighborSum object will be instantiated and called as such:
 * var obj = new neighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */
