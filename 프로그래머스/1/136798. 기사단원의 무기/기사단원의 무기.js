function solution(number, limit, power) {
    /* 
    *** 1 ~ number까지 각 숫자의 약수의 개수 구하기... ***
    
    @ number은 1보다 작지 않기 때문에 1을 갖고 시작
    @ 약수의 개수 (divisors number)를 dn에 저장
      모든 수가 1과 자기 자신을 약수로 가지고 있기 때문에 2로 초기화
    @ 약수의 개수 구하기 : 소수 체크 & 숫자가 처음으로 나눠 떨어지는 숫자 찾기
    
    EX) 12 - 1, 2, 3, 4, 6, 12
        75 - 1, 3, 5, 15, 25, 75
    */
    
    let answer = 1;  
    for (let i = 2; i <= number; i++) {
        let dn = 2; 
        
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