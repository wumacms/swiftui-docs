import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SwiftUIX",
  description: "收集全网的SwiftUI学习资源，一站式资源导航",
  base: '/swiftui-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '入门教程', link: '/books/Mastering_SwiftUI_Custom_Views/1.1_什么是自定义视图' }
    ],

    sidebar: {
      '/books': [
        {
          text: 'SwiftUI 自定义视图组件库',
          items: [
            {
              text: '第1章 自定义视图基础',
              collapsed: true,
              items: [
                { text: '1.1 什么是自定义视图', link: '/books/Mastering_SwiftUI_Custom_Views/1.1_什么是自定义视图' },
                { text: '1.2 为何需要自定义视图', link: '/books/Mastering_SwiftUI_Custom_Views/1.2_为何需要自定义视图' },
                { text: '1.3 View协议的核心要求', link: '/books/Mastering_SwiftUI_Custom_Views/1.3_View协议的核心要求' },
                { text: '1.4 组合与封装原则', link: '/books/Mastering_SwiftUI_Custom_Views/1.4_组合与封装原则' }
              ]
            },
            {
              text: '第2章 SwiftUI 项目初始化',
              collapsed: true,
              items: [
                { text: '2.1 创建新的 SwiftUI 项目', link: '/books/Mastering_SwiftUI_Custom_Views/2.1_创建新的SwiftUI项目' },
                { text: '2.2 组织文件的目录结构', link: '/books/Mastering_SwiftUI_Custom_Views/2.2_组织文件的目录结构' },
                { text: '2.3 创建专门的组件预览文件', link: '/books/Mastering_SwiftUI_Custom_Views/2.3_创建专门的组件预览文件' },
                { text: '2.4 配置预览提供器 (PreviewProvider)', link: '/books/Mastering_SwiftUI_Custom_Views/2.4_配置预览提供器(PreviewProvider)' }
              ]
            },
            {
              text: '第3章 自定义按钮组件',
              collapsed: true,
              items: [
                { text: '3.1 创建基本按钮结构', link: '/books/Mastering_SwiftUI_Custom_Views/3.1_创建基本按钮结构' },
                { text: '3.2 定义按钮的初始化参数', link: '/books/Mastering_SwiftUI_Custom_Views/3.2_定义按钮的初始化参数' },
                { text: '3.3 处理按钮的点击动作', link: '/books/Mastering_SwiftUI_Custom_Views/3.3_处理按钮的点击动作' },
                { text: '3.4 为按钮添加自定义样式', link: '/books/Mastering_SwiftUI_Custom_Views/3.4_为按钮添加自定义样式' }
              ]
            },
            {
              text: '第4章 输入框组件封装',
              collapsed: true,
              items: [
                { text: '4.1 封装 TextField 并添加标签', link: '/books/Mastering_SwiftUI_Custom_Views/4.1_封装TextField并添加标签' },
                { text: '4.2 实现输入验证逻辑', link: '/books/Mastering_SwiftUI_Custom_Views/4.2_实现输入验证逻辑' },
                { text: '4.3 自定义边框和背景样式', link: '/books/Mastering_SwiftUI_Custom_Views/4.3_自定义边框和背景样式' },
                { text: '4.4 处理焦点状态变化', link: '/books/Mastering_SwiftUI_Custom_Views/4.4_处理焦点状态变化' }
              ]
            },
            {
              text: '第5章 图像视图开发',
              collapsed: true,
              items: [
                { text: '5.1 创建可配置的图像组件', link: '/books/Mastering_SwiftUI_Custom_Views/5.1_创建可配置的图像组件' },
                { text: '5.2 支持网络图片加载与占位符', link: '/books/Mastering_SwiftUI_Custom_Views/5.2_支持网络图片加载与占位符' },
                { text: '5.3 添加图像滤镜和效果', link: '/books/Mastering_SwiftUI_Custom_Views/5.3_添加图像滤镜和效果' },
                { text: '5.4 实现图像的裁剪与缩放', link: '/books/Mastering_SwiftUI_Custom_Views/5.4_实现图像的裁剪与缩放' }
              ]
            },
            {
              text: '第6章 加载动画设计',
              collapsed: true,
              items: [
                { text: '6.1 创建圆形加载动画', link: '/books/Mastering_SwiftUI_Custom_Views/6.1_创建圆形加载动画' },
                { text: '6.2 创建条形加载进度条', link: '/books/Mastering_SwiftUI_Custom_Views/6.2_创建条形加载进度条' },
                { text: '6.3 控制动画的开始与停止', link: '/books/Mastering_SwiftUI_Custom_Views/6.3_控制动画的开始与停止' },
                { text: '6.4 允许自定义颜色和尺寸', link: '/books/Mastering_SwiftUI_Custom_Views/6.4_允许自定义颜色和尺寸' }
              ]
            },
            {
              text: '第7章 卡片组件构建',
              collapsed: true,
              items: [
                { text: '7.1 组合图像、标题和描述文本', link: '/books/Mastering_SwiftUI_Custom_Views/7.1_组合图像、标题和描述文本' },
                { text: '7.2 设计卡片的布局结构', link: '/books/Mastering_SwiftUI_Custom_Views/7.2_设计卡片的布局结构' },
                { text: '7.3 添加阴影和圆角效果', link: '/books/Mastering_SwiftUI_Custom_Views/7.3_添加阴影和圆角效果' },
                { text: '7.4 处理卡片点击事件', link: '/books/Mastering_SwiftUI_Custom_Views/7.4_处理卡片点击事件' }
              ]
            },
            {
              text: '第8章 头像组件实现',
              collapsed: true,
              items: [
                { text: '8.1 结合图像和在线状态指示器', link: '/books/Mastering_SwiftUI_Custom_Views/8.1_结合图像和在线状态指示器' },
                { text: '8.2 处理不同尺寸的头像显示', link: '/books/Mastering_SwiftUI_Custom_Views/8.2_处理不同尺寸的头像显示' },
                { text: '8.3 实现占位符或默认头像', link: '/books/Mastering_SwiftUI_Custom_Views/8.3_实现占位符或默认头像' },
                { text: '8.4 添加点击交互预览大图', link: '/books/Mastering_SwiftUI_Custom_Views/8.4_添加点击交互预览大图' }
              ]
            },
            {
              text: '第9章 表单行与输入控件',
              collapsed: true,
              items: [
                { text: '9.1 设计包含标签和输入控件的行', link: '/books/Mastering_SwiftUI_Custom_Views/9.1_设计包含标签和输入控件的行' },
                { text: '9.2 支持不同类型的输入控件', link: '/books/Mastering_SwiftUI_Custom_Views/9.2_支持不同类型的输入控件' },
                { text: '9.3 添加错误信息显示区域', link: '/books/Mastering_SwiftUI_Custom_Views/9.3_添加错误信息显示区域' },
                { text: '9.4 统一表单行的样式', link: '/books/Mastering_SwiftUI_Custom_Views/9.4_统一表单行的样式' }
              ]
            },
            {
              text: '第10章 自定义 ViewModifier',
              collapsed: true,
              items: [
                { text: '10.1 创建自定义 ViewModifier 协议实现', link: '/books/Mastering_SwiftUI_Custom_Views/10.1_创建自定义ViewModifier协议实现' },
                { text: '10.2 封装通用样式（如卡片样式）', link: '/books/Mastering_SwiftUI_Custom_Views/10.2_封装通用样式(如卡片样式)' },
                { text: '10.3 通过 View 扩展简化修饰符调用', link: '/books/Mastering_SwiftUI_Custom_Views/10.3_通过View扩展简化修饰符调用' },
                { text: '10.4 链式调用多个自定义修饰符', link: '/books/Mastering_SwiftUI_Custom_Views/10.4_链式调用多个自定义修饰符' }
              ]
            },
            {
              text: '第11章 环境值与数据传递',
              collapsed: true,
              items: [
                { text: '11.1 使用 EnvironmentValues 传递全局配置', link: '/books/Mastering_SwiftUI_Custom_Views/11.1_使用EnvironmentValues传递全局配置' },
                { text: '11.2 定义自定义 EnvironmentKey', link: '/books/Mastering_SwiftUI_Custom_Views/11.2_定义自定义EnvironmentKey' },
                { text: '11.3 使用 PreferenceKey 向上传递数据', link: '/books/Mastering_SwiftUI_Custom_Views/11.3_使用PreferenceKey从子视图向父视图传递数据' },
                { text: '11.4 实现主题切换功能', link: '/books/Mastering_SwiftUI_Custom_Views/11.4_实现主题切换功能' }
              ]
            },
            {
              text: '第12章 泛型与多视图组件',
              collapsed: true,
              items: [
                { text: '12.1 使用泛型创建灵活的容器视图', link: '/books/Mastering_SwiftUI_Custom_Views/12.1_使用泛型创建灵活的容器视图' },
                { text: '12.2 利用 @ViewBuilder 构建多个子视图组件', link: '/books/Mastering_SwiftUI_Custom_Views/12.2_利用@ViewBuilder构建可接受多个子视图的组件' },
                { text: '12.3 泛型约束在组件中的应用', link: '/books/Mastering_SwiftUI_Custom_Views/12.3_泛型约束在组件中的应用' },
                { text: '12.4 创建自定义容器组件（如 CustomVStack）', link: '/books/Mastering_SwiftUI_Custom_Views/12.4_创建一个自定义的容器组件(如CustomVStack)' }
              ]
            },
            {
              text: '第13章 几何布局与尺寸读取',
              collapsed: true,
              items: [
                { text: '13.1 使用 GeometryReader 获取父视图尺寸', link: '/books/Mastering_SwiftUI_Custom_Views/13.1_使用GeometryReader获取父视图尺寸' },
                { text: '13.2 实现自适应布局组件', link: '/books/Mastering_SwiftUI_Custom_Views/13.2_实现自适应布局的组件' },
                { text: '13.3 读取视图的坐标和位置', link: '/books/Mastering_SwiftUI_Custom_Views/13.3_读取视图的坐标和位置' },
                { text: '13.4 避免 GeometryReader 的陷阱', link: '/books/Mastering_SwiftUI_Custom_Views/13.4_避免GeometryReader的常见陷阱' }
              ]
            },
            {
              text: '第14章 Swift 包管理',
              collapsed: true,
              items: [
                { text: '14.1 初始化 Swift 包项目', link: '/books/Mastering_SwiftUI_Custom_Views/14.1_初始化Swift包项目' },
                { text: '14.2 配置 Package.swift 文件', link: '/books/Mastering_SwiftUI_Custom_Views/14.2_配置Package.swift文件' },
                { text: '14.3 定义库和目标（Library & Target）', link: '/books/Mastering_SwiftUI_Custom_Views/14.3_定义库和目标(Library_&_Target)' },
                { text: '14.4 将组件代码移入包中', link: '/books/Mastering_SwiftUI_Custom_Views/14.4_将组件代码移入包中' }
              ]
            },
            {
              text: '第15章 文档与测试',
              collapsed: true,
              items: [
                { text: '15.1 为公共 API 编写文档注释', link: '/books/Mastering_SwiftUI_Custom_Views/15.1_为公共API编写文档注释' },
                { text: '15.2 创建组件的使用示例', link: '/books/Mastering_SwiftUI_Custom_Views/15.2_创建组件的使用示例' },
                { text: '15.3 编写单元测试验证组件逻辑', link: '/books/Mastering_SwiftUI_Custom_Views/15.3_编写单元测试验证组件逻辑' },
                { text: '15.4 编写 UI 测试确保视图表现', link: '/books/Mastering_SwiftUI_Custom_Views/15.4_编写UI测试确保视图表现' }
              ]
            },
            {
              text: '第16章 发布与集成',
              collapsed: true,
              items: [
                { text: '16.1 将代码推送到 GitHub', link: '/books/Mastering_SwiftUI_Custom_Views/16.1_将代码推送到GitHub' },
                { text: '16.2 创建版本标签（Tagging Versions）', link: '/books/Mastering_SwiftUI_Custom_Views/16.2_创建版本标签(Tagging_Versions)' },
                { text: '16.3 在 Xcode 中添加 Swift 包依赖', link: '/books/Mastering_SwiftUI_Custom_Views/16.3_在Xcode中添加Swift包依赖' },
                { text: '16.4 更新和维护组件库', link: '/books/Mastering_SwiftUI_Custom_Views/16.4_更新和维护组件库' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
