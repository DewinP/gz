import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function SignUpPage() {
  return (
    <div className="mt-10 flex flex-1 justify-center">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
}
