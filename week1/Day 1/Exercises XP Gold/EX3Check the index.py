names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Please enter your name: ")

if user_name in names:
    print(f"The index of the first occurrence of {user_name} is {names.index(user_name)}")
else:
    print(f"{user_name} is not in the list.")