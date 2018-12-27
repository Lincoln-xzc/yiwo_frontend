import Vue from 'vue';
import Router from 'vue-router';
import { CURRENTUSER, TOKEN } from '../store/types';
import store from '@/store/store';
import {GetUserInfo} from '@/services/getData';
import {MessageBox} from 'element-ui';

Vue.use(Router);

function loadView(view){
  return () => import(`@/views/${view}.vue`);
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: loadView("Index"),
      redirect: "/user",
      children:[
        {
          path: 'user',
          name: 'user',
          component: loadView('User/List'),
          meta:{
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: loadView("Login")
    },
    {
      path: '/register',
      name: 'register',
      component: loadView('Register')
    }
  ]
});

const token = localStorage.getItem("token");
const currentUser = localStorage.getItem("currentUser"); 
if(token){
  store.commit(TOKEN, token);
}

if(currentUser){
  store.commit(CURRENTUSER, JSON.parse(currentUser));
}


router.beforeEach((to, from, next) => {
  console.log(to);
  if(to.matched.some(r=>r.meta.requiresAuth)){
    if(store.state.currentUser && store.state.currentUser.id){
      next();
    }else{
      GetUserInfo().then((response)=>{
          let userInfo = response.data;
          store.commit(CURRENTUSER, userInfo);
          localStorage.setItem('currentUser', JSON.stringify(userInfo));
      }).catch((error)=>{
          MessageBox.alert('授权码过期，请重新登录', '未授权', {
              confirmButtonClass: '登录',
              callback: action => {
                  localStorage.clear();
                  next({
                    path: "/login"
                  });
              }
          });
      });
    }
  }else{
    next();
  }
  next();
  //进行权限的一些判断
});

export default router;
