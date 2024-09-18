import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import theme from './theme'
import plugins from './plugins'

export default defineUserConfig({
    head: [
        // 添加浏览器 favicon 图标
        [
            'link',
            { rel: 'icon', href: '/images/favicon.png' }
        ],
    ],
    bundler: viteBundler(),
    theme,
    plugins,
    base: '/',
    lang: 'zh-CN',
    title: 'ChainSmoker',
    description: 'Java全栈知识体系',
})