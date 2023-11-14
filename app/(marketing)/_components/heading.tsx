"use client";

import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import React from "react";

import { SignInButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, documents and plans, Unified. Welcome to&nbsp;
        <span className="underline underline-offset-2">Khayal</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Khayal is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Khayal
            <ArrowBigRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button className="">
            Get Khayal free <ArrowBigRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
