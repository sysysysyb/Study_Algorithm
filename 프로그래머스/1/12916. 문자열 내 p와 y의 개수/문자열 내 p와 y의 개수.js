function solution(s){
    const str = s.toLowerCase().split('');
    return (str.filter((x) => x === 'p').length === str.filter((x) => x === 'y').length);
}