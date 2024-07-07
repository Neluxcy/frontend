// project-root/pages/address/page.js

"use client";
import React from 'react';
import Navbar from '../../components/navbar'; // Adjusted path to navbar component

function Pages() {
   return (
       <div className='h-full w-full' style={{ backgroundColor: "#C5C4FF" }}>
           <Navbar />
           <div className='p-20 flex'>
               <div className='flex flex-col gap-8 items-center'>
                   <div className='text-3xl font-bold'>Jacky</div>
               </div>
               <div className='flex flex-col pt-10 gap-5'>
                   <div className='bg-white rounded-3xl flex flex-col m-3 p-5'>
                       <div className='text-2xl font-bold'>Address</div>
                       <div className="bg-gradient-to-l from-purple-500 to-blue-500 p-5 rounded-3xl shadow-xl">
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>Country :</div>
                               <div>Sri Lanka</div>
                           </div>
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>Name :</div>
                               <div>Jacky</div>
                           </div>
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>Mobile Num :</div>
                               <div>+94-123456789</div>
                           </div>
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>Land Mark :</div>
                               <div>Nallur</div>
                           </div>
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>Pin Code :</div>
                               <div>20,000</div>
                           </div>
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>Province :</div>
                               <div>Northern</div>
                           </div>
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>City :</div>
                               <div>Badulla</div>
                           </div>

                           <button className='btn bg-white rounded-3xl p-2 font-bold'>
                               Edit Address
                           </button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   );
}

export default Pages;
