N = int(input())
lst = [1]

for n in range(2, int(N ** (1 / 2)) + 1):
    if N % n == 0:
        lst.append(n)
        lst.append(int(N / n))

lst.append(N)
lst.sort()

for n in lst:
    print(n, end=' ')