function solution(arr) {
    let num = arr[0];
    
    const answer = [arr[0]];
    
    arr.forEach((e,i) => {
        if (e !== num) {
            num = e;
            answer.push(num);
        }
    });
    
    return answer;
}