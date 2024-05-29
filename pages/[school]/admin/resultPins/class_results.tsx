import { getRequest } from "@/api/apiCall";
import { HOMEROOMS, STUDENTS } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import Layout from "@/components/shared/dashboardLayout/Layout";
import Resultcard from "@/components/shared/resultCard/Resultcard";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

export default function class_results() {
  const uid: any =
    typeof window !== "undefined" && localStorage.getItem("schoolId");
  const { data: classData } = useQuery({
    queryKey: [queryKeys.getclass],
    queryFn: async () => await getRequest({ url: HOMEROOMS(uid) }),
  });

  console.log(classData);

  const [classes, setclasses] = useState([]);
  useEffect(() => {
    setclasses(classData?.data);
  }, [classData]);

  console.log(classes);

  return (
    <Layout>
      <div className=" flex flex-col">
        <div className=" grid grid-cols-3 gap-6 py-3 ">
          {classes &&
            classes.map((cla, index) => (
              <div key={index}>
                <Resultcard
                  className={cla.name}
                  students={cla.female_count + cla.male_count}
                  id={cla.id}
                />
                {/* <Classcard className={cla.name} students={cla.female_count + cla.male_count} id={cla.id}/> */}
                {/* <Pincard studentName={cla.name} studentPin={cla.id}/> */}
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
