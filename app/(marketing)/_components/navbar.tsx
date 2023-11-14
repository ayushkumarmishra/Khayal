"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Logo } from "./logo";
import { useTopScroll } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toogle";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";
import { Spinner } from "@/components/spinner";

const Navbar = () => {
  // This is used to make a scrollable navigation bar to give a little shadow and effect to the navbar when scrolled down.
  const scrolled = useTopScroll();

  /********* THis is the Authentication part isng the Convex database and clerk Authenticated third party libarary  */

  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Get Jotion free
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter Jotion</Link>
            </Button>
            {/** The userButton shows all the user details like name, password and the signout button*/}
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
