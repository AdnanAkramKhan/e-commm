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
  //router for home
  {
    path: '/',
    name: 'home',
    component: HomeView 
  },
  //router for login

{
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  //router for product detail
  {
    path: '/product_detail',
    name: 'product_detail',
    component: ProductDetail
  },
  //router for new product
  {
    path: '/add_product',
    name: 'AddProduct',
    component: AddProduct
  },
  //router for search product
  {
    path: '/searchview/:id',
    name: 'SearchView',
    component: SearchView
  },
  //router for single category
  {
    path: '/category_product',
    name: 'category_product',
    component: CategoryProduct
  },
  //router for all category
  {
    path: '/category',
    name: 'CategoryView',
    component: CategoryView
  },
  //router for new cart
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
