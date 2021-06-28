def mean(numbers):
    sum = 0
    for number in numbers:
        sum += number
    return sum / len(numbers)


if __name__ == "__main__":
    print("A média é:", mean([1, 3]))
