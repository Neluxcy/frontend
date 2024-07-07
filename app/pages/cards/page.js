"use client";
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [productCount, setProductCount] = useState(0);
  const [sellersCount, setSellersCount] = useState(0);
  const [todaySalesCount, setTodaySalesCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const productCountResponse = await fetch('http://localhost:5000/api/productCount');
        if (!productCountResponse.ok) {
          throw new Error("Failed to fetch product count");
        }
        const productCountData = await productCountResponse.json();
        setProductCount(productCountData.count);

        const sellersCountResponse = await fetch('http://localhost:5000/api/sellersCount');
        if (!sellersCountResponse.ok) {
          throw new Error("Failed to fetch sellers count");
        }
        const sellersCountData = await sellersCountResponse.json();
        setSellersCount(sellersCountData.count);

        // Example: Fetching today's sales count
        const todaySalesResponse = await fetch('http://localhost:5000/api/todaySalesCount');
        if (!todaySalesResponse.ok) {
          throw new Error("Failed to fetch today's sales count");
        }
        const todaySalesData = await todaySalesResponse.json();
        setTodaySalesCount(todaySalesData.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {/* Card for Product Total Count */}
        <div className="bg-purple-100 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Product Total Count</h3>
          <p className="text-2xl font-bold">{productCount}</p>
        </div>

        {/* Card for Sellers Count */}
        <div className="bg-purple-100 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Sellers Count</h3>
          <p className="text-2xl font-bold">{sellersCount}</p>
        </div>

        {/* Card for Today's Sales Count */}
        <div className="bg-purple-100 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Today's Sales Count</h3>
          <p className="text-2xl font-bold">{todaySalesCount}</p>
        </div>
      </div>
    </div>
  );
}
