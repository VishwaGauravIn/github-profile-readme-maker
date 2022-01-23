import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 

/*----------------------------------------------------
                  Firebase Attach
----------------------------------------------------*/
var firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSEGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,

});
var db = firebaseApp.firestore();
// var db = firebaseApp.firestore();

export { db };
/*----------------------------------------------------
                  Firebase Attach
----------------------------------------------------*/