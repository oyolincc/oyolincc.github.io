import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "朋友们都别卷了求求！",
  description: "朋友们都别卷了！",
  head: [['link', { rel: 'icon', href: '/assets/ico-96.png' }]],
  rewrites: {
    'tech-docs/:dir/:name/README.md': 'tech-docs/:dir/:name.md',
    // 'tech-docs/:dir/:name/:file.md': 'tech-docs/:dir/:name/:file.md',
    // 'tech-docs/framework/:name/README.md': 'tech-docs/framework/:name.md',
    // 'tech-docs/engineering/:name/README.md': 'tech-docs/engineering/:name.md',
  },
  themeConfig: {
    logo: '/assets/ico-96.png',
    outline: {
      label: '大纲',
      level: 'deep',
    },
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
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/oyolincc' }
    ],

    footer: {
      message: '回想上一次学习，还是在上次。',
      copyright: 'Copyright © 2024-present Oyolincc'
    }
  }
})
