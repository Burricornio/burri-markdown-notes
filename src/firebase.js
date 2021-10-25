// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app'

// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: 'burri-markdown-notes.firebaseapp.com',
  projectId: 'burri-markdown-notes',
  storageBucket: 'burri-markdown-notes.appspot.com',
  messagingSenderId: '265570443613',
  appId: '1:265570443613:web:f9e38a572533c587d648b4'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

export { firebase, auth, db }
