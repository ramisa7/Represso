//issues: 
// - black smth on the top 
// - too much whitespacea around the logo name 
// - the layout of the content is not set. 

// src/app/collection/page.js
import React from "react";
import Link from "next/link";

export default function CollectionPage() {
  const products = [
    {
      id: 1,
      name: "Corduroy Bootcut Pants",
      description:
        "Using black corduroy makes REPRESSO's Corduroy Bootcut Pants a buttery soft pants and resistant to winter temperatures at the same time. It closes with a YKK zip on the back simultaneously functioning as a width adjuster at hip level. Our Corduroy Bootcut Pants fits bootcut and low waist. 100% cotton corduroy. Part of our 2024 YIN Artisanal Collection. Tag in REPRESSO-blue on the inside. No lavish packaging. Produced under exemplary conditions. Made in Germany. We donate for Save the Children enabling and improving children's educational environment primarily in Asian and African countries where education is most necessary and difficult.",
      price: "465 €",
      image:
        "https://via.placeholder.com/300", // Replace with your actual image URL
      status: "sold out",
    },
    // Add more products here
  ];
  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-y-auto">
      {/* Header */}
      {/* <header className="flex justify-between items-center p-4">
        <Link href="/magazine" className="text-sm font-semibold">
          Magazine
        </Link>
        <h1 className="text-xl font-serif">Collection</h1>
        <Link href="/bag" className="text-sm font-semibold">
          Bag
        </Link>
      </header> */}

<div className="flex justify-center items-center my-16">
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

      {/* Products Section */}
      <section className="px-8 py-16 grid gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col lg:flex-row items-start gap-6"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full lg:w-1/3 object-cover"
            />

            {/* Product Details */}
            <div className="flex flex-col">
              <h2 className="text-lg font-serif font-bold">{product.name}</h2>
              <p className="text-sm mb-4">{product.description}</p>
              <p className="text-lg font-bold">{product.price}</p>
              <p className="text-red-600">{product.status}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}