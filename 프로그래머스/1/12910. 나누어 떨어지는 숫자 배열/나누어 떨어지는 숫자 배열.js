function solution(arr, divisor) {
    const answer = arr.filter((x) => x % divisor === 0).sort((x,y) => x - y);
    return (answer.length ? answer : [-1]);
}