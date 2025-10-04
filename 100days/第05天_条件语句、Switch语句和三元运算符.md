# 第5天 条件语句、Switch 语句和三元运算符

如果说莎士比亚的《哈姆雷特》中有一句台词是大多数人都知道的，那就是 “生存还是毁灭，这是一个问题”， 莎士比亚想用这句话表达关于生与死的终极问题，但巧合的是，这句话恰好触及了编程逻辑的核心：判断一个条件是真还是假。

今天我们将深入了解 Swift 的一个重要部分：运算符和条件语句，它们能让我们在程序运行时评估程序的状态，并根据结果采取不同的操作。实现这一功能有多种方法，你需要全部掌握，不过我们会一步一步讲解，以便你了解它们之间的区别。

**今天你需要完成四个教程，在这些教程中，你会接触到 `if`、`switch` 等内容。** 你可以选择性地阅读补充材料，之后还有一个小测试，帮助你确认自己是否理解了所学内容。



## 5.1 如何检查条件为真还是为假

*作者：Paul Hudson 2021 年 10 月 25 日 已针对 Xcode 16.4 更新*

程序经常需要做出 “选择”：

- 如果学生的考试分数超过 80 分，就打印一条成功消息。
- 如果用户输入的名字在字母顺序上排在其朋友的名字之后，就把朋友的名字放在前面。
- 如果向数组中添加一个数字后，数组包含的元素超过 3 个，就移除最旧的那个元素。
- 如果要求用户输入名字但用户什么都没输入，就给他们一个默认名字 “Anonymous”（匿名）。

Swift 通过`if`语句来处理这些情况，`if`语句能让我们检查一个条件，当条件为真时执行一些代码。其形式如下：

```swift
if someCondition {
    print("做某事")
}
```

我们来详细分析一下：

1. 条件以`if`开头，这向 Swift 表明我们要在代码中检查某种条件。
2. `someCondition`部分是编写条件的地方 —— 分数是否超过 80 分？数组是否包含超过 3 个元素？
3. 如果条件为真 —— 比如分数确实超过了 80 分 —— 那么我们就会打印 “做某事” 这条消息。

当然，代码中不止这些内容：我还没提到`{`和`}`这两个符号。它们被称为 “花括号”—— 更具体地说，是左花括号和右花括号 —— 不过有时你也会听到它们被叫做 “大括号”。

在 Swift 中，这些花括号被广泛用于标记代码块：左花括号开始一个代码块，右花括号结束一个代码块。代码块内部是当我们检查的条件为真时想要运行的所有代码，在我们的例子中就是打印一条消息。

你可以在代码块中包含任意多的代码：

```swift
if someCondition {
    print("做某事")
    print("做另一件事")
    print("做第三件事")
}
```

当然，真正重要的是`someCondition`部分，因为这是你编写检查代码的地方：你实际想要检查的条件是什么？

我们来试试分数的例子：如果一个`score`常量大于 80，我们就打印一条消息。代码如下：

```swift
let score = 85

if score > 80 {
    print("做得好！")
}
```

在这段代码中，`score > 80`就是我们的条件。你会记得在学校里`>`的意思是 “大于”，所以我们的完整条件是 “如果分数大于 80”。如果分数确实大于 80，就会打印 “做得好！”—— 很好！

`>`这个符号是一个比较运算符，因为它比较两个事物并返回一个布尔结果：左边的事物是否大于右边的事物？你还可以使用`<`表示小于，`>=`表示 “大于或等于”，`<=`表示 “小于或等于”。

我们来试一下 —— 你认为这段代码会打印什么？

```swift
let speed = 88
let percentage = 85
let age = 18

if speed >= 88 {
    print("我们要去的地方不需要 roads（ roads 此处指普通道路，结合语境可理解为“常规道路”）。")
}

if percentage < 85 {
    print("抱歉，你没通过考试。")
}

if age >= 18 {
    print("你有资格投票")
}
```

试着在脑子里运行一下这段代码 —— 哪些`print()`语句会实际执行？

第一个`print()`语句会在`speed`大于或等于 88 时执行，因为`speed`正好是 88，所以第一个`print()`代码会运行。

第二个`print()`语句会在`percentage`小于 85 时执行，而`percentage`正好是 85，所以第二个`print()`不会运行 —— 我们用的是小于，而不是小于或等于。

第三个`print()`语句会在`age`大于或等于 18 时执行，因为`age`正好是 18，所以第三个`print()`会运行。

现在我们来试试第二个示例条件：如果用户输入的名字在字母顺序上排在其朋友的名字之后，就把朋友的名字放在前面。你已经知道`<`、`>=`等运算符在处理数字时很有用，但它们在处理字符串时同样也能很好地工作：

```swift
let ourName = "Dave Lister"
let friendName = "Arnold Rimmer"

if ourName < friendName {
    print("是 \(ourName) 对 \(friendName)")
}

if ourName > friendName {
    print("是 \(friendName) 对 \(ourName)")
}
```

所以，如果`ourName`中的字符串在按字母顺序排序时位于`friendName`中的字符串之前，就会先打印`ourName`，再打印`friendName`，完全符合我们的需求。

我们来看第三个示例条件：如果向数组中添加一个数字后，数组包含的元素超过 3 个，就移除最旧的那个元素。你已经学过`append()`、`count`和`remove(at:)`，现在我们可以把这三个结合起来，形成这样的条件：

