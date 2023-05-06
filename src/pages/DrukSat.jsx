/* eslint-disable no-unused-vars */
import { useState } from 'react';
import product9 from '../data/dummy.jpg';

const DrukSat = () => {
  const [gpsData, setGpsData] = useState([
    { name: 'Latitude', value: '40.7128° N' },
    { name: 'Longitude', value: '74.0060° W' },
    { name: 'Altitude', value: '10 M' },
  ]);
  return (
    <div className="mt-8 mx-6 md:mx-12 lg:mx-12">
      <div className="flex justify-center bg-blue-50 h-50">
        <img
          src={product9}
          alt="your-image-alt-text-here"
          className="w-300 h-full"
        />
      </div>

      <div className="mt-10">
        <div className="justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 justify-evenly">
            {/* GPS */}
            <div className="justify-start bg-gray-100  rounded-lg p-4">
              <p className="text-black font-bold text-2xl">GPS</p>
              <div className="border-b-1 border-gray-300 my-2" />
              <div className="grid grid-cols-2 mt-4 gap-y-4 gap-x-4">
                {gpsData.map((data) => (
                  <div key={data.name}>
                    <p className="text-sm text-gray-500 font-medium">
                      {data.name}
                    </p>
                    <p className="text-black font-bold">{data.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* BCM */}
            <div className="justify-start bg-gray-100  rounded-lg p-4">
              <p className="text-black font-bold text-2xl">BCM</p>
              <div className="border-b-1 border-gray-300 my-2" />
              <div className="grid grid-cols-2 mt-4 gap-y-4 gap-x-4">
                {gpsData.map((data) => (
                  <div key={data.name}>
                    <p className="text-sm text-gray-500 font-medium">
                      {data.name}
                    </p>
                    <p className="text-black font-bold">{data.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lider */}
            <div className="justify-start bg-gray-100 rounded-lg p-4">
              <p className="text-black font-bold text-2xl">Lider</p>
              <div className="border-b-1 border-gray-300 my-2" />
              <div className="grid grid-cols-2 mt-4 gap-y-4 gap-x-4">
                {gpsData.map((data) => (
                  <div key={data.name}>
                    <p className="text-sm text-gray-500 font-medium">
                      {data.name}
                    </p>
                    <p className="text-black font-bold">{data.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrukSat;
