import React, { useEffect, useState } from "react";
import { SignOut } from "./SignOut";
import { db } from "../firebase";
import { SendMessage } from "./SendMessage";

export const Chat = () => {
  const [messages, setmessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setmessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <>
      {console.log(messages)}
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          // 三項演算子を使ってログインしているユーザーであれば「send」、していなければ「received」を追加する
          <div key={id} className={`msg $(uid===auth.currentUser.uid ? "send" : "received")`}>
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        ))}
      </div>
      <SendMessage />
    </>
  );
};
