T = int(input())
for test_case in range(1, T + 1):
    str1 = input()
    str2 = input()
    d = dict()
    for c in str1:
        d[c] = 0
    for c in str2:
        if c in d:
            d[c] += 1
    print(f"#{test_case} {max(d.values())}")
