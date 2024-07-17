import { getRequest } from "@/api/apiCall";
import { HOMEROOMS } from "@/api/apiUrl";
import { queryKeys } from "@/api/queryKey";
import Button from "@/components/shared/button/Button";
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

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    if (classData?.data) {
      setClasses(classData.data);
    }
  }, [classData]);

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex justify-between items-center pb-3">
          <p className="font-semibold text-2xl">Class Pins</p>
          <div className="flex gap-4">
            <Button
              intent="primary"
              size="base"
              text="Generate New Pin"
              disabled={false}
              onClick={undefined} className={""}            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-3">
          {classes.map((cla) => (
            <Resultcard
              key={cla.id}
              className={cla.name}
              students={cla.female_count + cla.male_count}
              id={cla.id}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
