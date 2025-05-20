import { createContext, Dispatch, SetStateAction } from "react";

interface UserDetailsContextType {
  userDetail: any;
  setUserDetail: Dispatch<SetStateAction<any>>;
}

export const UserDetails = createContext<UserDetailsContextType | null>(null);