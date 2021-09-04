
// Import the functions you need from the SDKs you need
  import firebase from "firebase";
  
// Your web app's Firebase configuration
 const config = {
  apiKey: "AIzaSyCBtjaiIpFgt25Kilqh9lOk32jtxGdhQt4",
  authDomain: "live-help-8d5a8.firebaseapp.com",
  projectId: "live-help-8d5a8",
  storageBucket: "live-help-8d5a8.appspot.com",
  messagingSenderId: "41927993975",
  appId: "1:41927993975:web:11efce9cb844260ea43472"
};

// Initialize Firebase
firebase.initializeApp(config);


// exportando o banco de dados
export default firebase;