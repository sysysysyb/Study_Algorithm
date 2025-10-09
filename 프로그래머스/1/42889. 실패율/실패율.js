function solution(N, stages) {
    const l = stages.length;
    const arr = Array.from({length: N + 1}, (_, i) => {return {n: i + 1, count: 0, failureRate: 0}});
    
    stages.forEach(stage => arr[stage-1].count++)
    
    let sum = 0;
    for (let i = N; i >= 0; i--) {
        sum += arr[i].count;
        
        if (i === N) continue;
        
        arr[i].failureRate = arr[i].count / sum;
    }
    
    arr.pop();
    
    arr.sort((a, b) => b.failureRate - a.failureRate);
    
    return arr.map(el => el.n)
}