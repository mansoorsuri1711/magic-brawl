import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

/** Probe paths used by scanners; never run the app for these. */
const SCANNER_FILE =
  /\.(?:php\d*|phtml|phar|asp|aspx|jsp|cgi|cfm|env|bak|sql|git|svn|htaccess|htpasswd|ini|cfg|dist|old|orig|save|swp|inc)$/i;

const SCANNER_PATH =
  /(?:^|\/)(?:wp-admin|wp-login\.php|wp-content|wp-includes|xmlrpc\.php|phpmyadmin|phpinfo|adminer|cgi-bin|\.git|\.svn|\.env|vendor\/phpunit|manager\/html)(?:\/|$)/i;

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (SCANNER_FILE.test(pathname) || SCANNER_PATH.test(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // App routes (skip static files with extensions)
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
    // File probes that would otherwise skip i18n and hit [locale] as a 500
    "/((?!_next).*)\\.(php|phtml|phar|asp|aspx|jsp|cgi|cfm|env|bak|sql|git)",
  ],
};
