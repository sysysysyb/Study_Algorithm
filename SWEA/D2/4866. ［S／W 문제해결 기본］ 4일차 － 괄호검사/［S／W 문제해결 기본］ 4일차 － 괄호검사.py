T = int(input())
for test_case in range(1, T + 1):
    S = input()
    stk = []
    is_skipped = False
    answer = 1
    for c in S:
        if c == '"' or c == "'":
            is_skipped = not is_skipped
        if is_skipped == True:
            continue
        if c == '{' or c == '(':
            stk.append(c)
        elif c == '}':
            if not stk or stk.pop() != '{':
                answer = 0
                break
        elif c == ')':
            if not stk or stk.pop() != '(':
                answer = 0
                break
    if stk:
        answer = 0
    print(f'#{test_case} {answer}')
            
