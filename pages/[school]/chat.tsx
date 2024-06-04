import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import Search from "@/components/Search";
import Modal from "@/components/shared/reusablemodal/Modal";
import ChatModal from "@/components/chats/ChatModal";
import Layout from "@/components/shared/dashboardLayout/Layout";

export default function chat() {
  const [open, setOpen] = useState(Boolean);
  const action = () => {
    setOpen(false);
  };

 
  return (
    <Layout>
      <div className="">
        <Modal action={action} open={open}>
          <ChatModal submit={action}/>
        </Modal>
      </div>
      <div className=" grid grid-cols-3 h-screen w-full">
        {/* left */}
        <div className="  border-gray-500">
          {/* top  */}
          <div className=" flex justify-between items-center p-5 border-b border-gray-400 cursor-pointer">
            <div className=" flex items-center justify-center gap-3">
              <div className=" font-bold text-2xl">Messages</div>
              <div className=" font-bold text-xl pt-1 flex items-center justify-center">
                <FaChevronDown />
              </div>
              <div className=" p-2 items-center bg-[#EDF2F7] rounded-xl font-bold text-sm">
                12
              </div>
            </div>
            <div
              className=" text-[#615EF0] font-bold text-4xl flex items-center"
              onClick={() => {
                setOpen(true);
              }}
            >
              <FaPlusCircle />
            </div>
          </div>
          {/* bottom  */}
          <div>
            <div className="p-3">
              <div className="">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full bg-[#F3F3F3] py-2 rounded-2xl outline-none text-sm text-[#667185] pl-2"
                  placeholder="Search Messages"
                />
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className=" border-l border-gray-500 col-span-2"></div>
      </div>
    </Layout>
  );
}
