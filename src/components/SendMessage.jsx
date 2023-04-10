import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";

export const SendMessage = () => {
  const [massege, setMassege] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    db.collection("messages").add({
      text: massege,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMassege("");
  };
  return (
    <form class="input-chat" onSubmit={sendMessage}>
      <input type="text" onChange={(e) => setMassege(e.target.value)} value={massege} />
      <button type="submit">💬</button>
    </form>
  );
};
