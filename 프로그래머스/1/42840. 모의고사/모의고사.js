function solution(answers) {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const tests = [ {id: 1, score: 0}, {id: 2, score: 0}, {id: 3, score: 0} ];
    const answer = [];
    
    for (const [idx, el] of answers.entries()) {
        if (arr1[idx % 5] === el) tests[0].score++;
        if (arr2[idx % 8] === el) tests[1].score++;
        if (arr3[idx % 10] === el) tests[2].score++;
    }
    
    const maxScore = Math.max(tests[0].score, tests[1].score, tests[2].score)
    tests.forEach(({id, score}) => {
        if (score === maxScore) answer.push(id);
    });
    return answer;
}