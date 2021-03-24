# create a function
def func_name(params):
  print("code...")

# function with return statement
def sum(x, y):
  sum = x + y
  return sum

# VARIABLE SCOPE
x = 5 # global scope

def my_fn():
  x = 10 # local scope
  y = 20

  print(x) # 10

print(x) # 5
print(y) # error not defined


# default value
def greet(name, msg = "Hello"):
  print(msg, name) # Hello John Doe

greet("John Doe")

# accept one or more value | arbitrary argument
def names(*names):
  print(names)

# LAMBDA FUNCTION - (same as js arrow function)
square = lambda x: x * x


# RECURSION
def calc_sum(n):
  if n == 1:
    return 1
  else:
    return n + calc_sum(n - 1)

calc_sum(3) # 6