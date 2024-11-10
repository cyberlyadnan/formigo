// useSignInWithPassword.js
import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/navigation";

const useSignInWithPassword = () => {
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Function to handle sign-in with email and password
  const signInWithPassword = async (email, password) => {
    setError(null);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      router.push("/dashboard");
    } catch (error) {
      setError(error);
    }
  };

  return {
    error,
    signInWithPassword,
  };
};

export default useSignInWithPassword;
