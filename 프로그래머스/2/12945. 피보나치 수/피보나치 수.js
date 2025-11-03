function solution(n) { 
    const fibonacci = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        const currentNum = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(currentNum % 1234567);
    }
    
    return fibonacci[n]; 
}