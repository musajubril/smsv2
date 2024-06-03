import React from 'react';

export default function AcademicPerformance() {
  const subjects = [
    { 
      name: 'English', 
      firstTermScore: 69, 
      firstTermGrade: 'C', 
      firstTermPosition: '34TH', 
      secondTermScore: 69, 
      secondTermGrade: 'C', 
      secondTermPosition: '23RD', 
      classAvg: 60, 
      classLowest: 50, 
      classHighest: 89, 
      remarks: 'CREDIT', 
      sign: '' 
    },
    { 
      name: 'Mathematics', 
      firstTermScore: 75, 
      firstTermGrade: 'B', 
      firstTermPosition: '12TH', 
      secondTermScore: 82, 
      secondTermGrade: 'B', 
      secondTermPosition: '10TH', 
      classAvg: 70, 
      classLowest: 55, 
      classHighest: 92, 
      remarks: 'CREDIT',
      sign: '' 
    },
    { name: 
      'Yoruba Language',
      firstTermScore: 85, 
      firstTermGrade: 'A', 
      firstTermPosition: '5TH', 
      secondTermScore: 88, 
      secondTermGrade: 'A', 
      secondTermPosition: '4TH', 
      classAvg: 80, 
      classLowest: 60, 
      classHighest: 95, 
      remarks: 'DISTINCTION', 
      sign: '' 
    },
    { 
      name: 'Christian religion', 
      firstTermScore: 62, 
      firstTermGrade: 'D', 
      firstTermPosition: '40TH', 
      secondTermScore: 70, 
      secondTermGrade: 'C', 
      secondTermPosition: '35TH', 
      classAvg: 65, 
      classLowest: 45, 
      classHighest: 75, 
      remarks: 'PASS', 
      sign: '' 
    },
      { 
        name: 'Islamic religion', 
        firstTermScore: 62, 
        firstTermGrade: 'D', 
        firstTermPosition: '40TH', 
        secondTermScore: 70, 
        secondTermGrade: 'C', 
        secondTermPosition: '35TH', 
        classAvg: 65, 
        classLowest: 45, 
        classHighest: 75, 
        remarks: 'PASS', 
        sign: '' 
      },
  ];

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
            <div className='border-r'>100%</div>
            <div className='border-r'></div>
            <div className='border-r'></div>
          </div>
          <div className='grid grid-cols-3 border-r text-center'>
            <div className='border-r'>100%</div>
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

        {subjects.map((subject, index) => (
          <div key={index} className='grid grid-cols-5 border-b'>
            <div className='border-r'>{subject.name}</div>
            <div className='grid grid-cols-3 border-r border-l'>
              <div className='border-r'>{subject.firstTermScore}</div>
              <div className='border-r'>{subject.firstTermGrade}</div>
              <div className='border-r'>{subject.firstTermPosition}</div>
            </div>
            <div className='grid grid-cols-3 border-r text-center'>
              <div className='border-r'>{subject.secondTermScore}</div>
              <div className='border-r'>{subject.secondTermGrade}</div>
              <div className='border-r'>{subject.secondTermPosition}</div>
            </div>
            <div className='grid grid-cols-3 border-r text-center'>
              <div className='border-r'>{subject.classAvg}</div>
              <div className='border-r'>{subject.classLowest}</div>
              <div className='border-r'>{subject.classHighest}</div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='border-r'>{subject.remarks}</div>
              <div className=''>{subject.sign}</div>
            </div>
          </div>
        ))}

        <div className='flex gap-14 font-semibold text-sm px-20'>
          <div>NO IN CLASS</div>
          <div>TOTAL TERM SCORE: 661</div>
          <div>CUMULATIVE SCORE: 1272</div>
          <div>POSITION: 9TH - 66.1%</div>
          <div>SILVER</div>
        </div>
      </div>
    </div>
  );
}
