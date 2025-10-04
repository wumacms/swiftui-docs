# 第15天 复习：一小时掌握 Swift 核心知识

*作者：Paul Hudson 2022 年 1 月 31 日*

恭喜！您已经掌握了 Swift 编程语言的所有基础知识。为了给您提供扎实的入门知识，我们特意安排了每天的课程，但今天有所不同，因为我们将复习您目前为止学到的几乎所有内容。

**我知道你在想什么。** 你在想：“何必呢？我已经学过了，何必再学一遍？”

嗯，有几个原因：

- 重复可以帮助我们更透彻地学习。这些基础知识在你编写的所有 Swift 代码中都至关重要，因此值得加倍努力，确保你完全理解它们。
- 有些概念只有在理解其他概念之后才能完全理解。像这样循环往复，有助于你理解 Swift 的核心概念。
- 你可能漏掉了一些东西。说实话，你刚刚看完了一大堆关于 Swift 最重要部分的视频——你确定你记住了所有内容吗？
- 你会知道自己进步了多少。当你读到关于数组和循环的内容时——这些你以前可能觉得很有挑战性的东西——希望你现在能更容易地掌握它们，并为自己的进步感到高兴。

如果你*觉得*今天比较轻松，没关系——之后我们马上就会开始 SwiftUI 项目，到时候难度会逐渐提升。趁现在还算安静，好好享受吧！

**今天你只需要学习一个教程，虽然内容相当丰富。** 本教程使用我们之前几天学习过的精确代码示例，概括了我们迄今为止涵盖的几乎所有主题。

在本文中，我将用大约一小时的时间为你介绍 Swift 编程语言的基础知识。本文面向两类人群：

一类是已经完成《100 天 SwiftUI 课程》入门部分，希望快速复习的人；

另一类是有其他编程语言经验，想要将技能迁移到 Swift 上的人。

由于本文定位为入门指南，节奏会比较快。如果遇到难以理解的内容，可以访问前面几天的课程，那里有更详细、更系统的入门讲解。

让我们开始吧！



## 创建常量与变量

Swift 可以创建常量（constants）和变量（variables），但通常更推荐使用常量。

通过以下代码创建变量字符串并修改其值：

```swift
var name = "泰德"
name = "丽贝卡"
```

如果不希望值被修改，则使用**常量**：

```swift
let user = "达芙妮"
```

`print()` 函数在学习和调试中非常实用，可用于输出变量的相关信息：

```swift
print(user)
```



## 字符串

Swift 中的字符串用双引号（`"`）包裹：

```swift
let actor = "汤姆·克鲁斯"
```

字符串也支持表情符号：

```swift
let actor = "汤姆·克鲁斯 🏃‍♂️"
```

