"use client"

import { useEffect, useState } from "react";
//  import { getProduct } from "./api";

export default function ProductDetails({ params }) {
    const { id } = params;
    console.log("Product ID:", id);

    const [product, setProduct] = useState({
        name: "iPhone 15 256GB",
        price: 999.99,
        description: "The latest iPhone model with 256GB storage.",
        image: "/iphone15.webp",
        details: [
            "256GB storage",
            "6.7-inch display",
            "5G connectivity",
            "12MP camera",
            "Face ID",
            "Available in multiple colors"
        ],
        about: [
            "fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.).",
            "The device does not come with headphones or a SIM card. It does include a charger and charging cable that may be generic.",
            "Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm's length.",
            "Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.",
            "Tested for battery health and guaranteed to have a minimum battery capacity of 80%."
        ]
    });

    useEffect(() => {
        // Fetch product details from the server
        // getProduct(id).then((product) => {
        //     // setProduct(product);
        // });
    }, [id]);

    const handleBestPrice = () => {
        alert("We will get back to you with the best price shortly.");
    };

    return (
        <div className="container mx-auto mt-5 p-6 flex flex-wrap">
            <div className="bg-slate-200 shadow-md rounded-lg overflow-hidden p-6 md:w-1/3">
                <div className="px-4 py-4">
                        <h1 className="font-bold text-2xl mb-4">Product </h1>
                        <img src={product.image} alt={product.name} className="rounded-lg w-full mb-8" />
                        <h2 className="text-2xl font-bold">{product.name}</h2>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                </div>
            </div>
            <div className="md:w-2/3 p-10">
                <div className="flex lg:justify-between items-center flex-wrap gap-4">
                    <div className="grid justify-items-center bg-blue-200 p-2 px-4 rounded-lg">
                        <h2 className="text-2xl font-bold">Price Insights</h2>
                        <span className="text-gray-600">MRP</span>
                        <span className="text-3xl font-bold text-gray-600">Rs. {product.price}</span>
                    </div>
                    <div className="grid justify-items-center bg-blue-200 p-2 px-4 rounded-lg">
                        <h2 className="text-2xl font-bold">Fast and Free</h2>
                        <span className="text-gray-600">Delivery</span>
                    </div>
                    <button className="bg-violet-500 hover:bg-violet-700 text-white py-2 px-4 rounded-full" onClick={handleBestPrice}>
                        <h2 className="text-xl font-bold">Get Best Price</h2>
                        <span className="text-gray-300">approx. response time: 10s</span>
                    </button>
                </div>
                <h2 className="text-2xl font-bold mt-8">Details</h2>
                <ul className="list-none list-inside text-gray-700 mt-2">
                    {product?.details?.length && product.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
                <h2 className="text-2xl font-bold mt-8">About this item</h2>
                <ul className="list-disc list-inside text-gray-500 mt-2">
                    {product?.about?.length && product.about.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>


    );
}