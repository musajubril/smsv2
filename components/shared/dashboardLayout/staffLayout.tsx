import Layout from "@/components/shared/dashboardLayout/Layout";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Modal from "@/components/shared/reusablemodal/Modal";
import Button from "@/components/shared/button/Button";
import ProfilePage from "@/components/staff/profilePage";
import ClassSettings from "@/components/staff/classSettings";
import CourseSettings from "@/components/staff/courseSettings";
import { IoArrowBack } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";

export default function staffLayout() {
  const { staff } = useRouter().query;
  const pages = [
    "Profile",
    "Class Settings",
    "Course Settings",
    "Attendance Settings",
    "Result Settings",
    "Archive",
  ];
  const [page, setPage] = useState("Profile");
  const [open, setOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleArchiveClick = () => {
    setOpen(true);
  };

  const action = () => {
    setOpen(false);
  };

  const handleOpen = (item) => {
    setPage(item);
    if (window.innerWidth <= 768) {
      setSidebarVisible(false);
    }
  };

  const handleBackClick = () => {
    setSidebarVisible(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarVisible(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderPageContent = () => {
    switch (page) {
      case "Profile":
        return <ProfilePage />;
      case "Class Settings":
        return <ClassSettings />;
      case "Course Settings":
        return <CourseSettings />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="md:flex w-full">
        {sidebarVisible && (
          <div className="flex flex-col gap-5 pt-5 w-full md:w-auto">
            {pages.map((item) => (
              <div
                key={item}
                className={`py-2 px-3 flex md:w-[200px] rounded-lg gap-4 cursor-pointer text-xs font-semibold hover:bg-blue-600 hover:text-blue-100 w-full ${
                  page === item
                    ? "bg-blue-600 text-blue-100"
                    : item === "Archive"
                    ? "text-red-600 hover:bg-red-600 hover:text-white"
                    : ""
                }`}
                onClick={() =>
                  item === "Archive" ? handleArchiveClick() : handleOpen(item)
                }
              >
                <div className="md:text-xs text-lg w-full font-medium">
                  {item}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={`flex-grow pl-2 overflow-y-scroll scrollbar-hidden h-[calc(100vh-100px)] ${sidebarVisible ? 'hidden md:block' : 'block'}`}>
          {!sidebarVisible && (
            <div className="flex items-center p-2 cursor-pointer pb-2" onClick={handleBackClick}>
              <MdArrowBackIos className="text-lg mr-2" />
              <span className="text-lg">Back</span>
            </div>
          )}
          {renderPageContent()}
        </div>
      </div>
      <Modal action={action} open={open}>
        <div className="max-w-xs">
          <div className="flex flex-col gap-6 p-5">
            <div className="font-semibold text-base text-red-500 capitalize">
              Are you sure you want to archive this staff?
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                intent="primary"
                size="small"
                text="Yes"
                disabled={false}
                onClick={undefined}
                className="bg-red-500"
              />
              <Button
                intent="secondary"
                size="small"
                text="No"
                disabled={false}
                onClick={() => setOpen(false)}
                className="border-red-500 text-red-500"
              />
            </div>
          </div>
        </div>
      </Modal>
    </Layout>
  );
}
