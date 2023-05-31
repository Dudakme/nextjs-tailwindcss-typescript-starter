import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="flex fixed items-center justify-between flex-wrap bg-white p-6 w-full border-b-gray- border shadow-sm z-20 opacity-100">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <Link href='/'>
          <span className="font-semibold text-xl tracking-tight hover:cursor-pointer">
            <Image src="/images/Logo.png" width={50} height={30} alt='hi'></Image>
          </span>
        </Link>
      </div>

      <div className="flex-grow flex items-center ml-4">
        <div className="text-sm flex-grow">
        
        </div>
        <div className="m-auto">
          <a
            href="https://bit.ly/3RKwYlQ"
            className="inline-block px-4 py-2 leading-none border text-md  rounded-2xl shadow-sm text-black hover:bg-blue4600 mt-0"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
