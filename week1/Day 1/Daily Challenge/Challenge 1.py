# Challenge 1
number = int(input("Enter a number: "))
length = int(input("Enter the length: "))
multiples = [number * i for i in range(1, length + 1)]

print(multiples)