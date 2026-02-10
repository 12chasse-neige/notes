# 程序设计基础（Python）

Chasse_neige

## 1. 导言

#### 转义字符

在 Python 中，`\t` 和 `\n` 等属于**转义字符**（Escape Characters），用于在字符串中表示特殊格式或不可见字符。以下是类似的常用转义字符及其作用：

##### 常见转义字符

| 转义字符 | 描述                                           | 示例                      | 输出效果                   |
| -------- | ---------------------------------------------- | ------------------------- | -------------------------- |
| `\n`     | **换行**（Newline）                            | `print("Hello\nWorld")`   | `Hello World`         |
| `\t`     | **水平制表符**（Tab，默认4空格）               | `print("Name\tAge")`      | `Name    Age`              |
| `\\`     | **反斜杠**（输出字面意义的`\`）                | `print("C:\\Users\\")`    | `C:\Users\`                |
| `\"`     | **双引号**（在双引号字符串内使用）             | `print("He said \"Hi\"")` | `He said "Hi"`             |
| `\'`     | **单引号**（在单引号字符串内使用）             | `print('It\'s me')`       | `It's me`                  |
| `\r`     | **回车符**（Carriage Return）                  | `print("Hello\rWorld")`   | `World`（覆盖前面的内容）  |
| `\b`     | **退格**（Backspace，删除前一个字符）          | `print("Hel\blo")`        | `Hello` → 实际输出 `Hlo`   |
| `\f`     | **换页符**（Form Feed，少见）                  | `print("Page 1\fPage 2")` | 分页效果（部分终端不显示） |
| `\ooo`   | **八进制值**表示的字符（如 `\141` 表示 `a`）   | `print("\141")`           | `a`                        |
| `\xhh`   | **十六进制值**表示的字符（如 `\x41` 表示 `A`） | `print("\x41")`           | `A`                        |

##### 使用场景

1. 格式化输出：  
   ```python
   print("Name:\tAlice\nAge:\t25")
   # 输出：
   # Name:   Alice
   # Age:    25
   ```

2. 文件路径：  
   ```python
   path = "C:\\Users\\Alice\\Documents\\file.txt"  # 避免转义错误
   ```

3. 多行字符串：  
   ```python
   multi_line = "Line 1\nLine 2\nLine 3"
   ```

4. 特殊符号：  
   ```python
   quote = "He said, \"Python is fun!\""
   ```

###### 注意事项

- 原始字符串（Raw String）： 
  在字符串前加 `r` 或 `R` 可以忽略转义字符，直接输出字面值：  
  
  ```python
  print(r"Hello\tWorld")  # 输出：Hello\tWorld
  ```
  
- 多行字符串简化写法： 
  使用三引号 `"""..."""` 或 `'''...'''` 可以直接换行，无需手动写 `\n`：  
  
  ```python
  text = """Line 1
  Line 2
  Line 3"""
  ```

## 2. 基础语法

### 2.2 对象与型式

##### 对象（object）

- Python语言使用对象及对象间的关系描述全部数据


- 于 Python而言，凡物皆对象


##### 对象的三大基本特征

- 本征值（identity）：用于区分不同对象的本质信息，为其在内存中的存储地址


- 本征值函数 id()：返回对象本征值


###### Ex. 

在 Cpython 实现中，id(1)、id(object) 分别返回1 与 object 的本征值

```python
# id(0)
2583863754960
# id(1.1)
2583868905200
# id('Python')
2583865094000
```

​	型式（type）

​	值（value）

## 3. 流程控制

### 3.4 匹配语句

##### 匹配语句与多路分支结构

- 任何需要匹配结构完成的任务，多路分支结构也能完成


- 代码功能相同时，匹配结构的效率一般低于多路分支结构


- 匹配结构的可读性和灵活性一般好于多路分支结构



```python
match subject_expr:
  case pattern_1 [if condition_1]:
  	block_1
  case pattern_2 [if condition_2]:
  	block_2
  ……
  case _:
	  block_wildcard
```

- 执行逻辑：按顺利匹配；匹配成功则执行，否则匹配下一子句；全部不匹配，则不执行任何子句体中代码


##### 软关键字“_”

- 交互式模式下，代表上一命令的执行结果


- 文本模式下，代表普通量


- 匹配语句中为通配符，代表任何情况均可匹配成功


- 注意：如果存在通配符模式，则其必须位于最后，否则其后续case子句得不到执行机会


###### Ex.

```python
weekday = eval(input('Please input a weekday in [0, 6]: '))
match weekday:
  case 0 | 6:
    print('Restday')
  case 1 | 2 | 3 | 4 | 5:
    print('Workday')
  case _:
    print('Oops...')
```

### 3.6 异常处理

#### 异常 

##### 定义

- 程序中出现的很少见情况，是一种或各种例外


##### 异常与错误

- 异常可以是错误，错误也可以是异常


- 异常不一定是错误。程序中出现的小概率事件也可以作为异常处理


- 错误不一定是异常。部分错误无法处理，一旦出现此类错误，程序也无法恢复运行


##### 异常处理程序

- 出现某种特定情况时，Python按照约定引发相关异常


##### 异常对象

- 在异常发生时，Python 构造该类异常的一个对象，并在填充必要信息后抛出。大多数情况下，异常对象的构造都只需要一条简单的构造函数调用

##### try-finally语句

```python
try:
	suite_try			#		尝试执行语句块suite_try
finally:
	suite_fin			#		无论如何，最后执行finally子句语句块suite_fin
```

try-finally中的语句可能引发异常。

##### except语句

- 任意一条 except 子句负责处理一类、一簇或全部异常

- Python 按照书写顺序搜索except 子句的 exception_type_1，以确定异常型式是否匹配；如匹配，则执行相应语句块

- 语句中 except 子句中的 as exception_object_1 部分可选，用于给捕获的异常对象命名；若存在，则可在子句中通过名称 exception_object_1 访问异常对象的详细信息

- 语句中 except 子句的 exception_type_1 部分同样可选，用于指定本子句可以捕获的异常型式

- 若未指定 except 子句中的异常型式名或异常型式元组 exception_type_1，则该子句可以捕获所有型式的异常

```python
try:
	suite_try
except exception_type_1 as exception_object_1:
	suite_exc_1
...
else:
	suite_els
finally:
	suite_fin
```

##### 异常引发语句：raise语句

```python
raise [except [from exception_object]] 		#		抛出异常对象 except 或构造并抛出异常类 except 的一个异常对象
```

- 无参数raise 语句：重引发当前作用域中最后活动的异常

- 若其不存在，触发RuntimeError 异常以示运行期错误

#### 断言 

##### assert语句

`assert expression_1, expression_2 `

等价于

```python
if __debug__:
   if not expression_1:
      raise AssertionError(expression_2)
```

如果 expression_1 为假，断言失败，引发 AssertionError 异常，用于构造具有特定信息的断言错误

###### Ex.

```python
total = 0
value = eval(input("A number: "))
	assert type(value) is int			#		如果value不是整数，Traceback接管程序，不会运行下面的部分。
while value:
	total += value
	value = eval(input("Next: "))
	assert type(value) is int, "Oops..." 		#		可在后面直接加上抛出内容
print(total)
```

## 4. 函数

### 4.1 函数调用

##### 函数调用

格式：`Function_name([parameter_list])`

- 无论参数是否存在，函数调用小括号均不能省略

- 参数传递：函数调用时通过 parameter_list 传递实际参数，所传递的实际参数列表必须与函数定义时的形式参数列表匹配

- 函数返回值：若存在，可参与后续运算或赋给其他数据对象

### 4.2 函数定义

##### 函数头与函数体

- 函数头：外部接口规范

​	函数头格式：`def function_name([parameter_list]):`

​	关键字def 后跟函数名称和形式参数列表

​	形式参数列表可选；若存在，书写在小括号中，多个参数以逗号分隔

- 函数体：内部业务逻辑

​	函数体内部代码必须整体缩进

###### Ex.

```python
def odd_or_even(n):
	if n % 2 == 1:
      print(n, "is odd.")
  else:
      print(n, "is even.")
#  验证代码
n = eval(input("An integer: "))
odd_or_even(n)
```

##### 嵌套函数

- 内层函数仅供外层函数调用，外层函数之外不得调用


###### Ex.

```python
def f():		  #  外层函数 f()
  print("Outer function f")
  def g():		#  内层函数 g()，仅供 f() 调用，须定义在实际调用前
      print("Inner function g")
  g()				#  函数 f() 调用内层函数 g()
#  若函数 g() 定义与调用顺序颠倒，则引发 UnboundLocalError 异常
f()				#  合法
f.g()				#  非法，不得调用嵌套函数，引发 AttributeError 异常
```

- 函数对象型式：函数对象的值型式为用户自定义函数

- 函数对象赋值：函数名称可赋给其他量，后者也可作为函数调用


###### Ex.

```python
# fib

[function fib at 0x1016b0b90]

# f = fib
# f
[function fib at 0x1016b0b90]
# f(1000)
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
```

##### 函数返回值格式

- 语句：return 语句返回一个或多个对象表达式，如`return value`、`return 2 * 2`、`return a, b`

​	出现场合：return 语句只能出现在函数定义中

- 无返回值函数

​	可以仅列写关键字return 而无对象或表达式

​	没有或只有关键字return 的函数“无”返回值

​	实际上，此时Python 自动返回对象 None

- 异常处理中的return 语句

​	当return 语句出现在try-finally 语句的suite-try 语句块中时，首先执行该函数的 suite-fin 语句块，函数随后才能终止执行

- 函数返回值可以为函数对象，通过该函数对象调用其引用的函数

###### Ex.

```python
def f():			#  外层函数 f()
  print("Outer function f")
  def g():	#  内层函数 g()
      print("Inner function g")
  return g	#  外层函数 f() 返回内层函数 g， f() 为 g() 的包装函数
h = f()			#  调用函数 f()，获得其返回的函数对象
h()				#  合法，通过 h 执行内层函数 g() 代码
f()()				#  合法，省略量 h 定义
```

##### 匿名函数

格式：`lambda [parameter_list]: expression`

等价于

```python
def function_name(parameter_list):
  return expression
```

###### Ex. 

```python
# f = lambda a, b: a + b
# type(f)
[class 'function']
# f(1, 2)
3
```

##### 函数标注

- 目的：提供用户自定义函数所使用的型式元信息

- 格式：参数型式标注使用“:”加型式名称，函数返回值型式标准使用“->”加型式名称

- 示例：`def Add(x: int, y: int = 0) -> int: return x + y`

##### 变量标注

- 格式：变量型式标注使用“:”加型式名称

- 示例（变量声明）：`a: int`

- 示例（变量定义）：`b: int = 0`

###### Ex.

编写函数is_prime()，判断正整数n (n≥2) 素性：

```python
def is_prime(n: int) -> bool:
   import math
    if type(n) is not int:
      raise TypeError('must be an integer, but "%s" found' % type(n))
    if n < 2:
      raise ValueError('must be greater than 1, but "%d" found' % n)
    if n == 2: 
      return True
    if n % 2 == 0: 
      return False
    for i in range(3, math.ceil(math.sqrt(n)), 2):
      if n % i == 0: return False
    return True
```

### 4.3 名空间与作用域

###### 名空间

- 从名称到对象的映射

- 实现上，大多数名空间表现为符号表，以字典的形式组织，而变量存储其中

- Python脚本中存在多个相互独立的名空间

###### 作用域

- 可访问名空间中标识符的文法区域

- 表现形式：在Python程序文本的某处，是否可以使用该名空间中的标识符

###### Ex.

```python
n = 42	#  全局量 n 位于全局名空间，其后代码（包括函数内部）均可访问

def double(x):	#  形式参数 x 也为局部量，位于局部名空间，函数内部可访问
   #  访问全局量 n
    print( "Before being doubled in double(): n = ", n )
    m = x * 2 	#  局部量 m 位于局部名空间，函数内部可访问
    print( "After being doubled in double(): m = ", m )
    print( "After being doubled in double(): n = ", n )
    return m

print( "Before calling double() in __main__: n = ", n )
m = double(n)	#  全局量 m 位于全局名空间，与函数内部 m 为两个独立对象
print( "After calling double() in __main__: m = ", m )
print( "After calling double() in __main__: n = ", n )

#  程序输出结果

#  调用函数前，全局量 n 值为 42
Before calling double() in __main__: n =  42
#  调用函数中，全局量 n 值为 42（加倍前）
Before being doubled in double(): n =  42
#  调用函数中，局部量 m 值为 84（加倍后）
After being doubled in double(): m =  84
#  调用函数中，全局量 n 值为 42（加倍后）
After being doubled in double(): n =  42
#  调用函数后，全局量 m 接受加倍值 84
After calling double() in __main__: m =  84
#  调用函数后，全局量 n 值维持 42 不变
After calling double() in __main__: n =  42
```

```python
n = 42	#  n 为全局量，位于全局名空间，其后代码（包括函数内部）均可访问
def double(x):
#  注释下一条语句，否则无法束定局部量 n，引发 UnboundLocalError 异常
#  print( "Before being doubled in double(): n = ", n )
#  定义同名局部量 n（赋值即定义），新对象具有局部作用域，整个函数内部均有效
#  局部量 n 遮盖同名全局量 n 的部分作用域，使其不可见
#  局部量 n 定义前虽不能访问，但仍不允许上条注释语句访问全局量 n
#  换言之，即使前述注释语句出现在局部量 n 定义之前，n 也被解释为局部量
  n = x * 2 
  print( "After being doubled in double(): n = ", n )
  return n
print( "Before calling double() in __main__: n = ", n )
m = double(n)
print( "After calling double() in __main__: m = ", m )
print( "After calling double() in __main__: n = ", n )

#  程序输出结果

#  调用函数前，全局量 n 值为 42
Before calling double() in __main__: n =  42
#  调用函数中，局部量 n 值为 42
After being doubled in double(): n =  84
#  调用函数中，全局量 m 接受加倍值 84
After calling double() in __main__: m =  84
#  调用函数后，全局量 n 维持原值 42 不变
#  即全局量 n 与局部量 n 虽同名，但不是同一对象
After calling double() in __main__: n =  42
```

##### 全局声明：使用global 关键字

- 声明格式：`global identifier`

- 多标识符全局声明：使用逗号分隔

- 全局声明中的标识符不得为形式参数、不得位于 for 循环目标列表、类定义、函数定义、导入语句或变量标注中

- 含义：将其后标识符解释为全局的

- 若该标识符在全局未定义，则此声明定义之，该全局量在函数调用结束后保持有效

  ###### Ex.

```python
n = 42	#  n 为全局量，位于全局名空间，其后代码（包括函数内部）均可访问

def double():	#  直接使用全局量 n，无需传递参数
  global n		#  声明全局量 n，函数内部对其赋值不会构造新的局部对象
  print( "Before being doubled in double(): n = ", n )
  n = n * 2 	#  直接写入全局量
  print( "After being doubled in double(): n = ", n )
  return n

print( "Before calling double() in __main__: n = ", n )
m = double()
print( "After calling double() in __main__: m = ", m )
print( "After calling double() in __main__: n = ", n )

#  程序输出结果

#  调用函数前，全局量 n 值为 42
Before calling double() in __main__: n =  42
#  调用函数中，全局量 n 值为 42（加倍前）
Before being doubled in double(): n =  42
#  调用函数中，全局量 n 值更新为 84（加倍后）
After being doubled in double(): n =  84
#  调用函数后，全局量 m 接受加倍值 84
After calling double() in __main__: m =  84
#  调用函数后，全局量 n 维持更新后的值 84 不变
After calling double() in __main__: n =  84
```

