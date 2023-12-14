import React, { useState } from "react";
import { AiOutlineImport } from "react-icons/ai";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";

export default function ImportCSV() {
  const [fileName, setfileName] = useState("");

  const handleCSV = (e: any) => {
    setfileName(e.target.files[0].name);
    console.log( fileName);
  };
  return (
    <div className=" flex flex-col gap-6">
      <div className="flex font-semibold text-2xl">Import CSV</div>
      <div className=" flex flex-col gap-3">
        <div className=" flex items-center gap-3  ">
          <div className=" text-lg ">
            <IoIosCheckmarkCircleOutline />
          </div>
          <div className=" font-normal text-base text-gray-200">
            Use supported headings: name,gender,etc.
            <a href="#" className=" font-medium text-blue-200">(Download a sample CSV)</a>
          </div>
        </div>
        <div className=" flex items-center gap-3 ">
          <div className=" text-lg ">
            <IoIosCheckmarkCircleOutline />
          </div>
          <div className=" font-normal text-base text-gray-200">
            {" "}
            You can import Excel or Google Sheet files.
          </div>
        </div>
        <div className=" flex items-center gap-3 ">
          <div className=" text-lg ">
            <IoIosCheckmarkCircleOutline />
          </div>
          <div className=" font-normal text-base text-gray-200">
            {" "}
            You can import a maximum of 100 rows.
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-2 pb-5">
        <div
          className="  h-28 md:h-40  flex justify-center items-center outline-dashed outline-[#BABABA] bg-[#F5FAFF] p-1 rounded-lg cursor-pointer "
          onClick={() => document.getElementById("input-csv")?.click()}
        >
          <input
            className=" hidden "
            type="file"
            accept=".xlsx, .xlsm, .xlnb, .xltx, .csv"
            id="input-csv"
            onChange={handleCSV}
          />
          {fileName ? (
          <div className=" font-bold text-blue-100 text-lg"> {fileName} </div>
          ) : (
            <div className="flex flex-col justify-center items-center text-lg gap-3 text-gray-400">
              <AiOutlineImport size={30}/>
              <div className=" flex flex-col justify-center items-center">
              <div className=" font-semibold text-blue-100 text-base">Select a CSV file to import</div>
              <h1 className=" font-normal text-sm">or drag and drop it here</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
