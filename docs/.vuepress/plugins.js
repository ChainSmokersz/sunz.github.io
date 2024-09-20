import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { readingTimePlugin } from '@vuepress/plugin-reading-time'
import { commentPlugin } from '@vuepress/plugin-comment'
import { markdownContainerPlugin } from '@vuepress/plugin-markdown-container'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default [
    docsearchPlugin({
        appId: '26XV255KMI',
        apiKey: '0882940c2995adc1c0c7eab06f330a69',
        indexName: 'chainsmokerszio',
        locales: {
            '/': {
                placeholder: '搜索文档',
                translations: {
                    button: {
                        buttonText: '搜索',
                        buttonAriaLabel: '搜索按钮',
                    },
                    modal: {
                        searchBox: {
                            resetButtonTitle: '清除查询',
                            resetButtonAriaLabel: '清除搜索框',
                            cancelButtonText: '取消',
                            cancelButtonAriaLabel: '取消搜索',
                        },
                        startScreen: {
                            recentSearchesTitle: '历史搜索',
                            noRecentSearchesText: '没有历史搜索',
                        },
                        errorScreen: {
                            titleText: '无法获取结果',
                            helpText: '请检查您的网络连接',
                        },
                        noResultsScreen: {
                            noResultsText: '没有找到相关结果',
                        },
                    },
                },
            },
        },
    }),
    sitemapPlugin({
        hostname: 'https://sunz.asia/',
    }),
    readingTimePlugin({
        wordPerMinute: 300
    }),

    // 评估插件
    commentPlugin({
        provider: 'Giscus',
        repo: 'ChainSmokersz/sunz.github.io',
        repoId: 'R_kgDOMqZeNg',
        category: 'Announcements',
        categoryId: 'DIC_kwDOMqZeNs4CiX-R',
    }),


    markdownContainerPlugin({
        type: 'card',
    }),

    googleAnalyticsPlugin({
        // 配置项
        id: 'G-9WT1CDPF70',
        debug: true,
    }),

    'vuepress-plugin-google-adsense',
    {
        adClient: 'ca-pub-5945083129646506', // 替换为你的 AdSense ID
    },

]
