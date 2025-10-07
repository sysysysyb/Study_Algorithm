function solution(babbling) {
    const pronunciation = /(aya|ye|woo|ma)/g;
    const repeat = /(aya|ye|woo|ma)\1/
    
    return babbling.filter(b => !repeat.test(b) && b.replace(pronunciation, '') === '').length
}