import VueRouter from 'vue-router'

const Home = resolve => require(['src/pages/Home/Home/Home.vue'], resolve)
const Foo = resolve => require(['src/pages/Home/Hello/Hello.vue'], resolve)
const Bar = { template: '<div>bar</div>' }
const Tab = resolve => require(['src/pages/Home/Tab/Tab.vue'], resolve)
const UserProfile = { template: '<h2>UserProfile</h2>' }
const UserPosts = { template: '<h2>UserPosts</h2>' }
const App = resolve => require(['src/pages/Home/App.vue'], resolve)

export default {
  path: '/',
  component: App,
  children: [
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
    }
  ]
}