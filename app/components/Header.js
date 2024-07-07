
import Link from "next/link";
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-white shadow-lg">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full relative">
            <Image
                src="/images/logo.png"
                alt="Logo"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
            />
        </div>
                    <h1 className="text-2xl"><Link href="/">Hello! Admin</Link></h1>
                </div>
                <nav className="flex space-x-4 items-center">
                    <Link href="/" className="text-blue-500">Dashboard</Link>
                    <Link href="/products" className="text-blue-500">Product</Link>
                    <Link href="/sellers" className="text-blue-500">Sellers</Link>
                    <Link href="/customers" className="text-blue-500">Customers</Link>
                    <Link href="/pages/cards" className="text-blue-500">Analysis</Link>
                    <Link href="/contact" className="text-blue-500">Settings</Link>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 border rounded-lg"
                    />
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                        <img src="/1.jpg" alt="Profile" className="w-full h-full object-cover"/>
                    </div>
                </nav>
            </div>
        </header>
    );
}
