import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../Config.firebase';
import { UserContext } from '../../../App';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    firebase.initializeApp(firebaseConfig);
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const {displayName, email} = result.user;
            const singInUser = {name: displayName, email}
            setLoggedInUser(singInUser)
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
    }
    return (
        <div className="row">
            <div className="col-md-6">
                <h2>google sign in </h2>
                <button onClick={handleGoogleSignIn} className="btn btn-primary">google sign in</button>
            </div>
            <div className="col-md-6"></div>
            
        </div>
    );
};

export default Login;