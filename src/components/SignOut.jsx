import React from "react";
import { auth } from "../firebase";

export const SignOut = () => {
  return (
    <>
      <button className="header-btn" onClick={() => auth.signOut()}>
        ログアウト
      </button>
    </>
  );
};
