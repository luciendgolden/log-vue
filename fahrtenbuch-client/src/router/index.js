import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Vehicles from '@/components/Vehicles';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/vehicles',
      name: 'Vehicles',
      component: Vehicles,
    },
  ],
});
