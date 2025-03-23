#Dictionary

#"key":"value"

# convert_month = {
# "jan":"january",
# "feb":"february",
# "mar":"march",
# "apr":"april",  
# "may":"may",
# "jun":"june",
# "jul":"july",
# "aug":"august",
# "sep":["september","zeptember",1,2,3],
# "oct":2,
# "nov":True,
# 1:"december"
# }


# print(convert_month["jan"])#january
# print(convert_month.get("kas" ,"the value not exsiste"))#None


#!while Loop

# i = 1

# while i <= 10:
    
#     i += 1
#     if i == 5:
#         break
#     print(i)


# !For Loop
# buddy = ["mike","joe","john","james","jimmy"]
# # range(len(buddy))
# for i in buddy:
#     print(i)




#!args and **kwargs

# def sum_numbers(x,y):
#     return x + y

# print(sum_numbers(10,20))


# def sum_numbers(my_list):
#     result = 0
#     for i in my_list:
#         result += i
#     return result

# list1 = [1,2,3,4,5,6,7,8,9,10]
# print(sum_numbers(list1))


# def sum_numbers(*args):
#     result = 0
#     for i in args:
#         result += i
#     return result

# print(sum_numbers(1,2,3))

#*args ==> Argument
#*kwargs ==> Keyword Arguments


# def sum_numbers(a, b , *args, option =True):

#     result = 0
#     if option:
#         for i in args:
#             result += i
#         return a + b + result
#     else:
#         return result

# print(sum_numbers(1,2,3, option=False))


# def make_sentence(**kwargs):
#     result = ""
#     for i in kwargs.values():#*values() ==> return the values of the dictionary
#         result += i
#     return result

# print(make_sentence(a="hello ", b="world ", c="python"))


# def human_details(**kwargs):
#     for key, value in kwargs.items():
#         print(key, value)


# print(human_details(name="mike", age=20 , country="USA"))



# def fun1():
#     global x
#     x = 20
#     def fun2():
#         global x
#         x = 30
#         print('x =',x)
#     fun2() 

# fun1()
# print('x =',x)






