function solution(n, words) {
    let word = null;
    let idx = 1;
    const wordSet = new Set();
    wordSet.add(words[0]);
    
    for (let i = 1; i < words.length; i++) {
        const prevWord = words[i - 1];
        const nextWord = words[i];
        
        if (wordSet.has(nextWord) || prevWord[prevWord.length - 1] !== nextWord[0]) {
            word = nextWord;
            idx += i;
            break;
        }
        
        wordSet.add(nextWord);
    }
    
    if (word) {
        return [idx % n === 0 ? n : idx % n, Math.ceil(idx / n)]
    } else {
        return [0, 0];
    }
}