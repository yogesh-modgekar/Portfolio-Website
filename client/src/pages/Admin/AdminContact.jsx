
import { Form } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {ShowLoading,HideLoading} from "../../redux/routeSlice"
import axios from 'axios'
import {message} from 'antd'

function AdminContact() {

   const dispatch = useDispatch();
   const {portfolioData} = useSelector((state)=>state.root);

   const onFinish = async(values)=>{
    try {
      dispatch(ShowLoading())  
      const response = await axios.post('http://localhost:8000/api/portfolio/update-contact',{
        ...values,
        _id: portfolioData.contacts._id
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

           <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.Contact}>

               <Form.Item name='Name'label='Name'>
                  <input placeholder='Enter Your Name' />
               </Form.Item>

               <Form.Item name='Gender'label='Gender'>
                  <input placeholder='gender' />
               </Form.Item>

               <Form.Item name='Age'label='Age'>
                  <input placeholder='age' />
               </Form.Item>

               <Form.Item name='Email'label='Email'>
                  <input placeholder='Email' />
               </Form.Item>

               <Form.Item name='Mobile'label='Mobile'>
                  <input placeholder='Mobile' />
               </Form.Item>

               <Form.Item name='Address'label='Address'>
                  <input placeholder='Address' />
               </Form.Item>


               <div className="flex justify-end w-full">
                   <button className='px-10 py-2 bg-slate-900 text-white' type='submit'>SAVE</button>
               </div>
           </Form>

    </div>
  )
}

export default AdminContact;