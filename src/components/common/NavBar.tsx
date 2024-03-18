"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import MainButton from "./MainButton";
import Button from "../shared/Button";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-[#FFF2E1] p-4">
        <div className="flex justify-between mx-[41px] items-center">
          <div>
            <Image src="/images/logo.png" alt="logo"  height={100} width={100}/>
          </div>
          
          <div className="flex items-center gap-[40px] select-none">
          {NAV_LINKS.map((link : any) => (
              <Link href={link.href} key={link.key} className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}>{link.label}</Link>
             	))}
           
            <Button title="Login" className="bg-white text-[#6C6C6C] w-[120px] h-[50px] shadow-xl hover:opacity-90 "/>
            <Button title="Sign Up" className="bg-[#F48C06] text-[#FFFFFF] w-[120px] h-[50px] shadow-xl hover:opacity-90 "/>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
          <Image src="/images/logo.png" alt="logo"  height={100} width={100}/>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <Menu  className="cursor-pointer animate-in fade-in zoom-in"
              onClick={toggleMenu}/>
              
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
            <div className="flex flex-col  gap-[40px] select-none">
          {NAV_LINKS.map((link : any) => (
              <Link href={link.href} key={link.key} className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}>{link.label}</Link>
             	))}
           
            <Button title="Login" className="bg-white text-[#6C6C6C] w-[120px] h-[50px] shadow-xl hover:opacity-90 "/>
            <Button title="Sign Up" className="bg-primary text-[#FFFFFF] w-[120px] h-[50px] shadow-xl hover:opacity-90 "/>
          </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
