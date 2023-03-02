const d={
    index: '/system',
    title: '系统管理',
    svg: 'systemManage',
    thirdLevelMenu: true,
    children: [
        {
            index: '/userPermissions',
            title: '用户权限管理',
            svg: 'userPermissions',
            children: [
                {
                    index: '/userPermissions/user',
                    key: 'userPermissions_user',
                    title: '用户管理',
                    secondaryMenuName: '/system',
                    need: 1
                },
                {
                    index: '/userPermissions/organization',
                    key: 'userPermissions_organization',
                    title: '机构管理',
                    secondaryMenuName: '/system',
                    need: tenantUrlPrefix ? 0 : 1
                },
                {
                    index: '/userPermissions/role',
                    key: 'userPermissions_role',
                    title: '角色管理',
                    secondaryMenuName: '/system',
                    need: 1
                },
                {
                    index: '/userPermissions/data',
                    key: 'userPermissions_data',
                    title: '数据权限',
                    secondaryMenuName: '/system',
                    need: 1
                }
            ].filter(item => +item.need)
        },
        {
            index: '/other',
            title: '其他',
            svg: 'systemOthers',
            children: [
                {
                    index: '/system/approval',
                    key: 'system_approval',
                    title: '审核管理',
                    secondaryMenuName: '/system',
                    need: 1
                },
                {
                    index: '/system/log',
                    key: 'system_log',
                    title: '日志管理',
                    secondaryMenuName: '/system',
                    need: 1
                },
                {
                    index: '/system/operation',
                    key: 'system_operation',
                    title: '运维管理',
                    secondaryMenuName: '/system',
                    need: tenantUrlPrefix ? 0 : 1
                }
            ].filter(item => +item.need)
        }
    ],
    need: 1
}