import Grade from "@/components/CA.report2/grade";
import Cognitive_ability from "@/components/CA.report2/Cognitive_ability";
import Footer from "@/components/CA.report2/Footer";
import Header from "@/components/CA.report2/Header";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/queryKey";
import { getRequest } from "@/api/apiCall";
import { RESULTS } from "@/api/apiUrl";

// {
//   "student": {
//       "id": 6,
//       "age": 22,
//       "full_name": "Morufah Titilayo Adebayo",
//       "fee_balance": "41500.00",
//       "is_debtor": true,
//       "current_class": {
//           "id": 1,
//           "name": "SSS 3",
//           "order": null,
//           "fee": "65000.00",
//           "teacher": null,
//           "female_count": 5,
//           "male_count": 6
//       },
//       "first_name": "Morufah",
//       "last_name": "Adebayo",
//       "middle_name": "Titilayo",
//       "gender": "Female",
//       "guardian_full_name": "Adebayo",
//       "guardian_full_name2": "Adebayo",
//       "phone_number": "1234567890",
//       "phone_number2": "0987654321",
//       "email": "moru1@gmail.com",
//       "state_of_origin": "Lagos",
//       "address": "Block 6, Flat 11, Arigbanla Millenium Estate",
//       "religion": "Islam",
//       "outstanding_debt": "0.00",
//       "date_of_birth": "2001-11-09",
//       "present_term_fees": "65000.00",
//       "present_term_payment": "23500.00",
//       "admission_number": "477676926",
//       "uid": "8e63fc9c-5732-4f15-814d-05687bbe3177",
//       "is_active": true,
//       "image": "https://res.cloudinary.com/masterp4dev/image/upload/v1636972989/o6zabedsm0svhkmrbjlf.jpg",
//       "school": 1
//   },
//   "results": [
//       {
//           "id": 12,
//           "subject": "BIO 101",
//           "grade": "F",
//           "remark": "WEAK",
//           "total_third": "0.0",
//           "total_second": "0.0",
//           "total_first": "0.0",
//           "current_session_average": "0.0",
//           "first_ca": 0,
//           "second_ca": 0,
//           "total_ca": 0,
//           "first_exam": 0,
//           "s_first_ca": 0,
//           "s_second_ca": 0,
//           "s_total_ca": 0,
//           "second_exam": 0,
//           "t_first_ca": 0,
//           "t_second_ca": 0,
//           "t_total_ca": 0,
//           "third_exam": 0,
//           "session_average": 0,
//           "student": 6,
//           "subject_class": 9,
//           "school": 1
//       }
//   ],
//   "teacher_remark": "Poor result. Work hard or you will be left behind.",
//   "did_first_term": false,
//   "did_second_term": false,
//   "principal_remark": "A very poor performance. You need to put in extra effort next term.",
//   "grade": "F",
//   "next_term_begin_date": "Mon, 08-Jan-2024",
//   "total_obtained": "121.0",
//   "total_obtainable": "600",
//   "percentage": "20.17",
//   "overall_remark": "WEAK",
//   "session": "2023/2024",
//   "header_image": "https://res.cloudinary.com/masterp4dev/image/upload/v1638876935/logo4-1_xoa0ru.jpg",
//   "school_owner_title": "Principal's Remark"
// }

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
    <div className="py-5 w-full items-center justify-center text-center">
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

    <div className=" py-5  flex w-full items-center justify-center ">
      <div className=" flex flex-col w-full max-w-[70%] gap-2   ">
        <Header
          student={results?.student}
          next_term_begin_date={results?.next_term_begin_date}
        />
        <Cognitive_ability
          subjectsList={results?.results}
          overall_remark={results?.overall_remark}
        />
        <Grade percentage={results?.percentage} />
        <Footer
          classNo={
            results?.student.current_class.male_count +
            results?.student.current_class.female_count
          }
          teacher_remark={results?.teacher_remark}
          comments={results?.principal_remark}
        />
      </div>
    </div>
    </div>
  );
}
