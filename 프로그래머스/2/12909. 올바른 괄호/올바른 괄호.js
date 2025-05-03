function solution(s){
    const stk = [];
    let n = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stk.push('_');
        } else if (s[i] === ')') {
            n = stk.pop();
            if (n === undefined) { return false; }
        }
    }
    
    return stk.length === 0 ? true : false;
}