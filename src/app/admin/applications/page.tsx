"use client";

import ApplicationCard from "@/src/components/application/applicationCard/ApplicationCard";
import Loader from "@/src/components/shared/Loader/Loader";
import { useGetAllApplicationQuery } from "@/src/redux/features/admin/applicationApi";

const page = () => {
  const { data, isLoading } = useGetAllApplicationQuery();
  const allApplications = data?.data;
  console.log("applications", allApplications);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      {allApplications?.map((application) => (
        <ApplicationCard key={application._id} application={application} />
      ))}
    </div>
  );
};

export default page;
