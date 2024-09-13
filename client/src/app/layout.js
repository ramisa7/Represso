// issue w this one: 
// bg - white or transparent (??) 

// -----------
// fonts are all okay(!!)
// - in the collection page, there is a black line ( probably leftover from the header) - all okay 
// - the landing page has a header now which is black - that was padding - all okay 
// the content of the header is not properly spaced 

"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Head from "./head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Define the header links
  const links = [
    { href: "/collection", label: "Collection" },
    { href: "/magazine", label: "Magazine" },
    { href: "/cart", label: "Bag" },
  ];

  // Determine the active link
  const activeLink = links.find(link => link.href === pathname);
  const inactiveLinks = links.filter(link => link.href !== pathname);

  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        {/* Conditionally render the header, hiding it only on the landing page */}
        {pathname !== "/" && (
          <header className="bg-white text-black p-4 fixed top-0 left-0 w-full z-50">
            <nav className="container mx-auto flex items-center justify-between">
              {/* Left-aligned link */}
              <Link
                href={inactiveLinks[0].href}
                className={`text-sm font-normal ml-8`}
                style={{ fontFamily: "serif", fontSize: "1.35rem" }}
              >
                {inactiveLinks[0].label}
              </Link>

              {/* Centered active link */}
              <Link
                href={activeLink.href}
                className={`text-sm font-bold `}
                style={{ fontFamily: "serif", fontSize: "1.35rem" }}
              >
                {activeLink.label}
              </Link>

              {/* Right-aligned link */}
              <Link
                href={inactiveLinks[1].href}
                className={`text-sm font-normal mr-8`}
                style={{ fontFamily: "serif", fontSize: "1.35rem" }}
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


// "use client";

// import { Inter } from "next/font/google";
// import "./globals.css";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Head from './head';

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }) {
//   const pathname = usePathname();

//   // Function to dynamically set the center link based on the current page
//   const getHeaderLinks = () => {
//     const links = [
//       { href: "/collection", label: "Collection" },
//       { href: "/magazine", label: "Magazine" },
//       { href: "/cart", label: "Bag" },
//     ];

//     // Find the index of the active link
//     const activeIndex = links.findIndex(link => link.href === pathname);

//     // If the current page is one of the links, move it to the center
//     if (activeIndex > -1) {
//       const centerLink = links.splice(activeIndex, 1)[0]; // Remove the active link
//       links.splice(1, 0, centerLink); // Insert the active link in the center
//     }

//     return links;
//   };

//   return (
//     <html lang="en">
//       <Head />
//       <body className={inter.className}>
//         {/* Conditionally render the header, hiding it only on the landing page */}
//         {pathname !== "/" && (
//           <header className="bg-white text-black p-4 fixed top-0 left-0 w-full z-50">
//             <nav className="container mx-auto flex items-center justify-between">
//               <div className="space-x-4 flex items-center justify-center w-full">
//                 {getHeaderLinks().map((link, index) => (
//                   <Link
//                     key={index}
//                     href={link.href}
//                     className={`${
//                       pathname === link.href ? "text-lg font-bold" : ""
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </nav>
//           </header>
//         )}
//         <main className="pt-16">{children}</main> {/* Adding padding to prevent overlap */}
//       </body>
//     </html>
//   );
// }




// -----------------------------------------------------------
// "use client";

// import { Inter } from "next/font/google";
// import "./globals.css";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Head from './head';

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }) {
//   const pathname = usePathname();

//   // Function to dynamically set the center link based on the current page
//   const getHeaderLinks = () => {
//     const links = [
//       { href: "/collection", label: "Collection" },
//       { href: "/magazine", label: "Magazine" },
//       { href: "/cart", label: "Bag" },
//     ];

//     // Find the index of the active link
//     const activeIndex = links.findIndex(link => link.href === pathname);

//     // If the current page is one of the links, move it to the center
//     if (activeIndex > -1) {
//       const centerLink = links.splice(activeIndex, 1)[0]; // Remove the active link
//       links.splice(1, 0, centerLink); // Insert the active link in the center
//     }

//     return links;
//   };

//   return (
//     <html lang="en">
//       <Head />
//       <body className={inter.className}>
//         {/* Conditionally render the header, hiding it only on the landing page */}
//         {pathname !== "/" && (
//           <header className="bg-gray-800 text-white p-4">
//             <nav className="container mx-auto flex items-center justify-between">
//               <div className="space-x-4 flex items-center justify-center w-full">
//                 {getHeaderLinks().map((link, index) => (
//                   <Link
//                     key={index}
//                     href={link.href}
//                     className={`${
//                       pathname === link.href ? "text-lg font-bold" : ""
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </nav>
//           </header>
//         )}
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }


// ------------------------Last working version: ----------------------
// "use client"; 

// import { Inter } from "next/font/google";
// import "./globals.css";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Head from './head';

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }) {
//   const pathname = usePathname();

//   return (
//     <html lang="en">
//       <Head />
//       <body className={inter.className}>

//         {pathname !== "/" && (
//           <header className="bg-gray-800 text-white p-4">
//             <nav className="container mx-auto flex items-center justify-between">
//               <div className="space-x-4">
//                 <Link href="/collection">Collection</Link>
//                 <Link href="/magazine">Magazine</Link>
//                 <Link href="/cart">Bag</Link>
//               </div>
//             </nav>
//           </header>
//         )}
//         <main>{children}</main>
//         </body>
//     </html>
//   );
// }
