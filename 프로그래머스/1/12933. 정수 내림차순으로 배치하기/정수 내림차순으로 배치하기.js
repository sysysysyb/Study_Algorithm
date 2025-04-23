function solution(n) {
    return ((n+"").split('').sort((x,y) => y - x).join('')*1);
}