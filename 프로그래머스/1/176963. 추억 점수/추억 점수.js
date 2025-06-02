function solution(name, yearning, photo) {
    const obj = {};
    for (let i = 0; i < name.length; i++) {
        obj[name[i]] = yearning[i];
    }
    
    return photo.map((e) =>  // photo의 요소에 접근 (ex. ["may", "kein", "kain", "radi"])
        e.reduce((acc, cur) => {  // photo의 요소의 요소에 접근 (ex. "may")
            return acc += obj[cur] === undefined ? 0 : obj[cur]
        }, 0)
    );
}