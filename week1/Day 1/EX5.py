# Create a set called my_fav_numbers with all your favorite numbers
my_fav_numbers = {3, 7, 14, 21}

# Add two new numbers to the set
my_fav_numbers.update([28, 35])

# Remove the last number
my_fav_numbers.remove(35)

# Create a set called friend_fav_numbers with your friend’s favorite numbers
friend_fav_numbers = {5, 10, 15, 20}

# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)