// Layout.js
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import Hamburger from "@/components/hamburger";
import Modal from "../shared/reusablemodal/Modal";
import Button from "../shared/button/Button";
import { useRouter } from "next/router";
import HamburgerStaff from "./HamburgerStaff";

const LayoutStaff = ({ children }) => {
  const [open, setOpen] = useState(Boolean);
  const action = () => {
    setOpen(false);
  };
  const router = useRouter();

  let school;
  if (typeof window !== 'undefined') {
    school = localStorage.getItem('schoolSlug');
  }

  const handleLogout = () => {
    localStorage.removeItem('schoolSlug');
    localStorage.removeItem('schoolId');
    localStorage.removeItem('schoolName' );
    localStorage.removeItem('schoolLogo');
    localStorage.removeItem("easysch_token");
    router.push(`/${school}/login`, `/${school}/login`);
    console.log("User Logged Out");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/4">
        <HamburgerStaff logout={() => setOpen(true)} />
      </div>

      <div className="w-3/4 overflow-y-scroll p-4">
        <div className="flex justify-between mb-2">
          {/* Render search bar and icons only on larger screens */}
          <div className="hidden  relative items-center md:flex">
            <CiSearch className="h-5 w-5 text-gray-500 absolute left-4 items-center" />
            <input
              type="text"
              placeholder="Search..."
              className="py-1 pl-10 pr-2 border  border-gray-400 rounded-sm focus:outline-none w-[605px] focus:border-blue-500"
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            {/* Render icons only on larger screens */}
            <div className="hidden md:flex w-10 h-10 items-center bg-[#F0F2F5] rounded-[50%] justify-center">
              <IoMdNotificationsOutline className="h-6 w-6 text-gray-500" />
            </div>

            {/* Render profile picture only on larger screens */}
            <div className="hidden md:block">
              <img
                src="Avatars.png"
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="">
            <Modal action={action} open={open}>
              <div className="flex flex-col gap-6 p-4">
                <div className=" font-semibold text-3xl text-[#0065C2]">
                  Do You Want to Log out?
                </div>
                <div className=" grid grid-cols-2 gap-2">
                  <Button
                    intent="secondary"
                    size="small"
                    text="Yes"
                    disabled={false}
                    onClick={handleLogout}
                  />
                  <Button
                                      intent="primary"
                                      size="small"
                                      text="No"
                                      disabled={false} onClick={undefined}                  />
                </div>
              </div>
            </Modal>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutStaff;
