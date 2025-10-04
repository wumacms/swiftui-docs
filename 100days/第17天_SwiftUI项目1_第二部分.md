# 第17天 SwiftUI 项目1 第二部分

正如伊曼努尔・康德所言：“无理论的经验是盲目的，而无经验的理论只是空洞的智力游戏。” 昨天我们已经涵盖了构建这款应用所需的几乎所有技术，因此现在是时候将这些理论知识转化为一个真实、实用的应用程序了。

SwiftUI 最让我喜爱的一点就是，从理论到实践的过渡过程异常轻松 —— 不会有隐藏在角落的意外惊喜，也无需在过程中额外学习大量新内容。

当然，为了让大家保持专注，我会悄悄加入几个小知识点，但总体而言，构建这个项目所需的知识你们已经全部掌握了，现在只需弄清楚各个部分如何相互配合即可。

**今天你们需要学习四个主题，在这些主题中，你们将运用所学的 `Form`、`@State`、`Picker` 等知识。**

- 通过 TextField 读取用户输入的文本
- 在表单中创建选择器（Picker）
- 为小费比例添加分段控制器（Segmented Control）
- 计算每人应付的总金额
- 隐藏键盘

（说明：文中 `Form`、`@State`、`Picker`、`TextField` 等为 SwiftUI 框架中的特定组件或属性，遵循技术文档翻译惯例保留原文；“Segmented Control” 是 iOS 中的标准控件，中文通常译为 “分段控制器”，此处统一采用该译法以保持术语一致性。）



## 使用 TextField 读取用户输入的文本

*作者：Paul Hudson 2024 年 4 月 11 日*

我们正在开发一个账单分摊应用，这意味着用户需要能够输入账单金额、共同分摊费用的人数以及想要支付的小费金额。

希望你已经意识到，这意味着我们需要添加三个 `@State` 属性，因为我们期望用户向应用中输入这三部分数据。

因此，首先在 `ContentView` 结构体中添加以下三个属性：

```swift
@State private var checkAmount = 0.0  // 账单金额
@State private var numberOfPeople = 2  // 分摊人数
@State private var tipPercentage = 20  // 小费比例（百分比）
```

如你所见，我们为账单金额设置了 0.0 的默认值，为分摊人数设置了 2 的默认值，为小费比例设置了 20 的默认值。这些属性的默认值都比较合理：我们无法预知账单具体金额，但默认假设 2 人分摊且支付 20% 的小费，对这个应用来说都是不错的初始设定。

当然，有些人可能更倾向于选择其他比例的小费，所以我们会让用户从一组预先设定的小费比例中进行选择。我们需要在某个地方存储这些可能的小费比例，因此请在前面三个属性的下方添加第四个属性：

```swift
let tipPercentages = [10, 15, 20, 25, 0]  // 可选小费比例列表
```

接下来，我们将逐步构建表单，首先从用户输入账单金额的文本框开始。我们会先从你已掌握的知识入手，但你会发现这样做还不能完全满足需求。

将 `body` 属性修改为以下内容：

```swift
Form {
    Section {
        TextField("金额", text: $checkAmount)
    }
}
```

这样写是无法正常工作的，但这很正常。问题在于，SwiftUI 中的 `TextField` 更适合用于输入文本（即字符串类型）。我们*可以*允许在这里输入字符串，但这意味着用户可能会输入任何类型的文本，之后我们还需要仔细地将这个字符串转换为可用于计算的数字。

幸运的是，我们有更好的方法：我们可以将 `Double` 类型的值传递给 `TextField`，并让它将输入内容视为货币，代码如下：

```swift
TextField("金额", value: $checkAmount, format: .currency(code: "USD"))
```

这已经是一个改进了，但我们还能做得更好。你要知道，上面的代码指定 SwiftUI 将金额格式化为美元（USD）格式，但全球超过 95% 的人口并不使用美元作为流通货币，所以我们不应该强制使用 “USD” 作为货币单位。

