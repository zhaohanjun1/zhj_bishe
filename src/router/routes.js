/*所有路由配置的数组 */

import MSite from '@/pages/MSite/MSite.vue'
import Order from '@/pages/Order/Order.vue'
import Daiban from '@/pages/Daiban/Daiban.vue'
import Yiban from '@/pages/Yiban/Yiban.vue'
import Banjie from '@/pages/Banjie/Banjie.vue'

export default[
  {
    path:'/msite',
    component: MSite,
    children:[
      {
        path:'/msite/daiban',
        component: Daiban
      },
      {
        path:'/msite/yiban',
        component: Yiban
      },
      {
        path:'/msite/banjie',
        component: Banjie
      },
      {
        path:'/',
        redirect:"/msite/daiban"
      }
    ]
  },
  {
    path:'/order',
    component: Order
  },
  {
    path:'/',
    redirect:'/msite',
  }
]