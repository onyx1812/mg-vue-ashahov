import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMeta from 'vue-meta'

Vue.config.productionTip = false;
Vue.use(VueMeta)

new Vue({
  router,
  store,
  metaInfo() {
    return {
      title: "Опросник",
      // link: [
      //   {
      //     rel: 'shortcut icon',
      //     type: 'image/png',
      //     href: require('@/assets/img/favicon.png')
      //   }
      // ],
      meta: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          name: 'copyright',
          content: ''
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: ''
        },
        {
          name: 'viewport',
          content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'
        },
        {
          name: 'author',
          content: 'MaxGloba'
        },
        {
          name: 'theme-color',
          content: '#fff'
        }
      ]
    }
  },
  render: (h) => h(App),
}).$mount('#app');
