function isPrime(n) {
    for (let i = 2; i*i <= n; i++) {
        if (n % i === 0) return false;
    }
    
    // console.log(`${n}은 소수`);
    return true;
}

function solution(nums) {
    const arr = [];
    
    function combination(idx, cnt, sum) {
        if (cnt > 2) {
            arr.push(sum);
            // console.log(`idx: ${idx}, cnt: ${cnt}, sum: ${sum}`);
            return;
        }
        
        for (let i = idx; i < nums.length; i++) {
            const currentSum = sum + nums[i];
            // console.log(`currentSum: ${currentSum}`);
            combination(i + 1, cnt + 1, currentSum); 
        }
    }
    
    combination(0, 0, 0);
    
    const answer = arr.filter(el => isPrime(el));
    
    return answer.length;
}