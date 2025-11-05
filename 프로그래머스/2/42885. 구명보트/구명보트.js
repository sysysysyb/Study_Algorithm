function solution(people, limit) {
    const len = people.length;
    let lp = 0, rp = len - 1;
    let answer = 0;
    
    people.sort((a, b) => b - a);
    
    while (lp < rp) {
        if (people[lp] + people[rp] <= limit) {
            answer++;
            lp++;
            rp--;
        } else {
            answer++;
            lp++;
        }
    }
    
    // console.log(`lp: ${lp}, rp: ${rp}`);
    
    return lp === rp ? answer + 1 : answer;
}