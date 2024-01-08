import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Dropdown({ options, onSelect, placeholder }){
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
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
        <div className="absolute z-10 top-full left-0 bg-white-100 shadow-lg rounded-md mt-2">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="cursor-pointer rounded-md py-2 px-4 hover:bg-gray-500"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

