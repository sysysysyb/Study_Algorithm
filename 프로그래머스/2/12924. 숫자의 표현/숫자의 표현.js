function solution(n) {
    // 다중 포인터 패턴
    let sum = 0;
    let end = 1;
    let answer = 0;
    
    for (let start = 1; start <= Math.ceil(n / 2); start++) {
        while (sum < n && end < n) {
            sum += end;
            end++;
        }

        if (sum === n) answer++;

        sum -= start;
    }
    
    return answer + 1;
}