function solution(X, Y) {
    /* 빈도수 세기 패턴 */
    let answer = '';
    
    const strX = String(X);
    const strY = String(Y);
    
    const counter1 = {};
    const counter2 = {};
    
    for (let i = 0; i < Math.max(strX.length, strY.length); i++) {
        counter1[strX[i]] = (counter1[strX[i]] || 0) + 1;
        counter2[strY[i]] = (counter2[strY[i]] || 0) + 1;
    }
    
    for (const key of Object.keys(counter1).sort((a, b) => b - a)) {
        if (counter2[key]) answer += key.repeat(Math.min(counter1[key], counter2[key]));
    }
    
    if (!answer) return '-1';
    else if (!Number(answer)) return '0';
    else return answer;
}