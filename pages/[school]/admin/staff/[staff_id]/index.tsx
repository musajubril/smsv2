import { getRequest, getSchool } from "@/api/apiCall";
import { GETSCHOOL, TEACHER, TEACHERS } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import Layout from "@/components/shared/dashboardLayout/Layout";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiPencilLine } from "react-icons/pi";

export default function staffPage() {

  const router = useRouter();
  const params: { school: string, staff_id: string } = useParams();
 
  const school = params?.school;
  const staff_id = params?.staff_id

  const { data } = useQuery({
    queryKey: [queryKeys.getSchool, school],
    queryFn: async () => await getSchool({ url: GETSCHOOL(school) }),
    retry: 2,
    enabled: !!school,
  });
  const [schoolData, setSchoolData] = useState(data?.data);
  useEffect(() => {
    setSchoolData(data?.data);
  }, [data?.data]);

  const { data:getstaff } = useQuery({
    queryKey: [queryKeys.getstaff,schoolData, staff_id],
    queryFn: async () => await getRequest({ url: TEACHER(schoolData?.uid, staff_id)}),
  });
  console.log (getstaff)
  const [staff, setStaff] = useState<any>({});
  
  useEffect(() => {
    if (getstaff?.data) {
      setStaff(getstaff.data);
    }
  }, [getstaff]);
 
  return (
    <Layout>
      <div className=" flex flex-col p-6">
        <div className=" flex justify-between items-center pb-5">
          <div className=" flex items-center gap-3 cursor-pointer">
          <div
                onClick={router.back}
                className=" flex items-center gap-3 cursor-pointer"
              >
                <div className="border py-1 px-2 border-[#E4E7EC] bg-white-100 rounded-lg">
                  <FaArrowLeftLong />
                </div>
                <div>Go Back</div>
              </div>
              <Link href={`/${school}/`} className=" text-gray-400 hover:text-black">Dashboard /</Link>
            <div className=" text-gray-400 hover:text-black" onClick={router.back}>Staff /</div>
            <div>Musa Kalamu</div>
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-4  ">
          <div className=" col-span-1 border border-[#EDEDED] rounded-lg p-4 flex flex-col gap-3 shadow-lg  h-fit w-auto">
            <div className=" flex justify-end pr-4">
              <div className="flex border items-center gap-2 px-2 py-1 border-teal-200 rounded-lg">
                <h1>Edit</h1>
                <PiPencilLine />
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center">
              <div className=" cursor-pointer">
                <img src="/Avatar.png" alt="" className="cursor-pointer pb-3" />
              </div>
              <div className=" text-center">
                <h1 className=" text-base  font-semibold">{staff.full_name}</h1>
                <h1 className=" text-sm  font-normal text-[#878787]">
                  ID:{staff.id}
                </h1>
              </div>
            </div>

            <div className=" grid grid-cols-2 pl-6">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-normal text-[#878787]">Gender</h1>
                <h1 className=" text-base  font-semibold">{staff.gender}</h1>
              </div>
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-normal text-[#878787]">
                  Qualification
                </h1>
                <h1 className=" text-base  font-semibold">{staff.Qualification}</h1>
              </div>
            </div>
          </div>

          <div className=" col-span-2 flex flex-col gap-5 px-4">
            <div className="flex flex-col gap-4 p-3 border border-[#EDEDED] rounded-lg ">
              <div className=" text-lg pl-4 font-normal text-[#878787]">
                Contact Information
              </div>
              <div className=" grid grid-cols-2 pl-4">
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Phone Number
                  </h1>
                  <h1 className=" text-base  font-semibold">{staff.phone_number}</h1>
                </div>
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Email Address
                  </h1>
                  <h1 className=" text-base  font-semibold">
                    {staff.email}
                  </h1>
                </div>
              </div>
              <div className=" grid grid-cols-2 pl-4">
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Home address
                  </h1>
                  <h1 className=" text-base  font-semibold">
                   {staff.address}
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-3 gap-4 border border-[#EDEDED] rounded-lg ">
              <div className=" text-lg pl-4 font-semibold text-[#878787]">
                Role Information
              </div>
              <div className=" grid grid-cols-2 pl-4">
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Deparment
                  </h1>
                  <h1 className=" text-base  font-semibold">Null</h1>
                </div>
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Class[es]
                  </h1>
                  <h1 className=" text-base  font-semibold">
                    Null
                  </h1>
                </div>
              </div>
              <div className=" grid grid-cols-2 pl-4">
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Qualification
                  </h1>
                  <h1 className=" text-base  font-semibold">Null</h1>
                </div>
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Subjects
                  </h1>
                  <h1 className=" text-base  font-semibold">
                    Null
                  </h1>
                </div>
              </div>
              <div className=" grid grid-cols-2 pl-4">
                <div className=" flex flex-col justify-center ">
                  <h1 className=" text-sm  font-semibold text-[#878787]">
                    Role
                  </h1>
                  <h1 className=" text-base  font-semibold">Null</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
  );
}
