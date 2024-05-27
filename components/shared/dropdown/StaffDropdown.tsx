import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function StaffDropdown({ options, onSelect, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelectedOption(option === "All" ? null : option);
    setIsOpen(false);
    onSelect(option);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative md:text-sm text-[12px]`} ref={dropdownRef}>
      <div
        className={`flex gap-1 cursor-pointer items-center ${
          isOpen ? "text-black" : "text-[#878787]"
        }`}
        onClick={toggleDropdown}
      >
        <p className={selectedOption ? "text-black" : ""}>
          {selectedOption || placeholder}
        </p>
        <div></div>
        {isOpen && <IoIosArrowUp className={selectedOption ? "text-black" : ""} />}
        {!isOpen && <IoIosArrowDown className={selectedOption ? "text-black" : ""} />}
      </div>
      {isOpen && (
        <div className="absolute whitespace-nowrap right-0 bg-white-100 shadow-lg rounded-md mt-2 outline-none p-2">
          <div onClick={() => handleSelect('All')} className={`cursor-pointer rounded w-full p-1 text-[12px] md:text-sm ${
                selectedOption === 'All' ? "text-black" : ""
              } hover:bg-gray-500`}>All</div>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`cursor-pointer rounded w-full p-1 text-[12px] md:text-sm ${
                selectedOption === option ? "text-black" : ""
              } hover:bg-gray-500`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
