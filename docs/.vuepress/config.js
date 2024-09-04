import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {docsearchPlugin} from '@vuepress/plugin-docsearch'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {text: '首页', link: '/algolia.md'},
            {text: '指南', link: '/guide/'},
            {text: '面试题', link: '/guide/'},
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
    }),
    head: [
        ['link', { rel: 'stylesheet', href: '/css/custom.css' }]
    ],
    plugins: [
        docsearchPlugin({
            appId: '26XV255KMI',
            apiKey: '0882940c2995adc1c0c7eab06f330a69',
            indexName: 'chainsmokerszio',
            locales: {
                '/': {
                    placeholder: '搜索文档',
                    translations: {
                        button: {
                            buttonText: '搜索文档',
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
    base: '/sunz.github.io/',
    lang: 'zh-CN',
    title: '全栈知识体系',
    description: 'Java全栈知识体系',
})


