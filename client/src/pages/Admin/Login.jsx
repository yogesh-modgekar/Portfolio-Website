
import { message } from 'antd'
import axios from 'axios'
import React from 'react'
import { HideLoading, ShowLoading } from '../../redux/routeSlice';
import { useDispatch } from 'react-redux';

function Login() {

    const [user, setUser] = React.useState({
        username: "",
        password: ""
    })

    const dispatch = useDispatch();

    const login = async()=>{
       try{
          dispatch(ShowLoading());
          const response = await axios.post('http://localhost:8000/api/portfolio/admin-login',user)
          dispatch(HideLoading());
          if(response.data.success){
            message.success(response.data.message);
            localStorage.setItem('token', JSON.stringify(response.data));
            window.location.href='/admin'
          }else{
            message.error(response.data.message);
          }
       }
       catch(error){
           message.error(error.message); 
           dispatch(HideLoading());
       }
    }


  return (
    <div className=' flex justify-center items-center h-screen bg-primary'>
        <div className=' w-90 flex gap-5 p-10 flex-col shadow border border-gray-500 bg-white'>

        <h1 className=' text-secondary text-2xl flex justify-center items-center'>Portfolio Admin-Login:</h1>
        <hr />
        <input type="text" value={user.username} onChange={(e)=>{
            setUser({...user, username: e.target.value})
        }} placeholder='username' />

        <input type="password" value={user.password} onChange={(e)=>{
            setUser({...user, password: e.target.value})
        }} placeholder='password'/>

         <button className=' bg-primary text-white p-2' onClick={login}>Login</button>
        </div>
    </div>
  )
}

export default Login;