import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = [
  {
    text: '基础（老掉牙了不更新了）',
    collapsed: true,
    items: [
      { text: 'css小记', link: '/tech-docs/basics/css-basics' },
      { text: 'http', link: '/tech-docs/basics/http' },
      { text: 'js正则', link: '/tech-docs/basics/regex' }
    ]
  },
  {
    text: '框架',
    items: [
      { text: 'vue@2源码分析', link: '/tech-docs/framework/vue@2' },
      { text: 'vue@3.5.5源码分析（一）', link: '/tech-docs/framework/vue@3.5.5/p1' },
      { text: 'vue@3.5.5源码分析（二）', link: '/tech-docs/framework/vue@3.5.5/p2' },
    ]
  },
  {
    text: '工程化与构建',
    items: [
      { text: 'webpack 4 & 5', link: '/tech-docs/engineering/webpack' },
      { text: 'rollup踩坑记录', link: '/tech-docs/engineering/rollup/damn' },
    ]
  }
]

export default sidebar
