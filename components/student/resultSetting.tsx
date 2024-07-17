import React, { useEffect, useState } from 'react'
import Input from '../shared/input/Input';
import { useRouter } from 'next/router';
import { queryKeys } from '@/api/queryKey';
import { useQuery } from '@tanstack/react-query';
import { getRequest, getSchool } from '@/api/apiCall';
import { GETSCHOOL, STUDENT } from '@/api/apiUrl';
import { useParams } from 'next/navigation';


export default function resultSetting() {
const params: { school: string; student_id: string } = useParams();

const school = params?.school;
const student_id = params?.student_id;

const { data } = useQuery({
  queryKey: [queryKeys.getSchool, school],
  queryFn: async () => await getSchool({ url: GETSCHOOL(school) }),
  retry: 2,
  enabled: !!school,
});

const [schoolData, setSchoolData] = useState(data?.data);
useEffect(() => {
  setSchoolData(data?.data);
}, [data?.data]);

const { data: getstudent } = useQuery({
  queryKey: [queryKeys.getstudent, schoolData, student_id],
  queryFn: async () =>
    await getRequest({ url: STUDENT(schoolData?.uid, student_id) }),
});

const [student, setStudent] = useState<any>({});
useEffect(() => {
  if (getstudent?.data) {
    setStudent(getstudent.data);
  }
}, [getstudent]);

  return (
    <div>
        
    <div className=" justify-center flex  w-full">
      {
        <div className=" flex flex-col w-full px-4 gap-3 max-w-3xl ">
          <div className=" md:grid grid-cols-3 items-center text-center gap-5  w-full ">
            <div>
              <img
                src="/bestcollegelogo.png"
                alt=""
                className=" hidden md:flex w-20 h-20"
              />
            </div>
            <div className=" font-medium text-base md:text-xl">
              {student.full_name}
            </div>
            <div className=" hidden md:flex justify-end">
              <img 
              src={student.image} 
              alt="" 
              className='h-16 w-16 flex justify-center items-center rounded-full'
              />

            </div>
          </div>
          <div className=" grid md:grid-cols-2 gap-6 py-3">
            <div>
              <div className="pb-2 "> Class Teacher's Remark</div>
              <div>
              <textarea
              className=" w-72 py-3 bg-white-200 pl-3 border border-gray-500"
             />
        
              </div>
            </div>

            <div>
              <div className="pb-2 "> Principal's Remark</div>
              <div>
              <textarea
    
              className=" w-72 py-3 bg-white-200 pl-3 border border-gray-500"
             />
              </div>
            </div>
    
          </div>
        </div>
      }
    </div>
    </div>
);
}

