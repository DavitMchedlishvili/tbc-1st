import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "../styles/global.css";


interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: any; 
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = params;



  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className="body-container">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}


