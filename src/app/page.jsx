"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location = "/";
  }, []);

  return (
    <div>
      Redirecting...
    </div>
  );
}