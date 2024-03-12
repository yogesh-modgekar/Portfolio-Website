
import { Form } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {ShowLoading,HideLoading} from "../../redux/routeSlice"
import axios from 'axios'
import {message} from 'antd'

function AdminAbout() {

   const dispatch = useDispatch();
   const {portfolioData} = useSelector((state)=>state.root);
   const onFinish = async(values)=>{
    try {
      dispatch(ShowLoading())  
      const response = await axios.post('http://localhost:8000/api/portfolio/update-about',{
        ...values,
        _id: portfolioData.about._id,
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

           <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.about}>

               <Form.Item name='imageUrl'label='imageUrl'>
                  <input placeholder='Enter Image Url' />
               </Form.Item>

               <Form.Item name='desciption'label='Description'>
                  <textarea placeholder='Description' />
               </Form.Item>


               <div className="flex justify-end w-full">
                   <button className='px-10 py-2 bg-slate-900 text-white' type='submit'>SAVE</button>
               </div>
           </Form>

    </div>
  )
}

export default AdminAbout;