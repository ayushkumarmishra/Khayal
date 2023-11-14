import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="w-full flex items-center bg-background z-50 p-6 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="w-full flex items-center justify-start md:justify-end ml-auto text-muted-foreground ">
        <span className="text-sm">
          {new Date().getFullYear()} &copy; All Right Reserved
        </span>
      </div>
      <div className="w-full justify-between flex items-center gap-x-2 text-muted-foreground md:ml-auto md:justify-end">
        <Button variant="ghost" size="sm">
          Privacy and Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms and Conditions
        </Button>
      </div>
    </div>
  );
};
