"use client"
import React, { useState } from 'react';
import Image from 'next/image';
// import Navbar from '../components/navbar';
import AuctionModal from '../auction/page'; // Adjust the path as needed

function Pages() {
 const [showModal, setShowModal] = useState(false);

 return (
   <div className='h-full w-full' style={{ backgroundColor: "#C5C4FF" }}>
     {/* <Navbar /> */}
     <div className='p-20 flex'>
       <div className='flex flex-col w-1/3 gap-8 items-center'>
         <div className='text-3xl font-bold'>iPhone</div>
         <div className='flex w-150'>
           <Image
             src="/images/product_1.webp"
             alt="iPhone"
             width={350}
             height={350}
             className='bg-purple-50 rounded-3xl p-2.5'
           />
         </div>
       </div>
       <div className='flex flex-col w-2/3 pt-10 gap-5'>
         <div className='flex gap-3 justify-between items-center'>
           <div className='bg-gradient-to-l flex flex-col justify-center items-center from-purple-500 to-blue-500 p-5 rounded-3xl shadow-xl border border-white via-white lg:to-blue-100'>
             <div className='font-bold text-2xl'>Price insights</div>
             <div>Mrp Price</div>
             <div className='font-bold text-xl'>RS.185,000.00</div>
           </div>
           <div className='bg-gradient-to-l from-purple-500 to-blue-500 p-5 rounded-3xl shadow-xl border border-white via-white lg:to-blue-100'>
             <div className='flex flex-col justify-center items-center'>
               <div className='text-2xl font-bold'>Fast and Free</div>
               <div>Delivery</div>
             </div>
           </div>
           <div className='rounded-3xl shadow-xl'>
             <button
               onClick={() => setShowModal(true)}
               className='bg-white rounded-3xl p-2 font-bold'
             >
               Get Best Price <br />
             </button>
           </div>
         </div>
         <div className='bg-white rounded-3xl flex flex-col m-3 p-5'>
           <div className='text-2xl font-bold'>Details</div>
           <div className='flex justify-start gap-2'>
             <div className='font-bold'>You save:</div>
             <div>Rs.60,000</div>
           </div>
           <div className='flex justify-start gap-2'>
             <div className='font-bold'>You save:</div>
             <div>Rs.60,000</div>
           </div>
           <div className='flex justify-start gap-2'>
             <div className='font-bold'>You save:</div>
             <div>Rs.60,000</div>
           </div>
           <div className='flex justify-start gap-2'>
             <div className='font-bold'>You save:</div>
             <div>Rs.60,000</div>
           </div>
           <div className='gap-10'>
             <hr />
             <div>
               <div className='font-bold'>About this item</div>
               <div>This UML software allows you to create beautiful use case diagrams easily. It provides a drag-and-drop editor, a rich set of UML symbols, and cloud support.</div>
             </div>
           </div>
         </div>
       </div>
     </div>
     {showModal && <AuctionModal showModal={showModal} setShowModal={setShowModal} />}
   </div>
 );
}

export default Pages;



