function solution(s) {
    // if (!isNaN(s * 1)) {
    //     if (s.length === 4 || s.length === 6) {
    //         return true;
    //     }
    // }
    // return false;
    // console.log('0x16' * 1);
    if (s.length === 4 || s.length === 6) {
        if (s.split('').every((e) => isNaN(Number(e)) === false)) {
            return true;
        } 
    }
    return false;
}