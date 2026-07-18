function solution(str) {
    const arr = str.split('');
    let rst = 0;
    const len = str.length;
    
    for (let i = 0; i < len; i++) {
        const stack = [];
        isValid = true;
        
        for (let j = 0; j < len; j++) {
            if (arr[j] === '(' || arr[j] === '{' || arr[j] === '[') {
                stack.push(arr[j]);
                continue;
            }
            
            let last = stack.pop();
            
            if ((last === '(' && arr[j] !== ')') ||
               (last === '{' && arr[j] !== '}') ||
               (last === '[' && arr[j] !== ']') ||
               !last) {
                isValid = false;
                break;
            }
        }
        
        if (isValid && stack.length === 0) rst++;
        
        let c = arr.shift();
        arr.push(c);
    }
    
    return rst;
}