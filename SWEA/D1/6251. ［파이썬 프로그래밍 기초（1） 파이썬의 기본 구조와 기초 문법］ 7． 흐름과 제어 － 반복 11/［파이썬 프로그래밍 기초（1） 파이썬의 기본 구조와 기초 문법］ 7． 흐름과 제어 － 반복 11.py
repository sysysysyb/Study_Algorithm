N = 5

for i in range(N - 1, -1, -1):
    for j in range(N):
        print(' ' if j < i else '*', end='')
    print()
    