如果需要在字符串内部包含双引号，需在双引号前添加反斜杠（`\`）进行转义：

```swift
let quote = "他拍了拍一块写着\"相信\"的牌子，然后走开了。"
```

如果需要创建跨多行的字符串，需用三个双引号（`"""`）包裹，示例如下：

```swift
let movie = """
一名苹果工程师
平凡的
一天
"""
```

Swift 为字符串提供了许多实用的属性和方法，例如通过 `.count` 可以获取字符串的字符个数：

```swift
print(actor.count)
```

此外还有 `hasPrefix()` 和 `hasSuffix()` 方法，可用于判断字符串是否以指定字符开头或结尾：

```swift
print(quote.hasPrefix("他"))
print(quote.hasSuffix("走开了。"))
```

**重要提示**：Swift 中的字符串是区分大小写的，因此上面第二个判断会返回 `false`（原句结尾为 “走开了。”，判断条件为 “Away.”，大小写和内容均不匹配）。



## 整数

Swift 使用 `Int` 类型存储整数，该类型支持一系列标准的数学运算符：

```swift
let score = 10
let higherScore = score + 10  // 加法运算
let halvedScore = score / 2   // 除法运算
```

同时也支持复合赋值运算符，可直接修改变量的值：

```swift
var counter = 10
counter += 5  // 等价于 counter = counter + 5，结果为 15
```

整数类型还自带一些实用功能，例如 `isMultiple(of:)` 方法可判断一个整数是否为另一个整数的倍数：

```swift
let number = 120
print(number.isMultiple(of: 3))  // 判断 120 是否为 3 的倍数，返回 true
```

你也可以生成指定范围内的随机整数，示例如下：

```swift
let id = Int.random(in: 1...1000)  // 生成 1 到 1000（包含首尾）的随机整数
```



## 小数

当你创建带有小数点的数字时，Swift 会将其视为 `Double` 类型（双精度浮点数）：

```swift
let score = 3.0
```

需要注意的是，Swift 认为 `Double` 和 `Int` 是完全不同的数据类型，不允许将两者直接混合使用（例如不能直接用 `Int` 类型的变量与 `Double` 类型的变量进行运算）。



## 布尔值

Swift 使用 `Bool` 类型存储布尔值（`true` 表示真，`false` 表示假）：

```swift
let goodDogs = true    // 表示“好狗”为真
let gameOver = false   // 表示“游戏结束”为假
```

通过调用布尔值的 `toggle()` 方法，可以切换其值（`true` 变 `false`，`false` 变 `true`）：

```swift
var isSaved = false
isSaved.toggle()  // 切换后 isSaved 的值变为 true
```



## 字符串拼接

通过**字符串插值**（string interpolation），可以将其他数据类型的值拼接到字符串中。具体用法是：在字符串内部写一个反斜杠（`\`），然后将变量或常量的名称放在括号（`()`）中，示例如下：

```swift
let name = "泰勒"
let age = 26
let message = "我是\(name)，今年\(age)岁。"
print(message)
```

运行上述代码后，会输出 “我是泰勒，今年 26 岁。”。



## 数组

可以通过以下方式将多个元素组合成一个数组（array）：

```swift
var colors = ["红色", "绿色", "蓝色"]    // 字符串数组
let numbers = [4, 8, 15, 16]          // 整数数组
var readings = [0.1, 0.5, 0.8]        // 小数（Double）数组
```

上述三个数组存储的数据类型不同：一个存储字符串，一个存储整数，一个存储小数。从数组中读取数据时，会得到对应类型的值（`String`、`Int` 或 `Double`）：

```swift
print(colors[0])    // 读取数组 colors 中索引为 0 的元素，输出“红色”
print(readings[2])  // 读取数组 readings 中索引为 2 的元素，输出 0.8
```

**提示**：访问数组时，务必确保指定的索引存在对应的元素，否则代码会崩溃（应用将直接停止运行）。

如果数组是变量（用 `var` 声明），可以使用 `append()` 方法向数组中添加新元素：

```swift
colors.append("格子纹")  // 向 colors 数组末尾添加“格子纹”
```

添加的元素类型必须与数组中已有的元素类型一致（例如不能向字符串数组中添加整数）。

数组还提供了一些实用功能，例如通过 `.count` 可以获取数组的元素个数，通过 `remove(at:)` 可以删除指定索引处的元素：

```swift
colors.remove(at: 0)  // 删除 colors 数组中索引为 0 的元素
print(colors.count)   // 输出删除元素后数组的长度
```

通过 `contains()` 方法可以判断数组中是否包含某个特定元素：

```swift
print(colors.contains("橙黄色"))  // 判断 colors 数组中是否包含“橙黄色”，返回 false
```



## 字典

字典（dictionary）根据我们指定的 “键”（key）来存储多个 “值”（value）。例如，可以创建一个存储个人信息的字典：

```swift
let employee = [
    "name": "泰勒",    // 键为 "name"，值为 "泰勒"
    "job": "歌手"     // 键为 "job"，值为 "歌手"
]
```

从字典中读取数据时，需要使用创建字典时定义的键：

```swift
print(employee["name", default: "未知"])  // 读取 "name" 对应的 value，无则返回 "未知"
print(employee["job", default: "未知"])   // 读取 "job" 对应的 value，无则返回 "未知"
```

如果指定的键在字典中不存在，会使用 `default` 后面指定的默认值。



## 集合

集合（set）与数组类似，但有两个关键区别：集合中不能包含重复元素，且不会按特定顺序存储元素。

通过以下方式创建一个数字集合：

```swift
var numbers = Set([1, 1, 3, 5, 7])
print(numbers)
```

需要注意的是，集合会自动忽略重复的值（上述代码中重复的 `1` 会被剔除），并且不会保留数组创建时的元素顺序。

向集合中添加元素需调用 `insert()` 方法：

```swift
numbers.insert(10)  // 向 numbers 集合中添加元素 10
```

集合相比数组有一个显著优势：无论集合中包含多少元素，使用 `contains()` 方法判断元素是否存在时，速度几乎是即时的 —— 即使是包含 1000 万个元素的集合，也能瞬间给出结果。



## 枚举

枚举（enum，全称 enumeration）是一组具有名称的值，我们可以通过定义枚举来让代码更高效、更安全。例如，可以定义一个表示工作日的枚举：

```swift
enum Weekday {
    case monday, tuesday, wednesday, thursday, friday
}
```

上述代码定义了一个名为 `Weekday` 的枚举，并包含五个 case（枚举值），分别对应五个工作日。

现在可以创建该枚举的实例，并为其赋值其他枚举值：

```swift
var day = Weekday.monday  // 创建枚举实例，初始值为“周一”
day = .friday             // 简化写法，将值改为“周五”（类型已确定时可省略枚举名）
```



## 类型注解

你可以通过**类型注解**为新变量或常量强制指定特定类型，示例如下：

```swift
var score: Double = 0
```

如果没有 `: Double` 这部分，Swift 会自动推断该变量为 `Int` 类型，但我们通过类型注解将其重写为 `Double` 类型。

以下是基于前文提到的类型的一些类型注解示例：

```swift
let player: String = "Roy"       // 字符串类型常量
var luckyNumber: Int = 13        // 整数类型变量
let pi: Double = 3.141           // 双精度浮点数类型常量
var isEnabled: Bool = true       // 布尔类型变量
var albums: Array<String> = ["Red", "Fearless"]  // 字符串数组类型变量
var user: Dictionary<String, String> = ["id": "@twostraws"]  // 键值对为字符串的字典类型变量
var books: Set<String> = Set(["The Bluest Eye", "Foundation"])  // 字符串集合类型变量
```

数组和字典是非常常用的类型，Swift 为它们提供了更简洁的特殊语法：

```swift
var albums: [String] = ["Red", "Fearless"]  // 简化后的字符串数组语法
var user: [String: String] = ["id": "@twostraws"]  // 简化后的字典语法
```

创建空集合时，明确类型至关重要。例如，以下两种方式都能创建空的字符串数组：

```swift
var teams: [String] = [String]()  // 显式指定类型并初始化空数组
var clues = [String]()            // 通过初始化器推断类型，创建空数组
```

枚举的所有值都与该枚举本身属于同一类型，因此我们可以这样写：

```swift
enum UIStyle {  // 定义名为 UIStyle 的枚举
    case light, dark, system  // 枚举的三个成员：浅色、深色、系统默认
}

var style: UIStyle = .light  // 声明 UIStyle 类型变量，并赋值为 .light
```



## 条件语句

使用 `if`、`else` 和 `else if` 语句可以判断条件，并根据条件执行相应的代码：

```swift
let age = 16  // 定义年龄常量

if age < 12 {
    print("你还不能投票")
} else if age < 18 {
    print("你很快就能投票了")
} else {
    print("你现在可以投票了")
}
```

可以使用 `&&` 组合两个条件，只有当两个子条件都为 `true` 时，整个组合条件才为 `true`：

```swift
let temp = 26  // 定义温度常量

if temp > 20 && temp < 30 {
    print("今天天气很好")
}
```

此外，`||` 也可用于组合条件，只要其中一个子条件为 `true`，整个组合条件就为 `true`。



## Switch 语句

Swift 允许使用 `switch`/`case` 语法，将一个值与多个条件进行匹配，示例如下：

```swift
enum Weather {  // 定义名为 Weather 的枚举
    case sun, rain, wind  // 枚举的三个成员：晴天、雨天、刮风
}

let forecast = Weather.sun  // 定义天气预报常量，值为晴天

switch forecast {
case .sun:
    print("天气不错")
case .rain:
    print("记得带伞")
default:
    print("应该没什么问题")
}
```

`switch` 语句**必须具备穷尽性**：即需要处理所有可能的取值，避免意外遗漏某个情况。



## 三元条件运算符

三元运算符可以判断一个条件，并根据条件返回两个值中的一个：条件为 `true` 时返回某个值，为 `false` 时返回另一个值。语法如下：

```swift
let age = 18  // 定义年龄常量
let canVote = age >= 18 ? "可以" : "不可以"  // 三元运算：判断年龄是否≥18，返回对应结果
```

上述代码运行时，由于 `age` 被设为 18，`canVote` 会被赋值为 "可以"。



## 循环

Swift 中的 `for` 循环可以遍历集合中的每个元素，或在自定义的范围内执行代码。示例如下：

```swift
let platforms = ["iOS", "macOS", "tvOS", "watchOS"]  // 定义包含平台名称的数组

for os in platforms {  // 遍历数组中的每个元素，将元素赋值给 os
    print("Swift 可运行于 \(os) 平台")
}
```

也可以遍历某个数值范围：

```swift
for i in 1...12 {  // 遍历 1 到 12（包含 12）的所有整数
    print("5 × \(i) = \(5 * i)")
}
```

`1...12` 表示包含 1 到 12 的闭区间。如果想排除末尾的数值，可以使用 `..<`：

```swift
for i in 1..<13 {  // 遍历 1 到 12（不包含 13）的所有整数
    print("5 × \(i) = \(5 * i)")
}
```

**提示**：如果不需要循环变量（即不需要在循环体内使用 `i` 这类变量），可以用 `_` 代替：

```swift
var lyric = "Haters gonna"  // 定义歌词字符串变量

for _ in 1...5 {  // 循环 5 次，不使用循环变量
    lyric += " hate"  // 每次循环给字符串追加 " hate"
}

print(lyric)  // 输出结果：Haters gonna hate hate hate hate hate
```

此外还有 `while` 循环，它会反复执行循环体，直到条件变为 `false` 才停止，示例如下：

```swift
var count = 10  // 定义计数变量

while count > 0 {  // 条件：count 大于 0 时执行循环
    print("\(count)…")
    count -= 1  // 每次循环让 count 减 1
}

print("出发！")  // 循环结束后输出
```

可以使用 `continue` 跳过当前循环迭代，直接进入下一次迭代：

```swift
let files = ["me.jpg", "work.txt", "sophie.jpg"]  // 定义包含文件名的数组

for file in files {  // 遍历数组中的每个文件名
    if file.hasSuffix(".jpg") == false {  // 判断文件是否不是 .jpg 格式
        continue  // 跳过当前迭代，不执行后续的 print 语句
    }

    print("找到图片文件：\(file)")  // 只打印 .jpg 格式的文件
}
```

另外，也可以使用 `break` 直接退出循环，跳过所有剩余的迭代。



## 函数

创建函数时，需先写 `func`， 接着写函数名，然后在括号内添加参数:

```swift
func printTimesTables(number: Int) {  // 定义函数，参数为 Int 类型的 number
    for i in 1...12 {
        print("\(i) × \(number) = \(i * number)")  // 打印 number 的 1 到 12 倍
    }
}

printTimesTables(number: 5)  // 调用函数，传入参数 5
```

调用函数时需要写 `number: 5`，因为参数名是函数调用的一部分。

如果要从函数中返回数据，需要告诉 Swift 返回值的类型，然后使用 `return` 关键字将数据返回。例如，以下函数返回一个骰子的随机点数：

```swift
func rollDice() -> Int {  // 定义函数，指定返回值类型为 Int
    return Int.random(in: 1...6)  // 返回 1 到 6 之间的随机整数
}

let result = rollDice()  // 调用函数，将返回值赋值给 result
print(result)  // 打印随机点数
```

如果函数体中只有一行代码，可以省略 `return` 关键字：

```swift
func rollDice() -> Int {
    Int.random(in: 1...6)  // 单行代码可省略 return，直接返回结果
}
```



## 从函数返回多个值

元组（Tuple）可以存储固定数量的特定类型的值，这是从函数中返回多个值的便捷方式：

```swift
func getUser() -> (firstName: String, lastName: String) {  // 函数返回包含两个字符串的元组
    (firstName: "Taylor", lastName: "Swift")  // 返回元组实例
}

let user = getUser()  // 调用函数，将返回的元组赋值给 user
print("姓名：\(user.firstName) \(user.lastName)")  // 通过元组的属性访问值
```

如果不需要元组中的所有值，可以通过 “解构” 将元组拆分为单个变量，并用 `_` 告诉 Swift 忽略不需要的值：

```swift
let (firstName, _) = getUser()  // 解构元组，只获取 firstName，忽略 lastName
print("姓名：\(firstName)")  // 只打印 firstName
```



## 自定义参数标签

如果调用函数时不想传递参数名，可以在参数名前加下划线 `_`：

```swift
func isUppercase(_ string: String) -> Bool {  // 参数前加 _，调用时无需写参数名
    string == string.uppercased()  // 判断字符串是否全为大写
}

let string = "HELLO, WORLD"
let result = isUppercase(string)  // 调用函数，直接传值，无需写参数名
```

另一种方式是在第一个参数名前再写一个名称：外部调用时使用前面的名称，函数内部使用后面的名称：

```swift
func printTimesTables(for number: Int) {  // 外部标签为 for，内部参数名为 number
    for i in 1...12 {
        print("\(i) × \(number) = \(i * number)")
    }
}

printTimesTables(for: 5)  // 调用函数时使用外部标签 for
```

在上述代码中，外部调用时使用 `for`，函数内部使用 `number`。



## 为参数提供默认值

可以在参数类型后加等号 `=` 并指定值，为参数设置默认值，示例如下：

```swift
func greet(_ person: String, formal: Bool = false) {  // formal 参数默认值为 false
    if formal {
        print("欢迎您，\(person)！")  // 正式问候
    } else {
        print("你好，\(person)！")  // 非正式问候
    }
}
```

现在可以通过两种方式调用 `greet()` 函数：

```swift
greet("Tim", formal: true)  // 显式传入 formal 参数，使用正式问候
greet("Taylor")  // 不传入 formal 参数，使用默认值 false，非正式问候
```



## 函数中的错误处理

要在函数中处理错误，需完成以下步骤：告诉 Swift 可能发生的错误类型、编写可能抛出错误的函数、调用函数并处理可能出现的问题。

首先，定义可能发生的错误类型：

```swift
enum PasswordError: Error {  // 定义遵循 Error 协议的枚举，代表密码相关错误
    case short, obvious  // 两种错误：密码过短、密码过于简单
}
```

接下来，编写可能抛出错误的函数。在函数类型中添加 `throws` 关键字，然后使用 `throw` 触发特定错误：

```swift
func checkPassword(_ password: String) throws -> String {  // 函数可能抛出错误，返回 String 类型
    if password.count < 5 {
        throw PasswordError.short  // 密码长度小于 5，抛出“过短”错误
    }

    if password == "12345" {
        throw PasswordError.obvious  // 密码为“12345”，抛出“过于简单”错误
    }

    if password.count < 10 {
        return "一般"  // 密码长度 5-9，返回“一般”
    } else {
        return "良好"  // 密码长度≥10，返回“良好”
    }
}
```

现在调用可能抛出错误的函数：先创建 `do` 代码块，使用 `try` 调用函数，然后通过 `catch` 处理可能出现的错误：

```swift
let string = "12345"  // 待检查的密码

do {
    let result = try checkPassword(string)  // 尝试调用可能抛出错误的函数
    print("密码评级：\(result)")
} catch PasswordError.obvious {
    print("这个密码和我行李箱的密码一样！")  // 捕获“过于简单”的错误
} catch {
    print("出现了一个错误")  // 捕获所有其他类型的错误
}
```

处理错误时，**必须包含一个能处理所有错误类型的 `catch` 块**（即最后的默认 `catch` 块）。



## 闭包

可以将一段功能代码直接赋值给常量或变量，示例如下：

```swift
let sayHello = {  // 将闭包赋值给 sayHello 常量
    print("你好！")
}

sayHello()  // 调用闭包，执行其中的代码
```

在上述代码中，`sayHello` 是一个闭包 —— 一段可以传递和随时调用的代码块。如果希望闭包接收参数，需要在大括号内定义参数：

```swift
let sayHello = { (name: String) -> String in  // 闭包接收 String 类型参数，返回 String 类型
    "你好，\(name)！"  // 闭包体：返回拼接后的字符串
}
```

`in` 关键字用于标记参数和返回类型的结束 ——`in` 后面的所有内容都是闭包的主体代码。

闭包在 Swift 中应用广泛。例如，数组有一个 `filter()` 方法，它会将数组中的每个元素传入一个 “测试闭包”，所有使闭包返回 `true` 的元素会被放入一个新数组并返回。

我们可以通过闭包定义这个 “测试规则”，例如筛选出所有以字母 T 开头的名字：

```swift
let team = ["Gloria", "Suzanne", "Tiffany", "Tasha"]  // 定义包含名字的数组

let onlyT = team.filter({ (name: String) -> Bool in
    return name.hasPrefix("T")  // 闭包逻辑：判断名字是否以 "T" 开头
})
```

在闭包内部，我们先定义 `filter()` 方法传入的参数（即数组中的单个字符串 `name`），然后指定闭包的返回类型为 `Bool`，再用 `in` 标记闭包主体的开始 ——`in` 之后的代码与普通函数的代码逻辑一致。



## 尾随闭包与简化语法

Swift 有一些实用技巧能让闭包的可读性更高。以下代码用于过滤数组，只保留以 “T” 开头的名字：

```swift
let team = ["Gloria", "Suzanne", "Tiffany", "Tasha"]

let onlyT = team.filter({ (name: String) -> Bool in
    return name.hasPrefix("T")
})

print(onlyT)
```

很明显，这个闭包的函数体只有一行代码，因此我们可以去掉 `return` 关键字：

```swift
let onlyT = team.filter({ (name: String) -> Bool in
    name.hasPrefix("T")
})
```

`filter()` 方法要求传入一个函数，该函数接收数组中的一个元素作为参数，若该元素应包含在返回的新数组中，则返回 `true`。

正因为我们传入的函数 “必须符合上述规则”，所以无需在闭包中指定类型信息。由此，代码可简化为：

```swift
let onlyT = team.filter({ name in
    name.hasPrefix("T")
})
```

我们还能进一步使用名为**尾随闭包语法**的特殊语法，代码如下：

```swift
let onlyT = team.filter { name in
    name.hasPrefix("T")
}
```

最后，Swift 会为我们提供简短的参数名，因此我们甚至无需编写 `name in`，而是直接使用 Swift 提供的特殊值 `$0`（代表闭包的第一个参数）：

```swift
let onlyT = team.filter {
    $0.hasPrefix("T")
}
```



## 结构体（Struct）

结构体允许我们创建自定义数据类型，这类类型可包含自身的属性和方法：

```swift
struct Album {
    let title: String  // 专辑标题（不可变）
    let artist: String  // 艺术家（不可变）
    var isReleased = true  // 是否已发行（可变，默认值为 true）

    // 打印专辑摘要的方法
    func printSummary() {
        print("\(title) by \(artist)")
    }
}

// 创建 Album 实例
let red = Album(title: "Red", artist: "Taylor Swift")
print(red.title)  // 访问属性，输出 "Red"
red.printSummary()  // 调用方法，输出 "Red by Taylor Swift"
```

创建结构体实例时，我们会使用**构造器（初始化器）** —— Swift 允许我们将结构体当作函数使用，为其每个属性传入对应参数。Swift 会根据结构体的属性自动生成这个**成员构造器**。

若需要结构体的方法修改自身属性，需将该方法标记为 `mutating`：

```swift
mutating func removeFromSale() {
    isReleased = false  // 修改可变属性 isReleased
}
```



## 计算属性（Computed Properties）

计算属性的值会在每次访问时动态计算。例如，我们可以定义一个 `Employee` 结构体，用于跟踪员工剩余的假期天数：

```swift
struct Employee {
    let name: String  // 员工姓名（不可变）
    var vacationAllocated = 14  // 已分配假期天数（可变，默认 14 天）
    var vacationTaken = 0  // 已使用假期天数（可变，默认 0 天）

    // 计算属性：剩余假期天数 = 已分配天数 - 已使用天数
    var vacationRemaining: Int {
        vacationAllocated - vacationTaken
    }
}
```

若要支持修改 `vacationRemaining`（例如通过调整剩余假期反推已分配假期），则需要同时提供 ** getter（取值器）** 和 **setter（赋值器）**：

```swift
var vacationRemaining: Int {
    // 取值器：获取剩余假期天数
    get {
        vacationAllocated - vacationTaken
    }

    // 赋值器：通过剩余假期天数反推已分配假期（newValue 是 Swift 自动提供的参数，代表待赋值的新值）
    set {
        vacationAllocated = vacationTaken + newValue
    }
}
```

`newValue` 由 Swift 自动提供，存储用户要赋给该属性的新值。



## 属性观察器（Property Observers）

属性观察器是在属性值发生变化时执行的代码块：

- `didSet`：在属性值**刚刚变化后**执行
- `willSet`：在属性值**即将变化前**执行

我们可以通过 `Game` 结构体演示 `didSet` 的用法，当分数变化时打印提示信息：

```swift
struct Game {
    var score = 0 {
        // 分数变化后执行
        didSet {
            print("Score is now \(score)")
        }
    }
}

var game = Game()
game.score += 10  // 分数变为 10，触发 didSet，输出 "Score is now 10"
game.score -= 3   // 分数变为 7，触发 didSet，输出 "Score is now 7"
```



## 自定义构造器（Custom Initializers）

构造器是用于初始化结构体实例的特殊函数，确保实例的所有属性都有初始值。

Swift 会根据结构体的属性自动生成一个默认构造器，但我们也可以自定义构造器：

```swift
struct Player {
    let name: String  // 球员姓名
    let number: Int   // 球员号码

    // 自定义构造器：仅接收姓名，号码随机生成（1-99 之间）
    init(name: String) {
        self.name = name  // self.name 指代结构体的属性，区分参数名与属性名
        number = Int.random(in: 1...99)
    }
}
```

**重要提示**：构造器前不需要加 `func` 关键字，也不需要显式返回值。



## 访问控制（Access Control）

Swift 为结构体内部提供了多种访问控制选项，其中最常用的有四种：

- `private`：“不允许结构体外部的任何代码访问此属性 / 方法”
- `private(set)`：“结构体外部的代码可读取此属性，但不能修改”
- `fileprivate`：“不允许当前文件外部的代码访问此属性 / 方法”
- `public`：“允许任何地方的代码访问此属性 / 方法”（常用于框架开发）

示例如下：

```swift
struct BankAccount {
    // 余额：外部可读取，不可直接修改（仅通过内部方法修改）
    private(set) var funds = 0

    // 存款方法（修改余额）
    mutating func deposit(amount: Int) {
        funds += amount
    }

    // 取款方法（修改余额，返回是否取款成功）
    mutating func withdraw(amount: Int) -> Bool {
        if funds > amount {  // 余额充足时才允许取款
            funds -= amount
            return true
        } else {
            return false
        }
    }
}
```

由于我们使用了 `private(set)`，外部代码可以读取 `funds`（查看余额），但无法直接修改（例如不能通过 `account.funds = 100` 直接赋值）。



## 静态属性与方法（Static Properties and Methods）

Swift 支持静态属性和方法，允许我们将属性或方法直接添加到**结构体本身**，而非结构体的实例上：

```swift
struct AppData {
    // 静态属性：应用版本号（属于 AppData 类型，而非实例）
    static let version = "1.3 beta 2"
    // 静态属性：配置文件路径（属于 AppData 类型，而非实例）
    static let settings = "settings.json"
}
```

通过这种方式，每当我们需要查看或显示应用版本号时，只需直接访问 `AppData.version`（无需创建 `AppData` 实例）。



## 类（Class）

类允许我们创建自定义数据类型，与结构体相比，它有五个关键区别。

### 区别 1：继承（Inheritance）

类可以从其他类（父类）继承功能。例如：

```swift
// 父类：Employee（员工）
class Employee {
    let hours: Int  // 每日工作时长

    // 父类构造器
    init(hours: Int) {
        self.hours = hours
    }

    // 父类方法
    func printSummary() {
        print("I work \(hours) hours a day.")
    }
}

// 子类：Developer（开发者），继承自 Employee
class Developer: Employee {
    // 子类特有方法
    func work() {
        print("I'm coding for \(hours) hours.")  // 可直接访问父类的属性 hours
    }
}

// 创建子类实例
let novall = Developer(hours: 8)
novall.work()  // 调用子类方法，输出 "I'm coding for 8 hours."
novall.printSummary()  // 调用父类方法，输出 "I work 8 hours a day."
```



若子类需要重写父类的方法，必须使用 `override` 关键字（否则会报错）：

```swift
// 重写父类的 printSummary 方法
override func printSummary() {
    print("I spend \(hours) hours a day searching Stack Overflow.")
}
```

### 区别 2：构造器的复杂性

类的构造器比结构体更复杂，核心规则有三点：

1. Swift 不会为类自动生成成员构造器（需手动定义或继承）。
2. 若子类有自定义构造器，必须在初始化完自身属性后，调用**父类的构造器**（使用 `super.init()`）。
3. 若子类没有自定义构造器，则会自动继承父类的所有构造器。

示例如下：

```swift
// 父类：Vehicle（交通工具）
class Vehicle {
    let isElectric: Bool  // 是否为电动车

    // 父类构造器
    init(isElectric: Bool) {
        self.isElectric = isElectric
    }
}

// 子类：Car（汽车），继承自 Vehicle
class Car: Vehicle {
    let isConvertible: Bool  // 是否为敞篷车（子类特有属性）

    // 子类自定义构造器
    init(isElectric: Bool, isConvertible: Bool) {
        // 1. 先初始化子类自身的属性
        self.isConvertible = isConvertible
        // 2. 再调用父类的构造器（必须在子类属性初始化后）
        super.init(isElectric: isElectric)
    }
}
```

`super` 关键字用于调用父类的方法（如构造器 `super.init()`）。

### 区别 3：引用语义（Reference Semantics）

类的所有实例副本**共享同一份数据**—— 修改其中一个副本，其他副本的值也会自动变化。

示例如下：

```swift
class Singer {
    var name = "Adele"  // 歌手姓名（可变）
}

var singer1 = Singer()  // 创建第一个实例
var singer2 = singer1   // singer2 是 singer1 的“引用”（并非新实例）
singer2.name = "Justin"  // 修改 singer2 的姓名

print(singer1.name)  // 输出 "Justin"（singer1 的值也被修改）
print(singer2.name)  // 输出 "Justin"
```

上述代码会同时打印 “Justin”—— 尽管我们只修改了 `singer2`，但 `singer1` 的值也随之变化。相比之下，结构体的副本**不会共享数据**（值语义）。

### 区别 4：析构器（Deinitializer）

类可以拥有**析构器**，当类实例的最后一个引用被销毁时（如实例超出作用域），析构器会自动执行。

例如，我们可以创建一个类，在实例创建和销毁时分别打印提示信息：

```swift
class User {
    let id: Int  // 用户 ID

    // 构造器：实例创建时执行
    init(id: Int) {
        self.id = id
        print("User \(id): I'm alive!")
    }

    // 析构器：实例销毁时执行（无参数，无返回值，无 func 关键字）
    deinit {
        print("User \(id): I'm dead!")
    }
}

// 循环创建 3 个 User 实例
for i in 1...3 {
    let user = User(id: i)  // 实例创建，触发构造器，打印 "User i: I'm alive!"
    print("User \(user.id): I'm in control!")
}  // 循环结束，实例超出作用域，触发析构器，打印 "User i: I'm dead!"
```

### 区别 5：常量类实例的可变属性

即使类实例本身是常量（用 `let` 声明），我们仍然可以修改该实例的**可变属性**。

示例如下：

```swift
class User {
    var name = "Paul"  // 可变属性
}

let user = User()  // user 是常量实例（不能重新赋值为其他 User 实例）
user.name = "Taylor"  // 仍可修改实例的可变属性
print(user.name)  // 输出 "Taylor"
```

因此，类的方法若修改自身属性，无需像结构体那样添加 `mutating` 关键字。



## 协议（Protocols）

协议定义了 “某个数据类型应支持的功能”，Swift 会确保遵循协议的代码符合这些规则（即 “契约”）。

例如，我们可以定义一个 `Vehicle` 协议：

```swift
protocol Vehicle {
    // 协议要求：必须实现一个方法，接收距离（Int），返回预估时间（Int）
    func estimateTime(for distance: Int) -> Int
    // 协议要求：必须实现一个方法，接收距离（Int），无返回值
    func travel(distance: Int)
}
```

协议仅列出所需的方法（名称、参数、返回值），不包含具体实现 —— 它只定义 “规则”，不定义 “如何实现规则”。

一旦定义了协议，我们就可以让数据类型（如结构体、类）**遵循协议**，并实现协议要求的功能。例如，让 `Car` 结构体遵循 `Vehicle` 协议：

```swift
// Car 结构体遵循 Vehicle 协议（用冒号连接）
struct Car: Vehicle {
    // 实现协议要求的 estimateTime 方法
    func estimateTime(for distance: Int) -> Int {
        distance / 50  // 假设车速为 50km/小时，预估时间 = 距离 / 速度
    }

    // 实现协议要求的 travel 方法
    func travel(distance: Int) {
        print("I'm driving \(distance)km.")
    }
}
```

`Car` 必须**完全匹配** `Vehicle` 协议中的所有方法（名称、参数、返回值必须一致），否则会报错。

现在，我们可以编写一个函数，接收 “任何遵循 `Vehicle` 协议的类型” 作为参数 —— 因为 Swift 知道该类型一定实现了 `estimateTime()` 和 `travel()` 方法：

```swift
// 通勤函数：接收距离和交通工具（遵循 Vehicle 协议）
func commute(distance: Int, using vehicle: Vehicle) {
    if vehicle.estimateTime(for: distance) > 100 {
        print("Too slow!")  // 预估时间过长，提示“太慢”
    } else {
        vehicle.travel(distance: distance)  // 时间合适，调用交通工具的 travel 方法
    }
}

let car = Car()
commute(distance: 100, using: car)  // 调用函数，输出 "I'm driving 100km."
```

### 协议要求属性

协议还可以要求遵循者必须实现特定属性。例如，要求交通工具必须有 “名称” 和 “当前乘客数” 属性：

```swift
protocol Vehicle {
    // 协议要求：必须有一个名称属性（get 表示“可读”，可以是常量属性或计算属性）
    var name: String { get }
    // 协议要求：必须有一个当前乘客数属性（get set 表示“可读可写”，可以是变量属性或带 setter 的计算属性）
    var currentPassengers: Int { get set }
    // 原有方法要求
    func estimateTime(for distance: Int) -> Int
    func travel(distance: Int)
}
```

此时，所有遵循 `Vehicle` 协议的类型都必须实现这两个属性。例如，`Car` 结构体需补充：

```swift
struct Car: Vehicle {
    // 实现协议要求的 name 属性（常量属性，满足 get 要求）
    let name = "Car"
    // 实现协议要求的 currentPassengers 属性（变量属性，满足 get set 要求）
    var currentPassengers = 1

    // 原有方法实现...
    func estimateTime(for distance: Int) -> Int {
        distance / 50
    }

    func travel(distance: Int) {
        print("I'm driving \(distance)km.")
    }
}
```

**提示**：一个类型可以遵循多个协议，只需用逗号分隔协议名称（例如 `struct Plane: Vehicle, Flyable`）。



## 扩展（Extensions）

扩展允许我们为**任意类型**（包括系统类型如 `String`、`Int`，或自定义类型如结构体、类）添加功能（方法、计算属性等），而无需修改类型的原始定义。

例如，Swift 的 `String` 类型有一个用于去除首尾空白和换行符的方法 `trimmingCharacters(in: .whitespacesAndNewlines)`，但该方法名称较长。我们可以通过扩展为 `String` 添加一个更简洁的 `trimmed()` 方法：

```swift
// 为 String 类型添加扩展
extension String {
    // 新增方法：返回去除首尾空白和换行符的字符串
    func trimmed() -> String {
        self.trimmingCharacters(in: .whitespacesAndNewlines)
    }
}

var quote = "   The truth is rarely pure and never simple   "
let trimmed = quote.trimmed()  // 调用扩展方法，trimmed 的值为 "The truth is rarely pure and never simple"
```

若需要直接修改字符串本身（而非返回新字符串），需将扩展方法标记为 `mutating`：

```swift
extension String {
    // 新增可变方法：直接修改字符串，去除首尾空白和换行符
    mutating func trim() {
        self = self.trimmed()  // 调用上面定义的 trimmed() 方法，重新赋值给自身
    }
}

quote.trim()  // 直接修改 quote，此时 quote 的值为 "The truth is rarely pure and never simple"
```

### 扩展添加计算属性

扩展还可以为类型添加计算属性。例如，为 `String` 添加一个 `lines` 属性，返回字符串按换行符分割后的数组：

```swift
extension String {
    // 新增计算属性：返回按换行符分割的字符串数组
    var lines: [String] {
        self.components(separatedBy: .newlines)
    }
}
```

`components(separatedBy:)` 是 `String` 的系统方法，用于按指定分隔符（此处为换行符 `.newlines`）将字符串分割为数组。

现在，我们可以对所有 `String` 实例使用这个 `lines` 属性：

```swift
// 多行字符串（使用三个双引号包裹）
let lyrics = """
But I keep cruising
Can't stop, won't stop moving
"""

print(lyrics.lines.count)  // 输出 2（字符串被分割为两行）
```



## 协议扩展（Protocol Extensions）

协议扩展用于为**整个协议**添加功能（计算属性、方法实现），所有遵循该协议的类型都会自动获得这些功能。

例如，`Array`（数组）、`Dictionary`（字典）、`Set`（集合）都遵循 `Collection` 协议。我们可以通过协议扩展为这三种类型同时添加一个 `isNotEmpty` 属性：

```swift
// 为 Collection 协议添加扩展
extension Collection {
    // 新增计算属性：判断集合是否非空（isNotEmpty = 非 isEmpty）
    var isNotEmpty: Bool {
        isEmpty == false
    }
}
```

现在，所有遵循 `Collection` 协议的类型（如数组、字典、集合）都可以使用 `isNotEmpty` 属性：

```swift
let guests = ["Mario", "Luigi", "Peach"]  // 数组（遵循 Collection 协议）

if guests.isNotEmpty {  // 使用扩展属性 isNotEmpty
    print("Guest count: \(guests.count)")  // 输出 "Guest count: 3"
}
```

这种方式的核心优势在于：我们可以在协议中列出 “必须实现的方法”，然后在协议扩展中为这些方法提供**默认实现**。遵循协议的类型既可以直接使用默认实现，也可以根据需要自定义实现。



## 可选类型（Optionals）

可选类型用于表示 “数据可能不存在” 的场景 —— 例如，它可以区分 “整数的值为 0” 和 “整数没有值” 这两种情况。

通过以下代码可以直观理解可选类型：

```swift
// 字典：存储“角色-对立角色”的映射
let opposites = [
    "Mario": "Wario",
    "Luigi": "Waluigi"
]

// 尝试获取键为 "Peach" 的值（该键不存在）
let peachOpposite = opposites["Peach"]
```

上述代码尝试读取字典中键为 “Peach” 的值，但该键不存在，因此 `peachOpposite` 不能是普通的 `String` 类型。Swift 的解决方案是**可选类型**：它表示 “数据可能存在（有值），也可能不存在（无值）”。

可选字符串（`String?`）可能包含一个字符串值，也可能是一个特殊值 `nil`（表示 “无值”）。任何数据类型都可以是可选的，包括 `Int?`、`Double?`、`Bool?`，以及枚举、结构体、类的实例。

### 可选类型的解包（Unwrapping Optionals）

Swift 不允许直接使用可选类型的值（因为它可能为 `nil`，会导致运行时错误）。因此，我们需要**解包**可选类型 —— 检查其中是否有值，若有则取出值并使用。

Swift 提供了多种解包方式，最常用的是**可选绑定（if let）**：

```swift
// 可选绑定：若 opposites["Mario"] 有值，则将其解包并赋值给 marioOpposite（非可选类型）
if let marioOpposite = opposites["Mario"] {
    print("Mario's opposite is \(marioOpposite)")  // 输出 "Mario's opposite is Wario"
}
```

上述代码从字典中读取可选值，若其中包含字符串，则将其解包并赋值给常量 `marioOpposite`（此时 `marioOpposite` 是普通的 `String` 类型，非可选）。由于解包成功，`print()` 代码块会执行。



## 使用 guard 解包可选类型

Swift 还提供了另一种解包方式 `guard let`，它与 `if let` 类似，但逻辑相反：

- `if let`：若可选类型有值，则执行代码块内部逻辑
- `guard let`：若可选类型**无值**，则执行代码块内部逻辑（通常用于提前退出函数）

示例如下：

```swift
// 函数：打印一个整数的平方（参数为可选 Int?）
func printSquare(of number: Int?) {
    // guard let 解包：若 number 无值，则执行代码块内部逻辑
    guard let number = number else {
        print("Missing input")  // 提示“缺少输入”
        return  // 提前退出函数（必须，否则会报错）
    }

    // 若解包成功，number 变为非可选类型，可直接使用
    print("\(number) x \(number) is \(number * number)")
}
```

若使用 `guard` 检查函数的输入有效性，Swift 要求 “检查失败时必须退出当前作用域”（如用 `return` 退出函数）。而若解包成功，解包后的值可以在 `guard` 代码块**之后**的整个作用域中使用。

**提示**：`guard` 不仅可用于解包可选类型，还可用于检查任意条件（如 `guard age >= 18 else { ... }`）。



## 空值合并运算符（Nil Coalescing）

Swift 提供了第三种解包方式 ——**空值合并运算符**（`??`），它的作用是：“解包可选类型，若可选类型为 `nil`，则使用指定的默认值”。

语法格式：`可选值 ?? 默认值`

示例如下：

```swift
let tvShows = ["Archer", "Babylon 5", "Ted Lasso"]
// 随机获取数组中的一个元素（randomElement() 返回可选类型 Optional<String>）
// 若为 nil（数组为空时），则使用默认值 "None"
let favorite = tvShows.randomElement() ?? "None"
```

空值合并运算符在处理可选类型时非常实用。例如，将字符串转换为整数时，`Int(input)` 会返回可选类型 `Int?`（转换失败时为 `nil`），此时可通过空值合并运算符提供默认值：

```swift
let input = ""  // 空字符串，转换为整数会失败
// 尝试将 input 转换为 Int，若失败则使用默认值 0
let number = Int(input) ?? 0
print(number)  // 输出 0
```



## 可选链（Optional Chaining）

可选链用于 “访问可选类型内部的可选值”，语法为在可选值后添加 `?`，再继续访问其属性或方法。

示例如下：

```swift
let names = ["Arya", "Bran", "Robb", "Sansa"]
// 1. names.randomElement() 返回可选类型 Optional<String>（可能为 nil）
// 2. 若不为 nil，则调用 uppercased() 方法（将字符串转为大写）
let chosen = names.randomElement()?.uppercased()
// 若 chosen 为 nil，则使用默认值 "No one"
print("Next in line: \(chosen ?? "No one")")
```

第 2 行代码中的 `?.` 就是可选链：它表示 “若 `randomElement()` 返回的可选值有内容，则解包并调用 `uppercased()` 方法；若为 `nil`，则整个表达式的结果为 `nil`”。



## 可选 try?（Optional Try）

当调用一个可能抛出错误的函数时，我们可以使用 `try?` 将函数的结果转换为可选类型：

- 若函数执行成功（无错误抛出），则可选类型包含函数的返回值
- 若函数执行失败（抛出错误），则可选类型为 `nil`（忽略具体错误类型）

示例如下：

```swift
// 定义一个错误枚举（遵循 Error 协议）
enum UserError: Error {
    case badID  // ID 无效
    case networkFailed  // 网络失败
}

// 函数：根据 ID 获取用户（可能抛出错误）
func getUser(id: Int) throws -> String {
    throw UserError.networkFailed  // 模拟抛出“网络失败”错误
}

// 使用 try?：若函数成功，将返回值解包并赋值给 user；若失败，user 为 nil
if let user = try? getUser(id: 23) {
    print("User: \(user)")  // 函数抛出错误，此代码块不执行
}
```

在上述代码中，`getUser()` 始终抛出 `networkFailed` 错误，但我们并不关心 “具体抛出了什么错误”—— 只关心 “是否成功获取用户”。此时 `try?` 是最简洁的处理方式。



## 总结

本文涵盖了 Swift 语言的大部分基础知识点，但这仅仅是 Swift 功能的 “冰山一角”。幸运的是，凭借你目前学到的内容，已经足以使用 Swift 和 SwiftUI 开发出色的软件了。