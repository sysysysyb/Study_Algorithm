function solution(A,B){
    let result = 0;
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    for (const i in A) {
        result += A[i] * B[i];
        // console.log(`i : ${i}, result : ${result}`)
    }
    
    // console.log(A)
    // console.log(B)
    return result;
}