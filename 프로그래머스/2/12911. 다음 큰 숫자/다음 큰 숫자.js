function solution(n) {
    const countOne = n.toString(2).replaceAll("0", "").length;
    
    while (true) {
        n++;
        const newCountOne = n.toString(2).replaceAll("0", "").length;
        if (countOne === newCountOne) {
            break;
        }
    }
        
    return n;
}