```swift
// 创建一个包含3个数字的数组
var numbers = [1, 2, 3]

// 添加第4个数字
numbers.append(4)

// 如果数组中的元素超过3个
if numbers.count > 3 {
    // 移除最旧的数字
    numbers.remove(at: 0)
}

// 显示结果
print(numbers)
```

现在来看第四个示例条件：如果要求用户输入名字但用户什么都没输入，就给他们一个默认名字 “Anonymous”。

要解决这个问题，你首先需要了解另外两个会经常用到的比较运算符，它们都用于处理相等性。第一个是`==`，表示 “等于”，用法如下：

```swift
let country = "Canada"

if country == "Australia" {
    print("G'day!（澳大利亚问候语，可译为“你好！”）")
}
```

第二个是`!=`，表示 “不等于”，用法如下：

```swift
let name = "Taylor Swift"

if name != "Anonymous" {
    print("欢迎，\(name)")
}
```

在我们的例子中，我们想要检查用户输入的用户名是否为空，我们可以这样做：

```swift
// 创建用户名变量
var username = "taylorswift13"

// 如果`username`包含空字符串
if username == "" {
    // 把它设为“Anonymous”
    username = "Anonymous"
}

// 现在打印欢迎消息
print("欢迎，\(username)！")
```

`""`是空字符串：我们开始一个字符串然后立即结束它，中间什么都没有。通过将`username`与空字符串进行比较，我们就是在检查用户是否输入了空字符串作为用户名，这正是我们想要的。

不过，还有其他方法可以进行这种检查，理解它们的作用很重要。

首先，我们可以将字符串的`count`（即它包含的字母数量）与 0 进行比较，如下所示：

```swift
if username.count == 0 {
    username = "Anonymous"
}
```

在任何语言中，比较两个字符串都不是很快，所以我们用整数比较代替了字符串比较：字符串的字母数量是否等于 0？

在很多语言中，这种方法速度很快，但在 Swift 中并非如此。你看，Swift 支持各种复杂的字符串 —— 实际上，它支持所有人类语言，包括表情符号，这在很多其他编程语言中是做不到的。然而，这种强大的支持是有代价的，其中一个代价就是，当你要获取一个字符串的`count`时，Swift 需要逐个遍历并数出所有的字母 —— 它不会将字符串的长度与字符串本身分开存储。

所以，想想这种情况：你有一个非常长的字符串，里面存储了莎士比亚的全部作品。我们检查`count == 0`时，需要遍历并数出字符串中所有的字母，尽管只要数到至少一个字符，我们就知道这个问题的答案了。

因此，Swift 为所有的字符串、数组、字典和集合增加了第二个功能：`isEmpty`。如果你检查的对象内部没有任何内容，它就会返回`true`，我们可以用它来改进我们的条件，如下所示：

```swift
if username.isEmpty == true {
    username = "Anonymous"
}
```

这样更好了，但我们还可以更进一步。你看，归根结底，重要的是你的条件必须最终是真或假；Swift 不允许其他情况。在我们的例子中，`username.isEmpty`本身就是一个布尔值，也就是说它不是真就是假，所以我们可以让代码更简洁：

```swift
if username.isEmpty {
    username = "Anonymous"
}
```

如果`isEmpty`为真，条件就成立，`username`会被设为 “Anonymous”；否则，条件不成立。



## 【可选阅读】Swift 如何让我们比较多种类型的数据？

*作者：Paul Hudson 2021 年 10 月 25 日 已针对 Xcode 16.4 更新*

Swift 允许我们直接比较多种类型的值，这意味着我们可以检查各种值的相等性和大小关系。例如，如果我们有这样一些值：

```swift
let firstName = "Paul"
let secondName = "Sophie"

let firstAge = 40
let secondAge = 10
```

那么我们可以通过多种方式来比较它们：

```swift
print(firstName == secondName)
print(firstName != secondName)
print(firstName < secondName)
print(firstName >= secondName)

print(firstAge == secondAge)
print(firstAge != secondAge)
print(firstAge < secondAge)
print(firstAge >= secondAge)
```

在幕后，Swift 以一种非常巧妙的方式实现了这一点，这使得它能够比较各种各样的事物。例如，Swift 有一种专门用于存储日期的类型叫做`Date`，你可以使用相同的运算符来比较日期：比如`someDate < someOtherDate`。

我们甚至可以让 Swift 使我们的枚举具有可比性，像这样：

```swift
enum Sizes: Comparable {
    case small
    case medium
    case large
}

let first = Sizes.small
let second = Sizes.large
print(first < second)
```

这会打印 “true”，因为`small`在枚举的 case 列表中排在`large`之前。



## 5.2 如何检查多个条件

*作者：Paul Hudson 2021 年 11 月 24 日 已针对 Xcode 16.4 更新*

当我们使用 `if` 时，必须给 Swift 提供一种条件，这种条件在被评估后要么为真，要么为假。如果你想检查几个不同的值，可以像这样一个接一个地放置它们：

```swift
let age = 16

if age >= 18 {
    print("你可以在下一次选举中投票。")
}

if age < 18 {
    print("抱歉，你太年轻了，还不能投票。")
}
```

然而，仔细想想，这并不是很高效：我们的两个条件是互斥的，因为如果某人大于或等于 18 岁（第一个条件），那么他们就不可能小于 18 岁（第二个条件），反之亦然。我们这是在让 Swift 做不必要的工作。

