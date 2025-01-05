import "./globals.css"
import { setLocale } from '@/lib/i18n'

export default function RootLayout({ children, params }) {
  const { locale } = params || { locale: 'en' }
  console.log(params.locale, 'params.locale')
  console.log(params.lang, 'params.lang')
  // // 设置当前语言
  setLocale(locale);

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}

// 动态生成支持的语言路径
export async function generateStaticParams() {
  return ['en', 'zh', 'fr'].map((locale) => ({ locale }));
}