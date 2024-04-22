"use client";

import { usePathname } from "next/navigation";
import { nav } from "@/config/main";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 border-b bg-amrita text-white z-50">
      <div className="w-full max-w-5xl mx-auto p-5 flex items-center justify-between">
        <h1 className="text-[20px] font-semibold">
          <Link href="/">Dr. B. Soundharajan</Link>
        </h1>
        <div className="md:flex hidden items-center justify-center gap-10">
          {nav.map(({ title, link }) => (
            <Link href={link} className={cn("border-b border-amrita hover:border-white transition-all", link === pathname && "border-white")}>{title}</Link>
          ))}
        </div>
        <div className="flex md:hidden flex-col gap-1 cursor-pointer" onClick={() => setOpen(prev => !prev)}>
          <div className={cn("w-6 h-1 bg-white transition-all", open && "translate-x-0 translate-y-2 rotate-45")}></div>
          <div className={cn("w-6 h-1 bg-white transition-all", open && "-rotate-45")}></div>
          <div className={cn("w-6 h-1 bg-white transition-all", open && "translate-x-0 -translate-y-2 -rotate-45")}></div>
        </div>
        {open && (
          <div className="flex md:hidden flex-col bg-amrita p-5 absolute top-[100px] right-[20px] gap-2 rounded-[20px]">
            {nav.map(({ title, link }) => (
              <Link href={link} className={cn("border-b border-amrita hover:border-white transition-all", link === pathname && "border-white")}>{title}</Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}