
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';


function Pages() {

   return (


       <div className='h-full w-full' style={{ backgroundColor: "#C5C4FF" }}>
           <Navbar />
           <div className='p-20 flex'>
               <div className='flex flex-col  gap-8 items-center'>
                   <div className='text-3xl font-bold'>Order</div>
               </div>
               <div className='flex flex-col  pt-10 gap-5'>
                   <div className='bg-white rounded-3xl flex flex-col m-3 p-5'>
                       <div className='text-2xl font-bold'>iphone 12</div>
                       <div className="bg-gradient-to-l from-purple-500 to-white-500 p-5 rounded-3xl shadow-xl">
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>Date :</div>
                               <div>12th may 2024</div>
                           </div>
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>Total amount :</div>
                               <div>100000</div>
                           </div>
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>MRP :</div>
                               <div>123000</div>
                           </div>
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>Seller num :</div>
                               <div>Antony - #9801234</div>
                           </div>
                       </div>
                   </div>
                   <div className='bg-white rounded-3xl flex flex-col m-3 p-5'>
                       <div className='text-2xl font-bold'>iphone 12</div>
                       <div className="bg-gradient-to-l from-purple-500 to-white-500 p-5 rounded-3xl shadow-xl">
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>Date :</div>
                               <div>12th may 2024</div>
                           </div>
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>Total amount :</div>
                               <div>100000</div>
                           </div>
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>MRP :</div>
                               <div>123000</div>
                           </div>
                           <div className='flex justify-start gap-2'>
                               <div className='font-bold'>Seller num :</div>
                               <div>Antony - #9801234</div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   );
}

export default Pages;



