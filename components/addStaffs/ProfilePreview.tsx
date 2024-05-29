import React from "react";
import Button from "../shared/button/Button";

export default function Studentpreview() {
  return (
    <div className=" h-[500px] overflow-y-scroll ">
      <div className=" flex flex-col gap-4 ">
        <div className=" font-semibold text-2xl flex">Profile Preview</div>
        <div className=" flex  ">
          <div className=" flex flex-col justify-center items-center">
            <div>
              <img src="/Avatar.png" alt="" className="cursor-pointer pb-3" />
            </div>
          </div>
        </div>

        <div className=" rounded-lg border-2 border-[#EDEDED] pl-3">
          <div className="flex font-semibold text-[#878787] text-lg">
            Personal Information
          </div>
          <div className=" grid grid-cols-2 py-2 gap-10">
            <div className=" flex flex-col gap-3">
              <div className=" flex flex-col items-start">
                <div className=" font-normal text-sm text-[#878787]">
                  First name
                </div>
                <h1 className=" font-medium text-base">Jones</h1>
              </div>
              <div className=" flex flex-col items-start">
                <div className=" font-normal text-sm text-[#878787]">
                  Gender
                </div>
                <h1 className=" font-medium text-base">Male</h1>
              </div>
              <div className=" flex flex-col items-start">
                <div className=" font-normal text-sm text-[#878787]">
                  Home address
                </div>
                <h1 className=" font-medium text-base">10, ogungbe street, lasu street</h1>
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" flex flex-col items-start">
                <div className=" font-normal text-sm text-[#878787]">
                  Last name
                </div>
                <h1 className=" font-medium text-base">Amayla</h1>
              </div>
              <div className=" flex flex-col items-start">
                <div className=" font-normal text-sm text-[#878787]">
                  Email address
                </div>
                <h1 className=" font-medium text-base">Example@gmail.com</h1>
              </div>
              <div className=" flex flex-col items-start">
                <div className=" font-normal text-sm text-[#878787]">
                  Phone Number
                </div>
                <h1 className=" font-medium text-base">09032456758</h1>
              </div>
            </div>
          </div>
        </div>

        <div className=" rounded-lg border-2 border-[#EDEDED] pl-3">
          <div className="flex font-semibold text-[#878787] text-lg">
            Role Details
          </div>
          <div className=" grid grid-cols-2 py-2 gap-10">
            <div className=" flex flex-col gap-3">
              <div className=" flex flex-col items-start">
                <div className=" font-normal text-sm text-[#878787]">
                 Department
                </div>
                <h1 className=" font-medium text-base">John Doe</h1>
              </div>
              <div className=" flex flex-col items-start">
                <div className=" font-normal text-sm text-[#878787]">
                Home Address
                </div>
                <h1 className=" font-medium text-base">10,OgunKill, Street. Ajah, Lagos state</h1>
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" flex flex-col items-start">
                <div className=" font-normal text-sm text-[#878787]">
                Guardian/Parent's Number
                </div>
                <h1 className=" font-medium text-base">08066641969</h1>
              </div>
              <div className=" flex flex-col items-start">
                <div className=" font-normal text-sm text-[#878787]">
                Guardian/Parent's Email address
                </div>
                <h1 className=" font-medium text-base">Example@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-2 pt-2">
          <div>
            <Button
              intent="secondary"
              size="base"
              text="Edit"
              disabled={false} onClick={undefined}            />
          </div>
          <div
          >
            <Button
              intent="primary"
              size="base"
              text="Confirm"
              disabled={false} onClick={undefined}            />
          </div>
        </div>
      </div>
    </div>
  );
}
