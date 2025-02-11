import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import StaffSidebar from './StaffSidebar';
const HamburgerStaff = ({ logout}:{logout:any}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="md:hidden absolute z-50 p-4 text-2xl right-5 text-blue-200"  onClick={() => setOpen(!open)}>
        {open ? <MdClose /> : <MdMenu />}
      </div>
      <nav className="hidden md:flex">
        <StaffSidebar logout={logout} slug={''}/>
           </nav>
      <nav className={`lg:hidden ${open ? 'block' : 'hidden'}`}>
        <StaffSidebar logout={logout} slug={''}/>
          </nav>
    </div>
  );
};
export default HamburgerStaff;
