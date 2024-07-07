import Link from "next/link";
import Image from "next/image";
import icon from '../images/icon.png';

import '../../styles/home.css';

import { FaUser } from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";

export default function Navbar() {
  return (

    <nav className="flex justify-between items-center bg-slate-800 px-8 headnav" style={{ backgroundColor: 'white', marginBottom:'1rem'}}>

      <div className="flex" style={{alignItems:'center'}}>
        <Image src={icon} alt="" className="w-12 h-12" />
        <h1 className="font-bold" style={{ fontSize: '1.2rem', fontFamily: 'initial', marginLeft: -5, color:'#031520'}}>ELECTRO BID HUB</h1>
      </div>

      <div className="flex" style={{alignItems:'center'}}>
        <Link className="text-black font-bold" href={"/"}>
          <AiFillHome size={22} className="mr-2" color="#031520" />
        </Link>
        <Link className="text-black font-bold" href={"/"}>
          <IoMdNotifications size={24} className="mr-2" color="#031520" />
        </Link>
        <Link className="text-black font-bold" href={"/"}>
          <BiSolidMessageRounded size={22} className="mr-2" color="#031520" />
        </Link>
        <Link className="text-black font-bold" href={"/"}>
          <FaUser size={20} className="mr-2" color="#031520" />
        </Link>
      </div>

    </nav>

  );
}
