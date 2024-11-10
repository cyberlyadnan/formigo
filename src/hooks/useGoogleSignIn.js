// useGoogleSignIn.js
import { useState, useEffect, useContext } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/navigation";

const useGoogleSignIn = () => {
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  // Function to handle Google sign-in
  const signInWithGoogle = async () => {
    setError(null);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      router.push("/dashboard");
    } catch (error) {
      setError(error);
    }
  };

  // Track user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [setUser]);

  return {
    error,
    signInWithGoogle,
  };
};

export default useGoogleSignIn;
