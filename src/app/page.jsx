import { redirect } from "next/navigation";

export default function() {
  redirect("/bio");
  return <></>;
}