'use client'
import React from 'react'
import Navbar from './Navbar'
import { Provider } from 'react-redux';
import store from '@/app/app/store';


const Navbar1 = () => {
  return (
    <div>
       <Provider store={store}>
           <Navbar />
       </Provider> 
    </div>
  )
}

export default Navbar1
