import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../pages/Home"
import ProgramsCollection from '../pages/ProgramsCollection'
import ProductDetails from '../pages/ProductDetails'
import Faves from '../pages/Faves'
import Account from '../pages/Account'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contacts from '../pages/Contacts'


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='home'/>} />
    <Route path='home' element={<Home/>} />
    <Route path='programsList' element={<ProgramsCollection/>} />
    <Route path='programDetails/:id' element={<ProductDetails/>} />
    <Route path='favorites' element={<Faves/>} />
    <Route path='account' element={<Account/>} />
    <Route path='login' element={<Login/>} />
    <Route path='signup' element={<Signup/>} />
    <Route path='contacts' element={<Contacts/>} />
  </Routes>
}

export default Routers