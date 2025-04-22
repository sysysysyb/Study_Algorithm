function solution(a, b) {
    // let sum = 0;
    // for (let i = a; i <= b; i++) {
    //     sum += i;
    // }
    
    // a와 b의 평균 * a ~ b 사이의 정수 개수
    return a === b ? a : ((a + b) / 2) * (Math.abs(a - b) + 1);
}