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
      meta: { title: 'cesium1' }
    },
    {
      path: 'cesium2',
      component: () => import('@/views/cesium/index2'),
      name: 'cesium2',
      meta: { title: 'cesium2' }
    }
  ]
}

export default cesiumManager
