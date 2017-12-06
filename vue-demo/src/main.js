// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import home from './components/home/home.vue'
import header from './components/header/header.vue'
import star from './components/star.vue'
import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
  path: '/',
  component: home
}, {
  path: '/header',
  component: header
}];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
