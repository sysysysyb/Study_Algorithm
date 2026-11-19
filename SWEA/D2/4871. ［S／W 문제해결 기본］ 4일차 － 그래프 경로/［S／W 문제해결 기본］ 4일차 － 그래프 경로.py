T = int(input())
for test_case in range(1, T + 1):
    V, E = map(int, input().split()) # V: 노드 개수, E: 간선 개수
    d = {}
    for n in range(E):
        s, g = map(int, input().split())
        d.setdefault(s, []).append(g)
    S, G = map(int, input().split())
    visited = set()
    stk = [S]
    answer = 0
    while stk:
        current = stk.pop()
        if current in visited:
            continue
        visited.add(current)
        if current == G:
            answer = 1
            break
        for n in d.get(current, []):
            if n not in visited:
                stk.append(n)
    print(f"#{test_case} {answer}")
    
