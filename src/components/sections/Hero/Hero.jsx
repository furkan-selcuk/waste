import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import {
  fetchSkips,
  selectAllSkips,
  selectSkipStatus,
  selectSkipError,
  selectSkipFilters,
  setFilters,
  clearFilters
} from '../../../store/slices/skipSlice';
import "../../../index.css"
import wastePicture from "../../../assets/images/wastePicture.png"
import Card from '../../common/Card/Card';

const Hero = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllSkips);
  const status = useSelector(selectSkipStatus);
  const error = useSelector(selectSkipError);
  const filters = useSelector(selectSkipFilters);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSkips({ postcode: 'NR32', area: 'Lowestoft' }));
    }
  }, [status, dispatch]);

  const handleFilterChange = (filterType, value) => {
    dispatch(setFilters({ [filterType]: value }));
  };

  const next = () => {
    setCurrent((prev) => (prev + 1 < items.length ? prev + 1 : 0));
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 >= 0 ? prev - 1 : items.length - 1));
  };

  const handleSelect = (item) => {
    alert(`Request created: ${item.size} Yard Skip`);
  };

  return (
    <section className="w-full flex-1 ">
      <div className="w-full px-4  ">
        <div className="max-w-6xl mx-auto py-4">
          <div className="text-2xl md:text-4xl lg:text-6xl text-center">Choose Your Skip Size</div>
          <div className="text-base md:text-xl lg:text-4xl text-center text-gray-500 mt-1">Select the skip size that best suits your needs</div>
          {/* Skip List - Slider */}
          {status === 'loading' && (
            <div className="text-center py-8 text-gray-600 flex justify-center items-center">
              <Icon icon="mdi:loading" className="w-8 h-8 animate-spin mx-auto mb-2" />
            </div>
          )}

          {status === 'failed' && (
            <div className="text-center py-8 text-red-600">
              <Icon icon="mdi:alert-circle" className="w-8 h-8 mx-auto mb-2" />
              Error: {error}
            </div>
          )}

          {status === 'succeeded' && items.length > 0 && (
            <div className="flex  justify-center gap-4 py-8">
              {/* Left card */}
              <div className="hidden lg:block">
              {(() => {
                const index = (current - 1 + items.length) % items.length;
                const item = items[index];
                return (
                  <Card
                    key={item.id}
                    variant="side"
                    image={wastePicture}
                    title={`${item.size} Yard Skip`}
                    subtitle={`${item.hire_period_days} day hire period`}
                    price={item.price_before_vat}
                    allowed={item.allowed_on_road}
                    onSelect={() => handleSelect(item)}
                  />
                );
              })()}
              </div>
              {/* Left button - to the left of the center card */}
              <button onClick={prev} className="p-2 rounded-full bg-white hover:bg-gray-300 text-2xl text-primary self-center  lg:flex">
                <Icon icon="mdi:chevron-left" />
              </button>
              {/* Center card */}
              {(() => {
                const item = items[current];
                return (
                  <Card
                    key={item.id}
                    variant="center"
                    image={wastePicture}
                    title={`${item.size} Yard Skip`}
                    subtitle={`${item.hire_period_days} day hire period`}
                    price={item.price_before_vat}
                    allowed={item.allowed_on_road}
                    onSelect={() => handleSelect(item)}
                  />
                );
              })()}
              {/* Right button - to the right of the center card */}
              <button onClick={next} className="p-2 rounded-full bg-white hover:bg-gray-300 text-2xl text-primary self-center  lg:flex">
                <Icon icon="mdi:chevron-right" />
              </button>
              {/* Right card */}
              <div className="hidden lg:block">
              {(() => {
                const index = (current + 1) % items.length;
                const item = items[index];
                return (
                  <Card
                    key={item.id}
                    variant="side"
                    image={wastePicture}
                    title={`${item.size} Yard Skip`}
                    subtitle={`${item.hire_period_days} day hire period`}
                    price={item.price_before_vat}
                    allowed={item.allowed_on_road}
                    onSelect={() => handleSelect(item)}
                  />
                );
              })()}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
