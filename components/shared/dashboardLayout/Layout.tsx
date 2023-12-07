// Layout.js
import React from "react";
import { CiSearch } from "react-icons/ci";
import Sidebar from "@/components/sidebar";
import { IoMdNotificationsOutline } from "react-icons/io";

const Layout = ({ children, customAvatar }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/4">
        <Sidebar />
      </div>

      <div className="w-3/4 overflow-y-scroll p-4">
        <div className="flex justify-between ">
          <div className="relative flex items-center">
            <CiSearch className="h-5 w-5 text-gray-500 absolute left-4" />
            <input
              type="text"
              placeholder="Search..."
              className="py-1 pl-10 pr-2 border border-gray-400 rounded-sm focus:outline-none w-[605px] focus:border-blue-500"
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <IoMdNotificationsOutline className="h-6 w-6 text-gray-500" />
            </div>

            <div className="">
              <img
                src="Avatars.png"
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
