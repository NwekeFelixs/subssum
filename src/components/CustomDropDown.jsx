import React, { useState } from 'react';
import mtn from '../assets/mtn.png';
import airtel from '../assets/airtel.png';
import mobile from '../assets/9mobile.png';

const options = [
  { value: 'MTN', label: 'MTN', imgSrc: mtn },
  { value: 'AIRTEL', label: 'Airtel', imgSrc: airtel },
  { value: 'GLOBE', label: '9mobile', imgSrc: mobile },
];

const CustomDropdown = ({ selectedOption, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="border-blue-200 border-2 p-2 rounded-lg cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <img src={selectedOption?.imgSrc} alt="" className="w-6 h-6 mr-2" />
          <span>{selectedOption?.label || 'Select Operator'}</span>
        </div>
      </div>

      {isOpen && (
        <div className="absolute bg-white border border-blue-200 rounded-lg mt-1 w-full z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center p-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              <img src={option.imgSrc} alt="" className="w-6 h-6 mr-2" />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
