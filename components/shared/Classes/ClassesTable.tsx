import React from "react";
import Table2 from "../reusableTable/Table2";


export default function ClassesTable() {


  // const router = useRouter();
  // let school;
  // if (typeof window !== 'undefined') {
  //   school = localStorage.getItem('schoolSlug');
  // }

  const students = [{
    subject: "Mathematics",
    topics: 2,
    term: "First",
    date: "12/01/2024",
    actions: ":"
  },
  {
    subject: "English",
    topics: 15,
    term: "Second",
    date: "12/04/2024",
    actions: ":"
  },
  {
    subject: "Commerce",
    topics: 6,
    term: "Third",
    date: "12/04/2024",
    actions: ":"
  },

  {
    subject: "Civic Education",
    topics: 20,
    term: "Second",
    date: "14/01/2024",
    actions: ":"
  },
  {
    subject: "Mathematics",
    topics: 20,
    term: "Third",
    date: "12/04/2024",
    actions: ":"
  },
  {
    subject: "Economics",
    topics: 16,
    term: "First",
    date: "12/04/2024",
    actions: ":"
  },
  ]

  const mappedStudents = students?.map((std) => {
    return {
      "Subject": std.subject,
      "No. of Topics": std.topics,
      "Term": std.term,
      "Date": std.date,
      "Actions": std.actions
      // "Religion": std.religion,
      // "State": std.state_of_origin,
      // "Email": std.email,
    }
  })
  return (
    <div>
      <Table2 students={mappedStudents} hasCheckBox={true} />
    </div>
  );
}
