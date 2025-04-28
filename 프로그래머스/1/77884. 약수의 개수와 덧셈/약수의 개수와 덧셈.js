function solution(left, right) {
    // 약수의 개수가 홀수이려면
    // 9 -> 1,3,9 / 36 -> 1,2,3,4,6,8,12,18,36 처럼
    // 그 수의 **제곱근**이 약수에 포함되어 있어야 함
    
    return Array(right - left + 1).fill(left).reduce((acc,cur,i) => {
        num = cur+i;
        return num % Math.sqrt(num) === 0 ? acc + num*(-1) : acc + num;
    }, 0)
}