function solution(s) {
    const answer = [0, 0];
    
    function getBinary(x, c, z) {
        if (x === '1') {
            answer[0] = c;
            answer[1] = z;
            return;
        }
        
        const f = x.replaceAll('0', '');
        const l = f.length;
        const b = l.toString(2);
        
        const zc = x.length - l
        
        getBinary(b, c + 1, z + zc);
    }
    
    getBinary(s, 0, 0);
    
    return answer
}