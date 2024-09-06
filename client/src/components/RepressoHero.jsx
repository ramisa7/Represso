import React from "react";

function RepressoHero() {
  return (
    <main className="flex overflow-hidden flex-col tracking-tighter leading-none whitespace-nowrap bg-white text-[268px] text-slate-500 max-md:text-4xl">
      <section className="flex relative flex-col w-full min-h-[900px] pt-[632px] rotate-[2.7755575615628914e-17rad] max-md:pt-24 max-md:max-w-full max-md:text-4xl">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/737b01bf45d336c3e3e7a1d9d6fa42776eae5a7d7ef56c8fdddec0db7c15ec2f?placeholderIfAbsent=true&apiKey=b08032bf87d54b9ab18475074bc46c1d" 
          alt="Represso background" 
          className="object-cover absolute inset-0 size-full" 
        />
        <h1>REPRESSO</h1>
      </section>
    </main>
  );
}

export default RepressoHero;