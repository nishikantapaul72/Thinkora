"use client";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SignOutButton, useAuth } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    redirect("/sign-in");
  }

  return (
    <div>
      <Button className="bg-red-500">Hello World</Button>
      <SignOutButton>
        <Button className="ml-4 bg-blue-500">Logout</Button>
      </SignOutButton>
    </div>
  );
}
