import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.redirect("https://sudharshans2009.notion.site/bsoundharajan-vercel-app-e7a891dcf0764390af66b1a26e77fcfb?pvs=4");
}