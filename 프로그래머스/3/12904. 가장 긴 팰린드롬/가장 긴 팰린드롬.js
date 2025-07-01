function solution(s) {
    let maxLen = 1;
    const sl = s.length;
    
    const findPalindrome = (left, right) => {
        while (left >= 0 && right < sl && s[left] === s[right]) {
            // console.log(`계산 전 left: ${left}, right: ${right}`);
            const len = right++ - left-- + 1;
            // console.log(`계산 후 left: ${left}, right: ${right}`);
            maxLen = Math.max(maxLen, len);
            // console.log(`maxLen: ${maxLen}`);
        }
    }
    
    for (const idx in s) {
        const nidx = Number(idx);
        findPalindrome(nidx - 1, nidx + 1);   // 홀수
        findPalindrome(nidx, nidx + 1);       // 짝수
    }
    
    return maxLen;
}