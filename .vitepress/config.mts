import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "朋友们都别卷了！",
  description: "朋友们都别卷了！",
  head: [['link', { rel: 'icon', href: '/assets/ico-96.png' }]],
  rewrites: {
    'tech-docs/basics/:name/README.md': 'tech-docs/basics/:name.md',
  },
  themeConfig: {
    logo: '/assets/ico-96.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: '技术笔记',
        link: '/tech-docs/basics/css-basics',
        activeMatch: '/tech-docs'
      },
      {
        text: '其他文章',
        link: '/other',
      },
    ],

    sidebar: [
      {
        text: '基础知识（老掉牙了）',
        collapsed: true,
        items: [
          { text: 'css小记', link: '/tech-docs/basics/css-basics' },
          { text: 'http', link: '/tech-docs/basics/http' },
          { text: 'js正则', link: '/tech-docs/basics/regex' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oyolincc' }
    ],

    footer: {
      message: '回想上一次学习，还是在上次。',
      copyright: 'Copyright © 2024-present Oyolincc'
    }
  }
})
