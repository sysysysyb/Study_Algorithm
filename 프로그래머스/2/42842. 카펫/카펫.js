function solution(brown, yellow) {
    const answer = [];
    
    for (let i = 1; i * i <= yellow; i++) {
        console.log('i: ', i);
        if (yellow % i === 0) {
            const j = yellow / i;
            if ((i + 2) * (j + 2) === (yellow + brown)) {
                answer.push(j + 2);
                answer.push(i + 2);
                break;
            }
        }
    }
    
    return answer;
}