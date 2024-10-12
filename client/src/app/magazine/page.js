// issues: 
//  teeny tiny detail of the layout needs to be fixed ( the picture needs to take more space on right, left is okay) 
// the brand name w header space ( check in collection page - which one is preferred)
// when we have mag available, what should the sold out button look like(?), OS?
// add the button & the connection to bag 
// figure out how each mag page works & build that 
 

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
      title: "2024’s Call for a Fair Quota System",
      subtitle: "Bangladesh Protests: Merit! Merit! Merit!",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      link: "/magazine/issue-01",
    },
    {
      id: 2,
      title: "The Rise of Sustainable Fashion",
      subtitle: "Eco-friendly Brands Making a Difference",
      image: "https://via.placeholder.com/300",
      link: "/magazine/issue-02",
    },
    {
      id: 3,
      title: "Winter Fashion Trends 2024",
      subtitle: "Essential Pieces for the Cold Season",
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
      <section className="flex flex-col gap-8 mt-8">
        {magazines.map((magazine) => (
          <div
            key={magazine.id}
            className="flex flex-col lg:flex-row items-center gap-[60px]"
          >
            {/* Magazine Cover Image */}
            <img
              src={magazine.image}
              alt={magazine.title}
              className="w-full h-auto lg:w-[660px] lg:h-[600px] object-cover pl-6" // Large screens: 660px width, 600px height
            />

            {/* Magazine Details */}
            <div className="flex flex-col lg:ml-8 lg:w-1/2">
              <Link href={magazine.link}>
                <h2 className="text-xl font-serif font-medium mb-4 text-left cursor-pointer hover:underline">
                  {magazine.title}
                </h2>
              </Link>

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



