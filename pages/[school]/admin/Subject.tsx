import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GET_COURSES } from '@/api/apiUrl';
import { getRequest, postRequest } from '@/api/apiCall';
import { queryKeys } from '@/api/queryKey';
import { useRouter } from "next/router";
import { useState } from "react";
import Table from "@/components/shared/reusableTable/Table";
import Layout from "@/components/shared/dashboardLayout/Layout";
import Button from "@/components/shared/button/Button";
import Courseadded from "@/components/subjectModals/addSubjectmodal2";
import Addnewcourse from "@/components/subjectModals/AddSubjectmodal";


export default function Subject({ course }) {
  const id: any = typeof window !== 'undefined' && localStorage.getItem("schoolId")
  const [courses, setCourses] = React.useState([])
  const { data: courseData } = useQuery({
    queryKey: [queryKeys.getcourse],
    queryFn: async () => await getRequest({ url: GET_COURSES(id) })
  })

  React.useEffect(() => {
    setCourses(courseData?.data);
  }, [courseData]);

  const [subject, setSubject] = useState({
    name: '',
    class_ids: [0]
  });


  const handleChange = (e) => {
    setSubject({
      ...subject,
      name: e.target.value,
    })
  }

  const mappedCourses = courses?.map((course) => {
    return {
      "Name": course.name,
      "No Of Classes": 'null',
    }
  })

  const mappedIds = courses?.map((course) => {
    return {
      "ID": course.id,
    }
  })

  const router = useRouter();

  const [isAddNewCourseModalOpen, setIsAddNewCourseModalOpen] = React.useState(false);
  const [isCourseaddedOpen, setIsCourseaddedOpen] = React.useState(false);

  React.useEffect(() => {
    if (router.query.modal === "true") {
      setIsAddNewCourseModalOpen(true);
    }
  }, [router.query]);

  const handleAddNewCourse = () => {
    setIsAddNewCourseModalOpen(true);
    setIsCourseaddedOpen(false);

  };

  const handleCloseAddNewCourse = () => {
    setIsAddNewCourseModalOpen(false);
  };
  const handleCloseCourseadded = () => {
    setIsCourseaddedOpen(false);
  };

  const { mutate } = useMutation(
    {
      mutationFn: async (postData: any) => await
        postRequest({ url: GET_COURSES(id), data: postData })
    }
  )

  const handleAddCourse = () => {
    console.log(subject)
        mutate(subject)

    setIsAddNewCourseModalOpen(false);

    setIsCourseaddedOpen(true);

  };


  return (
    <div>
      <Layout>
        <div >
          <div className=' flex gap-5 flex-col '>
            <div className=' flex justify-between w-full pt-4'>
              <div className=" font-semibold text-2xl">Subjects</div>
              <div>
                <Button
                  intent="primary"
                  size="small"
                  text="+ Add New Subject"
                  disabled={false}
                  onClick={handleAddNewCourse}
                />
                <Addnewcourse
                  isModalOpen={isAddNewCourseModalOpen}
                  handleCloseModal={handleCloseAddNewCourse}
                  handleAddCourse={handleAddCourse}
                  handlechange={handleChange}
                  subject={subject}
                  setSubject={setSubject}
                />
              </div>
            </div>

            <div className=' w-[35%]'>
              <input
                type="text"
                name=""
                id=""
                className="w-full border border-[#E4E7EC] py-2 rounded-md outline-none text-sm text-[#667185] pl-2"
                placeholder="Search..."
              />

            </div>

            <div className=" ">
              <Table
                students={mappedCourses}
                imageUrls={mappedCourses}
                IDs={mappedIds}
                hasCheckBox={true}
                hasImage={false}
                hasAction={true}
                isAttendance={undefined}
                actionHandle={undefined}>
              </Table>
            </div>
          </div>
        </div>
        <Courseadded
          isModalOpen={isCourseaddedOpen}
          handleCloseModal={handleCloseCourseadded}
          handleAddNewCourse = {handleAddNewCourse} />
      </Layout>
    </div>
  );
}
