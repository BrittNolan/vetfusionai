import { NextResponse, type NextRequest } from "next/server";

// Simple site-wide password gate for the marketing site (private / pre-launch).
// Enabled only when BASIC_AUTH_USER and BASIC_AUTH_PASSWORD are set in the
// environment — so the site never accidentally locks itself if they're missing.
// (Next.js 16 proxy convention — replaces middleware.ts; runs on the Node runtime.)

export const config = {
  // Gate everything except Next internals and static assets.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

export function proxy(request: NextRequest) {
  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASSWORD;

  // No credentials configured → don't gate (fail open).
  if (!user || !pass) return NextResponse.next();

  const header = request.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    // Edge runtime: use atob (Web API), NOT Buffer (Node-only — would crash).
    let decoded = "";
    try {
      decoded = atob(header.slice(6));
    } catch {
      decoded = "";
    }
    const sep = decoded.indexOf(":");
    const givenUser = decoded.slice(0, sep);
    const givenPass = decoded.slice(sep + 1);
    if (givenUser === user && givenPass === pass) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="VetFusion — private preview", charset="UTF-8"',
    },
  });
}
