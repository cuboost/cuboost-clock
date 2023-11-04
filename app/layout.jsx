import "./globals.css";
import { Ubuntu, Orbitron } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Cuboost Clock",
  description: "Cuboost Clock, a simple customizable clock...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} h-screen w-full p-10`}>
        {children}
      </body>
    </html>
  );
}
