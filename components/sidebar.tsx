import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiHome5Line } from "react-icons/ri";
import { PiGraduationCapThin } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi";
import { MdMenuBook } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { GiFamilyHouse } from "react-icons/gi";

export default function Sidebar({
  logout,
  slug,
}: {
  logout: any;
  slug: string;
}) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCBTMenuOpen, setIsCBTMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = window.localStorage.getItem("schoolSlug");
      if (token) {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const toggleCBTMenu = () => {
    setIsCBTMenuOpen(!isCBTMenuOpen);
  };

  const nav = [
    {
      icon: <RiHome5Line />,
      name: "Home",
      path: `/${isAuthenticated ? router.query.school : slug}/admin`,
    },

    {
      icon: <PiGraduationCapThin />,
      name: "Students",
      path: `/${isAuthenticated ? router.query.school : slug}/admin/students`,
    },
    {
      icon: <HiOutlineUsers />,
      name: "Staffs",
      path: `/${isAuthenticated ? router.query.school : slug}/admin/staffs`,
    },
    {
      icon: <MdMenuBook />,
      name: "Subject",
      path: `/${isAuthenticated ? router.query.school : slug}/admin/Subject`,
    },
    // {
    //   icon: <MdMenuBook />,
    //   name: "Computer Based Test",
    //   path: `/${isAuthenticated ? router.query.school : slug}/cbt`,
    //   iconClosed: <IoChevronDown />,
    //   iconOpened: <IoIosArrowUp />,
    //   subNav: [
    //     {
    //       name: "Classes",
    //       path: `/${isAuthenticated ? router.query.school : slug}/cbt/classes`,
    //     },
    //     {
    //       name: "Question Bank",
    //       path: `/${isAuthenticated ? router.query.school : slug}/cbt/questionBank`,
    //     },
    //   ],
    // },
    {
      icon: <GiFamilyHouse />,
      name: "Classes",
      path: `/${isAuthenticated ? router.query.school : slug}/admin/Classes`,
    },
    {
      icon: <IoSettingsOutline />,
      name: "Settings",
      path: `/${isAuthenticated ? router.query.school : slug}/admin/settings`,
    },
  ];

  return (
    <div className="bg-[#0065C2] w-full md:w-1/5 text-[white] p-6 h-screen fixed bg-opacity-70 md:bg-opacity-90 flex flex-col gap-6 ">
      <p className="text-white font-bold text-xl hidden md:block">SMS</p>
      <div className="flex flex-col gap-5 pt-10 md:pt-0">
        {nav.map((item, index) => (
          <div key={index}>
            <Link href={item.path} key={index}>
              <button
                className={`${
                  router.asPath === item.path
                    ? "bg-white-200 text-[#0065C2]"
                    : ""
                } flex gap-2 text-white w-full font-medium items-center hover:bg-white hover:text-[#0065C2] p-3 rounded-lg hover:bg-white-100 `}
              >
                <p className="text-xl">{item.icon}</p>
                <p className="text-xs">{item.name}</p>
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <button
          className="flex gap-2 text-white w-full font-medium items-center hover:bg-white hover:text-[#0065C2] p-3 rounded-lg hover:bg-white-100 "
          onClick={logout}
        >
          <p className="text-2xl">
            <CiLogout />
          </p>
          <p className="text-base ">Log Out</p>
        </button>
      </div>
    </div>
  );
}