更好的解决方案是，询问 iOS 是否能获取当前用户所在地区的货币代码（如果有的话）。这个代码可能是 USD（美元），也可能是 CAD（加拿大元）、AUD（澳大利亚元）、JPY（日元）等 —— 如果用户未设置过相关地区信息，也可能无法获取到有效值。

因此，更优的格式设置如下：

```swift
.currency(code: Locale.current.currency?.identifier ?? "USD"))
```

`Locale` 是 iOS 内置的一个庞大结构体，用于存储用户的所有区域设置 —— 包括使用的日历类型、数字千分位的分隔方式、是否使用公制单位等等。在我们的场景中，我们会先查询用户是否有首选的货币代码，如果没有，就 fallback（降级）到 “USD”，这样至少能保证有一个可用的货币单位。

到目前为止，我们的代码创建了一个可滚动的输入表单，表单包含一个分区（Section），该分区中又包含一行内容：就是我们的文本框。在表单中创建文本框时，第一个参数是一个字符串，用作*占位提示文本*—— 显示在文本框内部的灰色文字，用于提示用户这里应该输入什么内容。第二个参数是与 `checkAmount` 属性的双向绑定（two-way binding），这意味着当用户输入内容时，该属性的值会自动更新。第三个参数用于控制文本的格式，这里我们将其设置为货币格式。

`@State` 属性包装器（property wrapper）的一个重要特性是，它会自动监听属性值的变化，当值发生改变时，会自动重新调用 `body` 属性。简单来说，就是它会重新加载界面以反映最新的状态，这是 SwiftUI 工作方式的核心特性之一。

为了演示这一点，我们可以添加第二个分区，其中包含一个文本视图（Text），用于显示 `checkAmount` 的值，代码如下：

```swift
Form {
    Section {
        TextField("金额", value: $checkAmount, format: .currency(code: Locale.current.currency?.identifier ?? "USD"))
    }

    Section {
        Text(checkAmount, format: .currency(code: Locale.current.currency?.identifier ?? "USD"))
    }
}
```

这段代码的作用与 `TextField` 几乎完全相同：它让 SwiftUI 将数字格式化为货币形式，使用系统默认的货币代码（如果有），如果没有则使用 USD。在本项目的后续部分，我们会使用另一种格式样式来显示百分比 —— 这些文本格式化工具非常实用！

稍后我们会让这个文本视图显示其他内容，但现在请在模拟器中运行应用，亲自尝试一下效果。

点击账单金额的文本框，然后输入一个示例金额（例如 50）。你会发现，在输入过程中，第二个分区中的文本视图会自动、实时地反映你的输入内容。

这种同步效果的实现原理如下：

1. 我们的文本框与 `checkAmount` 属性建立了双向绑定。
2. `checkAmount` 属性被标记为 `@State`，它会自动监听值的变化。
3. 当 `@State` 属性的值发生改变时，SwiftUI 会重新调用 `body` 属性（即重新加载界面）。
4. 因此，文本视图会获取到 `checkAmount` 的最新值并显示。

最终的项目不会在这个文本视图中显示 `checkAmount` 的值，但目前这样的设置已经足够用于演示了。不过，在继续往下之前，我想解决一个重要的问题：当用户点击我们的文本框准备输入内容时，会看到一个常规的字母键盘。当然，用户可以点击键盘上的按钮切换到数字输入界面，但这既麻烦又没必要。

幸运的是，文本框有一个修饰符（modifier）可以强制显示特定类型的键盘：`keyboardType()`。我们可以给这个修饰符传递一个参数，指定想要显示的键盘类型，在当前场景下，`.numberPad`（数字键盘）或 `.decimalPad`（带小数点的数字键盘）都是不错的选择。这两种键盘都会显示 0 到 9 的数字供用户点击，但 `.decimalPad` 还会显示一个小数点，这样用户就可以输入像 32.50 美元这样的账单金额，而不仅仅是整数。

因此，将文本框的代码修改为以下内容：

