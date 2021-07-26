def recursive_sum(n):
    if n == 1:
        return 1
    return n + recursive_sum(n - 1)


teste = recursive_sum(4)
print(teste)
