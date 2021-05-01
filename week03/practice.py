number = 1
float_num = 1.1 #js에서는 일반적으로 floatNum
string = 'string'
boolean = True

# list, dict
num_list = [1, 2, 3, 4]
print(num_list[0])  # 1
num_list.append(5)  # add 5

string_dict = {'name': 'kim', 'age': 18}
print(string_dict['name'])  # kim

# python의 특징
# if statement, 들여쓰기가 아주 중요함
if number > 10:
    print('10보다 큽니다.')
else:
    print('10보다 작습니다.')
print('상관없음')

# for loop
for num in num_list:
    print(num)

# function
def func(num):
    print(num)

def sum(num1, num2):
    return num1+num2

print(sum(10, 20))

