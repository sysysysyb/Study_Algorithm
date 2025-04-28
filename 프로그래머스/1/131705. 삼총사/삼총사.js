function solution(n) {
    let answer = 0;
    
    const isThree = (x,y,z) => {
        return (n[x] + n[y] + n[z]) === 0 ? 1 : 0;
    };
    
    for (let i = 0; i < (n.length); i++) {
        for (let j = i+1; j < (n.length); j++) {
            for (let k = j+1; k < (n.length); k++) {
                answer = isThree(i,j,k) + answer;
            }
        }
    }
    
    return answer;
}