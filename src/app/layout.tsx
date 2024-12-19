import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./styles/global.css";
import { ThemeProvider } from "next-themes";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <body>
        <UserProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main>{children}</main>
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}


// import { Inter } from 'next/font/google';
// import Header from "../app/[locale]/components/Header/Header";
// import Footer from "../app/[locale]/components/Footer/Footer";

// export const metadata = {
//   title: "Group 5",
//   description: "Our app is homework just for academy",
// };

// const inter = Inter({ subsets: ['latin'] });

// export default function RootLayout({ children }) {
//   return (
//     <html suppressHydrationWarning  >
//       <UserProvider>
//       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//       <body>

//           {/* <Header/> */}
//             <div className="content">{children}</div>
//           {/* <Footer/> */}

//         </body>
//       </ThemeProvider>
//       </UserProvider>

//     </html>
//   );
// }
