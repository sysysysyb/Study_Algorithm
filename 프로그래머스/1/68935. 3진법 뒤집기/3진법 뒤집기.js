function solution(n) {
    let num = 1;
    let square = 0;
    
    while (true) {
        num *= 3;
        if (n < num) break;
        square++;
    };
    
    const list = Array(square+1).fill(0).map((e) => {
        num = 0;
        for (let i = 0; i < 2; i++) {
            if ((n - 3**square) >= 0) {
                n -= 3**square;
                num++;
            };
        }
        square--;
        return num;
    })
    
    return(list.reduceRight((acc, cur, i) => {
        return acc + cur * 3 ** i;
    }, 0));

    // return parseInt([...n.toString(3)].reverse().join(""), 3);
}