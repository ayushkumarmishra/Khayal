"use-client";

import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import React from "react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, documents and plans, Unified. Welcome to&nbsp;
        <span className="underline underline-offset-2">Khayal</span>
      </h1>
      <h2 className="text-base sm:text-xl md:text-2xl font-medium">
        Khayal is the connected workspace where <br />
        better, faster work happens.
      </h2>
      <Button className="">
        Enter Khayal <ArrowBigRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
