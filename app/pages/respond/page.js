import Link from "next/link";
import Image from "next/image";

// import iphone from '../images/iphone.jpg';
// import ac from '../images/ac.jpg';
// import tv from '../images/tv.jpg';
// import fridge from '../images/fridge.jpg';
// import washing from '../images/washing.webp';
// import lap from '../images/lap.jpg';
import { FaRegCalendarAlt } from "react-icons/fa";

import '/styles/home.css';

import Sidebar from "../../components/Sidebar";
// import Navbar from "../../components/Navbar";


export default function Page() {
    return (
        <div className="flex bg-white body">

            <div className="sidebar w-64">
                <Sidebar />
            </div>

            <div className="flex-grow" style={{ backgroundColor: 'rgba(62, 98, 151, 0.103)' }}>
                <Navbar />

                <div className="p-5" style={{ backgroundColor: 'rgb(62 97 151)' }}>
                </div>

                <div className="flex flex-col items-center justify-center p-6">

                    <h2 className="font-bold mb-3 text-center text-[rgb(62 97 151)]" style={{ fontSize: '1.2rem' }}>SELLER RESPOND</h2>

                    <div className="container flex sm:flex-row">

                        <Link href={''} className="card bid sm:w-80 sm:h-100 shadow-brown rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-white"
                            style={{ width: '50%' }}>

                            <div className="flex">

                                <div style={{ width: '30%' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ padding: '0.5rem', height: '12rem', width: '12rem', paddingTop: '2rem' }}>
                                            <Image src="/iphone.jpg" alt="" className="image" width={160} height={160}/>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: '70%', paddingTop: '2rem', padding: '1rem' }}>

                                    <h3 className="text-[#073857] text-xl font-bold text-center group-hover:animate-fade-in-up">IPHONE</h3>
                                    <h3 className="font-bold text-center" style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'gray' }}>MODEL - iphone 12</h3>
                                    <h3 className="font-bold text-center" style={{ fontSize: '0.7rem', color: 'rgb(117, 102, 6)' }}>VERSION NEW - BLACK COLOR</h3>

                                    <div style={{ backgroundColor: 'rgb(62 97 151)', padding: '0.3rem', color: 'white', marginTop: '1rem' }}>
                                        <h3 className="text-center">MRP Price - LKR. 184 900</h3>
                                    </div>

                                    <div className="flex" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                                        <label className="block font-bold text-[#073857] mr-2">Seller Price</label>
                                        <input className="p-1 border border-gray-300 rounded focus:outline-none focus:border-[#073857]" 
                                        placeholder="LKR." style={{paddingLeft:'0.5rem'}}/>
                                    </div>

                                </div>

                            </div>

                            <div style={{ padding: '1rem', backgroundColor: 'rgba(248, 220, 248, 0.507)' }}>
                                <h3 className="font-bold text-center" style={{ fontSize: '0.9rem', color: 'gray' }}>WARRANTY INFO</h3>

                                <div className="flex">

                                    <div className="flex" style={{ marginTop: '1rem', fontSize: '0.9rem', width: '40%', marginRight: '2rem' }}>
                                        <label className="block font-bold text-[purple] mr-2">Period</label>
                                        <select className="p-1 border border-gray-300 rounded focus:outline-none focus:border-[#804f0e]" style={{ width: '80%' }}>
                                            <option value="">warranty months</option>
                                            <option value="">01-03 months</option>
                                            <option value="">01-06 months</option>
                                            <option value="">01-12 months</option>
                                            <option value="">02 years</option>
                                        </select>
                                    </div>

                                    <div className="flex" style={{ marginTop: '1rem', fontSize: '0.9rem', width: '40%', marginRight: '2rem' }}>
                                        <label className="block font-bold  text-[purple] mr-2">Type</label>
                                        <select className="p-1 border border-gray-300 rounded focus:outline-none focus:border-[#804f0e]" style={{ width: '80%' }}>
                                            <option value="">warranty type</option>
                                            <option value="">full damage</option>
                                            <option value="">screen damage</option>
                                            <option value="">battery issues</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="flex">

                                    <div className="flex" style={{ marginTop: '1rem', fontSize: '0.9rem', width: '40%', marginRight: '2rem' }}>
                                        <label className="block font-bold text-[purple] mr-2">Discount</label>
                                        <select className="p-1 border border-gray-300 rounded focus:outline-none focus:border-[#804f0e]" style={{ width: '80%' }}>
                                            <option value="">percentage</option>
                                            <option value="">12%</option>
                                            <option value="">20%</option>
                                            <option value="">35%</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="flex" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                                    <label className="block font-bold text-[purple] mr-2">Special Note</label>
                                    <input className="p-1 border border-gray-300 rounded focus:outline-none focus:border-[purple]" style={{ width: '70%', paddingLeft:'0.5rem'}}
                                    placeholder="enter notes" />
                                </div>

                                <div style={{marginTop: '2rem', display:'flex', justifyContent:'center'}}>
                                    <div style={{ backgroundColor: 'purple', padding: '0.3rem', width:'50%', borderRadius:'1rem'}}>
                                        <h3 className="font-bold text-center" style={{ fontSize: '1rem', color: 'white' }}>SEND</h3>
                                    </div>
                                </div>

                            </div>

                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}
