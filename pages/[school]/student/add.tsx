import React, { useState } from 'react';
import Addstudent2 from '@/components/addStudents/Addstudent2';
import Addstudent3 from '@/components/addStudents/Addstudent3';
import Addstudent1 from '@/components/addStudents/Addstudent1';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { SIGNUP } from '@/api/apiUrl';
import { postRequest } from '@/api/apiCall';


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
const {mutate} = useMutation({
  mutationFn: async(data: SignUpState) => await
  postRequest({url:SIGNUP, data}),
  onSuccess:()=>{
  }
})

const handleChange = (e: any)=> {
  setState({
    ...state,
    [e.target.name]: e.target.value
  })
  console.log(state)
}
// const handleDropdownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setState({
//     ...state,
//     [e.target.name]: e.target.value
//   });
// };
const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  console.log(state)
  mutate({
    ...state
  })
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