```swift
TextField("金额", value: $checkAmount, format: .currency(code: Locale.current.currency?.identifier ?? "USD"))
    .keyboardType(.decimalPad)
```

你会注意到，我在 `.keyboardType` 前面加了一个换行，并将它缩进了一级（比 `TextField` 更深）—— 这并不是必需的，但这样做可以帮助你理清哪些修饰符属于哪个视图。

现在运行应用，你会发现只能在文本框中输入数字了。

**提示**：`.numberPad` 和 `.decimalPad` 键盘类型会告诉 SwiftUI 显示 0 到 9 的数字，`.decimalPad` 还会额外显示小数点，但这并不能完全阻止用户输入其他内容。例如，如果用户使用外接物理键盘，他们可以输入任何字符；如果从其他地方复制文本，无论文本内容是什么，都可以粘贴到文本框中。不过没关系 —— 当用户点击回车键（Return）时，文本框会自动过滤掉无效值。



## 在表单中创建选择器（Picker）

*作者：Paul Hudson 2024 年 4 月 16 日*

SwiftUI 的选择器（Picker）具有多种用途，其具体外观取决于你使用的设备以及选择器所处的上下文环境。

在我们的项目中，有一个表单用于让用户输入账单金额，现在我们要为该表单添加一个选择器，以便用户选择共同分摊账单的人数。

与文本框（TextField）类似，选择器需要通过双向绑定（two-way binding）关联到一个属性，这样才能跟踪其值的变化。我们之前已经为此创建了一个 `@State` 属性，名为 `numberOfPeople`，接下来的工作就是遍历从 2 到 99 的所有数字，并将它们显示在选择器中。

修改表单中的第一个分区（Section），加入选择器，代码如下：

```swift
Section {
    TextField("金额", value: $checkAmount, format: .currency(code: Locale.current.currency?.identifier ?? "USD"))
        .keyboardType(.decimalPad)

    Picker("人数", selection: $numberOfPeople) {
        ForEach(2..<100) {
            Text("\($0) 人")
        }
    }
}
```

现在在模拟器中运行程序并尝试操作 —— 你发现了什么问题？

希望你能注意到以下几点：

1. 新增了一行内容，左侧显示 “人数”，右侧显示 “4 人”；
2. 行的右边缘有两个灰色箭头，这是 iOS 的设计风格，用于提示点击该行会显示选项菜单；
3. 该行显示 “4 人”，但我们给 `numberOfPeople` 属性设置的默认值明明是 2。

可以说这有点 “前进两步，后退两步” 的感觉 —— 虽然呈现出了不错的效果，但功能无法正常工作，显示的信息也不正确！

我们会同时解决这两个问题，先从简单的那个入手：为什么我们给 `numberOfPeople` 设置的默认值是 2，却显示 “4 人” 呢？其实，在创建选择器时，我们使用了这样的 `ForEach` 视图：

```swift
ForEach(2 ..< 100) {
```

这段代码会从 2 开始计数到 100（不包含 100），并创建对应的选项行。这意味着第 0 行（即第一个创建的行）显示的是 “2 人”，所以当我们给 `numberOfPeople` 赋值为 2 时，实际上是将其设置到了第 3 行，而第 3 行显示的正是 “4 人”。

因此，虽然这有点绕，但界面显示 “4 人” 而非 “2 人” 并不是一个 bug（漏洞）。

选择器有多种不同的样式，可根据你希望的交互方式进行选择。例如，之后我们会为小费比例选择器使用分段控件样式（segmented style），这种样式很适合选项数量不多的场景。

一种常用的选择器样式是 “导航链接样式”（navigation link），它会引导用户跳转到新页面来选择选项。要尝试这种样式，只需给选择器添加 `.pickerStyle(.navigationLink)` 修饰符，代码如下：

```swift
Picker("人数", selection: $numberOfPeople) {
    ForEach(2 ..< 100) {
        Text("\($0) 人")
    }
}
.pickerStyle(.navigationLink)
```

