// //issue: 
// the setup is not what we want 
// price is being wrong 

"use client";

// src/app/bag/page.js
import React, { useEffect, useState } from "react";

export default function BagPage() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Load the stored cart
    }
  }, []);

  // Function to handle quantity updates
  const updateQuantity = (index, delta) => {
    const updatedCart = [...cart];
    
    // Make sure quantity is a valid number before updating
    if (typeof updatedCart[index].quantity === 'number') {
      updatedCart[index].quantity += delta;
      if (updatedCart[index].quantity < 1) {
        updatedCart[index].quantity = 1; // Prevent quantity from going below 1
      }
    } else {
      // Initialize quantity to 1 if it's NaN or undefined
      updatedCart[index].quantity = 1;
    }
    
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };
  
  // Function to handle item removal
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  // Function to extract price and convert it to a number
  const extractNumericPrice = (priceString) => {
    // Use regex to remove non-numeric characters except decimal points
    const numericString = priceString.replace(/[^\d.]/g, "");
    const parsedPrice = parseFloat(numericString);
  
    // If the parsing fails (e.g., the string is empty or invalid), return 0
    return isNaN(parsedPrice) ? 0 : parsedPrice;
  };
  
  
  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => {
    const itemPrice = extractNumericPrice(item.price); // Ensure the price is a number
    return acc + (itemPrice * item.quantity);
  }, 0);  // Default accumulator value is 0

 
  return (
    <div className={`min-h-screen bg-white text-slate-800 ${cart.length > 0 ? 'p-40' : ''}`}>
      {/* Check if the cart is empty */}
      {cart.length === 0 ? (
        <div className="flex justify-center items-center h-screen overflow-hidden">
          <p
            className="text-white text-lg"
            style={{ backgroundColor: "rgba(89, 91, 142, 1)" }}
          >
            Your bag is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-8">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4">
                {/* Item Details with background color */}
                <div className="flex flex-col lg:flex-row items-center gap-4 text-white p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.66)" }}>
                  {/* Product name and size */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4"> 
                    <h2 className="text-xl font-serif">{item.name}</h2>
                    <p className="text-xl font-serif lg:ml-4">{item.size}</p>
                  </div>
  
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => removeItem(index)}
                      className="text-white text-xl font-bold"
                    >
                      🗑️
                    </button>
                    
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="bg-gray-500 text-white px-2"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="bg-gray-500 text-white px-2"
                    >
                      +
                    </button>

                  </div>
                </div>
  
                {/* Item Price outside of the background */}
                <div className="ml-4">
                  <p className="font-serif text-lg font-bold">
                    {(extractNumericPrice(item.price) * item.quantity).toFixed(2)} €
                  </p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Shipping, Invoice, and Personal Info Section */}
          <div className="mt-12">
            <div className="grid md:grid-cols-4 md:gap-[60px] gap-8">
              {/* Shipping Section */}
              <div className="md:col-span-1 ">
                <h3 className="font-serif text-lg font-bold">Shipping</h3>
              </div>
              
              <div className="md:col-span-1 ">
                <input
                  className="w-full font-serif italic mt-2 md:mt-0"
                  type="text"
                  placeholder="address field*"
                
                />
              </div>
              <div className="md:col-span-1 ">
                <input
                  className="w-full font-serif italic mt-2 md:mt-0"
                  type="text"
                  placeholder="zip code*"
                />
              </div>
              <div className="md:col-span-1 ">
              <input
                className="w-full font-serif italic mt-2 md:mt-0"
                type="text"
                placeholder="country*"
              />
              </div>
              
              
  
              {/* Invoice Section */}
              <div className="md:col-span-1"  style={{ color: "rgba(0, 0, 0, 0.66)" }}>
                <h3 className="font-serif text-lg font-bold">Invoice</h3>
              </div>
              <div className="md:col-span-1">
                <input
                  className="w-full font-serif italic mt-2 md:mt-0"
                  type="text"
                  placeholder="address field*"
                  
                />
              </div>
              <div className="md:col-span-1">
                <input
                  className="w-full font-serif italic mt-2 md:mt-0"
                  type="text"
                  placeholder="zip code*"
                  
                />
              </div>
              <div className="md:col-span-1">
                <input
                  className="w-full font-serif italic mt-2 md:mt-0"
                  type="text"
                  placeholder="country*"
                
                />
              </div>
  
              {/* Personal Info Section */}
              <div className="col-span-1">
                <h3 className="font-serif text-lg font-bold">Personal</h3>
              </div>
              <div className="col-span-1">
                <input
                  className="w-full font-serif italic"
                  type="text"
                  placeholder="full name*"
                />
              </div>
              <div className="col-span-1">
                <input
                  className=" w-full font-serif italic"
                  type="text"
                  placeholder="email address*"
                />
              </div>
              <div className="col-span-1 flex items-center">
                <label className="flex items-center font-serif italic">
                  <input type="checkbox" className="mr-2" />
                  Newsletter
                </label>
              </div>
            </div>
          </div>
  
          {/* Total Price Section */}
          <div className="flex justify-between items-center mt-16">
            <span className="font-serif text-xl">Total</span>
            <span className="font-serif text-xl font-bold">{totalPrice.toFixed(2)} €</span>
          </div>
        </>
      )}
    </div>
  );
  
}
