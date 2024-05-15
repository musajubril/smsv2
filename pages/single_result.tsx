import Layout from '@/components/shared/dashboardLayout/Layout'
import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowLeftLong } from 'react-icons/fa6'
import Button from '@/components/shared/button/Button';
import StaffDropdown from '@/components/shared/dropdown/StaffDropdown';
import Input from '@/components/shared/input/Input';


export default function singleresult() {
    const yearOptions = ['2021/2022', '2022/2023', '2023/2024',]
    const termOptions = ['first', 'second', 'third',]
    const sortOptions = ['Recorded results', 'Alphabetically']
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [showresult, setshowresult] = useState(false);
    const testOptions = ['First', 'Second', 'Third'];

 
    const cards = [
       {
        subjects: "Mathematics",
       },
       {
        subjects: "English",
       },
       {
        subjects: "Chemistry",
       },
       {
        subjects: "Physics",
       },
       {
        subjects: "Economics",
       },
       {
        subjects: "Biology",
       },
       {
        subjects: "Further Mathematics",
       },
       {
        subjects: "Agriculture",
       },
       {
        subjects: "Civic Education",
       },
       {
        subjects: "Physics",
       },
       {
        subjects: "Physics",
       },
       {
        subjects: "Physics",
       },
    ];
 
  return (
    <div>
        <Layout>
          <div className='py-3 '>
            <div className=' flex gap-3 items-center pb-3'>
              <div className=' border border-[#E4E7EC] text-black text-base rounded shadow p-1 items-center'><FaArrowLeftLong />
              </div>
              <div className=' text-[#667185] text-sm font-medium'>Go Back</div>
              <div className=' flex gap-2 items-center text-[#98A2B3] font-medium text-sm'>
                <div>Upload Results /</div>
                <div>SSS 1 /</div>
                <div className=' text-black'>Goodwin Micheal </div>
              </div>

            </div>
            <div className=' flex gap-5 flex-col '>
            <div className=' flex justify-between w-full '>
              <div className=' flex gap-2 font-semibold text-2xl items-center'>
                <div>Goodwin Micheal</div>
                <div className=' text-[#009688]'><GoDotFill /></div>
                <div className=' text-[#009688]'>85%</div>
              </div>
              <div className=' flex gap-3'>
              <div className=' border px-2 py-1 border-[#8FC9FF] flex  rounded items-center'>
                <div className='text-black text-base font-medium'><StaffDropdown options={yearOptions} onSelect={undefined} placeholder={'2023/2024'} /></div>
                {/* <div><IoIosArrowDown /></div> */}
              </div>
                <div>
             <Button text={'Upload Question'} disabled={false} onClick={undefined} intent='primary'  size='base'/> </div>        
           </div>
            </div>
          
            <div className=' flex justify-between w-full items-center '>
                <div className=' w-[35%]'>
                <input
                    type="text"
                    name=""
                    id=""
                    className="w-full border border-[#E4E7EC] py-2 rounded-md outline-none text-sm text-[#667185] pl-2"
                    placeholder="Search..."
                  />    
                </div>
                <div className=' flex gap-4 text-base items-center  '>
                  <div className='  text-black font-semibold'>Filters: </div>
                <StaffDropdown
                  options={termOptions}
                  placeholder="Term"
                  onSelect={undefined} />
                  <StaffDropdown
                  options={sortOptions}
                  placeholder="Sort"
                  onSelect={undefined} />

                </div>
                
            </div>
            <div className=' grid grid-cols-4 gap-5 '>
            {
            cards.map((info, index) => (
                <div className=''key={index}>
                 <div  className={`flex flex-col bg-white-100 pb-3 border rounded-lg shadow border-[#C2E2FF] }`}>
                    <div className=' bg-[#F5FAFF] p-3 text-xl font-medium'>{info.subjects}</div>
                    <div className=' flex flex-col gap-4 px-3 pt-3'>
                        <div className=' flex gap-4'>
                            <div className=' flex flex-col gap-2'>
                            <div className=' text-black font-medium text-sm'>C.A</div>
                            <div >
                            <Input text={'0.0'}
                             name={''} 
                             error={false} 
                             success={false} 
                             disabled={false} 
                             change={function (event: React.ChangeEvent<HTMLInputElement>): void { } } 
                             value={undefined} 
                             size='large'/>
                                  </div>
                                </div>
                                <div className=' flex flex-col gap-2'>
                            <div className=' text-black font-medium text-sm'>Exams</div>
                            <div >
                            <Input text={'0.0'}
                             name={''} 
                             error={false} 
                             success={false} 
                             disabled={false} 
                             change={function (event: React.ChangeEvent<HTMLInputElement>): void { } } 
                             value={undefined}
                             size='large' />
                            </div>
                            </div>
                        </div>
                        <div className=' flex gap-4'>
                            <div className=' flex flex-col gap-2'>
                            <div className=' text-black font-medium text-sm'>Total</div>
                            <div>
                            <Input text={'0.0'}
                             name={''} 
                             error={false} 
                             success={false} 
                             disabled={false} 
                             change={function (): void { } } 
                             value={undefined}
                             size='large' />
                             </div>
                              </div>
                              <div className=' flex flex-col gap-2'>
                            <div className=' text-black font-medium text-sm'>grade</div>
                            <div>
                            <Input text={'0.0'}
                             name={''} 
                             error={false} 
                             success={false} 
                             disabled={false} 
                             change={function (event: React.ChangeEvent<HTMLInputElement>): void { } } 
                             value={undefined}
                             size='large' />
                              </div>
                              </div>
                        </div>
                       <div>
                      
                      <Button text={'Done'} intent='primary' size='small' disabled={false} onClick={undefined}  /> 
                        </div>
                    </div>

                   </div>
                    
                  </div>
            ))}
            </div>

            </div>
            </div>
          
        </Layout>
    </div>
  )
}
