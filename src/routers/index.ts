import { createWebHashHistory, createRouter } from 'vue-router'

import PesudoClasses from '../pages/pesudo-classes.vue'

const routes = [
  { path: '/pesudo-classes', component: PesudoClasses },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router