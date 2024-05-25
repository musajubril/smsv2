import Link from "next/link";
import React from "react";
import { HiDotsVertical } from "react-icons/hi";

interface Props {
  className: any;
  students: any;
  id: any;
}

export default function Resultcard({ className, students, id }: Props) {
  const slug: any =
    typeof window !== "undefined" && localStorage.getItem("schoolSlug");

  return (
    <div>
      <Link href={`/${slug}/admin/resultPins/${id}`}>
        <div className=" h-full w-full border border-[#C2E2FF] rounded-lg shadow-md">
          <div className=" flex justify-between p-4 rounded-lg bg-blue-700">
            <div className=" flex flex-col gap-2">
              <div className=" cursor-pointer font-medium text-xl text-gray-100">
                {className}
              </div>
              <div className=" cursor-pointer font-normal text-xs text-gray-200">
                Total Number of students: {students}
              </div>
            </div>
            <div className=" text-gray-200 text-2xl cursor-pointer">
              <HiDotsVertical />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
