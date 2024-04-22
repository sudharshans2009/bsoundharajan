import { Copyright, GraduationCap, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-20 w-full max-w-5xl mx-auto p-5 flex gap-10 lg:flex-row flex-col-reverse justify-between">
      <h1 className="font-semibold">© Dr. B. Soundharajan</h1>
      <div className="flex gap-5">
        <Link href="https://scholar.google.com/citations?user=JZPxTIoAAAAJ&hl=en"><GraduationCap width={20} height={20} /></Link>
        <Link href="https://www.linkedin.com/in/soundharajan-bankaru-swamy-a8a38118"><Linkedin width={20} height={20} /></Link>
        <Link href="https://twitter.com/bsoundhar"><Twitter width={20} height={20} /></Link>
      </div>
    </div>
  );
}