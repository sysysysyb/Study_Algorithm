function solution(numbers) {
    // numbers 배열 오름차순 정렬
    // 만약 현재 요소가 다다음 요소와 같은 숫자라면 pass
    // 반복문으로 뒤의 요소들과의 합 계산 및 저장
    
    let sn = numbers.sort((a, b) => a - b);
    let result = [];
    
    // #1 includes 메소드를 이용해 중복 처리 - 0.87ms
//     for (let i = 0; i < sn.length - 1; i++) {
//         if (sn[i] === sn[i + 2]) continue;
        
//         for (let j = i + 1; j < sn.length; j++) {
//             if (result.includes(sn[i] + sn[j]) === false) {
//                 result.push(sn[i] + sn[j]);
//             }
//         }
//     }
    
    // #2 Set 객체를 이용해 중복 처리 - 
    for (let i = 0; i < sn.length - 1; i++) {
        if (sn[i] === sn[i + 2]) continue;
        
        for (let j = i + 1; j < sn.length; j++) {
            result.push(sn[i] + sn[j]);
        }
    }
    
    return [...new Set(result)].sort((a, b) => a - b);
}