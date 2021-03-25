# STRING
str1 = "String"
multi_string = """first name: John
Last name: Doe
Age: 55"""

# string methods

# format a string
"My name is {fname}, I'm {age}".format(fname = "John", age = 36)

# to lowercase
"John".lower()

# to uppercase
"John".upper()

# tuple to string
', '.join(('John', 'mike', 'lisa')) # john, mike, lisa

# string to list
"Hello World".split() # ['Hello', 'World']

# find the index
"Hello World".find('World') # 5

# replace a string
"Hello World".replace("Hello", "Hey") # Hey World


# NUMBERS
int1 = 55
float1 = 5.5
float2 = 1.525e2 # 1.525*10^2

b = 0b1011 # binary
o = 0o310 # octal
h = 0x12c # hexadecimal

# BOOLEAN
t = True
f = False

type(int1) # get variable type

# Implicit Convertion

sum = int1 + float2 # int1 is converted to float

# Explicit Convertion
int2 = int(float1) # convert to integer
float3 = float(int1) # convert to float
str1 = str(int1) # convert to string

# loss of information during convertion
int2 = int(5.5) # 5

# LIST

list1 = [] # empty list
list2 = [1, 2, 3, 4, 5] # simple list
list3 = [1, "string", []] # complex list
list4 = ["string", ["nested", 5], [5]] # nested list

# access list
list2[1] # 2 | left to right
list2[-1] # 5 | right to left

# slice a list
list2[1:3] # [2,3] | index 1 to 3
list2[3:] # [4,5] | index 3 to end
list2[:-3] # [1,2] | index -3 to start

# change value
list2[1] = 10 # [1,10,3,4,5]
list2[2:3] = [10, 20] # [1,2,10,20,4,5]
list2[2:3] = [10, 20, 30] # [1,2,10,20,30,4,5]

# add an element
list2.append(6) # [1,2,3,5,6]

# insert at a specific index
list2.insert(1, 7) # [1,7,2,3,4,5]

# add a list
list2.extend([6,7,8,9]) # [1,2,3,4,5,6,7,8,9]
list2 + [6,7,8,9] # v2

list3 = ['a', 'b'] * 3 # ['a','b','a','b','a','b']

# delete a list
del list2

# delete an element
del list2[1] # [1,3,4,5]

# delete using slice
del list2[1:3]

# remove an item not index
list2.remove(5)
list3.remove('string')

# clear the item of a list
list2.clear()

# Pop item at index
list2.pop()
list2.pop(1) # pop at index 1

# copy a list
list_copy = list2.copy()

# TUPLE: same as list but cannot change the elemets
simple_tuple = (1,2,3)
complex_tuple = (1,2,3, [4,5,6])

# type()
t1 = ('a') # string
t1 = ('a',) # tuple
t1 = 'a', # tuple (parentheses is optional)

# slicing: same as list slicing
t1[1:5]
t1[-1]

# delete: same as list delete
del t1[2]

# count tuple item occurence
t1.count('a')

# get index of item
t1.index('a')

# check if item exist in a tuple
print('a' in t1)


# SETS
s1 = {1,2,3}

# add a set
s1.add(4) # {1,2,3,4}

# update a set
s1.update([4,5,6]) # {1,2,3,4,5,6}

# discard an item
s1.discard(2) # {1,3}
s1.remove(3) # same as discard but will throw an error if it doesnt exists

# remove a random item
s1.pop()

# remove all items
s1.clear()

# misc

# union
A = {1,2,3}
B = {2,3,4,5,6}

union1 = A | B
union2 = A.union(B)

# intersection
A = {1,2,3}
B = {2,3,4,5,6}

union1 = A & B
union2 = A.intersection(B)

# difference
A = {1,2,3}
B = {2,3,4,5,6}

union1 = A - B
union2 = A.difference(B)

# symmentric difference
A = {1,2,3}
B = {2,3,4,5,6}

union1 = A ^ B
union2 = A.symmetric_difference(B)