不过，这样设置后可能无法达到预期效果。此时你会看到行的右边缘有一个灰色的展开指示器，但整行会呈现灰色状态 —— 点击时不会有任何反应。

SwiftUI 真正想做的（这也是它在行的右边缘添加灰色展开指示器的原因）是显示一个包含选择器所有选项的新视图。

要实现这一点，我们需要添加一个导航栈（NavigationStack），它主要有两个作用：一是在顶部提供一块区域用于放置标题，二是允许 iOS 根据需要滑入新的视图。

因此，在表单（Form）的正前方添加 `NavigationStack {`，并在表单的闭合大括号之后再添加一个闭合大括号。如果设置正确，你的代码应该如下所示：

```swift
var body: some View {
    NavigationStack {
        Form {
            // 表单内部的所有内容
        }
    }
}
```

再次运行应用程序，你会发现点击 “人数” 行后，会滑入一个新页面，其中包含所有可供选择的人数选项。

你会看到 “4 人” 旁边有一个对勾标记，因为它是当前选中的值；你也可以点击其他数字进行选择 —— 选择后页面会自动滑回上一页，同时将用户的新选择带回到之前的界面中。

这里体现了 “声明式用户界面设计”（declarative user interface design）的重要性。这种设计理念意味着我们只需说明 “想要什么效果”，而无需指定 “具体该怎么做”。我们只说了想要一个包含若干选项的导航链接样式选择器，却不必额外编写 “创建所有选项的列表，并在当前选中项旁显示对勾” 这样的逻辑。

你更喜欢菜单样式的选择器，还是导航链接样式的选择器呢？这是你的应用 —— 选择权在你手中！我个人会选择默认的菜单样式，但你完全可以根据自己的偏好来决定。

在完成这一步之前，让我们给新的导航栏添加一个标题。为表单添加以下修饰符：

```swift
.navigationTitle("WeSplit")
```

**提示**：你可能会想把这个修饰符附加在 `NavigationStack` 的末尾，但实际上它需要附加在 `Form` 的末尾。原因是导航栈在程序运行过程中可以显示多个视图，因此将标题附加到 “导航栈内部的视图（即 Form）” 上，能让 iOS 自由地切换标题。



## 添加小费比例分段控制器

*作者：Paul Hudson 2023 年 10 月 8 日*

现在我们要给应用添加第二个选择器视图，但这次我们想要一个略有不同的样式：我们需要一个**分段控制器（segmented control）**。这是一种特殊类型的选择器，会以水平列表的形式展示少量选项，非常适合选项数量不多的场景。

我们的表单目前包含两个分区：一个用于输入账单金额和人数，另一个用于显示最终结果 —— 目前仅显示`checkAmount`（账单金额），不过我们很快就会修复这个问题。

我希望在这两个分区中间添加第三个分区，用于展示小费比例选项：

```swift
Section {
    Picker("Tip percentage", selection: $tipPercentage) {
        ForEach(tipPercentages, id: \.self) {
            Text($0, format: .percent)
        }
    }
}
```

这段代码会遍历`tipPercentages`数组中的所有选项，将每个选项转换为带有`.percent`（百分比）格式的文本视图。和之前的选择器一样，SwiftUI 会将其转换为列表中的一行，点击时会弹出选项菜单。

不过，这里我想向大家展示如何使用分段控制器来替代，因为它的视觉效果更好。因此，请给小费选择器添加以下修饰符：

```swift
.pickerStyle(.segmented)
```

该修饰符需要添加在选择器的闭合大括号末尾，完整代码如下：

```swift
Section {
    Picker("Tip percentage", selection: $tipPercentage) {
        ForEach(tipPercentages, id: \.self) {
            Text($0, format: .percent)
        }
    }
    .pickerStyle(.segmented)
}
```

现在运行程序，你会发现功能逐渐完善：用户可以输入账单金额、选择人数，还能选择要支付的小费比例 —— 效果还不错！

但事情并非完全如你所想。应用开发者常会遇到一个问题：我们想当然地认为应用会按照预期运行 —— 毕竟是我们设计它来解决特定问题的，所以自然清楚每个功能的含义。

