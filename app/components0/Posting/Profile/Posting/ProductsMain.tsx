'use client'
import { FaSearch } from 'react-icons/fa';
import Search from "./Search";
import Posting from './Posting';
import Filters from './Filters';
import React, { useState, useEffect } from 'react'
import Back from "./Back";
import { useDispatch } from 'react-redux';
import { setQuery } from '@/app/app/searchSlice';


const ProductsMain = () => {
  
  const [SearchVisible, setSearchVisible] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string>('Posting');

  const handleSearch = ()=>{
    setSearchVisible(!SearchVisible);

  };      const  closeSearch = ()=> {
    setSearchVisible(false);  
       };

       const dispatch = useDispatch();
       const [searchQuery, setSearchQuery] = useState('');

     
       useEffect(() => {
         const storedSearchQuery = sessionStorage.getItem('searchQuery');
         if (storedSearchQuery) {
           setSearchQuery(storedSearchQuery);
         }
       }, []);
     
       const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
         setSearchQuery(event.target.value);
       };
     
       const handleSearch1 = () => {
         dispatch(setQuery(searchQuery));
         sessionStorage.setItem('searchQuery', searchQuery);
       };


  return (
    <div className=" w-full ">
        <div className="border-2 border-indigo-900 py-1  max-sm:py-1 w-full  ">

            <div className="flex justify-items-center  max-lg:justify-between   overflow-x-auto  ">
              
               
               <button onClick={() => setSelectedRoute('Posting')}
                type="button" className="text-lime-100 bg-indigo-950
                ml-1 rounded-sm h-7 max-sm:h-6 w-auto pl-3 pr-3 mr-1 text-sm
                lg:px-7 hover:bg-neutral-700  ">AllProducts</button>
                
                
                <input type="text" className="  bg-white  
                flex-1 border border-blue-950 
                px-28 max-md:px-20 md:text-sm
                sm:rounded-l-lg
                max-sm:px-5 max-sm:rounded-r-full max-sm:hidden  "
                placeholder="search for here  " 
                value={searchQuery}
                onChange={handleInputChange} /> 
                
                <button type="submit" 
                className="bg-red-900
                 ml-0 text-slate-200 hover:bg-green-950
                rounded-r-lg px-4 max-sm:hidden"
                onClick={handleSearch1}
                >search</button>

             <button  onClick={handleSearch}  className='text-2xl text-blue-950 
            sm:hidden mr-1 '>
                {SearchVisible ? (
             <span  onClick={closeSearch} 
             ><Back  /></span>  ) : (
             <FaSearch  />  )}
            
            </button>

            <div  >
            {SearchVisible && 
            
            
            (<Search />)
               
               }
               </div>

               <button onClick={() => setSelectedRoute('Filters')}
                 type="button" className="text-lime-100 bg-indigo-950
                ml-1 rounded-sm h-7 max-sm:h-6 text-sm mr-1  w-auto pl-5 pr-5
                 hover:bg-neutral-700 
                 ">Filters</button>

              
           </div>
           </div>
           <div>
            <div  >
            
            </div>
             
              
           {selectedRoute === 'Posting' && <Posting />}
           {selectedRoute === 'Filters' && <Filters />}
          
          </div>      
    </div>
  )
}

export default ProductsMain


