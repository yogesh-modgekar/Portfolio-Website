
import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Projects() {
    const [selectedItemIndex,setSelectedItemIndex] = React.useState(0);
    const { portfolioData} = useSelector((state) => state.root )
    const {projects} = portfolioData;
  return (
    <>
        <SectionTitle title='Projects :'/>

        <div className='flex py-10 gap-20 sm:flex-col'>

             <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:ovwerflow-x-scroll sm:w-full'>
               {
                projects.map((project,index)=>{
                    return(
                        <div onClick={()=>{
                            setSelectedItemIndex(index);
                        }} className=' cursor-pointer'>
                           <h1 className={`text-xl px-5 ${selectedItemIndex === index 
                            ? 'text-tertiory border-l-4 -ml-1 bg-[#1a7f5a31] py-3'
                            :'text-white'}`}>{project.title}
                            </h1>
                         </div>   
                    )
                })
               }
             </div>

             <div className='flex items-center justify-center gap-10 sm:flex-col'>
                  <img src={projects[selectedItemIndex].image} alt="not found" className='h-60 w-72 px-10' />
                  <div className='flex flex-col gap-5'>
                <h1 className="text-secondary text-xl sm:text-sm sm:px-1">
                    {projects[selectedItemIndex].title}
                </h1>

                <p className="text-white">{projects[selectedItemIndex].description}</p>

                <p className=' text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit maiores possimus commodi voluptates omnis? Dolores ipsam maxime omnis numquam possimus velit autem sequi officiis sunt, quas, non nostrum tempore iure?</p>
                  </div>

             </div>

        </div>
    </>
  )
}

export default Projects;