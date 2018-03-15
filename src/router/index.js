import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import about from '@/components/about'
import of from '@/components/of'
import online from '@/components/online'

Vue.use(Router)

const routes = [
  {path: '/', component: index, name: '仲景养汇城'},
  {path: '/index', component: index, name: '仲景养汇城'},
  {path: '/about', component: about, name: '仲景养汇城关于我们'},
  {path: '/of', component: of, name: '仲景养汇城公司产品'},
  {path: '/online', component: online, name: '仲景养汇城在线商城'}
]

export default new Router({
  routes
})
