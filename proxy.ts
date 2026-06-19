import { NextRequest, NextResponse } from "next/server";

/**
 * Temporary site-wide password gate ("private preview" lock).
 *
 * Blocks the entire marketing site behind HTTP Basic Auth so it isn't public
 * while VetFusion is still in setup. Covers every route (incl. the /soap,
 * /tracker, /import, /timeline, /dashboard placeholders) and works on mobile
 * via the browser's native auth prompt.
 *
 * Password comes from the SITE_PASSWORD env var, with an `abc123!` fallback so
 * the gate is active even if the env var hasn't been set in Vercel yet.
 * Username is ignored — enter anything; only the password is checked.
 *
 * Next.js 16 renamed `middleware` to `proxy` (Node.js runtime). Remove this
 * file (and SITE_PASSWORD) to make the site public again.
 */

const SITE_PASSWORD = process.env.SITE_PASSWORD ?? "abc123!";
// Realm must be ASCII — HTTP header values cannot contain non-latin1 chars.
const REALM = "VetFusion private preview";

export function proxy(req: NextRequest) {
  const header = req.headers.get("authorization");

  if (header?.startsWith("Basic ")) {
    const encoded = header.slice("Basic ".length).trim();
    // Basic auth is "username:password"; we only validate the password.
    const decoded = Buffer.from(encoded, "base64").toString("utf-8");
    const password = decoded.slice(decoded.indexOf(":") + 1);
    if (password === SITE_PASSWORD) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"`,
    },
  });
}

export const config = {
  // Protect everything except Next.js internals and the favicon, so the auth
  // prompt fires on the first page load and assets load once authenticated.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
