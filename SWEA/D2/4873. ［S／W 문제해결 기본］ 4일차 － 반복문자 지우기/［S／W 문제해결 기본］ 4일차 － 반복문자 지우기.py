T = int(input())
for test_case in range(1, T + 1):
    S = input()
    stk = []
    for c in S:
        if not stk:
            stk.append(c)
            continue
        last_c = stk.pop()
        if c != last_c:
            stk.append(last_c)
            stk.append(c)
    print(f"#{test_case} {len(stk)}")
