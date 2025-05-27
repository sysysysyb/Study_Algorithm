function solution(strings, n) {
    return (strings.sort((a, b) => a[n].localeCompare(b[n]) === 0 ? a.localeCompare(b) : a[n].localeCompare(b[n])));
}