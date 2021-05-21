### bubble sort
```py
arr = [-1,5,2,-3,3,1,4,-2,6,0]
print(arr)

swapped = True  
  
while(swapped):  
  swapped = False  
  
  for i in range(len(arr) - 1):  
    
    if arr[i] > arr[i+1]:  
      # Swap
      arr[i], arr[i+1] = arr[i+1], arr[i]  
      swapped = True
```
### Sum of two
```py
# [2,7,11,15]
def twoSum(self, nums: List[int], target: int) -> List[int]:
  result = {} # placeholder
        
  for num_key,num_value in enumerate(nums): # convert to key/value pair
            
    if target - num_value in result: # check in keys
      return result[target - num_value], num_key # [result, key]
            
    result[num_value] = num_key # set possible answer
```

## count vowels
```js
def count_vowels(string):
  vowels = ['a', 'e', 'i', 'o', 'u']
  vowel_count = 0
  
  for char in string.lower():
    
    if char in vowels:
      vowel_count+=1
      
  return vowel_count
```

> https://en.wikipedia.org/wiki/List_comprehension
- newList = [ expression(element) for element in oldList if condition ]