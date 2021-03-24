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