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

export const createUserProfileDocument = async (userAuth, additionaData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exist) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionaData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;