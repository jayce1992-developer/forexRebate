import { NextRequest, NextResponse } from 'next/server'
 
const PUBLIC_FILE = /\.(.*)$/
 
export async function middleware(req) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }
 
  if (req.nextUrl.locale === 'default') {
    const acceptLanguage = request.headers.get('accept-language');
    const userLocale = acceptLanguage?.split(',')[0]?.split('-')[0] || 'en';
    const locale = req.cookies.get('NEXT_LOCALE')?.value || userLocale
 
    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    )
  }
}