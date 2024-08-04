/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
    let answer = [];
    let graph = Array(n)
        .fill()
        .map(() => []);

    for (let i = 0; i < n - 1; i++) {
        graph[i].push(i + 1);
    }
    for (let [u, v] of queries) {
        graph[u].push(v); // 새 도로 추가
        answer.push(bfs(graph, n));
    }
    console.log(answer);
    return answer;
};

function bfs(graph, n) {
    let queue = [[0, 0]];
    let visited = new Array(n).fill(false);
    visited[0] = true;

    while (queue.length > 0) {
        let [node, distance] = queue.shift();
        if (node === n - 1) return distance;
        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push([neighbor, distance + 1]);
            }
        }
    }
    return -1;
}
