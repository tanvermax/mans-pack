import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { app } from '../Firebase/Firebase.init';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [Loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    console.log(user);


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