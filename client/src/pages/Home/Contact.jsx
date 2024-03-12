
import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Contact() {

    const { portfolioData} = useSelector((state) => state.root )
    const {contacts} = portfolioData;
  return (
    <div>
        <SectionTitle title='Contact Me :'/>

        <div className='flex sm:flex-col items-center justify-center'>
            <div className='flex flex-col gap-1 text-sm'>
                <h1 className=' text-white'>{'{'}</h1>
                  {
                     Object.keys(contacts).map((key)=>{
                           return(
                            key !== '_id' && (
                            <h1 className='ml-5'>
                                <span className='text-white'>{key} : </span> 
                                <span className='text-white'>{contacts[key]}</span>
                            </h1>
                            )
                           )
                     })
                  }

                <h1 className=' text-white'>{'}'}</h1>
            </div>
            <div className='h-[500px] py-32 ml-20 sm:py-5 sm:ml-5'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHo9OIWFSxAiylc3Km3drPlkcEXDGwQtBLA&usqp=CAU" alt="" />
            </div>
        </div>
    </div>
  );
}

export default Contact;