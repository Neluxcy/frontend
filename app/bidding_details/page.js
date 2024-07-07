"use client"
import Image from 'next/image';
import Navbar from '../components/navbar';
// import AuctionModal from '../auction/page'; // Adjust the path as needed

function Pages() {


 return (
   <div className='h-full w-full' style={{ backgroundColor: "#C5C4FF" }}>
     <Navbar />
     <div className='p-20 flex'>
       <div className='flex flex-col w-1/3 gap-8 items-center'>
         <div className='text-3xl font-bold'>iPhone</div>
         <div className='flex w-150'>
           <Image
             src="/product_1.webp"
             alt="iPhone"
             width={350}
             height={350}
             className='bg-purple-50 rounded-3xl p-2.5'
           />
         </div>
       </div>
       <div className='flex flex-col w-2/3 pt-10 '>
         <div className='flex gap-3 justify-between m-3 p-5 items-center'>
           <div className='col-5'>
             <div className='  fw-bold  fs-3'>BIDDING DETAILS</div>
             <div className='d-flex justify-content-between align-items-center mb-3 '>
               <div >
                 <div>85,000.00</div>
                 <div className=' fw-bold'>MRP Price</div>
               </div>
               <div>
                 <div>1</div>
                 <div className='fw-bold'> No Of Units</div>
               </div>
               <div>
                 <div>85,000.00</div>
                 <div className='fw-bold'>Total Price</div>
               </div>
             </div>
             <div className='d-flex justify-content-between align-items-center gap-5'>
               <div >
                 <div>85,000.00</div>
                 <div className=' fw-bold'>MRP Price</div>
               </div>
               <div >
                 <div>85,000.00</div>
                 <div className=' fw-bold'>MRP Price</div>
               </div>
               <div>
                 <div>1</div>
                 <div className='fw-bold'> No Of Units</div>
               </div>
             </div>
           </div>
         </div>





         <div className=' rounded-3xl flex flex-col m-3 p-5 '>

           <div className=' d-flex  justify-content-between mt-3' >
             <div>
               <div className=' fw-bold  fs-3'>SELLER BIDDING LIST</div>
               <div className='text-primary'>Sellers with 4+ ratings are 80% more likely to win a bid.</div>
             </div>
             <button type="button" class="btn  btn-primary rounded-3xl mb-2 mt-3" >Cancel</button>
           </div>
           <div className=' d-flex  justify-content-between mb-2 mt-3' style={{flex_wrap: 'wrap'}}>
             <div class="card">
               <div class="card-body">
                 <div>
                   <div class="fw-bold fs-3">Seller 1</div>
                   <div class="fw-bold "> Rs.79,000</div>
                 </div>
                 <div className='d-flex justify-content-between'>
                   <div> You save</div>
                   <div> Rs.6,000</div>
                 </div>
                 <div className='d-flex justify-content-between'>
                   <div> Delivery charge</div>
                   <div> Rs.500</div>
                 </div>

                 <a href=" http://localhost:3000/place_order" class="btn btn-primary rounded-3xl mb-2 mt-3">Accepet</a>
               

               </div>
             </div>
             <div class="card">
               <div class="card-body">
                 <div>
                   <div class="fw-bold fs-3">Seller 2</div>
                   <div class="fw-bold "> Rs.78,000</div>
                 </div>
                 <div className='d-flex justify-content-between'>
                   <div> You save</div>
                   <div> Rs.7,000</div>
                 </div>
                 <div className='d-flex justify-content-between'>
                   <div> Delivery charge</div>
                   <div> Rs.500</div>
                 </div>
                 <a href="#" class="btn btn-primary rounded-3xl mb-2 mt-3">Accepet</a>
               </div>
             </div>
             <div class="card">
               <div class="card-body">
                 <div>
                   <div class="fw-bold fs-3">Seller 3</div>
                   <div class="fw-bold "> Rs.77,000</div>
                 </div>
                 <div className='d-flex justify-content-between'>
                   <div> You save</div>
                   <div> Rs.8,000</div>
                 </div>
                 <div className='d-flex justify-content-between'>
                   <div> Delivery charge</div>
                   <div> Rs.500</div>
                 </div>
                 <a href="#" class="btn btn-primary rounded-3xl mb-2 mt-3">Accepet</a>
               </div>
             </div>
           </div>
           <div className=' d-flex  justify-content-between mb-3'>
             <div class="card">
               <div class="card-body">
                 <div>
                   <div class="fw-bold fs-3">Seller 4</div>
                   <div class="fw-bold "> Rs.76,000</div>
                 </div>
                 <div className='d-flex justify-content-between'>
                   <div> You save</div>
                   <div> Rs.9,000</div>
                 </div>
                 <div className='d-flex justify-content-between'>
                   <div> Delivery charge</div>
                   <div> Rs.500</div>
                 </div>
                 <a href="#" class="btn btn-primary rounded-3xl mb-2 mt-3">Accepet</a>
               </div>
             </div>
             <div class="card">
               <div class="card-body">
                 <div>
                   <div class="fw-bold fs-3">Seller 1</div>
                   <div class="fw-bold "> Rs.75,000</div>
                 </div>
                 <div className='d-flex justify-content-between'>
                   <div> You save</div>
                   <div> Rs.6,0000</div>
                 </div>
                 <div className='d-flex justify-content-between'>
                   <div> Delivery charge</div>
                   <div> Rs.500</div>
                 </div>
                 <a href="#" class="btn btn-primary rounded-3xl mb-2 mt-3">Accepet</a>
               </div>
             </div>
             <div class="card">
               <div class="card-body">
                 <div>
                   <div class="fw-bold fs-3">Seller 1</div>
                   <div class="fw-bold "> Rs.74,000</div>
                 </div>
                 <div className='d-flex justify-content-between'>
                   <div> You save</div>
                   <div> Rs.6,0000</div>
                 </div>
                 <div className='d-flex justify-content-between'>
                   <div> Delivery charge</div>
                   <div> Rs.500</div>
                 </div>
                 <a href="#" class="btn btn-primary rounded-3xl mb-2 mt-3">Accepet</a>
               </div>
             </div>
           </div>

         </div>
       </div>
     </div>

   </div>
 );
}

export default Pages;