不妨试着用全新的视角审视一下我们的用户界面：

- “Amount（金额）” 很容易理解 —— 用户可以在输入框中输入数字。
- “Number of people（人数）” 也相当直观。
- 底部的标签是用来显示总额的，目前可以先忽略。
- 但中间那个分区 —— 那些百分比是用来做什么的呢？

没错，**我们**知道这是用来选择小费比例的，但在屏幕上并没有明确体现。我们可以（也**应该**）做得更好。

一种方案是在分段控制器前面直接添加一个文本视图，代码如下：

```swift
Section {
    Text("How much tip do you want to leave?")

    Picker("Tip percentage", selection: $tipPercentage) {
        ForEach(tipPercentages, id: \.self) {
            Text($0, format: .percent)
        }
    }
    .pickerStyle(.segmented)
}
```

这种方式虽然可行，但视觉效果欠佳 —— 文本看起来像是一个独立的元素，而非分段控制器的标签。

更好的方案是修改分区本身：SwiftUI 允许我们在分区的头部和尾部添加视图，在这个场景下，我们可以用分区头部来添加一段简短的说明文字。实际上，我们可以直接使用刚才创建的文本，只是将其从分区内部的独立标签移到分区头部。

代码实现如下：

```swift
Section("How much tip do you want to leave?") {
    Picker("Tip percentage", selection: $tipPercentage) {
        ForEach(tipPercentages, id: \.self) {
            Text($0, format: .percent)
        }
    }
    .pickerStyle(.segmented)
}
```

代码改动很小，但最终效果会好很多 —— 这段文本现在看起来就像是正下方分段控制器的提示说明。



## 计算人均支付金额

*作者：Paul Hudson 2023 年 10 月 8 日*

到目前为止，表单的最后一个分区只显示了一个简单的文本视图，内容是用户输入的账单金额。现在，我们要实现这个项目的核心功能：让这个文本视图显示每个人需要支付的金额。

有多种方法可以实现这个功能，但最简单的方法恰好也是最**简洁**的 —— 即代码清晰易懂：我们将添加一个计算属性来计算人均金额。

这需要进行一些简单的数学运算：人均支付金额 =（账单金额 + 小费金额）÷ 人数。

但在开始计算之前，我们需要先获取三个关键值：人数、小费比例和账单金额。这听起来很简单，但正如你之前所见，`numberOfPeople`（人数存储值）比实际人数少 2—— 例如，当它存储 3 时，实际代表 5 人。

因此，我们将创建一个名为`totalPerPerson`的新计算属性，类型为`Double`，并首先处理输入数据：确定正确的人数和用户想要支付的小费金额。

首先，在`body`属性之前添加这个计算属性：

```swift
var totalPerPerson: Double {
    // 在此处计算人均金额
    return 0
}
```

目前这个属性返回 0 是为了避免代码报错，接下来我们会用实际的计算逻辑替换`// 在此处计算人均金额`这段注释。

接下来，我们可以通过读取`numberOfPeople`并加上 2 来得到实际人数。记住，`numberOfPeople`的取值范围对应实际人数 2 到 100，但它是从 0 开始计数的，所以需要加 2。

因此，将`// 在此处计算人均金额`替换为以下代码：

```swift
let peopleCount = Double(numberOfPeople + 2)
```

你会注意到我们将结果转换为`Double`类型，因为它需要与`checkAmount`（账单金额，通常为`Double`类型）一起进行运算。

出于同样的原因，我们还需要将小费比例转换为`Double`类型：

```swift
let tipSelection = Double(tipPercentage)
```

现在我们已经准备好了所有输入值，接下来可以进行数学计算了。这需要三个步骤：

1. 计算小费金额：用账单金额除以 100，再乘以小费比例（`tipSelection`）。
2. 计算账单总额：将小费金额加到账单金额上。
3. 计算人均金额：将账单总额除以人数（`peopleCount`）。

