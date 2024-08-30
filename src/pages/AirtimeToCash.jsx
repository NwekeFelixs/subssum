import React, { useState } from 'react';
import Header from '../components/Header';
import CustomDropdown from '../components/CustomDropDown';

const AirtimeToCash = () => {
  const [selectedOperator, setSelectedOperator] = useState(null);

  return (
    <div>
      <Header Message="Airtime to Cash" />
      <div className="flex justify-center items-center flex-col py-4 px-16 gap-14">
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-[0.25rem]">
            <span className='text-blue-700 font-semibold text-base text-center'>Fill Info</span>
            <div className="bg-blue-700 h-[5px] w-[150px] p-[3px] rounded-full"></div>
          </div>

          <div className="flex flex-col gap-[0.25rem]">
            <span className='text-blue-700 font-semibold text-base text-center text-opacity-40'>Make Payment</span>
            <div className="bg-blue-700 h-[5px] w-[150px] p-[3px] rounded-full bg-opacity-40"></div>
          </div>

          <div className="flex flex-col gap-[0.25rem]">
            <span className='text-blue-700 font-semibold text-base text-center text-opacity-40'>View Receipt</span>
            <div className="bg-blue-700 h-[5px] w-[150px] p-[3px] rounded-full bg-opacity-40"></div>
          </div>
        </div>

        {/* FORM */}
        <form action="#" className='py-5 px-5 border-blue-200 rounded-xl border-2 bg-blue-100 bg-opacity-25'>
          <h2 className="text-center text-xl font-bold text-blue-900 text-opacity-70 mb-8">Airtime To Cash</h2>
          <div className='flex justify-between gap-2 items-center'>
            <div className="w-[45%] flex flex-col">
              <label htmlFor="operator" className='text-sm text-blue-800 font-semibold text-opacity-60'>Select Network</label>
              <CustomDropdown
                selectedOption={selectedOperator}
                onChange={(option) => setSelectedOperator(option)}
              />
            </div>
            <div className='w-[48%]'>
              <label htmlFor="phoneNumber" className='text-sm text-blue-800 text-opacity-60 font-semibold'>Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className='border-blue-200 border-2 py-2 px-3 rounded-lg outline-none w-full text-blue-800 text-opacity-70 font-semibold'
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div className='mt-4'>
            <label htmlFor="amount" className='text-sm text-blue-800 font-semibold text-opacity-60'>Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              className='border-blue-200 border-2 py-3 px-3 rounded-lg outline-none w-full  text-blue-800 text-opacity-70 font-semibold'
              placeholder="Enter amount"
            />
          </div>

          <div className='mt-4'>
            <label htmlFor="amount" className='text-sm text-blue-800 font-semibold text-opacity-60'>Airtime Share Pin</label>
            <input
              type="text"
              id="amount"
              name="amount"
              className='border-blue-200 border-2 py-3 px-3 rounded-lg outline-none w-full  text-blue-800 text-opacity-70 font-semibold'
              placeholder="Enter amount"
            />
          </div>
          <div className='flex justify-center mt-6'>
            <button type="submit" className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800 w-full'>Proceed</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AirtimeToCash;
