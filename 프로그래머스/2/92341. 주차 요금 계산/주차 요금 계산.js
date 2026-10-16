function calculateTime(it, ot) {
    const [ih, im] = it;
    const [oh, om] = ot;
    
    if (ih === oh) {
        return om - im;
    } else {
        return (oh - ih - 1) * 60 + (60 - im) + om;
    }
}

function solution(fees, records) {
    // 누적 주차 시간
    const parkingTime = {};
    
    // 입차 리스트
    const parkInList = {}
    
    // 정답
    const answer = [];
    
    // 주차 시간 계산
    for (const record of records) {
        const [time, num, status] = record.split(" ");
        
        if (status === 'IN') {
            console.log(Number(num))
            parkInList[`${num}`] = [Number(time.slice(0,2)), Number(time.slice(3,5))]
            if (!parkingTime[Number(num)]) {parkingTime[Number(num)] = 0;}
        } else if (status === 'OUT') {
            const it = parkInList[`${num}`];
            const ot = [Number(time.slice(0,2)), Number(time.slice(3,5))];
            parkingTime[Number(num)] += calculateTime(it, ot);
            delete parkInList[`${num}`];
        }
    }
    
    // 출차 안한 남은 차 주차 시간 계산
    for (const rc in parkInList) {
        const it = parkInList[`${rc}`];
        const ot = [23, 59];
        parkingTime[Number(rc)] += calculateTime(it, ot);
    }
    
    // 주차 요금 계산
    for (const car in parkingTime) {
        const time = parkingTime[`${car}`];
        
        if (time <= fees[0]) {
            answer.push(fees[1]);
        } else {
            answer.push(fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3]);
        }
    }
    
    // console.log(parkInList)
    // console.log(parkingTime);
    // console.log(answer);
    return (answer);
}