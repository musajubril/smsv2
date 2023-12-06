import Button from "@/components/shared/button/Button";
import Input from "@/components/shared/input/Input";
import Link from "next/link";
import React from "react";

export default function login() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  })
  const handleChange=(e)=>{
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(state)
  }
  return (
    <div>
      <div className=" px-5 py-7 lg:grid grid-cols-2 gap-6">
        <div className=" py-10 col-span-1 ">
          <div className="text-xl font-bold">SMS</div>
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
              />
              <Input
                size="large"
                disabled={false}
                error={null}
                success={null}
                change={handleChange}
                name="password"
                text={"Password"}
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
        <div className="hidden lg:block py-4 col-span-1">
          <div className="bg-[#000842] h-full  rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
