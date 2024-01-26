import { getRequest, getSchool } from "@/api/apiCall";
import { GETSCHOOL, STUDENT, STUDENTS } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import Layout from "@/components/shared/dashboardLayout/Layout";
import { useQuery } from "@tanstack/react-query";
import { useParams} from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiPencilLine } from "react-icons/pi";

export default function studentPage() {

  
  const router = useRouter();
  const params: { school: string, student_id: string } = useParams();
 
  const school = params?.school;
  const student_id = params?.student_id;

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

  const { data:getstudent } = useQuery({
    queryKey: [queryKeys.getstudent,schoolData, student_id],
    queryFn: async () => await getRequest({ url: STUDENT(schoolData?.uid, student_id)}),
  });
  
  const [student, setStudent] = useState<any>({});

  
  useEffect(() => {
    if (getstudent?.data) {
      setStudent(getstudent.data);
    }
  }, [getstudent]);
 
  return (
    <Layout>
{

    <div className=" flex flex-col p-6">
      <div className=" flex justify-between items-center pb-5">
        <div className=" flex items-center gap-3 cursor-pointer">
          <div className="border border-[#E4E7EC] bg-white-100 py-1 px-2 rounded-lg">
            <FaArrowLeftLong />
          </div>
          <div className=" text-gray-400">Go Back</div>
          <div className=" text-gray-400">Dashboard /</div>
          <div className=" text-gray-400">Students /</div>
          <div>{student.full_name}</div>
        </div>
      </div>

      <div className=" grid grid-cols-3 gap-4 ">
        <div className=" col-span-1 border border-[#EDEDED] rounded-lg p-4 flex flex-col gap-3 shadow-lg h-fit">
          <div className=" flex justify-end pr-4">
            <div className="flex border items-center gap-2 px-2 py-1 border-teal-200 rounded-lg">
              <h1>Edit</h1>
              <PiPencilLine />
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center">
            {/* <div className=" h-20 w-20 bg-blue-500 rounded-full flex justify-center items-center cursor-pointer">
              <IoPersonAdd />
            </div> */}
             <div className=" cursor-pointer">
            <img src="/Avatar.png" alt="" className="cursor-pointer pb-3" />
          </div>
            <div className=" text-center">
              <h1 className=" text-base  font-semibold">{student.full_name}</h1>
              <h1 className=" text-sm  font-normal text-[#878787]">{student.id}</h1>
            </div>
          </div>

          <div className=" grid grid-cols-2 pl-4">
            <div className=" flex flex-col justify-center ">
              <h1 className=" text-sm  font-normal text-[#878787]">Gender</h1>
              <h1 className=" text-base  font-semibold">{student.gender}</h1>
            </div>
            <div className=" flex flex-col justify-center ">
              <h1 className=" text-sm  font-normal text-[#878787]">
                Date of Birth
              </h1>
              <h1 className=" text-base  font-semibold">{student.date_of_birth}</h1>
            </div>
          </div>
          <div className="p-4">
            <h1 className=" text-sm  font-normal text-[#878787]">
              State Of Origin
            </h1>
            <h1 className=" text-base  font-semibold">{student.state_of_origin}</h1>
          </div>
        </div>

        <div className=" col-span-2 flex flex-col gap-5 px-4">
          <div className="flex flex-col gap-4 p-3 border border-[#EDEDED] rounded-lg ">
            <div className=" text-lg pl-4 font-normal text-[#878787]">Academic Information</div>
            <div className=" grid grid-cols-2 pl-4">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">Admission Status</h1>
                <h1 className=" text-base  font-semibold">Null</h1>
              </div>
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">
                  Class
                </h1>
                <h1 className=" text-base  font-semibold"> {student.current_class ? student.current_class.name : ''}</h1>
              </div>
            </div>
            <div className=" grid grid-cols-2 pl-4">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">Enrollment Date</h1>
                <h1 className=" text-base  font-semibold">Null</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-3 gap-4 border border-[#EDEDED] rounded-lg ">
          <div className=" text-lg pl-4 font-semibold text-[#878787]">Contact Information</div>
            <div className=" grid grid-cols-2 pl-4">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">Phone Number</h1>
                <h1 className=" text-base  font-semibold">{student.phone_number}</h1>
              </div>
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">
                  Email Address
                </h1>
                <h1 className=" text-base  font-semibold">{student.email}</h1>
              </div>
            </div>
            <div className=" grid grid-cols-2 pl-4">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">Home Address</h1>
                <h1 className=" text-base  font-semibold">{student.address}</h1>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col p-3 gap-4 border border-[#EDEDED] rounded-lg ">
          <div className=" text-lg pl-4 font-semibold text-[#878787]">Parent Information</div>
            <div className=" grid grid-cols-2 pl-4">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">Parent/Guardian Name</h1>
                <h1 className=" text-base  font-semibold">{student.guardian_full_name}</h1>
              </div>
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">
                Parent/Guardian Phone Number
                </h1>
                <h1 className=" text-base  font-semibold">{student.phone_number2}</h1>
              </div>
            </div>
            <div className=" grid grid-cols-2 pl-4">
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">Parent/Guardian Address</h1>
                <h1 className=" text-base  font-semibold">{student.address}</h1>
              </div>
              <div className=" flex flex-col justify-center ">
                <h1 className=" text-sm  font-semibold text-[#878787]">
                Parent/Guardian Email address
                </h1>
                <h1 className=" text-base  font-semibold">Null</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
    </Layout>
  //  )) 
   
  );
}
