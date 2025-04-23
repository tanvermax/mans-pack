import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.init';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [Loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    // console.log(user);





    useEffect(() => {
        // setLoading(true);

        const unsubscribe = onAuthStateChanged(auth, (currenuser) => {
            if (currenuser) {
                setUser(currenuser);
                setLoading(false);
            }
            else {
                setUser(null);
                setLoading(true)
            }
            return () => {
                return unsubscribe();
            }
        })
    })

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

    const authinfo = {
        user, handegooglelogin, Loading, logout,loginwithemail, handlenewuser, setUser
    };

    return (
        <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
    )
};

export default AuthProvider;