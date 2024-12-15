import React from "react";
import F24 from "../assets/F24.png"


export const Header = () => {
  return (
    <div className=" text-3xl font-medium items-center gap-40 p-3  bg-black text-orange-400 pb-2 pt-2 w-[272px] hover:text-white transition-all duration-1000 ease-in-out   shadow-2xl shadow-orange-900 mx-auto rounded-2xl flex justify-between ">
      <a href=""><img src={F24} alt="" className="flex-1 hover:cursor-pointer z-10 h-auto w-6"/></a>
      <h1 className=" text-xl flex-1">
        Flow24
      </h1>
    </div>)
}