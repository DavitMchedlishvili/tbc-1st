export const metadata = {
    title: 'Group 5',
    description: 'Our app is homework just for academy',
  }


export default function RootLayout({children}) {
    return (<html lang="en">
        <body>
          <div id="root"></div>
          <script type="module" src="/src/main.jsx"></script>
        </body>
      </html>);
  }