import Link from "next/link";
import Image from "next/image";

// import iphone from '../images/iphone.jpg';
// import ac from '../images/ac.jpg';
// import tv from '../images/tv.jpg';
// import fridge from '../images/fridge.jpg';
// import washing from '../images/washing.webp';
// import lap from '../images/lap.jpg';
// import sold from '../images/sold.png';
import { FaRegCalendarAlt } from "react-icons/fa";

import '/styles/home.css';

// import Sidebar from "../../components/Sidebar";
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

          <h2 className="font-bold mb-3 text-center text-[rgb(62 97 151)]" style={{ fontSize: '1.2rem' }}>COMPLETED ORDERS</h2>

          <div className="container flex sm:flex-row">

            <Link href={''} className="card bid sm:w-80 sm:h-100 shadow-brown rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-white"
              style={{ width: '20rem' }}>

              <div style={{ backgroundColor: 'darkblue', padding: '0.5rem' }}>
                <h3 className="text-center font-bold" style={{ fontSize: '0.8rem', color: 'white' }}>ELECTRO BID HUB - SALES</h3>
              </div>

              <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                <hr style={{ marginTop: '1rem', padding: '0.2px', backgroundColor: 'black' }} />
                <h3 className="font-bold" style={{ fontSize: '0.9rem', color: 'gray', textAlign: 'center' }}>PRODUCT INFO</h3>
                <hr style={{ marginBottom: '0.5rem', padding: '0.5px', backgroundColor: 'black' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div style={{ padding: '0.5rem', height: '5rem', width: '5rem', paddingTop: '1rem' }}>
                  <Image src="/iphone.jpg" alt="" className="image" width={160} height={160} />
                </div>
                <div style={{ padding: '0.5rem', height: '5rem', width: '5rem', paddingTop: '1rem' }}>
                  <Image src="/sold.png" alt="" className="image" width={160} height={160} />
                </div>
              </div>

              <div style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingBottom: '1rem' }}>

                <h3 className="text-[#073857] font-bold text-center" style={{ color: 'gray' }}>IPHONE</h3>

                <h3 className="text-[#073857]" style={{ color: 'gray', fontSize: '0.8rem', marginTop: '1rem' }}>MODAL - <span style={{ fontWeight: 'bold', color: 'black' }}>IPHONE 12</span></h3>
                <h3 className="text-[#073857]" style={{ color: 'gray', fontSize: '0.8rem' }}>VERSION - <span style={{ fontWeight: 'bold', color: 'black' }}>LATEST</span></h3>
                <h3 className="text-[#073857]" style={{ color: 'gray', fontSize: '0.8rem' }}>COLOR - <span style={{ fontWeight: 'bold', color: 'black' }}>WHITE</span></h3>

                <hr style={{ marginTop: '1rem', padding: '0.5px', backgroundColor: 'black' }} />
                <h3 className="font-bold" style={{ fontSize: '0.9rem', color: 'gray', textAlign: 'center' }}>SALES INFO</h3>
                <hr style={{ marginBottom: '0.5rem', padding: '0.2px', backgroundColor: 'black' }} />

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '1rem' }}>CUSTOMER NAME -
                  <span className="font-bold" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}>Mr.John Joe</span></h3>

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '0.5rem' }}>CONTACT NO -
                  <span className="font-bold" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}>071-26839467</span></h3>

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '0.5rem' }}>MRP PRICE -
                  <span className="font-bold" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}>LKR. 184 390</span></h3>

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '0.5rem' }}>SALE PRICE -
                  <span className="font-bold" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}>LKR. 148 750</span></h3>

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '0.5rem', display: 'flex' }}>DELIVERY DATE -
                  <span className="font-bold flex" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}><FaRegCalendarAlt size={16} className="mr-1" />26-JUN 2024</span>
                  </h3>

              </div>

            </Link>

            <Link href={''} className="card bid sm:w-80 sm:h-100 shadow-brown rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-white"
              style={{ width: '20rem' }}>

              <div style={{ backgroundColor: 'darkblue', padding: '0.5rem' }}>
                <h3 className="text-center font-bold" style={{ fontSize: '0.8rem', color: 'white' }}>ELECTRO BID HUB - SALES</h3>
              </div>

              <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                <hr style={{ marginTop: '1rem', padding: '0.2px', backgroundColor: 'black' }} />
                <h3 className="font-bold" style={{ fontSize: '0.9rem', color: 'gray', textAlign: 'center' }}>PRODUCT INFO</h3>
                <hr style={{ marginBottom: '0.5rem', padding: '0.5px', backgroundColor: 'black' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div style={{ padding: '0.5rem', height: '5rem', width: '5rem', paddingTop: '1rem' }}>
                  <Image src="/lap.jpg" alt="" className="image"  width={160} height={160}/>
                </div>
                <div style={{ padding: '0.5rem', height: '5rem', width: '5rem', paddingTop: '1rem' }}>
                <Image src="/sold.png" alt="" className="image" width={160} height={160} />
                </div>
              </div>

              <div style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingBottom: '1rem' }}>

                <h3 className="text-[#073857] font-bold text-center" style={{ color: 'gray' }}>LAPTOP</h3>

                <h3 className="text-[#073857]" style={{ color: 'gray', fontSize: '0.8rem', marginTop: '1rem' }}>MODAL - <span style={{ fontWeight: 'bold', color: 'black' }}>IPHONE 12</span></h3>
                <h3 className="text-[#073857]" style={{ color: 'gray', fontSize: '0.8rem' }}>VERSION - <span style={{ fontWeight: 'bold', color: 'black' }}>LATEST</span></h3>
                <h3 className="text-[#073857]" style={{ color: 'gray', fontSize: '0.8rem' }}>COLOR - <span style={{ fontWeight: 'bold', color: 'black' }}>WHITE</span></h3>

                <hr style={{ marginTop: '1rem', padding: '0.5px', backgroundColor: 'black' }} />
                <h3 className="font-bold" style={{ fontSize: '0.9rem', color: 'gray', textAlign: 'center' }}>SALES INFO</h3>
                <hr style={{ marginBottom: '0.5rem', padding: '0.2px', backgroundColor: 'black' }} />

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '1rem' }}>CUSTOMER NAME -
                  <span className="font-bold" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}>Mr.John Joe</span></h3>

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '0.5rem' }}>CONTACT NO -
                  <span className="font-bold" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}>071-26839467</span></h3>

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '0.5rem' }}>MRP PRICE -
                  <span className="font-bold" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}>LKR. 184 390</span></h3>

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '0.5rem' }}>SALE PRICE -
                  <span className="font-bold" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}>LKR. 148 750</span></h3>

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '0.5rem', display: 'flex' }}>DELIVERY DATE -
                  <span className="font-bold flex" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}><FaRegCalendarAlt size={16} className="mr-1" />26-JUN 2024</span>
                  </h3>

              </div>

            </Link>

            <Link href={''} className="card bid sm:w-80 sm:h-100 shadow-brown rounded-lg overflow-hidden transition-transform transform hover:scale-105 bg-white"
              style={{ width: '20rem' }}>

              <div style={{ backgroundColor: 'darkblue', padding: '0.5rem' }}>
                <h3 className="text-center font-bold" style={{ fontSize: '0.8rem', color: 'white' }}>ELECTRO BID HUB - SALES</h3>
              </div>

              <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                <hr style={{ marginTop: '1rem', padding: '0.2px', backgroundColor: 'black' }} />
                <h3 className="font-bold" style={{ fontSize: '0.9rem', color: 'gray', textAlign: 'center' }}>PRODUCT INFO</h3>
                <hr style={{ marginBottom: '0.5rem', padding: '0.5px', backgroundColor: 'black' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div style={{ padding: '0.5rem', height: '5rem', width: '5rem', paddingTop: '1rem' }}>
                  <Image src="/washing.webp" alt="" className="image" width={160} height={160}/>
                </div>
                <div style={{ padding: '0.5rem', height: '5rem', width: '5rem', paddingTop: '1rem' }}>
                <Image src="/sold.png" alt="" className="image" width={160} height={160} />
                </div>
              </div>

              <div style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingBottom: '1rem' }}>

                <h3 className="text-[#073857] font-bold text-center" style={{ color: 'gray' }}>LOAD WASHER</h3>

                <h3 className="text-[#073857]" style={{ color: 'gray', fontSize: '0.8rem', marginTop: '1rem' }}>MODAL - <span style={{ fontWeight: 'bold', color: 'black' }}>IPHONE 12</span></h3>
                <h3 className="text-[#073857]" style={{ color: 'gray', fontSize: '0.8rem' }}>VERSION - <span style={{ fontWeight: 'bold', color: 'black' }}>LATEST</span></h3>
                <h3 className="text-[#073857]" style={{ color: 'gray', fontSize: '0.8rem' }}>COLOR - <span style={{ fontWeight: 'bold', color: 'black' }}>WHITE</span></h3>

                <hr style={{ marginTop: '1rem', padding: '0.5px', backgroundColor: 'black' }} />
                <h3 className="font-bold" style={{ fontSize: '0.9rem', color: 'gray', textAlign: 'center' }}>SALES INFO</h3>
                <hr style={{ marginBottom: '0.5rem', padding: '0.2px', backgroundColor: 'black' }} />

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '1rem' }}>CUSTOMER NAME -
                  <span className="font-bold" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}>Mr.John Joe</span></h3>

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '0.5rem' }}>CONTACT NO -
                  <span className="font-bold" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}>071-26839467</span></h3>

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '0.5rem' }}>MRP PRICE -
                  <span className="font-bold" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}>LKR. 184 390</span></h3>

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '0.5rem' }}>SALE PRICE -
                  <span className="font-bold" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}>LKR. 148 750</span></h3>

                <h3 style={{ fontSize: '0.8rem', color: 'gray', marginTop: '0.5rem', display: 'flex' }}>DELIVERY DATE -
                  <span className="font-bold flex" style={{ fontSize: '0.8rem', color: 'black', marginLeft: '0.5rem' }}><FaRegCalendarAlt size={16} className="mr-1" />26-JUN 2024</span>
                  </h3>

              </div>

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}
