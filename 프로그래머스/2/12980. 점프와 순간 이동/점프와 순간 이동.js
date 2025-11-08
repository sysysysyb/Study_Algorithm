function solution(n) {
    let i = n;
    let answer = 1;
    
    while (i !== 1) {
        if (i % 2 === 0) {
            i /= 2;
        } else {
            i -= 1;
            answer++;
        }
    }
    
    return answer;
}