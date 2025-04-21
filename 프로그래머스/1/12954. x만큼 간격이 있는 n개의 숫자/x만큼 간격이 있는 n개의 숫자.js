function solution(x, n) {
    
    /* 한 줄 쓰기
    
    1. x를 띄어쓰기를 포함한 문자열로 만들어 repeat과 split을 통해 ["x","x", ~ ,"x", ""]와 같은 형태의 배열 생성
    2. map을 통해 "x"를 정수로 변환하고 조건에 맞게 다음 index마다 x만큼 커지도록 함
       -> [x, x+x, x+x+x, ~, x+...+x, null]
    3. slice로 마지막의 null 제거
    */
    return (`${x} `.repeat(n).split(' ').map((element, index) => parseInt(element) * index + x).slice(0,n));
}