# STRING
str1 = "String"
multi_string = """first name: John
Last name: Doe
Age: 55"""

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