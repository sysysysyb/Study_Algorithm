function solution(t, p) {
    
    const list = [];
    for (let i = 0; i <= t.length - p.length; i++) {
        list.push(Number(t.slice(i, i + p.length)));
    };
    
    list.sort((a, b) => a - b);
    
    let num = 0;
    while (list[num] <= Number(p)) {
        num++;
    }
    
    return num;
}