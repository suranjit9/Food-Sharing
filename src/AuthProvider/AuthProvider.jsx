import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxious from "../Hook/BaseUrl/useAxious";






const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loder, setLoder]= useState(true);
    const googleProvider = new GoogleAuthProvider();
    const GitHubSinUP = new GithubAuthProvider();
    const baseUrl = useAxious();

    // console.log('Auth',user);
    const userCreate =(email, password)=>{
        setLoder(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singIn =(email, password)=>{
        setLoder(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut =()=>{
        setLoder(true);
        return signOut(auth);
    }
    const passwordRestor = email =>{
        setLoder(true);
        return sendPasswordResetEmail(auth,email);
    }
    const googleSingup = ()=>{
        setLoder(true);
        return signInWithPopup(auth,googleProvider);
    }
    const gitSingUp = ()=>{
        setLoder(true);
        return signInWithPopup(auth,GitHubSinUP);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUsere =>{
            const userEmail = currentUsere?.email || user?.email;
            const logUser = {email: userEmail};
            setUser(currentUsere);
            // console.log('currntUser',currentUsere );
            setLoder(false);
            if (currentUsere) {
               
                baseUrl.post("/jwt",logUser)
                .then(res => console.log(res.data))
            }else(
                baseUrl.post('/logout',logUser)
                .then(res=> console.log(res.data))
            )
        });
        return ()=>{unsubscribe();} 
    },[baseUrl])

    // Export EveryWhere
    const authInfo ={
        user,
        loder,
        userCreate,
        singIn,
        logOut,
        passwordRestor,
        googleSingup,
        gitSingUp
       
    };
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.node,
}
export default AuthProvider;
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);