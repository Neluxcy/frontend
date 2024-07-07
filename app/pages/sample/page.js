import { FaUserShield, FaStore, FaUsers } from 'react-icons/fa';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Admin Card */}
        <Link href="/admin">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <div className="flex flex-col items-center">
              <FaUserShield className="text-6xl text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Admin</h2>
              <p className="text-gray-600 text-center">Manage users, settings, and more.</p>
            </div>
          </div>
        </Link>

        {/* Sellers Card */}
        <Link href="/sellers">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <div className="flex flex-col items-center">
              <FaStore className="text-6xl text-green-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Sellers</h2>
              <p className="text-gray-600 text-center">View and manage your store.</p>
            </div>
          </div>
        </Link>

        {/* Customers Card */}
        <Link href="/customers">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <div className="flex flex-col items-center">
              <FaUsers className="text-6xl text-purple-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Customers</h2>
              <p className="text-gray-600 text-center">Browse and manage customers.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
