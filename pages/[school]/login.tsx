import Button from "@/components/shared/button/Button";
import Input from "@/components/shared/input/Input";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getRequest, getSchool, login } from "@/api/apiCall";
import { GETSCHOOL, LOGIN, LOGIN_URL } from "@/api/apiUrl";
import router, { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { queryKeys } from "@/api/queryKey";
import { jwtDecode } from "jwt-decode";

export default function Login() {
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
    email: "",
    password: "",
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
    onSuccess: (data: { access: string; refresh: string }) => {
      console.log(data);
      const loginToken = data.access;
      localStorage.setItem("easysch_token", data.access);
      localStorage.setItem("schoolSlug", schoolData?.slug);
      localStorage.setItem("schoolId", schoolData?.uid);
      localStorage.setItem("schoolName", schoolData?.name);
      localStorage.setItem("schoolLogo", schoolData?.logo);

      if (loginToken) {
        const decodedToken: { groups: Array<string> } = jwtDecode(loginToken);
        console.log(decodedToken);

        if (Array.isArray(decodedToken.groups)) {
          if (decodedToken.groups.includes("Teacher")) {
            router.push(`/${school}/staffs/`);
            console.log("teacher");
          } else if (decodedToken.groups.includes("Owner")) {
            router.push(`/${school}/admin/`);
            console.log("owner");
          }
        }
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    mutation.mutate({
      username: state.email,
      password: state.password,
      // school_id: schoolData?.uid,
    });
  };
  return (
    <div className="grid max-w-6xl max-h-screen grid-cols-1 gap-10 mx-auto sm:grid-cols-2">
        <div
          className="hidden col-span-1 sm:my-auto sm:mx-auto sm:block"
        >
          <img
            src={schoolData?.logo}
            alt=""
            className="transition-all transform hover:scale-105 hover:-translate-y-3 h-52 w-52"
          />
        </div>
        <div className="flex flex-col justify-center min-h-screen col-span-1 px-4 sm:py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="w-auto h-auto mx-auto sm:hidden"
              src={schoolData?.logo}
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              {schoolData?.name}
            </h2>
            <h2 className="mt-1 text-3xl font-extrabold text-center text-gray-900">
              Sign in
            </h2>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="px-4 py-8 sm:rounded-lg sm:px-5">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Mobile Number
                  </label>
                  <div className="mt-1">
                    <Input size="large" text={"Mobile Number"} name={"email"} error={false} success={false} disabled={false} change={handleChange} value={undefined} className={"block w-full px-3 py-2 placeholder-gray-400 rounded-md shadow-sm appearance-none sm:text-sm"} type={"text"} />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                  <Input size="large" type='password' text={"Password"} name={"password"} error={false} success={false} disabled={false} change={handleChange} value={undefined} className={"block w-full px-3 py-2 placeholder-gray-400 rounded-md shadow-sm appearance-none sm:text-sm"} />
                  </div>
                </div>

                <div className="text-left">
                  <Link href={`/${school}/otp`} className="text-blue-200">
                      Verify New Account
                  </Link>
                </div>

                <div>
                <Button
                  size="base"
                  intent="primary"
                  text={"Log in"}
                  disabled={false}
                  onClick={undefined} className={""}                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
