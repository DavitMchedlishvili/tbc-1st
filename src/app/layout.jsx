import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export const metadata = {
  title: 'Group 5',
  description: 'Our app is homework just for academy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/vite.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Header />
        <div id="root">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
