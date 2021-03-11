/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const cesiumManager = {
  path: '/cesium',
  component: Layout,
  redirect: '/css/rotate',
  name: 'cesium',
  meta: {
    title: 'cesium',
    icon: 'nested'
  },
  children: [
    {
      path: 'cesium1',
      component: () => import('@/views/cesium/index1'),
      name: 'cesium1',
      meta: { title: '设置初始位置' }
    },
    {
      path: 'cesium2',
      component: () => import('@/views/cesium/index2'),
      name: 'cesium2',
      meta: { title: '简单地球' }
    },
    {
      path: 'cesium3',
      component: () => import('@/views/cesium/index3'),
      name: 'cesium3',
      meta: { title: '全球地形' }
    },
    {
      path: 'cesium4',
      component: () => import('@/views/cesium/index4'),
      name: 'cesium4',
      meta: { title: 'home按钮监听事件' }
    },
    {
      path: 'cesium5',
      component: () => import('@/views/cesium/index5'),
      name: 'cesium5',
      meta: { title: '飞机飞行' }
    },
    {
      path: 'cesium6',
      component: () => import('@/views/cesium/index6'),
      name: 'cesium6',
      meta: { title: '信息弹窗' }
    }
  ]
}

export default cesiumManager
