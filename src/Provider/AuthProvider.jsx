import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.init';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [Loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    console.log(user);





    useEffect(()=>{
        // setLoading(true);
        
        const unsubscribe = onAuthStateChanged(auth, (currenuser)=>{
            if (currenuser) {
                setUser(currenuser);
                setLoading(false);
            }
            else{
                setUser(null);
                setLoading(true)
            }
            return()=>{
                return unsubscribe();
            }
        })
    })

// googlelogin 
    const handegooglelogin = () => {

        return signInWithPopup(auth, googleProvider);
    };


    const authinfo = {
        user, handegooglelogin, Loading
    };

    return (
        <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
    )
};

export default AuthProvider;