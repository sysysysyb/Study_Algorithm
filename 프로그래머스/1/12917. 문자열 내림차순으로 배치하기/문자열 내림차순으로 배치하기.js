function solution(s) {
    // **조건**
    // 큰 것부터 작은 것 순 (z > a 순)
    // 대문자가 소문자보다 작음 (소문자 > 대문자 순)
    
    // 소문자 대문자 나누어 저장할 배열 선언
    const lower = [];
    const upper = [];
    
    // 문자열을 하나하나 배열 요소로 쪼개서 소문자인지 대문자인지 판별 후 저장
    s.split('').forEach ((e) => e === e.toLowerCase() ? lower.push(e) : upper.push(e));
    
    // x > a 순으로 정렬 후 이어 붙여서 반환
    return ((lower.sort().reverse().concat(upper.sort().reverse()).join('')));
}