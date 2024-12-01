"use client";
import { useState } from "react";
import Suggestion from "./suggestion";

const Index = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-contain"
        src="/bg.mp4" // Path to your video in public folder
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional for better text readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold"> Explore, Discover, Experience</h1>
        <div className="mt-4">
          <input
            className="rounded-md p-2 text-black"
            placeholder="where to?"
            onFocus={() => setIsDropdownVisible(true)}
            onBlur={() => setTimeout(() => setIsDropdownVisible(false), 100)}
          />
          <input className="rounded-md p-2 text-black" type="date" />
          <input className="rounded-md p-2 text-black" type="date" />
        </div>
      </div>
      {isDropdownVisible && (
        <div className="absolute top-[50%] left-[32%] bg-white">
          <Suggestion />
        </div>
      )}
    </div>
  );
};

export default Index;
