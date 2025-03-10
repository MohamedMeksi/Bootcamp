
my_fav_numbers = {3, 7, 14, 21}
my_fav_numbers.update([28, 35])

my_fav_numbers.remove(35)

friend_fav_numbers = {5, 10, 15, 20}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)