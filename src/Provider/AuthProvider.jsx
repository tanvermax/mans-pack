import { createUserWithEmailAndPassword, deleteUser, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.init';
import useaxiospublic from '../Hook/useaxiospublic';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [Loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const axiosPublic = useaxiospublic();
    // console.log(user);


// console.log(user);



useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      
      if (currentUser) {
        setUser(currentUser);
        const userInfo = { email: currentUser.email };
        console.log(userInfo);
  
        try {
          const res = await axiosPublic.post("/jwt", userInfo);
          console.log("JWT Response:", res.data);
          if (res.data.token) {
            // console.log(res);
            localStorage.setItem("access-token", res.data.token);
            console.log("Token saved:", res.data.token);
          }
          else {
            console.error("No token found in response");
          }
        } catch (error) {
          console.error("JWT error:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setUser(null);
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
  
    return () => unsubscribe();
  }, [axiosPublic]);
  
    

    // googlelogin 
    const handegooglelogin = () => {

        return signInWithPopup(auth, googleProvider);
    };

    // logout
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };


    const handlenewuser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginwithemail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    //   const deleteUser1 = () => {
    //     return deleteUser(user);
    //   };
    const authinfo = {
        user, handegooglelogin, Loading, logout, loginwithemail, handlenewuser, setUser
    };

    return (
        <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
    )
};

export default AuthProvider;