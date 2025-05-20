function solution(food) {
    const fl = [0]
    let str = '';
    
    food.slice(1).reverse().forEach((f, i) => {
        let str = String(food.length - (i + 1)).repeat(f / 2);
        fl.push(str);
        fl.unshift(str);
    });
    
    return (fl.join(''));
}