##### 非局部声明：使用 nonlocal **关键字**

- 声明格式：`nonlocal identifier`

- 多标识符全局声明：使用逗号分隔

- 含义：将其后标识符解释为非局部非全局的

- 从最内层嵌套名空间向外查找，一直到全局名空间（不含）

- 若未找到该标识符，引发SyntaxError 异常

- 有效性：放在当前作用域的起始位置

### 4.4 函数参数

##### 形式参数与实际参数

- 形式参数：函数定义时提供的参数

- 实际参数：函数调用时提供的参数

##### 参数传递

- 函数调用时，需要将实际参数传递给形式参数

  ###### Ex.

```python
#  调用函数 id() 查看对象本征值
n = 2

def double(x):
  print("In double(): id of x is %#x" % id(x))
  x *= 2
  print("In double(): id of x is %#x" % id(x))
  return x

print("In main:     id of n is %#x" % id(n))
m = double(n)
print("In main:     id of n is %#x" % id(n))
print("In main:     id of m is %#x" % id(m))

# 脚本输出
In main:     id of n is 0x22ecc0f0110
In double(): id of x is 0x22ecc0f0110
In double(): id of x is 0x22ecc0f0150
In main:     id of n is 0x22ecc0f0110
In main:     id of m is 0x22ecc0f0150
```

##### 缺省参数值定义格式

- 函数定义：`def multiply(x, times = 2): return x * times`

- 函数调用：a = multiply(42) 与b = multiply(42, 4)

- 双参数调用函数 multiply():

实际参数按照函数定义时的顺序分别传递给形式参数 x 与 times

- 单参数调用函数multiply()：

实际参数传递给x，times 使用缺省值2

##### 参数传递顺序

当存在多个缺省参数值时，函数调用时必须按照位置顺序提供非缺省值，不能跳过部分缺省参数值

示例：有函数定义 `def f(x, y = 1, z = 1): pass`，用 f(a)、 f(a, b)、f(a, b, c) 方式调用均合法，但用f(a, , c) 方式调用非法

###### Ex.

编写函数 input_int()，接受用户输入的整数，并检查返回数据的有效性。函数执行时应输出提示信息；若用户未提供该信息，函数应使用缺省信息提示用户。

```python
def input_int(prompt: str = None) -> int:
  t = input(prompt or "Please input an integer: ")
  while True:
      #  尝试转换为整数，非整数时引发异常；处理该异常，请求用户重新输入。
      #  得到合法数据，return 语句跳出无限循环，返回合法整数。
    try:
      return int(t)
    except ValueError:
      t = input("An integer needed. Try again: ")
m = input_int("Your age: ")
print(m)
n = input_int()
print(n)
```

### 4.5 递归

递归实现阶乘

```python
def fact(n):
   return n * fact(n-1) if n > 1 else 1
```

递归实现斐波那契数列通项

```python
def fib(n):
   return fib(n-1) + fib(n-2) if n > 1 else n
```

##### 关于递归与循环的基本结论

- 理论上，任何递归程序都可以使用循环迭代方法解决

- 递归函数代码更短小精悍

- 一旦掌握递归思考方法，递归比循环更易理解

##### Ex. 河内塔（Hanoi）

有三个分别命名为X、Y 和Z 的塔座,塔座X 上有n 个直径大小不同、从小到大分别编号为1,2, ...,n 的圆盘

编程任务：

将塔座X 上的 n 个圆盘移动到塔座Z 上

移动时遵循下述规则

每次仅能移动单个圆盘

圆盘可放置在X、Y 与Z 中的任意塔座上

任何时刻都不能将较大圆盘放在较小圆盘上

```python
#  将 n 个圆盘从 x 以 y 为中转移动到 z
def move(n = 8, x = "X", y = "Y", z = "Z") -> None:
#  移动单个圆盘；嵌套函数定义，单行函数体，可并行书写
   def move_one(n, x, z): print(n, "from", x, "to", z)
    if n < 1:
      return None
    if n == 1:
      move_one(1, x, z)
    else:
      move(n - 1, x, z, y)
      move_one(n, x, z)
      move(n - 1, y, x, z)
    return None
  
  #  整数输入函数
def input_int(prompt: str = None) -> int:
   t = input(prompt or "Please input an integer: ")
    while True:
      try:
         return int(t)
      except ValueError:
         t = input("An integer needed. Try again: ")

#  验证代码
n = input_int("Number of towers: ")
move(n)		#  n 值不能过大！否则会没完没了……
```

### 4.6 模块

##### 模块

- 定义：包含Python定义和语句的文本文件（脚本）

- 名称：模块文件名（不含扩展名“.py”）

- 在模块内部，使用全局变量 __name__ 获得模块名称字符串

##### 包

- 定义：包含 __path__ 属性的模块集合

```python
#  代码较为复杂时，应定义专门的模块初始化函数 main()。
#  亦可按 Python 规范命名为 _init() 或 __init__()。
def main():
   """Module initialization.

   This function is only used to initialize this module,
   Which should NOT be invoked out of this module.
   """
    if __name__ == "__main__":
      ...	#  模块单独运行时，需要执行的代码位于此处。
    else:
      ...	#  模块被导入时，需要执行的代码位于此处。

main()
```

## 5. 文本处理

### 5.1 字符串

##### 文档字符串

- 格　式：三引号构造的多行字符串，可选
- 若存在，必须为函数、类或模块的首条表达式
- 编译时字符串文字赋值给相应函数、类或模块 __doc__ 属性，作为其文档字符串（docstring）；执行脚本代码时忽略
- 文档字符串首行：功能摘要行，必须简洁，以描述对象目的
- 其余行：第二行必须为空白行，以分隔文档字符串摘要与具体描述
- 意　义：对象文档自动化

```python
# def doc_string_sample():
...    """Do nothing, but document it.
...
...    No, really, it doesn't do anything.
...    """
...    pass
...
# print(doc_string_sample.__doc__)
Do nothing, but document it.

   No, really, it doesn't do anything.
```

###### 字符索引下标

特定字符在字符串中的位置

- 正向递增：设字符串长度为 n，字符串首字符编号为 0，其后依次递增至 n–1

- 反向递减：设字符串长度为 n，字符串尾字符编号为 –1，其前依次递减至  –n

###### 单一字符处理

- Python 无字符型，仅包括单一字符的子串依然为字符串
- 示例：若 i 表示字符串 s 中特定字符的索引下标，使用 s[i] 引用该字符（串）
- 加法：字符串合并
- 示例：`x + y` 表示合并字符串 x 与 y，系统不添加额外空格
- 标量乘法：字符串复制
- 示例：`n * x` 或` x * n` 表示复制 n 次字符串 x，以构造新串
- 集合：子串从属关系运算
- 示例：若 x 为 y 的子串，则 `x in y` 返回 True，否则返回 False
- 索引：返回子串
- 示例：`s[i]` 或` s[m:n]`

###### Ex. 凯撒密码（Caesar cipher）

基本原理：对称加密体制，通过将字母前后移动一定位数实现加密和解密，位数为凯撒密码密钥

编写函数 caesar_encrypt() 与 caesar_decrypt()，将字符串“Fall leaves when leaves fall.”加密并解密

为简单计，仅加密英文字母，使用字母表旋转移动

注：文字游戏

英语单词回文：Fall leaves as soon as leaves fall.

中文翻译：落秋叶秋落，秋落叶落秋，叶落秋落叶，落叶秋叶落，叶落秋落也……

```python
#  加密函数
def caesar_encrypt(plaintext: str, key: int) -> str:
  r = ""
  for c in plaintext:
    if ord("a") <= ord(c) <= ord("z"):
      r += chr((ord(c) - ord("a") + key) % 26 + ord("a"))
    elif ord("A") <= ord(c) <= ord("Z"):
      r += chr((ord(c) - ord("A") + key) % 26 + ord("A"))
    else:
      r += c
  return r
#  验证代码
s = "Fall leaves when leaves fall."

t = caesar_encrypt(s, 3)
print("After encrypting:", t)

r = caesar_decrypt(t, 3)
print("After decrypting:", r)

#  运行结果
After encrypting: Idoo ohdyhv zkhq ohdyhv idoo.
After decrypting: Fall leaves when leaves fall.
```

##### 基本原则

无论字符串对象是否具名，均可调用字符串类的方法

##### 字符特征方法

- 方法 str.endwith(suffix[, start[, end]])：若字符串以 suffix 结尾，返回 True，否则返回 False
- 方法 str.isalnum()：若字符全为英文字母或数字，返回 True，否则返回 False
- 方法 str.isalpha()：若字符全为英文字母，返回 True，否则返回 False
- 方法 str.isdecimal()：若字符全为十进制数字，返回 True，否则返回 False
- 方法 str.isdigit()：若字符全为数字，返回 True，否则返回 False

- 方法 str.isidentifier()：若字符串为有效标识符，返回 True，否则返回 False
- 方法 str.islower()：若字符全为小写，返回 True，否则返回 False
- 方法 str.isnumberic()：若字符全为数值字符（含 Unicode 字符），返回 True，否则返回 False
- 方法 str.isprintable()：若字符全为可打印字符，返回 True，否则返回 False
- 方法 str.isspace()：若字符全为空格，返回 True，否则返回 False
- 方法 str.isupper()：若字符全为大写，返回 True，否则返回 False

- 方法 str.startwith(prefix[, start[, end]])：若字符串以 suffix 起始，返回 True，否则返回 False

##### 字符转换方法

- 方法 str.lower()：返回字符串副本，小写字符
- 方法 str.upper()：返回字符串副本，大写字符

##### 字符串操作方法

- 方法 str.find(sub[, start[, end]])：查找子串
- 方法 str.join(iterable)：合并字符串
- 方法 str.lstrip([chars])：删除字符串起始部分字符；缺省删除空格；chars 非前缀，而是其中所有字符组合均被删除
- 方法 str.partition(sep)：分割字符串为三元组，以 sep 首次发生为准，三元组包括分割符前子串，分割符和分割符后子串
- 方法 str.replace(old, new[, count])：返回字符串副本，使用新子串 new 替换 old；若指定 count，则替换前 count 次
- 方法 str.rfind(sub[, start[, end]])：逆向查找子串
- 方法 str.rpartition(sep)：逆向分割字符串为三元组
- 方法 str.rsplit(sep = None, maxsplit = -1)：逆向分割字符串，返回单词列表；若指定 maxsplit，则最多分为 maxsplit + 1 个子串
- 方法 str.rstrip([chars])：逆向删除字符串部分结尾字符；缺省删除空格；chars 非后缀，而是其中所有字符组合均被删除
- 方法 str.split(sep = None, maxsplit = -1)：分割字符串，返回单词列表；若指定 maxsplit，则最多分为 maxsplit + 1 个子串
- 方法 str.strip([chars])：删除字符串部分起始和结尾字符；缺省删除空格；chars 非后缀，而是其中所有字符组合均被删除

###### Ex. 

编写脚本，删除字符串“Why did he shoot at the stag?”中的所有字母“S”和“s”。

```python
#  显然，程序任务是对原字符串进行过滤，剔除那些不需要的字符。
src = 'Why did he shoot at the stag?'
#  dst = 'Why did he hoot at the tag?'
dst = ''.join(filter(lambda x: x not in 'Ss', src))
#  函数 filter() 本质上为过滤器。
#  其第二个参数 iterable 表示待过滤的原字符串，此处显然应为 src。
#  而第一个参数 function 为过滤函数，即能够发挥滤网功能的谓词函数。
#  即，此处定义的匿名函数实际上要做的事情是：对于 src 中的每一个 x，
#  判断 x 是否能够通过滤网，即是否不在字符串“Ss”中。
#  如果不在，则能通过滤网，由方法 join() 追加到目标字符串中。
```

### 5.2 字符串格式化

#### printf 风格

##### 简单格式：format % value

- format：待格式化字符串
- %：格式化操作符；格式化起始标志
- value：格式化值；多参数格式化时须为元组对象（数目必须一致）或映射对象（如字典）

###### 注意事项

- 容易导致问题，尽量不用此风格
- 尽量使用 str.format() 方法格式化字符串

##### 完整格式化规范

`%[(name)][flags][width][.precision][lenmod]type`

- 映射键 name：可选；如有，必须至于小括号中
- 填充标志 flags：可选；仅影响部分类型
- “#”、“0”、“　”、“+”
- 最小场宽 width：可选；该项至少占用 width 个字符宽度
- 若为“*”，则实际场宽从元组下个值中获取
- 精度 precision：可选；小数点后位数；缺省值为 6
- 若为“*”，则实际精度从元组下个值中获取

- 长度修饰符 lenmod：可选；若有误，则忽略 “h”、“l”、“L”
- 转换类型 type
- “d”、“i”：有符号十进制整数；“o”：有符号八进制整数；“X”、“x”：有符号十六进制整数（大小写）；“E”、“e”：浮点数指数形式（大小写）；“F”、“f”：浮点数十进制形式（大小写）；“G”、“g”：浮点数格式（大小写）；“c”：单个字符； “r”、“s”、“a”：字符串，分别调用 repr()、str()、ascii() 转换任意 Python 对象；“%”：自身

###### Ex.

```python
# print('The answer is %d.' % 42)
The answer is 42.

# print('The %dth number is %f.' % (42, 3.14))
The 42th number is 3.140000.

# print('%(language)s has %(number)03d quote types.' %
...   {'language': "Python", "number": 2})
...
Python has002 quote types.
```

#### 格式化方法

##### 方法原型

`str.format(*args, **kargs)`

- 功能：格式化字符串，返回格式化后的新字符串
- 注意事项
- 调用对象为模板字符串，可包含替换字段和其他文字
- 模板字符串包含多个替换字段，用于控制替换文本位置
- 替换字段以花括号表示，其中可包含位置参数的数字索引或关键字参数名称；如无索引，则按照实际值在 format() 方法中的出现顺序依次替换

###### Ex.

```python
# "1 + 2 = {}".format(1 + 2)
'1 + 2 = 3'

# "{0} + {1} = {2}".format(1, 2, 1 + 2)
'1 + 2 = 3'

# "{a} + {b} = {c}".format(a = 1, b = 2, c = 1 + 2)
'1 + 2 = 3'
```

##### 格式

`{[index]:[[fill]align][sign][#][0][width][group_option][.precision][lenmod][type]}`

- 格式说明
- 填充格式 fill 与 0：前者填充任意字符，后者补 0
- 对齐标志 align
- `<`：左对齐；`>`：右对齐；`=`：对于数值，首位数前强制填充，缺省时补 0； `^`：居中
- 符号标志 sign
- “+”：显示正负号；“-”：仅显示负数符号；“　”：正数符号位显示空格

- 替换形式标志 #：仅适用于数值型
- 非十进制整数显示前缀，浮点数强制显示小数点，“g”或“G”格式转换保留尾部 0
- 场宽标志 width：指定最小显示宽度
- 分组选项标志 group_option：
- “_”：位数多时，插入千位分隔符（十进制整数和浮点数）或四字符分隔符（二进制、八进制和十六进制整数）；“,”：千位分隔符
- 精度标志 precision：为数值时，指定小数点后位数；非数值时，指定最大场宽

##### 注意事项

- 类型标志 type

- “s”：字符串
- “b”：二进制整数；“c”：字符；“d”：十进制整数；“o”：八进制整数；“x”：十六进制整数（小写）；“X”：十六进制整数（大写）；“n”：十进制整数，插入分隔符
- “e”：小写指数格式浮点数，缺省精度为 6；“E”：大写指数格式浮点数，缺省精度为 6；“f”：浮点数，缺省精度为 6；“g”：通用格式，根据数据情况，使用小写指数格式；“G”：通用格式，根据数据情况，使用大写指数格式；“n”：与“g”类似，但使用预设分隔符；“%”：数值乘以 100 后以“f”格式显示百分数，后跟百分号

