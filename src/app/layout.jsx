import "./styles/global.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"


export const metadata = {
  title: 'Group 5',
  description: 'Our app is homework just for academy',
};


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="body-container">
        <Header /> 
        <div id="root">{children}</div>
        <Footer />
        </div>
        
      </body>
    </html>
  );
}

