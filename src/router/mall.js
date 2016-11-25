import VueRouter from 'vue-router'

const Mall = resolve => require(['src/pages/mall/index/Index.vue'], resolve)
export default{
  path: '/mall', 
  component: Mall,
    children: []
}