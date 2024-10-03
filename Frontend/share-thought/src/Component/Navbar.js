import React, { useState } from "react";

const Navbar = () => {
  const [isclicked, setIsclicked] = useState(false);

  return (
    <>
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Share Thought</div>
        <div className={`hidden md:flex justify-start gap-5`}>
          <a href="/" className="text-white hover:bg-blue-700 p-2 rounded">
            Home
          </a>
          <a href="/about" className="text-white hover:bg-blue-700 p-2 rounded">
            About
          </a>
          <a
            href="/services"
            className="text-white hover:bg-blue-700 p-2 rounded"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-white hover:bg-blue-700 p-2 rounded"
          >
            Contact
          </a>
          <a
            href="/contact"
            className="text-white hover:bg-blue-700 p-2 rounded"
          >
            Login
          </a>
          <a
            href="/contact"
            className="text-white hover:bg-blue-700 p-2 rounded"
          >
            Sign Up
          </a>
        </div>
        
        <div className={`md:hidden`}>
          <button className="text-white focus:outline-none"
          onClick={()=>{
            setIsclicked(!isclicked);
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <div className={` bg-blue-500 p-4 ${isclicked ? "flex md:hidden flex-col justify-start gap-5" : "hidden" } `}>
          <a href="/" className="text-white hover:bg-blue-700 p-2 rounded">
            Home
          </a>
          <a href="/about" className="text-white hover:bg-blue-700 p-2 rounded">
            About
          </a>
          <a
            href="/services"
            className="text-white hover:bg-blue-700 p-2 rounded"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-white hover:bg-blue-700 p-2 rounded"
          >
            Contact
          </a>
          <a
            href="/contact"
            className="text-white hover:bg-blue-700 p-2 rounded"
          >
            Login
          </a>
          <a
            href="/contact"
            className="text-white hover:bg-blue-700 p-2 rounded"
          >
            Sign Up
          </a>
        </div>
       </>
  );
};

export default Navbar;
