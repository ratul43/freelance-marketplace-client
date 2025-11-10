import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { toast } from 'react-toastify';

const AuthProvider = ({children}) => {

        const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

            const googleProvider = new GoogleAuthProvider()




    const signUpNewUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user = userCredential.user 
            
        })
        
    }



    const updateUserProfile =  (name, photo) => {

        const user = auth.currentUser
        
        
       return updateProfile(user, {
            displayName: name,
            photoURL: photo 
        })
        .then(()=>{
                
        })
       
    }


    const signInExistingUser = (email, password) => {
      return  signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            // Signed in
            const user = userCredential.user 
            toast.success("Signin successful")
        })
        
    }

    const googleSignIn = () => {
      return  signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user = result.user 
            
        })
        .catch((err)=>{
            toast.error(err);
            
        })
    }

    const signOutUser = () => {
        signOut(auth)
        .then(()=>{
            toast.success("SignOut successful")
        })
        .catch((err)=>{
            console.log(err.message);
            
        })
    }

    const updateIndividualProfile = async (name, photo) => {
        try{
            const currentUser = auth.currentUser

            await updateProfile(currentUser, {
                displayName: name, photoURL: photo 
            })

    // Update local state immediately
    setUser({...currentUser, displayName: name, photoURL: photo})        

    toast.success("Profile update successfully")

        }

        catch(error) {
            console.log(error.message);
            toast.error("Profile update failed " + error.message )
            
        }

    }

 useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{

      
         setUser(currentUser)
           setLoading(false)

        })
        
        return ()=>{
            unsubscribe()
        }
    },
    [])



    const authData = {
    signUpNewUser,
    updateUserProfile,
    signInExistingUser,
    googleSignIn,
        signOutUser,
        updateIndividualProfile,
        user

    }



    return (
       <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;