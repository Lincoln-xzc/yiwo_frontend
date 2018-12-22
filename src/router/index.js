import Vue from 'vue';
import Router from 'vue-router';

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
      children:[
        {
          path: 'home',
          name: 'home',
          component: loadView('home/Home')
        },
        /** 
         * 教学模式
        */
        {
          path: 'mode',
          name: 'mode',
          component: loadView("teach/TeachMode")
        },
        /** 
         * 学生成果
        */
        {
          path: 'achievement',
          name: 'achievement',
          component: loadView("student/Achievement")
        },
        /** 
         * arduino 创作
        */
        {
          path: 'arduino',
          name: 'arduino',
          component: loadView("create/Arduino")
        },
        /** 
         * mc 创作
        */
        {
          path: 'create/mc',
          name: 'createMc',
          component: loadView("create/MC")
        },
        /** 
         * oj 创作
        */
        {
          path: 'oj',
          name: 'oj',
          component: loadView("create/OJ")
        },
        /** 
         * picoboard 创作
        */
        {
          path: 'picoboard',
          name: 'picoboard',
          component: loadView("create/Picoboard")
        },
        /** 
         * python 创作
        */
        {
          path: 'python',
          name: 'python',
          component: loadView("create/Python")
        },
        /** 
         * scratch 创作
        */
        {
          path: 'scratch',
          name: 'scratch',
          component: loadView("create/Scratch")
        },
        /** 
         * 社群活动
        */
        {
          path: 'communityActivity',
          name: 'communityActivity',
          component: loadView("community/CommunityActivity")
        },
        /** 
         * 资讯中心
        */
        {
          path: 'informationCentre',
          name: 'informationCentre',
          component: loadView("community/InformationCentre")
        },
        /** 
         * mc 社区
        */
        {
          path: 'community/Mc',
          name: 'mc',
          component: loadView("community/Mc")
        },
        {
          path: 'about',
          name: 'about',
          component: loadView("about/about")
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({name: from.name}) : next('/');
  } else {
    next();
  }
  //进行权限的一些判断
});

export default router;
