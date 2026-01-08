import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Jobs from './pages/Jobs.jsx'
import Dashboard from './pages/Dashboard.jsx'
import PostApplication from './pages/PostApplication.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux'
import { getUser } from './store/slices/userSlice.js'


const App = () => {

   const dispatch = useDispatch();

   useEffect(()=>{
    dispatch(getUser());
   },[]);

  return (
   <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post/application/:jobId" element={<PostApplication />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
      <ToastContainer position='top-right' theme='dark'/>
    </Router>
   </>
  )
}

export default App
 
