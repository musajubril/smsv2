import React, { useEffect, useState } from 'react';
import Layout from "@/components/shared/dashboardLayout/Layout";
import Button from '@/components/shared/button/Button';
import StaffDropdown from '@/components/shared/dropdown/StaffDropdown';
import Search from '@/components/Search';
import StaffList from '@/components/StaffList';
import { getRequest } from "@/api/apiCall";
import { TEACHERS } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Dropdown from '@/components/shared/dropdown/StaffDropdown';
import Pagination from '@/components/shared/Pagination';

export default function staff_list() {

  const DepartmentOptions = ["All", "Academic", "Non academic"];
  const RoleOptions = ["All", "Administrative Secretary", "Bursar", "Helper", "Janitor", "Teacher"];
  const QualificationOptions = ["All", "Bsc", "HND", "Msc", "OND"];
  const sortOptions = ["All", "Ascending", "Descending"];

  const [off, setOff] = useState(1);

  const uid: any = typeof window !== 'undefined' && localStorage.getItem("schoolId");
  console.log(uid);
  const [staffs, setStaffs] = React.useState([]);
  const { data: staffData } = useQuery({
    queryKey: [queryKeys.getStaffs, uid],
    queryFn: async () => await getRequest({ url: TEACHERS(uid) }),
  });
 const paginate = (pageNumber) => {
    setOff(pageNumber)
  };

  const [filteredStaffs, setFilteredStaffs] = useState(null);

  useEffect(() => {
    setStaffs(staffData?.data);
    setFilteredStaffs(staffData?.data);
  }, [staffData]);

  let school;
  if (typeof window !== 'undefined') {
    school = localStorage.getItem('schoolSlug');
  }

  const handleSelect = (selectedValue, filterType) => {
    if (selectedValue === "All") {
      setFilteredStaffs(staffs);
    } else {
      let filteredList = [...staffs];
      switch (filterType) {
        case 'Department':
          filteredList = staffs.filter((staff) => staff.Department === selectedValue);
          break;
        case 'Role':
          filteredList = staffs.filter((staff) => staff.role === selectedValue);
          break;
        case 'Qualification':
          filteredList = staffs.filter((staff) => staff.Qualification === selectedValue);
          break;
        default:
          break;
      }
      setFilteredStaffs(filteredList);
    }
  };

  const handleSortSelect = (selectedOption) => {
  };
  
  const [searchedStaffs, setSearchedStaffs] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    let searchedList = [...staffs].filter(item => {
      return item.full_name.toLowerCase().includes(searchTerm?.toLowerCase());
    });
    setSearchedStaffs(searchedList);
  };

  return (
    <div>
      <Layout>
        <div className=' flex gap-3 flex-col w-full' >
          <div className=' flex items-center justify-between '>
            <h1 className='text-black text-2xl font-semibold'>Staff</h1>
            <Link href={`/${school}/staff/add`}>
              <Button
                intent="primary"
                size="base"
                text="+ Add New Staff"
                disabled={false}
                onClick={undefined}
              />
            </Link>
          </div>
          <div>
            <div className=' '>
              <div className="md:flex  justify-between">
                <div className='md:w-[30%]'>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full border border-[#E4E7EC] py-2 rounded-md outline-none text-sm text-[#667185] pl-2"
                    placeholder="Search staff..."
                    onChange={e => handleSearch(e)}
                  />
                </div>
                <div className="flex md:gap-3 gap-1">
                  <p className="flex items-center">Filters:</p>
                  <div className="flex items-center gap-3 md:gap-5">
                    <Dropdown
                      options={DepartmentOptions}
                      onSelect={(value) => handleSelect(value, 'Department')}
                      placeholder="Department"
                    />
                    <Dropdown
                      options={RoleOptions}
                      onSelect={(value) => handleSelect(value, 'Role')}
                      placeholder="Role"
                    />
                    <Dropdown
                      options={QualificationOptions}
                      onSelect={(value) => handleSelect(value, 'Qualification')}
                      placeholder="Qualification"
                    />
                    <Dropdown
                      options={sortOptions}
                      onSelect={handleSortSelect}
                      placeholder="Sort"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <StaffList staffs={searchTerm ? searchedStaffs : filteredStaffs} />
        <Pagination
          paginate={paginate}
        ></Pagination>
        </div>
      </Layout>
    </div>
  );
}
