import Vue from 'vue'
import VueRouter from 'vue-router'
import Mall from './mall' //商城项目
import Home from './home' //首页项目

Vue.use(VueRouter)

//Create the router
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    // to 和 from 都是 路由信息对象
  },	
  mode: 'history',
  base: __dirname,
  routes: [
    Home,
    Mall
  ]
})

router.beforeEach((to, from, next) => {
  // to 和 from 都是 路由信息对象
  next();
})


export default router
