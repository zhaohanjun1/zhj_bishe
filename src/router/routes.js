/*所有路由配置的数组 */

import MSite from '@/pages/MSite/MSite.vue'
import Order from '@/pages/Order/Order.vue'

export default[
  {
    path:'/msite',
    component: MSite
  },
  {
    path:'/order',
    component: Order
  },
  {
    path:'/',
    redirect:'/msite'
  }
]