在这种情况下，Swift 为我们提供了一种更高级的条件，允许我们在代码中添加一个 `else` 块 —— 当条件为假时运行的一些代码。

使用 `else`，我们可以把前面的代码重写成这样：

```swift
let age = 16

if age >= 18 {
    print("你可以在下一次选举中投票。")
} else {
    print("抱歉，你太年轻了，还不能投票。")
}
```

现在 Swift 只需要检查 `age` 一次：如果它大于或等于 18，就运行第一个 `print()` 代码；但如果它是任何小于18 的值，就运行第二个 `print()` 代码。

所以，现在我们的条件看起来是这样的：

```swift
if someCondition {
    print("如果条件为真，这部分代码将运行")
} else {
    print("如果条件为假，这部分代码将运行")
}
```

还有一种更高级的条件叫做 `else if`，它允许你在第一个检查失败时运行一个新的检查。你可以根据需要只使用一个 `else if`，或者使用多个 `else if`，甚至可以在需要时将 `else if` 和 `else` 结合起来。不过，你只能有一个 `else`，因为它的意思是 “如果所有其他条件都为假”。

它的样子如下：

```swift
let a = false
let b = true

if a {
    print("如果a为真，运行这段代码")
} else if b {
    print("如果a为假但b为真，运行这段代码")
} else {
    print("如果a和b都为假，运行这段代码")
}
```

你可以根据需要继续添加更多的 `else if` 条件，但要注意你的代码不要变得太复杂！

除了使用 `else` 和 `else if` 来构建更复杂的条件外，你还可以检查不止一件事情。例如，我们可能想说 “如果今天的温度超过 20 摄氏度但低于 30 摄氏度，就打印一条消息”。

这有两个条件，所以我们可以这样写：

```swift
let temp = 25

if temp > 20 {
    if temp < 30 {
        print("今天天气不错。")
    }
}
```

虽然这样也能很好地工作，但 Swift 提供了一个更简洁的替代方案：我们可以使用 `&&` 来组合两个条件，只有当条件中的两个部分都为真时，整个条件才为真。

所以，我们可以把代码改成这样：

```swift
if temp > 20 && temp < 30 {
    print("今天天气不错。")
}
```

你应该把 `&&` 理解为 “并且”，所以我们的整个条件读作 “如果温度大于 20 并且温度小于 30，就打印一条消息”。它被称为*逻辑运算符*，因为它结合布尔值来生成一个新的布尔值。

`&&` 有一个对应的符号是两个竖线 `||`，意思是 “或者”。`&&` 只有在两个子条件都为真时，才能使一个条件为真，而 `||` 只要*其中一个*子条件为真，就能使一个条件为真。

例如，我们可以说，用户可以购买一款游戏，如果他们至少 18 岁，或者如果他们未满 18 岁，他们必须获得父母的许可。我们可以使用 `||` 这样写：

```swift
let userAge = 14
let hasParentalConsent = true

if userAge >= 18 || hasParentalConsent == true {
    print("你可以购买这款游戏")
}
```

这会打印 “你可以购买这款游戏”，因为虽然我们条件的前半部分不成立 —— 用户*还*不到 18 岁 —— 但后半部分成立，因为他们*确实*有父母的许可。

记住，在条件中使用 `== true` 是可以省略的，因为我们显然已经在检查一个布尔值了。所以，我们可以改成这样写：

```swift
if userAge >= 18 || hasParentalConsent {
    print("你可以购买这款游戏")
}
```

为了总结检查多个条件的内容，让我们尝试一个更复杂的例子，它同时结合了 `if`、`else if`、`else` 和 `||`，甚至展示了枚举在条件中的应用。

在这个例子中，我们将创建一个名为 `TransportOption` 的枚举，它包含五个情况：airplane（飞机）、helicopter（直升机）、bicycle（自行车）、car（汽车）和 scooter（滑板车）。然后我们给一个常量赋值一个示例值，并进行一些检查：

- 如果我们要乘飞机或直升机去某个地方，我们会打印 “让我们飞吧！”
- 如果我们骑自行车去，我们会打印 “希望有自行车道……”
- 如果我们开车去，我们会打印 “该陷入交通堵塞了。”
- 否则我们会打印 “我现在要租一辆滑板车！”

代码如下：

```swift
enum TransportOption {
    case airplane, helicopter, bicycle, car, scooter
}

let transport = TransportOption.airplane

if transport == .airplane || transport == .helicopter {
    print("让我们飞吧！")
} else if transport == .bicycle {
    print("希望有自行车道……")
} else if transport == .car {
    print("该陷入交通堵塞了。")
} else {
    print("我现在要租一辆滑板车！")
}
```

我想强调一下这段代码的几个部分：

