function solution(k, score) {
    const list = [];
    const answer = [];
    
    score.forEach((el, idx) => {
        if (idx < k) {
            list.push(el);
            list.sort((a, b) => b - a);
            answer.push(list[list.length-1]);
        } else {
            for (let i = 0; i < k; i++) {
                if (el > list[i]) {
                    list.splice(i, 0, el);
                    list.pop();
                    break;
                }
            }
            answer.push(list[list.length-1]);
        }
    })
    
    return answer;
}