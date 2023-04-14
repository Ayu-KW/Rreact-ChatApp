import "./App.css";
import "./App";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
// コンポーネント
import { SignIn } from "./components/SignIn";
import { ChatHistory } from "./components/ChatHistory";
import { Header } from "./components/Header";

export const App = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Header user={user} />
      {user ? <ChatHistory user={user} /> : <SignIn />}
    </>
  );
};
