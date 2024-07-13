
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuJ0kILc-AAsD9AJWHFnQaMtq5vu3mYd8",
  authDomain: "clone-netflix-e0dc8.firebaseapp.com",
  projectId: "clone-netflix-e0dc8",
  storageBucket: "clone-netflix-e0dc8.appspot.com",
  messagingSenderId: "437557308103",
  appId: "1:437557308103:web:06aa0fc7205cbaaaa72ce2"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);


const signup =async (name, email ,password)=>{
      try{
      const res=  await createUserWithEmailAndPassword(auth,email,password);
      const user=res.user;
      await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
      }catch (error){
       console.log(error);
       alert(error);
      }
}

const login =async(email, password)=>{
  try{
        await signInWithEmailAndPassword(auth, email, password);
  } catch(error){
       console.log(error);
       alert(error);
  }
}

const logout =()=>{
  signOut(auth);
}

export {auth, db ,login ,signup ,logout};
