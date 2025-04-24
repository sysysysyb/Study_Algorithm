function solution(absolutes, signs) {
    
    let sum = 0;
    for (let i in signs) {
        // sum += `${signs[i] ? '+' : '-'}${absolutes[i]}`*1; // #1
        // sum += absolutes[i] * (signs[i] ? 1 : (-1)); // #2
    }
    
    absolutes.forEach((e,i) => sum += e * (signs[i] ? 1 : (-1))); // #3
    return sum;

    // return (absolutes.reduce((acc, cur, i) => acc + cur * (signs[i] ? 1 : (-1)), 0)); // #4
}