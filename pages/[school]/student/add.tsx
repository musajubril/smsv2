import React, { useEffect, useState } from 'react';
import Addstudent2 from '@/components/addStudents/Addstudent2';
import Addstudent3 from '@/components/addStudents/Addstudent3';
import Addstudent1 from '@/components/addStudents/Addstudent1';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { GETSCHOOL, STUDENTS } from '@/api/apiUrl';
import { postRequest, getSchool } from '@/api/apiCall';
import { useParams } from 'next/navigation';
import { queryKeys } from '@/api/queryKey';



export type  SignUpState = {
  first_name: string,
  last_name: string,
  date_of_birth: Date | null,
  parent_name: string,
  home_address: string,
  parent_email: string, 
  student_email: string,
  gender: string,
  phone_number: string,
  religion: string,
  state_of_origin: string,
  enrollment_date: string
}
export default function AddStudent() {
// const router = useRouter();
const params: { school: string } = useParams();
// console.log(params, router.query);
const school = params?.school;
const { data } = useQuery({
  queryKey: [queryKeys.getSchool, school],
  queryFn: async () => await getSchool ({ url: GETSCHOOL(school) }),
  retry: 2,
  enabled: !!school,
});

const [schoolData, setSchoolData] = useState(data?.data);
useEffect(() => {
  setSchoolData(data?.data);
}, [data?.data]);
// console.log(schoolData);


  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter()
  const handleNextStep = (e:any) => {
    e.preventDefault()
    if (currentStep < 2){
      setCurrentStep(currentStep + 1);
    }
    console.log(state)
  };

  const handlePreviousStep = () => {
    if (currentStep > 0){
      setCurrentStep(currentStep - 1);
    }
  };

  const [state, setState] = React.useState<SignUpState>({
    first_name: "",
    date_of_birth: new Date (),
    last_name: "",
    parent_name: "",
    phone_number: "",
    home_address: "",
    parent_email: "",
    student_email: "",
    gender: "",
    religion: "",
    state_of_origin:"",
    enrollment_date: ""
  })
  const mutation = useMutation({
    mutationFn: async (newLogin: any) => {
      postRequest({ url: STUDENTS(schoolData?.uid), data: newLogin });
    }
  });

const handleChange = (e: any)=> {
  setState({
    ...state,
    [e.target.name]: e.target.value
  })
  console.log(state)
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  console.log(state);
  mutation.mutate({state});
}


  return (
    <div>

        {currentStep === 0 && <Addstudent1  change={handleChange}  state={state} setState={setState} next={handleNextStep}/>} 
     
      {currentStep===1 && <Addstudent2 state={state} prev={handlePreviousStep} next={handleNextStep} change={handleChange} />} 
         {currentStep === 2 && (
        <Addstudent3 change={handleChange}  state={state} setState={setState} prev={handlePreviousStep} submit={handleSubmit}  />
      )}
    </div>
  )
}
