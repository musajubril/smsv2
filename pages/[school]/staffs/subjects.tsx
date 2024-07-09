import { getRequest } from '@/api/apiCall';
import { TEACHERCOURSES, TEACHERS } from '@/api/apiUrl';
import { queryKeys } from '@/api/queryKey';
import LayoutStaff from '@/components/StaffLayout/LayoutStaff';
import Table from '@/components/shared/reusableTable/Table';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react'

export default function subjects() {
    const uid: any = typeof window !== 'undefined' && localStorage.getItem("schoolId");
    // console.log(uid);
    const [staffs, setStaffs] = React.useState([]);
    const { data: staffData } = useQuery({
      queryKey: [queryKeys.getStaffs, uid],
      queryFn: async () => await getRequest({ url: TEACHERS(uid) }),
    });
    useEffect(() => {
        setStaffs(staffData?.data);
      }, [staffData]);

      // console.log(staffs);

    const {data: courseList} = useQuery({
        queryKey: [queryKeys.getCourses],
        queryFn: async () => await getRequest({
            url: TEACHERCOURSES(uid, 4)
        })
    });
    // console.log(courseList)
    const [courses, setCourses] = React.useState([]);
    useEffect(() => {
        setCourses(courseList?.data);
    }, [courseList]);
    // console.log(courses);

    const mappedStudents = courses?.map((course) => {
        return{
          "Name": course.school_class.name,
          "Subject": course.subject.name,
          "Number of Students": course.id,
          "": course.none
        }
       })
    
       const mappedImages = courses?.map((course) => {
        return {
          Image: course.image,
        };
      });
    
      const mappedIds = courses?.map((course) => {
        return {
          ID: course.id,
        };
      });

      let school;
      if (typeof window !== 'undefined') {
        school = localStorage.getItem('schoolSlug');
      }
   

  return (
    <div>
        <LayoutStaff>
        <p className="font-semibold text-2xl">Subjects</p>
        <Table students={mappedStudents} imageUrls={mappedImages} IDs={mappedIds} hasCheckBox={false} hasImage={false} isAttendance={undefined} hasAction={false} actionHandle={undefined} nameUrls={`/${school}/staffs/subjectResult`}>

</Table>
        </LayoutStaff>
    </div>
  )
}
