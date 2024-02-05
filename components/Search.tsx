import React from 'react';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import Dropdown from './shared/dropdown/StaffDropdown';

export default function Search() {
  const DepartmentOptions = ["Academic", "Non academic"];
  const RoleOptions = ["Administrative Secretary", "Bursar", "Helper", "Janitor", "Teacher"];
  const QualificationOptions = ["Bsc", "HND", "Msc", "OND"];
  const sortOptions = ["Ascending", "Descending"];

  const handleSelect = () => {};

  return (
    <div className=' '>
      <div className="md:flex  justify-between">
        <div className='md:w-[30%]'>
          <input
            type="text"
            name=""
            id=""
            className="w-full border border-[#E4E7EC] py-2 rounded-md outline-none text-sm text-[#667185] pl-2"
            placeholder="Search staff..."
            
          />
        </div>
        <div className="flex md:gap-3 gap-1">
          <p className="flex items-center">Filters:</p>
          <div className="flex items-center gap-3 md:gap-5">
            <Dropdown
              options={DepartmentOptions}
              onSelect={handleSelect}
              placeholder="Academic"
            />
            <Dropdown
              options={RoleOptions}
              onSelect={handleSelect}
              placeholder="Role"
            />
            <Dropdown
              options={QualificationOptions}
              onSelect={handleSelect}
              placeholder="Qualification"
            />
            <Dropdown
              options={sortOptions}
              onSelect={handleSelect}
              placeholder="Sort"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
