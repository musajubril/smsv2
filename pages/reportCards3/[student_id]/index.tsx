import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/api/queryKey';
import { getRequest } from '@/api/apiCall';
import { RESULTS } from '@/api/apiUrl';

export default function index() {
  const params: { student_id: string } = useParams();

  const student_id = params?.student_id;

  const uid: any =
    typeof window !== "undefined" && localStorage.getItem("schoolId");

  const schoolName: any =
    typeof window !== "undefined" && localStorage.getItem("schoolName");

  const { data: resultData } = useQuery({
    queryKey: [queryKeys.getResults, student_id],
    queryFn: async () => await getRequest({ url: RESULTS(uid, student_id) }),
  });

  const [results, setResults] = useState<any>();

  useEffect(() => {
    setResults(resultData?.data);
  }, [resultData]);
  console.log(results);
  return (
    <div>
      <div className=' py-5  flex w-full items-center justify-center text-center  '>
        <div className='max-w-[70%] flex flex-col gap-5'>
          <div className=' flex gap-8 w-full justify-center'>
            <div className=' w-36 h-36'><img src="/bestcollegelogo.png" alt="" /></div>
            <div className=' flex flex-col gap-2'>
              <div className='text-4xl font-bold'>BEST COLLEGE HIGH SCHOOL, OYEWOLE</div>
              <div className=' text-lg'>OYEWOLE ROAD MURELO BUS STOP AGEGE, TEL:08080808080, EMAIL-</div>
              <div className=' text-sm italic'> bestcollegehighschool@gmail.com</div>
              <div className='text-sm italic font-semibold text-black'>continuous assessment report {results?.session}</div>
            </div>
            <div className=' border-r-4 border-l-4 flex flex-col  p-1 gap-1'>
              <div className=' border px-4 py-3 text-lg font-semibold'> {results?.student?.current_class.name}</div>
              <div className=' border px-4 py-3 text-lg font-semibold bg-black text-white-100'> SECOND <br /> TERM</div>

            </div>
          </div>

          <div className=' flex flex-col gap-3'>
            <div className=' flex gap-2'>
              <div className=' flex items-center '>NAME</div>
              <div className=' border-b w-[7%] flex items-center '>{results?.student?.full_name}</div>
              <div className=' flex items-center '>GENDER</div>
              <div className=' border-b w-[7%] flex items-center '>{results?.student?.gender}</div>
            </div>
            <div className=' flex gap-2'>
              <div>CLASS</div>
              <div className=' border-b w-[7%]'>{results?.student?.current_class.name}</div>
              <div>SESSION</div>
              <div className=' border-b w-[7%]'>{results?.session}</div>
            </div>

          </div>

          <div className=' grid grid-cols-4 gap-10 w-[100%]'>
            <div className=' col-span-3 border'>
              <div className='  font-medium py-1 border-b '>PERFORMANCE SUMMARY</div>
              <div className=' flex border-b'>
                <div className=' w-[40%] p-3 text-left  border-r  '>Total Obtained</div>
                <div className=' w-[10%] border-r'>{results?.total_obtained}</div>
                <div className=' w-[40%]  p-3 text-left border-r '>Percentage</div>
                <div className=' w-[10%] '>{results?.percentage}%</div>
              </div>
              <div className=' flex'>
                <div className=' w-[40%] p-3 text-left border-r '>Total Obtained</div>
                <div className=' w-[10%] border-r'>{results?.total_obtained}</div>
                <div className=' w-[40%]  p-3 text-left border-r '>Percentage</div>
                <div className=' w-[10%] '>{results?.percentage}%</div>
              </div>
            </div>

            < div className=' '>
              <div className='   border border-black  h-full w-[90%]'>
              </div>
            </div>

          </div>
          <div className=' grid  grid-cols-7 border w-full font-medium   '>
            <div className=' border-r  py-2'>SUBJECTS</div>
            <div className=' border-r  py-2' >FIRST CA</div>
            <div className=' border-r  py-2'>SECOND CA</div>
            <div className=' border-r  py-2' >EXAM</div>
            <div className=' border-r  py-2'>TOTAL</div>
            <div className=' border-r  py-2'>GRADE</div>
            <div className=' py-2'>REMARKS</div>



          </div>

          <div className=' flex flex-col gap-4 '>
            <div className=' border-b-[3px] w-full text-left '>Principal's Remark:   {results?.principal_remark}</div>
            <div className=' border-b-[3px] w-full text-left '>Teacher's Remark:   {results?.teacher_remark}</div>


          </div>
        </div>
      </div>
    </div>
  )
}
