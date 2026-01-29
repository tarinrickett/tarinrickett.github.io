'use client';
import { Logo } from "@/ui/theming";

export function Divider() {
  return (
    <div className="divide flex flex-row justify-center items-center gap-4 px-4 sm:px-8 max-w-7xl w-full mx-auto">
        <div className="divider__line w-[50%] h-2 bg-accent" />
        <Logo />
        <div className="divider__line w-[50%] h-2 bg-accent" />
    </div>
  );
}
