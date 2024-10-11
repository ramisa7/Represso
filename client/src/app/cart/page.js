// //issue: 
// the setup is not what we want 
// product list is being overwritten 


"use client";

// src/app/bag/page.js
import React, { useEffect, useState } from "react";

export default function BagPage() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      console.log("Cart data from localStorage: ", JSON.parse(storedCart)); // Log the cart data
      setCart(JSON.parse(storedCart)); // Load the stored cart
    }
  }, []);
  

  return (
    <div className="min-h-screen bg-white text-slate-800 p-40">
      

      {cart.length === 0 ? (
        <p>Your bag is empty.</p>
      ) : (
        <div className="space-y-8">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-4">
              <div>
                <h2 className="text-xl font-serif">{item.name}</h2>
                <p className="text-sm text-gray-600">Size: {item.size}</p>
              </div>
              <p className="text-lg font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


// export default function Cart() {
//   // Sample data with initial quantities
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Street’s Knit Jersey",
//       size: "S",
//       price: 185,
//       quantity: 1,
//       extraCost: 3,
//     },
//     {
//       id: 2,
//       name: "REPRESSO BIC Lighter",
//       size: "OS",
//       price: 8,
//       quantity: 1,
//       extraCost: 2,
//     },
//   ]);

//   // Function to handle quantity change
//   const handleQuantityChange = (id, delta) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: Math.max(1, item.quantity + delta), // Ensure quantity does not go below 1
//             }
//           : item
//       )
//     );
//   };

//   return (
//     <div className="container mx-auto p-4 pt-20">
//       {/* Cart Items Section */}
//       <div className="flex flex-col gap-6 mb-8">
//         {cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="flex flex-col md:flex-row items-center justify-between bg-gray-800 text-white p-4 rounded-lg"
//           >
//             <div className="flex-1 text-left">
//               <h3 className="font-serif text-lg">{item.name}</h3>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="text-sm">{item.size}</span>
//               <span>{item.price} €</span>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => handleQuantityChange(item.id, -1)}
//                   className="px-2"
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   onClick={() => handleQuantityChange(item.id, 1)}
//                   className="px-2"
//                 >
//                   +
//                 </button>
//               </div>
//               <span>{item.price} €</span>
//               <span>+{item.extraCost} €</span>
//               <span className="font-bold">
//                 {(item.price + item.extraCost) * item.quantity} €
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Form Section */}
//       <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//         {/* Shipping Fields */}
//         <div>
//           <h4 className="font-bold">Shipping</h4>
//           <input
//             type="text"
//             placeholder="Address field*"
//             className="border p-2 w-full mt-2 text-black bg-white"
//           />
//           <input
//             type="text"
//             placeholder="Zip code*"
//             className="border p-2 w-full mt-2 text-black bg-white"
//           />
//           <input
//             type="text"
//             placeholder="County*"
//             className="border p-2 w-full mt-2 text-black bg-white"
//           />
//           <input
//             type="text"
//             placeholder="Country*"
//             className="border p-2 w-full mt-2 text-black bg-white"
//           />
//         </div>

//         {/* Invoice Fields */}
//         <div>
//           <h4 className="font-bold">Invoice</h4>
//           <input
//             type="text"
//             placeholder="Address field"
//             className="border p-2 w-full mt-2 text-black bg-white"
//           />
//           <input
//             type="text"
//             placeholder="Zip code"
//             className="border p-2 w-full mt-2 text-black bg-white"
//           />
//           <input
//             type="text"
//             placeholder="County"
//             className="border p-2 w-full mt-2 text-black bg-white"
//           />
//           <input
//             type="text"
//             placeholder="Country"
//             className="border p-2 w-full mt-2 text-black bg-white"
//           />
//         </div>

//         {/* Personal Fields */}
//         <div className="md:col-span-2">
//           <h4 className="font-bold">Personal</h4>
//           <input
//             type="text"
//             placeholder="Full name*"
//             className="border p-2 w-full mt-2 text-black bg-white"
//           />
//           <input
//             type="email"
//             placeholder="Email address*"
//             className="border p-2 w-full mt-2 text-black bg-white"
//           />
//           <label className="flex items-center mt-2">
//             <input type="checkbox" className="mr-2" />
//             Newsletter
//           </label>
//         </div>
//       </form>

//       {/* Summary and Payment Section */}
//       <div className="flex justify-between items-center">
//         <div className="text-xl font-bold">
//           Total: {cartItems.reduce((acc, item) => acc + (item.price + item.extraCost) * item.quantity, 0)} €
//         </div>
//         <button className="text-blue-600 font-bold hover:underline">
//           PayPal
//         </button>
//       </div>
//     </div>
//   );
// }



// // export default function Bag() {
// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-bold mb-4">Your Bag</h1>
// //       {/* Add your Bag content here */}
// //       <p>Currently, your bag is empty.</p>
// //     </div>
// //   );
// // }
