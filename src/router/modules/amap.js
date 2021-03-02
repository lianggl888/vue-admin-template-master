/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const amapManager = {
  path: '/amap1',
  component: Layout,
  redirect: '/css/rotate',
  name: 'amap1',
  meta: {
    title: 'amap1',
    icon: 'nested'
  },
  children: [
    {
      path: 'amap1_1',
      component: () => import('@/views/amap/index1'),
      name: 'amap1_1',
      meta: { title: 'amap1_1' }
    },
    {
      path: 'amap1_2',
      component: () => import('@/views/amap/index1'),
      name: 'amap1_2',
      meta: { title: 'amap1_2' }
    }
  ]
}

export default amapManager
