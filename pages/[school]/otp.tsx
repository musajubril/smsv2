import Button from "@/components/shared/button/Button";
import Input from "@/components/shared/input/Input";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSchool, login, postRequest } from "@/api/apiCall";
import { GETSCHOOL, LOGIN_URL, VERIFY_OTP } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as jwt from "jsonwebtoken"


export default function OTP() {
  const router = useRouter();
  const params: { school: string} = useParams()
  console.log(params, router.query);
  const school = params?.school;



  const uid: any =
  typeof window !== "undefined" && localStorage.getItem("schoolId");
 
  const [state, setState] = useState({
    phone_number: "",
    otp: "",
  });
  
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      
    });
  };



  const mutation = useMutation({
    mutationFn: async (newOTP: any) =>
      await postRequest({ url: VERIFY_OTP(uid), data: newOTP }),

    onSuccess:  (data) =>  {
      const payload = {full_name: data?.data?.full_name,
        uid: data?.data?.uid,
        image: data?.data?.image}
        console.log(payload)
        
        if (payload) {
          const school_token =  jwt.sign(
            payload,
            "password"
            )
            if(school_token){
          router.push(`/${school}/password/${school_token}`)
            }
        }
    },
    
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    mutation.mutate({
      phone_number: state.phone_number,
      otp: state.otp,
      // school_id: schoolData?.uid,
    });
  };

  
 
  return (
    <div >
      <div className="h-screen  w-full flex flex-col  md:grid grid-cols-2 gap-6 bg-gray-50 lg:bg-white-100 ">
        <div className="p-5 col-span-1 ">
          <div className=" transition-all transform hover:scale-105 hover:-translate-y-3 h-full flex items-center justify-center">
            <div className=" flex items-center justify-center ">
              <img src={'https://res.cloudinary.com/jewbreel1/image/upload/v1625737196/jewbreel/sms/otp_mqfisv.svg'} alt="" />
            </div>
          </div>
        </div>

        <div className=" px-10 lg:py-8  bg-gray-50 col-span-1 flex flex-col lg:justify-center">
          <div className=" flex flex-col gap-6">
            <div className="flex flex-col gap-2 justify-center  ">
             
              <h2 className="mt-6 text-xl md:text-3xl font-extrabold text-center text-gray-900">Verify Your Account</h2>
        <h2 className=" text-base md:text-xl text-center text-gray-900">Or <span className="text-sm text-blue-600"><Link href={`/${school}/login/`}>Sign In To Your Account</Link></span></h2>
      
            </div>
            <form onSubmit={handleSubmit} className=" ">
              <div className="flex flex-col gap-6  md:px-10 ">
                <div>
                  <h1 className=" text-sm md:text-base font-medium">Enter Phone Number</h1>
                <Input
                  size="large"
                  disabled={false}
                  error={null}
                  success={null}
                  change={handleChange}
                  name="phone_number"
                  text={"Enter Phone Number"}
                  value={undefined} className={""}  />
                  </div>
                  <div>
                    <h1 className=" text-sm md:text-base font-medium"> Enter OTP</h1>
                <Input
                  size="large"
                  disabled={false}
                  error={null}
                  success={null}
                  change={handleChange}
                  name="otp"
                  text={"Enter OTP"}
                  value={undefined} className={""} />
                  </div>
                <div className="">
                  <Button
                    size="base"
                    intent="primary"
                    text={"Verify"}
                    disabled={false}
                    onClick={undefined} className={""}                  />
                </div>

           
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
