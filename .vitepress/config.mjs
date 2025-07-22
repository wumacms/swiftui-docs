import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SwiftUIX",
  description: "收集全网的SwiftUI学习资源，一站式资源导航",
  base: '/swiftui-docs/',
  vite: {
    server: {
      open: true
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // {
      //   text: '文档', items: [
      //     {
      //       text: '指南',
      //       link: '/guide/' // 指向 /guide/ 的入口页面
      //     },
      //     {
      //       text: 'API',
      //       link: '/api/' // 指向 /api/ 的入口页面
      //     }
      //   ]
      // },
      {
        text: '教程', items: [
          {
            text: 'SwiftUI 入门',
            link: '/base/'
          },
          {
            text: 'SwiftUI 视图',
            link: '/custom_views/'
          },
          {
            text: 'SwiftUI 核心',
            link: '/core/'
          },
          {
            text: 'SwiftUI 网络',
            link: '/network/'
          },
          {
            text: 'SwiftUI 动效',
            link: '/geometry/'
          },
          {
            text: 'SwiftUI 重构',
            link: '/refactor/'
          },
          {
            text: 'SwiftUI 动画',
            link: '/animation/'
          },
          {
            text: 'SwiftUI 内购',
            link: '/purchase/'
          },
          {
            text: 'SwiftUI 思想',
            link: '/thinking/'
          },
          {
            text: 'SwiftUI 网格',
            link: '/grid/'
          },
          {
            text: 'SwiftUI 高阶',
            link: '/advanced/'
          },
          {
            text: 'SwiftUI 生命周期',
            link: '/lifecycle/'
          },
        ]
      }
    ],

    sidebar: {
      // '/guide/': [
      //   { text: '开始使用', link: '/guide/' },
      //   { text: '安装指南', link: '/guide/install' }
      // ],
      // '/api/': [
      //   { text: 'API 总览', link: '/api/' },
      //   { text: '配置项', link: '/api/config' }
      // ],
      '/base/': [
        {
          text: '第1章 开发环境与项目创建',
          collapsed: false,
          items: [
            { text: '1.1 安装 Xcode 15', link: '/base/1.1_安装Xcode_15' },
            { text: '1.2 创建第一个 SwiftUI 项目', link: '/base/1.2_创建第一个SwiftUI项目' },
            { text: '1.3 理解项目文件结构', link: '/base/1.3_理解项目文件结构' },
            { text: '1.4 认识 Xcode 预览画布 (Canvas)', link: '/base/1.4_认识Xcode预览画布(Canvas)' }
          ]
        },
        {
          text: '第2章 SwiftUI 基础视图',
          collapsed: false,
          items: [
            { text: '2.1 什么是视图 (View)', link: '/base/2.1_什么是视图(View)' },
            { text: '2.2 使用文本视图 (Text)', link: '/base/2.2_使用文本视图(Text)' },
            { text: '2.3 使用图像视图 (Image)', link: '/base/2.3_使用图像视图(Image)' },
            { text: '2.4 应用修饰符 (Modifiers)', link: '/base/2.4_应用修饰符(Modifiers)改变外观' },
            { text: '2.5 修饰符调用顺序的影响', link: '/base/2.5_链式调用修饰符的顺序影响' }
          ]
        },
        {
          text: '第3章 布局容器',
          collapsed: false,
          items: [
            { text: '3.1 垂直布局容器 VStack', link: '/base/3.1_垂直布局容器(VStack)' },
            { text: '3.2 水平布局容器 HStack', link: '/base/3.2_水平布局容器(HStack)' },
            { text: '3.3 层叠布局容器 ZStack', link: '/base/3.3_层叠布局容器(ZStack)' },
            { text: '3.4 使用 Spacer 和 Divider 进行空间调整', link: '/base/3.4_使用Spacer和Divider进行空间调整' }
          ]
        },
        {
          text: '第4章 基础状态管理',
          collapsed: false,
          items: [
            { text: '4.1 使用 @State 管理简单值类型', link: '/base/4.1_使用@State管理简单值类型' },
            { text: '4.2 通过 $ 符号创建双向绑定', link: '/base/4.2_通过$符号创建双向绑定(Binding)' },
            { text: '4.3 理解视图生命周期与状态更新', link: '/base/4.3_了解视图的生命周期与状态更新' }
          ]
        },
        {
          text: '第5章 绑定外部对象',
          collapsed: false,
          items: [
            { text: '5.1 使用 @ObservedObject 监听外部对象', link: '/base/5.1_使用@ObservedObject监听外部对象' },
            { text: '5.2 使用 @StateObject 确保对象生命周期', link: '/base/5.2_使用@StateObject确保对象生命周期' },
            { text: '5.3 定义 ObservableObject 类', link: '/base/5.3_定义符合ObservableObject协议的类' },
            { text: '5.4 使用 @Published 发布属性变更', link: '/base/5.4_使用@Published发布属性变更' }
          ]
        },
        {
          text: '第6章 环境对象与系统环境值',
          collapsed: false,
          items: [
            { text: '6.1 使用 @EnvironmentObject 共享数据', link: '/base/6.1_使用@EnvironmentObject在全局共享数据' },
            { text: '6.2 在视图层级中注入环境对象', link: '/base/6.2_在视图层级中注入环境对象' },
            { text: '6.3 读取系统环境值 (@Environment)', link: '/base/6.3_读取系统环境值(@Environment)' }
          ]
        },
        {
          text: '第7章 常见交互组件',
          collapsed: false,
          items: [
            { text: '7.1 创建按钮 (Button)', link: '/base/7.1_创建按钮(Button)' },
            { text: '7.2 使用文本输入框 (TextField)', link: '/base/7.2_使用文本输入框(TextField)' },
            { text: '7.3 安全文本输入框 (SecureField)', link: '/base/7.3_安全文本输入框(SecureField)' },
            { text: '7.4 使用开关 (Toggle)', link: '/base/7.4_使用开关(Toggle)' },
            { text: '7.5 创建滑块 (Slider)', link: '/base/7.5_创建滑块(Slider)' },
            { text: '7.6 使用步进器 (Stepper)', link: '/base/7.6_使用步进器(Stepper)' },
            { text: '7.7 选择器 (Picker)', link: '/base/7.7_选择器(Picker)的用法' }
          ]
        },
        {
          text: '第8章 列表与导航视图',
          collapsed: false,
          items: [
            { text: '8.1 创建静态列表 (List)', link: '/base/8.1_创建静态列表(List)' },
            { text: '8.2 动态数据列表 (List 与 ForEach)', link: '/base/8.2_创建动态数据列表(List与ForEach)' },
            { text: '8.3 实现列表项选择与操作', link: '/base/8.3_实现列表项选择与操作' },
            { text: '8.4 使用 NavigationStack 进行导航', link: '/base/8.4_使用NavigationStack进行导航' },
            { text: '8.5 通过 NavigationLink 跳转页面', link: '/base/8.5_通过NavigationLink跳转页面' },
            { text: '8.6 自定义导航栏标题与按钮', link: '/base/8.6_自定义导航栏标题与按钮' }
          ]
        },
        {
          text: '第9章 高阶视图与控件组合',
          collapsed: false,
          items: [
            { text: '9.1 创建可滚动视图 (ScrollView)', link: '/base/9.1_创建可滚动视图(ScrollView)' },
            { text: '9.2 使用网格布局 (Grid)', link: '/base/9.2_使用网格布局(Grid)' },
            { text: '9.3 表单构建 (Form)', link: '/base/9.3_表单的构建(Form)' },
            { text: '9.4 分组框与控制组', link: '/base/9.4_分组框(GroupBox)与控制组(ControlGroup)' },
            { text: '9.5 标签视图 (TabView)', link: '/base/9.5_标签视图(TabView)实现多标签页' }
          ]
        },
        {
          text: '第10章 新特性与动画效果',
          collapsed: false,
          items: [
            { text: '10.1 探索 SwiftData 框架', link: '/base/10.1_探索SwiftData数据持久化框架' },
            { text: '10.2 使用 #Preview 宏', link: '/base/10.2_使用Preview宏进行预览' },
            { text: '10.3 滚动动画与过渡效果', link: '/base/10.3_滚动动画与过渡效果(scrollTransition)' },
            { text: '10.4 视图动画的相位控制', link: '/base/10.4_视图动画的相位(phaseAnimator)' }
          ]
        },
        {
          text: '第11章 动画与手势',
          collapsed: false,
          items: [
            { text: '11.1 隐式动画 .animation', link: '/base/11.1_隐式动画(.animation)' },
            { text: '11.2 显式动画 withAnimation', link: '/base/11.2_显式动画(withAnimation)' },
            { text: '11.3 自定义过渡效果 .transition', link: '/base/11.3_自定义过渡效果(.transition)' },
            { text: '11.4 手势识别 (Tap、LongPress、Drag)', link: '/base/11.4_手势识别(Tap, LongPress, Drag)' }
          ]
        },
        {
          text: '第12章 SwiftData 数据模型',
          collapsed: false,
          items: [
            { text: '12.1 定义数据模型 (@Model)', link: '/base/12.1_定义数据模型(@Model)' },
            { text: '12.2 设置模型容器 modelContainer', link: '/base/12.2_设置模型容器(modelContainer)' },
            { text: '12.3 使用 @Query 获取数据', link: '/base/12.3_使用@Query获取数据' },
            { text: '12.4 插入、更新和删除数据', link: '/base/12.4_插入、更新和删除数据' }
          ]
        },
        {
          text: '第13章 提高组件复用性',
          collapsed: false,
          items: [
            { text: '13.1 抽取子视图以简化代码', link: '/base/13.1_抽取子视图以简化代码' },
            { text: '13.2 创建自定义修饰符 (ViewModifier)', link: '/base/13.2_创建自定义修饰符(ViewModifier)' },
            { text: '13.3 定义自定义视图样式 (Style)', link: '/base/13.3_定义自定义视图样式(Style)' }
          ]
        }
      ],
      '/custom_views/': [
        {
          text: '第1章 自定义视图基础',
          collapsed: false,
          items: [
            { text: '1.1 什么是自定义视图', link: '/custom_views/1.1_什么是自定义视图' },
            { text: '1.2 为何需要自定义视图', link: '/custom_views/1.2_为何需要自定义视图' },
            { text: '1.3 View协议的核心要求', link: '/custom_views/1.3_View协议的核心要求' },
            { text: '1.4 组合与封装原则', link: '/custom_views/1.4_组合与封装原则' }
          ]
        },
        {
          text: '第2章 SwiftUI 项目初始化',
          collapsed: false,
          items: [
            { text: '2.1 创建新的 SwiftUI 项目', link: '/custom_views/2.1_创建新的SwiftUI项目' },
            { text: '2.2 组织文件的目录结构', link: '/custom_views/2.2_组织文件的目录结构' },
            { text: '2.3 创建专门的组件预览文件', link: '/custom_views/2.3_创建专门的组件预览文件' },
            { text: '2.4 配置预览提供器 (PreviewProvider)', link: '/custom_views/2.4_配置预览提供器(PreviewProvider)' }
          ]
        },
        {
          text: '第3章 自定义按钮组件',
          collapsed: false,
          items: [
            { text: '3.1 创建基本按钮结构', link: '/custom_views/3.1_创建基本按钮结构' },
            { text: '3.2 定义按钮的初始化参数', link: '/custom_views/3.2_定义按钮的初始化参数' },
            { text: '3.3 处理按钮的点击动作', link: '/custom_views/3.3_处理按钮的点击动作' },
            { text: '3.4 为按钮添加自定义样式', link: '/custom_views/3.4_为按钮添加自定义样式' }
          ]
        },
        {
          text: '第4章 输入框组件封装',
          collapsed: false,
          items: [
            { text: '4.1 封装 TextField 并添加标签', link: '/custom_views/4.1_封装TextField并添加标签' },
            { text: '4.2 实现输入验证逻辑', link: '/custom_views/4.2_实现输入验证逻辑' },
            { text: '4.3 自定义边框和背景样式', link: '/custom_views/4.3_自定义边框和背景样式' },
            { text: '4.4 处理焦点状态变化', link: '/custom_views/4.4_处理焦点状态变化' }
          ]
        },
        {
          text: '第5章 图像视图开发',
          collapsed: false,
          items: [
            { text: '5.1 创建可配置的图像组件', link: '/custom_views/5.1_创建可配置的图像组件' },
            { text: '5.2 支持网络图片加载与占位符', link: '/custom_views/5.2_支持网络图片加载与占位符' },
            { text: '5.3 添加图像滤镜和效果', link: '/custom_views/5.3_添加图像滤镜和效果' },
            { text: '5.4 实现图像的裁剪与缩放', link: '/custom_views/5.4_实现图像的裁剪与缩放' }
          ]
        },
        {
          text: '第6章 加载动画设计',
          collapsed: false,
          items: [
            { text: '6.1 创建圆形加载动画', link: '/custom_views/6.1_创建圆形加载动画' },
            { text: '6.2 创建条形加载进度条', link: '/custom_views/6.2_创建条形加载进度条' },
            { text: '6.3 控制动画的开始与停止', link: '/custom_views/6.3_控制动画的开始与停止' },
            { text: '6.4 允许自定义颜色和尺寸', link: '/custom_views/6.4_允许自定义颜色和尺寸' }
          ]
        },
        {
          text: '第7章 卡片组件构建',
          collapsed: false,
          items: [
            { text: '7.1 组合图像、标题和描述文本', link: '/custom_views/7.1_组合图像、标题和描述文本' },
            { text: '7.2 设计卡片的布局结构', link: '/custom_views/7.2_设计卡片的布局结构' },
            { text: '7.3 添加阴影和圆角效果', link: '/custom_views/7.3_添加阴影和圆角效果' },
            { text: '7.4 处理卡片点击事件', link: '/custom_views/7.4_处理卡片点击事件' }
          ]
        },
        {
          text: '第8章 头像组件实现',
          collapsed: false,
          items: [
            { text: '8.1 结合图像和在线状态指示器', link: '/custom_views/8.1_结合图像和在线状态指示器' },
            { text: '8.2 处理不同尺寸的头像显示', link: '/custom_views/8.2_处理不同尺寸的头像显示' },
            { text: '8.3 实现占位符或默认头像', link: '/custom_views/8.3_实现占位符或默认头像' },
            { text: '8.4 添加点击交互预览大图', link: '/custom_views/8.4_添加点击交互预览大图' }
          ]
        },
        {
          text: '第9章 表单行与输入控件',
          collapsed: false,
          items: [
            { text: '9.1 设计包含标签和输入控件的行', link: '/custom_views/9.1_设计包含标签和输入控件的行' },
            { text: '9.2 支持不同类型的输入控件', link: '/custom_views/9.2_支持不同类型的输入控件' },
            { text: '9.3 添加错误信息显示区域', link: '/custom_views/9.3_添加错误信息显示区域' },
            { text: '9.4 统一表单行的样式', link: '/custom_views/9.4_统一表单行的样式' }
          ]
        },
        {
          text: '第10章 自定义 ViewModifier',
          collapsed: false,
          items: [
            { text: '10.1 创建自定义 ViewModifier 协议实现', link: '/custom_views/10.1_创建自定义ViewModifier协议实现' },
            { text: '10.2 封装通用样式（如卡片样式）', link: '/custom_views/10.2_封装通用样式(如卡片样式)' },
            { text: '10.3 通过 View 扩展简化修饰符调用', link: '/custom_views/10.3_通过View扩展简化修饰符调用' },
            { text: '10.4 链式调用多个自定义修饰符', link: '/custom_views/10.4_链式调用多个自定义修饰符' }
          ]
        },
        {
          text: '第11章 环境值与数据传递',
          collapsed: false,
          items: [
            { text: '11.1 使用 EnvironmentValues 传递全局配置', link: '/custom_views/11.1_使用EnvironmentValues传递全局配置' },
            { text: '11.2 定义自定义 EnvironmentKey', link: '/custom_views/11.2_定义自定义EnvironmentKey' },
            { text: '11.3 使用 PreferenceKey 向上传递数据', link: '/custom_views/11.3_使用PreferenceKey从子视图向父视图传递数据' },
            { text: '11.4 实现主题切换功能', link: '/custom_views/11.4_实现主题切换功能' }
          ]
        },
        {
          text: '第12章 泛型与多视图组件',
          collapsed: false,
          items: [
            { text: '12.1 使用泛型创建灵活的容器视图', link: '/custom_views/12.1_使用泛型创建灵活的容器视图' },
            { text: '12.2 利用 @ViewBuilder 构建多个子视图组件', link: '/custom_views/12.2_利用@ViewBuilder构建可接受多个子视图的组件' },
            { text: '12.3 泛型约束在组件中的应用', link: '/custom_views/12.3_泛型约束在组件中的应用' },
            { text: '12.4 创建自定义容器组件（如 CustomVStack）', link: '/custom_views/12.4_创建一个自定义的容器组件(如CustomVStack)' }
          ]
        },
        {
          text: '第13章 几何布局与尺寸读取',
          collapsed: false,
          items: [
            { text: '13.1 使用 GeometryReader 获取父视图尺寸', link: '/custom_views/13.1_使用GeometryReader获取父视图尺寸' },
            { text: '13.2 实现自适应布局组件', link: '/custom_views/13.2_实现自适应布局的组件' },
            { text: '13.3 读取视图的坐标和位置', link: '/custom_views/13.3_读取视图的坐标和位置' },
            { text: '13.4 避免 GeometryReader 的陷阱', link: '/custom_views/13.4_避免GeometryReader的常见陷阱' }
          ]
        },
        {
          text: '第14章 Swift 包管理',
          collapsed: false,
          items: [
            { text: '14.1 初始化 Swift 包项目', link: '/custom_views/14.1_初始化Swift包项目' },
            { text: '14.2 配置 Package.swift 文件', link: '/custom_views/14.2_配置Package.swift文件' },
            { text: '14.3 定义库和目标（Library & Target）', link: '/custom_views/14.3_定义库和目标(Library_&_Target)' },
            { text: '14.4 将组件代码移入包中', link: '/custom_views/14.4_将组件代码移入包中' }
          ]
        },
        {
          text: '第15章 文档与测试',
          collapsed: false,
          items: [
            { text: '15.1 为公共 API 编写文档注释', link: '/custom_views/15.1_为公共API编写文档注释' },
            { text: '15.2 创建组件的使用示例', link: '/custom_views/15.2_创建组件的使用示例' },
            { text: '15.3 编写单元测试验证组件逻辑', link: '/custom_views/15.3_编写单元测试验证组件逻辑' },
            { text: '15.4 编写 UI 测试确保视图表现', link: '/custom_views/15.4_编写UI测试确保视图表现' }
          ]
        },
        {
          text: '第16章 发布与集成',
          collapsed: false,
          items: [
            { text: '16.1 将代码推送到 GitHub', link: '/custom_views/16.1_将代码推送到GitHub' },
            { text: '16.2 创建版本标签（Tagging Versions）', link: '/custom_views/16.2_创建版本标签(Tagging_Versions)' },
            { text: '16.3 在 Xcode 中添加 Swift 包依赖', link: '/custom_views/16.3_在Xcode中添加Swift包依赖' },
            { text: '16.4 更新和维护组件库', link: '/custom_views/16.4_更新和维护组件库' }
          ]
        }
      ],
      '/core/': [
        {
          text: "第1章 视图与布局系统",
          collapsible: true,
          items: [
            { text: "1.1 声明式语法入门", link: "/core/1.1_声明式语法入门" },
            { text: "1.2 构建基本视图", link: "/core/1.2_构建基本视图：Text, Image, Shape" },
            { text: "1.3 使用Stack组合视图", link: "/core/1.3_使用 VStack, HStack, ZStack 组合视图" },
            { text: "1.4 Spacer与Divider", link: "/core/1.4_掌握 Spacer 与 Divider" },
            { text: "1.5 布局微调技术", link: "/core/1.5_使用 Padding, Frame, Offset 进行微调" },
            { text: "1.6 对齐与分布", link: "/core/1.6_对齐与分布指南" },
            { text: "1.7 安全区域处理", link: "/core/1.7_安全区域与边缘忽略" }
          ]
        },
        {
          text: "第2章 控件与用户交互",
          collapsible: true,
          items: [
            { text: "2.1 Button的使用", link: "/core/2.1_按钮 Button 的使用与自定义" },
            { text: "2.2 文本输入控件", link: "/core/2.2_文本输入：TextField 与 TextEditor" },
            { text: "2.3 Toggle与Slider", link: "/core/2.3_开关 Toggle 与滑块 Slider" },
            { text: "2.4 Picker样式", link: "/core/2.4_选择器 Picker 的不同样式" },
            { text: "2.5 Stepper与DatePicker", link: "/core/2.5_步进器 Stepper 与日期选择器 DatePicker" },
            { text: "2.6 手势识别", link: "/core/2.6_手势识别：Tap, LongPress, Drag" }
          ]
        },
        {
          text: "第3章 视图内部状态",
          collapsible: true,
          items: [
            { text: "3.1 @State管理状态", link: "/core/3.1_使用 @State 管理简单值类型" },
            { text: "3.2 @Binding双向绑定", link: "/core/3.2_使用 @Binding 创建双向绑定" },
            { text: "3.3 视图身份与生命周期", link: "/core/3.3_理解视图的身份与生命周期" }
          ]
        },
        {
          text: "第4章 跨视图数据共享",
          collapsible: true,
          items: [
            { text: "4.1 @StateObject管理对象", link: "/core/4.1_使用 @StateObject 管理引用类型生命周期" },
            { text: "4.2 @ObservedObject订阅", link: "/core/4.2_使用 @ObservedObject 订阅外部对象" },
            { text: "4.3 @EnvironmentObject全局共享", link: "/core/4.3_使用 @EnvironmentObject 进行全局数据传递" },
            { text: "4.4 @Published属性包装器", link: "/core/4.4_理解 @Published 属性包装器" }
          ]
        },
        {
          text: "第5章 环境与偏好设置",
          collapsible: true,
          items: [
            { text: "5.1 读取@Environment", link: "/core/5.1_读取环境值 @Environment" },
            { text: "5.2 自定义环境键", link: "/core/5.2_自定义环境键 EnvironmentKey" },
            { text: "5.3 PreferenceKey使用", link: "/core/5.3_使用 PreferenceKey 从子视图向上传递数据" },
            { text: "5.4 AnchorPreferences对齐", link: "/core/5.4_使用 AnchorPreferences 进行几何对齐" }
          ]
        },
        {
          text: "第6章 构建动态列表",
          collapsible: true,
          items: [
            { text: "6.1 List基本用法", link: "/core/6.1_List 的基本用法与数据源" },
            { text: "6.2 ForEach与Identifiable", link: "/core/6.2_ForEach 的使用与 Identifiable 协议" },
            { text: "6.3 自定义列表行", link: "/core/6.3_自定义列表行视图" },
            { text: "6.4 列表编辑模式", link: "/core/6.4_实现列表的编辑模式：移动与删除" },
            { text: "6.5 分组列表与大纲", link: "/core/6.5_分组列表 Section 与大纲视图 OutlineGroup" }
          ]
        },
        {
          text: "第7章 导航与视图呈现",
          collapsible: true,
          items: [
            { text: "7.1 NavigationStack使用", link: "/core/7.1_NavigationStack 与 NavigationLink" },
            { text: "7.2 编程式导航", link: "/core/7.2_导航路径与编程式导航" },
            { text: "7.3 导航栏定制", link: "/core/7.3_导航栏标题与按钮定制" },
            { text: "7.4 模态呈现", link: "/core/7.4_模态呈现：Sheet 与 FullScreenCover" },
            { text: "7.5 警报与确认对话框", link: "/core/7.5_警报 Alert 与确认对话框 confirmationDialog" }
          ]
        },
        {
          text: "第8章 高级布局技术",
          collapsible: true,
          items: [
            { text: "8.1 ScrollView使用", link: "/core/8.1_滚动视图 ScrollView 与 ScrollViewReader" },
            { text: "8.2 GeometryReader", link: "/core/8.2_几何读取器 GeometryReader" },
            { text: "8.3 自定义布局容器", link: "/core/8.3_自定义布局容器 Layout 协议" },
            { text: "8.4 网格布局", link: "/core/8.4_网格布局：LazyVGrid 与 LazyHGrid" },
            { text: "8.5 视图坐标转换", link: "/core/8.5_视图坐标空间转换" }
          ]
        },
        {
          text: "第9章 自定义视图修饰符",
          collapsible: true,
          items: [
            { text: "9.1 封装通用样式", link: "/core/9.1_封装通用样式" },
            { text: "9.2 创建ViewModifier", link: "/core/9.2_创建自定义 ViewModifier 协议实现" },
            { text: "9.3 链式调用原理", link: "/core/9.3_链式调用修饰符的原理" }
          ]
        },
        {
          text: "第10章 动画基础",
          collapsible: true,
          items: [
            { text: "10.1 隐式动画", link: "/core/10.1_隐式动画 .animation() 修饰符" },
            { text: "10.2 显式动画", link: "/core/10.2_显式动画 withAnimation 代码块" },
            { text: "10.3 动画曲线控制", link: "/core/10.3_控制动画曲线与延迟" },
            { text: "10.4 视图匹配动画", link: "/core/10.4_使用 .matchedGeometryEffect 实现视图匹配动画" }
          ]
        },
        {
          text: "第11章 高级动画与转场",
          collapsible: true,
          items: [
            { text: "11.1 视图转场", link: "/core/11.1_视图转场 .transition() 修饰符" },
            { text: "11.2 自定义转场", link: "/core/11.2_创建自定义 AnyTransition" },
            { text: "11.3 Animatable协议", link: "/core/11.3_Animatable 协议与矢量动画" },
            { text: "11.4 TimelineView应用", link: "/core/11.4_TimelineView 与 Canvas 的应用" }
          ]
        },
        {
          text: "第12章 在SwiftUI中使用UIKit/AppKit",
          collapsible: true,
          items: [
            { text: "12.1 UIViewRepresentable", link: "/core/12.1_使用 UIViewRepresentable 封装 UIKit 视图" },
            { text: "12.2 UIViewControllerRepresentable", link: "/core/12.2_使用 UIViewControllerRepresentable 封装视图控制器" },
            { text: "12.3 协调器处理", link: "/core/12.3_处理协调器 Coordinator" }
          ]
        },
        {
          text: "第13章 在UIKit/AppKit中使用SwiftUI",
          collapsible: true,
          items: [
            { text: "13.1 UIHostingController", link: "/core/13.1_使用 UIHostingController 嵌入 SwiftUI 视图" },
            { text: "13.2 在UITableViewCell中使用", link: "/core/13.2_在 UITableViewCell 中嵌入 SwiftUI 视图" },
            { text: "13.3 尺寸与更新管理", link: "/core/13.3_管理 SwiftUI 视图的尺寸与更新" }
          ]
        },
        {
          text: "第14章 异步操作与数据获取",
          collapsible: true,
          items: [
            { text: "14.1 async-await使用", link: "/core/14.1_在 SwiftUI 中使用 async-await" },
            { text: "14.2 task修饰符", link: "/core/14.2_任务修饰符 .task()" },
            { text: "14.3 下拉刷新", link: "/core/14.3_下拉刷新 .refreshable()" },
            { text: "14.4 加载与错误处理", link: "/core/14.4_处理加载与错误状态" }
          ]
        },
        {
          text: "第15章 性能优化技巧",
          collapsible: true,
          items: [
            { text: "15.1 视图更新分析", link: "/core/15.1_分析视图更新的原因" },
            { text: "15.2 EquatableView", link: "/core/15.2_使用 EquatableView 减少不必要的刷新" },
            { text: "15.3 懒加载视图", link: "/core/15.3_懒加载视图 Lazy Stacks" },
            { text: "15.4 性能分析工具", link: "/core/15.4_Instruments SwiftUI 性能分析工具" }
          ]
        },
        {
          text: "第16章 可访问性与本地化",
          collapsible: true,
          items: [
            { text: "16.1 可访问性标签", link: "/core/16.1_为视图添加可访问性标签与提示" },
            { text: "16.2 动态类型支持", link: "/core/16.2_支持动态类型 (Dynamic Type)" },
            { text: "16.3 字符串本地化", link: "/core/16.3_实现字符串本地化" },
            { text: "16.4 RTL布局处理", link: "/core/16.4_处理从右到左 (RTL) 布局" }
          ]
        }
      ],
      '/network/': [
        {
          text: '第1章 理解网络请求核心概念',
          items: [
            { text: 'HTTP/HTTPS协议基础', link: '/network/1.1_HTTP、HTTPS协议基础' },
            { text: '理解RESTful API', link: '/network/1.2_理解RESTful API' },
            { text: 'JSON数据格式解析', link: '/network/1.3_JSON数据格式解析' },
            { text: 'HTTP请求方法', link: '/network/1.4_HTTP请求方法' },
            { text: '状态码的意义', link: '/network/1.5_状态码的意义' },
          ]
        },
        {
          text: '第2章 使用URLSession发起请求',
          items: [
            { text: '创建URL对象', link: '/network/2.1_创建URL对象' },
            { text: '配置URLRequest', link: '/network/2.2_配置URLRequest' },
            { text: '使用dataTask发送GET请求', link: '/network/2.3_使用dataTask发送GET请求' },
            { text: '处理URLSession的回调', link: '/network/2.4_处理URLSession的回调' },
            { text: '将接收到的Data转换为可用类型', link: '/network/2.5_将接收到的Data转换为可用类型' },
          ]
        },
        {
          text: '第3章 处理POST请求与请求体',
          items: [
            { text: '设置HTTP方法为POST', link: '/network/3.1_设置HTTP方法为POST' },
            { text: '构建JSON请求体 (body)', link: '/network/3.2_构建JSON请求体' },
            { text: '使用JSONEncoder编码数据', link: '/network/3.3_使用JSONEncoder编码数据' },
            { text: '设置HTTP请求头', link: '/network/3.4_设置HTTP请求头' },
            { text: '发送并处理POST请求的响应', link: '/network/3.5_发送并处理POST请求的响应' },
          ]
        },
        {
          text: '第4章 数据模型与解码 (Codable)',
          items: [
            { text: '定义符合Decodable协议的数据结构', link: '/network/4.1_定义符合Decodable协议的数据结构' },
            { text: '使用JSONDecoder解码JSON数据', link: '/network/4.2_使用JSONDecoder解码JSON数据' },
            { text: '处理嵌套JSON对象', link: '/network/4.3_处理嵌套JSON对象' },
            { text: '处理JSON数组', link: '/network/4.4_处理JSON数组' },
            { text: '自定义解码策略', link: '/network/4.5_自定义解码策略' },
          ]
        },
        {
          text: '第5章 状态管理与数据流',
          items: [
            { text: '使用@State管理简单的视图状态', link: '/network/5.1_使用@State管理简单的视图状态' },
            { text: '创建遵循ObservableObject协议的ViewModel', link: '/network/5.2_创建遵循ObservableObject协议的ViewModel' },
            { text: '使用@Published发布数据变更', link: '/network/5.3_使用@Published发布数据变更' },
            { text: '在视图中使用@StateObject或@ObservedObject订阅ViewModel', link: '/network/5.4_在视图中使用@StateObject或@ObservedObject订阅ViewModel' },
            { text: '将网络数据显示在SwiftUI视图上', link: '/network/5.5_将网络数据显示在SwiftUI视图上' },
          ]
        },
        {
          text: '第6章 异步操作与主线程更新',
          items: [
            { text: '理解并发与主线程安全', link: '/network/6.1_理解并发与主线程安全' },
            { text: '使用DispatchQueue.main.async更新UI', link: '/network/6.2_使用DispatchQueue.main.async更新UI' },
            { text: '在ViewModel中封装异步网络调用', link: '/network/6.3_在ViewModel中封装异步网络调用' },
            { text: '显示加载中(Loading)状态', link: '/network/6.4_显示加载中(Loading)状态' },
            { text: '处理并显示网络错误信息', link: '/network/6.5_处理并显示网络错误信息' },
          ]
        },
        {
          text: '第7章 使用Async/Await简化异步代码',
          items: [
            { text: '将传统闭包回调重构为async函数', link: '/network/7.1_将传统闭包回调重构为async函数' },
            { text: '使用await调用异步函数', link: '/network/7.2_使用await调用异步函数' },
            { text: 'URLSession对async/await的支持', link: '/network/7.3_URLSession对async、await的支持' },
            { text: '创建异步网络请求函数', link: '/network/7.4_创建异步网络请求函数' },
          ]
        },
        {
          text: '第8章 SwiftUI与Async/Await集成',
          items: [
            { text: '在.task视图修饰符中调用异步函数', link: '/network/8.1_在.task视图修饰符中调用异步函数' },
            { text: '处理异步任务的生命周期', link: '/network/8.2_处理异步任务的生命周期' },
            { text: '在ViewModel中使用async/await获取数据', link: '/network/8.3_在ViewModel中使用async、await获取数据' },
            { text: '结构化并发：使用TaskGroup', link: '/network/8.4_结构化并发：使用TaskGroup' },
            { text: '任务取消(Task Cancellation)的处理', link: '/network/8.5_任务取消(Task Cancellation)的处理' },
          ]
        },
        {
          text: '第9章 错误处理',
          items: [
            { text: '使用do-catch语句处理throws函数', link: '/network/9.1_使用do-catch语句处理throws函数' },
            { text: '定义自定义错误类型', link: '/network/9.2_定义自定义错误类型' },
            { text: '从网络层向上传递错误', link: '/network/9.3_从网络层向上传递错误' },
            { text: '在UI层优雅地展示错误信息', link: '/network/9.4_在UI层优雅地展示错误信息' },
          ]
        },
        {
          text: '第10章 网络层抽象与设计',
          items: [
            { text: '创建通用的APIService层', link: '/network/10.1_创建通用的APIService层' },
            { text: '使用泛型构建可重用的请求函数', link: '/network/10.2_使用泛型构建可重用的请求函数' },
            { text: '定义API端点 (Endpoints)', link: '/network/10.3_定义API端点_(Endpoints)' },
            { text: '依赖注入(Dependency Injection)网络服务', link: '/network/10.4_依赖注入(Dependency_Injection)网络服务' },
            { text: '编写单元测试与模拟网络请求', link: '/network/10.5_编写单元测试与模拟网络请求' },
          ]
        },
        {
          text: '第11章 处理复杂网络场景',
          items: [
            { text: '处理认证与令牌 (Token)', link: '/network/11.1_处理认证与令牌(Token)' },
            { text: '刷新令牌 (Refresh Token) 机制', link: '/network/11.2_刷新令牌(Refresh_Token)机制' },
            { text: '实现请求重试逻辑', link: '/network/11.3_实现请求重试逻辑' },
            { text: '文件上传与下载', link: '/network/11.4_文件上传与下载' },
            { text: '配置URLSessionConfiguration', link: '/network/11.5_配置URLSessionConfiguration' },
          ]
        },
        {
          text: '第12章 第三方库与性能优化',
          items: [
            { text: 'Alamofire库简介与集成', link: '/network/12.1_Alamofire库简介与集成' },
            { text: '使用Alamofire简化请求', link: '/network/12.2_使用Alamofire简化请求' },
            { text: '缓存策略：实现客户端缓存', link: '/network/12.3_缓存策略：实现客户端缓存' },
            { text: '图像的异步加载与缓存', link: '/network/12.4_图像的异步加载与缓存' },
            { text: '使用Combine处理复杂数据流', link: '/network/12.5_使用Combine处理复杂数据流' },
          ]
        },
      ],
      '/geometry/': [
        {
          text: '第1章 理解 matchedGeometryEffect 的基本原理',
          items: [
            { text: '什么是matchedGeometryEffect？', link: '/geometry/1.1_什么是matchedGeometryEffect？' },
            { text: '核心参数', link: '/geometry/1.2_核心参数' },
            { text: 'Namespace的作用与创建', link: '/geometry/1.3_Namespace的作用与创建' },
            { text: '使用@Namespace创建动画命名空间', link: '/geometry/1.4_使用@Namespace创建动画命名空间' },
            { text: 'id参数：标识视图的唯一性', link: '/geometry/1.5_id参数：标识视图的唯一性' },
          ]
        },
        {
          text: '第2章 实现简单的视图过渡动画',
          items: [
            { text: '在两个独立视图之间创建过渡', link: '/geometry/2.1_在两个独立视图之间创建过渡' },
            { text: '使用@State切换视图状态以触发动画', link: '/geometry/2.2_使用@State切换视图状态以触发动画' },
            { text: '同步源视图与目标视图的几何属性', link: '/geometry/2.3_同步源视图与目标视图的几何属性' },
            { text: '基础示例：按钮选择指示器动画', link: '/geometry/2.4_基础示例：按钮选择指示器动画' },
            { text: '基础示例：缩略图到全屏图的过渡', link: '/geometry/2.5_基础示例：缩略图到全屏图的过渡' },
          ]
        },
        {
          text: '第3章 控制动画属性与锚点',
          items: [
            { text: 'properties参数-仅匹配特定几何属性', link: '/geometry/3.1_properties参数-仅匹配特定几何属性' },
            { text: '使用.size实现尺寸匹配动画', link: '/geometry/3.2_使用.size实现尺寸匹配动画' },
            { text: '使用.position实现位置匹配动画', link: '/geometry/3.3_使用.position实现位置匹配动画' },
            { text: 'anchor 参数：控制动画的对齐基准点', link: '/geometry/3.4_anchor参数：控制动画的对齐基准点' },
            { text: '不同anchor值的效果对比', link: '/geometry/3.5_不同anchor值的效果对比' },
          ]
        },
        {
          text: '第4章 在复杂视图结构中应用',
          items: [
            { text: '在List或ForEach循环中应用matchedGeometryEffect', link: '/geometry/4.1_在List或ForEach循环中应用matchedGeometryEffect' },
            { text: '为动态列表项设置唯一的id', link: '/geometry/4.2_为动态列表项设置唯一的id' },
            { text: '实现列表项到详情页的平滑过渡', link: '/geometry/4.3_实现列表项到详情页的平滑过渡' },
            { text: '结合ZStack实现视图层级变换动画', link: '/geometry/4.4_结合ZStack实现视图层级变换动画' },
            { text: '处理不同父视图间的过渡动画', link: '/geometry/4.5_处理不同父视图间的过渡动画' },
          ]
        },
        {
          text: '第5章 解决常见问题与陷阱',
          items: [
            { text: '解决动画闪烁或跳跃问题', link: '/geometry/5.1_解决动画闪烁或跳跃问题' },
            { text: '处理Namespace作用域不正确的情况', link: '/geometry/5.2_处理Namespace作用域不正确的情况' },
            { text: '避免在动画期间出现视图拉伸变形', link: '/geometry/5.3_避免在动画期间出现视图拉伸变形' },
            { text: '调试技巧：使用GeometryReader检查视图帧', link: '/geometry/5.4_调试技巧：使用GeometryReader检查视图帧' },
            { text: '优化性能：减少不必要的视图重绘', link: '/geometry/5.5_优化性能：减少不必要的视图重绘' },
          ]
        },
        {
          text: '第6章 项目一：构建类似 App Store 的卡片展开动画',
          items: [
            { text: '布局卡片列表界面', link: '/geometry/6.1_布局卡片列表界面' },
            { text: '创建详情页视图', link: '/geometry/6.2_创建详情页视图' },
            { text: '使用matchedGeometryEffect连接卡片与详情页', link: '/geometry/6.3_使用matchedGeometryEffect连接卡片与详情页' },
            { text: '添加背景模糊与关闭按钮动画', link: '/geometry/6.4_添加背景模糊与关闭按钮动画' },
            { text: '处理滚动视图中的卡片动画', link: '/geometry/6.5_处理滚动视图中的卡片动画' },
          ]
        },
        {
          text: '第7章 项目二：实现动态标签栏（Tab Bar）指示器动画',
          items: [
            { text: '创建自定义标签栏视图', link: '/geometry/7.1_创建自定义标签栏视图' },
            { text: '为选中的标签添加背景指示器', link: '/geometry/7.2_为选中的标签添加背景指示器' },
            { text: '使用matchedGeometryEffect实现指示器平滑移动', link: '/geometry/7.3_使用matchedGeometryEffect实现指示器平滑移动' },
            { text: '同步指示器与页面内容的切换', link: '/geometry/7.4_同步指示器与页面内容的切换' },
            { text: '调整动画曲线与时长', link: '/geometry/7.5_调整动画曲线与时长' },
          ]
        },
        {
          text: '第8章 项目三：创建“魔法移动”照片墙效果',
          items: [
            { text: '使用LazyVGrid构建照片网格', link: '/geometry/8.1_使用LazyVGrid构建照片网格' },
            { text: '实现点击缩略图放大为全屏视图', link: '/geometry/8.2_实现点击缩略图放大为全屏视图' },
            { text: '在网格和全屏视图间应用matchedGeometryEffect', link: '/geometry/8.3_在网格和全屏视图间应用matchedGeometryEffect' },
            { text: '处理不同宽高比图像的过渡', link: '/geometry/8.4_处理不同宽高比图像的过渡' },
            { text: '添加手势交互以关闭全屏视图', link: '/geometry/8.5_添加手势交互以关闭全屏视图' },
          ]
        },
      ],
      '/refactor/': [
        {
          text: '第1章 识别并提取可复用视图',
          collapsed: false,
          items: [
            { text: '1.1 识别重复的视图代码块', link: '/refactor/1.1_识别重复的视图代码块' },
            { text: '1.2 使用struct创建新的自定义View', link: '/refactor/1.2_使用`struct`创建新的自定义View' },
            { text: '1.3 将提取的视图替换回原代码', link: '/refactor/1.3_将提取的视图替换回原代码' },
            { text: '1.4 为新视图提供描述性命名', link: '/refactor/1.4_为新视图提供描述性命名' },
          ]
        },
        {
          text: '第2章 通过属性传递数据',
          collapsed: false,
          items: [
            { text: '2.1 为组件定义let常量属性', link: '/refactor/2.1_为组件定义`let`常量属性' },
            { text: '2.2 在父视图中初始化并传递数据', link: '/refactor/2.2_在父视图中初始化并传递数据' },
            { text: '2.3 使用@State管理组件内部状态', link: '/refactor/2.3_使用`@State`管理组件内部状态' },
            { text: '2.4 区分何时使用let与@State', link: '/refactor/2.4_区分何时使用`let`与`@State`' },
          ]
        },
        {
          text: '第3章 使用@Binding实现双向数据流',
          collapsed: false,
          items: [
            { text: '3.1 理解@Binding的概念与用途', link: '/refactor/3.1_理解`@Binding`的概念与用途' },
            { text: '3.2 在子视图中声明@Binding属性', link: '/refactor/3.2_在子视图中声明`@Binding`属性' },
            { text: '3.3 在父视图中通过$传递绑定', link: '/refactor/3.3_在父视图中通过`$`传递绑定' },
            { text: '3.4 实现父子视图状态的实时同步', link: '/refactor/3.4_实现父子视图状态的实时同步' },
          ]
        },
        {
          text: '第4章 通过闭包处理组件事件',
          collapsed: false,
          items: [
            { text: '4.1 在组件中定义动作闭包属性', link: '/refactor/4.1_在组件中定义动作闭包属性' },
            { text: '4.2 在组件内部的交互控件中调用闭包', link: '/refactor/4.2_在组件内部的交互控件中调用闭包' },
            { text: '4.3 父视图实现闭包以响应事件', link: '/refactor/4.3_父视图实现闭包以响应事件' },
            { text: '4.4 传递无参数和带参数的闭包', link: '/refactor/4.4_传递无参数和带参数的闭包' },
          ]
        },
        {
          text: '第5章 自定义视图修饰符(ViewModifier)',
          collapsed: false,
          items: [
            { text: '5.1 创建符合ViewModifier协议的结构体', link: '/refactor/5.1_创建符合`ViewModifier`协议的结构体' },
            { text: '5.2 实现body(content:)方法', link: '/refactor/5.2_实现`body(content-)`方法' },
            { text: '5.3 通过modifier()应用修饰符', link: '/refactor/5.3_通过`modifier()`应用修饰符' },
            { text: '5.4 使用extension View简化调用', link: '/refactor/5.4_使用`extension View`简化调用' },
          ]
        },
        {
          text: '第6章 利用泛型构建通用组件',
          collapsed: false,
          items: [
            { text: '6.1 为自定义View添加泛型参数', link: '/refactor/6.1_为自定义View添加泛型参数' },
            { text: '6.2 使用where子句约束泛型类型', link: '/refactor/6.2_使用`where`子句约束泛型类型' },
            { text: '6.3 构建通用列表行或容器视图', link: '/refactor/6.3_构建通用列表行或容器视图' },
            { text: '6.4 泛型在数据展示组件中的应用', link: '/refactor/6.4_泛型在数据展示组件中的应用' },
          ]
        },
        {
          text: '第7章 使用@ViewBuilder构建灵活的容器',
          collapsed: false,
          items: [
            { text: '7.1 理解@ViewBuilder的作用', link: '/refactor/7.1_理解`@ViewBuilder`的作用' },
            { text: '7.2 在初始化器或函数参数中使用', link: '/refactor/7.2_在初始化器或函数参数中使用' },
            { text: '7.3 创建接受多个子视图的自定义容器', link: '/refactor/7.3_创建接受多个子视图的自定义容器' },
            { text: '7.4 实现类似VStack或HStack的组件', link: '/refactor/7.4_实现类似`VStack`或`HStack`的组件' },
          ]
        },
        {
          text: '第8章 封装环境对象(EnvironmentObject)',
          collapsed: false,
          items: [
            { text: '8.1 定义ObservableObject作为数据源', link: '/refactor/8.1_定义`ObservableObject`作为数据源' },
            { text: '8.2 在视图层级高层注入环境对象', link: '/refactor/8.2_在视图层级高层注入环境对象' },
            { text: '8.3 在子组件中使用@EnvironmentObject访问', link: '/refactor/8.3_在子组件中使用`@EnvironmentObject`访问' },
            { text: '8.4 环境对象在主题或账户管理中的应用', link: '/refactor/8.4_环境对象在主题或账户管理中的应用' },
          ]
        },
        {
          text: '第9章 识别巨型视图(Massive View)',
          collapsed: false,
          items: [
            { text: '9.1 检查超过200行的body属性', link: '/refactor/9.1_检查超过200行的`body`属性' },
            { text: '9.2 识别嵌套层级过深的视图结构', link: '/refactor/9.2_识别嵌套层级过深的视图结构' },
            { text: '9.3 评估视图是否承担过多职责', link: '/refactor/9.3_评估视图是否承担过多职责' },
            { text: '9.4 视图逻辑与UI描述混杂的迹象', link: '/refactor/9.4_视图逻辑与UI描述混杂的迹象' },
          ]
        },
        {
          text: '第10章 识别混乱的状态管理',
          collapsed: false,
          items: [
            { text: '10.1 过度使用@State导致状态分散', link: '/refactor/10.1_过度使用`@State`导致状态分散' },
            { text: '10.2 不恰当的@ObservedObject刷新', link: '/refactor/10.2_不恰当的`@ObservedObject`刷新' },
            { text: '10.3 数据源不明确', link: '/refactor/10.3_数据源不明确（Source of Truth混乱）' },
            { text: '10.4 @Binding链条过长难以追踪', link: '/refactor/10.4_`@Binding`链条过长难以追踪' },
          ]
        },
        {
          text: '第11章 识别不当的逻辑放置',
          collapsed: false,
          items: [
            { text: '11.1 在body中执行复杂的计算', link: '/refactor/11.1_在`body`中执行复杂的计算或数据转换' },
            { text: '11.2 网络请求或数据库操作在View中触发', link: '/refactor/11.2_网络请求或数据库操作直接在View中触发' },
            { text: '11.3 业务逻辑与视图代码耦合', link: '/refactor/11.3_业务逻辑与视图代码紧密耦合' },
            { text: '11.4 辅助函数滥用', link: '/refactor/11.4_辅助函数(Helper)滥用' },
          ]
        },
        {
          text: '第12章 拆分巨型视图',
          collapsed: false,
          items: [
            { text: '12.1 按功能区域拆分为子视图', link: '/refactor/12.1_按功能区域拆分为子视图' },
            { text: '12.2 提取计算属性视图', link: '/refactor/12.2_按逻辑分组提取计算属性视图' },
            { text: '12.3 使用私有方法返回some View', link: '/refactor/12.3_使用私有方法返回`some View`' },
            { text: '12.4 应用前述的组件封装技术', link: '/refactor/12.4_应用前述的组件封装技术' },
          ]
        },
        {
          text: '第13章 重构状态管理：引入MVVM',
          collapsed: false,
          items: [
            { text: '13.1 创建ViewModel作为ObservableObject', link: '/refactor/13.1_创建`ViewModel`作为`ObservableObject`' },
            { text: '13.2 将业务逻辑和状态迁移到ViewModel', link: '/refactor/13.2_将业务逻辑和状态从View迁移到ViewModel' },
            { text: '13.3 在View中使用@StateObject/@ObservedObject', link: '/refactor/13.3_在View中使用`@StateObject`或`@ObservedObject`' },
            { text: '13.4 使用函数和@Published进行交互', link: '/refactor/13.4_通过函数和`@Published`属性进行交互' },
          ]
        },
        {
          text: '第14章 优化数据流和依赖',
          collapsed: false,
          items: [
            { text: '14.1 使用@EnvironmentObject共享全局状态', link: '/refactor/14.1_使用`@EnvironmentObject`共享全局状态' },
            { text: '14.2 将多个@State合并为结构体', link: '/refactor/14.2_将多个`@State`属性合并到单一结构体中' },
            { text: '14.3 使用Combine处理复杂数据流', link: '/refactor/14.3_利用`Combine`处理复杂的数据流' },
            { text: '14.4 通过服务层抽象数据获取', link: '/refactor/14.4_通过服务层(Service Layer)抽象数据获取' },
          ]
        },
        {
          text: '第15章 精炼视图逻辑',
          collapsed: false,
          items: [
            { text: '15.1 将逻辑语句移入ViewModel', link: '/refactor/15.1_将`if-else`或`switch`逻辑移入ViewModel' },
            { text: '15.2 创建格式化工具', link: '/refactor/15.2_创建专门的格式化工具(Formatter)' },
            { text: '15.3 为模型添加计算属性', link: '/refactor/15.3_使用`extension`为数据模型添加计算属性' },
            { text: '15.4 封装重复UI配置到ViewModifier', link: '/refactor/15.4_将重复的UI配置封装到`ViewModifier`中' },
          ]
        }
      ],
      '/animation/': [
        {
          text: "第1章 隐式动画",
          collapsible: true,
          items: [
            { text: "1.1 使用 .animation() 修饰符", link: "/animation/1.1_使用 .animation() 修饰符" },
            { text: "1.2 配置动画曲线", link: "/animation/1.2_配置动画曲线- .easeInOut, .linear, .spring" },
            { text: "1.3 设置动画时长", link: "/animation/1.3_设置动画时长- duration参数" },
            { text: "1.4 应用 .animation() 到容器视图", link: "/animation/1.4_应用 .animation() 到容器视图" },
            { text: "1.5 使用 .animation(nil) 禁用动画", link: "/animation/1.5_使用 .animation(nil) 禁用动画" }
          ]
        },
        {
          text: "第2章 显式动画",
          collapsible: true,
          items: [
            { text: "2.1 使用 withAnimation 代码块", link: "/animation/2.1_使用 withAnimation 代码块" },
            { text: "2.2 在 withAnimation 中改变状态", link: "/animation/2.2_在 withAnimation 中改变状态" },
            { text: "2.3 为 withAnimation 指定动画曲线和时长", link: "/animation/2.3_为 withAnimation 指定动画曲线和时长" },
            { text: "2.4 嵌套 withAnimation 代码块", link: "/animation/2.4_嵌套 withAnimation 代码块" },
            { text: "2.5 显式动画与隐式动画的交互", link: "/animation/2.5_显式动画与隐式动画的交互" }
          ]
        },
        {
          text: "第3章 动画与状态绑定",
          collapsible: true,
          items: [
            { text: "3.1 使用 $binding.animation()", link: "/animation/3.1_使用 $binding.animation()" },
            { text: "3.2 为 Toggle、Slider 等控件添加动画", link: "/animation/3.2_为 Toggle、Slider 等控件添加动画" },
            { text: "3.3 绑定动画的特定参数配置", link: "/animation/3.3_绑定动画的特定参数配置" },
            { text: "3.4 理解绑定动画的执行时机", link: "/animation/3.4_理解绑定动画的执行时机" }
          ]
        },
        {
          text: "第4章 转场（Transitions）",
          collapsible: true,
          items: [
            { text: "4.1 使用 .transition() 修饰符", link: "/animation/4.1_使用 .transition() 修饰符" },
            { text: "4.2 内置转场效果", link: "/animation/4.2_内置转场效果- .opacity, .slide, .scale" },
            { text: "4.3 组合多个转场效果", link: "/animation/4.3_组合多个转场效果" },
            { text: "4.4 使用 .asymmetric 创建非对称转场", link: "/animation/4.4_使用 .asymmetric 创建非对称转场" },
            { text: "4.5 根据状态切换视图并触发转场", link: "/animation/4.5_根据状态切换视图并触发转场" }
          ]
        },
        {
          text: "第5章 Animatable 协议与 VectorArithmetic",
          collapsible: true,
          items: [
            { text: "5.1 理解 Animatable 协议", link: "/animation/5.1_理解 Animatable 协议" },
            { text: "5.2 实现 animatableData 计算属性", link: "/animation/5.2_实现 animatableData 计算属性" },
            { text: "5.3 使用 VectorArithmetic 协议", link: "/animation/5.3_使用 VectorArithmetic 协议" },
            { text: "5.4 为自定义数据类型添加动画能力", link: "/animation/5.4_为自定义数据类型添加动画能力" },
            { text: "5.5 动画化非数值属性 (例如颜色)", link: "/animation/5.5_动画化非数值属性 (例如颜色)" }
          ]
        },
        {
          text: "第6章 GeometryEffect",
          collapsible: true,
          items: [
            { text: "6.1 GeometryEffect 协议基础", link: "/animation/6.1_GeometryEffect 协议基础" },
            { text: "6.2 实现 effectValue(size-) 方法", link: "/animation/6.2_实现 effectValue(size-) 方法" },
            { text: "6.3 创建自定义视图变换动画", link: "/animation/6.3_创建自定义视图变换动画" },
            { text: "6.4 SkewEffect- 实现倾斜效果", link: "/animation/6.4_SkewEffect- 实现倾斜效果" },
            { text: "6.5 FollowPathEffect- 实现路径跟随动画", link: "/animation/6.5_FollowPathEffect- 实现路径跟随动画" }
          ]
        },
        {
          text: "第7章 内置动画曲线",
          collapsible: true,
          items: [
            { text: "7.1 线性动画 .linear", link: "/animation/7.1_线性动画 .linear" },
            { text: "7.2 缓入缓出 .easeInOut", link: "/animation/7.2_缓入缓出 .easeInOut" },
            { text: "7.3 缓入 .easeIn 与 缓出 .easeOut", link: "/animation/7.3_缓入 .easeIn 与 缓出 .easeOut" },
            { text: "7.4 自定义缓动曲线 timingCurve", link: "/animation/7.4_自定义缓动曲线 timingCurve" }
          ]
        },
        {
          text: "第8章 弹簧动画（Spring）",
          collapsible: true,
          items: [
            { text: "8.1 基础弹簧动画 .spring()", link: "/animation/8.1_基础弹簧动画 .spring()" },
            { text: "8.2 交互式弹簧 .interactiveSpring()", link: "/animation/8.2_交互式弹簧 .interactiveSpring()" },
            { text: "8.3 配置弹簧参数- response, dampingFraction", link: "/animation/8.3_配置弹簧参数- response, dampingFraction" },
            { text: "8.4 配置弹簧参数- blendDuration", link: "/animation/8.4_配置弹簧参数- blendDuration" },
            { text: "8.5 创建果冻效果", link: "/animation/8.5_创建果冻效果" }
          ]
        },
        {
          text: "第9章 相位动画师（Phase Animator）",
          collapsible: true,
          items: [
            { text: "9.1 PhaseAnimator 视图基础", link: "/animation/9.1_PhaseAnimator 视图基础" },
            { text: "9.2 定义动画阶段（Phases）", link: "/animation/9.2_定义动画阶段（Phases）" },
            { text: "9.3 在 content 闭包中应用视图修饰符", link: "/animation/9.3_在 content 闭包中应用视图修饰符" },
            { text: "9.4 在 animation 闭包中配置动画", link: "/animation/9.4_在 animation 闭包中配置动画" },
            { text: "9.5 通过 trigger 触发相位动画", link: "/animation/9.5_通过 trigger 触发相位动画" }
          ]
        },
        {
          text: "第10章 关键帧动画（Keyframe Animator）",
          collapsible: true,
          items: [
            { text: "10.1 KeyframeAnimator 视图基础", link: "/animation/10.1_KeyframeAnimator 视图基础" },
            { text: "10.2 定义关键帧轨道 KeyframeTrack", link: "/animation/10.2_定义关键帧轨道 KeyframeTrack" },
            { text: "10.3 使用 LinearKeyframe", link: "/animation/10.3_使用 LinearKeyframe" },
            { text: "10.4 使用 SpringKeyframe", link: "/animation/10.4_使用 SpringKeyframe" },
            { text: "10.5 使用 CubicKeyframe", link: "/animation/10.5_使用 CubicKeyframe" }
          ]
        },
        {
          text: "第11章 形状（Shape）动画",
          collapsible: true,
          items: [
            { text: "11.1 动画化路径 Path", link: "/animation/11.1_动画化路径 Path" },
            { text: "11.2 使用 animatableData 动画化自定义形状", link: "/animation/11.2_使用 animatableData 动画化自定义形状" },
            { text: "11.3 Trim 修剪动画", link: "/animation/11.3_Trim 修剪动画- strokeStart, strokeEnd" },
            { text: "11.4 实现路径绘制动画效果", link: "/animation/11.4_实现路径绘制动画效果" },
            { text: "11.5 形状变形动画", link: "/animation/11.5_形状变形动画" }
          ]
        },
        {
          text: "第12章 MatchedGeometryEffect",
          collapsible: true,
          items: [
            { text: "12.1 MatchedGeometryEffect 概念与应用", link: "/animation/12.1_MatchedGeometryEffect 概念与应用" },
            { text: "12.2 定义命名空间 @Namespace", link: "/animation/12.2_定义命名空间 @Namespace" },
            { text: "12.3 在不同视图间同步几何属性", link: "/animation/12.3_在不同视图间同步几何属性" },
            { text: "12.4 实现“魔法移动”效果", link: "/animation/12.4_实现“魔法移动”效果" },
            { text: "12.5 处理源视图和目标视图的切换", link: "/animation/12.5_处理源视图和目标视图的切换" }
          ]
        },
        {
          text: "第13章 Canvas 与 TimelineView",
          collapsible: true,
          items: [
            { text: "13.1 使用 TimelineView 创建定时更新", link: "/animation/13.1_使用 TimelineView 创建定时更新" },
            { text: "13.2 TimelineView 的 schedule 参数", link: "/animation/13.2_TimelineView 的 schedule 参数" },
            { text: "13.3 在 Canvas 中绘制动态图形", link: "/animation/13.3_在 Canvas 中绘制动态图形" },
            { text: "13.4 结合 TimelineView 和 Canvas 实现复杂动画", link: "/animation/13.4_结合 TimelineView 和 Canvas 实现复杂动画" },
            { text: "13.5 动画化 Canvas 中的符号 (Symbols)", link: "/animation/13.5_动画化 Canvas 中的符号 (Symbols)" }
          ]
        },
        {
          text: "第14章 常见动画案例",
          collapsible: true,
          items: [
            { text: "14.1 实现加载指示器动画", link: "/animation/14.1_实现加载指示器动画" },
            { text: "14.2 创建卡片翻转效果", link: "/animation/14.2_创建卡片翻转效果" },
            { text: "14.3 构建视差滚动效果", link: "/animation/14.3_构建视差滚动效果" },
            { text: "14.4 制作可交互的拖拽动画", link: "/animation/14.4_制作可交互的拖拽动画" },
            { text: "14.5 实现心跳动画效果", link: "/animation/14.5_实现心跳动画效果" }
          ]
        },
        {
          text: "第15章 性能考量与调试",
          collapsible: true,
          items: [
            { text: "15.1 识别导致性能问题的动画", link: "/animation/15.1_识别导致性能问题的动画" },
            { text: "15.2 使用 Instruments 分析动画性能", link: "/animation/15.2_使用 Instruments 分析动画性能" },
            { text: "15.3 最小化视图重绘范围", link: "/animation/15.3_最小化视图重绘范围" },
            { text: "15.4 将动画计算移出主线程", link: "/animation/15.4_将动画计算移出主线程" },
            { text: "15.5 利用 .drawingGroup() 优化渲染", link: "/animation/15.5_利用 .drawingGroup() 优化渲染" }
          ]
        },
        {
          text: "第16章 与UIKit/AppKit动画集成",
          collapsible: true,
          items: [
            { text: "16.1 在 UIViewRepresentable 中使用 UIView 动画", link: "/animation/16.1_在 UIViewRepresentable 中使用 UIView 动画" },
            { text: "16.2 在 NSViewRepresentable 中使用 Core Animation", link: "/animation/16.2_在 NSViewRepresentable 中使用 Core Animation" },
            { text: "16.3 通过 Coordinator 同步状态", link: "/animation/16.3_通过 Coordinator 同步状态" },
            { text: "16.4 从 SwiftUI 触发 UIKit 动画", link: "/animation/16.4_从 SwiftUI 触发 UIKit 动画" }
          ]
        }
      ],
      '/purchase/': [
        {
          text: "第1章 App Store Connect配置",
          collapsible: true,
          items: [
            { text: "1.1 创建App记录", link: "/purchase/1.1_创建App记录" },
            { text: "1.2 配置消耗品", link: "/purchase/1.2_配置App内购买项目：消耗品" },
            { text: "1.3 配置非消耗品", link: "/purchase/1.3_配置App内购买项目：非消耗品" },
            { text: "1.4 配置自动续期订阅", link: "/purchase/1.4_配置App内购买项目：自动续期订阅" },
            { text: "1.5 配置非续期订阅", link: "/purchase/1.5_配置App内购买项目：非续期订阅" },
            { text: "1.6 设置订阅群组", link: "/purchase/1.6_设置订阅群组" },
            { text: "1.7 配置沙盒测试员账户", link: "/purchase/1.7_配置沙盒测试员账户" }
          ]
        },
        {
          text: "第2章 项目环境设置",
          collapsible: true,
          items: [
            { text: "2.1 启用App内购买功能", link: "/purchase/2.1_在Xcode中启用App内购买功能" },
            { text: "2.2 创建StoreKit配置文件", link: "/purchase/2.2_创建StoreKit配置文件(.storekit)" },
            { text: "2.3 添加订阅产品", link: "/purchase/2.3_在配置文件中添加订阅产品" },
            { text: "2.4 配置订阅价格和期限", link: "/purchase/2.4_配置订阅价格和期限" },
            { text: "2.5 设置不同地区价格", link: "/purchase/2.5_为不同地区设置价格" },
            { text: "2.6 关联配置文件到运行方案", link: "/purchase/2.6_将StoreKit配置文件关联到运行方案" }
          ]
        },
        {
          text: "第3章 产品信息获取",
          collapsible: true,
          items: [
            { text: "3.1 异步请求产品信息", link: "/purchase/3.1_异步请求产品信息" },
            { text: "3.2 处理产品请求错误", link: "/purchase/3.2_处理产品请求错误" },
            { text: "3.3 解析Product对象数据", link: "/purchase/3.3_解析Product对象数据" },
            { text: "3.4 显示本地化产品信息", link: "/purchase/3.4_显示本地化的产品标题和描述" },
            { text: "3.5 格式化并显示价格", link: "/purchase/3.5_格式化并显示价格" }
          ]
        },
        {
          text: "第4章 处理购买流程",
          collapsible: true,
          items: [
            { text: "4.1 发起购买请求", link: "/purchase/4.1_发起购买请求：purchase()方法" },
            { text: "4.2 处理购买结果", link: "/purchase/4.2_处理购买结果：PurchaseResult" },
            { text: "4.3 处理用户取消", link: "/purchase/4.3_处理用户取消购买" },
            { text: "4.4 处理待处理的交易", link: "/purchase/4.4_处理待处理的交易（Ask to Buy）" },
            { text: "4.5 处理购买失败", link: "/purchase/4.5_处理购买失败的情况" }
          ]
        },
        {
          text: "第5章 验证与状态管理",
          collapsible: true,
          items: [
            { text: "5.1 理解Transaction对象", link: "/purchase/5.1_理解Transaction对象" },
            { text: "5.2 监听交易更新", link: "/purchase/5.2_遍历Transaction.updates以监听交易" },
            { text: "5.3 验证JWS签名", link: "/purchase/5.3_验证交易的JWS签名" },
            { text: "5.4 检查订阅权利", link: "/purchase/5.4_检查用户的当前订阅权利" },
            { text: "5.5 解锁高级功能", link: "/purchase/5.5_解锁高级功能或内容" },
            { text: "5.6 完成交易", link: "/purchase/5.6_完成交易：Transaction.finish()" },
            { text: "5.7 处理中断的交易", link: "/purchase/5.7_处理中断的交易" }
          ]
        },
        {
          text: "第6章 订阅状态与续订",
          collapsible: true,
          items: [
            { text: "6.1 获取已购买产品ID", link: "/purchase/6.1_获取用户所有已购买的产品ID" },
            { text: "6.2 检查订阅状态", link: "/purchase/6.2_检查订阅是否活跃：currentEntitlements" },
            { text: "6.3 确定到期日期", link: "/purchase/6.3_确定订阅到期日期" },
            { text: "6.4 处理续订变更", link: "/purchase/6.4_处理订阅续订、降级和升级" },
            { text: "6.5 处理过期和宽限期", link: "/purchase/6.5_处理订阅过期和宽限期" },
            { text: "6.6 处理退款和撤销", link: "/purchase/6.6_处理退款和撤销" }
          ]
        },
        {
          text: "第7章 订阅页面设计",
          collapsible: true,
          items: [
            { text: "7.1 使用VStack和HStack布局", link: "/purchase/7.1_使用VStack和HStack布局页面" },
            { text: "7.2 动态展示产品列表", link: "/purchase/7.2_动态展示从StoreKit获取的产品列表" },
            { text: "7.3 设计购买按钮", link: "/purchase/7.3_设计吸引人的购买按钮" },
            { text: "7.4 显示条款和隐私政策", link: "/purchase/7.4_显示订阅条款和隐私政策链接" },
            { text: "7.5 添加恢复购买按钮", link: "/purchase/7.5_添加“恢复购买”按钮" }
          ]
        },
        {
          text: "第8章 SwiftUI视图与StoreKit集成",
          collapsible: true,
          items: [
            { text: "8.1 创建StoreManager", link: "/purchase/8.1_创建StoreManager作为ObservableObject" },
            { text: "8.2 使用@StateObject", link: "/purchase/8.2_在视图中使用@StateObject管理StoreManager" },
            { text: "8.3 动态显示UI元素", link: "/purchase/8.3_根据订阅状态动态显示-隐藏UI元素" },
            { text: "8.4 调用购买函数", link: "/purchase/8.4_在按钮的action中调用购买函数" },
            { text: "8.5 显示加载指示器", link: "/purchase/8.5_显示加载指示器和错误提示" }
          ]
        },
        {
          text: "第9章 恢复购买功能",
          collapsible: true,
          items: [
            { text: "9.1 实现恢复按钮UI", link: "/purchase/9.1_实现“恢复购买”按钮的UI" },
            { text: "9.2 调用AppStore.sync()", link: "/purchase/9.2_调用AppStore.sync()函数" },
            { text: "9.3 处理恢复状态更新", link: "/purchase/9.3_处理恢复过程中的状态更新" },
            { text: "9.4 反馈恢复结果", link: "/purchase/9.4_向用户反馈恢复成功或失败" }
          ]
        },
        {
          text: "第10章 服务器端验证",
          collapsible: true,
          items: [
            { text: "10.1 服务器验证的必要性", link: "/purchase/10.1_服务器验证的必要性" },
            { text: "10.2 App Store服务器通知", link: "/purchase/10.2_App Store服务器通知简介" },
            { text: "10.3 设置通知URL", link: "/purchase/10.3_设置服务器接收通知的URL" },
            { text: "10.4 解析和验证JWS", link: "/purchase/10.4_在服务器上解析和验证JWS负载" },
            { text: "10.5 更新用户订阅状态", link: "/purchase/10.5_安全地更新用户数据库中的订阅状态" }
          ]
        },
        {
          text: "第11章 测试与部署",
          collapsible: true,
          items: [
            { text: "11.1 本地测试", link: "/purchase/11.1_使用StoreKit配置文件进行本地测试" },
            { text: "11.2 沙盒环境测试", link: "/purchase/11.2_使用沙盒环境进行真机测试" },
            { text: "11.3 TestFlight测试", link: "/purchase/11.3_TestFlight测试的最佳实践" },
            { text: "11.4 处理价格变更", link: "/purchase/11.4_处理订阅价格变更" },
            { text: "11.5 提交应用审核", link: "/purchase/11.5_提交应用以供审核：提供测试信息" }
          ]
        },
        {
          text: "第12章 促销与优惠代码",
          collapsible: true,
          items: [
            { text: "12.1 配置促销优惠", link: "/purchase/12.1_配置促销优惠（推广和引导）" },
            { text: "12.2 实现promotionalOffer", link: "/purchase/12.2_实现StoreKit的 promotionalOffer(for-signature-)" },
            { text: "12.3 生成验证优惠签名", link: "/purchase/12.3_生成并验证优惠签名" },
            { text: "12.4 配置优惠代码", link: "/purchase/12.4_配置和兑换优惠代码" },
            { text: "12.5 展示促销价格", link: "/purchase/12.5_在UI中展示促销价格" }
          ]
        }
      ],
      '/thinking/': [
        {
          text: "第1章 声明式语法基础",
          collapsible: true,
          items: [
            { text: "1.1 描述'什么'而非'如何'", link: "/thinking/1.1_描述“什么”而非“如何”" },
            { text: "1.2 与命令式UI（UIKit）对比", link: "/thinking/1.2_与命令式UI（UIKit）的对比" },
            { text: "1.3 代码可读性与简洁性优势", link: "/thinking/1.3_代码可读性与简洁性优势" },
            { text: "1.4 UI即状态的函数", link: "/thinking/1.4_UI即状态的函数" }
          ]
        },
        {
          text: "第2章 视图作为值类型",
          collapsible: true,
          items: [
            { text: "2.1 视图是轻量级结构体", link: "/thinking/2.1_视图是轻量级结构体（Struct）" },
            { text: "2.2 视图创建与销毁成本", link: "/thinking/2.2_视图的创建与销毁成本低" },
            { text: "2.3 避免复杂视图层级", link: "/thinking/2.3_避免复杂的视图层级和引用循环" },
            { text: "2.4 值语义对UI一致性的保障", link: "/thinking/2.4_值语义对UI一致性的保障" }
          ]
        },
        {
          text: "第3章 单一数据源",
          collapsible: true,
          items: [
            { text: "3.1 数据驱动UI更新", link: "/thinking/3.1_数据是驱动UI更新的唯一来源" },
            { text: "3.2 避免状态不一致问题", link: "/thinking/3.2_避免UI状态不一致问题" },
            { text: "3.3 简化状态管理逻辑", link: "/thinking/3.3_简化状态管理逻辑" },
            { text: "3.4 数据流单向性原则", link: "/thinking/3.4_数据流的单向性原则" }
          ]
        },
        {
          text: "第4章 状态管理属性包装器",
          collapsible: true,
          items: [
            { text: "4.1 @State：本地值类型状态", link: "/thinking/4.1_@State：管理本地简单值类型状态" },
            { text: "4.2 @Binding：双向数据绑定", link: "/thinking/4.2_@Binding：创建双向数据绑定" },
            { text: "4.3 @StateObject：引用类型生命周期", link: "/thinking/4.3_@StateObject：管理引用类型对象的生命周期" },
            { text: "4.4 @ObservedObject：订阅外部对象", link: "/thinking/4.4_@ObservedObject：订阅外部对象的更新" },
            { text: "4.5 @EnvironmentObject：数据共享", link: "/thinking/4.5_@EnvironmentObject：在视图层级中共享数据" },
            { text: "4.6 @Environment：系统环境值", link: "/thinking/4.6_@Environment：读取系统环境值" }
          ]
        },
        {
          text: "第5章 UI自动更新机制",
          collapsible: true,
          items: [
            { text: "5.1 状态变化触发视图重绘", link: "/thinking/5.1_状态变化如何触发视图重绘" },
            { text: "5.2 视图依赖关系图构建", link: "/thinking/5.2_视图依赖关系图的构建" },
            { text: "5.3 最小化视图更新策略", link: "/thinking/5.3_最小化视图更新范围的策略" },
            { text: "5.4 数据流可预测性", link: "/thinking/5.4_数据流的可预测性" }
          ]
        },
        {
          text: "第6章 组合优于继承",
          collapsible: true,
          items: [
            { text: "6.1 通过组合构建复杂界面", link: "/thinking/6.1_通过组合小视图构建复杂界面" },
            { text: "6.2 视图可复用性设计", link: "/thinking/6.2_视图的可复用性设计" },
            { text: "6.3 避免深度继承复杂性", link: "/thinking/6.3_避免深度继承带来的复杂性" },
            { text: "6.4 函数式构建UI实践", link: "/thinking/6.4_函数式构建UI的实践" }
          ]
        },
        {
          text: "第7章 修饰符（Modifiers）设计",
          collapsible: true,
          items: [
            { text: "7.1 修饰符返回新视图", link: "/thinking/7.1_修饰符返回一个新的视图" },
            { text: "7.2 链式调用实现原理", link: "/thinking/7.2_链式调用的实现原理" },
            { text: "7.3 修饰符顺序重要性", link: "/thinking/7.3_修饰符的顺序重要性" },
            { text: "7.4 创建自定义修饰符", link: "/thinking/7.4_自定义修饰符的创建与使用" }
          ]
        },
        {
          text: "第8章 布局系统设计",
          collapsible: true,
          items: [
            { text: "8.1 容器视图（Stacks）", link: "/thinking/8.1_容器视图（HStack, VStack, ZStack）" },
            { text: "8.2 自适应布局与优先级", link: "/thinking/8.2_自适应布局与优先级" },
            { text: "8.3 GeometryReader使用", link: "/thinking/8.3_GeometryReader：获取父视图几何信息" },
            { text: "8.4 布局中立性与跨平台", link: "/thinking/8.4_布局中立性与跨平台适应" }
          ]
        },
        {
          text: "第9章 视图身份（Identity）",
          collapsible: true,
          items: [
            { text: "9.1 显式身份：id()修饰符", link: "/thinking/9.1_显式身份：id()修饰符的作用" },
            { text: "9.2 结构性身份", link: "/thinking/9.2_结构性身份：基于视图在层级中的位置" },
            { text: "9.3 身份对动画的影响", link: "/thinking/9.3_身份对动画和过渡的影响" },
            { text: "9.4 ForEach中的身份", link: "/thinking/9.4_ForEach中身份的重要性" }
          ]
        },
        {
          text: "第10章 性能优化设计",
          collapsible: true,
          items: [
            { text: "10.1 视图差异比较算法", link: "/thinking/10.1_视图差异比较（Diffing）算法" },
            { text: "10.2 懒加载容器", link: "/thinking/10.2_懒加载容器（Lazy Stacks & Grids）" },
            { text: "10.3 减少不必要重绘", link: "/thinking/10.3_减少不必要的视图重绘" },
            { text: "10.4 移出计算密集型任务", link: "/thinking/10.4_将计算密集型任务移出视图主体" }
          ]
        },
        {
          text: "第11章 生命周期管理",
          collapsible: true,
          items: [
            { text: "11.1 视图与状态生命周期", link: "/thinking/11.1_视图生命周期与状态生命周期的区别" },
            { text: "11.2 onAppear和onDisappear", link: "/thinking/11.2_onAppear和onDisappear修饰符" },
            { text: "11.3 @StateObject生命周期", link: "/thinking/11.3_@StateObject的生命周期管理" },
            { text: "11.4 Task修饰符与异步", link: "/thinking/11.4_任务（Task）修饰符与异步操作" }
          ]
        },
        {
          text: "第12章 抽象与适配",
          collapsible: true,
          items: [
            { text: "12.1 多平台代码", link: "/thinking/12.1_一套代码，多平台运行" },
            { text: "12.2 平台控件抽象化", link: "/thinking/12.2_平台特定控件的抽象化" },
            { text: "12.3 平台条件编译", link: "/thinking/12.3_使用if os()进行平台条件编译" },
            { text: "12.4 控件自适应行为", link: "/thinking/12.4_控件的自适应行为" }
          ]
        },
        {
          text: "第13章 与原生框架互操作性",
          collapsible: true,
          items: [
            { text: "13.1 UIViewRepresentable", link: "/thinking/13.1_UIViewRepresentable协议" },
            { text: "13.2 UIViewControllerRepresentable", link: "/thinking/13.2_UIViewControllerRepresentable协议" },
            { text: "13.3 NSViewRepresentable", link: "/thinking/13.3_NSViewRepresentable协议" },
            { text: "13.4 嵌入UIKit/AppKit组件", link: "/thinking/13.4_在SwiftUI中嵌入UIKit-AppKit组件" }
          ]
        }
      ],
      '/grid/': [
        {
          text: "第1章 LazyVGrid：垂直网格布局入门",
          collapsible: true,
          items: [
            { text: "1.1 创建基本的LazyVGrid", link: "/grid/1.1_创建基本的LazyVGrid" },
            { text: "1.2 理解ScrollView的必要性", link: "/grid/1.2_理解ScrollView的必要性" },
            { text: "1.3 配置GridItem定义列", link: "/grid/1.3_配置GridItem以定义列" },
            { text: "1.4 使用.fixed()固定宽度列", link: "/grid/1.4_使用.fixed()创建固定宽度的列" },
            { text: "1.5 使用.flexible()灵活宽度列", link: "/grid/1.5_使用.flexible()创建灵活宽度的列" },
            { text: "1.6 使用.adaptive()自适应列", link: "/grid/1.6_使用.adaptive()创建自适应宽度的列" }
          ]
        },
        {
          text: "第2章 LazyHGrid：水平网格布局入门",
          collapsible: true,
          items: [
            { text: "2.1 创建基本的LazyHGrid", link: "/grid/2.1_创建基本的LazyHGrid" },
            { text: "2.2 在水平ScrollView中嵌入", link: "/grid/2.2_在水平ScrollView中嵌入LazyHGrid" },
            { text: "2.3 配置GridItem定义行", link: "/grid/2.3_配置GridItem以定义行" },
            { text: "2.4 使用.fixed()固定高度行", link: "/grid/2.4_使用.fixed()创建固定高度的行" },
            { text: "2.5 使用.flexible()灵活高度行", link: "/grid/2.5_使用.flexible()创建灵活高度的行" },
            { text: "2.6 使用.adaptive()自适应行", link: "/grid/2.6_使用.adaptive()创建自适应高度的行" }
          ]
        },
        {
          text: "第3章 通用配置与修饰符",
          collapsible: true,
          items: [
            { text: "3.1 设置网格对齐方式", link: "/grid/3.1_设置网格的整体对齐方式 (alignment)" },
            { text: "3.2 调整网格项间距", link: "/grid/3.2_调整网格项之间的间距 (spacing)" },
            { text: "3.3 使用PinnedViews固定页眉页脚", link: "/grid/3.3_使用PinnedViews固定页眉和页脚" },
            { text: "3.4 为网格项添加内边距", link: "/grid/3.4_为网格项添加内边距 (padding)" }
          ]
        },
        {
          text: "第4章 GridItem 高级配置",
          collapsible: true,
          items: [
            { text: "4.1 混合使用三种尺寸类型", link: "/grid/4.1_混合使用fixed, flexible, 和 adaptive" },
            { text: "4.2 设置自定义间距", link: "/grid/4.2_为GridItem设置自定义间距" },
            { text: "4.3 设置对齐方式", link: "/grid/4.3_为GridItem设置对齐方式" },
            { text: "4.4 动态生成GridItem数组", link: "/grid/4.4_动态生成GridItem数组" },
            { text: "4.5 响应设备方向变化", link: "/grid/4.5_响应设备方向变化调整列数" }
          ]
        },
        {
          text: "第5章 数据驱动的网格布局",
          collapsible: true,
          items: [
            { text: "5.1 使用ForEach处理数据", link: "/grid/5.1_使用ForEach处理动态数据集合" },
            { text: "5.2 实现Identifiable协议", link: "/grid/5.2_为网格项实现Identifiable协议" },
            { text: "5.3 使用UUID或自定义ID", link: "/grid/5.3_使用UUID或自定义ID作为唯一标识" },
            { text: "5.4 处理可选数据", link: "/grid/5.4_在网格中处理可选数据" }
          ]
        },
        {
          text: "第6章 带区段的网格布局",
          collapsible: true,
          items: [
            { text: "6.1 使用Section组织内容", link: "/grid/6.1_在LazyVGrid-LazyHGrid中使用Section" },
            { text: "6.2 添加自定义页眉", link: "/grid/6.2_为每个Section添加自定义页眉 (Header)" },
            { text: "6.3 添加自定义页脚", link: "/grid/6.3_为每个Section添加自定义页脚 (Footer)" },
            { text: "6.4 实现可折叠Section", link: "/grid/6.4_实现可折叠的Section" }
          ]
        },
        {
          text: "第7章 Grid 视图基础",
          collapsible: true,
          items: [
            { text: "7.1 Grid与Lazy Grid的区别", link: "/grid/7.1_Grid与LazyVGrid-LazyHGrid的区别" },
            { text: "7.2 创建基本Grid视图", link: "/grid/7.2_创建基本的Grid视图" },
            { text: "7.3 使用GridRow组织行", link: "/grid/7.3_使用GridRow组织行内容" },
            { text: "7.4 在GridRow中放置视图", link: "/grid/7.4_在GridRow中放置视图" }
          ]
        },
        {
          text: "第8章 控制单元格尺寸与位置",
          collapsible: true,
          items: [
            { text: "8.1 使用.gridCellColumns()跨列", link: "/grid/8.1_使用.gridCellColumns()实现跨列" },
            { text: "8.2 使用.gridCellAnchor()对齐", link: "/grid/8.2_使用.gridCellAnchor()设置单元格内对齐" },
            { text: "8.3 设置整列对齐", link: "/grid/8.3_使用.gridColumnAlignment()设置整列对齐" },
            { text: "8.4 控制行内对齐", link: "/grid/8.4_使用GridRow的alignment参数控制行内对齐" }
          ]
        },
        {
          text: "第9章 高级Grid布局",
          collapsible: true,
          items: [
            { text: "9.1 使用Spacer创建空单元格", link: "/grid/9.1_使用Spacer在Grid中创建空单元格" },
            { text: "9.2 忽略单元格尺寸计算", link: "/grid/9.2_使用.gridCellUnsizedAxes()忽略单元格尺寸计算" },
            { text: "9.3 嵌套Grid实现复杂布局", link: "/grid/9.3_嵌套Grid实现复杂布局" },
            { text: "9.4 动态构建GridRow", link: "/grid/9.4_动态构建GridRow和视图" }
          ]
        },
        {
          text: "第10章 构建常见UI模式",
          collapsible: true,
          items: [
            { text: "10.1 创建照片画廊", link: "/grid/10.1_实战：创建一个照片画廊 (LazyVGrid)" },
            { text: "10.2 创建类似App Store分类列表", link: "/grid/10.2_实战：创建一个类似App Store的分类列表 (LazyHGrid)" },
            { text: "10.3 创建复杂设置界面", link: "/grid/10.3_实战：创建一个复杂的设置界面 (Grid)" },
            { text: "10.4 创建日历视图", link: "/grid/10.4_实战：创建一个日历视图 (LazyVGrid)" }
          ]
        },
        {
          text: "第11章 性能优化策略",
          collapsible: true,
          items: [
            { text: "11.1 理解'Lazy'的性能优势", link: "/grid/11.1_理解“Lazy”的含义和性能优势" },
            { text: "11.2 避免昂贵计算", link: "/grid/11.2_避免在网格项视图中进行昂贵的计算" },
            { text: "11.3 优化数据加载", link: "/grid/11.3_优化数据加载以配合懒加载网格" },
            { text: "11.4 使用.drawingGroup()优化渲染", link: "/grid/11.4_使用.drawingGroup()优化复杂视图渲染" },
            { text: "11.5 选择Grid或Lazy Grid", link: "/grid/11.5_何时选择Grid而非Lazy Grid" }
          ]
        }
      ],
      '/advanced/': [
        {
          text: "第1章 GeometryReader 深度解析",
          collapsible: true,
          items: [
            { text: "1.1 工作原理", link: "/advanced/1.1_理解 GeometryReader 的工作原理" },
            { text: "1.2 获取视图尺寸和位置", link: "/advanced/1.2_获取视图的尺寸和位置" },
            { text: "1.3 处理不同坐标空间", link: "/advanced/1.3_处理不同坐标空间 (local, global, named)" },
            { text: "1.4 性能陷阱与优化", link: "/advanced/1.4_GeometryReader 的性能陷阱与优化" },
            { text: "1.5 创建响应式布局", link: "/advanced/1.5_创建响应式和自适应布局" },
            { text: "1.6 实现滚动视差效果", link: "/advanced/1.6_实现滚动视差效果" }
          ]
        },
        {
          text: "第2章 PreferenceKey 实现逆向数据流",
          collapsible: true,
          items: [
            { text: "2.1 定义自定义 PreferenceKey", link: "/advanced/2.1_定义自定义 PreferenceKey" },
            { text: "2.2 使用 .preference()", link: "/advanced/2.2_使用 .preference(key-value-) 设置值" },
            { text: "2.3 监听变化", link: "/advanced/2.3_使用 .onPreferenceChange() 监听变化" },
            { text: "2.4 读取 Preference 值", link: "/advanced/2.4_使用 .background() 读取 Preference 值" },
            { text: "2.5 同步子视图尺寸", link: "/advanced/2.5_通过 PreferenceKey 同步子视图尺寸" },
            { text: "2.6 动态导航栏标题", link: "/advanced/2.6_实现动态导航栏标题效果" }
          ]
        },
        {
          text: "第3章 自定义布局协议",
          collapsible: true,
          items: [
            { text: "3.1 Layout 协议核心方法", link: "/advanced/3.1_理解 Layout 协议的核心方法" },
            { text: "3.2 计算容器大小", link: "/advanced/3.2_实现 sizeThatFits 方法计算容器大小" },
            { text: "3.3 放置子视图", link: "/advanced/3.3_实现 placeSubviews 方法放置子视图" },
            { text: "3.4 创建流式布局", link: "/advanced/3.4_创建自定义流式布局 (Flow Layout)" },
            { text: "3.5 创建径向布局", link: "/advanced/3.5_创建自定义径向布局 (Radial Layout)" },
            { text: "3.6 管理布局缓存", link: "/advanced/3.6_管理布局缓存以提高性能" },
            { text: "3.7 添加布局动画", link: "/advanced/3.7_为自定义布局添加动画" }
          ]
        },
        {
          text: "第4章 视图对齐与锚点",
          collapsible: true,
          items: [
            { text: "4.1 Anchor-Value-概念", link: "/advanced/4.1_理解 `Anchor<Value>` 的概念" },
            { text: "4.2 传递锚点", link: "/advanced/4.2_使用 .anchorPreference 传递锚点" },
            { text: "4.3 读取锚点信息", link: "/advanced/4.3_使用 GeometryReader 读取锚点信息" },
            { text: "4.4 创建精确对齐线", link: "/advanced/4.4_在不同视图间创建精确对齐线" },
            { text: "4.5 实现复杂视图连接", link: "/advanced/4.5_实现复杂的视图连接效果" }
          ]
        },
        {
          text: "第5章 @StateObject 与 @ObservedObject",
          collapsible: true,
          items: [
            { text: "5.1 生命周期对比", link: "/advanced/5.1_辨析 @StateObject 和 @ObservedObject 的生命周期" },
            { text: "5.2 场景分析", link: "/advanced/5.2_选择正确包装器的场景分析" },
            { text: "5.3 常见陷阱", link: "/advanced/5.3_避免 @ObservedObject 的常见陷阱" },
            { text: "5.4 依赖注入", link: "/advanced/5.4_在依赖注入中使用 @StateObject" }
          ]
        },
        {
          text: "第6章 环境值与环境对象",
          collapsible: true,
          items: [
            { text: "6.1 使用 @EnvironmentObject", link: "/advanced/6.1_使用 @EnvironmentObject 注入依赖" },
            { text: "6.2 自定义 EnvironmentKey", link: "/advanced/6.2_自定义 EnvironmentKey 与 EnvironmentValues" },
            { text: "6.3 共享数据模型", link: "/advanced/6.3_在整个应用中共享数据模型" },
            { text: "6.4 读取系统环境值", link: "/advanced/6.4_读取系统环境值 (如颜色方案、尺寸类别)" },
            { text: "6.5 视图预览配合", link: "/advanced/6.5_环境值与视图预览的配合使用" }
          ]
        },
        {
          text: "第7章 Observation 框架",
          collapsible: true,
          items: [
            { text: "7.1 使用 @Observable", link: "/advanced/7.1_使用 @Observable 宏简化模型" },
            { text: "7.2 自动跟踪机制", link: "/advanced/7.2_理解 Observation 框架的自动跟踪机制" },
            { text: "7.3 从 ObservableObject 迁移", link: "/advanced/7.3_从 ObservableObject 迁移到 @Observable" },
            { text: "7.4 使用 @Bindable", link: "/advanced/7.4_@Bindable 的使用与双向绑定" },
            { text: "7.5 性能优势", link: "/advanced/7.5_Observation 框架的性能优势" }
          ]
        },
        {
          text: "第8章 管理持久化数据",
          collapsible: true,
          items: [
            { text: "8.1 使用 @AppStorage", link: "/advanced/8.1_使用 @AppStorage 进行轻量数据持久化" },
            { text: "8.2 集成 Core Data", link: "/advanced/8.2_集成 Core Data 与 SwiftUI" },
            { text: "8.3 使用 SwiftData", link: "/advanced/8.3_使用 SwiftData 进行现代数据持久化 (iOS 17+)" },
            { text: "8.4 使用 @Query", link: "/advanced/8.4_@Query 宏的使用与配置" },
            { text: "8.5 处理增删改查", link: "/advanced/8.5_在 SwiftUI 视图中处理 SwiftData 的增删改查" }
          ]
        },
        {
          text: "第9章 自定义视图与修改器",
          collapsible: true,
          items: [
            { text: "9.1 创建自定义视图组件", link: "/advanced/9.1_创建可复用的自定义视图组件" },
            { text: "9.2 封装 ViewModifier", link: "/advanced/9.2_封装行为与样式到自定义 ViewModifier" },
            { text: "9.3 扩展 View API", link: "/advanced/9.3_通过扩展 View 提供简洁的 API" },
            { text: "9.4 .modifier() 对比", link: "/advanced/9.4_理解 .modifier() 和直接调用的区别" },
            { text: "9.5 带参数修改器", link: "/advanced/9.5_实现带参数的视图修改器" }
          ]
        },
        {
          text: "第10章 SwiftUI 性能分析与调试",
          collapsible: true,
          items: [
            { text: "10.1 使用 Instruments", link: "/advanced/10.1_使用 Instruments 分析 SwiftUI 性能" },
            { text: "10.2 解决重复计算", link: "/advanced/10.2_识别并解决视图重复计算问题" },
            { text: "10.3 Identity 影响", link: "/advanced/10.3_理解 'Identity' 对性能和动画的影响" },
            { text: "10.4 使用 EquatableView", link: "/advanced/10.4_使用 EquatableView 减少不必要的刷新" },
            { text: "10.5 懒加载优化", link: "/advanced/10.5_懒加载视图 (LazyVStack, LazyHStack) 的优化技巧" }
          ]
        },
        {
          text: "第11章 高级动画与转场",
          collapsible: true,
          items: [
            { text: "11.1 matchedGeometryEffect", link: "/advanced/11.1_使用 matchedGeometryEffect 实现英雄动画" },
            { text: "11.2 自定义 Animatable", link: "/advanced/11.2_创建自定义 Animatable 协议动画" },
            { text: "11.3 使用 AnimatablePair", link: "/advanced/11.3_利用 AnimatablePair 为多值添加动画" },
            { text: "11.4 自定义视图转场", link: "/advanced/11.4_实现自定义视图转场 (AnyTransition)" },
            { text: "11.5 组合与异步转场", link: "/advanced/11.5_组合与异步化转场效果" },
            { text: "11.6 使用 PhaseAnimator", link: "/advanced/11.6_使用 PhaseAnimator 创建多阶段动画 (iOS 17+)" },
            { text: "11.7 使用 KeyframeAnimator", link: "/advanced/11.7_使用 KeyframeAnimator 创建关键帧动画 (iOS 17+)" }
          ]
        },
        {
          text: "第12章 在 SwiftUI 中使用 UIKit/AppKit",
          collapsible: true,
          items: [
            { text: "12.1 UIViewRepresentable", link: "/advanced/12.1_实现 UIViewRepresentable 协议" },
            { text: "12.2 UIViewControllerRepresentable", link: "/advanced/12.2_实现 UIViewControllerRepresentable 协议" },
            { text: "12.3 使用 Coordinator", link: "/advanced/12.3_使用 Coordinator 处理代理和回调" },
            { text: "12.4 管理生命周期", link: "/advanced/12.4_管理 Representable 视图的生命周期" },
            { text: "12.5 嵌入 WKWebView", link: "/advanced/12.5_在 SwiftUI 中嵌入 WKWebView" }
          ]
        },
        {
          text: "第13章 在 UIKit/AppKit 中嵌入 SwiftUI",
          collapsible: true,
          items: [
            { text: "13.1 使用 UIHostingController", link: "/advanced/13.1_使用 UIHostingController 嵌入 SwiftUI 视图" },
            { text: "13.2 在 UITableViewCell 中使用", link: "/advanced/13.2_在 UITableViewCell 中使用 SwiftUI" },
            { text: "13.3 管理尺寸和布局", link: "/advanced/13.3_管理 SwiftUI 视图的尺寸和布局" },
            { text: "13.4 实现数据通信", link: "/advanced/13.4_实现 UIKit 与 SwiftUI 之间的数据通信" }
          ]
        }
      ],
      '/lifecycle/': [
        {
          text: "第1章 视图的本质与结构",
          collapsible: true,
          items: [
            { text: "1.1 将视图理解为值的概念", link: "/lifecycle/1.1_将视图理解为值的概念" },
            { text: "1.2 视图作为状态的函数", link: "/lifecycle/1.2_视图作为状态的函数" },
            { text: "1.3 View协议与body属性", link: "/lifecycle/1.3_View协议与body属性" },
            { text: "1.4 与UIKit-AppKit视图对象的区别", link: "/lifecycle/1.4_与UIKit-AppKit视图对象的区别" }
          ]
        },
        {
          text: "第2章 视图身份与生命周期",
          collapsible: true,
          items: [
            { text: "2.1 显式身份：id()修饰符", link: "/lifecycle/2.1_显式身份：id()修饰符" },
            { text: "2.2 结构性身份", link: "/lifecycle/2.2_结构性身份：视图在层级中的位置" },
            { text: "2.3 身份对状态持久性的影响", link: "/lifecycle/2.3_身份对状态持久性的影响" },
            { text: "2.4 身份变化触发视图销毁与重建", link: "/lifecycle/2.4_身份变化如何触发视图销毁与重建" }
          ]
        },
        {
          text: "第3章 视图的依赖关系与更新",
          collapsible: true,
          items: [
            { text: "3.1 依赖图简介", link: "/lifecycle/3.1_依赖图（Dependency Graph）简介" },
            { text: "3.2 状态变化触发视图更新", link: "/lifecycle/3.2_状态变化如何触发视图更新" },
            { text: "3.3 body的计算时机与频率", link: "/lifecycle/3.3_body的计算时机与频率" },
            { text: "3.4 视图更新的性能考量", link: "/lifecycle/3.4_视图更新的性能考量" }
          ]
        },
        {
          text: "第4章 视图的初始化过程",
          collapsible: true,
          items: [
            { text: "4.1 init()方法的调用时机", link: "/lifecycle/4.1_init()方法的调用时机" },
            { text: "4.2 在init()中设置初始状态", link: "/lifecycle/4.2_在init()中设置初始状态" },
            { text: "4.3 使用自定义init进行依赖注入", link: "/lifecycle/4.3_使用自定义init进行依赖注入" },
            { text: "4.4 理解视图结构的首次构建", link: "/lifecycle/4.4_理解视图结构的首次构建" }
          ]
        },
        {
          text: "第5章 视图首次出现在屏幕上",
          collapsible: true,
          items: [
            { text: "5.1 onAppear修饰符的触发时机", link: "/lifecycle/5.1_onAppear修饰符的触发时机" },
            { text: "5.2 在onAppear中执行网络请求或动画", link: "/lifecycle/5.2_onAppear中执行网络请求或动画" },
            { text: "5.3 task修饰符管理异步任务", link: "/lifecycle/5.3_task修饰符：异步任务的生命周期管理" },
            { text: "5.4 task与onAppear的对比", link: "/lifecycle/5.4_task修饰符与onAppear的对比" }
          ]
        },
        {
          text: "第6章 状态驱动的视图更新",
          collapsible: true,
          items: [
            { text: "6.1 @State管理本地状态", link: "/lifecycle/6.1_@State：管理本地简单值类型状态" },
            { text: "6.2 @Binding创建双向连接", link: "/lifecycle/6.2_@Binding：创建双向数据连接" },
            { text: "6.3 onChange响应特定值变化", link: "/lifecycle/6.3_onChange修饰符：响应特定值的变化" },
            { text: "6.4 onChange的触发条件", link: "/lifecycle/6.4_onChange的触发条件与使用场景" }
          ]
        },
        {
          text: "第7章 对象类型的状态管理",
          collapsible: true,
          items: [
            { text: "7.1 @StateObject管理引用类型", link: "/lifecycle/7.1_@StateObject：管理引用类型状态的生命周期" },
            { text: "7.2 @ObservedObject观察外部对象", link: "/lifecycle/7.2_@ObservedObject：观察外部引用类型对象" },
            { text: "7.3 两种对象包装器的关键区别", link: "/lifecycle/7.3_@StateObject与@ObservedObject的关键区别" },
            { text: "7.4 @EnvironmentObject共享对象", link: "/lifecycle/7.4_@EnvironmentObject：在视图层级中共享对象" }
          ]
        },
        {
          text: "第8章 特殊状态属性包装器",
          collapsible: true,
          items: [
            { text: "8.1 @Environment读取环境值", link: "/lifecycle/8.1_@Environment：读取环境值" },
            { text: "8.2 @AppStorage/@SceneStorage", link: "/lifecycle/8.2_@AppStorage-@SceneStorage：持久化状态" },
            { text: "8.3 @FocusState管理焦点", link: "/lifecycle/8.3_@FocusState：管理焦点状态" },
            { text: "8.4 不同状态包装器的适用场景", link: "/lifecycle/8.4_理解不同状态包装器的适用场景" }
          ]
        },
        {
          text: "第9章 视图从屏幕上消失",
          collapsible: true,
          items: [
            { text: "9.1 onDisappear触发时机", link: "/lifecycle/9.1_onDisappear修饰符的触发时机" },
            { text: "9.2 在onDisappear中执行清理", link: "/lifecycle/9.2_在onDisappear中执行清理任务" },
            { text: "9.3 取消订阅或定时器", link: "/lifecycle/9.3_取消订阅或定时器" },
            { text: "9.4 释放手动管理资源", link: "/lifecycle/9.4_释放手动管理的资源" }
          ]
        },
        {
          text: "第10章 状态对象的生命周期管理",
          collapsible: true,
          items: [
            { text: "10.1 @StateObject的销毁时机", link: "/lifecycle/10.1_@StateObject的销毁时机" },
            { text: "10.2 ObservableObject的deinit", link: "/lifecycle/10.2_ObservableObject的deinit方法" },
            { text: "10.3 使用task自动取消任务", link: "/lifecycle/10.3_使用task修饰符自动取消异步任务" },
            { text: "10.4 避免内存泄漏", link: "/lifecycle/10.4_避免因强引用导致的内存泄漏" }
          ]
        },
        {
          text: "第11章 应用与场景生命周期",
          collapsible: true,
          items: [
            { text: "11.1 App协议与生命周期事件", link: "/lifecycle/11.1_App协议与应用生命周期事件" },
            { text: "11.2 ScenePhase环境值", link: "/lifecycle/11.2_ScenePhase环境值的使用" },
            { text: "11.3 处理应用前后台切换", link: "/lifecycle/11.3_处理应用进入后台或返回前台" },
            { text: "11.4 响应场景连接与断开", link: "/lifecycle/11.4_响应场景连接与断开" }
          ]
        },
        {
          text: "第12章 Navigation与Sheet/Popover生命周期",
          collapsible: true,
          items: [
            { text: "12.1 NavigationStack视图生命周期", link: "/lifecycle/12.1_NavigationStack中视图的生命周期" },
            { text: "12.2 Sheet和Popover生命周期", link: "/lifecycle/12.2_Sheet和Popover呈现时视图的生命周期" },
            { text: "12.3 导航中的onAppear行为", link: "/lifecycle/12.3_onAppear-onDisappear在导航中的行为" },
            { text: "12.4 管理模态视图状态", link: "/lifecycle/12.4_管理模态视图中的状态" }
          ]
        },
        {
          text: "第13章 与UIKit/AppKit组件的集成",
          collapsible: true,
          items: [
            { text: "13.1 UIViewRepresentable生命周期", link: "/lifecycle/13.1_UIViewRepresentable的生命周期方法" },
            { text: "13.2 makeUIView方法", link: "/lifecycle/13.2_makeUIView-makeUIViewController方法" },
            { text: "13.3 updateUIView方法", link: "/lifecycle/13.3_updateUIView-updateUIViewController方法" },
            { text: "13.4 dismantleUIView与清理", link: "/lifecycle/13.4_dismantleUIView与Coordinator清理" }
          ]
        }
      ],
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wumacms' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/249603883' }
    ],
  }
})
