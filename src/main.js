import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/style/tailwind.css'
// import { firestorePlugin } from 'vuefire'
import Firebase from 'firebase'
// import config from './components/firebase/firestore'

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain:  process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DB,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
}

// const firebaseApp = Firebase.initializeApp(config, 'exercise-vue')
const firebaseApp = Firebase.initializeApp(config)
export const db = firebaseApp.firestore()
// db.settings({ timestampsInSnapshots: true })

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
