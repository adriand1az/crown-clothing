import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCo42RM8FwzXO4hKwlGuIxEkfNYou7mTi4",
    authDomain: "crown-db-diaz.firebaseapp.com",
    projectId: "crown-db-diaz",
    storageBucket: "crown-db-diaz.appspot.com",
    messagingSenderId: "901196377729",
    appId: "1:901196377729:web:4d5ebc1d936adb26502780",
    measurementId: "G-8XGKREVB87"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    console.log(snapShot)

    if (!snapShot){
        const { displayName, email} = userAuth;
        const createdAt = new Date()
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            })

        } catch (error){
            console.log('eror creating user', error.message)
        }
    }

    return userRef;
}
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;