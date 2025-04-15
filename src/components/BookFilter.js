import React from 'react';
import { useState } from 'react';

// Filtering component
export const BookFilter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    onFilterChange(newValue);
  };

  return (
    <div className="mb-6">
      <div className="relative">
        <input
          type="text"
          id="inputTxtFilterBooks"
          name="searchTerm"
          placeholder="Search books by title or author..."
          value={searchTerm}
          onChange={handleChange}
          className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
