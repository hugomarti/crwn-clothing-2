import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVk6m9ah2crP5FAVk4pMNATHq_9x0zhrc",
    authDomain: "crwn-db-86619.firebaseapp.com",
    databaseURL: "https://crwn-db-86619.firebaseio.com",
    projectId: "crwn-db-86619",
    storageBucket: "crwn-db-86619.appspot.com",
    messagingSenderId: "115870999812",
    appId: "1:115870999812:web:238ffd05ec5749785ddc51"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;