import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebaseConfig";
import axios from "axios";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign out user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  //   register user
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // profile update
  const profileUpdate = (name, imageUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageUrl,
    });
  };
  //   observe user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        axios
          .post("http://localhost:3000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } else {
        setUser(null);
        setLoading(false);
        axios
          .post("http://localhost:3000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user]);

  const authInfo = {
    googleSignIn,
    logoutUser,
    user,
    loading,
    registerUser,
    profileUpdate,
    logInUser,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
