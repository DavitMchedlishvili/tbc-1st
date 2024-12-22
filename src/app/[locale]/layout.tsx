import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "../styles/global.css";
import NotFoundPage from '../not-found';


interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string; 
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = params;

  if (!routing.locales.includes(locale as "en" | "ka")) {
    notFound();
  }


  const messages = await getMessages({locale});

  return (
    <NextIntlClientProvider locale={locale} messages={messages} >
      <div className="body-container">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}


