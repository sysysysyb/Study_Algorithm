function solution(n)
{
    const num = n.toString();
    let answer = 0;
    
    for (let i in num) {
        answer += Number(num[i]);
    }

    return answer;
}