###### Ex. 

```python
#  文本对齐与场宽

# '{:<30}'.format('left aligned')
'left aligned                  '

# '{:>30}'.format('right aligned')
'                 right aligned'

# '{:^30}'.format('centered')
'           centered           '

# '{:*^30}'.format('centered')
'***********centered***********'
#  符号

# '{:+f}; {:+f}'.format(3.14, -3.14)
'+3.140000; -3.140000'

# '{: f}; {: f}'.format(3.14, -3.14)
' 3.140000; -3.140000'

# '{:-f}; {:-f}'.format(3.14, -3.14)
'3.140000; -3.140000'
#  百分比与类型特定格式

# points, total = 19, 22
# 'Correct answer: {:.2%}'.format(points / total)
'Correct answers: 86.36%'

# import datetime
# d = datetime.datetime(2049, 10, 1, 8, 8, 8)
# '{:%Y-%m-%d %H:%M:%S}'.format(d)
'2049-10-01 08:08:08'

# '{{{:s} braces here}}'.format('Curly')
'{Curly braces here}'
```

#### 法串

##### 法串型文字格式

- 在普通串型文字前添加字母“f”前缀
  - 示例：`f'The value of pi is approximately {math.pi:.4f}.'`
- 结果：'The value of pi is approximately 3.1416.'

##### 注意事项

- 法串型文字比普通串型文字更灵活，但并非语言的必需

### 5.3 文件

##### 文件定义

- 存储在外部介质上的信息（数据序列）

##### 文件分类

###### 文本文件

- 由单一特定编码字符串组成，如“.txt”文件

- 文件内容格式：多为可打印字符，信息一般分行，有分行符

- 易用性：计算机和人均容易创建、修改、阅读

###### 二进制文件

- 由二进制字节流组成，如“.mp4”文件

- 文件内容格式：不同文件的二进制数据流格式不同
- 易用性：计算机容易创建、修改、阅读；人则较为困难

##### 文件打开函数

###### 函数格式

`open(file, mode = "r", buffering = -1, encoding = None, errors = None, newline = None, closefd = True, opener = None)`

- 功能描述：打开 file 文件，成功时返回文件对象，失败时引发 IOError 异常

###### 函数参数

- file：字符串型或整型；文件名，可包含文件路径；与文件相关的文件描述符（整型）

- mode：字符串型；可选，文件打开模式，缺省为文本文件读模式
- buffering：整型；可选，缓冲区策略
- encoding：字符串型；可选，文件编码格式，缺省编码与平台有关，仅适用于文本文件
- errors：字符串型；可选，指定编码错误如何处理；"strict" 时引发 ValueError， "ignore" 则忽视编码错误，但可能导致数据丢失
- newline：字符串型；可选，设置换行符格式

closefd：布尔型；可选，关闭文件时是否关闭其文件描述符，缺省为 False；当使用文件名打开文件时，无需提供此参数
opener：函数型；可选，指定用于打开文件的可调用对象

###### 函数返回值

- 文件对象，类型（io 模块）与模式有关

- 文本模式：io.TextIOWrapper 类型
- 二进制读模式：io.BufferedReader 类型
- 二进制写与追加模式：io.BufferedWriter 类型
- 二进制读写模式：io.BufferedRandom 类型

###### 文件打开模式

- "r"：读模式，缺省；若文件不存在，引发 FileNotFoundError 异常
- "w"：写模式；若文件不存在，创建之；若存在，覆盖式写入，原内容擦除
- "x"：写模式；若文件不存在，创建之；若存在，引发 FileExistsError 异常
- "a"：写模式；若文件不存在，创建之；若存在，新信息追加至文件尾部

- "b"：二进制模式
- "t"：文本模式，缺省
- "+"：读写模式；打开磁盘文件并更新
- 文件打开模式说明
- "r"、"w"、"x"、"a" 与 "b"、"t"、"+" 可混合使用
- "rt"：缺省模式
- "w+b"：二进制读写模式，覆盖式写入，原内容擦除
- "r+b"：二进制读写模式，原内容不擦除

##### 文件关闭方法

`fileobject.close()`

- 功能说明：关闭文件，fileobject 为文件对象

###### Ex.

```python
ft = open("社会主义核心价值观.txt", "r")
print(ft.readlines())
ft.close()
#  以二进制读模式打开文件。
fb = open("社会主义核心价值观.txt", "rb")
print(fb.readlines())
fb.close()

['社会主义核心价值观\n', '富强、民主、文明、和谐；\n', '自由、平等、公正、法治；\n', '爱国、敬业、诚信、友善。\n']

[b'\xc9\xe7\xbb\xe1\xd6\xf7\xd2\xe5\xba\xcb\xd0\xc4\xbc\xdb\xd6\xb5\xb9\xdb\r\n', b'\xb8\xbb\xc7\xbf\xa1\xa2\xc3\xf1\xd6\xf7\xa1\xa2\xce\xc4\xc3\xf7\xa1\xa2\xba\xcd\xd0\xb3\xa3\xbb\r\n', b'\xd7\xd4\xd3\xc9\xa1\xa2\xc6\xbd\xb5\xc8\xa1\xa2\xb9\xab\xd5\xfd\xa1\xa2\xb7\xa8\xd6\xce\xa3\xbb\r\n', b'\xb0\xae\xb9\xfa\xa1\xa2\xbe\xb4\xd2\xb5\xa1\xa2\xb3\xcf\xd0\xc5\xa1\xa2\xd3\xd1\xc9\xc6\xa1\xa3\r\n']
```

##### 文件读取方法

- 方法 fileobject.readall()：读取文件全部内容，返回字符串或字节流
- 方法 fileobject.read(size = -1)：读取文件全部内容，返回字符串或字节流；若提供参数 size，则仅读取前 size 个字符
- 方法 fileobject.readline(size = -1)：读取文件一行内容，返回字符串或字节流；若提供参数 size，则仅读取前 size 个字符
- 方法 fileobject.readlines(sizehint = -1)：读取文件全部行，返回行列表对象；若提供参数 sizehint，则近似读取前 sizehint 个字符；此参数为建议值，可能会被忽略

###### Ex.

编写函数 `read_txt()`，读取文本文件“社会主义核心价值观.txt”，显示其内容。

```python
#  注意：本程序未处理任何异常。
filename = "社会主义核心价值观.txt"
def read_txt(filename: str, mode: str = "rt") -> None:
  f = open(filename, mode)
  t = f.readlines()		#  读入全部文本行，文件太大时处理效率较低或无法处理。
  f.close()
  print(t)
read_txt(filename)

#  程序输出
['社会主义核心价值观\n', '富强、民主、文明、和谐；\n', '自由、平等、公正、法治；\n', '爱国、敬业、诚信、友善。\n']

#  注意：本程序未处理任何异常。
filename = "社会主义核心价值观.txt"
def read_txt(filename: str, mode: str = "rt") -> None:
  f = open(filename, mode)
  for line in f.readlines():
      #  原文本行尾已有换行符，无需输出额外的换行符。
      print(line, end = '')
	f.close()
read_txt(filename)

#  注意：本程序有异常处理功能。
filename = "社会主义核心价值观.txt"
def read_txt(filename: str, mode: str = "rt") -> None:
  f = open(filename, mode)
  try:
    #  注意：用 for line in f 代替时，直接遍历文件对象，无需构造列表对象，
    for line in f.readlines():			#  但需频繁访问文件，实际优劣难言。
       print(line, end = '')
  finally:
      f.close()
read_txt(filename)
```

##### 场景语句格式

```python
with context_expression [as target]:
  with_suite
```

###### 场境目的与意义

- 类似异常处理机制，替代 try-finally 以简化代码
- 对资源访问进行有效控制
- 资源访问期间无论是否发生异常都执行清理操作，确保释放资源
- 典型应用场合
- 文件使用后自动关闭之；多线程编程时自动获取和释放锁

###### 场境语句说明

- 计算 context_expression，返回场境管理器对象
- 自动调用 context_expression.__enter__() 方法进入场境
- 返回值赋给 target（若存在）
- 目标变量 target 既可以是单个量，也可以是元组（必须使用小括号对）
- 执行语句体 with_suite
- 无论执行语句体时是否发生异常，都自动调用 context_expression.__exit__() 方法退出场境

###### Ex.

编写函数 read_txt()，读取文本文件“社会主义核心价值观.txt”，显示其内容

```python
#  注意：本程序有异常处理功能。（使用场景语句格式均自带异常处理功能）
filename = "社会主义核心价值观.txt"

def read_txt(filename: str, mode: str = "rt") -> None:
   with open(filename, mode) as f:
      for line in f:
         print(line, end = '')

read_txt(filename)
```

##### 文件写入方法

- 方法 fileobject.write(s)：向文件中写入字符串或字节流
- 方法 fileobject.writeline(lines)：将字符串列表写入文件；参数 lines 为待写入的字符串列表对象
- 方法 fileobject.seek(offset)：改变文件操作位置
- 参数 offset 取值：0（文件头部）、1（当前位置）、2（文件尾部）

###### Ex.

将下述两首词写入文件，写入时输出第一首词作。

《望江南·超然台作》

　　——苏　轼

春未老，风细柳斜斜。

试上超然台上望，半壕春水一城花。

烟雨暗千家。

寒食后，酒醒却咨嗟。

休对故人思故国，且将新火试新茶。

诗酒趁年华。 


《临江仙·夜归临皋》

　　——苏　轼

夜饮东坡醒复醉，归来仿佛三更。

家童鼻息已雷鸣。

敲门都不应，倚杖听江声。

长恨此身非我有，何时忘却营营。

夜阑风静縠纹平。

小舟从此逝，江海寄馀生。

```python
# -*- coding: utf-8 -*-

ci_1 = "《望江南·超然台作》\n" \
       "　　——苏　轼\n\n" \
       "春未老，风细柳斜斜。\n" \
       "试上超然台上望，半壕春水一城花。\n" \
       "烟雨暗千家。\n\n" \
       "寒食后，酒醒却咨嗟。\n" \
       "休对故人思故国，且将新火试新茶。\n" \
       "诗酒趁年华。\n\n"
       
ci_2 = "《临江仙·夜归临皋》\n" \
       "　　——苏　轼\n\n" \
       "夜饮东坡醒复醉，归来仿佛三更。\n" \
       "家童鼻息已雷鸣。\n" \
       "敲门都不应，倚杖听江声。\n\n" \
       "长恨此身非我有，何时忘却营营。\n" \
       "夜阑风静縠纹平。\n" \
       "小舟从此逝，江海寄馀生。\n\n"

#  控制标志：是否显示详细提示信息
verbose = True

def show(info):
  print("正在写入：\n\n" + info + "\n写入完毕。\n"
        if verbose else "写入完毕。\n")
  
def write_txt(filename: str, info: str, notify: callable = None):
   #  使用 try 结构，处理文件打开失败时的异常
  try:
      with open(filename, "a+") as f:
        f.write(info)
        if notify:
            notify(info)
  except:
    print("Oops...")

def main() -> int:
  filename = input("请输入文件名：") + ".txt"
  write_txt(filename, ci_1, notify = show)
  write_txt(filename, ci_2)
  return 0

main()
```

### 5.4 随机性

#### 随机模块

- 随机模块 random：生成伪随机数
- 原理：梅森旋转算法
- 簿记函数
- 函数 seed(a = None, version = 2)：初始化随机数发生器
- 设定随机数发生器种子，可用于重复生成随机数序列
- 若 a 为 None 或无参数，使用系统当前时间作为随机数发生器种子，否则使用整数 a
- 函数 getstate()：返回随机数生成器状态对象
- 函数 setstate(state)：设置随机数生成器状态

##### 整数和字节串对象函数

- 函数 getrandbits(k)：生成 k 位（二进制）随机整数
- 函数 randbytes(n)：生成长度为 n 的随机字节串对象
- 函数 randrange(stop) 与 randrange(start, stop[, step])：返回区间 range(0, stop) 和 range(start, stop, step) 中的随机整数
- 函数 randint(a, b)：返回闭区间 [a, b] 中的随机整数

###### Ex.

编写函数，随机生成 n 个 [a, b] 之间的整数并输出。

```python
def rand_ints(n: int, a: int, b: int) -> None:
  import random
  for i in range(n):
    print(random.randint(a, b), end = ' ')
  print()
```

###### 序列函数

- 函数 choice(seq)：返回非空序列 seq 中的随机元素
- 函数 choices(pop, weights = None, *, cum_weights = None, k = 1)：按照特定权重从非空序列 pop 中随机选择 k 个元素构造一个新列表并返回
- 函数 shuffle(x[, random])：随机排列序列 x 中的元素，返回打乱后的序列
- 可选参数 random 自 Python 3.9 起已过时，并由 Python 3.11 移除

- 函数 sample(pop, k, *, counts = None)：从序列 pop 中随机选择 k 个元素返回
- Python 3.9 引入参数 counts，用于表示 pop 中各元素的重复次数

##### 实值分布函数

- 函数 random()：返回区间 `[0.0, 1.0)` 中的随机浮点数
- 函数 uniform(a, b)：返回区间 [a, b] 中的随机浮点数

- 函数 triangular(low, high, mode)：返回区间 [low, high] 中的随机浮点数，以 mode 为中点的对称分布

  参数 low 缺省为 0.0，high 缺省为 1.0，mode 缺省为 0.5

- 函数 betavariate(alpha, beta)：Beta 分布

- 函数 expovariate(lambd)：指数分布

- 函数 gammavariate(alpha, beta)：Gamma 分布

- 函数 gauss(mu, sigma)：高斯分布（正态分布）

  线程不安全版本，效率轻微高于 normalvariate(mu, sigma)，但在多线程环境下，多条线程有可能得到同样的随机数据

- 函数 lognormvariate(mu, sigma)：对数正态分布

- 函数 normalvariate(mu, sigma)：高斯分布（正态分布）

  线程安全版本

- 函数 vonmisesvariate(mu, kappa)：Von Mises 分布

- 函数 paretovariate(mu, kappa)：Pareto 分布

- 函数 weibullvariate(mu, kappa)：Weibull 分布

###### Ex.

编写函数，随机生成 n 个 [a, b] 之间的实数并输出。

```python
def rand_floats(n: int, a: float, b: float) -> None:
  import random
  for i in range(n):
    print("%.4f" % random.uniform(a, b), end = ' ')
  print()
```

##### 秘密模块 secrets

- 功能：用于生成加密级的强安全随机数，以管理密码、账户认证、安全令牌（token）等秘密信息
- 随机模块 random 不能用于安全目的

###### 常用函数

- 类 SystemRandom：操作系统提供的高质量随机数生成器
- 函数 choice(seq)：返回非空序列中随机元素
- 函数 randbelow(n)：返回 [0, n) 中随机整数
- 函数 randbits(k)：返回 k 位随机整数

###### Ex.

编写函数，返回 n 位（不少于 5 位，缺省为 6 位）字符的随机密码。注意，随机密码中至少应包含 2 位大写字母，2 位小写字母和 1 位数字。

```python
def gen_password(n: int = 6) -> str:
  import string, secrets
  assert n >= 5
  alphabet = string.ascii_letters + string.digits
  while True:
      pwd = ''.join((secrets.choice(alphabet) for i in range(n)))
      if    sum((c.islower() for c in pwd)) >= 2 and  \
            sum((c.isupper() for c in pwd)) >= 2 and  \
            any((c.isdigit() for c in pwd)):
         return pwd
```

