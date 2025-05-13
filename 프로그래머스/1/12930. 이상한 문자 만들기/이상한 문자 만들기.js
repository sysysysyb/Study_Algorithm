function solution(s) {
    let result = '';
    let index = 0;
    
    [...s].forEach((e) => {
        result += index % 2 === 0 ? e.toUpperCase() : e.toLowerCase();
        index = e === ' ' ? 0 : index + 1;
    })
    
    return result;
}