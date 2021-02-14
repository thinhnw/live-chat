import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA7_YtoLfXaQ8PXy7Hpof_OMCjJEk-UVR0",
    authDomain: "udemy-vue-firebase-sites-a9631.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-a9631",
    storageBucket: "udemy-vue-firebase-sites-a9631.appspot.com",
    messagingSenderId: "586973348432",
    appId: "1:586973348432:web:d45338fa7c0687e1854755"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFiresoter = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFiresoter, timestamp }