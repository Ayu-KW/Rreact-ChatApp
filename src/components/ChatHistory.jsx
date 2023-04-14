import React, { useEffect, useState } from "react";
import { SendMessage } from "./SendMessage";
import { db } from "../firebase";

export const ChatHistory = ({ user }) => {
  const [messages, setmessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setmessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  const formatCreatedAt = (createdAt) => {
    if (!createdAt) {
      return "";
    }
    const date = createdAt.toDate();
    return new Date(date).toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" });
  };
  const formatCreatedAtToTime = (createdAt) => {
    if (!createdAt) {
      return "";
    }
    return createdAt.toDate().toISOString();
  };
  const addClassName = (uid) => {
    return uid === user.uid ? "my-chat" : "other";
  };
  return (
    <>
      <section className="chat-area">
        ￥{" "}
        {messages.map(({ id, text, photoURL, displayName, createdAt, uid }) => (
          <div className={`chat ${addClassName(uid)}`} key={id}>
            <div className="chat_text_wrapper">
              <div className={`chat_info ${addClassName(uid)}`}>
                <time datetime={formatCreatedAtToTime()} class="chat_time">
                  {formatCreatedAt(createdAt)}
                </time>
                <p className="chat_name">{displayName}</p>
              </div>
              <p className={`chat_text ${addClassName(uid)}`}>{text}</p>
            </div>
            <img className="chat_icon" src={photoURL} alt="ユーザーアイコン" />
          </div>
        ))}
      </section>
      <SendMessage />
    </>
  );
};
