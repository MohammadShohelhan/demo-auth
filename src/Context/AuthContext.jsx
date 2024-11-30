import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./../firebase.init";

export const UserContext = createContext(null);

const AuthContext = ({ children }) => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);



  const createUserAcount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };




  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };




  const googleProvider = new GoogleAuthProvider();

  const googleLogInUSer = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result);
    });
  };


  const twitterProvider = new TwitterAuthProvider();


  const twitterLogInUser = () => {
    signInWithPopup(auth, twitterProvider).then((result) => {
      console.log(result);
    });
  };


  const logOutUser = () => {
    signOut(auth).then((result) => {
      console.log("logout now: ", result?.email);
    });
  };

  useEffect(() => {
    // console.log(value);
  }, [value]);



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setValue(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);



  
  const userInfo = {
    name: "rokib",
    createUserAcount,
    logInUser,
    googleLogInUSer,
    twitterLogInUser,
    logOutUser,
    value,
    loading,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
