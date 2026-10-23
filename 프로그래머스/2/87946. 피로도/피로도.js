function solution(k, dungeons) {
    // var answer = -1;
    // return answer;
    
    let answer = 0;
    let count = 0;
    const path = [];
    const visited = Array(dungeons.length).fill(false);
    const list = [];
    
    // 1. 순열 방식을 이용해 모든 경우의 수로 던전 탐험 테스트
    // 2. 중간에 최소 필요 피로도가 부족해 더이상 던전을 탐험하지 못하면 중단
    // 3. 항상 다음 경우의 수를 테스트할 때 Math.max로 최대 던전 탐험 수를 저장
    // 최대 던전 탐험 수, 현재 던전 탐험 수, 현재 피로도 필요
    
//     function getStamina() {
//         for (let i = 0; i < dungeons.length; i++) {
            
//             // console.log("path: ", path);
//             // console.log("i: ", i);
            
//             if (path.length === dungeons.length) {
//                 // console.log(`list에 추가`);
//                 list.push([...path]);
//                 return;
//             }
            
//             if (visited[i]) {
//                 // console.log(`이미 체크함`);
//                 continue;
//             }
            
//             path.push(dungeons[i]);
//             visited[i] = true;
            
//             getStamina();
            
//             path.pop();
//             visited[i] = false;
//         }
//     }
    
    // getStamina();
    // console.log(list);
    
    function getStamina(s) {
        for (let i = 0; i < dungeons.length; i++) {
            
            // console.log(`-----`);
            // console.log(`i: ${i}, count: ${count}`);
            
            let cs = s;
            const [rs, ds] = dungeons[i];
            
            // console.log(`cs: ${cs}, rs: ${rs}, ds: ${ds}`);
            
            // 피로도가 부족하면 중단
            if (cs < rs) {
                answer = Math.max(answer, count);
                // console.log(`중단`);
                continue;
            }
            
            // 이미 방문한 던전이면 건너뛰기
            if (visited[i]) {
                // console.log(`건너뛰기`);
                continue;
            }
            
            visited[i] = true;
            count++;
            // console.log(`getStamina(${cs - ds}) 실행`);
            getStamina(cs - ds);
            
            visited[i] = false;
            count--;
        }  
    }
    
    getStamina(k);
    return answer;
}