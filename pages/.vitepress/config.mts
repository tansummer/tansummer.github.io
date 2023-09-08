import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Summer of Tan",
  description: "Hear your coming",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '日常', link: '/daily' },
      { text: '学海', link: '/school' }
    ],

    sidebar: [
      {
        text: '日常',
        items: [
          { text: '小计', link: '/daily/one' },
        ]
      },
      {
        text: '学海',
        items: [
          { text: '小哥白尼', link: '/school/copernicus' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://github.com/summertan' }
    ]
  }
})
