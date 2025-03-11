
# Function to calculate ticket price based on age
def ticket_price(age):
    if age < 3:
        return 0
    elif 3 <= age <= 12:
        return 10
    else:
        return 15
# Create a dictionary to store the family members and their ages

family = {}
while True:
    name = input("Enter the name (or 'done' to finish): ")
    if name.lower() == 'done':
        break
    age = int(input(f"Enter the age of {name}: "))
    family[name] = age

# Calculate and print the cost for each family member
total_cost = 0
for name, age in family.items():
    cost = ticket_price(age)
    print(f"{name} has to pay ${cost}")
    total_cost += cost

print(f"The family's total cost for the movies is ${total_cost}")