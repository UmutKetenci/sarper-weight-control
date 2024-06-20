import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { firebaseAuth } from "../lib/firebase/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userLoggedIn, setUserLoggedIn] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const authSubscription = onAuthStateChanged(firebaseAuth);
    return authSubscription;
  });

  return (
    <>
      <AuthContext.Provider value={{ user, userLoggedIn, loading }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
