function solution(lottos, win_nums) {
    const lottoRanking = [6, 6, 5, 4, 3, 2, 1];
    let zeroCount = 0;
    let winningCount = 0;
    
    lottos.forEach(l => {
        if (l) {
            winningCount += win_nums.includes(l) ? 1 : 0;
        } else {
            zeroCount += 1;
        }
    });
    
    // console.log('zeroCount: ', zeroCount);
    // console.log('winningCount: ', winningCount);
    
    return [lottoRanking[winningCount + zeroCount], lottoRanking[winningCount]];
}