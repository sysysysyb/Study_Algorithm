function solution(a, b, n) {
    let count = 0 ;  // 마트에 한 번 갔을 때 병 몇 묶음을 낼 수 있는지
    let result = 0;  // 총 몇 병을 받을 수 있는지
    
    while(n >= a) {
        count = parseInt(n / a);
        n = n - count * a + count * b;  // 남은 병 전체 개수 - 가게에 낸 병 개수 + 받은 병 개수
        result += count * b;
    }
    
    return result;
}