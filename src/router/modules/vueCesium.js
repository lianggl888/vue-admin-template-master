/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const vueCesiumManager = {
  path: '/vuecesium',
  component: Layout,
  redirect: '/css/rotate',
  name: 'vuecesium',
  meta: {
    title: 'vuecesium',
    icon: 'nested'
  },
  children: [
    {
      path: 'vuecesium1',
      component: () => import('@/views/cesium-vue/index1'),
      name: 'vuecesium1',
      meta: { title: 'vue-cesium组件使用1' }
    },
    {
      path: 'vuecesium2',
      component: () => import('@/views/cesium/index2'),
      name: 'vuecesium2',
      meta: { title: 'vue-cesium组件使用2' }
    }
  ]
}

export default vueCesiumManager