1. 当我们给 `transport` 设置值时，需要明确我们指的是 `TransportOption.airplane`。我们不能只写 `.airplane`，因为 Swift 不知道我们指的是 `TransportOption` 枚举。
2. 一旦完成赋值，我们就不需要再写 `TransportOption` 了，因为 Swift 知道 `transport` 一定是某种 `TransportOption` 类型。所以，我们可以检查它是否等于 `.airplane`，而不是 `TransportOption.airplane`。
3. 这段代码使用 `||` 来检查 `transport` 是等于 `.airplane` *还是* 等于 `.helicopter`，如果其中*任何一个*为真，那么条件就为真，并打印 “让我们飞吧！”。
4. 如果第一个条件不成立 —— 如果交通方式不是 `.airplane` 或 `.helicopter`—— 那么就会运行第二个条件：交通方式是 `.bicycle` 吗？如果是，就打印 “希望有自行车道……”。
5. 如果我们也不是骑自行车去，那么我们会检查是否是开车去。如果是，就打印 “该陷入交通堵塞了。”。
6. 最后，如果所有前面的条件都不成立，那么就会运行 `else` 块，这意味着我们要乘滑板车去。



## 【可选阅读】`if` 和 `else if` 有什么区别？

*作者：Paul Hudson 2020 年 5 月 28 日 已针对 Xcode 16.4 更新*

当你刚开始学习 Swift 时，可能不太清楚什么时候用 `else`，什么时候用 `else if`，以及它们之间真正的区别是什么。

好吧，让我们从一个可以操作的示例值开始：

```swift
let score = 9001
```


> 如果你好奇的话，没错，这源于《龙珠 Z》的梗。
>

我们可以写一个简单的条件来检查分数是否超过 9000，像这样：

```swift
if score > 9000 {
    print("超过 9000 了！")
}
```

现在，如果我们想为等于或低于 9000 的分数打印不同的消息，我们*可以*这样写：

```swift
if score > 9000 {
    print("超过 9000 了！")
}

if score <= 9000 {
    print("没超过 9000 ！")
}
```

这完全可行，你的代码会完全按照你的预期执行。但这样一来，Swift 就要做更多的工作：它需要检查 `score` 的值两次。对于简单的整数来说，这很快，但如果我们的数据更复杂，速度就会变慢。

这就是 `else` 的用处，因为它的意思是 “如果我们检查的条件*不*为真，就运行这段代码”。

所以，我们可以把之前的代码改写成这样：

```swift
if score > 9000 {
    print("超过 9000 了！")
} else {
    print("没超过 9000 ！")
}
```

这样一改，Swift 只会检查 `score` 一次，而且我们的代码更短，也更容易阅读。

现在假设我们想要三条消息：一条用于分数超过 9000 的情况，一条用于正好是 9000 的情况，还有一条用于低于 9000 的情况。我们可以这样写：

```swift
if score > 9000 {
    print("超过 9000 了！")
} else {
    if score == 9000 {
        print("正好是 9000 ！")
    } else {
        print("没超过 9000 ！")
    }
}
```

同样，这完全没问题，而且效果和你期望的一样。不过，我们可以用 `else if` 让代码更容易阅读，它能让我们把紧跟在 `else` 后面的 `if` 直接组合起来，就像这样：

```swift
if score > 9000 {
    print("超过 9000 了！")
} else if score == 9000 {
    print("正好是 9000 ！")
} else {
    print("没超过 9000 ！")
}
```

为了演示，我想使用 Swift 的 `print()` 函数：传入一些文本运行它，文本就会被打印出来。

这让我们的代码更容易阅读和理解，因为我们看到的不是嵌套的条件，而是一个可以向下依次阅读的流程。

你可以有任意多个 `else if` 检查，但必须有且仅有一个 `if`，并且可以有零个或一个 `else`。



## 【可选阅读】如何检查多个条件

*作者：Paul Hudson 2021 年 10 月 25 日 已针对 Xcode 16.4 更新*

Swift 为我们提供了 `&&` 和 `||` 来同时检查多个条件，当只用于两个条件时，它们相当直观。

例如，假设我们运营一个论坛，用户可以发布消息，并且可以删除自己拥有的任何消息。我们可能会写出这样的代码：

```swift
if isOwner == true || isAdmin == true {
    print("你可以删除这条帖子")
}
```

当我们想检查多个条件时，事情就会变得更复杂。例如，我们可以规定普通用户只有在获得允许的情况下才能删除消息，而管理员总是可以删除帖子。我们可能会写出这样的代码：

```swift
if isOwner == true && isEditingEnabled || isAdmin == true {
    print("你可以删除这条帖子")
}
```

但这是想检查什么呢？`&&` 和 `||` 的检查顺序是怎样的？它可能意味着这样：

```swift
if (isOwner == true && isEditingEnabled) || isAdmin == true {
    print("你可以删除这条帖子")
}
```

这表示 “如果我们是帖子的所有者并且编辑功能已启用，你可以删除帖子；或者如果你是管理员，即使你不拥有该帖子，也可以删除它。” 这是合理的：如果允许编辑，人们可以删除自己的帖子，但管理员总是可以删除帖子。

然而，你也可能会这样理解：

```swift
if isOwner == true && (isEditingEnabled || isAdmin == true) {
    print("你可以删除这条帖子")
}
```

现在它的意思就完全不同了：“如果你是帖子的所有者，并且要么编辑功能已启用，要么你是管理员，那么你可以删除帖子。” 这意味着管理员*不能*删除他们不拥有的帖子，这是不合理的。

显然，Swift 不喜欢这种歧义，所以它总会把代码解释成我们写了这样的形式：

```swift
if (isOwner == true && isEditingEnabled) || isAdmin == true {
    print("你可以删除这条帖子")
}
```

不过，说实话，让 Swift 来解决这个问题并不是一种好的体验，这就是为什么我们可以自己加上括号来明确我们的确切意思。

