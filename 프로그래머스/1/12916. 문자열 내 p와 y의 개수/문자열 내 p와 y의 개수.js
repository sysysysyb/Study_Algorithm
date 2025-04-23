function solution(s){
    // const str = s.toLowerCase().split('');
    // return (str.filter((x) => x === 'p').length === str.filter((x) => x === 'y').length);
    
    // 굳이 filter을 쓰지 않아도 p와 y로 split해서 나온 배열의 길이 비교로 같은 결과를 얻을 수 있었음...
    return (s.toLowerCase().split('p').length === s.toLowerCase().split('y').length);
}