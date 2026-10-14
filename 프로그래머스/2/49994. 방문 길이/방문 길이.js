function solution(dirs) {
    // 이동값 지정
    const move = {
        U: [0, 1],
        D: [0, -1],
        L: [-1, 0],
        R: [1, 0]
    };
    const walk = new Set();
    let nr = 0, nc = 0;

    for (dir of dirs) {
        // 이동 전 값과 이동 후 값 저장
        let pr = nr, pc = nc;
        const [dr, dc] = move[dir];
        
        nr = pr + dr;
        nc = pc + dc;
        
        // 바깥을 벗어나게 이동한다면 초기화
        if (nr < -5 || nr > 5 || nc < -5 || nc > 5) {
            nr = pr;
            nc = pc;
            continue;
        }
        
        // 이동하는 방향에 따라 다르게 이동 경로 저장
        if (dir === 'U' || dir === 'R') {
            walk.add(`${pr}, ${pc}, ${nr}, ${nc}`);
        } else {
            walk.add(`${nr}, ${nc}, ${pr}, ${pc}`);
        }
    }
    
    return walk.size;
}