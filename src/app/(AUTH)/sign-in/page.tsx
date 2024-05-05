import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-10 flex flex-1 justify-center">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}
