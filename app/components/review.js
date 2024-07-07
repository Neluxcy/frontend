"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

 const toggleMenu = () => {
   setIsOpen(!isOpen);
 };

 const toggleUserMenu = () => {
   setIsUserMenuOpen(!isUserMenuOpen);
 };

 return (
   <div >
     <nav className="relative flex items-center justify-between flex-wrap p-6">
       <div className="flex items-center flex-shrink-0 mr-6 sm:mr-4">
         <Link href="/">
         <div className='flex space-x-4' >
       <Image
         src="/images/logo.png"
         alt="Profile Photo"
         width={80}
         height={80}
       />
     </div>
         </Link>
       
       </div>
       <div className="flex items-center sm:mr-2 relative">
         <div className="px-1 py-1 border border-gray-300 rounded-md flex items-center focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300">
           <input
             type="text"
             placeholder="Search..."
             className="px-1 py-1.5 w-full outline-none"
           />
           <FontAwesomeIcon icon={faSearch} className="text-gray-400 ml-2" />
         </div>
       </div>
       <div className="block lg:hidden">
         <button
           onClick={toggleMenu}
           className="flex items-center px-3 py-2 border rounded border-gray-400 hover:border-white"
         >
           <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
             <title>Menu</title>
             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
           </svg>
         </button>
       </div>
       <div className={`w-full block flex-grow lg:flex lg:items-center  lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
         <div className="text-sm lg:flex-grow">
           <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 transition-all duration-300 hover:bg-violet-800 hover:text-white mr-4 rounded-md p-1">
             Home
           </Link>
           <Link href="/order" className="block mt-4 lg:inline-block lg:mt-0 transition-all duration-300 hover:bg-violet-800 hover:text-white mr-4 rounded-md p-1">
             Order
           </Link>
           <Link href="http://localhost:3000/bidding_details" className="block mt-4 lg:inline-block lg:mt-0 transition-all duration-300 hover:bg-violet-800 hover:text-white mr-4 rounded-md p-1">
             Bid Notification
           </Link>
           <Link href="http://localhost:3000/help" className="block mt-4 lg:inline-block lg:mt-0 transition-all duration-300 hover:bg-violet-800 hover:text-white rounded-md p-1">
             Help
           </Link>
         </div>
         <div className="relative">
           <button
             type="button"
             className="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
             id="user-menu-button"
             onClick={toggleUserMenu}
           >
             <span className="sr-only">Open user menu</span>
             <div className='flex justify-between items-center'>
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
           </button>
           <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ${isUserMenuOpen ? 'block' : 'hidden'} transition-all duration-300`} id="user-dropdown">
             <div className="px-4 py-3">
               <span className="block text-sm">Bonnie Green</span>
               <span className="block text-sm truncate">name@flowbite.com</span>
             </div>
             <ul className="py-2" aria-labelledby="user-menu-button">
               <li>
                 <Link href="/dashboard" className="block px-4 py-2 text-sm hover:bg-violet-800 transition-all duration-300 rounded-md p-1">
                   Dashboard
                 </Link>
               </li>
               <li>
                 <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-violet-800 transition-all duration-300 rounded-md p-1">
                   Settings
                 </Link>
               </li>
               <li>
                 <Link href="http://localhost:3000/address" className="block px-4 py-2 text-sm hover:bg-violet-800 transition-all duration-300 rounded-md p-1">
                   Address
                 </Link>
               </li>
               <li>
                 <Link href="/signout" className="block px-4 py-2 text-sm hover:bg-violet-800 transition-all duration-300 rounded-md p-1">
                   Sign out
                 </Link>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </nav>
     <hr />
   </div>
 );
};

export default Navbar;



