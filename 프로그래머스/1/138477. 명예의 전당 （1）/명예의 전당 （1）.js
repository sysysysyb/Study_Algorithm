function solution(k, score) {
    // #1
    /*
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
    */
    
    // #2
    const answer = [];
    
    score.forEach((e, i) => {
        const list = score.slice(0, i + 1).sort((a, b) => b - a);
        answer.push(list.length <= k ? list[list.length - 1] : list[k-1]);
    })
    
    return answer;
}