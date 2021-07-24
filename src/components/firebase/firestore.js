// import Firebase from 'firebase'
// import 'firebase/firestore'

export const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain:  process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: 'https://' + process.env.VUE_APP_PROJECT_ID + '.firebaseio.com',
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID
}

// export const config = {
//   apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
//   authDomain:  process.env.VUE_APP_PROJECT_ID + '.firebaseapp.com',
//   databaseURL: 'https://' + process.env.VUE_APP_PROJECT_ID + '.firebaseio.com',
//   projectId: process.env.VUE_APP_PROJECT_ID,
//   storageBucket: process.env.VUE_APP_PROJECT_ID + '.appspot.com',
//   messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID
// }

// const firebaseApp = Firebase.initializeApp(config, 'exercise-vue')
// const firestore = firebaseApp.firestore()
// firestore.settings({ timestampsInSnapshots: true })

// export default firestore