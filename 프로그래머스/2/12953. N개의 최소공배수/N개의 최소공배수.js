function solution(arr) {
    // 유클리드 호제법
    // gcd(최대공약수) : gcd(a, b) = gcd(b, a % b)
    // lcm(최소공배수) : lcm(a, b) = a * b * gcd(a, b)
    
    let answer = arr[0];
    const getGCD = (a, b) => b === 0 ? a : getGCD(b, a % b);
    const getLCM = (a, b) => a * b / getGCD(a, b);
    
    for (let i = 1; i < arr.length; i++) {
        answer = getLCM(answer, arr[i]);
    }
    
    return answer;
}