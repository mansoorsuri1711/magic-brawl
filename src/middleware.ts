import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

/** Probe files used by scanners; never run the app for these. */
const SCANNER_FILE =
  /\.(?:php\d*|phtml|phar|aspx?|jspx?|cgi|cfm|env|bak|sql|git|svn|htaccess|htpasswd|ini|cfg|conf|dist|old|orig|save|swp|inc|yml|yaml|toml|log|sh|bash|exe|dll)$/i;

const SCANNER_PATH =
  /(?:^|\/)(?:wp-admin|wp-login|wp-content|wp-includes|wp-config|xmlrpc\.php|phpmyadmin|phpinfo|adminer|administrator|cgi-bin|\.git|\.svn|\.env|vendor\/phpunit|manager\/html|actuator|server-status|telescope|horizon|debug\/default)(?:\/|$|\.)/i;

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (SCANNER_FILE.test(pathname) || SCANNER_PATH.test(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  const firstSegment = pathname.split("/").filter(Boolean)[0] ?? "";
  // Locales never contain a dot; dotted first segments are file/config probes.
  if (firstSegment.includes(".")) {
    return new NextResponse(null, { status: 404 });
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // App routes (skip real static assets and sitemap/robots files)
    "/((?!_next|_vercel|favicon.ico|manifest.json|.*\\.(?:ico|png|jpe?g|gif|webp|avif|svg|woff2?|ttf|eot|css|js|map|txt|xml)$).*)",
  ],
};
