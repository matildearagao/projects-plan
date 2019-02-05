import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDWJqsFfd-7fzLbicqNzScAHdw3GIMhRyM",
    authDomain: "projects-plan.firebaseapp.com",
    databaseURL: "https://projects-plan.firebaseio.com",
    projectId: "projects-plan",
    storageBucket: "projects-plan.appspot.com",
    messagingSenderId: "1041722108576"
};
firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true})
export default firebase;