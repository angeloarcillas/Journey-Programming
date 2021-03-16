print('Hello World!')

# string
string = 'John'

# multiline string
multi_str = """Hello
John
Doe"""

# integer
foo_bar = 55

# float
floats = 1.5e2

# complex number
complex_num = 1.5j

# binary, octal & hexadecimal number
binary = 0b1011
octal = 0o310
hexadecimal = 0x12c

# boolean
true = True
false = False

# multiple value at once
a,b,c = 'foo', 55, True

# same value at once
x = y = z = 'Foobar'

my_input = input() # input
print() # output

str() # convert to string
int() # convert to integer
float() # convert to float
type() # get variable type


# concatination
concat = 'Hello' + string + 'World'

# repeat string
repeat = 'a' * 3

print(3+2) # addition
print(3-2) # subtraction
print(3*2) # multiplication
print(3/2) # division
print(3%2) # remainder
print(3//2) # quotient
print(3**2) # exponential

# +=
# -=
# *=
# /=
# %=
# //=
# **=

# and, or, not
a = True
b = False

print(a and b) # false
print(a or b) # true
print(not a) # false

# if statement
if age > 55:
  print("old")
elif age > 21:
  print("adult")
else
  print("kid") # execute if above expressions fail

# while loop
while counter  < 5:
  counter =+ 1
  # code ...
  break # stop loop and else:
else:
  # execute after while except if break calls then skip

# for loop
for task in tasks: # item in iterable
  # code...

for task in tasks:
  # code...
else:
  # same as while else

break # stop current loop
continue # skip the rest of the code for the current iteration
pass # construct body that does nothing


# FUNCTION

def my_func(params):
  # code...
  return
