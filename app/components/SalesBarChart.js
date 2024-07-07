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
        // Optionally handle error state or display a message to the user
      }
    }

    fetchSalesData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={salesData}>
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