###### Ex.

部分操作系统使用“tmp_XXXXXX.txt”这样的格式串定义临时文件名。当需要创建临时文件时，随机生成一个字符序列，替换上述文件名中的全部字符“X”。编写函数，按上述格式随机生成一个临时文件名。

```python
filename_template = "tmp_XXXXXX.txt"

def gen_tmp_filename() -> str:
  import string, secrets
  alphabet = string.ascii_letters + string.digits
  tmp = ''.join((secrets.choice(alphabet) for i in range(6)))
  return filename_template.replace("XXXXXX", tmp)
```

###### Ex.

编写程序，随机生成 10 个 [10, 99] 之间的整数。将这些整数转换为字符串，输出至临时文件中，整数之间以逗号分隔。随后，从该临时文件中读取字符串并输出。

```python
filename_template = "tmp_XXXXXX.txt"

def gen_tmp_filename() -> str:
  import string, secrets
  alphabet = string.ascii_letters + string.digits
  tmp = ''.join((secrets.choice(alphabet) for i in range(6)))
  return filename_template.replace("XXXXXX", tmp)

def rand_ints(n: int, a: int, b: int) -> str:
  import random
  return ",".join((str(random.randint(a, b)) for i in range(n)))

def write_to_tmp_file(filename: str, info: str) -> None:
  with open(filename, "wt") as f:
    f.write(info)
  return

def read_from_tmp_file(filename: str) -> str:
  with open(filename, "rt") as f:
     s = f.read()
  return s
```

### 5.5 数据持久化

##### 数据持久化

序列化与解列化

- 序列化：将 Python 对象转换为字节串后输出到文件中
- 解列化：从文件中读取字节串，并重构相应的 Python 对象
- 注意事项：在序列化与解列化过程中，为方便处理，经常需要为数据设计特殊的存储和表示格式
- 编制模块 marshal：对象序列化与解列化
- 读写二进制 Python 对象

- 函数 dump(value, file[, version])：向打开的文件 file 中写入 value

  file 必须为可写入的二进制文件；value 必须为模块所支持的型式； version 则为本模块所使用的数据转储版本号，缺省为 4

- 函数 dumps(value[, version])：返回 dump(value, file) 将要写入文件的字节串对象

  如果 value 属于不支持的型式，引发 ValueError 异常

- 函数 load(file)：从打开的二进制文件 file 中读取一个值

  如果未读取到有效值，引发 EOFError、ValueError 或 TypeError 异常

- 函数 loads(bytes)：将一个字节串对象转换为一个值

  如果未找到有效值，引发 EOFError、ValueError 或 TypeError 异常

###### Ex.

编写程序，将列表对象持久化。

```python
import marshal

ls1 = [1, 2, 3, 4]
dump_file = "list_dump_file.dat"

with open(dump_file, "wb") as f:
   marshal.dump(ls1, f)

with open(dump_file, "rb") as f:
   ls2 = marshal.load(f)

print(ls2)
```

- 泡制模块 pickle：对象序列化与解列化

- 泡制：将 Python 对象结构转换为字节串的序列化过程
- 解泡：将字节串重新转换为 Python 对象结构的解列化过程
- 泡制模块优点
- 泡制模块可以对已完成序列化的对象保持跟踪，而编制模块无此功能
- 泡制模块可以对用户自定义型式的对象进行序列化，而编制模块无此功能
- 泡制模块具有更好的 Python 版本兼容性，而编制模块无此保证

- 泡制模块类

- 泡制器类 Pickler：控制泡制过程

- 解泡器类 Unpickler：控制解泡过程

- 泡制缓冲区类 PickleBuffer：控制泡制与解泡时的缓冲区

- 泡制模块函数

- 函数 dump(obj, file, protocol = None, *, fix_imports = True, buffer_callback = None)：向二进制文件对象 file 中写入对象 obj 的泡制格式数据

  等价于 Pickler(file, protocol).dump(obj)

- 函数 dumps(obj, protocol = None, *, fix_imports = True, buffer_callback = None)：返回对象 obj 的泡制格式数据

- 函数 load(file, *, fix_imports = True, encoding = "ASCII", errors = "strict", buffers = None)：从二进制文件对象 file 中读取泡制格式数据并重构对象结构

  等价于 Unpickler(file).load()

- 函数 loads(data, /, *, fix_imports = True, encoding = "ASCII", errors = "strict", buffers = None)：从字节串对象 data 中读取泡制格式数据并重构对象结构

###### Ex.

编写程序，将列表对象持久化。

```python
import pickle

ls1 = [1, 2, 3, 4]
dump_file = "list_dump_file.dat"

with open(dump_file, "wb") as f:
   pickle.dump(ls1, f)

with open(dump_file, "rb") as f:
   ls2 = pickle.load(f)

print(ls2)
```

- 搁架模块 shelve
- 使用数据库进行对象序列化与解列化
- 搁架类 Shelf
- 使用 DBM 数据库格式的文件来存储持久化数据对象
- 表现行为类似于字典

## 6. 数据组织

### 6.1 复合数据

##### 复合数据类型

- 非基本类型，由基本类型和其他复合数据类型复合而成
- 复合数据类型对象
- 复合数据类型的对象非简单对象，包含复杂信息
- 复合数据类型分类
- 序列（sequence）、集合（set）和映射（mapping）

#### 序列

##### 序列定义

- 元素有限有序的集合，元素可重复

##### 序列分类

- 有常序列：对象一经创建，不可改变
- 字符串（str）、元组（tuple）、字节串（bytes）、区间（range）
- 无常序列：可以修改目标对象的值
- 列表（list）、字节数组（bytearray）

##### 序列通用运算

- x in s：如果元素 x 位于序列 s 中，返回 True，否则返回 False
- x not in s：如果元素 x 不位于序列 s 中，返回 True，否则返回 False
- s + t：合并两个序列，结果为合并后的序列对象
- s * n 或 n * s：标量乘法。复制 n 遍序列 s 中的元素，返回新序列对象。n 为 0 或负值时，构造一个与 s 型式相同的空序列对象

- s[i]：下标操作符。获取序列中的第 i 号元素（第 i 项）。注意，索引下标可以为负值，此时实际索引等价于 len(s) + i。下同
- s[i:j]：切片操作符。获取序列中从第 i 项至第 j 项的子序列。包括 i，但不包括 j。不提供 j，则切至序列尾部；不提供 i，则从序列首部开切
- s[i:j:k]：切片操作符。间隔 k 个元素（k 为步长），获取序列中从第 i 项至第 j 项的子序列。同样包括 i，但不包括 j。不提供 k，则缺省步长为 1；不提供 j，则切至序列尾部；不提供 i，则从序列首部开切

- len(s)：获取序列的长度，即当前实际存储的项数
- min(s)：获取序列的最小元
- max(s)：获取序列的最大元
- s.index(x[, i[, j]])：在从第 i 项至第 j 项的区间内，获取元素 x 的首次发生位置。包括 i，但不包括 j。不提供 j，则查找至序列尾部；不提供 i，则从序列首部开始查找。如果未查到 x，则引发 ValueError 异常
- s.count(x)：统计元素 x 在序列 s 中的出现次数

##### 无常序列通用运算

- `s[i] = x`：将序列 s 的第 i 项设为 x
- `s[i:j] = t`：用可迭代对象 t 替换序列 s 中从第 i 项至第 j 项的子序列
- `del s[i:j]`：删除序列 s 中从第 i 项至第 j 项的子序列。等价于 `s[i:j] = []`
- `s.append(x)`：将元素 x 追加至序列 s 的尾部。等价于 `s[len(s):len(s)] = [x]`
- `s.clear()`：删除序列 s 中的全部元素。等价于 `del s[:]`

- `s.copy()`：构造序列 s 的一个副本。等价于 s[:]。注意，此操作为浅复制
- `s.extend(t)` 或 `s += t`：将序列 t 追加至序列 s 的尾部。等价于 `s[len(s):len(s)] = t`
- `s *= n`：标量乘赋。更新序列 s，复制 n 遍序列中的元素。n 为 0 或负值时，清空序列 s
- `s.insert(i, x)`：将元素 x 作为新的第 i 项插入序列 s 中。等价于 `s[i:i] = [x]`

- `s.pop()` 或 `s.pop(i)`：删除并返回序列 s 中的第 i 项。缺省值为 -1，即删除序列中的最后一个元素
- `s.remove(x)`：删除序列 s 中元素 x 的首次发生。如果 x 不存在，则引发 ValueError 异常
- `s.reverse()`：逆转序列 s 中的所有元素。注意，本操作在原序列中进行元素逆序，并不构造新序列；同时，本操作也不返回元素逆转后的序列对象

#### 集合

##### 集合定义

- 元素有限无序的集合，元素不可重复

##### 集合通用运算

- 集合长度（项数）函数：len(s)
- 集合不可索引，无切片
- 集合可迭代
- 支持并、交、差、对称差等集合运算

##### 集合分类

- 无常集合（set）
- 有常集合（frozenset）

##### 映射定义

- 由任意索引集合索引的有限无序对象集合，元素不可重复

###### 映射通用运算

- 映射长度（项数）函数：len(s)
- 键值对构造与处理

###### 映射分类

- 无常映射：字典（dict）、有序字典（OrderedDict）
- 注意事项：有序字典并不意味着字典中的元素是“真正”有序的，而只是表示这些元素将保持它们插入字典时的次序不变
- Python 3.7 之后，内置字典 dict 采用有序字典 OrderedDict 语义

##### 对象的比较方法

- 等性比较：方法 `T.__eq__()`、`T.__ne__()`
- 序性比较：方法 `T.__lt__()`、`T.__le__()`、`T.__gt__()`、`T.__ge__()`
- 序列、集合与映射均可以进行比较运算

###### 序列比较

- 仅能进行同型对象之间的比较

- 跨型式等性比较只能得到不等的结论，而跨型式序性比较只能引发 TypeError 异常
- 等性与序性比较均采用词典序

##### 集合比较

- 等性比较：判断两个集合是否完全相同
- 要求 in 和 not in 的右操作数要么为一个可迭代对象，要么该类实现了方法 `T.__contains__()`
- 序性比较：判断一个集合是否为另一个集合的子集、真子集、超集或真超集

##### 映射比较

- 等性比较：判断两个映射的键值对是否完全相同
- 序性比较：不支持，引发 TypeError 异常

### 6.2 元组

##### 元组对象

- 类型 tuple
- 定义：同质或异质数据的有限有常序列
- 元组分列式格式：(t1, t2, …, tn)
- 元组操作符为逗号“,”，非小括号对“()”，后者在不引起混淆时可省略

###### 元组对象基本特征

- 元组项允许重复，可以为任意 Python 对象，包括元组
- 元组项数有限，但项数具体值无限制
- 若项为其他无常对象的引用，则允许修改该无常对象

- 空元组：仅有小括号对（parentheses）
- 元组分列式或对象：使用逗号和小括号对
- 示例：单项元组 a, 或 (a,)，多项元组 a, b 或 (a, b)
- 构造函数：class tuple([iterable])
- 返回元组对象；iterable 可能为序列对象、支持迭代的容器对象、迭代器对象；若 iterable 为元组，则直接返回之
- 示例：`tuple("abc") -> ("a", "b", "c")`
- 示例：`tuple([1, 2, 3]) -> (1, 2, 3)`

##### 元组应用场合

- 多变量同时赋值
- 示例：`a, b = 0, 0` 或` (a, b) = (0, 0)`
- 多变量循环
- 示例：`for i, j in ((0,1), (1,2), (2,3)): pass`
- 函数返回值
- 示例：`def f(): return 0, 1`
- 可变函数参数
- 示例：`def f(a, *args): pass`

##### 函数的可变参数

`def f(x, y, *args): pass	`

- 参数定义：*args 表示形式参数 args 接受元素数目可变的元组作为实际参数
- 适用场合：函数调用前不知道函数实际参数个数
- 注意事项
- 可变参数必须出现在位置参数之后
- 可变参数一般位于函数参数列表末尾，其后无其他参数或只有可变纯关键字参数

###### Ex.

编写函数，对多个实数求和。要求首个实数以位置参数形式传入，其后实数以元组型式传入。

```python
#  尾部添加下划线的唯一目的是为了区分标准库中的同名函数。
#  可变参数的型式标注为元素型式，而非元组型式——本人对此并不同意！
def sum_(x0: float, *xs: float) -> float:
  total = x0
  for x in xs:
    total += x
  return total

t = (1.1, 2.2, 3.3)
r = sum_(1.0, *t)
print(r)
```

###### Ex.

编写函数，向文件中写入元组，元组各项以特定分隔符分隔。

```python
#  写入文件 filename，写入模式 mode。
#  数据分隔符 separator，具体数据来自 items 元组。
def write_items(filename, mode, separator, *items):
  with open(filename, mode) as f:
    f.write(separator.join(items))

#  写入文件“wt.txt”的具体内容为“red green blue”。
write_items("wt.txt", "w+", " ", "red", "green", "blue")
```

##### 打包类

`class zip(*iterables, strict = False)`

- 功能：返回打包对象，其 __next__() 方法返回一个元组，元组的第 i 项来自第 i 个可迭代对象
- 说明：__next__() 方法在参数列表中的最短可迭代对象序列遍历结束后停止，并引发 StopIteration 异常
- Python 无 unzip() 类型或函数——因为不需要！

##### 解包操作符

`“*”`

- 解包复合数据对象，展开其全部元素
- 注意：解包操作符只能处理单层复合数据

```python
# a, b = (1, 2, 3, 4), ("One", "Two", "Three", "Four")
# zip(a, b)
[zip object at 0x0000000002F6C4C8]
#  直接引用 a 和 b，打包，构造成新嵌套元组。
# t = tuple(zip(a, b))
# t
((1, 'One'), (2, 'Two'), (3, 'Three'), (4, 'Four'))
# zip(*t)
[zip object at 0x000000000037EE48]
#  解包 t，得到四个对象（均为二元组），重新打包，构造新嵌套元组。
# c, d = tuple(zip(*t))
# print(c, d, sep = ", ")
(1, 2, 3, 4), ('One', 'Two', 'Three', 'Four')
```

##### 推出表达式格式

- `(yield[ expression_list])`：执行 yield 表达式时，计算 expression 的值，将值传回给主调函数，生成器函数随后被挂起；再次执行 yield 表达式时，生成器函数恢复至上次的挂起状态，继续执行并推出后续值……
- `(yield from expression)`：expression 必须为可迭代对象，由其将生成的值直接传递给调用生成器函数的主调函数
- 此过程称为委托

###### 注意事项

- 当 yield 表达式位于赋值号右侧且为唯一表达式时，小括号对可省略
- 语义上，推出语句与推出表达式等价

###### Ex.

编写程序，创建一个生成器函数，按需生成区间 [0, n) 内的整数，并以之构造元组对象。

```python
import collections.abc

def range_generator(n: int) -> collections.abc.Iterator[int]:
  #  更 Pythonic 代码，一行足矣：yield from range(n)
  i = 0
  while i < n:
    yield i
    i += 1

t = tuple(range_generator(10))
print(t)
```

### 6.3 列表

#### 列表对象

- 类型 list
- 定义：同质或异质数据的有限无常序列
- 列表分列式格式：[t1, t2, …, tn]

#### 列表对象基本特征

- 列表项一般同质
- 列表项有序
- 列表项允许重复，可以为任意 Python 对象，包括列表
- 列表项数有限，但项数具体值无限制

