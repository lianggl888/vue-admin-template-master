/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const cesiumEntityManager = {
  path: '/cesium-entity',
  component: Layout,
  redirect: '/css/rotate',
  name: 'cesium-entity',
  meta: {
    title: 'cesium-entity',
    icon: 'nested'
  },
  children: [
    {
      path: 'cesium-entity1',
      component: () => import('@/views/cesiumEntiy/index1'),
      name: 'cesium-entity1',
      meta: { title: '汽车' }
    },
    {
      path: 'cesium-entity2',
      component: () => import('@/views/cesiumEntiy/index2'),
      name: 'cesium-entity2',
      meta: { title: '汽车轨迹移动' }
    }
  ]
}

export default cesiumEntityManager
