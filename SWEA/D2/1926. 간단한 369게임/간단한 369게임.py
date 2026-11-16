N = int(input())

for n in range(1, N + 1):
    sum_n = str(n).count('3') + str(n).count('6') + str(n).count('9')
    if sum_n > 0:
        print('-' * sum_n, end=' ')
    else:
        print(n, end=' ')