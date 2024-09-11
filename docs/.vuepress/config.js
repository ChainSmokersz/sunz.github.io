import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import theme from './theme'
import plugins from './plugins'

export default defineUserConfig({
    bundler: viteBundler(),
    theme,
    plugins,
    base: '/',
    lang: 'zh-CN',
    title: 'ChainSmoker',
    description: 'Java全栈知识体系',
})