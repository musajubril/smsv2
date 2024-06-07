// import index from '@/pages';
import { SignUpState } from '@/pages/[school]/admin/student/add';
import React, { useState, useEffect, useRef} from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { AddStaffState } from '@/pages/[school]/admin/staff/add';


interface SelectProps {
  text: string;
    options:  {label:string, value:string | number }[];
    placeholder:string
    change: React.ChangeEventHandler<HTMLInputElement> | undefined | null;
    state: SignUpState | AddStaffState;
    setState: React.Dispatch<React.SetStateAction<SignUpState | AddStaffState>>;
    name: string;
  }

export default function Select({options,placeholder, name, change, text, state, setState} : SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState();;
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


  const handleSelectOption = (option:any) => {
    console.log("Selected Option is:",option)
    setSelectedOption(option.label)
    setState( option.value )
    setIsOpen(false)
    change
  };

  const handleInput = (e: any) =>{
    setSearchTerm(e.target.value)
  };

  return (
    <div className="relative text-left" ref={dropdownRef}>
      <input
        type="text"
        name={name}
        onClick={handleToggleDropdown}
        value={searchTerm}
        placeholder={selectedOption ? selectedOption : placeholder}
        className=" w-full px-4 py-3 text-sm font-medium  bg-white border border-gray-500 rounded-md focus:outline-none focus:border-blue-300 "
        // onChange={(e) => setSearchTerm(e.target.value)}
        onChange={handleInput}
      />

      {isOpen && (
        <div className="absolute z-50 mt-2 pt-2 w-full rounded-md shadow-lg bg-gray-700 overflow-y-scroll max-h-60">
          <div className="  bg-white   rounded-md">
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelectOption(option)} 
                className=" flex justify-between items-center mx-1 mt-1 px-1 py-2 rounded-md cursor-pointer hover:bg-gray-600"
                // name={text}
                // value={option}
              >
                <div>{option.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
