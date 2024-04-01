"use client"

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";

export default function GoogleSignInButton(){
  return (
    <div>
      <Button variant={"outline"} onClick={() => signIn("google")}>
        Register with google
      </Button>
      <Button variant={"outline"} onClick={() => signOut()}>
        signOut
      </Button>
    </div>
  );
}; 