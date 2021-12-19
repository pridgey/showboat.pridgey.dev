import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(firebaseApp);
const goog = new GoogleAuthProvider();

const login = () => {
  signInWithPopup(auth, goog);
};
const logout = () => {
  signOut(auth);
};

export const Layout = () => {
  const [user, loading, error] = useAuthState(auth);

  if (!user) {
    login();
  }
};
