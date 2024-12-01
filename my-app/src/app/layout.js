import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/navigation";
import {ClerkProvider} from '@clerk/nextjs';
 // Adjust the import path for the Footer component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <header className="bg-slate-900 text-white p-4 text-center">
          <p>Welcome to Next.js 15 Crash Course.</p>
        </header> */}

        <Navigation/>
        {children}

        <footer className="bg-green-900 text-white p-4 text-center">
          <p>Codevolution</p>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}