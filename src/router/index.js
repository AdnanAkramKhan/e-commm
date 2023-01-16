import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '../views/ProductDetail.vue'
import CategoryProduct from '../views/CategoryProduct.vue'
import SearchView from '../views/SearchView.vue'
import AddCart from '../views/AddCart.vue'
import CategoryView from '../views/CategoryView.vue'
import AddProduct from '../views/AddProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },

{
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/product_detail',
    name: 'product_detail',
    component: ProductDetail
  },
  {
    path: '/add_product',
    name: 'AddProduct',
    component: AddProduct
  },
  
  {
    path: '/searchview/:id',
    name: 'SearchView',
    component: SearchView
  },
  {
    path: '/category_product',
    name: 'category_product',
    component: CategoryProduct
  },
  {
    path: '/category',
    name: 'CategoryView',
    component: CategoryView
  },
  {
    path: '/add_cart/:id',
    name: 'AddCart',
    component: AddCart
  },
]

const router = new VueRouter({
  routes
})

export default router
