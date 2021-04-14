

import Vue from "vue";
import VueRouter from 'vue-router';

import App from "./App.vue";
import Sing from "./components/Sing.vue";
import Item from "./components/Item.vue";
import Show from "./components/Show.vue";
Vue.use(VueRouter);

const routes = [
  {
    name: "Sing",
    path: "/Sing",
    component: Sing
  },
  {
    name: "Item",
    path: "/Item",
    component: Item
  },
  {
    name: "Show",
    path: "/Show",
    component: Show
  },
 
];

const router = new VueRouter({ mode: "history", routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");