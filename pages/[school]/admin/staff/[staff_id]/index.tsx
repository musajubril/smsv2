import { getRequest, getSchool, patchRequest } from "@/api/apiCall";
import { GETSCHOOL, HOMEROOMS, STUDENT, STUDENTS, TEACHER } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import Button from "@/components/shared/button/Button";
import Layout from "@/components/shared/dashboardLayout/Layout";
import StaffLayout from "@/components/shared/dashboardLayout/staffLayout";
import Imagelogic from "@/components/shared/imagelogic";
import Input from "@/components/shared/input/Input";
import Select from "@/components/shared/select/Select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Profilepage() {


  return (
    <StaffLayout />
      
  );
}
