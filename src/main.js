import Vue from 'vue'
import App from './App.vue'

import VuexApp from "@/vuex/VuexApp"
import { store } from "./store"

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(VuexApp),
}).$mount('#vuex-app')
