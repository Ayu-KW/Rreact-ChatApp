import React, { useState } from "react";
// データベースとユーザー認証を使えるようにする
import { db, auth } from "../firebase";
// firebaseを使えるようにする
import firebase from "firebase/compat/app";

export const SendMessage = () => {
  const [massege, setMassege] = useState("");
  const sendMessage = (e) => {
    // 情報が送信（submit）されると画面がレンダリングされてしまうのでキャンセルさせる
    // preventDefault：イベントが発生した時にブラウザがデフォルトで行う動作をキャンセルする
    e.preventDefault();
    // 現在ログインしているユーザー（currentUser）のユーザーID（uid）とユーザー画像（photoURL）を取得
    const { uid, photoURL } = auth.currentUser;
    // データベース（messagesコレクション）に追加する
    db.collection("messages").add({
      // 入力欄に入力された値（massege:State）
      text: massege,
      //
      photoURL,
      uid,
      // firebaseのデータベース（firestore）の
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <form class="input-chat" onSubmit={sendMessage}>
      <input type="text" onChange={(e) => setMassege(e.target.value)} />
      <button type="submit">💬</button>
    </form>
  );
};
