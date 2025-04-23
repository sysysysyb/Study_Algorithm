function solution(n) {
    return ((n+"").split('').map((x) => x*1).sort((x,y) => y - x).join('')*1);
}