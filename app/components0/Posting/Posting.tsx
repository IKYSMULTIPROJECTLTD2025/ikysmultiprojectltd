'use client'
import React from "react";
import { useState } from "react";
import ProductImages from "./Posting1";
import ProductBanner from "./Posting2";
import ProductVideos from "./Posting3";


const Posting = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('ProductImages');

  const getButtonClasses = (route: string) =>
    `text-sm text-white w-20 h-7 max-sm:h-6 rounded-sm mr-1 ${
      selectedRoute === route ? "bg-red-950" : "bg-blue-950 hover:bg-green-950"
    }`;


  return (
    <div className='flex flex-col  pt-1 sm:pt-1 w-full  border-2 border-blue-950 h-auto bg--400'>

        <div className='flex justify-center overflow-x-auto '>
          <div>
            <button onClick={() => setSelectedRoute('ProductImages')}
            className={getButtonClasses('ProductImages')}
            >Photos</button>
          </div>

          <div>
            <button onClick={() => setSelectedRoute('ProductBanner')}
            className={getButtonClasses('ProductBanner')}
            >Banner</button>
          </div>

          <div>
            <button onClick={() => setSelectedRoute('ProductVideos')}
            className={getButtonClasses('ProductVideos')}
            >Videos</button>
          </div>
      
        </div>

       <div className='flex justify-center flex-wrap  border-2  border-blue-950 h-auto 
       sm:m-1 bg-slate-300 w-5xl overflow-y-auto p-1 gap-3 max-md:mt-1 '>
       
           {selectedRoute === 'ProductImages' && <ProductImages />}  
           {selectedRoute === 'ProductBanner' && <ProductBanner/>}
           {selectedRoute === 'ProductVideos' && <ProductVideos />}

       </div>
    </div> 
  )
}

export default Posting

