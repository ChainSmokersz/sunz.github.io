import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {docsearchPlugin} from '@vuepress/plugin-docsearch'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {text: '首页', link: '/index.md'},
            {text: '指南', link: '/guide/'},
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
        ],
    }),
    head: [
        ['link', { rel: 'stylesheet', href: '/css/custom.css' }]
    ],
    plugins: [
        docsearchPlugin({
            appId: '<APP_ID>',
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>',
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
    ],
    base: '/sunz.github.io/',
    lang: 'zh-CN',
    title: '全栈知识体系',
    description: 'Java全栈知识体系',
})


