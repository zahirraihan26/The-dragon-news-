import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export const AuthContext=createContext()
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    console.log(user)

    const creatUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logout =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,(currentuser)=>{ 
            setuser(currentuser)
          })
          return ()=>{
            unsubscribe()
          }
    },[])

    const authData ={
        user,
        setuser,
        creatUser,
        logout,
        signIn,
        googleLogin
    }
    return <AuthContext value={authData}>{children} </AuthContext>
};

export default AuthProvider;