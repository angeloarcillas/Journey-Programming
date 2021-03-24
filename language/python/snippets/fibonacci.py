n1 = 0
n2 = 1
max_sequence = int(input("Enter max sequence: "))
count = 0

while count < max_sequence:
  print(n1, end=', ')
  nth = n1 + n2
  n1 = n2
  n2 = nth
  count += 1
