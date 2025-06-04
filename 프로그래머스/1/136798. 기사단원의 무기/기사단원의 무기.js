function solution(number, limit, power) {
    let answer = 1;  // number은 1보다 작지 않기 때문에 1을 갖고 시작
    for (let i = 2; i <= number; i++) {
        // 약수의 개수 (divisors number)
        let dn = 2;  // 모든 수가 1과 자기 자신을 약수로 가지고 있음
        
        // 숫자가 처음으로 나눠 떨어지는 숫자 찾기 & 소수 체크
        for (let k = 2; k <= Math.sqrt(i); k++) {
            if (i % k === 0) {
                for (let j = k; j <= i / k; j++) {
                    dn += i % j === 0 ? 1 : 0;
                    if (dn > limit) break;
                }
                break;
            }
        }
        answer += dn > limit ? power : dn;
    } 
    return answer;
}