/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const cssManager = {
  path: '/css',
  component: Layout,
  redirect: '/css/rotate',
  name: 'CSS3',
  meta: {
    title: 'CSS3案例',
    icon: 'nested'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/css3/index1'),
      name: 'Menu1',
      meta: { title: '边框圆角背景渐变' }
    },
    {
      path: 'menu2',
      component: () => import('@/views/css3/index2'),
      name: 'Menu2',
      meta: { title: '文本效果文本溢出属性' }
    },
    {
      path: 'menu3',
      component: () => import('@/views/css3/index3'),
      name: 'Menu3',
      meta: { title: '2D转换' }
    },
    {
      path: 'menu4',
      component: () => import('@/views/css3/index4'),
      name: 'Menu4',
      meta: { title: '3D转换' }
    },
    {
      path: 'menu5',
      component: () => import('@/views/css3/index5'),
      name: 'Menu5',
      meta: { title: 'CSS3过渡' }
    },
    {
      path: 'menu6',
      component: () => import('@/views/css3/index6'),
      name: 'Menu6',
      meta: { title: 'CSS3动画' }
    },
    {
      path: 'menu7',
      component: () => import('@/views/css3/index7'),
      name: 'Menu7',
      meta: { title: '搜索框' }
    }
  ]
}

export default cssManager
