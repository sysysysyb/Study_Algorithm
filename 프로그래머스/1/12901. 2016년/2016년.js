function solution(a, b) {
    // 1월 1일이 금요일 -> 나머지가 1일 때 === week[1]일 때 FRI
    const week = ['THU','FRI','SAT','SUN', 'MON','TUE','WED'];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    return week[((month.slice(0, a - 1).reduce((acc, cur) => {return acc + cur}, 0)) + b) % 7];
}