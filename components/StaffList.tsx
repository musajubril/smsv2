import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

export default function StaffList() {
  const info = [
    {
      image: <img src="./Avatars (2).png" alt="" />,
      name: "Shakirat Akanji",
      id: "ID:123456",
      Department: "Academic",
      Role: " Teacher",
      Qualification: "Bsc",
      Action : <HiDotsVertical />,
      input : <input type="checkbox" name="" id="" />
    },
    {
      image: <img src="./Avatars (2).png" alt="" />,
      name: "Shakirat Akanji",
      id: "ID:123456",
      Department: "Academic",
      Role: " Teacher",
      Qualification: "Bsc",
      Action : <HiDotsVertical />,
      input : <input type="checkbox" name="" id="" />
    },{
      image: <img src="./Avatars (2).png" alt="" />,
      name: "Shakirat Akanji",
      id: "ID:123456",
      Department: "Academic",
      Role: " Teacher",
      Qualification: "Bsc",
      Action : <HiDotsVertical />,
      input : <input type="checkbox" name="" id="" />
    },{
      image: <img src="./Avatars (2).png" alt="" />,
      name: "Shakirat Akanji",
      id: "ID:123456",
      Department: "Academic",
      Role: " Teacher",
      Qualification: "Bsc",
      Action : <HiDotsVertical />,
      input : <input type="checkbox" name="" id="" />
    },{
      image: <img src="./Avatars (2).png" alt="" />,
      name: "Shakirat Akanji",
      id: "ID:123456",
      Department: "Academic",
      Role: " Teacher",
      Qualification: "Bsc",
      Action : <HiDotsVertical />,
      input : <input type="checkbox" name="" id="" />
    },{
      image: <img src="./Avatars (2).png" alt="" />,
      name: "Shakirat Akanji",
      id: "ID:123456",
      Department: "Academic",
      Role: " Teacher",
      Qualification: "Bsc",
      Action : <HiDotsVertical />,
      input : <input type="checkbox" name="" id="" />
    },{
      image: <img src="./Avatars (2).png" alt="" />,
      name: "Shakirat Akanji",
      id: "ID:123456",
      Department: "Academic",
      Role: " Teacher",
      Qualification: "Bsc",
      Action : <HiDotsVertical />,
      input : <input type="checkbox" name="" id="" />
    },
    ]
  return (
    <div>
      <div className=' px-5  '>
        <div className='bg-[#F5FAFF] p-2 grid grid-cols-6 text-xs font-medium text-[#000D19]'>
         <div className=' flex gap-2 items-center  col-span-2 '>
           <input type="checkbox" name="" id="" className=' w-5 h-5'/>
           <h5 className=' text-xs font-medium text-[#344054]'>Name</h5>
          </div>
          <h1>Department</h1>
          <h1>Role</h1>
          <h1>Qualification</h1>
          <h1 className='flex items-center justify-center'>Action</h1>
          

</div>

    {
      info.map((info, index) => (
          <div className="  " key={index}>
             
              
          <div className=' grid grid-cols-6 pt-5 items-center  px-3 grid2'>
                             <div className=' flex items-center gap-2 col-span-2'>
                              {info.input}
                  <div>{info.image}</div>
                  <div className='flex flex-col'>
                      <h1 className='text-sm font-medium text-[#101928]'>{info.name}</h1>
                      <h1 className='text-xs text-[#475367]' >{info.id}</h1>
          
                  </div>
              </div>
              <div className=' flex-shrink-0'>
              <div className='text-sm font-medium text-[#04326B] bg-[#E3EFFC] px-2  rounded-lg inline-grid '>{info.Department}</div>
              </div>
              <div>{info.Role}</div>
              <div >{info.Qualification}</div>
          
              <div className=' flex justify-center items-center'>
                {info.Action}
          
              </div> 
                              
              </div>
          </div>
    
      ))
    }
    <div className="flex items-center justify-center pt-5">
          <div className=" flex items-center gap-3">
            <div className=" border border-[#D0D5DD] rounded-md p-2 shadow">
              <SlArrowLeft />
            </div>
            <div className=" flex gap-3">
              <div className=" border rounded-md py-1 px-3 items-center">1</div>
              <div className=" py-1 px-3 items-center text-[#D0D5DD]">2</div>
              <div className=" py-1 px-3 items-center text-[#D0D5DD]">3</div>
              <div className=" py-1 px-3 items-center text-[#D0D5DD]">4</div>
              <div className=" py-1 px-3 items-center text-[#D0D5DD]">5</div>
            </div>
            <div className=" border border-[#D0D5DD] rounded-md p-2 shadow">
              <SlArrowRight />
            </div>
          </div>
        </div>
    </div>
 
  

</div>


  )
}
