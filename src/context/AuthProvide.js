import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();
export const ThemeContext = createContext();

const auth = getAuth(app)

const hour = new Date().getHours()
  const minutes = new Date().getMinutes()
  const time = {
    hour,
    minutes
  }

const AuthProvide = ({children}) => {

    const [theme, setTheme] = useState("light");
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [services, setServices] = useState([])
  
    const [loading, setLoading] = useState(true)
    const createUser = (email, password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    }
  
    const signInWithEmailPassword = (email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    const logOut = ()=>{
      localStorage.removeItem('photography')
      signOut(auth)
      .then(()=>{
        console.log('log out success')
      })
      .catch(error => {
        console.log(error.message)
      })
    }
  
    const googleLogin = (googleProvider)=>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = (githubProvider)=>{
      setLoading(true)
      return signInWithPopup(auth, githubProvider)
    }


    const updateUserProfile =(profile)=>{
        setLoading(true)
       return updateProfile(auth.currentUser, profile)
      }

      const resetPassword = (email) => {
        console.log(email)
        return sendPasswordResetEmail(auth, email);
      };

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
          setUser(currentUser)
          setLoading(false)
        })
        return ()=>{
          unsubscribe();
        }
      },[])
    
    const authInfo = {user ,createUser , signInWithEmailPassword, googleLogin,githubLogin, updateUserProfile, logOut, resetPassword, loading, error, setError, services, setServices, time}
  return (
    <AuthContext.Provider value={authInfo}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvide;
