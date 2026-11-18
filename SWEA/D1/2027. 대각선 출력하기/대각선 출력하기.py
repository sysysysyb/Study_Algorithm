N = 5
for i in range(N):
    lst = []
    lst.extend(['+'] * N)
    lst[i] = '#'
    print(''.join(lst))