- 空列表：仅有中括号对（square brackets）
- 列表分列式或对象：使用逗号和中括号对
- 示例：单项列表 [a]，多项列表 [a, b, c]
- 列表蕴涵式：`[f(x) for x in iterable]`
- 构造函数：`class list([iterable])`
- 返回列表对象；iterable 可能为序列对象、支持迭代的容器对象、迭代器对象；若 iterable 为列表，则返回其副本
- 示例：`list("abc") -> ["a", "b", "c"]`
- 示例：`list((1, 2, 3)) -> [1, 2, 3]`

###### Ex.

执行下述命令，查看其输出结果。

```python
# r = range(8)
# ls1 = [x for x in r]						#  利用区间对象生成列表对象。
# ls1
[0, 1, 2, 3, 4, 5, 6, 7]
# ls2 = [x + 1 for x in r]				#  利用区间对象生成列表对象。
# ls2
[1, 2, 3, 4, 5, 6, 7, 8]
# ls3 = [ord(c) for c in "Python"]	#  利用字符串文字生成列表对象，
# ls3												#  保存字符 ASCII 码值。
[80, 121, 116, 104, 111, 110]
# t = [[]] * 3							#  构造列表，包含三个重复空列表元（项）
# t											#  t 包含一个空列表元的三次引用
[[], [], []]
# t[0].append(1)						#  向第 0 项列表元追加元素 1
# t											#  三次引用均访问同一列表元
[[1], [1], [1]]

# t = [[] for i in range(3)]		#  构造列表，生成三个不同的空列表元
# t											#  t 包含三个空列表元
[[], [], []]
# t[0].append(1)
# t[-1].append(2)
# t											#  第 0 项与第 2 项子列表的数据已更新
[[1], [], [2]]
# a = [1, 2, 3, 4]
# for i in range(len(a)):				#  第一种列表遍历方案
...    print("a[", i, "]=", a[i], sep = "", end = "; ")
...
a[0]=1; a[1]=2; a[2]=3; a[3]=4;
# for e in a:								#  第二种列表遍历方案
...    print("a[", a.index(e), "]=", e, sep = "", end = "; ")
...
a[0]=1; a[1]=2; a[2]=3; a[3]=4;
# for i, e in enumerate(a):				#  第三种列表遍历方案
#  使用枚举类构造函数构造枚举对象，使用元组进行遍历，同时获得元素下标和值。
...    print("a[", i, "]=", e, sep = "", end = "; ")
...
a[0]=1; a[1]=2; a[2]=3; a[3]=4;
```

##### 排序方法

` list.sort(key = None, reverse = False)`

- 采用原位排序策略，即直接在原列表对象上进行排序
- 原位排序占用较少的额外存储空间，无需构造新的列表对象
- 本方法不返回已序的列表对象，而只是简单返回 None
- 缺省排序规则：升序
- 如需降序，将参数 reverse 的值设为 True。或者，在缺省排序完毕后调用方法 list.reverse()。在数据集较大时，后一种策略的效率稍差
- 排序必然需要比较元素的大小关系。但有时，方法 list.sort() 并不清楚应该如何比较。此时需要向形式参数 key 传递用于比较的明确信息
- 注意：key 并非比较函数对象，而是提供具体应该比较什么东西的函数对象，其正式名称为键函数

`sorted(iterable, *, key = None, reverse = False)`

- 参数 iterable 为待排序的可迭代对象，其他参数与列表排序方法相同
- 非原位排序，本函数返回新的已序的列表对象
- 缺省排序规则：升序
- 如需降序，将参数 reverse 的值设为 True；或者在缺省排序完毕后调用方法 reversed()。注意：在数据集较大时，后一种策略的效率稍差
- 比较操作：排序算法必须比较元素的大小关系
- 有时，排序算法并不清楚应该如何比较元素的大小关系，此时需要向形式参数 key 传递用于比较操作的明确信息
- 注意：key 并非比较函数对象，而是提供具体应该比较什么东西的函数对象，其正式名称为键函数

#### 列表蕴涵式

list comprehension

- 目的：构造列表分列式的简化手段
- 书写格式：[expression for-clause … if-clause …]
- 中括号封装的列表元素蕴涵表达式
- 后跟一条 for 子句，其后跟随其他 for 与/或 if 子句（若存在）
- 计算逻辑
- 在 for 与 if 子句场境中计算元素蕴涵表达式，生成新列表

###### Ex.

```python
# squares = []
# for x in range(10):
...    squares.append(x ** 2)
...
# squares
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# #  与下述两行代码功能相同，最后一种写法最简洁。
# #  映射匿名函数至区间，对该区间中所有项逐一求平方，生成新列表。
# squares = list(map(lambda x: x ** 2, range(10)))
# #  对区间中所有项 x，逐一求平方，生成新列表。
# squares = [x ** 2 for x in range(10)]

# #  嵌套列表蕴涵式
# matrix = [[1, 2, 3], [4, 5, 6]]
# #  矩阵转置；转置后矩阵共三行，对其中每一行，生成对应全部列元素。
# [[i[j] for i in matrix] for j in range(len(matrix[0]))]
[[1, 4], [2, 5], [3, 6]]
```

###### Ex.

编写函数 qsort()，实现快速排序算法。
程序任务：对于数据序列 s，对其进行升序排序，输出排序后的新序列
快速排序基本原理
选择一个元素作为排序基准值，一般选择首元素
重排数据集，小于基准值的元素都移动至基准值前，大于基准值的元素都移动至基准值后，此过程成为分解
分别排序基准值前后的两个子数据集，并与基准值合并

```python
def qsort(s: list) -> list:
   return [] if len(s) == 0 else \
      qsort([x for x in s[1:] if x < s[0]]) + [s[0]] + \
      qsort([x for x in s[1:] if x >= s[0]])

#  验证代码
s = [3, 2, 3, 4, 6, 1, 0, 9, 8, 7]
print("s =", s)
t = qsort(s)
print("t =", t)

#  程序输出
s = [3, 2, 3, 4, 6, 1, 0, 9, 8, 7]
t = [0, 1, 2, 3, 3, 4, 6, 7, 8, 9]
```

##### 读取CSV文件

- CSV：逗号分隔值（comma-separated values）
- CSV 文件特征
- 纯文本，单一字符编码；以行为单位存储数据，无空行；标题行一般位于首行；以逗号分隔各列
- CSV 文件制作
- 使用普通文本编辑器或 Microsoft Office Excel（另存为 CSV 格式）

###### Ex.

编写函数，读取 CSV 文件中的数据。

日期,代码,名称,开盘价,收盘价,最高价,最低价,成交量,成交额

2018-12-28,000001,上证指数,2483.62,2493.90,2505.11,2478.33,1.19亿,1060亿

2018-12-28,399001,深证成指,7229.87,7239.79,7282.50,7174.90,1.56亿,1338亿

2018-12-28,601398,工商银行,3.92,3.91,3.96,3.91,111.50万,5.93亿

2018-12-28,000538,云南白药,42.62,41.73,42.89,41.40,24618,1.83亿

```python
#  第一版代码

#  此函数将全部数据读入单个列表，每行数据为一项。
def read_csv(filename):
  with open(filename, "rt") as f:
      t = f.readlines()
  return t

def main():
  filename = "20181228_stocks.csv"
  t = read_csv(filename)
  print(t)
  return 0

main()

#  程序输出如下：
['日期,代码,名称,开盘价,收盘价,最高价,最低价,成交量,成交额\n', '2018-12-28,000001,上证指数,2483.62,2493.90,2505.11,2478.33,1.19亿,1060亿\n', '2018-12-28,399001,深证成指,7229.87,7239.79,7282.50,7174.90,1.56亿,1338亿\n', '2018-12-28,601398,工商银行,3.92,3.91,3.96,3.91,111.50万,5.93亿\n', '2018-12-28,000538,云南白药,42.62,41.73,42.89,41.40,24618,1.83亿\n']
```

```python
#  第二版代码

#  此函数将全部数据读入单个列表，每行每列数据为一项。
def read_csv(filename):
  t = []
  with open(filename, "rt") as f:
     for line in f:
        #  对每一行数据，删除行尾换行符，
        #  使用逗号分割成多项，逐一追加至列表。
        t += line.replace("\n", "").split(",")
  return t

#  程序输出如下：

['日期', '代码', '名称', '开盘价', '收盘价', '最高价', '最低价', '成交量', '成交额', '2018-12-28', '000001', '上证指数', '2483.62', '2493.90', '2505.11', '2478.33', '1.19亿', '1060亿', '2018-12-28', '399001', '深证成指', '7229.87', '7239.79', '7282.50', '7174.90', '1.56亿', '1338亿', '2018-12-28', '601398', '工商银行', '3.92', '3.91', '3.96', '3.91', '111.50万', '5.93亿', '2018-12-28', '000538', '云南白药', '42.62', '41.73', '42.89', '41.40', '24618', '1.83亿']
```

```python
#  第三版代码

#  此函数将全部数据读入二维嵌套列表，每行每列数据为一项。
def read_csv(filename):
  t = []
  with open(filename, "rt") as f:
    for line in f:
      #  对每行数据，删除行尾换行符，使用逗号分割成多项，构造列表 s。
      s = line.replace("\n", "").split(",")
      #  将列表 s 作为元素追加至列表 t，构造二维嵌套列表。
      t.append(s)
  return t

#  程序输出如下：

[['日期', '代码', '名称', '开盘价', '收盘价', '最高价', '最低价', '成交量', '成交额'], ['2018-12-28', '000001', '上证指数', '2483.62', '2493.90', '2505.11', '2478.33', '1.19亿', '1060亿'], ['2018-12-28', '399001', '深证成指', '7229.87', '7239.79', '7282.50', '7174.90', '1.56亿', '1338亿'], ['2018-12-28', '601398', '工商银行', '3.92', '3.91', '3.96', '3.91', '111.50万', '5.93亿'], ['2018-12-28', '000538', '云南白药', '42.62', '41.73', '42.89', '41.40', '24618', '1.83亿']]

#  完整的程序代码

def read_csv(filename):
  t = []
  with open(filename, "rt") as f:
    for line in f:
      s = line.replace("\n", "").split(",")
      t.append(s)
  return t

#  格式化输出
def show(t):
   #  输出表头
  print("{:<11s}{:<7s}{:<5s}{:>6s}{:>6s}{:>6s}{:>6s}{:>7s}{:>7s}".format(t[0][0],
         t[0][1], t[0][2], t[0][3], t[0][4], t[0][5], t[0][6], t[0][7], t[0][8]))
   #  输出各行数据。日期、代码与名称后额外保留一个半角空格，以便于识别。
  for row in t[1:]:
      print("{:<11s}".format(row[0]), end = " ")
      print("{:<7s}".format(row[1]), end = " ")
      print("{:<5s}".format(row[2]), end = " ")
      print("{:>8s}".format(row[3]), end = " ")
      print("{:>8s}".format(row[4]), end = " ")
      print("{:>8s}".format(row[5]), end = " ")
      print("{:>8s}".format(row[6]), end = " ")
      print("{:>8s}".format(row[7]), end = " ")
      print("{:>8s}".format(row[8]))

def main():
  filename = "20181228_stocks.csv"
  t = read_csv(filename)
  show(t)
  return 0

main()

#  程序输出如下：

日期        代码    名称        开盘价   收盘价   最高价   最低价    成交量    成交额
2018-12-28  000001  上证指数   2483.62  2493.90  2505.11  2478.33    1.19亿    1060亿
2018-12-28  399001  深证成指   7229.87  7239.79  7282.50  7174.90    1.56亿    1338亿
2018-12-28  601398  工商银行      3.92     3.91     3.96     3.91  111.50万    5.93亿
2018-12-28  000538  云南白药     42.62    41.73    42.89    41.40     24618    1.83亿
```

#### 栈（stack）

- 栈定义：其元素满足先进后出（first-in-last-out）规则的数据结构
- 使用列表构造栈
- 使用列表定义栈：stack = [1, 2, 3]
- 压栈：stack.append(4)
- 元素压栈后的栈中数据：stack = [1, 2, 3, 4]
- 出栈（弹出栈顶元素）：stack.pop()
- 栈顶元素出栈后的栈中数据：stack = [1, 2, 3]

#### 队列（queue）

- 定义

- 元素满足先进先出（first-in-first-out）规则的数据结构
- 队列构造
- 使用列表构造队列
- 在列表尾部追加元素效率较高，从列表头部弹出元素效率很低（后续数据需要移动）
- 使用双端队列类 deque 构造队列
- 需导入模块：import collections
- 仅有 C 语言实现版本，没有 Python 源代码

##### 双端队列定义

- 入队和出队动作均可以发生在队列的两端
- 双端队列类 deque 构造函数
- class collections.deque([iterable[, maxlen]])
- 按照从左到右顺序遍历可迭代对象 iterable，用其元素构造双端队列；如果未指定 iterable，则构造空双端队列
- 如果未指定 maxlen 或其值为 None，则双端队列容量无限；如果指定了此参数，则双端队列受囿于此处指定的最大值
- 当双端队列已满时，在其一端追加元素将导致另一端有同样数目的元素被自动丢弃。这种现象称为尾部过滤，有时相当有用

##### 双端队列方法与属性

- 方法 deque.append(x)：将 x 追加至双端队列的右端
- 方法 deque.appendleft(x)：将 x 追加至双端队列的左端
- 方法 deque.clear(x)：清空双端队列中的所有元素
- 方法 deque.copy(x)：复制双端队列。注意，此为浅复制
- 方法 deque.count(x)：返回元素 x 在双端队列中的出现次数
- 方法 deque.extend(iterable)：将 iterable 中的全部元素追加至双端队列的右端

- 方法 deque.extendleft(iterable)：将 iterable 中的全部元素追加至双端队列的左端。注意，左端追加将导致 iterable 中的元素逆序
- 方法 deque.index(x[, start[, stop]])：返回 x 在双端队列 [start, stop) 区间的首次发生位置。如无，引发 ValueError 异常
- 方法 deque.insert(i, x)：将元素 x 作为第 i 项插入双端队列中。对于有最大长度限制的双端队列，如果插入操作导致元素个数超出限制，则引发 IndexError 异常

- 方法 deque.pop()：删除并返回双端队列右端的元素。如无，引发 IndexError 异常
- 方法 deque.popleft()：删除并返回双端队列左端的元素。如无，引发 IndexError 异常
- 方法 deque.remove(value)：删除 value 的首次发生。如无，引发 ValueError 异常
- 方法 deque.reverse()：原位逆序所有元素，返回 None

- 方法 deque.rotate(n = 1)：向右旋转 n 步；n 如为负值，则向左旋转。当双端队列 d 非空时，向右旋转一步相当于 d.appendleft(d.pop())，向左旋转一步则相当于 d.append(d.popleft())
- 属性 deque.maxlen：双端队列可容纳元素的最大值。如为 None，则表示无限制
- 双端队列支持的其他函数和操作
- 支持内置函数 sum()、len() 与 reversed()；支持成员操作符 in 与下标操作符 d[i]

### 6.5 集合

#### 集合类型 set

- 定义：同质或异质数据的有限无常无序集合
- 集合分列式格式：{t1, t2, …, tn}
- 集合对象基本特征
- 集合项一般同质
- 集合项无序，不允许重复
- 集合项必须为任意可哈希 Python 对象，不允许使用列表和集合等不可哈希对象（无常对象）作为集合元素
- 集合项数有限，但项数具体值无限制

##### 构造函数

`class set([iterable])`

- 参数 iterable 为可迭代对象，一般为元组、列表等序列类型
- 示例：`set((1, 2, 3)) -> {1, 2, 3}`
- 示例：`set([1, 2, 3]) -> {1, 2, 3}`
- 示例：`set("hello") -> {"l", "o", "e", "h"}`
- 示例：`set(b"hello") -> {104, 108, 101, 111}`
- 空集：无参数调用 set()，“{}”用于构造空字典

