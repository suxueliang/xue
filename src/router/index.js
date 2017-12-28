import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login/login'
import Main from '@/views/Main/main'
import Article from '@/components/Article/article'
import Article1 from '@/views/Main/article_one'
import Article2 from '@/views/Main/article_two'
import '../../static/css/style.css'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component:Main,
      children:[
        {
          path:'article1',
          name:'Article1',
          component:Article1
        },
        {
          path:'article2',
          name:'Article2',
          component:Article2
        }
      ]
    }
  ]
})
