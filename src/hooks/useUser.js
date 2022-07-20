import { useContext } from "react";
import { UserContext } from "../utils/userContext";

export function useUser() {
  return useContext(UserContext);
}
