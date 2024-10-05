import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";



export const metadata = {
    title: 'Group 5',
    description: 'Our app is homework just for academy',
  }


export default function RootLayout({children}) {
    return (<html lang="en">
        <body>
          <Header/>
          <div id="root">{children}</div>
          <Footer/>
        </body>
      </html>);
  }