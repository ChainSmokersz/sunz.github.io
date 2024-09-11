import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default [
    // 集成Algolia搜索
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
        hostname: 'https://chainsmokersz.github.io/sunz.github.io/',
    }),
]