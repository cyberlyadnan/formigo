// useSignUp.js
import { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/navigation";

const useSignUp = () => {
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Function to handle sign-up with email and password
  const signUpWithEmail = async (email, password) => {
    setError(null);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      router.push("/dashboard");
    } catch (error) {
      setError(error);
    }
  };

  return {
    error,
    signUpWithEmail,
  };
};

export default useSignUp;
