"use client";
import react, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetails } from "@/context/UserDetails";

export function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState();
  const CreateNewUser = async () => {
    const res = await axios.post("/api/user", {
      name: user?.fullName,
      email: user?.primaryEmailAddress?.emailAddress,
    });
    setUserDetail(res.data);
  };
  useEffect(() => {
    user && CreateNewUser();
  }, [user]);

  return (
    <UserDetails.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetails.Provider>
  );
}
