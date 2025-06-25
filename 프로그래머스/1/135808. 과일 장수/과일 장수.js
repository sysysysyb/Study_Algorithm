function solution(k, m, score) {
    // [4,4,4, 4,4,4, 2,2,2, 2,1,1] -> 4 4 2 1
    score.sort((a, b) => b - a);
    
    let maxSum = 0;
    const boxCount = Math.floor(score.length / m);
    
    for (let i = m - 1; i < boxCount * m; i += m) {
        maxSum += score[i] * m;
    }
    
    return maxSum;
}