关于这一点没有具体的建议，但实际上，只要在单个条件中混合使用 `&&` 和 `||`，几乎都应该使用括号来使结果清晰明了。



## 【练习题】条件判断

问题 1/12：这段代码会打印 “Success”—— 对还是错？

```swift
var city = "Tokyo"
if city == "Madrid" {
	print("Failure")
} else {
	print("Success")
}
```



问题 2/12：这段代码会打印 “Success”—— 对还是错？

```swift
let sharkCount: Int = 21
if sharkCount < 21 {
	print("Success")
} else {
	print("Failure")
}
```



问题 3/12：这段代码会打印 “Success”—— 对还是错？

```swift
let passwordLength = 5
if passwordLength <= 5 {
	print("Failure")
} else {
	print("Success")
}
```



问题 4/12：这段代码会打印 “Success”—— 对还是错？

```swift
var favoriteColor = "Red"
if favoriteColor == "red" {
	print("Success")
} else {
	print("Failure")
}
```



问题 5/12：这段代码会打印 “Success”—— 对还是错？

```swift
var actualWage: Int = 22_000
var medianWage: Double = 22_000
if actualWage >= medianWage {
	print("Success")
}
```



问题 6/12：这段代码会打印 “Success”—— 对还是错？

```swift
var cupsOfCoffee = "4"
if cupsOfCoffee >= 3 {
	print("Success")
} else {
	print("Failure")
}
```



问题 7/12：这段代码会打印 “Success”—— 对还是错？

```swift
let isAvailable: Bool = false
if isAvailable {
	print("Success")
} else {
	print("Failure")
}
```



问题 8/12：这段代码会打印 “Success”—— 对还是错？

```swift
let age = 21
if age > 18 {
	print("Success")
} else {
	print("Failure")
}
```



问题 9/12：这段代码会打印 “Success”—— 对还是错？

```swift
let employeeCount = 50
if employeeCount == 50 {
	print("Success")
}
```



问题 10/12：这段代码会打印 “Success”—— 对还是错？

```swift
let orderAmount = 200
if orderAmount >= 200 {
	print("Success")
}
```



问题 11/12：这段代码会打印 “Success”—— 对还是错？

```swift
let name = "Taylor"
if name == "Paul" {
	print("Failure")
} else {
	print("Success")
}
```



问题 12/12：这段代码会打印 “Success”—— 对还是错？

```swift
let teaStrength = 5
if teaStrength >= 4 {
	print("Success")
} else {
	print("Failure")
}
```



## 【练习题】组合条件

问题 1/12：这段代码会打印一条消息 —— 对还是错？

```swift
let a = 10
let b = 10

if a >= 10 && b <= 10 {
	print("Hello, Swift!")
}
```



问题 2/12：这段代码会打印一条消息 —— 对还是错？

```swift
let average1 = 5.0
let average2 = 4.0

if average1 > 5.0 && average2 > 4.0 {
	print("Hello, Swift!")
}
```



问题 3/12：这段代码会打印一条消息 —— 对还是错？

```swift
let a = true
let b = true

if a && b {
	print("Hello, Swift!")
}
```



问题 4/12：这段代码会打印一条消息 —— 对还是错？

```swift
let test = false

if test == false {
	print("Hello, Swift!")
}
```



问题 5/12：这段代码会打印一条消息 —— 对还是错？

```swift
let loggedIn = true
let authorized = false

if loggedIn && authorized {
	print("Hello, Swift!")
}
```



问题 6/12：这段代码会打印一条消息 —— 对还是错？

```swift
let rating = "5"

if rating > 4 {
	print("Hello, Swift!")
}
```



问题 7/12：这段代码会打印一条消息 —— 对还是错？

```swift
let age1 = 18
let age2 = 21

if age1 > 18 || age1 < 18 {
	print("Hello, Swift!")
}
```



问题 8/12：这段代码会打印一条消息 —— 对还是错？

```swift
let name1 = "Charlotte"
let name2 = "Sophie"

if name1 == "Paul" || name2 == "Sophie" {
	print("Hello, Swift!")
}
```



问题 9/12：这段代码会打印一条消息 —— 对还是错？

```swift
let a = true
let b = false

if a || b {
	print("Hello, Swift!")
}
```



问题 10/12：这段代码会打印一条消息 —— 对还是错？

```swift
let score1 = 23
let score2 = 18

if score1 > 18 | score2 < 18 {
	print("Hello, Swift!")
}
```



问题 11/12：这段代码会打印一条消息 —— 对还是错？

```swift
let age1 = 18
let age2 = 21

if age1 >= 18 || age1 <= 18 {
	print("Hello, Swift!")
}
```



问题 12/12：这段代码会打印一条消息 —— 对还是错？

```swift
let loggedIn = true
let authorized = false

if loggedIn == false && authorized == false {
	print("Hello, Swift!")
}
```



## 5.3 如何使用 switch 语句检查多个条件

*作者：Paul Hudson 2024 年 4 月 11 日 已针对 Xcode 16.4 更新*

你可以反复使用 `if` 和 `else if` 来根据需要多次检查条件，但这样读起来会有点费劲。例如，如果我们有一个来自枚举的天气预报，我们可以根据一系列条件选择要打印的消息，就像这样：

