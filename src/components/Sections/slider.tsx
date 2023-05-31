import React, { useState, useEffect } from "react";
import Image from "next/image";
import bg from "../../../public/images/footballpitch.png"

const Slider: React.FC = () => (
  <div className="relative h-screen mt-20 text-center bg-slate-200" style={{
    backgroundImage: `url(${bg.src})`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}>
           <h1 className="text-7xl pt-60  text-white drop-shadow-xl"> Football is Life</h1> 
           <p className="text-white ">Football Blog created to educate basic football skills and knowledge to beginners</p>
        </div>

);

export default Slider;
