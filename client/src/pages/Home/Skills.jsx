import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function Skills() {
   
   const skills = [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT-JS",
      "TAILWIND",
      "NODE-JS",
      "EXPRESS-JS",
      "MONGO-DB",
      "GIT/GIT-HUB"
    ]

  return (
    <>
        <SectionTitle title='Skills :'/>
         
         <div className='py-5'>
        <h1 className='text-tertiory text text-xl'> Here are the few technologies I've been working with recently
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
        {skills.map((item,index)=>{
            return(
            <div className='border border-tertiory py-3 px-10 sm:px-5 sm:text-sm sm:flex flex-wrap'>
                <h1 className='text-white'>{item}</h1>
            </div>
            )
        })
        }
        </div>
        </div>
    </>
  )
}

export default Skills;