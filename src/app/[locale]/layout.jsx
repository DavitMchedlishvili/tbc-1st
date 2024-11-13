import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Header  from "./components/Header/Header"
import Footer  from "./components/Footer/Footer"
import "../styles/global.css";




export default async function LocaleLayout({ children, params: { locale } }) {
  // Check if the locale is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Fetch messages for the current locale, or provide a fallback
  const messages = await getMessages(locale) || {};

  return (
    <html  lang={locale}>
      <body>
        
        <NextIntlClientProvider messages={messages}>
          <div className="bg-red-700 body-container">
          <Header/>
          <div className="content">{children}</div>
          <Footer/>
          </div>
        </NextIntlClientProvider>
      </body>
      
    </html>
  );
}