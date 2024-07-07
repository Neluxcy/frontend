
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';


function Pages() {

   return (


       <div className='h-full w-full' style={{ backgroundColor: "#C5C4FF" }}>
           <Navbar />
           <div className='p-20 flex'>

               <div className='flex flex-col  pt-10 gap-5'>
                   <div className='bg-white rounded-3xl flex flex-col m-3 p-5'>
                       <div className='text-2xl font-bold'>About Us</div>
                       <div className="bg-gradient-to-l from-purple-500 to-white-500 p-5 rounded-3xl shadow-xl">
                           At Bro, we are passionate about creating a dynamic and user-friendly online marketplace where buyers and sellers can connect seamlessly.
                           Inspired by platforms like JingleBid, we offer a unique and engaging auction experience designed to meet the needs of modern consumers and businesses.
                       </div>
                       <div className='text-2xl font-bold'> How can we help you? </div>
                       <div className="bg-gradient-to-l from-purple-500 to-white-500 p-5 rounded-3xl shadow-xl">
                           Who We Are

                           Founded in 2024, Bro was built on the belief that everyone deserves a fair and exciting way to buy and sell goods. Our team comprises tech enthusiasts, market experts, and customer service professionals dedicated to providing a platform that is both innovative and easy to use.
                           <br />
                           <br />
                           <br />
                           Our Mission
                           <br />
                           <br />
                           <br />
                           Our mission is to make online bidding simple, transparent, and enjoyable. We aim to empower buyers with the opportunity to find unique items at competitive prices while providing sellers with a robust platform to reach a broader audience.
                           <br />
                           <br />
                           What We Offer
                           <br />
                           <br />
                           <br />
                           Diverse Listings: From electronics and collectibles to fashion and home goods, our platform offers a wide range of categories to suit every interest and need.

                           Secure Transactions: We prioritize the security of our users by implementing industry-leading encryption and payment protection measures.

                           User-Friendly Interface: Whether you are a first-time bidder or a seasoned seller, our intuitive design ensures a seamless experience from registration to final bid.

                           Competitive Bidding: Engage in thrilling auctions where competitive bidding drives the excitement, and every participant has a chance to win.

                           Real-Time Updates: Stay informed with live updates on bids and auctions, ensuring you never miss an opportunity.

                           Customer Support: Our dedicated support team is here to assist you 24/7 with any questions or issues you may encounter.
                           <br />
                           <br />
                           Why Choose Us?
                           <br />
                           <br />
                           Transparency: We are committed to maintaining a transparent auction process where all bids are visible, and every transaction is traceable.
                           Innovation: Continually improving our platform with the latest technology to enhance user experience and security.
                           Community: Building a community of trusted buyers and sellers through robust user verification and feedback systems.
                           <br />
                           <br />
                           Our Vision
                           <br />
                           <br />
                           We envision a world where online auctions are not just a way to buy and sell items but an engaging and rewarding experience for everyone involved. As we grow, we will continue to innovate and expand our services, always putting our users at the forefront of everything we do.
                           <br />
                           <br />
                           Join Us
                           <br />
                           <br />
                           Discover the thrill of online auctions with [Your Platform Name]. Whether you’re looking to score a great deal or sell your items to a wider audience, we invite you to join our community and start bidding today!
                       </div>
                   </div>
               </div>
           </div>
       </div>
   );
}

export default Pages;



