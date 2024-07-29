import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };

    localStorage.setItem("auth", JSON.stringify(authInfo)); // we can onl objects as strings
    navigate("/expense-tracker");
  };
  return (
    <div className="login-page">
      <p>Sign in with Google to Continue</p>
      <button onClick={signInWithGoogle} className="googleLogin">
        Sign in with Google
      </button>
    </div>
  );
}
export default Auth;
