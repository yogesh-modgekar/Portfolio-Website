

import React, { useEffect } from 'react'
import Header from '../../components/Header';
import {Tabs} from 'antd'
import AdminAbout from './AdminAbout';
import AdminIntro from './AdminIntro';
import { useSelector } from 'react-redux';
import AdminSkill from './AdminSkill';
import AdminProjects from './AdminProjects';
import AdminContact from './AdminContact';
const {TabPane} = Tabs

function Admin() {

  const {portfolioData}= useSelector((state) => state.root )

   useEffect(()=>{
    if(!localStorage.getItem('token')){
      window.location.href='/login';
    }
   },[])

  return (
    <div>
         <Header/>
         <div>
         <h1 className=' text-2xl p-5 text-primary'>Admin Portfolio : </h1>
         </div>
          <h1 className=" text primary flex justify-end mr-5 text-red-500 font-bold text-xl cursor-pointer" onClick={()=>{
            localStorage.removeItem('token')
            window.location.href='/login'
            }}>Logout</h1>
          {portfolioData && <div className=' px-5'>
                <Tabs defaultActiveKey='1'>
                <TabPane tab='Intro' key='1'>
                  <AdminIntro/>
                </TabPane>

                <TabPane tab='About' key='2'>
                <AdminAbout/>
                </TabPane>

                <TabPane tab='Skills' key='3'>
                <AdminSkill/>
                </TabPane>

                <TabPane tab='Projects' key='4'>
                <AdminProjects/>
                </TabPane>

                <TabPane tab='Contacts' key='5'>
                <AdminContact/>
                </TabPane>

                </Tabs>
         </div>}
    </div>
  )
}

export default Admin;