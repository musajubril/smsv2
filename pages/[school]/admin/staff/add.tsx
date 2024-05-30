import { getSchool, postRequest } from "@/api/apiCall";
import { GETSCHOOL, TEACHERS } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import AddStaff1 from "@/components/addStaffs/AddStaff1";
import AddStaff2 from "@/components/addStaffs/AddStaff2";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import router, { useRouter } from "next/router";

import React, { useEffect, useState } from "react";

export type AddStaffState = {
  first_name: string,
  last_name: string,
  gender: string,
  email: string,
  phone_number: string,
  address: string,
  state_of_origin: string,
  department: string,
  qualification: string,
  role: string,
  class: string,
  subject: string
}

export default function addStaffPage() {
  const router = useRouter();
  const params: { school: string } = useParams();
  // console.log(params, router.query);
  const school = params?.school;
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
  
  const handleNextStep = (e:any) => {
    e.preventDefault()
    if (currentStep < 1){
      setCurrentStep (currentStep + 1);
    }
    console.log(state)
  }

  const handlePreviousStep = () => {
    if (currentStep > 0){
      setCurrentStep(currentStep -1);
    }
  };

  
const [state, setState] = React.useState<AddStaffState>({
  first_name: "",
  last_name: "",
  gender: "",
  email: "",
  phone_number: "",
  address: "",
  state_of_origin: "",
  department: "",
  qualification: "",
  role: "",
  class: "",
  subject: ""
})



const mutation = useMutation({
  mutationFn: async (newLogin: any) => {
    postRequest({ url: TEACHERS(schoolData?.uid), data: newLogin });
  },
  onSuccess:()=>{
    router.push(`/${school}/admin/staffs`)
  }
});

const handleChange = (e:any) => {
  setState({
    ...state,
    [e.target.name]: e.target.value
  })
  console.log(e.target.value)
}


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(state);

    mutation.mutate({ ...state});

  }


  return (
    <div>
     { currentStep === 0 && <AddStaff1 next={handleNextStep} change={handleChange} state={state} setState={setState} />}
     { currentStep  ===1 && (<AddStaff2 prev={handlePreviousStep} submit={handleSubmit} state={state} change={handleChange} setState={setState}/>)}
    </div>
  );
}