```swift
enum Weather {
    case sun, rain, wind, snow, unknown
}

let forecast = Weather.sun

if forecast == .sun {
    print("今天应该是个好天气。")
} else if forecast == .rain {
    print("带上雨伞。")
} else if forecast == .wind {
    print("穿点暖和的衣服")
} else if forecast == .rain {
    print("学校停课了。")
} else {
    print("我们的预报生成器坏了！")
}
```

这虽然能工作，但存在一些问题：

1. 我们不得不反复写 `forecast`，尽管我们每次检查的都是同一个东西。
2. 我不小心检查了两次 `.rain`，尽管第二次检查永远不可能为真，因为只有第一次检查失败时才会执行第二次检查。
3. 我根本没有检查 `.snow`，所以我们遗漏了相关功能。

我们可以使用另一种检查条件的方式 ——`switch` 来解决这三个问题。它也能让我们逐个检查各个情况，而且 Swift 还能提供帮助。对于枚举，它知道枚举可能有的所有情况，所以如果我们遗漏了一种情况或者重复检查了一种情况，它会发出警告。

因此，我们可以用下面的代码替换所有那些 `if` 和 `else if` 检查：

```swift
switch forecast {
case .sun:
    print("今天应该是个好天气。")
case .rain:
    print("带上雨伞。")
case .wind:
    print("穿点暖和的衣服")
case .snow:
    print("学校停课了。")
case .unknown:
    print("我们的预报生成器坏了！")
}
```

让我们来详细分析一下：

1. 我们以 `switch forecast` 开始，这告诉 Swift 这是我们要检查的值。
2. 然后有一系列 `case` 语句，每个语句都是我们要与 `forecast` 进行比较的值。
3. 我们的每个 case 都列出了一种天气类型，而且因为我们是基于 `forecast` 进行切换的，所以不需要写 `Weather.sun`、`Weather.rain` 等等 ——Swift 知道它一定是某种 `Weather` 类型。
4. 在每个 case 之后，我们写一个冒号来标记如果该 case 匹配时要运行的代码的开始。
5. 我们用一个右大括号来结束 `switch` 语句。

如果你尝试把 `.snow` 改成 `.rain`，你会看到 Swift 会强烈警告：一次是我们检查了两次 `.rain`，另一次是我们的 `switch` 语句不是*详尽的*—— 它没有处理所有可能的情况。

如果你用过其他编程语言，你可能会注意到 Swift 的 `switch` 语句在两个地方有所不同：

1. 所有的 `switch` 语句*必须*是详尽的，这意味着必须处理所有可能的值，这样你就不会意外漏掉某个值。
2. Swift 会执行第一个与你要检查的条件相匹配的 case，仅此而已。其他语言通常会继续执行后续所有 case 中的代码，这通常完全不是默认情况下应该做的事。

尽管这两个说法都是正确的，但如果需要，Swift 会给我们更多的控制权。

首先，*是的*，所有的 `switch` 语句*必须*是详尽的：你必须确保涵盖所有可能的值。如果你要对一个字符串进行切换，显然不可能详尽地检查所有可能的字符串，因为字符串的数量是无限的，所以这时我们需要提供一个*默认*情况 —— 当其他所有情况都不匹配时运行的代码。

例如，我们可以对一个包含地名的字符串进行切换：

```swift
let place = "Metropolis"

switch place {
case "Gotham":
    print("你是蝙蝠侠！")
case "Mega-City One":
    print("你是特警判官！")
case "Wakanda":
    print("你是黑豹！")
default:
    print("你是谁？")
}
```

最后那个 `default:` 就是默认情况，当所有 case 都不匹配时，就会运行它。

**记住：Swift 会按顺序检查各个 case，并运行第一个匹配的 case。** 如果你把 `default` 放在任何其他 case 之前，那个 case 就没用了，因为它永远不会被匹配到，而且 Swift 会拒绝编译你的代码。

其次，如果你明确*希望* Swift 继续执行后续的 case，可以使用 `fallthrough`。这*不*常用，但有时候 —— 只是有时候 —— 它能帮助你避免重复工作。

例如，有一首著名的圣诞歌曲叫《圣诞节的十二天》，随着歌曲的推进，越来越多的礼物堆在一个不幸的人身上，到第六天左右，这个人的房子已经相当满了。

我们可以用 `fallthrough` 来简单模拟这首歌。首先，这是不使用 `fallthrough` 时的代码样子：

```swift
let day = 5
print("我挚爱的人给了我……")

switch day {
case 5:
    print("5 个金戒指")
case 4:
    print("4 只鸣鸟")
case 3:
    print("3 只法国母鸡")
case 2:
    print("2 只斑鸠")
default:
    print("梨树上的一只鹧鸪")
}
```

这会打印 “5 个金戒指”，但这并不完全正确。第一天只应该打印 “梨树上的一只鹧鸪”，第二天应该打印 “2 只斑鸠”*然后*是 “梨树上的一只鹧鸪”，第三天应该打印 “3 只法国母鸡”、“2 只斑鸠”，…… 嗯，你明白了。

我们可以用 `fallthrough` 来获得完全那样的行为：

```swift
let day = 5
print("我挚爱的人给了我……")

switch day {
case 5:
    print("5 个金戒指")
    fallthrough
case 4:
    print("4 只鸣鸟")
    fallthrough
case 3:
    print("3 只法国母鸡")
    fallthrough
case 2:
    print("2 只斑鸠")
    fallthrough
default:
    print("梨树上的一只鹧鸪")
}
```

