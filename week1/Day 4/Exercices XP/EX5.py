class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def family_presentation(self):
        print(f"The {self.last_name} family:")
        for member in self.members:
            print(member)

    def born(self, **kwargs):
        self.members.append(kwargs)


class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] > 18:
                    print(f"{member['name']}'s power is {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old.")
                return
        print(f"No member named {name} found.")

    def incredible_presentation(self):
        print("*Voici notre puissante famille*")
        super().family_presentation()


# Creating an instance of TheIncredibles
incredibles = TheIncredibles(
    last_name='Incredibles',
    members=[
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
    ]
)

# Calling the incredible_presentation method
incredibles.incredible_presentation()

# Adding Baby Jack using the born method
incredibles.born(name='Baby Jack', age=0, gender='Male', is_child=True, power='Unknown power', incredible_name='BabyJack')

# Calling the incredible_presentation method again
incredibles.incredible_presentation()