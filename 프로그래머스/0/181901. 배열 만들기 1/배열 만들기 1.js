function solution(n, k) {
    const list = [];
    for (let i = 1; i <= n; i++) {
        i % k === 0 ? list.push(i) : 0;
    }
    return list;
}