- 集合蕴涵式：与列表蕴涵式类似
- 格式：`{expression for-clause … if-clause …}`
- 示例：若 `squares = {x ** 2 for x in range(10)}`，则结果为 `{0, 1, 64, 4, 36, 9, 16, 49, 81, 25}`
- 示例：若存在 `vector = [-2, -1, 0, 1, 2]`，则 `squares = {x ** 2 for x in vector} -> {0, 1, 4}`
- 示例：若 `s = {c.upper() for c in "Python" if c not in "aeiou" }`，则结果为 `{'H', 'Y', 'P', 'N', 'T'}`

##### 更新操作

- 方法 s.add(e)：添加元素 e
- 若集合中已存在 e，则此方法无效果
- 方法 s.remove(e)：删除元素 e
- 若集合中不存在 e，则引发 KeyError 异常
- 方法 s.discard(e)：删除元素 e
- 若元素 e 存在，则删除；若不存在，无效果
- 方法 s.pop()：删除集合中任意一个元素
- 若集合为空集，则引发 KeyError 异常

- 方法 s.clear()：删除集合全部元素
- 方法 s.copy()：返回当前集合的浅拷贝副本

##### 集合元素计数

- 函数 len(s)：返回集合元素个数

##### 比较操作

- 方法 s1.isdisjoint(s2)：若 s1 与 s2 无相同元素，返回 True，否则返回 False

- 常规比较操作符`<`、`<=`、`>`、`>=`、`==`、`!=`、`is`、`is not`、`in`、`not in`
- “in”与“not in”用于判断元素是否位于集合中
- 方法 s1.issubset(s2)：检测 s1 是否为 s2 的子集
- 等价于 `s1 < s2` 或 `s1 <= s2`，前者用于判断 s1 是否为 s2 的真子集
- 若集合类型不同，返回 False
- 方法 s1.issuperset(s2)：检测 s1 是否为 s2 的超集
- 等价于 `s1 > s2` 或 `s1 >= s2`，前者用于判断 s1 是否为 s2 的真超集
- 若集合类型不同，返回 False

##### 集合运算

- s1 | s2 或方法 s1.union(s2)：集合并运算，返回集合类型与 s1 相同，元素为 s1 或 s2 成员
- s1 |= s2 或方法 s1.update(s2)：集合并运算，更新集合 s1，追加 s2 元素
- s1 & s2 或方法 s1.intersection(s2)：集合交运算，返回集合类型与 s1 相同，元素同时为 s1 和 s2 成员
- s1 &= s2 或方法 s1.intersection_update(s2)：集合交运算，更新集合 s1，删除 s1 中非 s2 的元素

- s1 - s2 或方法 s1.difference(s2)：集合差运算，返回集合类型与 s1 相同，元素必须为 s1 成员，但不能为 s2 成员
- s1 -= s2 或方法 s1.difference_update(s2)：集合差运算，更新集合 s1，删除 s1 中所有 s2 的元素
- s1 ^ s2 或方法 s1.symmetric_difference(s2)：集合对称差运算，返回集合类型与 s1 相同，删除 s1 和 s2 的共同元素
- s1 ^= s2 或方法 s1.symmetric_difference_update(s2)：集合对称差运算，更新集合 s1，删除 s1 和 s2 的共同元素，追加仅出现在 s2 中的元素

###### Ex.

编写函数，随机生成 10 个 [10, 99] 之间的整数。要求这些随机整数不得重复。

```python
def gen_ints(n: int, lb: int, ub: int) -> set[int]:
  import random
  assert n <= ub - lb + 1
  s = {random.randint(lb, ub) for _ in range(n)}
  while len(s) < n:			#  在出现重复元素时，补充不足的元素
    s.add(random.randint(lb, ub))
  return s

s = gen_ints(10, 10, 99)
print(s)
```

#### 有常集合类型 frozenset（冻集）

- 定义：同质或异质数据的有限有常无序集合
- 有常集合对象基本特征
- 有常集合可哈希，因而可作为普通集合的元素
- 有常集合不可更新：所有可以在集合型式上实施的更新和集合运算，在有常集合上都无法实施
- 其他特征与普通集合相同
- 有常集合构造
- 构造函数：class frozenset([iterable])
- 有常集合构造格式：frozenset({t1, t2, …, tn})

### 6.6 字典

字典（词典、关联数组、哈希表）类型 dict

- 定义：同质或异质数据的有限无常无序键值对集合
- 字典分列式格式：{key1: value1, key2: value2, …, keyn: valuen}
- 字典对象基本特征
- 字典项一般异质
- 字典项无序，不允许重复：与集合类似
- 字典项的键（key）必须为可哈希对象，具有唯一性；值（value）可以为任意 Python 对象，包括字典
- 字典项数有限，但项数具体值无限制

- 空字典：仅有花括号对或 class dict()
- 字典分列式：花括号对与逗号、冒号分隔的键值对
- 示例： {"a": 1, "b": 2, 3: {"c": 3}, "d": [1, 2]}
- 构造函数
- class dict(**kwargs)：使用可变关键字参数列表构造新字典
- class dict(iterable, **kwargs)：使用对象 iterable 构造新字典，使用 kwargs 增加或替换新键值对
- class dict(mapping, **kwargs)：使用映射对象 mapping 的键值对构造新字典，使用 kwargs 增加或替换新键值对

```python
# #  构造空字典。
# d = {}
# d
{}
# d = dict()
# d
{}
```

```python
# #  使用可变关键字参数列表构造新字典。
# d = dict(one = 1, two = 2, three = 3)
# d
{'one': 1, 'two': 2, 'three': 3}
```

```python
# #  使用可变关键字参数列表构造新字典。
# key = "language"
# d1 = {key: "Python"}
# d1
{'language': 'Python'}
```

```python
# #  注意：可变关键字参数名称转型为字符串后作为字典的键。
# d2 = dict(key = "Python")
# d2
{'key': 'Python'}
```

```python

# d1 == d2
False
```

```python
# #  使用可迭代对象构造新字典。
# s = [("one", 1), ("two", 2), ("three", 3)]
# d = dict(s)
# d
{'one': 1, 'two': 2, 'three': 3}
```

```python
# #  使用列表蕴涵式构造键值对序列，由之构造新字典。
# r = range(4)
# s = "abcd"
# #  注意：列表蕴涵式同时生成全部元素，占用内存较多。
# d = dict([(k, s[k]) for k in r])
# d
{0: 'a', 1: 'b', 2: 'c', 3: 'd'}
```

```python
# #  使用字典蕴涵式构造新字典。
# r = range(4)
# s = "abcd"
# d = {k: s[k] for k in r}
# d
{0: 'a', 1: 'b', 2: 'c', 3: 'd'}
```

```python
# #  使用映射对象构造新字典。
# r = range(4)
# s = "abcd"
```

```python
# #  使用 zip() 函数构造 r 与 s 的一一映射。
# #  r 与 s 的第 0 项构成键值对，r 与 s 的第 1 项构成键值对，……
# z = zip(r, s)
```

```python
# #  使用映射后的键值对序列构造新字典。
# #  可省略映射对象定义：d = dict(zip(r, s))。
# d = dict(z)
# d
{0: 'a', 1: 'b', 2: 'c', 3: 'd'}
```

```python
# #  自定义映射回调函数，返回键值对二元组。
# def my_mapper(key, value):...   return key, value
...
# #  定义映射对象。
# #  调用 map() 函数，使用自定义映射回调函数参数 my_mapper。
# #  形成 r 与 s 上的一一映射。
# m = map(my_mapper, r, s)
# #  使用映射后的键值对序列构造新字典。
# #  可省略映射对象定义：d = dict(map(my_mapper, r, s))。
# d = dict(m)
# d
{0: 'a', 1: 'b', 2: 'c', 3: 'd'}
```

#### 生成式

- 生成式目的
- 很多时候只是需要一个临时的可迭代对象
- 没必要在迭代过程开始前完成该可迭代对象中所有元素的预生成——程序完全可以在需要时再生成其中的元素
- 生成器函数可以完成此项任务
- 与蕴涵式不同，生成器函数仅在需要时才逐一推出可迭代对象的相应元素，在运行时占用内存较少
- 生成器函数也是函数，在不需要代码重用的场合，定义生成器函数本身成为了一种负担

- 生成式意义
- 通过引入生成器表达式（生成式），Python 语言允许在不显式定义生成器函数的基础上完成生成器函数的全部功能
- 例如，使用生成式构造一个可迭代对象（此处为键值对序列），并由此构造字典对象
- 生成式语法规范
- 定义格式：(expression for-clause … if-clause …)
- 实际执行时，生成式隐式地构造一个生成器对象，具有由生成器函数显式构造的生成器对象一样的功能

###### Ex.

```python
# #  使用生成式构造键值对序列，由之构造新字典。
# #  注意：生成式仅在需要时才逐一生成相应元素，占用内存很少。
# d = dict(((k, s[k]) for k in r))
# d
{0: 'a', 1: 'b', 2: 'c', 3: 'd'}

# #  在不引起混淆时，生成式的小括号对可省略。
# d = dict((k, v) for k in r for v in s)
# d   #  Why?
{0: 'd', 1: 'd', 2: 'd', 3: 'd'}

# #  使用生成式构造键值对序列，由之构造新元组列表。
# r = range(4)
# s = "abcd"
# t = list(((k, v) for k in r for v in s))
# t
[(0, 'a'), (0, 'b'), (0, 'c'), (0, 'd'), (1, 'a'), (1, 'b'), (1, 'c'), (1, 'd'), (2, 'a'), (2, 'b'), (2, 'c'), (2, 'd'), (3, 'a'), (3, 'b'), (3, 'c'), (3, 'd')]

# #  注意：使用列表 t 构造字典时，重复键值对被删除，仅余最后一对。
# d = dict(t)
# d
{0: 'd', 1: 'd', 2: 'd', 3: 'd'}
```

#### 字典对象操作

- 函数 list(d)：返回字典的键列表对象
- 函数 len(d)：返回字典长度（项数）
- 索引操作符 d[key]：返回键 key 对应值
- 若字典中不存在 key，则引发 KeyError 异常
- 赋值操作符 d[key] = value：设置键 key 对应值
- 若字典中不存在 key，则增加之
- 操作 del d[key]：删除键 key 对应项
- 若字典中不存在 key，则引发 KeyError 异常

- 函数 iter(d)：返回键迭代器，等价于 iter(d.keys())
- 方法 d.clear()：清空字典
- 方法 d.copy()：返回字典的浅拷贝副本
- 类方法 classmethod fromkeys(seq[, value])：构造新字典，使用序列 seq 的内容作为键，value 的内容作为值；value 缺省为 None
- 注意：此方法导致所有键的对应值都为单一对象 value，主要用于为字典的键设置初始值

- 方法 d.get(key[, default])：如果存在，返回键 key 对应的值，否则返回 default
- 若未给定 default，则缺省为 None；本方法不会引发 KeyError 异常
- 方法 d.items()：返回字典项的新视图
- 方法 d.keys()：返回字典键的新视图
- 方法 d.pop(key[, default])：若字典中存在 key，删除之并返回其对应值，否则返回 default
- 若未给定 default，且字典中不存在 key，则引发 KeyError 异常

- 方法 d.popitem()：删除字典中任意 (key, value) 对
- 若字典为空，则引发 KeyError 异常
- 方法 d.setdefault(key[, default])：若字典中存在 key，返回其对应值，否则插入键 key，并设其值为 default；default 缺省值为 None
- 方法 d.update([other])：使用 other 更新字典
- 参数 other 或者为字典对象，或者为可迭代的键值对
- 方法 d.values()：返回字典值的新视图

#### 字典比较操作

- 等性比较：当且仅当所有键值对 (key, value) 全部相等时才相等
- 序性比较：非法！引发 TypeError 异常

##### 颠倒键值对

- 当字典的项也为可哈希对象时，可以在需要时颠倒字典的键值对，构造新字典
- 具体应用：域名解析时，需要将便于记忆的域名翻译成 IP 地址；逆向域名解析时，又需要将 IP 地址翻译成域名

```python
# r = range(4)
# s = "abcd"
# d = dict(zip(r, s))
# d
{0: 'a', 1: 'b', 2: 'c', 3: 'd'}

# #  颠倒键值对，等价于 e = dict([(v, k) for (k, v) in d.items()])。
# #  或等价于 e = dict((v, k) for (k, v) in d.items())。
# #  本实现要求字典项序必须能够保持不变。需 Python 3.7 或之后版本。
# e = dict(zip(d.values(), d.keys()))
# e
{'a': 0, 'b': 1, 'c': 2, 'd': 3}
```

#### 字典视图

项视图、键视图、值视图

- 提供字典对象的动态快照
- Python 系统保证，即使在迭代过程中字典发生了变化，迭代过程也可以适应这种变化，并顺利进行
- 为什么需要字典视图？
- 如果字典在迭代过程中发生了更新操作，当前的迭代过程可能完全失去意义
- 即便该迭代过程并未失去意义，但在字典项数已经改变时，原迭代过程的迭代次数与终止条件也可能已经发生了变化

###### Ex.

```python
#  对于下述脚本：
d = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
for k in d:
   if d[k] == 2:
      del d[k]

#  实际将引发 RuntimeError 异常。
Traceback (most recent call last):
  File "D:/Python_Programs/why_need_dict_view.py", line 2, in [module]
    for k in d:
RuntimeError: dictionary changed size during iteration
```

##### 可变关键字参数

- 函数定义格式：def f(x, y, *args, **kwargs): …
- 参数描述：**kwargs 表示形式参数 kwargs 接受元素数目可变的字典作为实际参数
- 适用场合：函数调用前不知道函数实际参数个数
- 注意事项
- 可变关键字参数为纯关键字参数，不能以位置参数方式传入实际参数值
- 可变关键字参数必须出现在参数列表末尾

###### Ex.编写函数，求数据序列均值。

```python
def safe_mean(*values, **errors):
  error = errors.pop("error", True)				#  获取关键字参数 error。
  verbose = errors.pop("verbose", False)		#  获取关键字参数 verbose。
  if errors:											#  其他关键字参数非法。
    raise TypeError("unexpected argument(s): {}".format(errors))
  try:												#  可变参数可能无法求值。
    return sum(values) / len(values)
  except Exception as e:
    if verbose and error:						#  显示详细异常链。
      raise RuntimeError("error while invoking safe_mean()") from e
    elif error:									#  仅显示系统异常。
      raise
    else:											#  忽略异常，返回 None，可省略。
      return None

    #  验证代码
t = (1, 2, 3)
#  必须将元组 t 解包传递。
print(safe_mean(*t))									#  error = True, verbose = False
print(safe_mean(1, 2, 3))							#  error = True, verbose = False
#  以不同关键字参数调用。
print(safe_mean(1, 2, 3, verbose = True))		#  error = True
print(safe_mean(1, 2, 3, error = False, verbose = True))
print(safe_mean(1, 2, 3, error = False))			#  verbose = False

#  脚本输出
2.0
2.0
2.0
2.0
2.0

#  验证代码
m = safe_mean(1, 2, "3", verbose = True)			#  error = True
print(m)
#  脚本输出
Traceback (most recent call last):
  File "D:/Python_Programs/kwargs.py", line 16, in safe_mean
    return sum(values) / len(values)
TypeError: unsupported operand type(s) for +: 'int' and 'str'
The above exception was the direct cause of the following exception:
Traceback (most recent call last):
  File "D:/Python_Programs/kwargs.py", line 26, in [module]
    m = safe_mean(1, 2, "3", verbose = True)
  File "D:/Python_Programs/kwargs.py", line 19, in safe_mean
    raise RuntimeError("error while invoking safe_mean()") from e
RuntimeError: error while invoking safe_mean()

#  验证代码
m = safe_mean(1, 2, "3")						#  error = True，verbose = False
print(m)
#  脚本输出
Traceback (most recent call last):
  File "D:/Python_Programs/kwargs.py", line 28, in [module]
    m = safe_mean(1, 2, "3")
  File "D:/Python_Programs/kwargs.py", line 16, in safe_mean
    return sum(values) / len(values)
TypeError: unsupported operand type(s) for +: 'int' and 'str'

#  验证代码
m = safe_mean(1, 2, "3", error = False)		#  verbose = False
print(m)
#  脚本输出
None

#  验证代码
m = safe_mean(error = True, verbose = True)
print(m)
#  脚本输出
Traceback (most recent call last):
  File "D:/Python_Programs/kwargs.py", line 16, in safe_mean
    return sum(values) / len(values)
ZeroDivisionError: division by zero
The above exception was the direct cause of the following exception:
Traceback (most recent call last):
  File "D:/Python_Programs/kwargs.py", line 43, in [module]
    m = safe_mean(error = True, verbose = True)
  File "D:/Python_Programs/kwargs.py", line 19, in safe_mean
    raise RuntimeError("error while invoking safe_mean()") from e
RuntimeError: error while invoking safe_mean()
```

