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
    },
    {
      path: 'cesium-entity3',
      component: () => import('@/views/cesiumEntiy/index3'),
      name: 'cesium-entity3',
      meta: { title: '几何图形' }
    },
    {
      path: 'cesium-entity4',
      component: () => import('@/views/cesiumEntiy/index4'),
      name: 'cesium-entity4',
      meta: { title: '高德影像底图' }
    },
    {
      path: 'cesium-entity5',
      component: () => import('@/views/cesiumEntiy/index5'),
      name: 'cesium-entity5',
      meta: { title: '高德街道底图' }
    },
    {
      path: 'cesium-entity6',
      component: () => import('@/views/cesiumEntiy/index6'),
      name: 'cesium-entity6',
      meta: { title: 'CZML实时数据实体运动' }
    },
    {
      path: 'cesium-entity7',
      component: () => import('@/views/cesiumEntiy/index7'),
      name: 'cesium-entity7',
      meta: { title: 'CZML实时数据实体运动2' }
    },
    {
      path: 'cesium-entity8',
      component: () => import('@/views/cesiumEntiy/index8'),
      name: 'cesium-entity8',
      meta: { title: 'CZML实时数据实体运动3' }
    },
    {
      path: 'cesium-entity9',
      component: () => import('@/views/cesiumEntiy/index9'),
      name: 'cesium-entity9',
      meta: { title: '实时更新雷达位置' }
    },
    {
      path: 'cesium-entity10',
      component: () => import('@/views/cesiumEntiy/index10'),
      name: 'cesium-entity10',
      meta: { title: 'CZML模型转向' }
    }
  ]
}

export default cesiumEntityManager
