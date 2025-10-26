function solution(s, skip, index) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    const skipArr = skip.split('');
    const skipLen = skipArr.length;
    
    const filteredAlphabet = alphabet.filter(a => {
        if (!skipArr.includes(a)) {
            return a;
        }
    });
    const alpLen = filteredAlphabet.length;
    
    const result = s.split('').map(el => {
        let idx = filteredAlphabet.findIndex(fa => fa === el) + index;
        while(idx >= alpLen) {
            idx -= alpLen;
        }
        // console.log('idx: ', idx);
        return filteredAlphabet[idx];
    });
    
    return result.join('');
}