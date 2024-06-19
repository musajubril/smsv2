import Layout from '@/components/shared/dashboardLayout/Layout'
import { useRouter } from 'next/router'
import React from 'react'

export default function index() {
    const {student} = useRouter().query
    const pages = [
        'Profile',
        'Class Settings',
        'Course Settings',
        'Attendance Settings',
        'Result Settings',
    ]
    const [page, setPage] = React.useState("Profile")
  return (
    <Layout>
        <div className="flex w-full gap-8">
        <div className="flex flex-col gap-4 pt-5">
            {
                pages.map((item)=>
                <div
                className={`py-2 px-3 flex w-[200px] rounded-lg gap-4 cursor-pointer text-xs font-semibold hover:bg-blue-600 hover:text-blue-100 ${page === item ? 'bg-blue-600 text-blue-100' : 'text-gray-900'}`}
                >
                <div className="text-xs font-normal">{item}</div>
                </div>
                )
            }
      </div>
      <div className="flex-grow pl-2 overflow-y-scroll scrollbar-hidden h-[calc(100vh-100px)]">
        test
      </div>
        </div>
    </Layout>
  )
}
