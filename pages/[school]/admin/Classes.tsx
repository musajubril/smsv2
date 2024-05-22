import React from "react";
import { useRouter } from "next/router";
import { useQuery } from '@tanstack/react-query';
import Layout from "@/components/shared/dashboardLayout/Layout";
import Link from "next/link";
import Button from "@/components/shared/button/Button";
import Table from "@/components/shared/reusableTable/Table";
import { getRequest } from '@/api/apiCall';
import { HOMEROOMS } from '@/api/apiUrl';
import { queryKeys } from '@/api/queryKey';
import AddNewclass from "@/components/Questionbankmodals/Addnewclass";
import Classadded from "@/components/Questionbankmodals/Classadded";

export default function Classes() {
  const router = useRouter();

  const [isAddNewClassModalOpen, setIsAddNewClassModalOpen] = React.useState(false);
  const [isClassaddedOpen, setIsClassaddedOpen] = React.useState(false);

  React.useEffect(() => {
    if (router.query.modal === "true") {
      setIsAddNewClassModalOpen(true);
    }
  }, [router.query]);

  const handleOpenAddNewClassModal = () => {
    setIsAddNewClassModalOpen(true);
  };

  const handleCloseAddNewClassModal = () => {
    setIsAddNewClassModalOpen(false);
  };

  // const handleOpenClassadded = () => {
  //   setIsClassaddedOpen(true);
  // };

  const handleCloseClassadded = () => {
    setIsClassaddedOpen(false);
  };

  const handleAddClass = () => {
   
    setIsAddNewClassModalOpen(false);
  
    setIsClassaddedOpen(true);
  };

  const uid = typeof window !== 'undefined' && localStorage.getItem("schoolId");
  console.log(uid);
  const { data: classesData } = useQuery({
    queryKey: [queryKeys.getStudents],
    queryFn: async () => await getRequest({ url: HOMEROOMS(uid) })
  });

  const [classes, setClasses] = React.useState([]);

  React.useEffect(() => {
    setClasses(classesData?.data);
  }, [classesData]);

  // console.log(classes);

  const mappedClasses = classes?.map((cls) => {
    return {
    //   "Name": cls.name,
      "Class": cls.name,
      "Teacher": cls.name,
    //   "No of Student": cls.
    };
  });

  const mappedIds = classes?.map((cls) => {
    return {
      "ID": cls.id,
    };
  });

  const handleAction = () => {
    console.log("clicked")
  }

  return (
    <div>
      <Layout>
        <div>
          <div className="flex justify-between items-center pb-3">
            <p className="font-semibold text-2xl">Classes</p>
            <div>
              <Button
                intent="primary"
                size="base"
                text="+ Add New Class"
                disabled={false}
                onClick={handleOpenAddNewClassModal}
              />
              <AddNewclass
                isModalOpen={isAddNewClassModalOpen}
                handleCloseModal={handleCloseAddNewClassModal}
                handleAddClass={handleAddClass}
              />
            </div>
          </div>
        </div>
        <div>
          <Table students={mappedClasses} imageUrls={mappedClasses} IDs={mappedIds} hasCheckBox={true} hasImage={false} actionHandle={handleAction} isAttendance={undefined} hasAction={true} />
        </div>
      </Layout>
      <Classadded isModalOpen={isClassaddedOpen} handleCloseModal={handleCloseClassadded} />
    </div>
  );
}
