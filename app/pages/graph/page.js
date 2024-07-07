
"use client";
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesBarChart = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Fetch sales data from your backend API
    async function fetchSalesData() {
      try {
        const response = await fetch('http://localhost:5000/api/salesProducts');
        if (!response.ok) {
          throw new Error('Failed to fetch sales products');
        }
        const data = await response.json();
        setSalesData(data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    }

    fetchSalesData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="productName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesBarChart;
