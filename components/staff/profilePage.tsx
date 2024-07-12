import { getRequest, getSchool, patchRequest } from "@/api/apiCall";
import { GETSCHOOL, TEACHER } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import Button from "@/components/shared/button/Button";
import Layout from "@/components/shared/dashboardLayout/Layout";
import StaffLayout from "@/components/shared/dashboardLayout/staffLayout";
import Imagelogic from "@/components/shared/imagelogic";
import Input from "@/components/shared/input/Input";
import Select from "@/components/shared/select/Select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import StaffDoughnut from "../shared/Charts/staff_doughnut";

export default function Profilepage() {
    const Gender = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
      ];
    
      const [state, setState] = useState();
      const [genderState, setGenderState] = useState();
    
    
      const router = useRouter();
      const params: { school: string; staff_id: string } = useParams();
    
      const school = params?.school;
      const staff_id = params?.staff_id;
    
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
    
      const { data: getstaff } = useQuery({
        queryKey: [queryKeys.getstaff, schoolData, staff_id],
        queryFn: async () =>
          await getRequest({ url: TEACHER(schoolData?.uid, staff_id) }),
      });
    
      const [staff, setStaff] = useState<any>({});
      useEffect(() => {
        if (getstaff?.data) {
          setStaff(getstaff.data);
        }
      }, [getstaff]);
    
      const mutation = useMutation({
        mutationFn: async (updatestaff: any) =>
          await patchRequest({
            url: TEACHER(schoolData?.uid, staff_id),
            data: updatestaff,
          }),
        onSuccess: (data, variables) => {
          setStaff((prev) => ({ ...prev, ...variables }));
          toast.success(data?.message);
        },
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStaff((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleBlur = (e) => {
        const { name, value } = e.target;
        mutation.mutate({ [name]: value });
      };
    
    
      useEffect(() => {
        if (genderState) {
          setStaff((prev) => ({ ...prev, gender: genderState }));
          mutation.mutate({ gender: genderState });
        }
      }, [genderState]);
    
 
    
      
  return (
      <div className=" justify-center flex ">
        {
          <div className=" flex flex-col w-full px-4 gap-5 max-w-3xl ">
            <div className=" md:grid grid-cols-3 items-center text-center gap-5  w-full ">
              <div>
                <img
                  src="/bestcollegelogo.png"
                  alt=""
                  className=" hidden md:flex w-20 h-20"
                />
              </div>
              <div className=" font-medium text-base md:text-xl">
                {staff.full_name}
              </div>
              <div className=" hidden md:flex justify-end">
                <img 
                src={staff.image} 
                alt="" 
                className='h-16 w-16 flex justify-center items-center rounded-full'
                />

              </div>
            </div>
            <div className=" grid md:grid-cols-2 gap-6 pb-3">
              <div>
                <div>Full name</div>
                <div>
                  <Input
                    text={""}
                    name={"full_name"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={staff.full_name}
                    className={" py-3 bg-white-200 pl-3 "}
                    type={""}
                    blur={handleBlur}
                  />
                </div>
              </div>

              <div>
                <div className=" pb-2">Email Address </div>
                <div>
                  <input
                    id="Email Adress"
                    value={staff.email}
                    name="email"
                    type="email"
                    className=" p-3 bg-white-300 rounded-md font-medium h-full w-full border border-gray-500 text-gray-500 outline-none"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Phone Number</div>
                <div>
                  <input
                    id="Phone Number"
                    value={staff.phone_number}
                    name="phone_number"
                    type="number"
                    className=" p-3 bg-white-300 rounded-md font-medium h-full w-full border border-gray-500 text-gray-500 outline-none"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Gender</div>
                <Select
                  options={Gender}
                  placeholder={staff.gender}
                  change={undefined}
                  text="gender"
                  state={genderState}
                  setState={setGenderState}
                  name="gender"
                />
              </div>

              <div>
                <div className=" pb-2">Date Of Birth</div>
                <div>
                  <input
                    id="date_of_birth"
                    value={staff.date_of_birth}
                    name="date_of_birth"
                    type="date"
                    autoComplete="date_of_birth"
                    className=" p-3 bg-white-300 rounded-md font-medium h-full w-full border border-gray-500 text-gray-500 outline-none "
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2"> Staff Qualification</div>
                <div>
                  <Input
                    text={""}
                    name={"qualification"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={staff.Qualification}
                    className={" py-3 bg-white-200 pl-3  "}
                    type={""}
                    blur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2"> Home Address</div>
                <div>
                  <Input
                    text={""}
                    name={"address"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={staff.address}
                    className={" py-3 bg-white-200 pl-3  "}
                    type={""}
                    blur={handleBlur}
                  />
                </div>
              </div>

              <div>
                <div className=" pb-2">Department</div>
                <div>
                  <Input
                    text={""}
                    name={"null"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={null}
                    className={" py-3 bg-white-200 pl-3  "}
                    type={""}
                    blur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Classes</div>
                <div>
                  <Input
                    text={""}
                    name={"null"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={null}
                    className={" py-3 bg-white-200 pl-3 "}
                    type={""}
                    blur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Qualification</div>
                <div>
                  <Input
                    text={""}
                    name={"null"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={null}
                    className={" py-3 bg-white-200 pl-3 "}
                    type={"text"}
                    blur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Subjects</div>
                <div>
                  <Input
                    text={""}
                    name={"null"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={null}
                    className={" py-3 bg-white-200  pl-3"}
                    type={"text"}
                    blur={handleBlur}
                  />
                </div>
              </div>
              <div>
                <div className=" pb-2">Role</div>
                <div>
                  <Input
                    text={""}
                    name={"null"}
                    error={false}
                    success={false}
                    disabled={false}
                    change={handleInputChange}
                    value={null}
                    className={" py-3 bg-white-200  pl-3 "}
                    type={""}
                    blur={handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
        }
      </div>
  );
}
