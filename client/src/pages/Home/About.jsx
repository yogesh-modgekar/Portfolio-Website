
import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function About() {
const { portfolioData} = useSelector((state) => state.root )
const {about} = portfolioData;
const {imageUrl,desciption} = about
  return (
    <div>
        <SectionTitle title='About :'/>
        <div className="flex sm:flex-col">
            <img className=' h-[50vh] py-10'src={imageUrl} alt="" />
           
           <div className='flex flex-col gap-5 items-center justify-center px-10'>

            <p className=' text-white'>
               {desciption || ""}
            </p>

           </div>

        </div>
    </div>
  )
}

export default About