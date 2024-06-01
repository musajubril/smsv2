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
    onSuccess:(data: {access: string, refresh: string})=> {
      console.log(data)
      const loginToken = data.access
      localStorage.setItem('easysch_token', data.access)
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
    <div>
      <div className="h-screen px-5 lg:grid grid-cols-2 gap-6 ">
        {/* image  */}
        <div className="hidden  lg:block  col-span-1">
          <div className="  h-full flex items-center justify-center">
            <div className=" flex items-center justify-center ">
              <img src={schoolData?.logo} alt="" />
            </div>
          </div>
        </div>

        <div className=" px-5 pt-5  col-span-1 flex flex-col justify-center  ">
          <div className="text-3xl font flex justify-center font-bold">
            {schoolData?.name}
          </div>
          <form onSubmit={handleSubmit} className="p-8 ">
            <div className=" pb-3">
              <div className="flex justify-start  ">
                <h1 className="  text-2xl font-bold text-center justify-start">
                  Sign In
                </h1>
              </div>
              <div className=" flex py-4 text-start ">
                <p>
                  If you don't have an account, you can
                  <Link
                    href="register"
                    className="pl-1 underline text-[#1466B8]"
                  >
                    Register Here
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Input
                size="large"
                disabled={false}
                error={null}
                success={null}
                change={handleChange}
                name="email"
                text={"Email address"}
                value={undefined}
              />
              <Input
                size="large"
                disabled={false}
                error={null}
                success={null}
                change={handleChange}
                name="password"
                text={"Password"}
                value={undefined}
              />
            </div>
            <div className="">
              <div className=" flex justify-between text-sm my-5">
                <div className="flex items-center justify-start my-4">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="w-5 h-4 border-black rounded "
                  />
                  <label htmlFor="myCheckbox" className="ml-2">
                    {" "}
                    Remember Me
                  </label>
                </div>
                <button>Forgot Password?</button>
              </div>

              <div className="">
                <Button
                  size="base"
                  intent="primary"
                  text={"Log in"}
                  disabled={false}
                  onClick={undefined}
                />
              </div>

              <div className="text-center pt-9">OR Continue with</div>
              <div className="flex justify-center pt-3 ">
                <a href="#" className="p-6 ">
                  <img src="/Twitter.jpg" alt="Twitter icon" />
                </a>
                <a href="#" className="p-6 ">
                  <img src="/Google.png" alt="Google icon" />
                </a>
                <a href="#" className="p-6 ">
                  <img src="/Facebook.png" alt="Facebook icon" />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
