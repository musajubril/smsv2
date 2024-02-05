import Table from '@/components/shared/reusableTable/Table';
import React, { useState } from 'react'
import {outTable, ExcelRenderer} from 'react-excel-renderer'


export default function ImportCsvLogic() {
const [header, setHeader] = useState([]);
const [cols, setCols] = useState([])

const handleFile = (e) => {
  const file = e.target.files[0];
  ExcelRenderer(file, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      setHeader(response.rows[0]);
      setCols(response.rows);
    }
  });
};

// Map the data to the format required by the Table component
const mappedStudents = cols.slice(1).map((row) => {
  const student = {};
  header.forEach((key, index) => {
    student[key] = row[index];
  });
  return student;
  });

  return (
    <div>
      <input
       type="file" 
       name='file' 
       accept='.csv' 
       onChange={handleFile} style={{margin: "10px auto"}}></input>

<Table students={mappedStudents} imageUrls={mappedStudents} IDs={mappedStudents} hasCheckBox={true} hasImage={false}></Table> 
      
    </div>
  );
}
