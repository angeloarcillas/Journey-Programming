expression = True
if expression:
  print('True')
else:
  print('False')

# if, else if, else
age = 12
if age < 12:
  print("smol")
elif age < 20:
  print("OK")
else:
  print("ded")

# nested if
if True: # outer if

  # inner if
  if False:
    print('True')

  # inner else
  else:
    print('False')

# outer else
else:
  print("outer else")