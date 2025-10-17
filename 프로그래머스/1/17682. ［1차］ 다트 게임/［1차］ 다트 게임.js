function solution(dartResult) {
    const bonus = ['S', 'D', 'T'];
    const option = {'*': 2, '#': -1};
    const lst = [];

    const str = dartResult.match(/\d+[^0-9]*/g);
    
    str.forEach((cur, idx) => {
        let p = 0;
        let n = 0;
        if (cur[1] === '0') {
            p += 1;
            n = 10 ** (bonus.indexOf(cur[1 + p]) + 1); 
        } else {
            n = cur[0] ** (bonus.indexOf(cur[1]) + 1); 
        }
        console.log(bonus.indexOf(cur[1]) + 1);
        
        if (cur.length === 3) {
            if (cur[2 + p] === '*') {
                n *= 2;
                if (idx > 0) lst[idx - 1] *= 2;
            } else if (cur[2 + p] === '#') {
                n *= -1;
            }
        }
        
        console.log(`${idx}: ${n}`)
        lst.push(n);
    })
    
    return (lst[0] + lst[1] + lst[2]);
}