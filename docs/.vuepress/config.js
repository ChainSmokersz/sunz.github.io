import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {docsearchPlugin} from '@vuepress/plugin-docsearch'
import {sitemapPlugin} from '@vuepress/plugin-sitemap'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/guide/'},
            {text: '面试题', link: '/index.md/'},
            {
                text: 'Java',
                children: [
                    {
                        text: 'Java 面向对象和基础',
                        children: [
                            {text: 'Java 面向对象基础', link: '/java/GC.md'},
                            {text: 'Java 基础知识体系', link: '/java/basics/'},
                        ]
                    },
                ],
            },
            {
                text: '工具',
                children: [
                    {
                        text: 'VuePress',
                        children: [
                            {text: 'Algolia DocSearch集成', link: '/vuepress/algolia.md'},
                        ]
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
                lastUpdatedText: '最后更新',  // 修改最后更新的文本
                editLinkText: '编辑此页',   // 修改编辑此页的文本
                contributorsText: '贡献者',
                notFound: [              // 自定义404页面
                    '页面不存在',
                    '找不到页面',
                    '哦不，页面跑丢了！'
                ],
                backToHome: '返回首页',
            },
        },
    }),
    plugins: [
        // 集成Algolia搜索
        docsearchPlugin({
            appId: '26XV255KMI',
            apiKey: '0882940c2995adc1c0c7eab06f330a69',
            indexName: 'chainsmokerszio',
            locales: {
                '/': {
                    placeholder: '搜索文档',  // 自定义搜索框占位符文本
                    translations: {
                        button: {
                            buttonText: '搜索',  // 自定义搜索按钮文本
                            buttonAriaLabel: '搜索按钮',  // 自定义搜索按钮的 ARIA 标签文本
                        },
                        modal: {
                            startScreen: {
                                recentSearchesTitle: '历史搜索',
                                noRecentSearchesText: '没有历史搜索',
                            },
                            errorScreen: {
                                titleText: '无法获取结果',
                                helpText: '请检查您的网络连接',
                            },
                            footer: {
                                selectText: '选择',
                                navigateText: '导航',
                                closeText: '关闭',
                            },
                        },
                    },
                },
            },
        }),
        sitemapPlugin({
            // 选项
            hostname: 'https://chainsmokersz.github.io/sunz.github.io/'
        }),
    ],

    base: '/',
    lang: 'zh-CN',
    title: 'ChainSmoker',
    description: 'Java全栈知识体系',
})


