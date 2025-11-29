import React from 'react'
import { SoapCardData } from './data';

const SoapCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-8 '>
      {SoapCardData.map((ele) => (
        <div
          className={`rounded-2xl border border-[#06484810] ${ele.colorClass} p-4 flex flex-col gap-3`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#064848]">{ele.title}</h3>
            <span className="h-8 w-8 p-2 rounded-full bg-white flex items-center justify-center text-sm">
              <ele.icon size={20} color='blue' />
            </span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-[#064848]">
            {ele.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SoapCard