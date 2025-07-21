function solution(s) {
    const stack = [];
    
    for (const c of s) {
        if (stack.length > 0 && stack.at(-1) === c) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    
    return Number(stack.length === 0);
}