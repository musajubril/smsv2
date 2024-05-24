import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from '@tanstack/react-query';
import Layout from "@/components/shared/dashboardLayout/Layout";
import Button from "@/components/shared/button/Button";
import Table from "@/components/shared/reusableTable/Table";
import { getRequest } from '@/api/apiCall';
import { HOMEROOMS } from '@/api/apiUrl';
import { queryKeys } from '@/api/queryKey';
import AddNewclass from "@/components/Questionbankmodals/Addnewclass";
import Classadded from "@/components/Questionbankmodals/Classadded";

export default function Classes() {
  const router = useRouter();

  const [isAddNewClassModalOpen, setIsAddNewClassModalOpen] = useState(false);
  const [isClassaddedOpen, setIsClassaddedOpen] = useState(false);
  const [newClassName, setNewClassName] = useState(""); // State to store the new class name
  const [selectedSubjects, setSelectedSubjects] = useState([]); // State to store selected subjects

  useEffect(() => {
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

  const handleCloseClassadded = () => {
    setIsClassaddedOpen(false);
  };

  const handleAddClass = (className, subjects) => {
    setNewClassName(className); 
    setSelectedSubjects(subjects); 
    setIsAddNewClassModalOpen(false);
    setIsClassaddedOpen(true);
  };

  const uid = typeof window !== 'undefined' && localStorage.getItem("schoolId");

  const { data: classesData } = useQuery({
    queryKey: [queryKeys.getStudents],
    queryFn: async () => await getRequest({ url: HOMEROOMS(uid) }),
    enabled: !!uid,
  });

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    if (classesData?.data) {
      setClasses(classesData.data);
    }
  }, [classesData]);

  const mappedClasses = classes?.map((cls) => {
    return {
      "Class": cls.name,
      "Teacher": cls.name,
    };
  }) || []; 

  const mappedIds = classes?.map((cls) => {
    return {
      "ID": cls.id,
    };
  }) || []; 

  const handleAction = () => {
    console.log("clicked");
  };

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
          <Table 
            students={mappedClasses} 
            imageUrls={mappedClasses} 
            IDs={mappedIds} 
            hasCheckBox={true} 
            hasImage={false} 
            actionHandle={handleAction} 
            isAttendance={undefined} 
            hasAction={true} 
          />
        </div>
      </Layout>
      <Classadded
        isModalOpen={isClassaddedOpen}
        handleCloseModal={handleCloseClassadded}
        className={newClassName} 
        subjects={selectedSubjects.map(subject => subject.label)} 
      />
    </div>
  );
}
