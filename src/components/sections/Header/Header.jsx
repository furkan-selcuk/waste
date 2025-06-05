import React from 'react';
import { Icon } from '@iconify/react';
import "../../../index.css"
const Header = () => {
  return (
    <header className="w-full bg-secondary py-4">
      <div className="container mx-auto  justify-center items-center w-full">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center space-x-4 justify-between md:justify-around ">
            <div className="flex items-center space-x-2 hidden sm:flex">
              <Icon icon="mdi:map-marker" className="w-6 h-6 text-green-600" />
              <span className="text-sm font-medium text-gray-700 hidden md:inline">Postcode</span>
            </div>
            <div className="h-0.5 w-8 bg-green-300 hidden sm:block"></div>
            <div className="flex items-center space-x-2  sm:flex">
              <Icon icon="mdi:trash-can" className="w-6 h-6 text-green-600" />
              <span className="text-sm font-medium text-gray-700 hidden md:inline">Waste type</span>
            </div>
            <div className="h-0.5 w-8 bg-green-300  sm:block"></div>
            <div className="flex items-center space-x-2 flex  sm:flex">
              <Icon icon="mdi:truck-fast" className="w-6 h-6 text-green-600" />
              <span className="text-sm font-medium text-gray-700 hidden md:inline">Select skip</span>
            </div>
            <div className="h-0.5 w-8 bg-gray-300  sm:block"></div>
            <div className="flex items-center space-x-2  sm:flex">
              <Icon icon="mdi:shield" className="w-6 h-6 text-black-600" />
              <span className="text-sm font-medium text-gray-700 hidden md:inline">Permit Check</span>
            </div>
            <div className="h-0.5 w-8 bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center space-x-2 hidden sm:flex">
              <Icon icon="mdi:calendar" className="w-6 h-6 text-black-600" />
              <span className="text-sm font-medium text-gray-700 hidden md:inline">Choose Date</span>
            </div>
            <div className="h-0.5 w-8 bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center space-x-2 hidden sm:flex">
              <Icon icon="mdi:credit-card-outline" className="w-6 h-6 text-black-600" />
              <span className="text-sm font-medium text-gray-700 hidden md:inline">Payment</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 