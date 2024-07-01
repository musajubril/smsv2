import React from 'react';



export default function AcademicPerformance({subjectsList,total_obtained,total_obtainable,percentage,classNo,grade}) {
  return (
    <div>
      <div className='border w-full'>
        <div className='font-medium w-full'>ACADEMIC PERFORMANCE</div>
        <div className="grid grid-cols-5 text-sm border">
          <div className='border-r'></div>
          <div className='border-r'>FIRST TERM SUMMARY</div>
          <div className='border-r'>2ND TERM SCORES</div>
          <div className='border-r'>CLASS SUMMARY</div>
          <div className=''></div>
        </div>

        <div className='grid grid-cols-5 border-b'>
          <div className='border-r'></div>
          <div className='grid grid-cols-3 border-r border-l'>
            <div className='border-r'>1st Term Score</div>
            <div className='border-r'>1st Term Grd</div>
            <div className='border-r'>Position</div>
          </div>
          <div className='grid grid-cols-3 border-r text-center'>
            <div className='border-r'>2nd Term Score</div>
            <div className='border-r'>2nd Term Grd</div>
            <div className='border-r'>Position</div>
          </div>
          <div className='grid grid-cols-3 border-r text-center'>
            <div className='border-r'>Class Avg Scores</div>
            <div className='border-r'>Class Lowest Scores</div>
            <div className='border-r'>Class Highest Scores</div>
          </div>
          <div className='grid grid-cols-2'>
            <div className='border-r'>Remarks</div>
            <div className=''>Sign</div>
          </div>
        </div>

        <div className='grid grid-cols-5 border-b'>
          <div className='border-r'>Max Obtainable Mark</div>
          <div className='grid grid-cols-3 border-r border-l'>
            <div className='border-r'>{total_obtainable}</div>
            <div className='border-r'></div>
            <div className='border-r'></div>
          </div>
          <div className='grid grid-cols-3 border-r text-center'>
            <div className='border-r'>{total_obtainable}</div>
            <div className='border-r'></div>
            <div className='border-r'></div>
          </div>
          <div className='grid grid-cols-3 border-r text-center'>
            <div className='border-r'>100%</div>
            <div className='border-r'>100%</div>
            <div className='border-r'>100%</div>
          </div>
          <div className='grid grid-cols-2'>
            <div className='border-r'></div>
            <div className=''></div>
          </div>
        </div>

       {subjectsList.map((sub, index) => (
          <div key={index} className='grid grid-cols-5 border-b'>
            <div className='border-r'>{sub.subject}</div>
            <div className='grid grid-cols-3 border-r border-l'>
              <div className='border-r'>{sub.total_ca}</div>
              <div className='border-r'>{sub.first_exam}</div>
              <div className='border-r'>{sub.firstTermPosition}</div>
            </div>
            <div className='grid grid-cols-3 border-r text-center'>
              <div className='border-r'>{sub.s_total_ca}</div>
              <div className='border-r'>{sub.second_exam}</div>
              <div className='border-r'>{sub.secondTermPosition}</div>
            </div>
            <div className='grid grid-cols-3 border-r text-center'>
              <div className='border-r'>{sub.current_session_average}</div>
              <div className='border-r'>{sub.classLowest}</div>
              <div className='border-r'>{sub.classHighest}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='border-r'>{sub.remark}</div>
              <div className=''>{sub.sign}</div>
            </div>
          </div>
        ))}

        <div className='flex gap-14 font-semibold text-sm px-20'>
          <div>NO IN CLASS:{classNo}</div>
          <div>TOTAL TERM SCORE: {total_obtained}</div>
          <div>CUMULATIVE SCORE: 1272</div>
          <div>PERCENTAGE: {percentage}%</div>
          <div>GRADE:<br></br>{grade}</div>
        </div>
      </div>
    </div>
  );
}
