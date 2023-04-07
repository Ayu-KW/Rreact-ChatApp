import "./App.css";
import { SignIn } from "./components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { Chat } from "./components/Chat";

export const App = () => {
  const [user] = useAuthState(auth);
  return <>{user ? <Chat /> : <SignIn />}</>;
};
