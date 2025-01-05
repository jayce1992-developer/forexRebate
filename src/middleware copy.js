import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 如果路径已包含语言前缀，直接返回
  if (/^\/(en|zh|fr)/.test(pathname)) {
    return NextResponse.next();
  }

  // 自动检测语言
  const acceptLanguage = request.headers.get('accept-language');
  // const userLocale = acceptLanguage?.split(',')[0]?.split('-')[0] || 'en';
  const userLocale = 'en';
  console.log(`/${userLocale}${pathname}`, 'pathname22')

  // 重定向到用户语言
  const redirectUrl = new URL(`/${userLocale}${pathname}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

// 配置中间件匹配的路径
export const config = {
  matcher: [
    // 匹配所有页面路径
    '/((?!_next|favicon.ico|static|api/auth).*)',
  ],
};
