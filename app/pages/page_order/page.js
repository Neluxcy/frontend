import React from 'react'
import Image from 'next/image';
// import Navbar from '../components/navbar';
// import Review from '../components/review';

function pages() {
 return (
   <div>
     {/* <Navbar /> */}
     <div className='' style={{ position: '' }} >
       <div className='fw-bold fs-2 mt-3 ms-3'>iPhone 12</div>
       <div className=' row'>
         <div className='col-3'>
           <Image
             src="/images/profile.jpg"
             alt="Profile Photo"
             width={250}
             height={160}
           />
         </div>
         <div className='col-3'>
           <div className='bg-light p-4 rounded-3'>
             <div className='text-center fs-4 fw-bold rounded mt-2'>Price Details</div>
             <div className='d-flex justify-content-between'>
               <div> Price Qty:1(1x77,400)</div>
               <div> Rs.77,400.00</div>
             </div>
             <div className='d-flex justify-content-between'>
               <div>Delivery Charges</div>
               <div> Rs.300.00</div>
             </div>
             <div className='d-flex justify-content-between'>
               <div>Total Amount</div>
               <div>Rs.77,700.00</div>
             </div>
           </div>

           <div className='mt-3 d-flex justify-content-center'>
             <a href="#" className="btn btn-primary">Accept</a>
           </div>
         </div>
         <div className='col-6'>
           {/* <Review />
           <Review />
           <Review /> */}
          
         </div>
       </div>
       <div className='d-flex justify-content-between items-center   border border-dark' style={{ borderRadius: '25px', }}>
         <div className='bg-primary ' style={{
           width: '200px',
           borderRadius: '25px',
           margin:'8px',
           height: '100px',
           border: '3px solid #fff',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'space-around'
         }}>
           <div className='flex space-x-4' style={{
             width: '60px',
             height: '60px',
             borderRadius: '50%',
             border: '3px solid #fff',
             overflow: 'hidden',
             alignItems: 'center',
             justifyContent: 'center'

           }}>
             80%
           </div>
           <div className='h-10 w-10'>Customers Rating</div>
         </div>
         <div className='bg-primary ' style={{
           width: '300px',
           borderRadius: '25px',
           height: '100px',
           border: '3px solid #fff',
           display: 'flex',
           margin:'8px',

           alignItems: 'center',
           justifyContent: 'space-evenly'
         }}>
           <div>
             <div className='flex space-x-4' style={{
               width: '60px',
               height: '60px',
               borderRadius: '50%',
               border: '3px solid #fff',
               overflow: 'hidden',
             }}>
               <Image
                 src="/images/photo.avif"
                 alt="Profile Photo"
                 width={80}
                 height={80}
               />
             </div>
           </div>
           <div>
             <div>Antony - #9801234</div>
             <div>Land mark , City</div>
             <div>Near by  Jaffna Town,Jaffna</div>
           </div>

         </div>
         <div className='bg-primary ' style={{
           width: '200px',
           borderRadius: '25px',
           height: '100px',
           border: '3px solid #fff',
           margin:'8px',

           display: 'flex',
           alignItems: 'center',
           justifyContent: 'space-evenly'
         }}>
           <div>
             <div className='flex space-x-4' style={{
               width: '60px',
               height: '60px',
               borderRadius: '50%',
               border: '3px solid #fff',
               overflow: 'hidden',
               alignItems: 'center',
               justifyContent: 'center'

             }}>
               88%
             </div>
           </div>
           <div>
             <div>Sucessfull Complete Orders</div>
           </div>

         </div>
       </div>
     </div>
   </div>
 )
}

export default pages;

