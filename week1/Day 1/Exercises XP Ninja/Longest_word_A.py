def find_longest_sentence_without_a():
    longest_sentence = ""
    while True:
        sentence = input("Enter the longest sentence you can without the character 'A': ")
        if 'A' in sentence or 'a' in sentence:
            print("The sentence contains the character 'A'. Try again.")
        elif len(sentence) > len(longest_sentence):
            longest_sentence = sentence
            print("Congratulations! You've set a new longest sentence.")
        else:
            print("The sentence is not longer than the current longest sentence.")
            
# Start the process
find_longest_sentence_without_a()