"use client"

import { useEffect, useState } from "react";
import { getProduct, getUser, startAuction } from "./api";

export default function AuctionDetails({ params }) {
    const { id } = params;
    const userId = 1;  // Hardcoded user ID for now get from session maybe
    console.log("Product ID:", id);

    const [product, setProduct] = useState({
        name: "iPhone 15 256GB",
        price: 999.99,
        description: "The latest iPhone model with 256GB storage.",
        image: "/iphone15.webp",
    });

    const [user, setUser] = useState({
        name: "John Doe",
        email: "example@gmail.com",
    });

    const [address, setAddress] = useState({
        address: "123 Main St",
        city: "Colombo",
        country: "Sri Lanka",
        zip: "12345",
    });

    const [auction, setAuction] = useState({
        units: 1,
        span: "1day",
        email: user.email,
        colour: "",
        price: 0,
        description: "",
        deliveryOption: "",
    });

    const handleIncrement = () => setAuction((prev) => ({ ...prev, units: prev.units + 1 }));
    const handleDecrement = () => {
        setAuction((prev) => ({ ...prev, units: Math.max(1, prev.units - 1) }));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "price") {
            setAuction((prev) => ({ ...prev, [name]: parseFloat(value) }));
            return;
        }
        setAuction((prev) => ({ ...prev, [name]: value }));
    };

    const validateInputs = () => {
        // Check if all fields are filled
        if (Object.values(auction).some((x) => x === "")) {
            alert("Please fill in all the fields.");
            return false;
        }
        // Check if price is valid
        if (auction.price <= 0) {
            alert("Please enter a valid price.");
            return false;
        }
        // Check if delivery option is selected
        if (auction.deliveryOption === "") {
            alert("Please select a delivery option.");
            return false;
        }
        // check if colour is valid
        if (!/^[a-zA-Z ]+$/.test(auction.colour)) {
            alert("Please enter a valid colour.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateInputs()) {
            console.log("Auction Details:", auction);
            // const res = await startAuction(auction);
            alert("Auction started successfully!");
            //if success reset the form
            setAuction({
                units: 1,
                span: "1day",
                email: user.email,
                colour: "",
                price: 0,
                description: "",
                deliveryOption: "",
            });
        }
    }

    useEffect(() => {
        // Fetch product details from the server
        // getProduct(id).then((product) => {
        //     setProduct(product);
        // });

        // Fetch user details from the server
        // getUser(userId).then((user) => {
        //     setAddress(user.address);
        //     setUser(user);
        // });
    }, [id]);

    return (
        <div className="container mx-auto mt-5 p-6 flex flex-wrap">
            <div className="bg-slate-200 shadow-md rounded-lg overflow-hidden p-6 md:w-1/3">
                <div className="px-4 py-4">
                    <h1 className="font-bold text-2xl mb-4">Product </h1>
                    <img src={product.image} alt={product.name} className="rounded-lg w-full mb-8" />
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                </div>
                <div className="px-4 py-4 mx-4 text-center bg-violet-200 rounded-md">
                    {/* address */}
                    <h1 className="font-bold text-xl mb-4">Address </h1>
                    <p>{address.address}</p>
                    <p>{address.city}</p>
                    <p>{address.country}</p>
                    <p>{address.zip}</p>
                </div>
            </div>
            <div className="md:w-2/3 p-6">


                <div className="container mx-auto px-6">
                    <form className="" onSubmit={handleSubmit} method="POST">
                        <h1 className="text-2xl font-bold mb-4">Auction Form</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Number of Units with Counter */}
                            <div className="flex items-center">
                                <label className="w-1/2 font-bold">No of Units</label>
                                <div className="w-1/2 flex items-center space-x-2">
                                    <button
                                        type="button"
                                        onClick={handleDecrement}
                                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                                    >
                                        -
                                    </button>
                                    <span>{auction.units}</span>
                                    <button
                                        type="button"
                                        onClick={handleIncrement}
                                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Bidding Span with Select Component */}
                            <div>
                                <label className="block font-bold mb-1">Bidding Span</label>
                                <select className="w-full border rounded p-2" name="span" onChange={handleChange} required>
                                    <option value="1day">1 Day</option>
                                    <option value="3days">3 Days</option>
                                    <option value="1week">1 Week</option>
                                    <option value="unlimited">Unlimited</option>
                                </select>
                            </div>

                            {/* Email ID Display */}
                            <div>
                                <label className="block font-bold mb-1">Email ID</label>
                                <p className="w-full border rounded p-2 bg-gray-100">{user.email}</p>
                            </div>

                            {/* Define Section */}
                            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-bold mb-1">Colour</label>
                                    <input type="text" className="w-full border rounded p-2" placeholder="Enter Colour" name="colour" onChange={handleChange} required/>
                                </div>
                                <div>
                                    <label className="block font-bold mb-1">Expect Price</label>
                                    <input type="number" className="w-full border rounded p-2" placeholder="Enter Expected Price" name="price" onChange={handleChange} required/>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-bold mb-1">Description</label>
                                    <textarea className="w-full border rounded p-2" rows="4" placeholder="Enter Description" name="description" onChange={handleChange}></textarea>
                                </div>
                            </div>

                            {/* Delivery or Pickup */}
                            <div className="md:col-span-2">
                                <label className="block font-bold mb-1">Delivery Option</label>
                                <div className="flex items-center space-x-4">
                                    <label>
                                        <input type="radio" name="deliveryOption" value="delivery" className="mr-2" onChange={handleChange} required/>
                                        Delivery
                                    </label>
                                    <label>
                                        <input type="radio" name="deliveryOption" value="pickup" className="mr-2" onChange={handleChange} />
                                        Pickup
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Start Auction Button */}
                        <div className="flex justify-center">
                            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded w-full mt-4">
                                Start Auction
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>


    );
}