import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import NavMenu from "../components/home/NavMenu"
import Home from "../components/Home";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      component: Login,
    },
    {
      path: '/NavMenu',
      component: NavMenu,
    },
    {
      path: '/Home',
      component: Home,
    }
  ]
})
