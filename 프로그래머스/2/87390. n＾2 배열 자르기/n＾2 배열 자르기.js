function solution(n, left, right) {
    const arr = [];
    
    for (let i = left; i <= right; i++) {
        let row = Math.floor(i / n);
        let column = i % n;
        arr.push(Math.max(row, column) + 1);
    }
    
    return arr;
}

