import React, {createContext, useState} from 'react';
import firebase from 'firebase/app'
import {UserCredential} from "@firebase/auth";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

interface AuthContextInterface {
    user: UserCredential | null;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
}


export const AuthContext = createContext<AuthContextInterface>({
    user: null,
    signInWithGoogle: async () => {},
    signOut: async() => {}
})


interface AuthProviderProps  {
    children: any
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<UserCredential | null>(null);

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                console.log(result.user)
                return result.user;
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }


    const signOut = async () => {
        await signOut()
    }

    return <AuthContext.Provider value={{user, signInWithGoogle, signOut}}>{children}</AuthContext.Provider>

}