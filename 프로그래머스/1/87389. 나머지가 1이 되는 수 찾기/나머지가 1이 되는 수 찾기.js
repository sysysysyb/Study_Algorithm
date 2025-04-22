function solution(n) {
    // for (let i = 2; i <= Math.sqrt(n-1); i++) {
    //     if ((n-1) % i === 0) {
    //         return i;
    //     }
    // }
    // return n-1;
    
    for (let i = 2; i * i <= n-1; i++) {
        if ((n-1) % i === 0) {
            return i;
        }
    }
    return n-1;
}