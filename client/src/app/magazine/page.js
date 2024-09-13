// issues: 
// - idk the connection of things - confirm w david how it works. 
// teeny tiny detail of the layout needs to be fixed ( the picture needs to take more space on right, left is okay) 
// 

//----------------
// - the page has a black head now - all ok  
// - remove its own header once the final header is done 
// brand name in the top 



// src/app/magazine/page.js
import React from "react";
import Link from "next/link";

export default function MagazinePage() {
  const magazines = [
    {
      id: 1,
      title: "2024’s Call for a Fair Quota System", // First line of text
      subtitle: "Bangladesh Protests: Merit! Merit! Merit!", // Second line of text
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      link: "/magazine/issue-01", // Link to specific issue page
    },
    {
      id: 2,
      title: "The Rise of Sustainable Fashion", // First line of text
      subtitle: "Eco-friendly Brands Making a Difference", // Second line of text
      image: "https://via.placeholder.com/300",
      link: "/magazine/issue-02",
    },
    {
      id: 3,
      title: "Winter Fashion Trends 2024", // First line of text
      subtitle: "Essential Pieces for the Cold Season", // Second line of text
      image: "https://via.placeholder.com/300",
      link: "/magazine/issue-03",
    },
    // Add more issues as needed
  ];
  

  return (
    <div className="min-h-screen bg-white text-slate-800 p-8">
      <div className="flex justify-center items-center">
        <Link href="/" passHref>
          <h1
            className="font-serif text-[20vw] text-center cursor-pointer"
            style={{
              color: "rgb(89, 91, 142)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              userSelect: "none",
            }}
          >
            REPRESSO
          </h1>
        </Link>
      </div>
      {/* Magazine Issues Section */}
      {/* Magazine Issues Section */}
      <section className="flex flex-col gap-8 mt-8">
        {magazines.map((magazine) => (
          <div
            key={magazine.id}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            {/* Magazine Cover Image */}
            <img
              src={magazine.image}
              alt={magazine.title}
              className="w-full lg:w-1/2 object-cover lg:pl-4" // Adjust padding-left value as needed
            />

            {/* Magazine Details */}
            <div className="flex flex-col lg:ml-8 lg:w-1/2">
              {/* First Text Link */}
              <Link href={magazine.link}>
                <h2 className="text-lg font-serif font-medium mb-4 text-left cursor-pointer hover:underline">
                  {magazine.title}
                </h2>
              </Link>

              {/* Second Text Link */}
              <Link href={magazine.link}>
                <h3 className="text-xl font-serif font-bold text-left cursor-pointer hover:underline">
                  {magazine.subtitle}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </section>



    </div>
  );
}



// with single line on the right: 
      {/* Magazine Issues Section */}
      // <section className="flex flex-col gap-8 mt-8">
      //   {magazines.map((magazine) => (
      //     <div
      //       key={magazine.id}
      //       className="flex flex-col lg:flex-row items-center gap-8"
      //     >
      //       {/* Magazine Cover Image */}
      //       <img
      //         src={magazine.image}
      //         alt={magazine.title}
      //         className="w-full lg:w-1/2 object-cover lg:pl-4"
      //       />

      //       {/* Magazine Details */}
      //       <div className="flex flex-col lg:ml-8 lg:w-1/2">
      //         <Link href={magazine.link}>
      //           <h2 className="text-lg font-serif font-medium mb-2 text-left cursor-pointer hover:underline">
      //             {magazine.title}
      //           </h2>
      //         </Link>
      //         <Link href={magazine.link}>
      //           <h3 className="text-xl font-serif font-bold mb-2 text-left cursor-pointer hover:underline">
      //             {magazine.subtitle}
      //           </h3>
      //         </Link>
      //       </div>
      //     </div>
      //   ))}
      // </section>