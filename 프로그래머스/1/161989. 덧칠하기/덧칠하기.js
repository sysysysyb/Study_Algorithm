function solution(n, m, section) {
    const l = section.length;
    let p = 0;      // current section item
    let c = 0;      // count
    
    while (p < l && p !== -1) {
        const cw = section[p];  // current wall
        const nw = cw + m;      // next wall
        
        p = section.findIndex(el => el >= nw);
        // console.log(`p : ${p}`);
        c++;
    }
    
    return c;
}