import React, { useState } from 'react'
import Table from './shared/reusableTable/Table'
import ImportCSV from './addStudents/ImportCSV'
import Layout from "@/components/shared/dashboardLayout/Layout";
import Barchart from './shared/Charts/Barchart_class';
import {outTable, ExcelRenderer} from 'react-excel-renderer'
import Button from './shared/button/Button';

export default function AddStudentsTable({ files }) {
  const [header, setHeader] = useState([]);
  const [cols, setCols] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ExcelRenderer(files);
        setHeader(response.rows[0]);
        setCols(response.rows);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [files]);

  React.useEffect(() => {
    console.log('Mapped Students:', cols.slice(1).map((row) => {
      const student = {};
      header.forEach((key, index) => {
        student[key] = row[index];
      });
      return student;
    }));
  }, [header, cols]);

  return (
    <div>
      <div className='flex justify-between'>
        <p className='font-semibold text-2xl'>Imported Student Details</p>
        <div>
          <button className='mr-5 text-base border rounded-md text-[#980101] px-4 py-3 border-[#980101] hover:bg-red-200 hover:border-red-200'>Delete</button>
          <button className='text-base border rounded-md text-white-100 px-4 py-3 bg-[#0065C2] border-[#0065C2] hover:bg-blue-300 hover:border-blue-300'>Confirm all</button>
        </div>
      </div>

      <div>
        <Table students={cols.slice(1).map((row) => {
          const student = {};
          header.forEach((key, index) => {
            student[key] = row[index];
          });
          return student;
        })} imageUrls={cols} IDs={cols} hasCheckBox={true} hasImage={false} hasAction={undefined} isAttendance={undefined} actionHandle={undefined} nameUrls={undefined}></Table>
      </div>
    </div>
  );
}