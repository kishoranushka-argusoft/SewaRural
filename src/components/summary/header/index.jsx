import React from 'react'
import { AudioLines } from 'lucide-react';

const Header = ({id}) => {
  return (
    <section className="flex flex-col items-center text-center space-y-3">
      <h1 className="text-2xl md:text-3xl font-semibold">
        Patient Clinical Notes
      </h1>
      <p className="text-xs md:text-sm text-[#064848]">
        Sample ID: <span className="font-medium">{id}</span>
      </p>

      <button className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#06484830] bg-white px-6 py-3 shadow-sm hover:shadow-md">
        <span className="h-8 w-8 rounded-full bg-[#06484810] flex items-center justify-center">
          
          <span className="text-[#064848] text-lg"><AudioLines color='blue'/></span>
        </span>
        <span className="text-sm font-medium text-[#064848]">Tap to Play</span>
      </button>
    </section>
  );
}

export default Header