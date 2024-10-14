// issues: 
// the brand name w header space ( check in collection page - which one is preferred)
// when we have mag available, what should the sold out button look like(?), OS?
// figure out how each mag page works & build that 
// ques: all articles are under issue 1 or what(?) 
//sold out is not done 
// check out in other versions, why so much white space all around - make it fit to the screen 
// adding magazine to the bag not implemented 
 

//----------------
// - the page has a black head now - all ok  
// - remove its own header once the final header is done 
// brand name in the top 



// src/app/magazine/page.js
"use client";
import React, { useContext } from "react";
import Link from "next/link"; 
// import { CartContext } from "../../context/CartContext"; // Import CartContext


export default function MagazinePage() {
  const { addItemToCart } = useContext(CartContext);

  const magazines = [
    {
      id: 1,
      title: "2024’s Call for a Fair Quota System",
      subtitle: "Bangladesh Protests: Merit! Merit! Merit!",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      link: "/magazine/issue-01",
      price: 18,
      status: "sold out",
    },
    {
      id: 2,
      title: "US Presidential Election’s Impact",
      subtitle: "Kamala Harris on Gaza: Long-Awaited Perspectives",
      image: "https://via.placeholder.com/300",
      link: "/magazine/issue-02",
      price: 18,
      status: "sold out",
    },
    {
      id: 3,
      title: "A Growing Threat to Democracy and Diversity",
      subtitle: "Rise of Far-Right Parties in Europe",
      image: "https://via.placeholder.com/300",
      link: "/magazine/issue-03",
      price: 18,
      status: "sold out",
    },
    // Add more issues as needed
  ];

  const handleAddToBag = (magazine) => {
    if (magazine.status !== "sold out") {
      addItemToCart(magazine); // Add the magazine to the cart using CartContext
    }
  };

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
      <section className="flex flex-col gap-[60px] mt-8">
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
                <h2 className="text-xl font-serif font-medium mb-[60px] text-left cursor-pointer hover:underline">
                  {magazine.title}
                </h2>
              </Link>

              <Link href={magazine.link}>
                <h3 className="text-xl font-serif font-bold mt-0 text-left cursor-pointer hover:underline">
                  {magazine.subtitle}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* New Magazine Issue */} 
      <div className="flex justify-center items-center h-screen mt-16">
        <div className="flex items-center gap-[60px]">
          {/* Left Text Section */}
          <div className="flex flex-col justify-center items-end">
            <span className="font-serif text-lg">issue 1</span>
            <span className="font-serif text-lg">2024</span>
          </div>

          {/* Magazine Cover Image */}
          <img
            src="https://via.placeholder.com/300x600" // Replace with your actual image URL
            alt="Magazine Issue"
            className="w-[400px] h-[600px] object-cover"
          />

          {/* Right Text Section with button */}
          <div className="flex flex-col justify-center items-start">
            <span className="font-serif text-lg">18 €</span>
            <button
              onClick={() => handleAddToBag(magazines[0])} // Adjust the magazine index as needed
              className={`text-lg mt-2 py-2 px-4 rounded ${
                magazines[0].status === "sold out"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              disabled={magazines[0].status === "sold out"}
            >
              {magazines[0].status === "sold out" ? "Sold Out" : "Add to Bag"}
            </button>
          </div>
        </div>
      </div>

      {/* Pagination Button with Thumbnail */}
      <div className="flex justify-center mt-6">
        <Link href="/world" passHref>
          <button className="w-[20px] h-[20px] rounded-full">
            <img
              src="/thumbnail_logo.png" // Replace with the actual thumbnail image
              alt="Represso Legal"
              className="w-full h-full object-cover"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}



