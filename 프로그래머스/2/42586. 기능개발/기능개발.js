function solution(progresses, speeds) {
    let idx = 0, count = 0;
    const answer = [];
    
    while (idx < progresses.length) {
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        
        while (true) {
            if (progresses[idx] >= 100) {
                idx++;
                count++;
            } else {
                break;
            }
        }
        
        if (count) answer.push(count);
        count = 0;
    }
    
    return answer;
}

// 16:42

/* 
D1 - [94, 60, 60]
D2 - [95, 90, 65]
D3 - [96, 120(S), 70]
D4 - [97, 120, 75]
D5 - [98, 120, 80]
D6 - [99, 120, 85]
D7 - [100, 120. 85] -> 100이랑 120 배포
D8 - [90]
D9 - [95]
D10 - [100] -> 100 배포
*/