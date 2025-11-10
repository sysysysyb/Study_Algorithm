function solution(n) {
    const obj = {
        "1": 1,
        "2": 2
    };
    
    function getFibonacci(n) {
        if (obj[n]) {
            return obj[n];
        } else {
            obj[n] = (getFibonacci(n - 2) + getFibonacci(n - 1)) % 1234567;
            return obj[n];
        }
    }
    
    return getFibonacci(n);
}