// issues: 
// - the page has a black head now 
// - remove its own header once the final header is done 
// - the layout of the content is not set.



// src/app/magazine/page.js
import React from "react";
import Link from "next/link";

export default function MagazinePage() {
  const magazines = [
    {
      id: 1,
      title: "Issue 01: The Art of Style",
      description:
        "Explore the intersection of fashion and art in our debut issue. Discover the latest trends, interviews with designers, and more.",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      link: "/magazine/issue-01", // Link to specific issue page
    },
    {
      id: 2,
      title: "Issue 02: Sustainable Fashion",
      description:
        "Dive into the world of sustainable fashion with insights on eco-friendly brands, materials, and practices.",
      image: "https://via.placeholder.com/300",
      link: "/magazine/issue-02",
    },
    {
      id: 3,
      title: "Issue 03: Winter Collections",
      description:
        "Get ready for the season with our guide to the best winter collections and must-have pieces.",
      image: "https://via.placeholder.com/300",
      link: "/magazine/issue-03",
    },
    // Add more issues as needed
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 p-8">
      {/* Header -like the way it is styled, but have to remove it ( if we are keeping the header ) */}
      <header className="flex justify-between items-center p-4 bg-white">
        <Link href="/collection" className="text-sm font-semibold">
          Collection
        </Link>
        <h1 className="text-xl font-serif">Magazine</h1>
        <Link href="/cart" className="text-sm font-semibold">
          Bag
        </Link>
      </header>

      {/* Magazine Issues Section */}
      <section className="grid gap-8 mt-8">
        {magazines.map((magazine) => (
          <div
            key={magazine.id}
            className="flex flex-col lg:flex-row items-start gap-6"
          >
            {/* Magazine Cover Image */}
            <img
              src={magazine.image}
              alt={magazine.title}
              className="w-full lg:w-1/3 object-cover"
            />

            {/* Magazine Details */}
            <div className="flex flex-col">
              <Link href={magazine.link}>
                <h2 className="text-lg font-serif font-bold cursor-pointer hover:underline">
                  {magazine.title}
                </h2>
              </Link>
              <p className="text-sm mb-4">{magazine.description}</p>
              <Link href={magazine.link} className="text-blue-500 hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
