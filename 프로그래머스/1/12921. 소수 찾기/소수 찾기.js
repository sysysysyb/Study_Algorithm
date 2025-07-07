function solution(n) {
    const prime = [];
    let count = 0;
    
    // 1 ~ n 사이의 소수 리스트 생성
    for (let i = 2; i*i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j*j <= i; j++) {
            console.log(`j : ${j}`);
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        // console.log(`${i}는 소수`);
        {isPrime && prime.push(i);};
    }
    
    // console.log(prime);
    
    // 소수인지 확인
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (const p of prime) {
            if (i % p === 0) {
                isPrime = false;
                break;
            }
        }
        {isPrime && count++};
    }
        
    return (count + prime.length);
}