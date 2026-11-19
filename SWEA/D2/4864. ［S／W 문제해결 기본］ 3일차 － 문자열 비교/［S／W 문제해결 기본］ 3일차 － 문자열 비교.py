T = int(input())
for test_case in range(1, T + 1):
    str1 = input()
    str2 = input()
    is_done = 0
    for i in range(len(str2) - len(str1) + 1):
        idx = 0
        is_done = 1
        for j in range(i, i + len(str1)):
            if str2[j] != str1[idx]:
                is_done = 0
                break
            else:
                idx += 1
        if is_done == 1:
            break
    print(f"#{test_case} {is_done}")
