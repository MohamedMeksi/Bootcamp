class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

    def vieux(self, *cats):
        oldest_cat = self
        for cat in cats:
            if cat.age > oldest_cat.age:
                oldest_cat = cat
        print(f"Le chat le plus âgé est {oldest_cat.name}, et a {oldest_cat.age} ans.")
        
print("Enter the name of the first cat:")
cat1_name = input()
print("Enter the age of the first cat:")
cat1_age = int(input())
cat1 = Cat(cat1_name, cat1_age)
print("Enter the name of the second cat:")
cat2_name = input()
print("Enter the age of the second cat:")
cat2_age = int(input())
cat2 = Cat(cat2_name, cat2_age)
print("Enter the name of the third cat:")
cat3_name = input()
print("Enter the age of the third cat:")
cat3_age = int(input())
cat3 = Cat(cat3_name, cat3_age)


cat1.vieux(cat2, cat3)
