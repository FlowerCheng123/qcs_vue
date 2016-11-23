import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. Define route components
const Home = resolve => require(['./pages/Home/Home.vue'], resolve)
const Foo = resolve => require(['./pages/Hello/Hello.vue'], resolve)
const Bar = { template: '<div>bar</div>' }
const Tab = resolve => require(['./pages/Tab/Tab.vue'], resolve)
const UserProfile = { template: '<h2>UserProfile</h2>' }
const UserPosts = { template: '<h2>UserPosts</h2>' }
const Mall = resolve => require(['./pages/mall/index/Index.vue'], resolve)



// 3. Create the router
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    // to 和 from 都是 路由信息对象
  },	
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/tab', component: Tab, 
        children: [
	        {
	          path: 'profile',
	          component: UserProfile
	        },
	        {
	          path: 'posts',
	          component: UserPosts
	        }
	    ]
    },{
      path: '/mall', 
      component: Mall,
        children: [
          {
            path: 'profile',
            component: UserProfile
          }
        ]
    }

  ]
})

router.beforeEach((to, from, next) => {
  // to 和 from 都是 路由信息对象
  next();
})


export default router
