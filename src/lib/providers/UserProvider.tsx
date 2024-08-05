"use client";

import { User } from "@/types/user";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type UserContextValue = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

const defaultValue: UserContextValue = { user: null, setUser: () => {} };

const UserContext = createContext(defaultValue);

type UserProviderProps = {
  children: ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const contextValue = useContext(UserContext);

  if (contextValue === undefined) {
    throw new Error("useUser() must be used within a UserProvider");
  }

  return contextValue;
}
