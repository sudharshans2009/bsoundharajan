import { redirect } from "next/navigation";

export default function() {
  redirect("/bio");
  return (
    <div>
      Redirecting to <code>/bio</code>...
    </div>
  );
}