"use client"
import Image from 'next/image';
import React, { useState } from 'react';
// import { toast } from 'react-hot-toast';

const AuctionModal = ({ setShowModal }) => {
 const handleButtonClick = () => {
   setShowModal(false)
   toast.success(' Thank You , your bid has been completed'); // Displays a success message
 };

 const [count, setCount] = useState(1);

 const handleIncrement = () => {
   setCount(prevCount => (prevCount < 9 ? prevCount + 1 : prevCount));
 };

 const handleDecrement = () => {
   setCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));
 };

 return (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
     <div className="bg-white w-full max-w-4xl mx-auto p-8 rounded-3xl shadow-xl">
       <div className="flex justify-between items-center mb-6">
         <h2 className="text-2xl font-bold">Auction Details</h2>
         <button
           className="text-2xl font-bold text-red-500"
           onClick={() => setShowModal(false)}
         >
           &times;
         </button>
       </div>
       <div className="flex flex-col md:flex-row gap-8">
         <div className="flex flex-col w-full md:w-1/3 gap-8 align-items-center">
           <div className="text-3xl font-bold">iPhone</div>
           <div className="flex w-150 h-270">
             <Image
               src="/product_1.webp"
               alt="Profile Photo"
               width={350}
               height={900}
               className="bg-purple-50 rounded-3xl p-2.5"
             />
           </div>
           <div className="card">
             <div className="card-body">
               <div className="font-medium fw-bold fs-5">Address</div>
               <div className="fw-bold">
                 05, Kailasapillyar Kovil Road,
                 <br />
                 Nallur,
                 <br />
                 Jaffna.
               </div>
             </div>
           </div>
         </div>
         <div className="flex flex-col w-full md:w-2/3 gap-8">
           <div className="flex justify-around items-center gap-8">
             <div className="bg-gradient-to-l from-purple-500 via-white to-purple-50 p-5 rounded-3xl shadow-xl">
               <div className="font-bold text-2xl">No of Units</div>
               <div className='bg-white rounded-3xl'>
                 <div className="font-bold text-2xl d-flex justify-content-evenly " style={{
                   border_radius: '20px',
                   box_shadow: '0 5px 10px rgba(0,0,0,0.2)'
                 }}>
                   <span className="minus font-bold text-2xl" onClick={handleDecrement} style={{
                     text_align: 'center',
                     cursor: 'pointer',
                     user_select: 'none'
                   }}>-</span>
                   <span className="num font-bold text-2xl" style={{
                     border_right: '2px solid rgba(0,0,0,0.2)',
                     border_left: '2px solid rgba(0,0,0,0.2)',
                     pointer_events: 'none'
                   }}>{count < 10 ? `0${count}` : count}</span>
                   <span className="plus" onClick={handleIncrement} style={{
                     text_align: 'center',
                     cursor: 'pointer',
                     user_select: 'none'
                   }}>+</span>
                 </div>
               </div>

             </div>
             <div className="bg-gradient-to-l from-purple-500 via-white to-purple-50 p-5 rounded-3xl shadow-xl">
               <div className="flex flex-col justify-center items-center">
                 <div className="text-2xl font-bold">Bidding Span</div>
                 <div className="mt-2">
                   <select
                     id="bid"
                     name="bid"
                     className="block w-full rounded-3xl border-0 p-2 text-gray-900 shadow-sm"
                   >
                     <option>District</option>
                     <option>Province</option>
                     <option>Island</option>
                   </select>
                 </div>
               </div>
             </div>
           </div>
           <div className="flex justify-around items-center gap-8">
             <div className="bg-gradient-to-l from-purple-500 via-white to-purple-50 p-5 rounded-3xl shadow-xl">
               <div className="font-bold text-2xl">Email-id</div>
               <div className="font-bold text-xl">bro1998@gmail.com</div>
             </div>
             <div className="bg-gradient-to-l from-purple-500 via-white to-purple-50 p-5 rounded-3xl shadow-xl">
               <div className="flex flex-col justify-center items-center">
                 <div className="flex items-center gap-2">
                   <input
                     id="pickup"
                     name="delivery-method"
                     type="radio"
                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   />
                   <label htmlFor="pickup" className="font-bold text-2xl text-gray-900">
                     Pick-Up
                   </label>
                 </div>
                 <div className="flex items-center gap-2">
                   <input
                     id="delivery"
                     name="delivery-method"
                     type="radio"
                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   />
                   <label htmlFor="delivery" className="font-bold text-2xl text-gray-900">
                     Delivery
                   </label>
                 </div>
               </div>
             </div>
           </div>
           <div className="flex justify-around items-center gap-8">
             <div className="bg-gradient-to-l from-purple-500 to-purple-50 via-white p-5 rounded-3xl shadow-xl">
               <div className="font-bold text-2xl">Define</div>
               <input
                 type="text"
                 name="color"
                 placeholder="Colour"
                 className="block w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 rounded-3xl shadow-xl border border-gray-300 mb-2"
               />
               <input
                 type="text"
                 name="price"
                 placeholder="Expected Price"
                 className="block w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 rounded-3xl shadow-xl border border-gray-300 mb-2"
               />
               <input
                 type="text"
                 name="description"
                 placeholder="Description"
                 className="block w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 rounded-3xl shadow-xl border border-gray-300"
               />
             </div>

             <button onClick={handleButtonClick} className=' btn bg-purple-400 rounded-3xl p-2 font-bold'>
               Start Auction
               <br />
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default AuctionModal;



