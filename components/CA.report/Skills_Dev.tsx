import React from 'react';

export default function SkillsDev() {
  const attributes = [
    {
      category: 'PERSONAL DEV',
      skills: [
        'OBEDIENCE', 
        'HONESTY', 
        'SELF CONTROL', 
        'SELF RELIANCE', 
        'USE OF INITIATIVE'
      ],
    },
    {
      category: 'SENSE OF RESP',
      skills: [
        'PUNCTUALITY', 
        'NEATNESS', 
        'PERSEVERANCE', 
        'ATTENDANCE', 
        'ATTENTIVENESS'
      ],
    },
    {
      category: 'SOCIAL DEV',
      skills: [
        'COURTESY/POLITENESS', 
        'CONSIDERATION FOR OTHERS', 
        'SOCIABILITY/TEAMPLAYER', 
        'PROMPTNESS IN COMPLETING WORK', 
        'ACCEPTS RESPONSIBILITIES'
      ],
    },
    {
      category: 'PSYCHOMOTOR (SKILLS) DEV.',
      skills: [
        'READING AND WRITING SKILLS', 
        'VERBAL COMMUNICATION', 
        'SPORT AND GAME', 
        'INQUISITIVENESS', 
        'DEXTERITY (MUSICAL & ART MATERIALS)'
      ],
    },
  ];

  return (
    <div className='flex flex-col gap-2'>
      <div className='w-full font-medium border'>SKILLS DEVELOPMENT AND BEHAVIOURAL ATTRIBUTES</div>
      <div className='grid grid-cols-4 text-sm'>
        {
        attributes.map((attribute, index) => (
          <div key={index} className='grid grid-cols-3 grid-rows-6 border'>
            <div className='col-span-2 border-b border-r font-medium'>{attribute.category}</div>
            <div className='border-b font-medium'>Points</div>
            {
            attribute.skills.map((skill, i) => (
              <React.Fragment key={i}>
                <div className={`col-span-2 ${i < attribute.skills.length - 1 ? 'border-b' : ''} border-r`}>{skill}</div>
                <div className={`${i < attribute.skills.length - 1 ? 'border-b' : ''}`}>3</div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
