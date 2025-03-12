class Dog:

    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

    def sarahs_dog(self):
        sarahs_dog = Dog("Teacup", 20)
        sarahs_dog.bark()
        sarahs_dog.jump()



davids_dog = Dog("Rex", 50)
davids_dog.bark()
davids_dog.jump()
davids_dog.sarahs_dog()


if Dog is not None:
    print("Dog class is defined")
    sarahs_dog = Dog("Teacup", 20)
    if davids_dog.height > sarahs_dog.height:
        print(f"The tallest dog is {davids_dog.name}")
    else:
        print(f"The tallest dog is {sarahs_dog.name}")