这会匹配第一个 case 并打印 “5 个金戒指”，但 `fallthrough` 这一行意味着会执行 `case 4` 并打印 “4 只鸣鸟”，而 `case 4` 又使用了 `fallthrough`，所以会打印 “3 只法国母鸡”，依此类推。这虽然不能完美匹配这首歌，但至少你可以看到这个功能的作用！



## 【可选阅读】什么时候应该使用 switch 语句而不是 if？

*作者：Paul Hudson 2021 年 10 月 6 日 已针对 Xcode 16.4 更新*

Swift 开发者可以同时使用 `switch` 和 `if` 来检查代码中的多个值，而且通常没有确凿的理由让你必须选择其中一个而不是另一个。话虽如此，有三个理由可能会让你*考虑*使用 `switch` 而不是 `if`：

1. Swift 要求其 `switch` 语句是详尽的，这意味着你必须要么为要检查的每个可能值都有一个 `case` 块（例如枚举的所有情况），要么必须有一个 `default` 情况。`if` 和 `else if` 则没有这个要求，所以你可能会不小心漏掉某个情况。
2. 当你使用 `switch` 来检查一个值的多种可能结果时，这个值只会被读取一次，而如果你使用 `if`，它会被读取多次。当你开始使用函数调用时，这一点就变得更为重要了，因为有些函数调用可能很慢。
3. Swift 的 `switch` 情况允许进行高级模式匹配，而用 `if` 来做就会很麻烦。

还有一种情况，但有点模糊：一般来说，如果你想检查同一个值的三种或更多可能状态，人们会更愿意使用 `switch` 而不是 `if`，至少从可读性来看是这样 —— 这样更清楚我们是在反复检查同一个值，而不是编写不同的条件。

附言：我已经介绍了 `fallthrough` 关键字，因为对于来自其他编程语言的人来说它很重要，但在 Swift 中很少见到它的使用 —— 如果你很难想到它可能有用的场景，也不用担心，因为说实话大多数时候它确实没什么用！



## 【练习题】switch 语句

问题 1/6：关于 `switch case`，以下哪些陈述是正确的？

- **选项 1：** 你把要检查的值放在开头。
- **选项 2：** switch 语句最适合用于常量。

问题 2/6：关于 `switch case`，以下哪些陈述是正确的？

- **选项 1：** 你只能使用 `fallthrough` 一次。
- **选项 2：** 你必须列出所有结果作为 `case` 语句，或者使用 `default`。

问题 3/6：关于 `switch case`，以下哪些陈述是正确的？

- **选项 1：** 如果你想匹配所有其他值，使用 `default`。
- **选项 2：** switch 语句会使你的代码运行得更慢。

问题 4/6：关于 `switch case`，以下哪些陈述是正确的？

- **选项 1：** 默认情况写成 `default:` 而不是 `case default:`。
- **选项 2：** 最多可以有 10 个 case。

问题 5/6：关于 `switch case`，以下哪些陈述是正确的？

- **选项 1：** 如果你使用 `fallthrough`，下一个 case 的代码将会运行。
- **选项 2：** 总是需要默认情况。

问题 6/6：关于 `switch case`，以下哪些陈述是正确的？

- **选项 1：** 与多个 `if` 条件相比，switch 语句通常更易读。
- **选项 2：** switch 语句不能用于整数。



## 5.4 如何使用三元条件运算符进行快速测试

*作者：Paul Hudson 2021 年 10 月 4 日 已针对 Xcode 16.4 更新*

在 Swift 中，还有最后一种检查条件的方法，当你看到它时，可能会想它在什么时候有用。公平地说，在很长一段时间里，我很少使用这种方法，但你稍后会发现，它在 SwiftUI 中确实非常重要。

这个选项被称为*三元条件运算符*。要理解它为什么叫这个名字，你首先需要知道`+`、`-`、`==`等都被称为*二元*运算符，因为它们处理两个输入：例如，`2 + 5`处理 2 和 5。

三元运算符处理*三个*输入，实际上，因为三元条件运算符是 Swift 中唯一的三元运算符，你经常会听到它被简称为 “三元运算符”。

好了，关于名称就说这么多：它实际上是做什么的呢？三元运算符让我们可以检查一个条件，并返回两个值中的一个：条件为真时返回一个值，条件为假时返回另一个值。

例如，我们可以创建一个名为`age`的常量来存储某人的年龄，然后创建第二个常量`canVote`来存储该人是否有投票权：

```swift
let age = 18
let canVote = age >= 18 ? "是" : "否"
```

当这段代码运行时，`canVote`将被设置为 “是”，因为`age`被设置为 18。

如你所见，三元运算符分为三部分：一个检查（`age >= 18`），条件为真时的值（“是”），以及条件为假时的值（“否”）。这和常规的`if`和`else`块完全一样，顺序也相同。

如果有帮助的话，斯科特・米肖德提出了一个有用的记忆法：WTF。它代表 “what，true，false”（什么，真，假），与我们代码的顺序相匹配：

- 我们的条件是什么？是`age >= 18`。
- 条件为真时做什么？返回 “是”，以便存储在`canVote`中。
- 条件为假时呢？返回 “否”。

让我们看看其他一些例子，先从一个简单的例子开始，它读取 24 小时制的小时数并打印两条消息中的一条：

