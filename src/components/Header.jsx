import React from "react";
import { SignOut } from "./SignOut";

export const Header = ({ user }) => {
  const { photoURL, displayName } = user ? user : {};
  return (
    <>
      <header className="header" style={user ? {} : { justifyContent: "center" }}>
        <h1 className="header-title">Chat-App</h1>
        {user ? (
          <div className="header-btn_wrapper">
            <div className="header-profile">
              <img className="header-profile_user-icon" src={photoURL} alt="プロフィール画像" />
              <p className="header-profile_user-name">{displayName}</p>
            </div>
            <SignOut />
          </div>
        ) : (
          <></>
        )}
      </header>
    </>
  );
};
