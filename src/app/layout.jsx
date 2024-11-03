import "./styles/global.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import { UserProvider } from "@auth0/nextjs-auth0/client";



export const metadata = {
  title: 'Group 5',
  description: 'Our app is homework just for academy',
};


export default function RootLayout({ children }) {
  return (
    <html>
      <UserProvider>
      <body>
        <div className="body-container">
        {/* <Header />  */}
        <div className="content">{children}</div>
        {/* <Footer /> */}
        </div>
        
      </body>
      </UserProvider>
      
    </html>
  );
}

