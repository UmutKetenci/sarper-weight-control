import { getAuth } from "firebase/auth";
import { firebaseInitilizationApp } from "./firebase";

export const firebaseAuth = getAuth(firebaseInitilizationApp);
