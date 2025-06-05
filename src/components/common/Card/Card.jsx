import React from 'react';
import { Icon } from '@iconify/react';

// Center card component
const CenterCard = ({ image, title, subtitle, price, allowed, onSelect, className = '' }) => (
  <div className={`w-64 bg-white rounded-lg shadow-md overflow-hidden items-center justify-center flex flex-col px-2 border-2 border-primary ${className} h-96`}>
    {image && <img src={image} alt={title} className="w-30 h-20 md:w-40 md:h-28  object-cover" />}
    <div className="px-4 py-2">
      <h3 className="text-xl md:text-4xl  font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-lg md:text-2xl text-gray-600">{subtitle}</p>
    </div>
    <div className="px-4 py-2 w-full">
      <div className="flex justify-start flex-col">
        <p className="text-black-600 text-sm items-start px-2">
          <span className="text-2xl md:text-4xl font-bold">£{price}</span>
        </p>
        <div className="py-2 px-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 w-full">
              {/* Show warning if not allowed */}
              {!allowed && (
                <span className="justify-between w-full inline-flex items-center px-2.5 py-0.5 rounded-lg md:text-sm text-xs font-medium bg-secondary text-black gap-2 border border-secondary">
                  Not Allowed
                  <Icon icon="mdi:warning" className="w-5 h-5 ml-1 text-red-600" />
                </span>
              )}
            </div>
          </div>
        </div>
        {/* Select button */}
        <div className="flex justify-between items-center px-2">
          <button
            className="w-full bg-tertiary text-white px-4 py-2 rounded-lg font-medium hover:bg-tertiary/80 transition-colors flex items-center justify-between space-x-2 md:text-sm text-xs"
            onClick={onSelect}
          >
            <span>Select</span>
            <Icon icon="mdi:chevron-right" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Side card component
const SideCard = ({ image, title, subtitle, price, allowed, onSelect, className = '' }) => (
  <div className={`w-48 bg-secondary rounded-lg shadow-md overflow-hidden items-center justify-center flex flex-col px-1 border border-gray-300 ${className} h-80`}>
    {image && <img src={image} alt={title} className="w-24 h-16 object-cover" />}
    <div className="px-3 py-2">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
    </div>
    <div className="px-3 py-2 w-full">
      <div className="flex justify-start flex-col">
        <p className="text-black-600 text-xs items-start px-2">
          <span className="text-2xl font-bold">£{price}</span>
        </p>
        <div className="py-1 px-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {/* Show warning if not allowed */}
              {!allowed && (
                <span className="w-36 inline-flex shadow-md items-center px-2 py-0.5 rounded-lg text-xs font-medium bg-secondary text-black gap-2 border border-gray-300 justify-between">
                  Not Allowed
                  <Icon icon="mdi:warning" className="w-5 h-5 ml-1 text-red-600" />
                </span>
              )}
            </div>
          </div>
        </div>
        {/* Select button */}
        <div className="flex justify-between items-center px-2">
          <button
            className="w-36 bg-tertiary text-white px-3 py-1.5 rounded-lg font-medium hover:bg-tertiary/80 transition-colors flex items-center justify-between space-x-2 text-xs"
            onClick={onSelect}
          >
            <span>Select</span>
            <Icon icon="mdi:chevron-right" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Main Card component
const Card = (props) => {
  if (props.variant === 'center') {
    return <CenterCard {...props} />;
  }
  return <SideCard {...props} />;
};

export default Card; 