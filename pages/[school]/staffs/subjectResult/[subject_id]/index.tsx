import Layout from '@/components/shared/dashboardLayout/Layout'
import React, { useEffect, useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowLeftLong } from 'react-icons/fa6'
import Button from '@/components/shared/button/Button';
import StaffDropdown from '@/components/shared/dropdown/StaffDropdown';
import Input from '@/components/shared/input/Input';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/api/queryKey';
import { CLASSSTUDENTS, COURSE, STUDENT } from '@/api/apiUrl';
import { getRequest } from '@/api/apiCall';
import LayoutStaff from '@/components/StaffLayout/LayoutStaff';



interface subjectParam {
  subject: string
  values?: {
    exam: string, ca: string, grade: string, total: string
  }
}

const subjects = [
  "Mathematics",
  "English",
  "Chemistry",
//   "Physics",
//   "Economics",
//   "Biology",
//   "Further Mathematics",
//   "Agriculture",
//   "Civic Education",
//   "German",
];



export default function index({slug}:{slug: string}) {
  const yearOptions = ['2021/2022', '2022/2023', '2023/2024',]
  const termOptions = ['first', 'second', 'third',]
  const sortOptions = ['Recorded results', 'Alphabetically']
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [showresult, setshowresult] = useState(false);
  const testOptions = ['First', 'Second', 'Third'];

  const params: { subject_id: string } = useParams();

  const subject_id = params?.subject_id;
  const uid: any = typeof window !== "undefined" && localStorage.getItem("schoolId");
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if(typeof window !== "undefined"){
      const token = window.localStorage.getItem("schoolSlug")
      if(token){
        setIsAuthenticated(true)
      }
    }
  }, [])

  const { data: getStudents } = useQuery({
    queryKey: [queryKeys.getStudents, uid, subject_id],
    queryFn: async () =>
      await getRequest({ url: CLASSSTUDENTS(uid, subject_id) }),
  });

  const [students, setStudents] = useState<any[]>([]);
  useEffect(() => {
    if (getStudents?.data) {
      setStudents(getStudents.data);
    }
  }, [getStudents]);

  console.log("student=",students);

  const [values, setValues] = useState<subjectParam[]>(subjects.map(sub => ({
    subject: sub,
    values: {
      ca: "",
      exam: "",
      total: "",
      grade: "",
    }
  })))

  const caVal = (sub: string) => {
    return values.find((val) => {
      if (val.subject === sub) {
        return val
      }
    })
  }

  const handleInputChange = (index: number, field: keyof subjectParam["values"], value: string) => {
    const newValues = [...values];
    if (field === "ca") {
      if (Number(value) > 40) {
        newValues[index].values[field] = "0";
      }else{
        newValues[index].values[field] = value;
      }
    }else if(field === "exam") {
      if (Number(value) > 60) {
        newValues[index].values[field] = "0";
      }else{
        newValues[index].values[field] = value;
      }
    }  else{
      newValues[index].values[field] = value;
    }
    setValues(newValues)
  }

  const handleSubjectDone = (index: number) => {
    console.log(values[index])
  }

  const getTotal = (index: number, ca: string, exam: string) => {
    return (values[index].values.total = (
      Number(ca) + Number(exam)
    ).toString());
  };

  const getGrade = (total: number) => {
    if (total < 40) {
      return "F"
    }
    else if (total >= 40 && total < 50) {
      return "E"
    }else  if (total >= 50 && total < 60) {
      return "D"
    }else if (total >= 60 && total < 70) {
      return "C"
    }else if (total >= 70 && total < 80) {
      return "B"
    }else if (total >=80) {
      return "A"
    }
  }

  
  return (
    <div>
      <LayoutStaff>
        {
        <div className='py-3 '>
          <div className=' flex gap-3 items-center pb-3'>
            <div className=' border border-[#E4E7EC] text-black text-base rounded shadow p-1 items-center'><div onClick={router.back}><FaArrowLeftLong /></div>
            </div>
            <div className=' text-[#667185] text-sm font-medium'>Go Back</div>
            <div className=' flex gap-2 items-center text-[#98A2B3] font-medium text-sm'>
              <div>Upload Results /</div>
              {/* <div>{student.current_class ? student.current_class.name : ""} /</div> */}
              {/* <div className=' text-black'>{student.full_name} </div> */}
            </div>

          </div>
          <div className=' flex gap-5 flex-col '>
            <div className=' flex justify-between w-full '>
              <div className=' flex gap-2 font-semibold text-2xl items-center'>
                {/* <div>{student.full_name}</div> */}
                <div className=' text-[#009688]'><GoDotFill /></div>
                <div className=' text-[#009688]'>85%</div>
              </div>
              <div className=' flex gap-3'>
                <div className=' border px-2 py-1 border-[#8FC9FF] flex  rounded items-center'>
                  <div className='text-black text-base font-medium'><StaffDropdown options={yearOptions} onSelect={undefined} placeholder={'2023/2024'} /></div>
                  {/* <div><IoIosArrowDown /></div> */}
                </div>
                <div>
                  <Button text={'Upload Question'} disabled={false} onClick={undefined} intent='primary' size='base' /> </div>
              </div>
            </div>

            <div className=' flex justify-between w-full items-center '>
              <div className=' w-[35%]'>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full border border-[#E4E7EC] py-2 rounded-md outline-none text-sm text-[#667185] pl-2"
                  placeholder="Search..."
                />
              </div>
              <div className=' flex gap-4 text-base items-center  '>
                <div className='  text-black font-semibold'>Filters: </div>
                <StaffDropdown
                  options={termOptions}
                  placeholder="Term"
                  onSelect={undefined} />
                <StaffDropdown
                  options={sortOptions}
                  placeholder="Sort"
                  onSelect={undefined} />

              </div>

            </div>
            <div className=' grid grid-cols-4 gap-5 '>
              {
                students.map((stu, index) => (
                  <div key={index} >
                    <div className={`flex flex-col bg-white-100 pb-3 border rounded-lg shadow border-[#C2E2FF] }`}>
                      <div className=' bg-[#F5FAFF] p-3 text-xl font-medium'>{stu?.full_name}</div>
                      
                      <div className=' flex flex-col gap-4 px-3 pt-3'>
                        <div className=' flex gap-4'>
                          <div className=' flex flex-col gap-2'>
                            <div className=' text-black font-medium text-sm'>C.A</div>
                            <div >
                              <Input text={"0.0"}
                                name=""
                                error={false}
                                success={false}
                                disabled={false}
                                change={(e) => {
                                  handleInputChange(index, "ca", e.target.value)
                                }}
                                value={values[index]?.values.ca}
                                size='large' />
                            </div>
                          </div>
                          <div className=' flex flex-col gap-2'>
                            <div className=' text-black font-medium text-sm'>Exams</div>
                            <div >
                              <Input text={'0.0'}
                                name={''}
                                error={false}
                                success={false}
                                disabled={false}
                                change={(e) => handleInputChange(index, "exam", e.target.value)}
                                value={values[index]?.values.exam}
                                size='large' />
                            </div>
                          </div>
                        </div>
                        {
                          values[index].values.ca && values[index].values.exam &&

                          <div>

                            <div className=' flex gap-4 mb-2'>
                              <div className=' flex flex-col gap-2 '>
                                <div className=' text-black font-medium text-sm'>Total</div>
                                <div>
                                  <Input text={'0.0'}
                                    name={''}
                                    error={false}
                                    success={false}
                                    disabled={false}
                                    change={() => { }}
                                    value={getTotal(index, values[index].values.ca, values[index].values.exam)}
                                    size='large' />
                                </div>
                              </div>
                              <div className=' flex flex-col gap-2'>
                                <div className=' text-black font-medium text-sm'>grade</div>
                                <div>
                                  <Input text={'0.0'}
                                    name={''}
                                    error={false}
                                    success={false}
                                    disabled={false}
                                    change={() => {}}
                                    value={getGrade(Number(values[index].values.total))}
                                    size='large' />
                                </div>
                              </div>
                            </div>
                            <div>

                              <Button text={'Done'} intent='primary' size='small' disabled={false} onClick={() => handleSubjectDone(index)} />
                            </div>
                          </div>
                        }
                      </div>

                    </div>

                  </div>
                ))}
            </div>

          </div>
        </div>
        }

      </LayoutStaff>
    </div>
  )
}
