import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyA94MvlGM23F5oUmgtEMn5Pb2-GLb7VhkI",
  authDomain: "netflix-clone-bf14c.firebaseapp.com",
  projectId: "netflix-clone-bf14c",
  storageBucket: "netflix-clone-bf14c.appspot.com",
  messagingSenderId: "754566537993",
  appId: "1:754566537993:web:b591b70cd683ec62d469d8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);

const signup =async(name,email,password)=>{
       try{
        const res= await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user",{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        }));
       }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
       }
}

const login =async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }catch(error){
     console.log(error);
     toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout =()=>{
  signOut(auth);
}

export {auth,db,login,signup,logout};