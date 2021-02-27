/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const cloudCenterManager = {
  path: '/cloudCenter',
  component: Layout,
  redirect: '/css/rotate',
  name: 'cloudCenter',
  meta: {
    title: '运营管理中心',
    icon: 'nested'
  },
  children: [
    {
      path: 'cloudCenter1',
      component: () => import('@/views/cloudCenter/index1'),
      name: 'cloudCenter1',
      meta: { title: '管理页面模板' }
    },
    {
      path: 'cloudCenter2',
      component: () => import('@/views/cloudCenter/index2'),
      name: 'cloudCenter2',
      meta: { title: '对话框模板' }
    }
    // {
    //   path: 'menu3',
    //   component: () => import('@/views/css3/index3'),
    //   name: 'Menu3',
    //   meta: { title: '2D转换' }
    // },
    // {
    //   path: 'menu4',
    //   component: () => import('@/views/css3/index4'),
    //   name: 'Menu4',
    //   meta: { title: '3D转换' }
    // },
    // {
    //   path: 'menu5',
    //   component: () => import('@/views/css3/index5'),
    //   name: 'Menu5',
    //   meta: { title: 'CSS3过渡' }
    // },
    // {
    //   path: 'menu6',
    //   component: () => import('@/views/css3/index6'),
    //   name: 'Menu6',
    //   meta: { title: 'CSS3动画' }
    // },
    // {
    //   path: 'menu7',
    //   component: () => import('@/views/css3/index7'),
    //   name: 'Menu7',
    //   meta: { title: '搜索框' }
    // }
  ]
}

export default cloudCenterManager
