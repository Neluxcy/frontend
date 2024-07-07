"use client"
import React from 'react';
import Navbar from '../../components/navbar';

function Pages() {


   return (
       <div className='h-full w-full' style={{ backgroundColor: "#C5C4FF" }}>
           <Navbar />
           <div className='p-20 flex'>
               <div className='flex flex-col  gap-8 items-center'>
                   <div className='text-3xl font-bold'>Jacky</div>
               </div>
               <div className='flex flex-col  pt-10 gap-5'>
                   <div className='bg-white rounded-3xl flex flex-col m-3 p-5'>
                       <div className='text-2xl font-bold'>Address</div>
                       <div className="bg-gradient-to-l from-purple-500 to-blue-500 p-5 rounded-3xl shadow-xl">
                           <input
                               type="text"
                               name="color"
                               placeholder="Country"
                               className="block w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 rounded-3xl shadow-xl border border-gray-300 mb-2"
                           />
                           <input
                               type="text"
                               name="price"
                               placeholder="Name*"
                               className="block w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 rounded-3xl shadow-xl border border-gray-300 mb-2"
                           />
                           <input
                               type="text"
                               name="description"
                               placeholder="Mobile Number*"
                               className="block w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 rounded-3xl shadow-xl border border-gray-300 mb-2"
                           />
                           <input
                               type="text"
                               name="description"
                               placeholder="LandMark"
                               className="block w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 rounded-3xl shadow-xl border border-gray-300 mb-2"
                           />
                           <input
                               type="text"
                               name="description"
                               placeholder="Pincode"
                               className="block w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 rounded-3xl shadow-xl border border-gray-300 mb-2"
                           />
                           <input
                               type="text"
                               name="description"
                               placeholder="Province"
                               className="block w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 rounded-3xl shadow-xl border border-gray-300 mb-2"
                           />
                           <input
                               type="text"
                               name="description"
                               placeholder="City"
                               className="block w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 rounded-3xl shadow-xl border border-gray-300 mb-2"
                           />
                           <div className=' gap-9 '>
                           <button className='btn bg-white rounded-3xl p-2  font-bold'>
                               Save Address
                           </button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   );
}

export default Pages;




