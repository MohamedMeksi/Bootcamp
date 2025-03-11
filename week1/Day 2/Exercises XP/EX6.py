def make_shirt(**kwargs):
    size = kwargs.get("size")
    message = kwargs.get("message")
    if size is None:
        size = input("What size of shirt do you want? ")
    if message is None:
        message = input("What message do you want on the shirt? ")

    if size == "large" :
        message = "I love Python"
    elif size == "Medium":
        message = "I love Java"
    elif size == "small":
        message = "I love C#"
    else:
        print("You have to enter a message!")

    print(f"Your shirt will be size {size} and will have the message '{message}' on it.")


make_shirt() 