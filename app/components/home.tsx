import React from 'react'
//import {  FiX } from 'react-icons/fi'; 
//import { useState } from "react";
import Services from './services'
import Team from './team'
import WhatWeDo from './whatWeDo'
import Welcome from './welcome'
import Projects from './projects'

const Home = () => {

  return (
     <div className='border-2 border-black'>
           <Welcome />
              <Team />
                 <Services />
              <Projects />
           <WhatWeDo /> 
      </div>
  )
}

export default Home