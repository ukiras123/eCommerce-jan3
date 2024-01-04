import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import ForgetPassword from './pages/auth/ForgetPassword'
import Register from './pages/auth/Register'
import Category from './pages/category/Category'
import Client from './pages/client/Client'
import Product from './pages/product/Product'
import Dashboard from './pages/dashboard/Dashboard'
import Order from './pages/order/Order'
import PaymentOption from './pages/payment-option/PaymentOption'
import Profile from './pages/profile/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/forget-password' element={<ForgetPassword />}></Route>

        {/* Private Routes */}
        <Route path='/register' element={<Register />}></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/client' element={<Client />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/payment-option' element={<PaymentOption />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='*' element={<Login />}></Route>

      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
