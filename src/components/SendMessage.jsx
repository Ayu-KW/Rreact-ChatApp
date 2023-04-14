import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { db, auth } from "../firebase";

export const SendMessage = () => {
  const [massege, setMassege] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;
    db.collection("messages").add({
      text: massege,
      photoURL,
      uid,
      displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMassege("");
  };
  return (
    <>
      <section className="input-area">
        <form className="input-chat" onSubmit={sendMessage}>
          <input className="input-text" type="text" onChange={(e) => setMassege(e.target.value)} value={massege} />
          <button className="input-btn" type="submit">
            <img src="/sendicon.svg" alt="送信アイコン" />
          </button>
        </form>
      </section>
    </>
  );
};
