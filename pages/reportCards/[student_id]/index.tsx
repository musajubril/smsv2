import { getRequest } from "@/api/apiCall";
import { RESULTS, STUDENTS } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import Academic_performance from "@/components/CA.report/Academic_performance";
import Footer from "@/components/CA.report/Footer";
import Grade from "@/components/CA.report/Grade";
import Header from "@/components/CA.report/Header";
import Observable_behaviour from "@/components/CA.report/Observable_behaviour";
import Skills_Dev from "@/components/CA.report/Skills_Dev";
import Student_data from "@/components/CA.report/Student_data";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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
    <div className=" py-5  flex w-full items-center justify-center text-center  ">
      {results && (
        <div className="max-w-[70%] flex flex-col gap-3">
          <Header
            session={results?.session}
            studentClass={results?.student?.current_class.name}
          />
          <Student_data
            student={results?.student}
            next_term_begin_date={results?.next_term_begin_date}
          />
          <Observable_behaviour />
          <Skills_Dev />
          <Grade />
          <Academic_performance
            subjectsList={results?.results}
            total_obtained={results?.total_obtained}
            total_obtainable={results?.total_obtainable}
            percentage={results?.percentage}
            classNo={
              results?.student.current_class.male_count +
              results?.student.current_class.female_count
            }
            grade={results?.grade}
          />
          <Footer
            comments={results?.principal_remark}
            pname={results?.student?.guardian_full_name}
            teacher_remark={results?.teacher_remark}
            overall_remark={results?.overall_remark}
          />
        </div>
      )}
    </div>
  );
}
