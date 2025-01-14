// src/app/page.js
//complete 
import React from "react";
import Link from "next/link"; 

function RepressoHero() {
  return (
    <div
      className="flex flex-col h-screen"
      style={{ backgroundColor: "rgb(239, 58, 66)" }}
    >
      <section className="relative flex flex-col justify-end w-full h-full px-8">
        <div className="flex items-end justify-center w-full h-full mb-[15vh] sm:-mb-[5vh] ">  
          <Link href="/collection"> {/* Wrap the text with Link component */}
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
      </section>
    </div>
  );
}



export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <RepressoHero />
    </div>
  );
}



