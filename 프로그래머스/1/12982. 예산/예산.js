function solution(d, budget) {
    let i = 0;
    const list = d.sort((a, b) => a - b);
    while (budget >= list[i]) {
        budget -= list[i];
        i++;
    }
    return i;
}