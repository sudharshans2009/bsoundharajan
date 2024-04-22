import { Copyright, GraduationCap, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-20 w-full max-w-5xl mx-auto p-5 flex gap-10 lg:flex-row flex-col-reverse justify-between">
      <h1 className="font-semibold">© Dr. B. Soundharajan</h1>
      <div className="flex gap-5">
        <GraduationCap width={20} height={20} />
        <Linkedin width={20} height={20} />
        <Twitter width={20} height={20} />
      </div>
    </div>
  );
}