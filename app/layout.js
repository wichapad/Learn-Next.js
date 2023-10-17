import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
