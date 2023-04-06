import { Button } from "@material-ui/core";
import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

export const SignIn = () => {
  // Googleアカウントでログインする
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <Button variant="contained" color="info" onClick={signInWithGoogle}>
        Googleアカウントでログインする
      </Button>
    </div>
  );
};
