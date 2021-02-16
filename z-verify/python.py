####################
# Data Types
####################

####################
# Numeric
####################
num1 = 5 # integer
num2 = 5.5 # float | 1.525e2 == 1.525*10^2
# You can append the character e or E followed by a positive
# or negative integer to specify scientific notation.


# Complex numbers
# 0b or 0B - binary | 0o or 0O - octal | 0x or 0X - hexadecimal
num_a = 0b1011 # binary
num_b = 0o310 # octal
num_c = 0x12c # hexadecimal

# escape string
print('''He said, "What's there?"''') # use triple qoute
print('He said, "What\'s there?') # use backslash



######################
# Arithmetic Operator
######################
x = 5, y = 2

print(x + y)		# 7 | addition
print(x - y)		# 3 | subtraction
print(x * y)		# 10 | multiplication
print(x / y)		# 2.5 | division
print(x % y)		# 1 | modulus
print(x ** y)		# 25 | exponentiation
print(x // y)		# 2 | floor division

###################
# Assignment Operator
###################
x = 5
x += 5 # x = x + 5
x -= 5 # x = x - 5
x *= 5 # x = x * 5
x /= 5 # x = x / 5
x %= 5 # x = x % 5
x //= 5 # x = x // 5
x **= 5 # x = x ** 5

######################
# Comparison Operator
#####################
x == y # equal to
x != y # not equal to
x > y # greater than
x < y # less than
x >= y # greater than or equal to
x <= y # less than or equal to

######################
# Logical Operator
######################
x and y # Returns True if both statements are true
x or y # 	Returns True if one of the statements is true
not (x and y) # Reverse the result, returns False if the result is true

#####################
# Identity Operator
#####################
x is y # false
x is not y # true

####################
# Membership Operator
####################
L = ['red', 'green', 'blue']

print('red' in L)           # True
print('yellow' not in L)    # True
