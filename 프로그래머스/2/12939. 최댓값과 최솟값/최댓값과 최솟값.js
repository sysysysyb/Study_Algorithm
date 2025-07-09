function solution(s) {
    const arr = s.split(' ');
    const minNum = Math.min(...arr);
    const maxNum = Math.max(...arr);
    
    return `${minNum} ${maxNum}`;
}