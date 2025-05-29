#三角形
for i in range(1,4):
    print(i * '*',end='\n')

#倒转字符串
#[起始位置:终止位置:间隔]
#完整list访问:[1::1](从第一个参数读到最后一个)
#[1::2](间隔为2)
#[::-1](倒转)
list = sys.argv[1::1]
size = len(sys.argv[1::1])
result = ''
for i in range(1,size+1):
    result += list[i]
print(result[::-1])

for i in range(1,size+1):
    str = list[i]
print(str[::-1] , end = ' ')