#### 字频统计与CSV 文件处理

###### Ex.

字频统计。编写程序，统计文章中汉字出现频率。

第一章　青衫磊落险峰行



  青光闪动，一柄青钢剑倏地刺出，指向中年汉子左肩，使剑少年不等招用老，腕抖剑斜，剑锋已削向那汉子右颈。那中年汉子竖剑挡格，铮的一声响，双剑相击，嗡嗡作声，震声未绝，双剑剑光霍霍，已拆了三招，中年汉子长剑猛地击落，直砍少年顶门。那少年避向右侧，左手剑诀一引，青钢剑疾刺那汉子大腿。

  两人剑法迅捷，全力相搏。

  ……



```python
#  读取文本文件，生成字符串。
def read_text(filename: str) -> str:
  with open(filename, "rt", encoding = "utf-8", errors = "ignore") as f:
    return f.read()

  #  判断字符是否为汉字。
  #  注意：中文字符不仅包括汉字，还包括其他全角字符。此处仅判断是否为汉字。
  def is_Han(c: str) -> bool:
    return "\u3400" <= c <= "\u9FFF" or "\uE800" <= c <= "\uFDFF"

  #  统计字频。
  def stat_char(text: str) -> list[tuple[str, int]]:
    #  构造字典，以字符为键，以其出现次数为值。
    chars = {}

    for c in text:
      #  若该字符首次出现，增加键，以字符为键，以其出现次数为值。
      if is_Han(c):
        chars[c] = chars.get(c, 0) + 1
        #  由字典构造列表。
        result = list(chars.items())
        #  以字符出现频率排序，降序。
        #  key 为用户定义的回调函数，用于指定比较大小关系的数据对象。
        #  sort() 函数执行时，传递待排序序列的元素给用户定义的 lambda 表达式。
        #  lambda 表达式参数 x 接收到该元素。
        #  返回该元素（元组）的第 1 项（字频统计值）作为 sort() 函数比较依据。
        result.sort(key = lambda x: x[1], reverse = True)
        return result
  
  #  验证脚本
  filename = "金庸__天龙八部.txt"
  text = read_text(filename)
  conclusion = stat_char(text)

  #  输出数据
  #  注：因文本来自网络，未经认真检查，结果可能并不准确
  print("总字数：", len(text))
  print("用字数：", len(conclusion))
  print("最常用百字频率如下：")
  for i in range(100):
    #  conclusion[i] 为元组，解包后传递给字符串的 format() 方法
    print("{}：{:>5d}".format(*conclusion[i]))
```

##### CSV 模块：import csv

- CSV 文件操作函数与方法
- 读者函数：csv.reader(csvfile, dialect = "excel", **fmtparams)
- 打开 CSV 文件，返回 CSV 文件读者对象（类型：reader）
- 参数 csvfile 既可以为真正的文件对象，也可以为列表对象，只要其支持迭代协议，且每次迭代均能返回一个字符串即可
- 如果 csvfile 为文件对象，则在打开该文件时，必须为关键字参数 newline 传递一个空字符串对象
- 参数 dialect 用于指定 CSV 文件格式；fmtparams 用于对 CSV 文件格式进行微调，可覆盖方言中的格式化参数
- 作者函数：csv.writer(csvfile, dialect = "excel", **fmtparams)
- 打开 CSV 文件，返回 CSV 文件作者对象（类型：writer）

```python
#  读取 CSV 文件
with open("some.csv", newline = "") as f:
  reader = csv.reader(f)					#  构造读者对象。
  for row in reader:						#  读取的每一行数据均为列表对象。
    print(",".join(row))					#  将列表对象转换为字符串输出。

#  读取 CSV 文件，使用异常处理读取错误。
filename = "some.csv"
with open(filename, newline = "") as f:
  reader = csv.reader(f)
  try:
    for row in reader:
      print(",".join(row))
  except csv.Error as e:
    sys.exit("File {}: {}".format(filename, e))

#  写入 CSV 文件
with open("some.csv", "w", newline = "") as f:
  writer = csv.writer(f)					#  构造作者对象。
  writer.writerows(someiterable)		#  写入可迭代对象中的数据行。

#  写入 CSV 文件，使用异常处理读取错误。
filename = "some.csv"
with open(filename, "w", newline = "") as f:
  writer = csv.writer(f)
  try:
    writer.writerows(someiterable)
  except csv.Error as e:
    sys.exit("File {}: {}".format(filename, e))
```

##### CSV 文件相关类型

- 字典读者类：class csv.DictReader(f, fieldnames = None, restkey = None, restval = None, dialect = "excel", *args, **kwds)
- 构造 CSV 文件字典读者对象（类型：DictReader） 
- 序列参数 fieldnames 可选，用于指定 CSV 数据字段名称；若无此参数，则 CSV 文件第一行数据作为数据字段名；此后，各行数据将作为值与第一行数据中对应的数据字段名称构成键值对，写入字典
- 若数据行所含字段比 fieldnames 更多，其余数据以列表形式组织，字段名称由 restkey 提供
- 方法 csvreader.__next__()：返回读者函数所操作的下一行数据
- 如果 csvreader 为 DictReader 对象，则返回字典对象，否则返回列表对象
- 通常不会直接调用此方法，而是使用 next(reader) 的方式隐式调用
- 字典作者类：class csv.DictWriter(f, fieldnames, restval = "", extrasaction = "raise", dialect = "excel", **kwds)
- 构造 CSV 文件字典作者对象（类型：DictWriter），映射字典至 CSV 输出行
- 必须提供参数 fieldnames，该参数用于指定字典中数据的写入顺序
- 方法 writerow(row)：按当前 dialect 格式写入一行数据
- 方法 writerows(rows)：按当前 dialect 格式写入全部行
- 方法 writeheader()：写入字段名称

## 7. 面向对象

### 7.1 类与对象

- 面向过程
- 技术手段：函数抽象；结构化与模块化
- 技术优势：逻辑清晰，程序代码组织富有条理，适合描述顶层业务逻辑
- 面向对象
- 数据（属性）集与代码（行为、操作、方法）集的辩证统一
- 数据集与操作集封装成一个整体，以类型的方式组织
- 从被动到主动
- 数据对象从被动接受函数的操作变成主动发起特定操作行为

#### 类定义格式

`class ClassName:   statement_1   statement_2   …   statememt_n`

- 特别说明
- 类定义语句也是执行语句
- 类型拥有自己独立的本地名空间

###### Ex.

```python
class A:
  """A simple class definition

   Attribute:
      n: An integer initialized with 42.
   Function:
      f(self) -> str: ...
   """

  n = 42

  def f(self) -> str:
    return f"I'm {self.n}!"
```

##### 类•型•象之三角

- 类（class）具有明确的型（type）
- 凡类皆有型；凡型皆为类
- 类定义语句创建（构造）一个类型
- 类型用于创建（构造）该类型的对象（object）
- 具象化（ instantiation，实例化）：具象（instance object，实例对象）
- 型相：型亦为对象（class object，类相，类对象）
- 类定义结束时构造该类的型象（相），简称类象（相）
- 类相支持的操作：属性引用、具象化

#### 属性引用

attribute reference

- 操作符“.”：示例 obj.attr_name
- 有效属性名称：构造类的型象时，类名空间中的全部名称
- 属性为类的成员；类的属性可以被赋值
- 属性引用示例
- 类定义
- 整数对象 A.n
- 函数对象 A.f
- 文档字符串对象 A.__doc__

##### 具象化语法：函数调用

- 格式：obj_name = ClassName()
- 意义：构造类 ClassName 的一个具象，并赋值给局部变量 obj_name
- 示例：a = A()
- 具象：具象化结果
- 属性引用：具象的唯一合法操作
- 数据属性（data attribute）或数据成员
- 方法（method）属性或成员函数

#### 数据属性

- 从属于该具象
- 无需声明：赋值即定义
- 可在类定义外部添加或删除
- 方法属性
- 不可在类定义外部添加或删除
- 注意事项
- 属性引用 a.n 与属性引用 A.n 可能为同一个实际对象，也可能不是
- 属性引用 a.f 与属性引用 A.f 从来不是同一个实际对象；两者型式不同，前者型式名称为 method，后者型式名称为 function

###### Ex.

```python
class A:
  n = 42
  def f(self) -> str:
    return f"I'm {self.n}!"

a = A()

print("A.n = %d" % A.n)							#  A.n = 42
print("a.n = %d" % a.n)							#  a.n = 42
print("id of A.f is %0#18X." % id(A.f))	#  id of A.f is 0X0000016DDD30A170.
print("A: %s" % A.f(a))							#  A: I'm 42!
print("id of a.f is %0#18X." % id(a.f))	#  id of a.f is 0X0000016DDD307C40.
print("a: %s" % a.f())							#  a: I'm 42!

b = A()
print("b.n = %d" % b.n)							#  b.n = 42
b.n //= 2
print("A.n = %d" % A.n)							#  A.n = 42
print("a.n = %d" % a.n)							#  a.n = 42
print("b.n = %d" % b.n)							#  b.n = 21

print("A: %s" % A.f(a))							#  A: I'm 42!
print("a: %s" % a.f())							#  a: I'm 42!
print("A: %s" % A.f(b))							#  A: I'm 21!
print("a: %s" % b.f())							#  a: I'm 21!
```

#### 类相与具象的差异

- 类相只有一份，具象可以有多份
- 不同的具象可能具有不同的数据属性值，有必要保留各自的属性副本
- 为每个具象都保留一份方法代码的副本毫无意义
- 方法代码：只有一份
- 我是谁：实际调用时，需要描述清楚是在操作哪个具象
- 定义类的方法属性时，使用参数 self 完成此任务
- 在具象上实际调用时，省略此参数，由系统自动传递

##### 属性字典 __dict__：类相与具象皆有

- 属性 A.__dict__ 内容：{'__module__': '__main__', 'n': 42, 'f': `<function A.f at 0x0000016DDD30A170>`, '__dict__': `<attribute '__dict__' of 'A' objects>`, '__weakref__': `<attribute '__weakref__' of 'A' objects>`, '__doc__': None}
- 属性 a.__dict__ 内容：{}
- 属性 b.__dict__ 内容：{'n': 21}
- 属性查找
- 优先查找具象的属性字典（符号表）；如无，查找类相的属性字典；仍无，递归查找类相的基类类相的属性字典

##### 内置函数 dir()：查看类相与具象的属性列表

