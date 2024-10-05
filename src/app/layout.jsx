
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"


export const metadata = {
  title: 'Group 5',
  description: 'Our app is homework just for academy',
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header /> 
        <div id="root">{children}</div>
          
        <Footer />
      </body>
    </html>
  );
}

