function solution(s) {
    let isSame = 0, isDifferent = 0, answer = 0;
    let x = s[0];
    
    const arr = s.split("");
    
    arr.forEach((el, idx) => {
        // console.log('x: ', x, ' el: ', el);
        if (el === x) isSame++;
        else isDifferent++;
        
        // console.log('isSame: ', isSame, ' isDifferent: ', isDifferent);
        
        if (isSame === isDifferent) {
            answer++;
            if (arr[idx + 1]) x = arr[idx + 1];
        }
    })
    
    if (isSame !== isDifferent) {
        answer++;
    }
    
    return answer;
}