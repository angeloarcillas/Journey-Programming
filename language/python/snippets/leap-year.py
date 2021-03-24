year = input("Enter a year: ")

if (year % 4) == 0:

  if (year % 100) == 0:

    if (year % 400) == 0:
      print(year, 'is a leap year')

    # 3rd if
    else:
      print(year, "is not a leap year")

  # 2nd if
  else:
    print(year, "is a leap year")

# 1st if
else:
  print(year, "is not a leap year")
