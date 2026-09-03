function solution(arr1, arr2) {
    const answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        const temp = [];
        
        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0;
            
            for (let k = 0; k < arr1[0].length; k++) {
                sum = sum + arr1[i][k] * arr2[k][j];
            }
            temp.push(sum);
        }
        
        answer.push(temp);
    }
    
    return answer;
    
    // [arr1[0][0] * arr2[0][0] + arr1[0][1] * arr2[1][0],
    // arr1[0][0] * arr2[0][1] + arr1[0][1] * arr2[1][1]],
    // [arr1[1][0] * arr2[0][0] + arr1[1][1] * arr2[1][0],
    // arr1[1][0] * arr2[0][1] + arr1[1][1] * arr2[1][1]],
}