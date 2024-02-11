import Banner from "@/components/shared/Banner";
import GuestWelcome from "@/components/shared/GuestWelcome";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function Home() {
  return (
    <main className="mt-[5rem]">
      <SignedIn>
        <Banner />
      </SignedIn>
      <SignedOut>
        <GuestWelcome />
      </SignedOut>
    </main>
  );
}
