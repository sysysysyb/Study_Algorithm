function solution(want, number, discount) {
    let answer = 0;
    const wantProducts = new Map();
    const discountProducts = new Map();
    let isMatch = true;
    
    for (let i = 0; i < want.length; i++) {
        wantProducts.set(want[i], number[i]);
    }
    
    for (let i = 0; i < 10; i++) {
        discountProducts.set(discount[i], (discountProducts.get(discount[i]) ?? 0) + 1)
    }
    
    for (let i = 0; i < discount.length - 9; i++) {
        isMatch = true;
        
        for (let j = 0; j < want.length; j++) {
            if (wantProducts.get(want[j]) !== discountProducts.get(want[j])) {
                isMatch = false;
                break;
            }
        }
        
        if (isMatch) answer++;
        
        if (i + 10 < discount.length) {
            discountProducts.set(discount[i], discountProducts.get(discount[i]) - 1)
            discountProducts.set(discount[i + 10], (discountProducts.get(discount[i + 10]) ?? 0) + 1)
        }
    }
    
    return answer;
}