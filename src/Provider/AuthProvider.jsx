import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext=createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    console.log(user)

    const creatUser=(email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password)
    };

    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
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
        signIn
    }
    return <AuthContext value={authData}>{children} </AuthContext>
};

export default AuthProvider;