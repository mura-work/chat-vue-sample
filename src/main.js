import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/style/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

// axios.defaults.baseURL =
// "https://firestore.googleapis.com/v1/projects/" +
// process.env.VUE_APP_FIREBASE_DB + "/databases/(default)/documents"

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
