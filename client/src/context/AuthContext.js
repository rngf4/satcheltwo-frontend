import { useContext, createContext, useEffect, useState } from 'react';
import { useGetUser } from '../services/api';
import {
    GoogleAuthProvider,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    getAuth,

} from 'firebase/auth';
import { auth } from '../firebase';


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const userData = useGetUser()

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    };

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (user) {
                setUser(currentUser);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ auth, googleSignIn, logOut, user, userData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
