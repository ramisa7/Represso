// issue w this one: 
// add more padding on top - check compatibility with mobile 
// add padding on bottom 

// -----------
// fonts are all okay(!!)
// - in the collection page, there is a black line ( probably leftover from the header) - all okay 
// - the landing page has a header now which is black - that was padding - all okay 
// the content of the header is not properly spaced 
// bg -  transparent 

"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Head from "./head";
import { useContext } from "react";
import { CartProvider, CartContext } from "../context/CartContext"; // Import CartContext
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <CartProvider> {/* Wrap the entire app in CartProvider */}
          <LayoutContent pathname={pathname}>{children}</LayoutContent>
        </CartProvider>
      </body>
    </html>
  );

}



function LayoutContent({ children, pathname}) {
  const { cart } = useContext(CartContext); // Use the cart context to get cart items

  // Define the header links
  const links = [
    { href: "/collection", label: "Collection" },
    { href: "/magazine", label: "Magazine" },
    { href: "/cart", label: "Bag" },
  ];

  // Determine the active link
  const activeLink = links.find((link) => link.href === pathname);
  const inactiveLinks = links.filter((link) => link.href !== pathname);

  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        {/* Conditionally render the header, hiding it only on the landing page & world page */}
        {pathname !== "/" && pathname !== "/world" &&(
          <header
            className="bg-transparent text-black fixed top-0 left-0 w-full z-50"
            style={{ paddingTop: "60px", paddingBottom: "60px" }}
          >
            <nav className="relative container mx-auto flex items-center justify-center px-8 sm:px-16 lg:px-32">
              {/* Left-aligned link */}
              <Link //-[6%] sm:left-[2%] lg:left-[2%]
                href={inactiveLinks[0].href}
                className={`absolute text-[5vw] sm:text-[1.55rem] font-normal left-[6%] sm:left-[4%] lg:left-[4%]`}
                style={{ fontFamily: "serif" }}
              >
                {inactiveLinks[0].label}
              </Link>

              {/* Centered active link */}
              <Link
                href={activeLink.href}
                className={`text-[5vw] sm:text-[1.55rem] font-bold text-center`}
                style={{ 
                  fontFamily: "serif",  
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {activeLink.label}
              </Link>

              {/* Right-aligned link */}      
                <Link
                  href={inactiveLinks[1].href}
                  className={`absolute text-[5vw] sm:text-[1.55rem] font-normal right-[6%] sm:right-[4%] lg:right-[4%]`}
                  style={{ fontFamily: "serif" }}
                >
                  {inactiveLinks[1].label}
                </Link>   
            </nav>
          </header>
        )}
        <main>{children}</main> {/* Removed padding to prevent overlap */}
      </body>
    </html>
  );
}


