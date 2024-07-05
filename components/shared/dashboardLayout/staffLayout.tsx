import Layout from "@/components/shared/dashboardLayout/Layout";
import { useRouter } from "next/router";
import React from "react";
import Modal from "@/components/shared/reusablemodal/Modal"; // Assuming you have a Modal component
import Button from "@/components/shared/button/Button"; // Assuming you have a Button component

export default function Index({ children }) {
  const { student } = useRouter().query;
  const pages = [
    "Profile",
    "Class Settings",
    "Course Settings",
    "Attendance Settings",
    "Result Settings",
    "Archive",
  ];
  const [page, setPage] = React.useState("Profile");
  const [open, setOpen] = React.useState(false);

  const handleArchiveClick = () => {
    setOpen(true);
  };

  const action = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <div className="md:flex w-full gap-8">
        <div className="hidden md:flex flex-col gap-4 pt-5">
          {pages.map((item) => (
            <div
              key={item}
              className={`py-2 px-3 flex w-[200px] rounded-lg gap-4 cursor-pointer text-xs font-semibold hover:bg-blue-600 hover:text-blue-100 ${
                page === item
                  ? "bg-blue-600 text-blue-100"
                  : item === "Archive"
                  ? "bg-red-600 text-white-100 hover:bg-red-600 hover:text-white-100"
                  : ""
              }`}
              onClick={() =>
                item === "Archive" ? handleArchiveClick() : setPage(item)
              }
            >
              <div className="text-xs font-normal">{item}</div>
            </div>
          ))}
        </div>

        <div className="md:hidden grid px-2 grid-cols-6 text-center gap-2 items-center justify-center w-full">
          {pages.map((item) => (
            <div
              key={item}
              className={`py-2 rounded-lg gap-4 text-center cursor-pointer text-[8px] font-semibold hover:bg-blue-600 hover:text-blue-100 ${
                page === item
                  ? "bg-blue-600 text-blue-100"
                  : item === "Archive"
                  ? "bg-red-600 text-white-100 hover:bg-red-600 hover:text-white-100"
                  : ""
              }`}
              onClick={() =>
                item === "Archive" ? handleArchiveClick() : setPage(item)
              }
            >
              <div className="text-[10px] font-normal">{item}</div>
            </div>
          ))}
        </div>

        <div className="flex-grow pl-2 overflow-y-scroll scrollbar-hidden h-[calc(100vh-100px)]">
          {children}
        </div>
      </div>
      <Modal action={action} open={open}>
        <div className=" max-w-sm">
          <div className="flex flex-col gap-6 p-5">
            <div className="font-semibold text-base  text-[#0065C2]">
              Are you sure you want to archive this staff
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                intent="secondary"
                size="small"
                text="Yes"
                disabled={false}
                onClick={undefined}
                className=""
              />
              <Button
                intent="primary"
                size="small"
                text="No"
                disabled={false}
                onClick={() => setOpen(false)}
                className=""
              />
            </div>
          </div>
        </div>
      </Modal>
    </Layout>
  );
}
