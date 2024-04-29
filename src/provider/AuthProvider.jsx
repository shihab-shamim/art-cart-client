import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const auth = getAuth(app);

export const AuthContext=createContext(null)


const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const [loading ,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogIn=()=>{
        setLoading(true)
         return signInWithPopup(auth,googleProvider)
    }
    const gitLogIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,gitProvider)
    }
    const logOut=()=>{
        setLoading(true)
        return  signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('user in the state changed',currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unSubscribe()
        }
             
     },[])

    const info={
        createUser,
        user,
        logIn,
        googleLogIn,
        logOut,
        loading,
        gitLogIn

    }
    return (
        <AuthContext.Provider value={info}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;