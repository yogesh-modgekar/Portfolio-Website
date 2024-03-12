
import { Form ,Input } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {ShowLoading,HideLoading} from "../../redux/routeSlice"
import axios from 'axios'
import {message} from 'antd'

function AdminIntro() {

   const dispatch = useDispatch();
   const {portfolioData} = useSelector((state)=>state.root);
   const onFinish = async(values)=>{
    try {
      dispatch(ShowLoading())  
      const response = await axios.post('http://localhost:8000/api/portfolio/update-intro',{
        ...values,
        _id : portfolioData.intro._id,
      });
      dispatch(HideLoading())
      if(response.data.success){
          message.success(response.data.message)
      }else{
        message.error(response.data.message)
      }
    } catch (error) {
        dispatch(HideLoading())
        message.error(error.message)
    }
  }

  return (
    <div>

           <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.intro}>
               <Form.Item name='firstName'label='firstName'>
                  <input type="text" placeholder='Enter Your Name' />
               </Form.Item>

               <Form.Item name='lastName'label='lastName'>
                  <input type="text" placeholder='Enter Your Sirname' />
               </Form.Item>

               <Form.Item name='caption'label='Caption'>
                  <input type="text" placeholder='Caption' />
               </Form.Item>

               <Form.Item name='description'label='Description'>
                  <textarea placeholder='Description' />
               </Form.Item>

               <div className="flex justify-end w-full">
                   <button className='px-10 py-2 bg-slate-900 text-white' type='submit'>SAVE</button>
               </div>
           </Form>

    </div>
  )
}

export default AdminIntro;