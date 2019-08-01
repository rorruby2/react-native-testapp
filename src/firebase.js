import firebase from 'firebase';
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBcm266Y6lPJ4ihGMDaKoSGR4Ec-M7mvXQ",
    authDomain: "reactnative-240707.firebaseapp.com",
    databaseURL: "https://reactnative-240707.firebaseio.com",
    projectId: "reactnative-240707",
    storageBucket: "reactnative-240707.appspot.com",
    messagingSenderId: "452272384678",
    appId: "1:452272384678:web:cf32ed1cd93c4bac"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase; 
// export default class Firebase{
//     static auth;
//     static init(){
//         firebase.initializeApp(firebaseConfig);
//         Firebase.auth = firebase.auth();
//     }
// }