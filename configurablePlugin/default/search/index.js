const d=  {
    index: '/search',
    title: '搜索应用管理',
    svg: 'searchApplicationManage',
    thirdLevelMenu: true,
    children: [
        {
            index: '/searchAnalysis',
            title: '搜索分析与优化',
            svg: 'searchAnalysis',
            children: [
                {
                    index: '/search/statement',
                    key: 'search_statement',
                    title: '搜索报表',
                    secondaryMenuName: '/search',
                    need: 1
                },
                {
                    index: '/search/feedback',
                    key: 'search_feedback',
                    title: '搜索反馈',
                    secondaryMenuName: '/search',
                    need: 1
                },
                {
                    index: '/search/resultintervene',
                    key: 'search_resultintervene',
                    title: '搜索策略',
                    secondaryMenuName: '/search',
                    need: 1
                },
                {
                    index: '/search/vocabulary',
                    key: 'search_vocabulary',
                    title: '词典配置',
                    secondaryMenuName: '/search',
                    need: 1
                }
            ].filter(item => +item.need)
        },
        {
            index: '/searchManage',
            title: '搜索管理',
            svg: 'searchManage',
            children: [
                {
                    index: '/search/indexmanage',
                    key: 'search_indexmanage',
                    title: '首页管理',
                    secondaryMenuName: '/search',
                    need: 1
                },
                {
                    index: '/search/resultpagemanage',
                    key: 'search_resultpagemanage',
                    title: '结果页管理',
                    secondaryMenuName: '/search',
                    need: 1
                },
                {
                    index: '/search/detailpagemanage',
                    key: 'search_detailpagemanage',
                    title: '详情页管理',
                    secondaryMenuName: '/search',
                    need: 1
                },
                {
                    index: '/search/hotlistmanage',
                    key: 'search_hotlistmanage',
                    title: '热门管理',
                    secondaryMenuName: '/search',
                    need: 1
                },
                {
                    index: '/search/blacklistmanage',
                    key: 'search_blacklistmanage',
                    title: '黑名单管理',
                    secondaryMenuName: '/search',
                    need: 1
                }
            ].filter(item => +item.need)
        }
    ],
    need: 1
}