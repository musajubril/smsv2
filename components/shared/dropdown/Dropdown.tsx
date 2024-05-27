import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Dropdown({ options, onSelect, placeholder }){
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelectedOption(option === "All" ? null : option);
    onSelect(option);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex gap-2 cursor-pointer items-center text-[#878787] "
        onClick={toggleDropdown}
      >
        <p>{selectedOption || placeholder}</p>
        <IoIosArrowDown />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 bg-white-100 shadow-lg rounded-md mt-2">
          <div onClick={() => handleSelect('All')} className={`cursor-pointer rounded w-full p-1 text-[12px] md:text-sm ${
                    selectedOption === 'All' ? "text-black" : ""
                  } hover:bg-gray-500`}>All</div>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="cursor-pointer rounded-md py-2 px-2 hover:bg-gray-500"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

