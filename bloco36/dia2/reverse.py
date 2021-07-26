# def reverse(list):
#     reversed_list = []
#     for item in list:
#         reversed_list.insert(0, item)
#         print(reversed_list)
#     return reversed_list


def reverse(list):
    if len(list) < 2:
        return list
    else:
        print(f"list{list[1:]}, {list[0]}")
        return reverse(list[1:]) + [list[0]]


teste = reverse([1, 2, 3, 4, 5])
print(teste)