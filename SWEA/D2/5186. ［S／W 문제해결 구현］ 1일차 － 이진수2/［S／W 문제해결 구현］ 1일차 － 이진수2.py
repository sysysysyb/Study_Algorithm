T = int(input())
for test_case in range(1, T + 1):
    N = float(input())
    S = ''
    for i in range(1, 13):
        if N >= (1 / 2 ** i):
            N -= (1 / 2 ** i)
            S += '1'
        else:
            S += '0'
        
        if N == 0:
            print(f'#{test_case} {S}')
            break
        
    if N != 0:
        print(f'#{test_case} overflow')
