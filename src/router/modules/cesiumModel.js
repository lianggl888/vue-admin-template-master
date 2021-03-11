/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const cesiumModelManager = {
  path: '/cesium-model',
  component: Layout,
  redirect: '/css/rotate',
  name: 'cesium-model',
  meta: {
    title: 'cesium-model',
    icon: 'nested'
  },
  children: [
    {
      path: 'cesium-model1',
      component: () => import('@/views/cesium-model/index1'),
      name: 'cesium-model1',
      meta: { title: 'cesium-model' }
    },
    {
      path: 'cesium-model2',
      component: () => import('@/views/cesium-model/index2'),
      name: 'cesium-model2',
      meta: { title: '信息弹窗' }
    },
    {
      path: 'cesium-model3',
      component: () => import('@/views/cesium/index3'),
      name: 'cesium-model3',
      meta: { title: '信息弹窗' }
    },
    // {
    //   path: 'cesium4',
    //   component: () => import('@/views/cesium/index4'),
    //   name: 'cesium4',
    //   meta: { title: 'home按钮监听事件' }
    // },
    // {
    //   path: 'cesium5',
    //   component: () => import('@/views/cesium/index5'),
    //   name: 'cesium5',
    //   meta: { title: '飞机飞行' }
    // }
  ]
}

export default cesiumModelManager
