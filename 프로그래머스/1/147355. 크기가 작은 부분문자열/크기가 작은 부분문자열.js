function solution(t, p) {
    // 슬라이딩 윈도우 패턴
    const pl = p.length;
    let str = '';
    let answer = 0;
    
    for (let i = 0; i < t.length; i++) {
        str += t[i];
        
        if (i >= pl - 1) {
            answer += str <= p ? 1 : 0;
            str = str.slice(1); // 이것 밖에 방법이 없나???
        }
    }
    
    return answer;
    
    
    // 이전 풀이
//     const list = [];
//     for (let i = 0; i <= t.length - p.length; i++) {
//         list.push(Number(t.slice(i, i + p.length)));
//     };
    
//     list.sort((a, b) => a - b);
    
//     let num = 0;
//     while (list[num] <= Number(p)) {
//         num++;
//     }
    
//     return num;
}