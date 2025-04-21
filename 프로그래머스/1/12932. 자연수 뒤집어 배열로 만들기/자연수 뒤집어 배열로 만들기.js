function solution(n) {
    
    /* 
    1. 숫자 n에 ''을 더해서 n을 문자열로 바꾸기
    2. ''로 split해서 숫자 하나하나 나눠서 배열로 저장
    3. reverse로 순서 뒤집기
    4. map 이용해서 요소를 Number 형식으로 바꾸기
    */
    return (n + '').split('').reverse().map((item) => Number(item));
}