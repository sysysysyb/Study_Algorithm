function solution(n, m, section) {
    let cw = section[0];    // current wall
    let nw = cw + m - 1;    // next wall
    let count = 1;          // count
    
    for (const s of section) {
        if (s > nw) {
            cw = s;
            nw = cw + m - 1;
            count++;
        }
    }
    
    return count;
}