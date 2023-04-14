import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

export const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <>
      <section className="login">
        <button className="login-btn" onClick={signInWithGoogle}>
          Googleアカウントでログインする
        </button>
      </section>
    </>
  );
};
