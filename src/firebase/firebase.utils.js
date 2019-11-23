import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { async } from 'q';

var firebaseConfig = {
    apiKey: "AIzaSyCa_rg3RQjr7BBn_p1htACdzjCLR0ErYBo",
    authDomain: "udemy-react-dev-d99c1.firebaseapp.com",
    databaseURL: "https://udemy-react-dev-d99c1.firebaseio.com",
    projectId: "udemy-react-dev-d99c1",
    storageBucket: "udemy-react-dev-d99c1.appspot.com",
    messagingSenderId: "101080517614",
    appId: "1:101080517614:web:a985f612886ad9e2a59cff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return 

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message);
      
    }
  }

  return userRef
  // console.log(snapShot);
  
}