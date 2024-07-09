"use client"
import Link from "next/link";
import { useState } from "react";



export default function Header() {

    const [burgerMenu, setBurgerMenu] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenu(!burgerMenu);
    };

    const closeBurgerMenu = () => {
        setBurgerMenu(false);
    };

    

  return (
    <div className="bg-white">
            <div className="flex justify-between items-center h-full md:hidden">
                <div className="pl-[45px] pt-[40px]">
                   <Link href={'./'}><img src="/assets/payapi.svg" alt="PayAPI Logo" /></Link> 
                </div>

                <div className="pr-[45px] pt-[45px]">
                    {burgerMenu && (
                        <div
                            className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg z-50"
                            onClick={closeBurgerMenu}
                        ></div>
                    )}
                    <div className="flex pl-4 pt-4">
                        <button onClick={toggleBurgerMenu}>
                            <img src="/assets/brgr.svg" alt="Burger Menu Icon" />
                        </button>
                        <div
                            className={`bg-[#1b262f] h-screen w-56 fixed top-0 right-0 z-50 overflow-y-auto transition-all duration-200 ${
                                burgerMenu ? "translate-x-0" : "translate-x-full"
                            }`}
                        >
                            <button onClick={closeBurgerMenu} className="text-3xl ml-[180px] mt-[20px] text-white">
                                &#10005;
                            </button>
                            <ul className="py-4 mt-16">
                               <Link href={'./pricing'}><li className="px-4 py-2 text-lg font-bold cursor-pointer duration-1000 ml-[50px] text-white">Pricing</li></Link> 
                                <Link href={'./about'}><li className="px-4 py-2 text-lg font-bold cursor-pointer duration-1000 ml-[50px] text-white mt-[10px]">About</li></Link>
                               <Link href={'./contact'}><li className="px-4 py-2 text-lg font-bold cursor-pointer duration-1000 ml-[50px] text-white mt-[10px]">Contact</li></Link> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex justify-between items-center h-full">
                <div className="flex text-center mt-[60px] ml-[40px]">
                    <Link href={"./"}><img src="/assets/payapi.svg" alt="PayAPI Logo" /></Link>
                   <Link href={'./pricing'}> <h1 className="ml-[30px] cursor-pointer mt-[10px] font-semibold text-gray-600">Pricing</h1></Link>
                    <Link href={'./about'}><h1 className="ml-[40px] mt-[11px] font-semibold text-gray-600">About</h1></Link>
                  <Link href={'./contact'}><h1 className="ml-[20px] mt-[11px] font-semibold text-gray-600">Contact</h1></Link>  
                </div>

                <div>
                   <Link href={'./contact'}> <button  className="w-[172px] h-[50px] mt-[90px] mr-[30px] rounded-[20px] bg-[#BA4270] text-white">
                        Schedule a Demo
                    </button></Link>
                </div>
            </div> 


        </div>
  )
}