- 调用内置函数 dir(A) 时输出：['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'f', 'n']
- 调用内置函数 dir(a) 时输出：与上同
- 调用内置函数 dir(b) 时输出：与上同
- 注意事项
- 在类相或具象上添加或删除属性后，可能导致它们具有不同的属性列表

##### 数据封装

- 数据属性与方法从属于类（定义于类中，或追加至类中）
- 意义：将数据及其操作集合并，有助于清晰表达设计意图
- 信息隐藏
- 信息（属性与方法）不向外界公开，在类外部禁止访问
- 意义：将信息创建者与使用者完全隔离，变更信息描述时不影响使用者
- 特别说明
- Python 对数据封装与信息隐藏的支持性不佳……

###### 公开属性

- 命名习惯：普通属性名称
- 私有（private）属性
- 命名习惯：以单下划线开头的属性名称

###### 私有属性

- 命名习惯：以至少两个双下划线开头、至多一个下划线结尾的的属性名称
- 注意事项
- 仅为建议，后续 Python 版本倾向于实现此功能？

###### 名称矫正

name mangling

- 目的：避免类继承时的名称冲突
- 在类型 ClassName 中，以至少两个下划线开头、至多一个下划线结尾的标识符 __identifier，将被文法替换为 _ClassName__identifier
- 注意：仍可通过更名后的标识符访问该属性
- 内置属性与方法名称：用于特定目的
- 以双下划线开头和双下划线结尾的标识符
- 示例：__doc__、__init__()

###### Ex.

```python
class A:
  def get_p(self):			#  获取设置私有属性 _p。
    return self._p

  def set_p(self, p):		#  设置私有属性 _p。
    self._p = p

    def get_q(self):			#  获取设置私有属性 __q。
      return self.__q

    def set_q(self, q):		#  设置私有属性 __q。
      self.__q = q

      def f(self) -> str:
        return f"I'm {self.n}!"

      n = 42					#  公开的属性 n。
      _p = 2					#  名义上私有，但其实公开的属性 _p。
      __q = 3					#  名义上私有，但其实公开的，采用名称矫正的属性 __q。
      __r__ = 4				#  公开的特殊属性 __r__。

###  end of the definition of class 'A'

a = A()						#  构造类 A 的一个具象 a。

#  a.get_p() 等价于 A.get_p(a)。
#  即把本具象 a 作为 self 的实际参数自动传递给型象对应的函数对象。
print("a._p =", a.get_p())			#  获取私有属性值：结果为 2。
print("setting...")
a.set_p(0)								#  设置（修改）私有属性值为 0。
print("a._p =", a.get_p())			#  获取私有属性值：结果为 0。
print()

#  a.get_q() 等价于 A.get_q(a)。
#  即把本具象 a 作为 self 的实际参数自动传递给型象对应的函数对象。
print("a.__q =", a.get_q())		#  获取私有属性值：结果为 3。
print("setting...")
a.set_q(1)								#  设置（修改）私有属性值为 1。
print("a.__q =", a.get_q())		#  获取私有属性值：结果为 1。

#  程序输出结果如下：					#  验证属性的非私有性
												print(A.n, A._p, A._A__q, A.__r__)
a._p = 2										print(a.n, a._p, a._A__q, a.__r__)
setting...									#  属性 __q 已经自动进行了名称矫正。
a._p = 0										#  因此在类 A 及其具象 a 的外部，
												#  只能使用矫正后的名称 _A__q 访问。
a.__q = 3									#  在类 A 及其具象 a 的内部，
setting...									#  则不需要使用矫正后的名称。
a.__q = 1
												#  上述两条语句的运行结果为：
												42 2 3 4
												42 0 1 4
```

### 7.2 类定制概要

#### 类与对象的内置属性

- 属性 __name__：类名称字符串
- 示例：A.__name__ 为 "A"
- 属性 __module__：类定义所在的模块名称，字符串
- 示例：a.__module__ 为主模块 __main__
- 属性 __dict__：类或具象名空间使用的字典
- 示例：A.__dict__ 或 a.__dict__ （注：两者内容不同……）
- 属性 __bases__：包含基类名称的元组，以定义时各基类的次序分列

- 属性 __doc__：文档字符串，用于保存类的描述信息。如无，则为 None
- 示例：A.__doc__ 或 a.__doc__ 为 "A simple class definition"
- 属性 __annotations__：由执行类体时所收集的变量型式标注构成的字典
- 属性 __class__：具象所从属的类名称
- 示例：a.__class__ 为 `<class "__main__.A">`

#### 类与对象的内置方法

- 方法 __new__(cls[, ...])：具象构造
- 此方法构造具象时自动调用，用于构造 cls 类的一个具象并返回
- 方法 __init__(self[, ...])：具象初始化
- 此方法创建具象时自动调用，用于设置属性值
- 方法 __del__(self)：具象删除
- 此方法在具象被删除前自动调用
- 方法 __repr__(self)：返回对象的“正式”字符串表示
- 此方法在 repr() 获取对象的正式文本描述信息时自动调用；如无下一方法，则本方法也可用于获取对象的“非正式”文本描述信息

- 方法 __str__(self)：返回对象的“非正式”字符串描述
- 此方法在 format() 或 print() 输出对象的文本描述信息时自动调用
- 方法 __bytes__(self)：返回对象对应的字节串对象
- 方法 __format__(self, fmt_spec)：返回对象的格式化字符串对象
- 如有，则 format() 优先调用此方法
- 方法 __gt__(self, other)：判断具象 self 是否大于具象 other

- 方法 __lt__(self, other)：判断具象 self 是否小于具象 other
- 方法 __ge__(self, other)：判断具象 self 是否不小于具象 other
- 方法 __le__(self, other)：判断具象 self 是否不小于具象 other
- 方法 __eq__(self, other)：判断具象 self 是否等于具象 other

- 方法 __ne__(self, other)：判断具象 self 是否不等于具象 other
- 方法 __hash__(self)：由内置函数 hash() 自动调用
- 方法 __bool__(self)：用于对象真值测试
- 如无，调用 __len__()；如亦无，返回 True
- 方法 __getattr__(self, name)：获取属性 name 对应的值
- 此方法在缺省属性访问失败时自动调用

- 方法 __getattribute__(self, name)：无条件调用，用于获取属性 name 对应的值
- 方法 __setattr__(self, name, value)：设置属性 name 对应的值
- 此方法在设置具象属性时自动调用
- 方法 __delattr__(self, name)：删除属性 name
- 此方法在删除具象属性时自动调用
- 方法 __dir__(self)：返回具象的属性列表
- 由 dir() 自动调用

- 方法 __call__(self, *args)：把具象当作函数进行调用
- 方法 __len__(self)：返回容器对象的元素个数
- 在调用内置函数 len() 时自动调用
- 方法 __getitem__(self, key)：获取容器中索引 key 对应的值
- 方法 __setitem__(self, key, value)：设置容器中索引 key 对应的值为 value
- 方法 __delitem__(self, key)：删除容器中索引 key 对应的项

- 方法 __iter__(self)：构造容器对象的迭代器对象
- 内置函数 iter() 可自动调用
- 方法 __next__(self)：用于迭代器对象，获取下一个元素
- 内置函数 next() 可自动调用
- 方法 __reversed__(self)：逆序
- 由内置函数 reversed() 自动调用
- 方法 __enter__(self)：进入对象的场境管理器
- 方法 __exit__(self, exc_type, exc_value, traceback)：退出对象的场境管理器

#### 具象初始化方法 __init__()

- 实现时机：在构造类的具象时，有时需要为其设置初始值，即为该类提供特定格式的构造函数，此时就需要为该类实现此初始化方法
- 初始化方法至少需要一个 self 参数，如有其他参数，列写在 self 参数之后
- 注意事项
- 指代“我”的 self 只用于普通方法的首参数，并非关键字
- 使用此名称仅为惯例，并非强制性要求；编程时完全可以将 self 替换为其他名称

###### Ex.

定义整数数偶类 Couple。其有两个整数属性 _1 与 _2。定义初始化方法，设置 _1 与 _2 的初始值，缺省时均设置为 0。

```python
class Couple:
   """A simple integer couple class definition

   Attributes:
      _1: The first field of an integer couple, initialized with 0.
      _2: The second field of an integer couple, initialized with 0.

   Functions:
      __init__(self, x = 0, y = 0) -> None:
         Use x and y to initialize the integer couple, self.
         Use x and y to initialize the integer couple, self.
         Parameters:
            self: The object per se.
            x: An integer, 0 as its default argument value.
            y: An integer, 0 as its default argument value.
         Returned value:
            None.

      f(self) -> str:
         Get the string representation of the integer couple.
         Parameter:
            self: The object per se.
         Returned value:
            A string representation with the integer couple (x, y).
   """

    #  具象初始化方法，由系统自动调用。
    def __init__(self, x: int = 0, y: int = 0) -> None:
      self._1, self._2 = x, y

    def f(self) -> str:
      return f"I'm ({self._1}, {self._2})!"

###  end of the definition of class 'Couple'

#  缺省构造，两个字段均设为 0。
a = Couple()
print(a.f())								#  I'm (0, 0)!

#  部分缺省构造，_1 为 1，_2 为 0。
b = Couple(1)
print(b.f())								#  I'm (1, 0)!

#  不缺省构造，_1 为 1，_2 为 1。
c = Couple(1, 1)
print(c.f())								#  I'm (1, 1)!
```

###### Ex.

考虑使用三元组 (name, sid, mark) 表示一条学生信息记录。其中，姓名 name 与学号 sid 为字符串，成绩 mark 为 [0, 100] 内的整数。定义一个学生类 Students，用以保存多名学生的成绩。要求程序能够逐条添加记录，并能按成绩对学生进行排序。

```python
class Students:

  def __init__(self):
      self._info = []

  def __bool__(self) -> bool:
      return bool(self._info)

  def __len__(self) -> int:
      return len(self._info)

  def __repr__(self) -> str:
      return repr(self._info)
  
  def __str__(self) -> str:
      return str(self._info)

  def append(self, name: str, sid: str, mark: int) -> None:
      assert 0 <= mark <= 100
      self._info.append((name, sid, mark))

  def sort(self, key = None, reverse = False) -> None:
      self._info.sort(key = key, reverse = reverse)

###  end of the definition of class 'Students'

stus = Students()

#  刘一、陈二、张三、李四、王五、赵六、孙七、周八、吴九、郑十
stus.append("张三", "2025010234", 90)
stus.append("李四", "2025010542", 95)
stus.append("王五", "2024010334", 82)
stus.append("赵六", "2026011027", 99)
print(stus)
stus.sort(lambda x: x[2], reverse = True)
print(stus)

#  运行结果如下：
[('张三', '2025010234', 90), ('李四', '2025010542', 95), ('王五', '2024010334', 82), ('赵六', '2026011027', 99)]
[('赵六', '2026011027', 99), ('李四', '2025010542', 95), ('张三', '2025010234', 90), ('王五', '2024010334', 82)]
```

#### 迭代器

- 基本任务：对于容器对象而言，遍历其所有元素
- 需要一种表达遍历过程的机制：迭代结构
- 能够完成迭代任务的对象：迭代器（类型：Iterator）
- 可以实施迭代任务的对象：可迭代对象（类型：Iterable）
- 可迭代对象可以为容器，也可以为能够生成数据序列的其他对象
- 注意事项
- 概念差异：可迭代对象并非迭代器，迭代器也并非可迭代对象
- 实现策略：迭代器类为可迭代对象类的子类
- 每个可迭代对象都有与其相适应的一个或多个迭代器

###### Ex.

继续上一例。为类 Students 提供一个正向迭代器。

```python
import collections.abc
TAIterator = collections.abc.Iterator

class Students:
  #  构造或获取迭代器对象的具体算法。
  def __iter__(self) -> TAIterator[tuple[str, str, int]]:
     return iter(self._info)

  #  在迭代过程中获取下一个元素的算法。
  def __next__(self) -> tuple[str, str, int]:
     return next(self._info)
    
stus = Students()
stus.append("张三", "2025010234", 90)
stus.append("李四", "2025010542", 95)
stus.append("王五", "2024010334", 82)
stus.append("赵六", "2026011027", 99)

for i in stus:
   print(i)

#  运行结果如下：
('张三', '2025010234', 90)
('李四', '2025010542', 95)
('王五', '2024010334', 82)
('赵六', '2026011027', 99)
```

###### Ex.

为任意序列对象实现一个逆向迭代器。

```python
import collections.abc
TASequence = collections.abc.Sequence
TAIterator = collections.abc.Iterator

#  逆向迭代器类 Reverse。
class Reverse:

  #  初始化序列与逆序索引。
  def __init__(self, seq: TASequence) -> None:
    self._seq = seq
    self._idx = len(seq)
    #  设置迭代器对象。
  def __iter__(self) -> TAIterator:
      return self

    #  返回下一元素；元素处理完毕时，引发 StopIteration 异常。
  def __next__(self) -> ...:
      if self._idx == 0:
        raise StopIteration
        self._idx -= 1
        return self._seq[self._idx]

###  end of the definition of class 'Reverse'

#  构造逆向字符串迭代器对象 r，使用循环处理全部字符。
s = "Fall leaves when leaves fall."
print(s)
for c in Reverse(s):
   print(c, end = "")
else:
   print()


#  运行结果如下：
Fall leaves when leaves fall.
.llaf sevael nehw sevael llaF

import collections.abc
TASequence = collections.abc.Sequence
TAIterator = collections.abc.Iterator
#  使用生成器函数实现逆向迭代器：可以完成迭代器类的全部工作。
#  使用 yield 关键字一次推出一个元素。
#  生成器自动创建 __iter__() 与 __next__() 方法；
#  自动记录所有已操作的数据和上次执行的语句；自动保存局部变量和执行状态。
#  遍历结束时自动引发 StopIteration 异常。
def reverse(seq: TASequence) -> TAIterator:
   for idx in range(len(seq)-1, -1, -1):
      yield seq[idx]

#  构造逆向字符串生成器对象，使用循环处理全部字符。
for c in reverse("Fall leaves when leaves fall."): print(c, end = "")
else: print()
```

#### 场境管理协议

Context Management Protocol

- 包含方法 __enter__() 和方法 __exit__()
- 支持本协议的对象必须实现此两个方法
- 场境管理器（Context Manager）
- 支持场境管理协议的对象
- 场境管理器定义执行 with 语句时要建立的运行时场境，负责执行 with 语句块进入与退出场境操作
- 通常用 with 语句调用场境管理器，也可直接调用其方法

##### 场境管理方法

- 方法 __enter__()：进入运行期场境，返回本对象或者与本运行期场境有关的其他对象，返回的对象由 as 子句中的名称束定
- 返回自身的典型示例为文件对象：当使用 with 语句打开文件时，该文件对象将返回自身，以允许调用 open() 函数。
- 方法 __exit__()：退出运行期场境，返回一个布尔值，以表明是否应该缄默处理发生的异常
- 如果返回 True，则表示 with 语句静默处理内部产生的异常，继续执行位于 with 语句之后的下一条语句；而如果返回 False，则异常将传播至本方法之外
- 如果在执行 with 语句体时发生了异常，本方法的三个参数 exc_type、exc_value 与 traceback 将分别用于表示该异常的异常型式、异常值与异常回溯信息；否则，这三个参数都为 None

###### Ex.

定义一个可以关闭任何资源的场境管理器。

```python
class closing():
  #  具象初始化。
  def __init__(self, thing):
      self.thing = thing

   #  执行 with 语句体之前，进入场境，束定目标对象。
  def __enter__(self):
      return self.thing

   #  执行 with 语句体之后，退出场境，正确释放资源。
   #  exc_info 为三元组 (exc_type, exc_value, traceback)。
  def __exit__(self, *exc_info):
      self.thing.close()

import urllib.request

#  调用代码示例，使用场境管理器类 Closing 管理对象。
with closing(urllib.request.urlopen("http://www.tsinghua.edu.cn")) as page:
   for line in page:
      print(line)

#  上述 with 语句等价于：
page = urllib.request.urlopen("http://www.tsinghua.edu.cn")
try:
   for line in page:
      print(line)
finally:
   page.close()
```

### 7.3 类成员

##### 方法对象与函数对象

- 组成：具象的方法对象、该具象所在的类的函数对象
- 类的方法分类

##### 具象方法

- 首参数为具象，在具象上调用
- 静态方法：主要用于限定函数作用域于本类型中
- 在类相中实现某些特殊函数——不操作该类任意具象的函数
- 类相方法：主要用于构造函数重载；修改类属性
- 首参数为类相，可在类方法内部使用类相而非具象

###### Ex.

定义一个类，统计并输出其创建的全部具象的数目。

```python
#  第二版实现

#  输出具象数目的普通函数。
#  因需要在后续构造静态方法时使用此函数，
#  故必须预先实现，否则将引发 NameError 异常。
def static_func_count():
  if A._counter >= 2:
      print(f"{A._counter} instances have been constructed.")
  else:
      print(f"{A._counter} instance has been constructed.")

class A:
  #  定义由本类所有具象共享的计数器属性，用于记录所构造的具象的数目。
  _counter = 0

  def __init__(self):
      #  使用类名限定，递增类相共享的计数器属性。
      A._counter += 1
      #  保存本具象构造时的独特次序值，作为本具象的 id。
      self._id = A._counter

  def announce(self) -> str:
      return f"  -- I'm No.{self._id}!"

   #  将已有的函数转换为静态方法，并用类相的属性 count 束定。
  count = staticmethod(static_func_count)

### end of the definition of class 'A'

A.count()
a = A()
print(a.announce())
A.count()
b = A()
print(b.announce())
A.count()
c = A()
print(c.announce())
A.count()

#  程序的输出结果：

0 instance has been constructed.
  -- I'm No.1!
1 instance has been constructed.
  -- I'm No.2!
2 instances have been constructed.
  -- I'm No.3!
3 instances have been constructed.
```

## Appendix

1. 接受用户输入的自然数 n，调用函数 is_prime(n) 判断其是否为素数。
   要求进行异常处理。
   需要提前终止程序流程时，使用 sys 模块中的 exit(exit_code) 函数代替 return 语句。

```python
def is_prime(n: int) -> bool:
   import math
   if type(n) is not int:
      raise TypeError('must be an integer, but "%s" found' % type(n))
   if n < 2:
      raise ValueError('must be greater than 1, but "%d" found' % n)
   if n == 2:
      return True
   if n % 2 == 0:
      return False
   for i in range(3, math.ceil(math.sqrt(n)) + 1, 2):
      if n % i == 0:
         return False
   return True

def verify_prime() -> None:
   import sys
   try:
      n = eval(input("Please input an integer: "))
      if is_prime(n):
         print("Yes, %d is a prime." % n)
      else:
         print("No, %d is not a prime." % n)
   except NameError as e:
      print("NameError:", str(e))
      sys.exit(1)
   except TypeError as e:
      print("TypeError:", str(e))
      sys.exit(2)
   except ValueError as e:
      print("ValueError:", str(e))
      sys.exit(3)
   except: 		#  SyntaxError
      print("Unknown error happened.")
      sys.exit(4)
   finally:  	#  验证型子句。没有需要释放的资源，故无需出现在正式代码中
      print("Oops...")  #  发生异常时，本语句将在 return 和 exit 函数前执行
   return 		#  可有可无

while True:
   verify_prime()
```
