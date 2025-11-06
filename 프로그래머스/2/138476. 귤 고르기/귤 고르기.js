function solution(k, tangerine) {
    const obj = {};
    let sum = 0;
    let answer = 0;
    
    // tangerine 크기별 개수 정리
    tangerine.forEach(el => {
        if (obj[el] > 0) {
            obj[el]++;
        } else {
            obj[el] = 1;
        }
    })

    const sortedObj = Object.values(obj).sort((a, b) => b - a);
    
    // k만큼 귤 담기
    for (const el of sortedObj) {
        if (sum + el < k) {
            sum += el;
            answer++;
        } else {
            sum += el;
            answer++;
            break;
        }
    }
    
    return sum >= k ? answer : answer + 1;
}