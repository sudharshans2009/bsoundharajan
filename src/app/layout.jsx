import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "@/components/Footer";

const inter = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

export const metadata = {
  title: "Dr. B. Soundharajan",
  description: "Associate Professor, Department of Civil Engineering, School of Engineering, Coimbatore | Visiting Faculty, School of Agricultural Sciences, Coimbatore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}