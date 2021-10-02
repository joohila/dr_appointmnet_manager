import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA7dMdOq_n42SndhgqJXDQ9aPMRdR7BRcM",
  authDomain: "joohila-dr-appointment-manager.firebaseapp.com",
  projectId: "joohila-dr-appointment-manager",
  storageBucket: "joohila-dr-appointment-manager.appspot.com",
  messagingSenderId: "147552496400",
  appId: "1:147552496400:web:1dabeb88750986b6b61395"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage};
