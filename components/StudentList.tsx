import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowDropleft } from "react-icons/io";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useQuery } from "@tanstack/react-query";
import { STUDENTS } from '@/api/apiUrl';
import { getRequest } from '@/api/apiCall';
import { queryKeys } from '@/api/queryKey';
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "./shared/Pagination";
import Table from "./shared/reusableTable/Table";

export default function StudentList({students}) {
  
  
  const router = useRouter();
  let school;
  if (typeof window !== 'undefined') {
    school = localStorage.getItem('schoolSlug');
  }

  const mappedStudents = students?.map((std) => {
    return {
      "Name": std.full_name,
      "Class": std.current_class.name,
      "Gender": std.gender,
      "Date of birth": std.date_of_birth,
      // "Religion": std.religion,
      "State": std.state_of_origin,
      "Email": std.email,
    }
  })
   const mappedImages = students?.map((std) => {
    return {
      "Image": std.image,
    }
  })
  
  const mappedIds = students?.map((std) => {
    return {
      "ID": std.id,
    }
  })
  
  return (
    <div>
      <div >
        <div className=" my-6 rounded-lg shadow-lg">
          <div className=" grid grid-cols-6 text-sm bg-[#F5FAFF] p-3  rounded-t-lg">
            <div className=" font-semibold text-xs flex gap-2 col-span-2">
              <input type="checkbox" name="" id="" className=" h-5 w-5" />
              Name
            </div>
            <div className=" font-semibold text-xs col-span-1">Class</div>
            <div className=" font-semibold text-xs col-span-1">Gender</div>
            <div className=" font-semibold text-xs col-span-1">
              Enrollment status
            </div>
            <div className=" font-semibold text-xs col-span-1 flex justify-center">
              Action
            </div>
          </div>
          {/* <div className="flex flex-col gap-3 py-2 px-3">
            {
              students &&
                students.map((pupil) => (
                  <div
                    key={pupil.id}
                    className=" grid grid-cols-6 font-semibold text-sm "
                  >
                    <div className=" col-span-2 flex items-center gap-3">
                      <div className="">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className=" h-5 w-5"
                        />
                      </div>
                      <div className=" border h-8 w-8 rounded-full overflow-hidden">
                        <img
                          src={pupil.image}
                          alt=""
                          className=" object-cover "
                        />
                      </div>
                      <Link href={`/${school}/student/${pupil.id}/`}>
                       <div className="">
                       <p>{pupil.full_name}</p>  
                      <p className=" font-normal text-xs text-[#475367]">ID:{pupil.id}</p>
                      </div>
                      </Link>
                    </div>
                    <div className="col-span-1">{pupil.current_class.name}</div>
                    <div className="col-span-1 text-gray-400">{pupil.gender}</div>
                    <div
                      className={`col-span-1 w-fit rounded-lg h-fit px-3 ${
                        pupil.enrollment_status === "Pending"
                          ? "bg-[#FEF6E7] text-[#865503]"
                          : "bg-[#E7F6EC] text-[#036B26]"
                      }`}
                    >
                      Admitted
                    </div>
                    <div className=" cursor-pointer flex justify-center">
                      <HiDotsVertical />
                    </div>
                  </div>
                ))
            }
          </div> */}
        </div>

      {/* <Pagination
          paginate={paginate}
        ></Pagination> */}
      
   
      <Table students={mappedStudents} imageUrls={mappedImages} IDs={mappedIds} hasCheckBox={true} hasImage={true}></Table>
      </div>
    </div>
  );
}
