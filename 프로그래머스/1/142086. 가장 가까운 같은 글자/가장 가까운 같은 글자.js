function solution(s) {
    const list = s.split('');
    let num = 0;
    return (list.map((e, i) => {
        num = list.slice(0, i).reverse().findIndex(findE => findE === e);
        return num === -1 ? -1 : num + 1;
    }))
}
