import Button from "@/components/shared/button/Button";
import Input from "@/components/shared/input/Input";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getSchool, login } from "@/api/apiCall";
import { GETSCHOOL, LOGIN_URL } from "@/api/apiUrl";
import router, { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { queryKeys } from "@/api/queryKey";
import { jwtDecode } from "jwt-decode";

export default function resultLogin() {
  const router = useRouter();
  const params: { school: string } = useParams();
  console.log(params, router.query);
  const school = params?.school;

  const token: string =
    typeof window !== "undefined" && localStorage.getItem("easysch_token");
  console.log(token);

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
  // school logo

  const [state, setState] = useState({
    surname: "",
    pin: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    // console.log(state);
  };

  const mutation = useMutation({
    mutationFn: async (newLogin: any) =>
      await login({ url: LOGIN_URL(schoolData?.uid), data: newLogin }),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    mutation.mutate({
      surname: state.surname,
      pin: state.pin,
    });
  };
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="  w-2/3 px-5 flex flex-col justify-center  gap-6 ">
        {/* image  */}
        <div className="">
          <div className=" flex items-center justify-center">
            <div className=" h-1/2 w-1/2  flex items-center justify-center">
              <img
                src={schoolData?.logo}
                alt=""
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className=" px-5  col-span-1 flex flex-col justify-center  ">
          <div className="text-3xl font flex justify-center font-bold">
            {schoolData?.name}
          </div>
          <form onSubmit={handleSubmit} className=" p-5 ">
            <div className=" pb-4">
              <div className="flex justify-center  ">
                <h1 className="  text-3xl font-semibold font-serif text-center justify-start">
                  Result Checker
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Input
                size="large"
                disabled={false}
                error={null}
                success={null}
                change={handleChange}
                name="surname"
                text={"Enter Student Surname"}
                value={undefined}
              />
              <Input
                size="large"
                disabled={false}
                error={null}
                success={null}
                change={handleChange}
                name="pin"
                text={"Enter Scratch Card Pin"}
                value={undefined}
              />
            </div>
            <div className=" py-5">
              <div className="">
                <Button
                  size="base"
                  intent="primary"
                  text={"Log in"}
                  disabled={false}
                  onClick={undefined}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
