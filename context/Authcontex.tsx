import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type User = {
  id: number;
  name: string;
  email: string;
} | null;

type AuthContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
