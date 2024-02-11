import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import { auth } from "@clerk/nextjs";
import { PiHamburgerBold } from "react-icons/pi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Nav = async () => {
  return (
    <nav className="fixed top-0 left-0 w-full">
      <div className="flex justify-between mb-3 p-2 bg-slate-800 items-center">
        <Sheet>
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/assets/images/ljr_logo.png"
                alt="logo"
                width={70}
                height={70}
              />
            </Link>
            <h1 className="text-2xl text-white uppercase ml-4 font-bold tracking-wide">
              Lagos Jetski Staff Dashboard
            </h1>
          </div>

          <div className="mr-3 flex ">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
              <div className="ml-5 md:hidden">{/* <MobileNav /> */}</div>
            </SignedIn>
            <SignedOut>
              <Button
                asChild
                className="rounded font-semibold bg-blue-600 text-white px-7"
              >
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
            <SignedIn>
              <SheetTrigger className="align-middle">
                <PiHamburgerBold size={30} className="text-white ml-4" />
              </SheetTrigger>
            </SignedIn>
            <SheetContent
              side="left"
              className="bg-gradient-to-b from-slate-700 to-gray-800 w-[140px] sm:w-[230px]"
            >
              <div>
                <SignedIn>
                  <nav className="flex flex-col  w-full ">
                    <NavItems />
                  </nav>
                </SignedIn>
              </div>
            </SheetContent>
          </div>
        </Sheet>
      </div>
    </nav>
  );
};

export default Nav;
