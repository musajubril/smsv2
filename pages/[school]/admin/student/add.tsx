import React, { useEffect, useState } from "react";
import Addstudent2 from "@/components/addStudents/Addstudent2";
import Addstudent3 from "@/components/addStudents/Addstudent3";
import Addstudent1 from "@/components/addStudents/Addstudent1";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GETSCHOOL, STUDENTS } from "@/api/apiUrl";
import { postRequest, getSchool } from "@/api/apiCall";
import { useParams } from "next/navigation";
import { queryKeys } from "@/api/queryKey";
import Layout from "@/components/shared/dashboardLayout/Layout";
import AddStudentsTable from "@/components/addStudentsTable";
import ImportCSV from "@/components/addStudents/ImportCSV";
import Modal from "@/components/shared/reusablemodal/Modal";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineImport } from "react-icons/ai";
import Link from "next/link";




export type SignUpState = {
  first_name: string;
  middle_name: string;
  last_name: string;
  date_of_birth:  Date | null;
  guardian_full_name: string;
  address: string;
  email: string;
  gender: string;
  phone_number: string;
  religion: string;
  state_of_origin: string;
  outstanding_debt: string;
  class_id: string;
  image: string;
};
export default function AddStudent({}: { open: boolean; setOpen: any }) {
  const [open, setOpen] = useState(Boolean);
  const [showCSVPreview, setShowCSVPreview] = useState(Boolean);
  const action = () => {
    setOpen(false);
  };
  // const[showCSVPreview, setShowCSVPreview] = useState()
  const router = useRouter();
  const params: { school: string } = useParams();
  // console.log(params, router.query);
  const school = params?.school;

  if (school) {
    localStorage.setItem("sch_name", params.school);
  }

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
  // console.log(schoolData);

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (e: any) => {
    e.preventDefault();
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
    console.log(state);
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [state, setState] = React.useState<SignUpState>({
    first_name: "",
    middle_name: "",
    date_of_birth: new Date(),
    last_name: "",
    guardian_full_name: "",
    phone_number: "",
    address: "",
    email: "",
    gender: "",
    religion: "",
    state_of_origin: "",
    outstanding_debt: "200",
    class_id: "",
    image: ""
  });
  const mutation = useMutation({
    mutationFn: async (newLogin: any) => {
      postRequest({ url: STUDENTS(schoolData?.uid, 1), data: newLogin });
    },
    onSuccess:()=>{
      router.push(`/${school}/admin/students`)
    }
  });

  const handleChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(state);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
    mutation.mutate({ ...state });
  };

  const [files, setFiles] = useState<File | FileList>();

  // const [open, setOpen] = useState(false)

  console.log(showCSVPreview);
  return (
    <div>
      <Layout>
        <div className="">
          <Modal action={action} open={open}>
            <ImportCSV
              // showCSVPreview={showCSVPreview}
              // setFiles={setFiles}
              // setOpen={setOpen}
              // setShowCSVPreview={setShowCSVPreview}
            />
          </Modal>
        </div>

        {!showCSVPreview ? (
          <>
            <div className=" px-6">
              <div className=" flex justify-between items-center">
                <div className=" flex items-center gap-3 cursor-pointer">
                  <div
                    onClick={router.back}
                    className=" flex items-center gap-3 cursor-pointer"
                  >
                    <div className="border py-1 px-2 border-[#E4E7EC] bg-white-100 rounded-lg">
                      <FaArrowLeftLong />
                    </div>
                    <div>Go Back</div>
                  </div>
                  <Link
                    href={`/${school}/`}
                    className=" text-gray-400 hover:text-black"
                  >
                    Dashboard /
                  </Link>
                  <div
                    className=" text-gray-400 hover:text-black"
                    onClick={router.back}
                  >
                    Students /
                  </div>
                  <div className=" ">Add New Student</div>
                </div>
                <div
                  className=" flex p-2 border items-center gap-1 border-[#E4E7EC] bg-white-100 rounded-md cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <AiOutlineImport />
                  <div>Import CSV</div>
                </div>
              </div>
            </div>

            {currentStep === 0 && (
              <Addstudent1
                open={open}
                setOpen={setOpen}
                change={handleChange}
                state={state}
                setState={setState}
                next={handleNextStep}
              />
            )}

            {currentStep === 1 && (
              <Addstudent2
                open={open}
                setOpen={setOpen}
                state={state}
                prev={handlePreviousStep}
                next={handleNextStep}
                change={handleChange}
              />
            )}
            {currentStep === 2 && (
              <Addstudent3
                change={handleChange}
                open={open}
                setOpen={setOpen}
                state={state}
                setState={setState}
                prev={handlePreviousStep}
                submit={handleSubmit}
              />
            )}
          </>
        ) : (
          <AddStudentsTable files={files} />
        )}
      </Layout>
    </div>
  );
}
