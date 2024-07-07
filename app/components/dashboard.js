'use client';
import { useState } from 'react';


const SignIn = () => {
  
  


  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
      <div className="container mx-auto">
        <div className="flex justify-around mt-8">
          <div className="bg-purple-900 text-white p-4 rounded shadow-md w-1/4 text-center">
            <FaBox className="mx-auto text-3xl mb-2" />
            <h3 className="text-xl font-bold">Products</h3>
            <p className="text-2xl">{productsCount}</p>
          </div>
          <div className="bg-purple-800 text-white p-4 rounded shadow-md w-1/4 text-center">
            <FaStore className="mx-auto text-3xl mb-2" />
            <h3 className="text-xl font-bold">Sellers</h3>
            <p className="text-2xl">{sellersCount}</p>
          </div>
          <div className="bg-purple-700 text-white p-4 rounded shadow-md w-1/4 text-center">
            <FaShoppingCart className="mx-auto text-3xl mb-2" />
            <h3 className="text-xl font-bold">Today's Orders</h3>
            <p className="text-2xl">{ordersCount}</p>
          </div>
        </div>

       
       
      </div>
    </div>
  );
};


