#Control Flow
x = 1
if x > 0 :
    print("Number is Positive")
elif x == 0 :
    print("Number is Zero")
else:
    print("Number is Negative")

#equals: a == b
#not equals: a != b
#less than: a < b
#greater than: a > b

a = 33
b = 200
if b > a:
    print("b is greater than a")

print("A") if a < b else print("B")


n = 330
y = 330
print("N") if n > y else print("=") if n == y else print("Y")

s = 200
r = 33
k = 500
#And
if s > r and k > s:
    print("Both conditions are true")

#Or
if s > r or s > k:
    print("At least one of the conditions is True")

#Not
if not a > b :
    print("a is NOT greater than b")

