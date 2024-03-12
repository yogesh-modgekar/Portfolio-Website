
import { useEffect, useState } from 'react';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import axios from 'axios'
import Home from './pages/Home';
import Loader from './components/Loader'
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, SetPortfolioData, ShowLoading} from './redux/routeSlice';
import Admin from './pages/Admin';
import Login from './pages/Admin/Login';


function App() {

  const {loading, portfolioData ,reloadData} = useSelector((state) => state.root )
  const dispatch = useDispatch();

  const getPortfolioData = async()=>{
    try
    { 
      dispatch(ShowLoading())
       const response = await axios.get('http://localhost:8000/api/portfolio/get-portfolio-data')
       console.log(response.data)
       dispatch(SetPortfolioData(response.data))
       dispatch(ReloadData(false))
       dispatch(HideLoading())
    }
    catch(err)
    {
      dispatch(HideLoading())
    }
  }

      useEffect(()=>{
        if(!portfolioData){
        getPortfolioData()
        }
      },[portfolioData]);

      useEffect(()=>{
        if(reloadData){
          getPortfolioData();
        }
      },[reloadData])

  return (
    <>
    <BrowserRouter>
      {loading ? <Loader/> : null}
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/admin' element={<Admin/>}/>
           <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
