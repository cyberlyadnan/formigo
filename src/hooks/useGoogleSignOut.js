// useGoogleSignOut.js
import { useState, useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/navigation";

const useGoogleSignOut = () => {
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  // Function to handle sign-out
  const signOutGoogle = async () => {
    setError(null);
    try {
      await signOut(auth);
      setUser(null); // Clear user context
      router.push("/login"); // Redirect to login page
    } catch (error) {
      setError(error);
    }
  };

  return {
    error,
    signOutGoogle,
  };
};

export default useGoogleSignOut;
