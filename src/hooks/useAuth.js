import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  return user;
}

export function register(email, password) {
  createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password);
}
