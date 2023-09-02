// firebase core
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDAtiJiCzzCRvl7-DbJqDoeNLv2o3aK8t0",
    authDomain: "medi-store-eef3b.firebaseapp.com",
    projectId: "medi-store-eef3b",
    storageBucket: "medi-store-eef3b.appspot.com",
    messagingSenderId: "102430235092",
    appId: "1:102430235092:web:1b6991d34b84a154011e41"
  };

  firebase.initializeApp(firebaseConfig)
  const projectFirestore = firebase.firestore()

  export { projectFirestore }
