"use client";
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [productCount, setProductCount] = useState(0);
  const [sellersCount, setSellersCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const productCountResponse = await fetch('/api/productCount');
        if (!productCountResponse.ok) {
          throw new Error("Failed to fetch product count");
        }
        const productCountData = await productCountResponse.json();
        setProductCount(productCountData.count);

        const sellersCountResponse = await fetch('/api/sellersCount');
        if (!sellersCountResponse.ok) {
          throw new Error("Failed to fetch sellers count");
        }
        const sellersCountData = await sellersCountResponse.json();
        setSellersCount(sellersCountData.count);

        setIsLoading(false); // Data fetching completed
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Error occurred during fetching
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100vh' }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', minWidth: '200px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#f0f0f0' }}>
            <h3>Product Total Count</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>{productCount}</p>
          </div>

          <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', minWidth: '200px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#f0f0f0' }}>
            <h3>Sellers Count</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>{sellersCount}</p>
          </div>
        </>
      )}
    </div>
  );
}
