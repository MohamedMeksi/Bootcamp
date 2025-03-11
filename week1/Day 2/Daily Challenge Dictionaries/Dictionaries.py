def create_letter_index_dict(word):

    letter_index_dict = {}
    
    for index, letter in enumerate(word):
        if letter in letter_index_dict:
            letter_index_dict[letter].append(index)
        else:
            letter_index_dict[letter] = [index]
    
    return letter_index_dict

# Ask the user for a word
user_word = input("Please enter a word: ")

# Create the dictionary
result_dict = create_letter_index_dict(user_word)

# Print the result
print(result_dict)