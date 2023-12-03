// import index from '@/pages';
import React, { useState, useEffect, useRef} from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


interface SelectProps {
    options: string[];
    placeholder:string
  }

export default function Select({options,placeholder} : SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const filtered = options.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm]);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  

  const handleSelectOption = (option:any) => {
    console.log("Selected Option is:",option)
    setSelectedOption(option)
    setIsOpen(false)
    // setSearchTerm(option);
  };

  return (
    <div className=" text-left" ref={dropdownRef}>
      <input
        type="text"
        onClick={handleToggleDropdown}
        value={searchTerm}
        placeholder={selectedOption ? selectedOption : placeholder}
        className=" w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 "
        onChange={(e) => setSearchTerm(e.target.value)}
        
      />

      {isOpen && (
        <div className=" pt-2 w-full rounded-md shadow-lg">
          <div className="  bg-white border border-gray-300  rounded-md">
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelectOption(option)}
                className=" flex justify-between items-center mx-1 mt-1 px-1 py-2 rounded-md cursor-pointer hover:bg-gray-200"
              >
                <div>{option}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
