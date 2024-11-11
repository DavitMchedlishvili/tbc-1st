import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./styles/global.css";
import { ThemeProvider } from "next-themes";
import { Inter } from 'next/font/google';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Group 5",
  description: "Our app is homework just for academy",
};

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true}  >
      <UserProvider>
      <body className={`bg-white dark:bg-black ${inter.className}`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="body-container">
          <Header/>
            <div className="content">{children}</div>
          <Footer/>
          </div>
      </ThemeProvider>
        </body>
      </UserProvider>

  
        
    </html>
  );
}
