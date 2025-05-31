function solution(n, arr1, arr2) {
    const biArr1 = arr1.map(e => e.toString(2).padStart(n, '0'));
    const biArr2 = arr2.map(e => e.toString(2).padStart(n, '0'));
    
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        let el = '';
        for (let j = 0; j < n; j++) {
            if((Number(biArr1[i][j]) + Number(biArr2[i][j])) === 0) {
                el += ' '; 
            } else {
                el += '#'; 
            }
        }
        answer.push(el);
    }
    
    return answer;
}