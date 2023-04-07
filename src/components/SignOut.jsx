import { Button } from "@material-ui/core";
import { auth } from "../firebase";
import React from "react";

export const SignOut = () => {
  return (
    <Button variant="contained" color="secondary" onClick={() => auth.signOut()}>
      サインアウト
    </Button>
  );
};
