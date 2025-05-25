function solution(n) {
//     let answer = 0;
    
//     const isThree = (x,y,z) => {
//         return (n[x] + n[y] + n[z]) === 0 ? 1 : 0;
//     };
    
//     for (let i = 0; i < (n.length); i++) {
//         for (let j = i+1; j < (n.length); j++) {
//             for (let k = j+1; k < (n.length); k++) {
//                 answer = isThree(i,j,k) + answer;
//             }
//         }
//     }
    
//     return answer;
    
    // 재귀함수로 구현하기
    let answer = 0;
    
    function isThree(idx, arr) {
        // Base Case
        if (arr.length === 3) {
            const [first, second, third] = arr;
            answer = (first + second + third === 0) ? answer + 1 : answer;
            return;
        }
        
        // Recursive Case
        for (let i = idx; i < n.length; i++) {
            isThree(i + 1, [...arr, n[i]]);
        }
        
    }
    
    isThree(0, []);
    
    return answer;
}