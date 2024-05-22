// import index from '@/pages';
import React, { useState, useEffect, useRef } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


interface SelectProps {
  options: {label:string, value:string | number }[];
  placeholder: string
  state: {label:string, value:string}[] ;
  setState: any;
}

type OptionProps = {
  label:string,
   value:string | number 
}

export default function Multiselect({ options, placeholder, state, setState }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState<{label:string, value:string | number }[]>([]);
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
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm]);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = (option:OptionProps) => {
    const filtered = selectedOption.filter((opt) => opt.value !== option.value);
    setSelectedOption(filtered);
  };


  const handleSelectOption = (option: any) => {
    console.log("Selected Option is:", option)
    if (!selectedOption.includes(option)) {
      setSelectedOption([...selectedOption, option]);
    }
 console.log(selectedOption)
 setState(selectedOption)

    // setSearchTerm(option);
  };

  return (
    <div className=" text-left" ref={dropdownRef}>
      <input
        type="text"
        onClick={handleToggleDropdown}
        value={searchTerm}
        placeholder={searchTerm ? searchTerm : placeholder}
        className=" w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-500 rounded-md focus:outline-none focus:border-blue-300 "
        onChange={(e) => setSearchTerm(e.target.value)}

      />

      {isOpen && (
        <div className=" pt-2 w-full rounded-md shadow-lg">
          <div className="  bg-white border border-gray-500  rounded-md">
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelectOption(option)}
                className=" flex justify-between items-center mx-1 mt-1 px-1 py-2 rounded-md cursor-pointer hover:bg-gray-600"
              >
                <div>{option.label}</div>
                {selectedOption.includes( option) && (
                  <div className=' text-blue-200'>
                    <IoMdCheckmark />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedOption.length > 0 && (
        <div className=" py-3 flex  w-full">
          <div className='  grid grid-cols-3 gap-3 '>
            {selectedOption.map((option, index) => (
              <button key={index} className="font-medium mx-1 border rounded-lg h-8  justify-between gap-2 items-center flex  text-gray-300  px-2 text-xs py-2">
                {option.label}
                <div onClick={() => { handleDelete(option) }}>
                  <RxCross2 />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
