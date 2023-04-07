import { Button } from "@material-ui/core";
// authを使えるようにする
import { auth } from "../firebase";
import React from "react";

export const SignOut = () => {
  return (
    // 「auth（認証サービス）」のSignOut関数を使用する
    <Button variant="contained" color="Secondary" onClick={() => auth.signOut()}>
      サインアウト
    </Button>
  );
};
