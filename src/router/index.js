// 1.导入Vue、VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件，懒加载
const Home = ()=> import('../views/home/Home')
const Category = ()=> import('../views/category/Category')
const Cart = ()=> import('../views/cart/Cart')
const Profile = ()=> import('../views/profile/Profile')

// 2.通过Vue使用VueRouter
Vue.use(VueRouter)

// 3.创建VueRouter对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    // 注意是component
    component: Home
  },
  {
    path: '/category',
    // 注意是component
    component: Category
  },
  {
    path: '/cart',
    // 注意是component
    component: Cart
  },
  {
    path: '/profile',
    // 注意是component
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 4.导出router
export default router

