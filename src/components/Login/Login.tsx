import React, {useContext} from "react";
import "firebase/auth";
import { PoweroffOutlined } from '@ant-design/icons';
import {Button} from "antd";
import {AuthContext} from "../auth/AuthProvider";




const SignInWithGoogleButton: React.FC = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const handleSignInWithGoogle = async () => {
        await signInWithGoogle();
        // any additional logic to handle successful sign-in
    };
/*
    const handleSignInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
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

    };
    */

    return (
        <Button
            type="default"
            icon={<PoweroffOutlined />}
            onClick={handleSignInWithGoogle}
            size={"large"}
        >Sign In With Google</Button>
    );


};






export default SignInWithGoogleButton;

