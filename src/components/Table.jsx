import React, { useState } from 'react';
import { BsExclamationSquare } from 'react-icons/bs';
import { FaCheckSquare } from 'react-icons/fa'; // Import the FaCheckSquare icon
import { IoFilter } from 'react-icons/io5'; // Import the IoFilter icon

// Define the services with phone numbers
const services = [
  { name: 'MTN Airtime VTU', phone: '08012345678' },
  { name: 'Airtel Airtime VTU', phone: '08123456789' },
  { name: '9Mobile Airtime VTU', phone: '09012345678' },
  { name: 'DSTV', phone: '07012345678' },
  { name: 'Startime', phone: '08087654321' }
];

const statuses = ['Initiated', 'Successful', 'Failed'];
const paymentMethods = ['Transfer', 'Card Payment', 'Wallet'];

// Function to determine the color for status text
const getStatusColor = (status) => {
  switch (status) {
    case 'Successful':
      return 'text-green-500';
    case 'Failed':
      return 'text-red-500';
    default: // Initiated
      return 'text-yellow-500';
  }
};

// Function to determine the icon color for status
const getIconColor = (status) => {
  switch (status) {
    case 'Successful':
      return 'text-green-500';
    case 'Failed':
      return 'text-red-500';
    default: // Initiated
      return 'text-yellow-500';
  }
};

// Function to format date and time
const formatDateTime = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return new Date(date).toLocaleDateString('en-US', options);
};

const Table = () => {
  const [filter, setFilter] = useState('');

  // Function to handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="p-4">
      {/* Filter Section */}
      <div className="flex items-center mb-4 border border-gray-300 rounded-md px-3 py-2 text-sm w-40">
        <IoFilter className="text-lg text-blue-800 mr-1 text-opacity-50" size={25} />
        <select
          value={filter}
          onChange={handleFilterChange}
          className=" outline-none text-base font-semibold  text-blue-800 mr-2 text-opacity-50"
        >
          <option value="">Filter</option>
          <option value="Initiated">Initiated</option>
          <option value="Successful">Successful</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 text-opacity-60 uppercase">Service</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 text-opacity-60 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 text-opacity-60 uppercase">Total Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 text-opacity-60 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 text-opacity-60 uppercase">Payment Method</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 text-opacity-60 uppercase">Transaction No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 text-opacity-60 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {[...Array(12)].map((_, rowIndex) => {
              const status = statuses[rowIndex % statuses.length];
              if (filter && filter !== status) return null; // Apply filter

              const colorClass = getStatusColor(status); // Color class for status text
              const iconColor = getIconColor(status); // Icon color class
              const service = services[rowIndex % services.length];
              const transactionDate = formatDateTime(new Date()); // Format the current date and time

              return (
                <tr key={rowIndex}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {status === 'Successful' ? (
                        <FaCheckSquare className={`text-xl ${iconColor}`} />
                      ) : (
                        <BsExclamationSquare className={`text-xl ${iconColor}`} />
                      )}
                      <div>
                        <div className="font-bold text-xs text-opacity-70 text-blue-800">{service.name}</div>
                        <div className="text-xs text-opacity-70 text-blue-800 font-semibold">{service.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-bold text-xs text-opacity-70 text-blue-800">₦{Math.floor(Math.random() * 10000)}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-bold text-xs text-opacity-70 text-blue-800">₦{Math.floor(Math.random() * 10000)}</td>
                  <td className={`px-6 py-4 whitespace-nowrap ${colorClass}`}>
                    <span className={`text-md font-semibold text-sm`}>{status}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-bold text-xs text-opacity-70 text-blue-800">{paymentMethods[rowIndex % paymentMethods.length]}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-bold text-xs">
                    <div>TRX{Math.floor(Math.random() * 100000)}</div>
                    <span className="text-xs text-blue-900 text-opacity-70 font-semibold">{transactionDate}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-500 hover:text-blue-700 text-opacity-70 bg-blue-200 font-semibold px-2 py-[2px] rounded-xl text-sm">Open</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
