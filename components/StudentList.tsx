import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowDropleft } from "react-icons/io";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useQuery } from "@tanstack/react-query";
import { STUDENTS } from '@/api/apiUrl';
import { getRequest } from '@/api/apiCall';
import { queryKeys } from '@/api/queryKey';
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "./shared/Pagination";
import Table from "./shared/reusableTable/Table";

export default function StudentList({students}) {
  
  
  const router = useRouter();
  let school;
  if (typeof window !== 'undefined') {
    school = localStorage.getItem('schoolSlug');
  }

  const mappedStudents = students?.map((std) => {
    return {
      "Name": std.full_name,
      "Class": std.current_class.name,
      "Gender": std.gender,
      "Date of birth": std.date_of_birth,
      // "Religion": std.religion,
      "State": std.state_of_origin,
      "Email": std.email,
    }
  })
   const mappedImages = students?.map((std) => {
    return {
      "Image": std.image,
    }
  })
  
  const mappedIds = students?.map((std) => {
    return {
      "ID": std.id,
    }
  })
  
  return (
    <div>
      <div >
      <Table students={mappedStudents} imageUrls={mappedImages} IDs={mappedIds} hasCheckBox={true} hasImage={true} isAttendance={false} hasAction={undefined} actionHandle={undefined} nameUrls={`/${school}/admin/student`}></Table>
      </div>
    </div>
  );
}
