import Link from "next/link";
import Image from "next/image";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar1";

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
          <h2 className="font-bold mb-3 text-center text-[rgb(62 97 151)]" style={{ fontSize: '1.2rem' }}>AVAILABLE PRODUCTS</h2>
          <div className="container flex sm:flex-row">
            <Link href={''} className="card bid sm:w-80 sm:h-90 shadow-brown rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-white">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '0.5rem', height: '10rem', width: '10rem', paddingTop: '2rem' }}>
                  <Image src="/iphone.jpg" alt="iPhone" className="image" width={160} height={160} />
                </div>
              </div>
              <div style={{ height: '8rem' }}>
                <h3 className="text-[#073857] text-xl font-bold text-center group-hover:animate-fade-in-up">IPHONE</h3>
                <div style={{ backgroundColor: 'rgb(62 97 151)', padding: '0.3rem', color: 'white' }}>
                  <h3 className="text-center">MRF Price - LKR. 184 900</h3>
                </div>
                <h3 className="font-bold text-center" style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'gray' }}>MODEL iphone 12</h3>
                <h3 className="font-bold text-center" style={{ fontSize: '0.8rem', color: 'rgb(117, 102, 6)' }}>VERSION - NEW</h3>
                <h3 className="font-bold text-center" style={{ fontSize: '0.8rem', color: 'rgb(117, 102, 6)' }}>COLOR - BLACK </h3>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '0.5rem', height: '8rem', width: '10rem'}}>
                  <Image src="/available.png" alt="Available" className="image" width={160} height={160} />
                </div>
              </div>
            </Link>
            <Link href={''} className="card bid sm:w-80 sm:h-90 shadow-brown rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-white">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '0.5rem', height: '10rem', width: '10rem', paddingTop: '2rem' }}>
                  <Image src="/ac.jpg" alt="Air Conditioner" className="image" width={160} height={160} />
                </div>
              </div>
              <div style={{ height: '8rem' }}>
                <h3 className="text-[#073857] text-xl font-bold text-center group-hover:animate-fade-in-up">AIR CONDITIONER</h3>
                <div style={{ backgroundColor: 'rgb(62 97 151)', padding: '0.3rem', color: 'white' }}>
                  <h3 className="text-center">MRF Price - LKR. 259 999</h3>
                </div>
                <h3 className="font-bold text-center" style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'gray' }}>MODEL R32 fix speed</h3>
                <h3 className="font-bold text-center" style={{ fontSize: '0.8rem', color: 'rgb(117, 102, 6)' }}>VERSION - NEW</h3>
                <h3 className="font-bold text-center" style={{ fontSize: '0.8rem', color: 'rgb(117, 102, 6)' }}>COLOR - BLACK </h3>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '0.5rem', height: '8rem', width: '10rem'}}>
                  <Image src="/available.png" alt="Available" className="image" width={160} height={160} />
                </div>
              </div>
            </Link>
            <Link href={''} className="card bid sm:w-80 sm:h-90 shadow-brown rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-white">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '0.5rem', height: '10rem', width: '10rem', paddingTop: '2rem' }}>
                  <Image src="/tv.jpg" alt="LG TV" className="image" width={160} height={160} />
                </div>
              </div>
              <div style={{ height: '8rem' }}>
                <h3 className="text-[#073857] text-xl font-bold text-center group-hover:animate-fade-in-up">LG TV</h3>
                <div style={{ backgroundColor: 'rgb(62 97 151)', padding: '0.3rem', color: 'white' }}>
                  <h3 className="text-center">MRF Price - LKR. 83 000</h3>
                </div>
                <h3 className="font-bold text-center" style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'gray' }}>MODEL web os</h3>
                <h3 className="font-bold text-center" style={{ fontSize: '0.8rem', color: 'rgb(117, 102, 6)' }}>VERSION - NEW</h3>
                <h3 className="font-bold text-center" style={{ fontSize: '0.8rem', color: 'rgb(117, 102, 6)' }}>COLOR - BLACK </h3>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '0.5rem', height: '8rem', width: '10rem'}}>
                  <Image src="/available.png" alt="Available" className="image" width={160} height={160} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
