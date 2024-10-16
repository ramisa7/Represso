//issues: 
//// - not equal space from the logo to the header (?) ( check the one in magazine - which one do we prefer)
//  left side too much inside (?)
// right side info not spaced properly
// picture - not in the middle exacly 
// font of everything  
// hover not added 
// buttons for sizes are not done right 

// --------------------------
// - black smth on the top 
// - the layout of the content is not set. 
//the products are not put in properly. 
// things adding and then updating in the cart (yeurr) 
// status being shown in the display 

// src/app/collection/page.js
"use client";

import Link from "next/link";
import React, { useContext } from "react"; // Import useContext from React
import { CartContext } from "../../context/CartContext"; // Import CartContext



export default function CollectionPage() {

  const { cart, addToCart } = useContext(CartContext); // Use the cart context

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
    {
      id: 2,
      name: "Crumpled Suede Collar",
      description:
        "REPRESSO's Crumpled Suede Collar uses sophisticated black suede leather as the outer layer of the collar and black heavy knit jersey as the inner layer making this handcrafted piece essential for cold days. Three YKK zippers make our Crumpled Suede Collar highly adjustable to anyone. It can be worn fully closed or as a wide spread collar. 50% suede leather, 50% knit jersey. Part of our 2024 YIN Artisanal Collection. Tag in REPRESSO-blue on the inside. No lavish packaging. Produced under exemplary conditions. Made in Germany. We donate for Save the Children enabling and improving children's educational environment primarily in Asian and African countries where education is most needed and difficult to access.",
      price: "175 €",
      status: "sold out",
      image:
        "https://via.placeholder.com/300", // Replace with actual image URL
    },

    {
      id: 3, 
      name: "Street's Knit Jersey", 
      description: "Inspired by road cycling jerseys REPRESSO's Knit Jersey in a deep black features a full length black YYK zip merging knit's snugness with cycling gear's functionality. 100 % organic cotton single jersey. Part of our 2024 YIN Ready-to-Wear Collection. No lavish tag. No lavish packaging. Produced under better conditions. Made in Portugal. We donate for Save the Children enabling and improving children's educational environment primarily in Asian and African countries where education is most needed and difficult to access.",
      price: "185 €", 
      image: "https://via.placeholder.com/300",
      status: "available",
    }, 

    {
      id: 4, 
      name:"REPRESSO BIC LIGHTER" , 
      description:"Uncontested BIC lighter featuring our REPRESSO-blue branding in the typical REPRESSO font. No lavish packaging. Made in France. Flammable Gas. Conform EN 13869. UN 1057 - CLASS 2. We donate for Save the Children enabling and improving children's educational environment primarily in Asian and African countries where education is most needed and difficult to access" ,
      price: "8 €", 
      image: "https://via.placeholder.com/300", 
      status: "available_os", 
    }, 

    {
      id: 5, 
      name:"REPRESSO Sticker Set" , 
      description:"3 x set of 3 different robust stickers - megaphone logo, branding, make love not war. No lavish packaging. Made in Germany. We donate for Save the Children enabling and improving children's educational environment primarily in Asian and African countries where education is most needed and difficult to access。" ,
      price: "3 €", 
      image: "https://via.placeholder.com/300", 
      status: "available_os", 
    }, 
  ]; 




  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-y-auto">

      <div className="flex justify-center items-center">
        <Link href="/" passHref>
          <h1
            className="font-serif text-[20vw] text-center cursor-pointer pt-[60px]"
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
      <section className="px-8 py-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-1 lg:grid-cols-[450px_auto_450px] gap-[60px] items-start mb-16"
          >
            {/* Product Description (Left) */}
            <div className="order-2 lg:order-none flex flex-col justify-center items-center lg:min-h-[600px] p-4">
              <p className="text-lg leading-relaxed ml-6 first-letter:text-4xl first-letter:font-serif">{product.description}</p>
            </div>

            {/* Product Image (Center) */}
            <div className="order-1 lg:order-none flex justify-center items-center"> 
              {/* bg-blue-200 border border-black */}
              <img
                src={product.image}
                alt={product.name}
                className="w-[450px] h-[600px] object-cover"
                // border-2 border-blue-500
              />
            </div>

            {/* Product Price and Status (Right) */} 
            <div className="order-3 lg:order-none flex flex-col items-start justify-center items-center lg:items-start lg:min-h-[600px] p-4"> 
              <h3 className="text-xl first-letter:text-4xl first-letter:font-serif font-serif">{product.name}</h3> 
              <p className="text-lg font-serif mt-2">{product.price}</p>
            

              {/* Size Selector - Only show if product is available */}
              {product.status === "available" && (
                <div className="flex space-x-4 mt-4">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => addToCart(product, size)} // Use the addToCart from context
                      className=" px-4 py-2 bg-white text-gray-800 hover:bg-gray-800 hover:text-white"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}

               {/* Single size option for "available_os" status */}
               {product.status === "available_os" && (
                <button
                  onClick={() => addToCart(product, "OS")} // Automatically add the single size
                  className=" px-4 py-2 bg-white text-gray-800 hover:bg-gray-800 hover:text-white mt-4"
                >
                  OS
                </button>
              )}

                {/* Display product status only if it's sold out */}
                {product.status === "sold out" && (
                   <p className="text-black-600 mt-2">{product.status}</p>
              )}

            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
            









 {/* Product Image
 <img
              src={product.image}
              alt={product.name}
              className="w-full lg:w-1/3 object-cover"
            />

            {/* Product Details */}
            {/* <div className="flex flex-col">
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
// } */}