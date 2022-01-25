import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

/*----------------------------------------------------
                  Firebase Attach
----------------------------------------------------*/
var firebaseApp = firebase.initializeApp({
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
});
var db = firebaseApp.firestore();
// var db = firebaseApp.firestore();

export { db };
/*----------------------------------------------------
                  Firebase Attach
----------------------------------------------------*/