完成这些计算后，返回人均金额即可。

将属性中的`return 0`替换为以下代码：

```swift
let tipValue = checkAmount / 100 * tipSelection
let grandTotal = checkAmount + tipValue
let amountPerPerson = grandTotal / peopleCount

return amountPerPerson
```

如果你的操作正确，最终代码应该如下所示：

```swift
var totalPerPerson: Double {
    let peopleCount = Double(numberOfPeople + 2)
    let tipSelection = Double(tipPercentage)

    let tipValue = checkAmount / 100 * tipSelection
    let grandTotal = checkAmount + tipValue
    let amountPerPerson = grandTotal / peopleCount

    return amountPerPerson
}
```

现在`totalPerPerson`可以返回正确的人均金额了，我们可以修改表格的最后一个分区，让它显示正确的文本。

将以下代码：

```swift
Section {
    Text(checkAmount, format: .currency(code: Locale.current.currencyCode ?? "USD"))
}
```

替换为：

```swift
Section {
    Text(totalPerPerson, format: .currency(code: Locale.current.currency?.identifier ?? "USD"))
}
```

现在运行应用试试吧。你会发现，由于构成总额的所有值都用`@State`标记，修改其中任何一个值，都会自动重新计算总额。

希望你现在能亲身体会到 “SwiftUI 视图是其状态的函数” 这句话的含义 —— 当状态发生变化时，视图会自动更新以匹配新状态。



## 隐藏键盘

*作者：Paul Hudson 2023 年 10 月 8 日*

我们的项目已经接近尾声，但你可能已经发现一个小问题：当输入账单金额的键盘弹出后，它就再也不会消失了！

这是小数键盘和数字键盘的一个常见问题 —— 常规的字母键盘有 “返回” 键可以关闭键盘。不过，只需稍作处理就能解决这个问题：

1. 我们需要让 SwiftUI 能够判断账单金额输入框当前是否应该获得**焦点**（即是否接收用户的文本输入）。
2. 我们需要添加一个按钮，让用户可以主动取消焦点，从而关闭键盘。

要解决第一个问题，你需要了解第二个属性包装器：`@FocusState`。它与常规的`@State`属性类似，但专门用于处理 UI 中的输入焦点。

在`ContentView`中添加以下新属性：

```swift
@FocusState private var amountIsFocused: Bool
```

现在我们可以将这个属性与文本输入框关联起来：当文本输入框获得焦点时，`amountIsFocused`为`true`；否则为`false`。给`TextField`（文本输入框）添加以下修饰符：

```swift
.focused($amountIsFocused)
```

第一个问题就这样解决了：虽然屏幕上没有明显变化，但 SwiftUI 已经能够暗中追踪文本输入框是否处于焦点状态。

解决方案的第二部分是：当文本输入框处于活跃状态时，添加一个工具栏按钮。要实现这个功能，我们需要用到几个新的 SwiftUI 视图，所以最好的方式是先展示代码，再解释其作用。

在表单的现有`navigationTitle()`修饰符下方，添加以下新修饰符：

```swift
.toolbar {
    if amountIsFocused {
        Button("Done") {
            amountIsFocused = false
        }
    }
}
```

我们来逐步拆解这段代码：

1. `toolbar()`修饰符允许我们为视图指定工具栏项。这些工具栏项可能会显示在屏幕的不同位置 —— 例如顶部的导航栏、底部的专用工具栏区域等。
2. 条件判断`amountIsFocused`是否为`true`，因此只有当文本输入框处于活跃状态时，才会显示这个按钮。
3. 我们使用的`Button`视图会显示一段可点击的文本（这里是 “Done”）。同时，我们需要为按钮指定点击后的执行代码 —— 在这里，我们将`amountIsFocused`设为`false`，从而关闭键盘。

以后我们会更深入地学习这些视图，现在建议你运行程序并尝试使用这个功能 —— 体验会有很大提升！

这是这个项目的最后一步 —— 恭喜你，我们完成啦！