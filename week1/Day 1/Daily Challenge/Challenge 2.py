def remove_consecutive_duplicates(input_string):
    result = []
    for char in input_string:
        if len(result) == 0 or char != result[-1]:
            result.append(char)
    return ''.join(result)

user_input = input("Enter a word: ")
new_string = remove_consecutive_duplicates(user_input)
print("New string:", new_string)