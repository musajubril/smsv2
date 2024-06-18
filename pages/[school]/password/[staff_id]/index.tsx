import Button from "@/components/shared/button/Button";
import Input from "@/components/shared/input/Input";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getRequest, getSchool, login, postRequest } from "@/api/apiCall";
import { CHANGE_PASSWORD, GETSCHOOL, LOGIN, LOGIN_URL, TEACHER } from "@/api/apiUrl";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { queryKeys } from "@/api/queryKey";
import { jwtDecode } from "jwt-decode";
import PasswordInput from "@/components/shared/input/Passwordinput";

export default function Login({otp}) {
  const router = useRouter();
  const params: { school: string; staff_id: string } = useParams();
  const school = params?.school;
  const staff_id = params?.staff_id;


  const token: string =
    typeof window !== "undefined" && localStorage.getItem("easysch_token");

  const uid: any =
    typeof window !== "undefined" && localStorage.getItem("schoolId");


  const { data } = useQuery({
    queryKey: [queryKeys.getSchool, school],
    queryFn: async () => await getSchool({ url: GETSCHOOL(school) }),
    retry: 2,
    enabled: !!school,
  });
  console.log(data)


  
  

  const staffData: {uid: string, full_name: string} = typeof window !== "undefined" && jwtDecode(staff_id)



  const mutation = useMutation({
    mutationFn: async (newLogin: any) =>
      await postRequest({ url: CHANGE_PASSWORD(uid, staffData?.uid), data: newLogin }),

    onSuccess(data) {
      router.push(`/${school}/login/`);
    },
  });

  const [state, setState] = useState({
    password: "",
    confirm_password: "",
  });
  

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password !== state.confirm_password) {
      setErrorMessage('Passwords do not match');
    } else {
      mutation.mutate({
        password: state.password,
        confirm_password: state.confirm_password,
      });
    }
  };

  return (
    <div>
      <div className="h-screen flex flex-col sm:grid grid-cols-2 gap-3 md:gap-6 bg-gray-50 lg:bg-white-100 ">
        <div className="col-span-1">
          <div className="transition-all transform hover:scale-105 hover:-translate-y-3 h-full flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img src={'https://res.cloudinary.com/jewbreel1/image/upload/v1625737196/jewbreel/sms/otp_mqfisv.svg'} alt="" />
            </div>
          </div>
        </div>

        <div className="px-5 lg:py-8 bg-gray-50 col-span-1 flex flex-col lg:justify-center">
          <div className="flex flex-col gap-6 h-2/3">
              <h1 className=" text-center text-xl md:text-3xl font-semibold  mt-5">{staffData?.full_name}</h1>
              <h2 className=" text-lg md:text-2xl font-extrabold text-center text-gray-900">Please Change Your Password</h2>
            <form onSubmit={handleSubmit} className="">
              <div className="flex flex-col gap-6 px-5 md:px-10">
                {
                errorMessage && 
                <div className="text-red-500 text-center">
                    {errorMessage}
                    </div>}
                <div>
                  <h1 className="text-sm md:text-base font-medium">Enter Password</h1>
                  <PasswordInput
                    size="large"
                    disabled={false}
                    error={null}
                    success={null}
                    change={handleChange}
                    name="password"
                    text={"*********"}
                    value={state.password}
                    className={""}
                  />
                </div>
                <div>
                  <h1 className="text-sm md:text-base font-medium">Confirm Password</h1>
                  <PasswordInput
                    size="large"
                    disabled={false}
                    error={null}
                    success={null}
                    change={handleChange}
                    name="confirm_password"
                    text={"*********"}
                    value={state.confirm_password}
                    className={""}
                  />
                </div>
                <div className="">
                  <Button
                    size="base"
                    intent="primary"
                    text={"change"}
                    disabled={false}
                    onClick={undefined}
                    className={""}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
