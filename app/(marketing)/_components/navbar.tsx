"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Logo } from "./logo";
import { useTopScroll } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toogle";

const Navbar = () => {
  const scrolled = useTopScroll();
  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="w-full flex justify-end">
        <ModeToggle />
      </div>
    </div>
  );
};

{
  /* <SignInButton>
  <Button variant="ghost" size="sm">
    Log in
  </Button>
</SignInButton>
<SignInButton>
  <Button variant="ghost" size="sm">
    Get Jotion free
  </Button>
</SignInButton> */
}
export default Navbar;
