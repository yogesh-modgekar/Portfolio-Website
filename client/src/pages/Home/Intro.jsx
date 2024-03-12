
import React from "react"
import { useSelector } from "react-redux";

export default function Intro()
{
const { portfolioData} = useSelector((state) => state.root )
const {intro} = portfolioData;
const {firstName,lastName,caption,description} = intro
    return(
        <div className=" h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
              <h1 className=" text-white">Hii, I'm</h1> 
              <h1 className=" text-secondary text-6xl sm:text-3xl font-semibold">{firstName || ""} {lastName || ""}</h1>
              <h1  className=" text-white text-5xl sm:text-2xl font-semibold">{caption || ""} </h1> 
              <p className=" text-white">{description || ""}</p> 
              <button className=" border-2 border-tertiory text-white px-10 py-5 rounded">Get Started</button>     
        </div>
    )
}