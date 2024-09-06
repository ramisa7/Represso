"use client"; 

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Head from './head';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>

        {pathname !== "/" && (
          <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold">
                REPRESSO
              </Link>
              <div className="space-x-4">
                <Link href="/collection">Collection</Link>
                <Link href="/magazine">Magazine</Link>
                <Link href="/hey">Hey</Link>
                <Link href="/cart">Cart</Link>
              </div>
            </nav>
          </header>
        )}
        <main>{children}</main>
        </body>
    </html>
  );
}
