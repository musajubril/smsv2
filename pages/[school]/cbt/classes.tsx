import Button from "@/components/shared/button/Button";
import ClassCard from "@/components/shared/classCard/ClassCard";
import Layout from "@/components/shared/dashboardLayout/Layout";
import Link from "next/link";
import React from "react";
import { AiOutlineExport } from "react-icons/ai";

export default function classes() {
  return (
    <div>
      <Layout>
        <div>
          {/* top  */}
          <div className=" flex justify-between items-center pb-3">
            <p className=" font-semibold text-2xl">Classes</p>
            <div>
              <Link href={`/student/add`}>
                <Button
                  intent="primary"
                  size="base"
                  text="+  Add New Class"
                  disabled={false}
                  onClick={undefined}
                />
              </Link>
            </div>
          </div>

          {/* bottom  */}
          <div className=" flex flex-col">
            <div className=" grid grid-cols-3 gap-6 py-3">
              <ClassCard />
              <ClassCard />
              <ClassCard />
            </div>
            <div className=" grid grid-cols-3 gap-6 py-3">
              <ClassCard />
              <ClassCard />
              <ClassCard />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
