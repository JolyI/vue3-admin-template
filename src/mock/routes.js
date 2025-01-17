export const adminRoutes = [
  {
    path: '/contract',
    children: [
      {
        path: 'add',
        title: '新增合同'
      },
      {
        path: 'edit',
        title: '编辑合同'
      },
      {
        path: 'add',
        title: '查看合同'
      },
      {
        path: 'list',
        title: '合同列表'
      },
      {
        path: 'detaillist',
        title: '合同明细列表'
      },
      {
        path: 'fentan',
        title: '分摊'
      },
      {
        path: 'paymentapplydetail',
        title: '付款详情'
      },
    ]
  },
  {
    path: '/clipboard',
    children: [
      {
        path: 'index',
        title: 'Clipboard'
      }
    ]
  },
  {
    path: '/markdown',
    children: [
      {
        path: 'index',
        title: 'Markdown'
      }
    ]
  },
  {
    path: '/excel',
    children: [
      {
        path: 'export-excel',
        title: 'Export Excel'
      },
      {
        path: 'export-selected-excel',
        title: 'Export Selected'
      },
      {
        path: 'merge-header',
        title: 'Merge Header'
      },
      {
        path: 'upload-excel',
        title: 'Upload Excel'
      }
    ],
    title: 'Excel'
  },
  {
    path: '/dom-to-image',
    children: [
      {
        path: 'index',
        title: 'DomToImage'
      }
    ]
  },
  {
    path: '/external-link',
    children: [
      {
        path: 'https://github.com/zhihuifanqiechaodan/vue3-admin-template',
        title: 'External Link'
      }
    ]
  },
  {
    path: '/permission',
    children: [
      {
        path: 'role',
        title: 'Permission'
      }
    ]
  }
]
export const editorRoutes = [
  {
    path: '/clipboard',
    children: [
      {
        path: 'index',
        title: 'Clipboard'
      }
    ]
  },
  {
    path: '/markdown',
    children: [
      {
        path: 'index',
        title: 'Markdown'
      }
    ]
  },
  {
    path: '/dom-to-image',
    children: [
      {
        path: 'index',
        title: 'DomToImage'
      }
    ]
  },
  {
    path: '/external-link',
    children: [
      {
        path: 'https://github.com/zhihuifanqiechaodan/vue3-admin-template',
        title: 'External Link'
      }
    ]
  }
]
