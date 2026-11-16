def getBinarySearch(P, S):
    l, r, n, c = 1, P, 0, 0
    
    while n != S:
        c += 1
        n = int((l + r) / 2)
        if n < S:
            l = n
        else:
            r = n
    
    return c


T = int(input())
for test_case in range(1, T + 1):
    P, A, B = map(int, input().split())
    count_A = getBinarySearch(P, A)
    count_B = getBinarySearch(P, B)
    
    if count_A < count_B:
    	print(f'#{test_case} A')
    elif count_A > count_B:
        print(f'#{test_case} B')
    else:
        print(f'#{test_case} 0')