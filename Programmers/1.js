function solution(friends, gifts) {
    const n = friends.length;
    const friendsID = new Map();
    const giftHist = Array.from({ length: n }, () => Array(n).fill(0));
    const giftScore = new Array(n).fill(0);
    const giftNextMonth = new Array(n).fill(0);

    for (let i in friends) {
        friendsID.set(friends[i], Number(i));
    }

    for (let gift of gifts) {
        const [giver, taker] = gift.split(" ");
        const giverID = friendsID.get(giver);
        const takerID = friendsID.get(taker);
        giftHist[giverID][takerID]++;

        giftScore[giverID]++;
        giftScore[takerID]--;
    }

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (giftHist[i][j] < giftHist[j][i]) {
                giftNextMonth[j]++;
            } else if (giftHist[i][j] > giftHist[j][i]) {
                giftNextMonth[i]++;
            } else {
                // giftHist[i][j] === giftHist[j][i]
                if (giftScore[i] < giftScore[j]) {
                    giftNextMonth[j]++;
                } else if (giftScore[i] > giftScore[j]) {
                    giftNextMonth[i]++;
                }
            }
        }
    }

    return Math.max(...giftNextMonth);
}
