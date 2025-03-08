// "use client";
// import React, { useState, useEffect } from "react";
import Homepage from "@/app/dashboard/Homepage";
import Image from "next/image";

// const isUserVisitor = () => {
//   // if (typeof window !== 'undefined') {
//     const role = localStorage.getItem("role");
//     return role === "visitor";
//   // }
//   // return false;
// };

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <nav className="bg-black-500 text-white p-2 pr-5 flex justify-between items-center">
        <div className="flex items-center">
          <a href="https://commanderiecondat.fr"> <img src="/logo.png" alt="Logo" className="h-12 mr-5" /></a>
          <span className="font-bold font-size:large mr-2">INVENTAIRE DE l'ORDRE DE MALTE CONDAT</span>
          <span>Conseil départemental de la Haute-Garonne, Archives départementales</span>
        </div>
        <div className="flex space-x-4">
          {/* {isUserVisitor() ? (
            <a href="/login" className="hover:underline">Log in</a>
          ) : (
            <a href="/login"className="hover:underline">Log out</a>
          )} */}
          <a href="/visitor" className="hover:underline">Home</a>
          <a href="/login" className="hover:underline">Log in</a>
          <a href="https://www.linkedin.com/company/commanderie-de-condat" >
            <Image
              aria-hidden
              src="/linkedin.svg"
              alt="Globe icon"
              width={25}
              height={25}
            />
          </a>
          <a href="https://github.com/CommanderieCondat/archive-app" >
            <Image
              aria-hidden
              src="/github-mark-white.svg"
              alt="Globe icon"
              width={25}
              height={25}
            />
          </a>
        </div>
      </nav>
      <Homepage />
    </div>
  );
}
