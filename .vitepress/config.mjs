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
            text: 'SwiftUI开发入门',
            link: '/base/1.1_安装Xcode_15'
          },
          {
            text: 'Swift自定义视图组件',
            link: '/custom_views/1.1_什么是自定义视图'
          }
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
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