```swift
let hour = 23
print(hour < 12 ? "现在是中午之前" : "现在是中午之后")
```

注意，这里没有将结果分配到任何地方 —— 根据`hour`的值，要么打印真的情况，要么打印假的情况。

再看一个例子，它将数组的`count`作为条件的一部分，然后返回两个字符串中的一个：

```swift
let names = ["Jayne", "Kaylee", "Mal"]
let crewCount = names.isEmpty ? "没人" : "\(names.count)人"
print(crewCount)
```

当你的条件使用`==`来检查相等性时，读起来会*有点*困难，就像这里看到的：

```swift
enum Theme {
    case light, dark
}

let theme = Theme.dark

let background = theme == .dark ? "黑色" : "白色"
print(background)
```

通常人们觉得`= theme ==`这部分很难读，但记住要把它分解开：

- 什么？`theme == .dark`
- 真：“黑色”
- 假：“白色”

所以如果主题等于`.dark`，就返回 “黑色”，否则返回 “白色”，然后把它赋给`background`。

现在，你可能想知道为什么三元运算符有用，特别是当我们有常规的`if`/`else`条件可用时。我知道这不是一个很好的答案，但请相信我：在某些时候，特别是在 SwiftUI 中，我们别无选择，*必须*使用三元运算符。

你可以大致了解一下我们检查小时数的代码存在什么问题：

```swift
let hour = 23
print(hour < 12 ? "现在是中午之前" : "现在是中午之后")
```

如果我们想用`if`和`else`来写，要么需要写这段无效的代码：

```swift
print(
    if hour < 12 {
        "现在是中午之前"
    } else {
        "现在是中午之后"
    }
)
```

要么运行两次`print()`，像这样：

```swift
if hour < 12 {
    print("现在是中午之前")
} else {
    print("现在是中午之后")
}
```

第二个在这儿运行得很好，但在 SwiftUI 中就几乎不可能了，你稍后会看到。所以，即使你可能看着三元运算符，想知道为什么要用它，请相信我：它很重要！



## 【可选阅读】在 Swift 中什么时候应该使用三元运算符？

*作者：Paul Hudson 2020 年 5 月 28 日 已针对 Xcode 16.4 更新*

三元运算符让我们可以根据条件从两个结果中选择一个，而且方式非常简洁：

```swift
let isAuthenticated = true
print(isAuthenticated ? "欢迎！" : "你是谁？")
```

有些人非常依赖三元运算符，因为它能写出非常简短的代码，而有些人则尽可能避免使用它，因为它会使代码更难读。

我非常支持 “尽可能避免” 的阵营，因为即使这段代码更长，我确实觉得它更容易理解：

```swift
if isAuthenticated {
    print("欢迎")
} else {
    print("你是谁？")
}
```

现在，有一个时候三元运算符被大量使用，那就是在 SwiftUI 中。我不想在这里给出代码示例，因为可能会让人难以理解，但如果你愿意，在那里你真的可以大量使用三元运算符。即便如此，我还是喜欢在可能的情况下去掉它们，让我的代码更容易读，但你应该自己尝试，得出自己的结论。



## 【练习题】三元运算符

问题 1/12：这段代码会打印 “Success”—— 对还是错？

```swift
let phone = "iPhone"
print(phone == "Android" ? "Failure" : "Success")
```



问题 2/12：这段代码会打印 “Success”—— 对还是错？

```swift
var retweets = "100"
print(retweets > 10 ? "Success" : "Failure")
```



问题 3/12：这段代码会打印 “Success”—— 对还是错？

```swift
let numberOfCats = 21
print(numberOfCats >= 18 ? "Success" : "Failure")
```



问题 4/12：这段代码会打印 “Success”—— 对还是错？

```swift
let dexterity = 18
print(dexterity >= 18 ? "Success" : "Failure")
```



问题 5/12：这段代码会打印 “Success”—— 对还是错？

```swift
var averagePages: Double = 10.01
print(averagePages == 10 ? "Success" : "Failure")
```



问题 6/12：这段代码会打印 “Success”—— 对还是错？

```swift
let storageSpace = 500
print(storageSpace > 1000 ? "Success" : "Failure")
```



问题 7/12：这段代码会打印 “Success”—— 对还是错？

```swift
let isRecyclable = false
print(isRecyclable == true ? "Success" : "Failure")
```



问题 8/12：这段代码会打印 “Success”—— 对还是错？

```swift
let isComplete: Bool = false
print(isComplete == true ? "Failure" : "Success")
```



问题 9/12：这段代码会打印 “Success”—— 对还是错？

```swift
let strongMagnets = true
print(strongMagnets ? "Success" : "Failure")
```



问题 10/12：这段代码会打印 “Success”—— 对还是错？

```swift
let highScore = 90
let actualScore = 89
print(actualScore > highScore ? "Success" : "Failure")
```



问题 11/12：这段代码会打印 “Success”—— 对还是错？

```swift
let sides = 5
print(sides <= 6 ? "Success" : "Failure")
```



问题 12/12：这段代码会打印 “Success”—— 对还是错？

```swift
var singers = ["Taylor Swift"]
print(singers == "Taylor Swift" ? "Success" : "Failure")
```



你还记得这个系列课程的两条规则吗？你一直在坚持学习，这已经很好地践行了第一条规则（你太棒了！），但不要忘记第二条：把你的学习进度分享到网上，这样你就能得到更多的鼓励。