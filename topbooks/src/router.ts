import Vue from 'vue';
import Router from 'vue-router';
//views
import Home from './views/Home.vue';
import Magic from './views/Magic.vue';
import Swordsman from './views/Swordsman.vue';
import Romance from './views/Romance.vue';
import History from './views/History.vue';
import Games from './views/Games.vue';
import Science from './views/Science.vue';
import Terror from './views/Terror.vue';
import Girls from './views/Girls.vue';
import Others from './views/Others.vue';
import Allss from './views/Allss.vue';
import UserBooks from './views/UserBooks.vue';




//components
import Navs from './components/Navs.vue';


//alls


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },{
      path: '/magic',
      name: 'magic',
      component: Magic,
    },{
      path: '/swordsman',
      name: 'swordsman',
      component: Swordsman,
    },{
      path: '/romance',
      name: 'romance',
      component: Romance,
    },{
      path: '/history',
      name: 'history',
      component: History,
    },{
      path: '/games',
      name: 'games',
      component: Games,
    },{
      path: '/science',
      name: 'science',
      component: Science,
    },{
      path: '/terror',
      name: 'terror',
      component: Terror,
    },{
      path: '/girls',
      name: 'girls',
      component: Girls,
    },{
      path: '/others',
      name: 'others',
      component: Others,
    },{
      path: '/allss',
      name: 'allss',
      component: Allss,
    },{
      path: '/userbooks',
      name: 'userbooks',
      component: UserBooks,
    },{
      path: '/navs',
      name: 'navs',
      component: Navs,
    },
  ],
});
