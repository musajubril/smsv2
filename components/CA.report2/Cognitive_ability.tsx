import React from 'react';

const subjects = [
  { 
    name:  "Mathematics", 
    scores: [50, 50, 50, 50, 50, 50], 
    remarks: "Excellent" 
},
  {
     name: "English Composition", 
     scores: [50, 50, 50, 50, 50, 50], 
     remarks: "Excellent" 
    },
  {
     name: "English Grammar", 
     scores: [50, 50, 50, 50, 50, 50], 
     remarks: "Excellent" 
    },
  { 
    name: 
    "English Dictation", 
    scores: [50, 50, 50, 50, 50, 50], 
    remarks: "Excellent" 
},
  { 
    name: "Basic Science", 
    scores: [50, 50, 50, 50, 50, 50], 
    remarks: "Excellent" 
},
  { 
    name: "Quantitative Reasoning", 
    scores: [50, 50, 50, 50, 50, 50], 
    remarks: "Excellent" 
},
  { 
    name: "Computer", 
    scores: [50, 50, 50, 50, 50, 50], 
    remarks: "Excellent" 
},
  { 
    name: "HandWriting", 
    scores: [50, 50, 50, 50, 50, 50], 
    remarks: "Excellent" 
},


 
];

export default function Cognitive_ability() {
  return (
    <div className=' '>
      
     <div className=' -mt-8 pb-1 font-bold text-lg'>2. COGNITIVE ABILITY</div>
      <div className='grid grid-cols-3 border font-medium '>
        <div className='font-semibold text-2xl text-center -rotate-12 mt-5 '>Subjects</div>
        <div className='flex flex-col'>
          <div className='grid grid-cols-3 text-sm '>
            <div className='border-l border-r text-center'>
              <div className='pb-5 border-b text-center'>1st Half</div>
              <div className='grid grid-cols-2 text-xs h-full'>
                <div className='border-r '>Marks Obtained</div>
                <div className=''>Marks Obtained</div>
              </div>
            </div>
            <div className='border-r text-center'>
              <div className='pb-5 border-b text-center'>2nd Half</div>
              <div className='grid grid-cols-2 text-xs h-full'>
                <div className='border-r'>Marks Obtained</div>
                <div className=''>Marks Obtained</div>
              </div>
            </div>
            <div className='border-r grid grid-rows-2 text-center'>
              <div className='pb-5 border-b text-center'>Final Result</div>
              <div className='grid grid-cols-2 text-xs h-full'>
                <div className='border-r'>Marks Obtained</div>
                <div className=''>Marks Obtained</div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-rows-2'>
          <div className='border-b h-full text-sm'></div>
          <div className='grid grid-cols-4 text-center'>
            <div className='border-r'>Total</div>
            <div className='border-r'>Total</div>
            <div className='col-span-2'>TEACHERS REMARKS</div>
          </div>
        </div>
      </div>

      {
      subjects.map((subject, index) => (
        <div className='grid grid-cols-3 border-b' key={index}>
          <div className='border-r border-l pl-2'>
            {subject.name}
          </div>
          <div className='grid grid-cols-6 text-center'>
            {subject.scores.map((score, Index) => (
              <div className='border-r' key={Index}>{score}</div>
            ))}
          </div>
          <div className='grid-cols-4 grid'>
            <div className='w-full border-r'></div>
            <div className='w-full border-r'></div>
            <div className='col-span-2 text-center border-r'>{subject.remarks}</div>
          </div>
        </div>
      ))}

      <div className='grid grid-cols-3 border-b'>
        <div className='border-r border-l font-bold text-right'>
          TOTAL
        </div>
        <div className='grid grid-cols-6 text-center'>
          {
          subjects[0].scores.map((score, Index) => (
            <div className='border-r' key={Index}>50</div>
          ))}
        </div>
        <div className='grid-cols-4 grid'>
          <div className='w-full border-r'></div>
          <div className='w-full border-r'></div>
          <div className='col-span-2 text-center border-r'>Excellent</div>
        </div>
      </div>
    </div>
  );
};

