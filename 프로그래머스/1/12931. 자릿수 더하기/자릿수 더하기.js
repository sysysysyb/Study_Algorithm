function solution(n)
{
//     const num = n.toString();
//     let answer = 0;
    
//     for (let i in num) {
//         answer += Number(num[i]);
//     }
    
    let answer = 0;
    n.toString().split('').forEach((element) => answer += Number(element));

    return answer;
}