import { getRequest } from '@/api/apiCall';
import { CLASSPIN } from '@/api/apiUrl';
import { queryKeys } from '@/api/queryKey';
import Layout from '@/components/shared/dashboardLayout/Layout'
import Pincard from '@/components/shared/resultCard/PinCard';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'



// {
//     "student": {
//         "id": 6,
//         "full_name": "Morufah Titilayo Adebayo"
//     },
//     "pin": "4cdbd94ff91e"
// }

export default function pins() {

  // const router = useRouter();
  const params: {  classId: string } = useParams();

  
  const cId = params?.classId;


    const uid: any = typeof window !== "undefined" && localStorage.getItem("schoolId");
    
  const { data: studentData } = useQuery({
    queryKey: [queryKeys.getStudents, cId],
    queryFn: async () => await getRequest({ url: CLASSPIN(uid,cId) }),
  });

  console.log(studentData)

  const [students, setStudents] = useState([]);
  useEffect(() => {
    setStudents(studentData?.data);
  }, [studentData]);

   console.log(students)


  return (
    <Layout>
        <div className=" flex flex-col">
            <div className=" grid grid-cols-3 gap-6 py-3">
              { students &&
                students.map((option, index) => (
                    <div key={index}>
                        <Pincard studentName={option.student.full_name} studentPin={option.pin} />
                    </div>
                ))
              }
            </div>
          </div>
    </Layout>
  )
}
