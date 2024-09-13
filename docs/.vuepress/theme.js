import { defaultTheme } from '@vuepress/theme-default'

export default defaultTheme({
    // 默认主题配置
    navbar: [
        { text: '首页', link: '/' },
        { text: '指南', link: '/guide/' },
        { text: '面试题', link: '/index.md/' },
        {
            text: 'Java',
            children: [
                {
                    text: 'Java 面向对象和基础',
                    children: [
                        { text: 'Java 面向对象基础', link: '/java/GC.md' },
                        { text: 'Java 基础知识体系', link: '/java/String.md' },
                    ],
                },
            ],
        },
        {
            text: '工具',
            children: [
                {
                    text: 'VuePress',
                    children: [
                        { text: 'Algolia DocSearch集成', link: '/vuepress/algolia.md' },
                    ],
                },
            ],
        },
    ],
    // 编辑此页的功能
    editLinks: true,
    docsRepo: 'https://gitlab.com/ChainSmokersz/sunz.github.io',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/blob/:branch/:path',
    // 设置最后更新和编辑此页文本的本地化配置
    locales: {
        '/': {
            lastUpdatedText: '最后更新',
            editLinkText: '在GitHub上编辑此页',
            contributorsText: '贡献者',
            notFound: ['页面不存在', '找不到页面', '哦不，页面跑丢了！'],
            backToHome: '返回首页',
        },
    },
})